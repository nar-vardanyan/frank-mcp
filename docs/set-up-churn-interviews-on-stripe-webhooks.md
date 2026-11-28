# Set Up a Churn Interview on Stripe Webhooks in About 10 Minutes

**Short answer:** Publish a 10 minute churn study in Frank, click Deploy to Cloudflare on the [Frank Churn Interviews for Stripe](https://github.com/nar-vardanyan/frank-stripe-churn-interviews) repo, paste your keys, add a Stripe webhook endpoint for `customer.subscription.deleted` and `customer.subscription.updated`, then put the signing secret on the worker. Cancel a test subscription to check it. It takes about ten minutes if your Frank, Stripe, Cloudflare and email accounts already exist.

*Last updated: Nov 28, 2026.*

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=set-up-churn-interviews-on-stripe-webhooks), which runs AI-moderated voice interviews with your own customers in 50+ languages. The app on this page is free and MIT licensed.

## What do you need before you start?

- A Frank account. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required.
- A Stripe account (test mode is fine to start).
- A Cloudflare account.
- A Resend API key, or an SMTP server.
- Two random secrets. Generate each with `openssl rand -hex 32`.

## Step 1: Publish a churn study in Frank

Create one study for customers who cancel. Set the length to 10 minutes and publish it. Copy the interview link, which looks like `https://app.hifrank.ai/research/<id>`. Under API keys, create a secret key and copy it (Frank shows it once).

## Step 2: Deploy the worker

Click [Deploy to Cloudflare](https://deploy.workers.cloudflare.com/?url=https://github.com/nar-vardanyan/frank-stripe-churn-interviews). When it asks, paste:

| Name | Value |
|---|---|
| `FRANK_INTERVIEW_URL` | The interview link from step 1 |
| `FRANK_API_KEY` | The Frank secret key |
| `FOUNDER_NAME` | The name that signs the email |
| `PRODUCT_NAME` | Your product name |
| `FROM_EMAIL` | The sending address |
| `RESEND_API_KEY` | Your Resend key |
| `OPTOUT_SECRET` | Random secret |
| `CRON_SECRET` | Random secret |
| `STRIPE_WEBHOOK_SECRET` | `whsec_replace_me` for now |
| `STRIPE_SECRET_KEY` | A Stripe key that can read customers and subscriptions |

Cloudflare gives you a worker URL like `https://frank-churn-interviews.<account>.workers.dev`.

## Step 3: Add the Stripe webhook

In the Stripe Dashboard, add an endpoint for `https://<your-worker-host>/webhook`. Subscribe to `customer.subscription.deleted` and `customer.subscription.updated`. Copy the signing secret.

## Step 4: Set the real secrets

```bash
npx wrangler secret put STRIPE_WEBHOOK_SECRET
npx wrangler secret put PUBLIC_BASE_URL
```

`PUBLIC_BASE_URL` is the worker origin with no path. It is used for the opt-out link.

## Step 5: Test it

Cancel a test subscription in Stripe test mode. The email arrives after the delay, one hour by default. To test locally without waiting:

```bash
cp .env.example .env
npm install
npm run dev
stripe listen --forward-to localhost:8787/webhook
stripe trigger customer.subscription.deleted \
  --override customer:email=you@example.com \
  --override customer:name="Test Customer"
```

`.env.example` sets `TEST_MODE=true`, `SEND_DELAY_SECONDS=0` and `EMAIL_PROVIDER=log`, so the email is printed instead of sent. `npm run demo` replays a signed webhook twice and shows the second one is ignored.

## Step 6: Edit the email

Change `emails/churn.txt` and deploy again. Keep it short, signed by a person, with one link.

## Settings you might change

- `SEND_DELAY_SECONDS`: wait before sending. Default 3600.
- `INVITE_ON_CANCEL_AT_PERIOD_END`: set to `false` to wait for the subscription to actually end.
- `EXCLUDE_EMAILS` and `EXCLUDE_CUSTOMER_IDS`: skip internal and test accounts.
- `EMAIL_PROVIDER=smtp` with `SMTP_*` settings instead of Resend.

## Prefer no code?

The [n8n churn interview template](integrations/n8n-churn-interview/) does a simpler version of the same flow in n8n.

## Start

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://deploy.workers.cloudflare.com/?url=https://github.com/nar-vardanyan/frank-stripe-churn-interviews">Deploy to Cloudflare</a></p>

Create the study first at [hifrank.ai](https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=set-up-churn-interviews-on-stripe-webhooks). Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. Works with ChatGPT, Claude, Grok and Muse.

## FAQ

### How long does it take to set up churn interviews on Stripe webhooks?

About ten minutes with Frank Churn Interviews for Stripe, if your Frank, Stripe, Cloudflare and email accounts already exist: publish a study, deploy the worker, add the webhook, set the signing secret.

### Which Stripe webhook events should I subscribe to?

customer.subscription.deleted and customer.subscription.updated. The app uses the update only when cancel_at_period_end changes to true.

### Can I test it without sending real emails?

Yes. Run it locally with TEST_MODE=true and EMAIL_PROVIDER=log, forward events with stripe listen, and use stripe trigger customer.subscription.deleted. The email is printed to the log.

### Do I need a Stripe live key?

No for testing. Use a test-mode key. In production, a restricted key that can read Customers and Subscriptions is enough.

### Can I use SMTP instead of Resend?

Yes. Set EMAIL_PROVIDER=smtp and the SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and SMTP_SECURE settings.

## Related

- [Stripe integration for churn interviews](stripe-integration-for-churn-interviews.html)
- [Stripe churn interviews with Frank (app docs)](stripe-churn-interviews.html)
- [How to automatically interview customers who cancel in Stripe](how-to-automatically-interview-customers-who-cancel-in-stripe.html)
- [Handle customer.subscription.deleted in a Cloudflare Worker](stripe-customer-subscription-deleted-webhook-cloudflare-worker.html)
- [First study quickstart](first-study-quickstart.html)
- [Churn interviews](churn-interviews.html)
- [ChatGPT app for churn interviews](chatgpt-app-for-churn-interviews.html)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Frank AI Researcher docs",
      "item": "https://nar-vardanyan.github.io/frank-mcp/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Set Up a Churn Interview on Stripe Webhooks in About 10 Minutes",
      "item": "https://nar-vardanyan.github.io/frank-mcp/set-up-churn-interviews-on-stripe-webhooks.html"
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": [
    "WebPage",
    "TechArticle"
  ],
  "headline": "Set Up a Churn Interview on Stripe Webhooks in About 10 Minutes",
  "name": "Set Up a Churn Interview on Stripe Webhooks in About 10 Minutes",
  "url": "https://nar-vardanyan.github.io/frank-mcp/set-up-churn-interviews-on-stripe-webhooks.html",
  "description": "Step by step: deploy the free Frank Churn Interviews for Stripe worker to Cloudflare, connect a Stripe webhook for customer.subscription.deleted, and test it with the Stripe CLI before going live.",
  "datePublished": "2026-11-28",
  "dateModified": "2026-11-28",
  "author": {
    "@type": "Organization",
    "name": "Frank AI Researcher",
    "url": "https://www.hifrank.ai"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Frank AI Researcher",
    "url": "https://www.hifrank.ai"
  },
  "about": [
    {
      "@type": "SoftwareApplication",
      "name": "Frank Churn Interviews for Stripe",
      "url": "https://github.com/nar-vardanyan/frank-stripe-churn-interviews",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Cloudflare Workers",
      "license": "https://opensource.org/licenses/MIT",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to set up churn interviews on Stripe webhooks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "About ten minutes with Frank Churn Interviews for Stripe, if your Frank, Stripe, Cloudflare and email accounts already exist: publish a study, deploy the worker, add the webhook, set the signing secret."
      }
    },
    {
      "@type": "Question",
      "name": "Which Stripe webhook events should I subscribe to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "customer.subscription.deleted and customer.subscription.updated. The app uses the update only when cancel_at_period_end changes to true."
      }
    },
    {
      "@type": "Question",
      "name": "Can I test it without sending real emails?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Run it locally with TEST_MODE=true and EMAIL_PROVIDER=log, forward events with stripe listen, and use stripe trigger customer.subscription.deleted. The email is printed to the log."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a Stripe live key?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No for testing. Use a test-mode key. In production, a restricted key that can read Customers and Subscriptions is enough."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use SMTP instead of Resend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Set EMAIL_PROVIDER=smtp and the SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and SMTP_SECURE settings."
      }
    }
  ]
}
</script>
