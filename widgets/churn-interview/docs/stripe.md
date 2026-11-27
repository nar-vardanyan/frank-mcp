# Using cancel-reasons with Stripe

Two common setups. In both, your Stripe secret key stays on your server. The widget runs in the browser and only sends the customer's answer to you.

API references used below:

- Customer portal deep links (`flow_data[type]=subscription_cancel`): https://docs.stripe.com/customer-management/portal-deep-links
- Create a portal session (`POST /v1/billing_portal/sessions`): https://docs.stripe.com/api/customer_portal/sessions/create
- Cancel a subscription (`DELETE /v1/subscriptions/:id`): https://docs.stripe.com/api/subscriptions/cancel
- Update a subscription (`cancel_at_period_end`, `cancellation_details`): https://docs.stripe.com/api/subscriptions/update

## The default reasons already match Stripe

The default reason values are the values Stripe accepts for `cancellation_details.feedback`:

`too_expensive`, `missing_features`, `switched_service`, `unused`, `too_complex`, `low_quality`, `customer_service`, `other`.

So `result.reason` can go straight into `cancellation_details.feedback`, and `result.comment` into `cancellation_details.comment`. If you use your own reason values, map them to one of these on your server (or send `other` and put your label in the comment). Always validate on the server: never trust a value from the browser.

## Setup 1: Customer Portal redirect

Your "Cancel subscription" button goes to your own backend route, which creates a portal session that deep links into the cancel flow and redirects the customer there.

### Browser

```html
<form method="post" action="/billing/cancel">
  <button id="cancel" type="submit">Cancel subscription</button>
</form>

<script src="https://cdn.jsdelivr.net/gh/nar-vardanyan/frank-mcp@main/widgets/churn-interview/dist/cancel-reasons.min.js"></script>
<script>
  CancelReasons.attach('#cancel', {
    webhookUrl: '/billing/cancel-reason', // your own endpoint, same origin
  });
</script>
```

The customer answers (or skips), the answer is POSTed to `/billing/cancel-reason`, and then the original form submit continues to `/billing/cancel`.

### Server (Node, Express, `stripe` package)

```js
import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // server only
const app = express();
app.use(express.json());

const FEEDBACK = new Set(['too_expensive', 'missing_features', 'switched_service', 'unused', 'too_complex', 'low_quality', 'customer_service', 'other']);

// 1. Store the answer. Look the subscription up from the logged-in user, not from the request body.
app.post('/billing/cancel-reason', requireUser, async (req, res) => {
  const { reason, comment, skipped } = req.body || {};
  await db.cancelReasons.insert({ userId: req.user.id, reason, comment, skipped, at: new Date() });

  // Optional: also keep it on the Stripe subscription.
  if (!skipped && req.user.stripeSubscriptionId) {
    await stripe.subscriptions.update(req.user.stripeSubscriptionId, {
      cancellation_details: {
        feedback: FEEDBACK.has(reason) ? reason : undefined,
        comment: typeof comment === 'string' ? comment.slice(0, 500) : undefined,
      },
    });
  }
  res.sendStatus(204);
});

// 2. Redirect to the portal's cancel flow.
app.post('/billing/cancel', requireUser, async (req, res) => {
  const session = await stripe.billingPortal.sessions.create({
    customer: req.user.stripeCustomerId,
    return_url: 'https://example.com/account',
    flow_data: {
      type: 'subscription_cancel',
      subscription_cancel: { subscription: req.user.stripeSubscriptionId },
      after_completion: { type: 'redirect', redirect: { return_url: 'https://example.com/account/cancelled' } },
    },
  });
  res.redirect(303, session.url);
});
```

Notes:

- The answer is sent before the customer reaches the portal, so it records intent. A customer can still back out in the portal. Confirm the actual cancellation from your Stripe webhooks (for example `customer.subscription.updated` with `cancel_at_period_end`, or `customer.subscription.deleted`).
- The Customer Portal can collect its own cancellation reason (portal configuration `features.subscription_cancel.cancellation_reason`). If you use this widget, turn that off so customers are not asked twice.
- The `slice(0, 500)` above is just a conservative cap on what you store. Check the API reference if you need longer comments.

## Setup 2: Your own cancel flow (Stripe API from your backend)

Use `onContinue` to call your backend yourself, with the answer in the same request.

### Browser

```html
<button id="cancel" type="button">Cancel subscription</button>

<script type="module">
  import { attach } from 'https://cdn.jsdelivr.net/gh/nar-vardanyan/frank-mcp@main/widgets/churn-interview/dist/cancel-reasons.min.mjs';

  attach('#cancel', {
    onContinue: async (result) => {
      await fetch('/api/subscription/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: result.reason, comment: result.comment }),
      });
      location.href = '/account/cancelled';
    },
  });
</script>
```

### Server

```js
app.post('/api/subscription/cancel', requireUser, async (req, res) => {
  const { reason, comment } = req.body || {};
  const cancellation_details = {
    feedback: FEEDBACK.has(reason) ? reason : undefined,
    comment: typeof comment === 'string' && comment ? comment.slice(0, 500) : undefined,
  };

  // Cancel at the end of the paid period:
  await stripe.subscriptions.update(req.user.stripeSubscriptionId, {
    cancel_at_period_end: true,
    cancellation_details,
  });

  // Or cancel right away instead:
  // await stripe.subscriptions.cancel(req.user.stripeSubscriptionId, { cancellation_details });

  res.sendStatus(204);
});
```

Never call the Stripe API from the browser with a secret or restricted key. The widget does not need any Stripe key.
