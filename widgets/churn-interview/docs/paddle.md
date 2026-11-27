# Using cancel-reasons with Paddle Billing

Your Paddle API key stays on your server. The widget runs in the browser and only sends the customer's answer to you.

API references used below:

- Cancel a subscription (`POST /subscriptions/{subscription_id}/cancel`): https://developer.paddle.com/api-reference/subscriptions/cancel-subscription
- Update a subscription (`PATCH /subscriptions/{subscription_id}`, `custom_data`): https://developer.paddle.com/api-reference/subscriptions/update-subscription
- Authentication (Bearer API key): https://developer.paddle.com/api-reference/about/authentication
- Paddle Retain cancellation flows: https://developer.paddle.com/paddle-js/methods/paddle-retain-initcancellationflow

Base URLs: `https://api.paddle.com` (live) and `https://sandbox-api.paddle.com` (sandbox).

## Setup 1: Cancel from your backend with the Paddle API

### Browser

```html
<button id="cancel" type="button">Cancel subscription</button>

<script src="https://cdn.jsdelivr.net/gh/nar-vardanyan/frank-mcp@main/widgets/churn-interview/dist/cancel-reasons.min.js"></script>
<script>
  CancelReasons.attach('#cancel', {
    onContinue: async function (result) {
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

### Server (Node 18+, plain `fetch`)

```js
const PADDLE_API = process.env.PADDLE_API_BASE || 'https://api.paddle.com';
const headers = {
  Authorization: `Bearer ${process.env.PADDLE_API_KEY}`, // server only
  'Content-Type': 'application/json',
};

app.post('/api/subscription/cancel', requireUser, async (req, res) => {
  const subId = req.user.paddleSubscriptionId; // from your database, not from the browser
  const { reason, comment } = req.body || {};

  // 1. Schedule the cancel at the end of the billing period.
  //    Use { effective_from: 'immediately' } to cancel now. Paused subscriptions can only be canceled immediately.
  const cancel = await fetch(`${PADDLE_API}/subscriptions/${subId}/cancel`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ effective_from: 'next_billing_period' }),
  });
  if (!cancel.ok) return res.status(502).send('Cancel failed');

  // 2. Optional: keep the answer on the subscription as custom_data.
  //    Read the subscription first and send its existing custom_data keys too, so you don't lose them.
  const current = await fetch(`${PADDLE_API}/subscriptions/${subId}`, { headers }).then((r) => r.json());
  await fetch(`${PADDLE_API}/subscriptions/${subId}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      custom_data: {
        ...(current.data && current.data.custom_data),
        cancel_reason: typeof reason === 'string' ? reason.slice(0, 50) : null,
        cancel_comment: typeof comment === 'string' ? comment.slice(0, 500) : null,
      },
    }),
  });

  // 3. Store it in your own database too.
  await db.cancelReasons.insert({ userId: req.user.id, reason, comment, at: new Date() });
  res.sendStatus(204);
});
```

When you cancel at the end of the period, Paddle creates a `scheduled_change` and the subscription stays `active` until then. A canceled subscription can't be reinstated.

## Setup 2: Paddle's hosted cancel page

Each subscription entity has `management_urls.cancel`, a Paddle-hosted page where the customer cancels. Put the widget in front of a link to it:

```html
<a id="cancel" href="{{ subscription.management_urls.cancel }}">Cancel subscription</a>
<script src="https://cdn.jsdelivr.net/gh/nar-vardanyan/frank-mcp@main/widgets/churn-interview/dist/cancel-reasons.min.js"></script>
<script>CancelReasons.attach('#cancel', { webhookUrl: '/api/cancel-reason' });</script>
```

The answer reaches `/api/cancel-reason` before the customer leaves for Paddle, so it records intent. Confirm actual cancellations with Paddle webhooks.

## If you use Paddle Retain cancellation flows

`Paddle.Retain.initCancellationFlow()` shows Paddle's own cancellation flow, which already asks for a cancellation reason and schedules the cancellation in Paddle Billing if the customer proceeds. Use either Retain's flow or this widget for that step, not both, so customers are not asked twice. Note from Paddle's docs: Retain features aren't loaded on sandbox accounts.
