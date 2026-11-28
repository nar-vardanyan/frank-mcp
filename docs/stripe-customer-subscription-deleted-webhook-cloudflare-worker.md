# Handle the Stripe customer.subscription.deleted Webhook in a Cloudflare Worker

**Short answer:** Read the raw request body, verify the `Stripe-Signature` header with an HMAC-SHA256 of `timestamp.body` using your signing secret (WebCrypto works in Workers), reject old timestamps, then act on `customer.subscription.deleted`. If customers cancel at period end, also watch `customer.subscription.updated` for `cancel_at_period_end` changing to true, and dedupe so one cancellation triggers one action. The open-source [Frank Churn Interviews for Stripe](https://github.com/nar-vardanyan/frank-stripe-churn-interviews) worker does exactly this, MIT licensed.

*Last updated: Nov 28, 2026.*

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-customer-subscription-deleted-webhook-cloudflare-worker). The worker on this page uses these events to invite canceled customers to a short voice interview, but the webhook handling applies to any follow-up you want to run when a subscription ends.

## When does Stripe send customer.subscription.deleted?

When a subscription ends ([Stripe event types](https://docs.stripe.com/api/events/types)). That is not always the moment the customer clicks cancel. If they cancel at period end, Stripe first sends `customer.subscription.updated` with `cancel_at_period_end: true`, and sends `customer.subscription.deleted` when the period runs out. If you want to reach people while the decision is fresh, use the update event.

## How do you verify the Stripe signature in a Worker?

The header looks like `t=1700000000,v1=<hex>`. Compute HMAC-SHA256 over `t + "." + rawBody` with the signing secret and compare it with each `v1` value in constant time. This is the check from the repo's `src/stripe.ts`, shortened:

```ts
async function hmacHex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function verifyStripeSignature(payload: string, header: string | null,
    secret: string, nowSeconds: number, toleranceSeconds = 300) {
  if (!header) return false;
  const parts = Object.fromEntries(header.split(",").map((p) => p.trim().split("=")));
  const t = Number(parts.t);
  if (!t || Math.abs(nowSeconds - t) > toleranceSeconds) return false;
  const expected = await hmacHex(secret, `${t}.${payload}`);
  const sigs = header.split(",").filter((p) => p.trim().startsWith("v1=")).map((p) => p.trim().slice(3));
  return sigs.some((s) => timingSafeEqual(s, expected));
}
```

Read the body with `await request.text()` before parsing JSON. Parsing and re-serializing changes the bytes and the check fails. If you prefer the Stripe SDK, `stripe.webhooks.constructEventAsync` with `Stripe.createSubtleCryptoProvider()` does the same check in Workers ([Cloudflare blog](https://blog.cloudflare.com/announcing-stripe-support-in-workers/)). The repo has no Stripe SDK dependency.

## How do you tell a real cancellation from other updates?

`customer.subscription.updated` fires for many changes. Look at `data.previous_attributes`. Treat it as a cancellation only when `cancel_at_period_end` is in `previous_attributes`, was false, and is now true. If it goes from true back to false and the status is not `canceled`, the customer changed their mind, so drop any pending follow-up.

## How do you avoid sending twice?

Stripe retries webhooks until you return a 2xx, and a period-end cancel produces two events. Store the subscription id with a marker such as `deleted:<canceled_at>` or `period_end:<cancel_at>`, and skip a subscription you have already queued or sent. The repo keeps this in a Durable Object with SQLite storage.

## How do you delay the follow-up?

Return 200 to Stripe right away and queue the work. The repo stores a `send_at` time and a cron trigger runs every minute (`"crons": ["* * * * *"]` in `wrangler.jsonc`) to send whatever is due. With `SEND_DELAY_SECONDS=0` it sends during the request instead.

## What data should you read at send time?

Fetch the subscription and customer from the Stripe API when the follow-up is due, not when the event arrives. That way you get the current email, and you can read `cancellation_details.feedback` and `cancellation_details.comment`, the plan and the start date for tenure. The repo does not store any of these, only ids, email and send status.

## Deploy the full worker

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://deploy.workers.cloudflare.com/?url=https://github.com/nar-vardanyan/frank-stripe-churn-interviews">Deploy to Cloudflare</a></p>

Source: [https://github.com/nar-vardanyan/frank-stripe-churn-interviews](https://github.com/nar-vardanyan/frank-stripe-churn-interviews). Tests cover signature checks, idempotency, the delay and the template (`npm test`). To use it for churn interviews, create a study at [hifrank.ai](https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-customer-subscription-deleted-webhook-cloudflare-worker). Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. Works with ChatGPT, Claude, Grok and Muse.

## FAQ

### What is the Stripe customer.subscription.deleted event?

A webhook event Stripe sends when a customer's subscription ends. For cancel-at-period-end subscriptions, it arrives at the end of the period, not when the customer clicks cancel.

### How do I verify a Stripe webhook signature in a Cloudflare Worker?

Read the raw body, compute HMAC-SHA256 of the timestamp, a dot and the body with your signing secret using crypto.subtle, compare it in constant time with the v1 values in the Stripe-Signature header, and reject timestamps outside your tolerance. The Stripe SDK's constructEventAsync with createSubtleCryptoProvider also works.

### How do I detect cancel_at_period_end in a webhook?

On customer.subscription.updated, check that cancel_at_period_end is present in data.previous_attributes, was false, and is now true on the subscription object.

### Why does my Stripe signature check fail in Workers?

Usually because the body was parsed as JSON before verification. Verify against the exact text from request.text(). Also check that you use the signing secret for that endpoint and that the server clock is within the tolerance.

### Is there an open-source example?

Yes. Frank Churn Interviews for Stripe is an MIT-licensed Cloudflare Worker with signature verification, deduplication, a Durable Object store, a cron-based delay and tests.

## Related

- [Stripe integration for churn interviews](stripe-integration-for-churn-interviews.html)
- [Set up churn interviews on Stripe webhooks](set-up-churn-interviews-on-stripe-webhooks.html)
- [Stripe churn interviews with Frank (app docs)](stripe-churn-interviews.html)
- [How to automatically interview customers who cancel in Stripe](how-to-automatically-interview-customers-who-cancel-in-stripe.html)
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
      "name": "Handle the Stripe customer.subscription.deleted Webhook in a Cloudflare Worker",
      "item": "https://nar-vardanyan.github.io/frank-mcp/stripe-customer-subscription-deleted-webhook-cloudflare-worker.html"
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
  "headline": "Handle the Stripe customer.subscription.deleted Webhook in a Cloudflare Worker",
  "name": "Handle the Stripe customer.subscription.deleted Webhook in a Cloudflare Worker",
  "url": "https://nar-vardanyan.github.io/frank-mcp/stripe-customer-subscription-deleted-webhook-cloudflare-worker.html",
  "description": "How to receive Stripe's customer.subscription.deleted webhook in a Cloudflare Worker: verify the signature with WebCrypto, handle cancel_at_period_end, dedupe repeat events, and delay the follow-up. MIT code from an open-source app.",
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
      "name": "What is the Stripe customer.subscription.deleted event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A webhook event Stripe sends when a customer's subscription ends. For cancel-at-period-end subscriptions, it arrives at the end of the period, not when the customer clicks cancel."
      }
    },
    {
      "@type": "Question",
      "name": "How do I verify a Stripe webhook signature in a Cloudflare Worker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Read the raw body, compute HMAC-SHA256 of the timestamp, a dot and the body with your signing secret using crypto.subtle, compare it in constant time with the v1 values in the Stripe-Signature header, and reject timestamps outside your tolerance. The Stripe SDK's constructEventAsync with createSubtleCryptoProvider also works."
      }
    },
    {
      "@type": "Question",
      "name": "How do I detect cancel_at_period_end in a webhook?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On customer.subscription.updated, check that cancel_at_period_end is present in data.previous_attributes, was false, and is now true on the subscription object."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my Stripe signature check fail in Workers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually because the body was parsed as JSON before verification. Verify against the exact text from request.text(). Also check that you use the signing secret for that endpoint and that the server clock is within the tolerance."
      }
    },
    {
      "@type": "Question",
      "name": "Is there an open-source example?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Frank Churn Interviews for Stripe is an MIT-licensed Cloudflare Worker with signature verification, deduplication, a Durable Object store, a cron-based delay and tests."
      }
    }
  ]
}
</script>
