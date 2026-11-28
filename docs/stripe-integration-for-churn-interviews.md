# Stripe Integration for Churn Interviews: Frank Churn Interviews for Stripe

**Short answer:** Frank Churn Interviews for Stripe is a free, open-source app (MIT) that listens for Stripe subscription cancellations and emails the customer a link to a 10 minute voice interview with Frank AI Researcher. It runs as a Cloudflare Worker you deploy yourself with the Deploy to Cloudflare button. Frank receives the customer's plan, tenure and Stripe cancellation reason as a private note, so the interview can start from what you already know.

*Last updated: Nov 28, 2026.*

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-integration-for-churn-interviews), a voice-first product that runs AI-moderated voice interviews with your own customers in 50+ languages. This page covers the Stripe app. It is an independent open-source project, not a Stripe product and not affiliated with Stripe.

- Source code: [github.com/nar-vardanyan/frank-stripe-churn-interviews](https://github.com/nar-vardanyan/frank-stripe-churn-interviews)
- One-click deploy: [Deploy to Cloudflare](https://deploy.workers.cloudflare.com/?url=https://github.com/nar-vardanyan/frank-stripe-churn-interviews)
- Full app docs: [Stripe churn interviews with Frank](stripe-churn-interviews.html)

## What does the Stripe integration do?

1. Stripe sends `customer.subscription.deleted` to the worker. If you leave the option on, it also acts on `customer.subscription.updated` when `cancel_at_period_end` flips to true.
2. The worker checks the Stripe signature, skips anyone on your exclude or opt-out list, and skips a cancellation it has already handled.
3. It waits. The default delay is 1 hour.
4. At send time it reads the customer and subscription from Stripe, then tells Frank who the person is: plan, tenure in days, and the cancellation reason and comment if Stripe has them.
5. It emails your plain-text note, signed with your name, with the study's interview link.
6. The customer talks to Frank when they have 10 minutes. You read the transcript in Frank.

One cancellation produces one email, even when Stripe sends both the "cancels at period end" event and the later delete event.

## What do you need?

- A Frank account with one published churn study. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required.
- A Stripe account with subscriptions.
- A Cloudflare account (the worker and its Durable Object run there).
- Resend or any SMTP server to send the email.

Setup takes about ten minutes. The step by step guide is [Set up churn interviews on Stripe webhooks](set-up-churn-interviews-on-stripe-webhooks.html).

## What does Stripe already give you, and what does this add?

Stripe's customer portal can collect a cancellation reason. In the portal settings, you can select the reasons that your customers see from Stripe's list, and if a customer selects Other reason they can optionally enter additional free text ([Stripe docs](https://docs.stripe.com/customer-management/cancellation-page)). Stripe also reports churn rates. That tells you which box people tick. A short interview tells you what happened before they ticked it: the trigger, what they tried, and what they use now. The two work together, and the app passes Stripe's reason to Frank so the interview builds on it. See [Stripe cancellation survey vs churn interview](stripe-cancellation-survey-vs-interview.html).

## Where does it fit next to cancel-flow tools?

Cancel-flow tools such as [Churnkey](https://churnkey.co/), [ProsperStack](https://prosperstack.com/solutions/cancellation-flows/) and [Raaft](https://raaft.io/pricing) sit in front of the cancel button, ask a survey question and show save offers like a pause or a discount. This app does none of that. It runs after the cancellation and only asks to learn. If you already use a cancel-flow tool, you can keep it and add the interview after it.

## What does it store?

The worker stores the Stripe customer id, subscription id, email address and send status, so it never emails the same cancellation twice. It does not store the plan name, tenure, card data or the cancellation comment. Those are read from Stripe at send time and passed to Frank as a private participant note. Interview answers stay in your Frank account. Every email can carry an opt-out link.

## What it does not do

- **No save offers or discounts.** The email asks for an interview, nothing else.
- **No recruiting.** It only emails your own customers who canceled.
- **Voice interviews only.** No video or text chat interviews.
- **No payment recovery.** Failed-payment churn needs dunning, which this app does not do.

## Start

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://deploy.workers.cloudflare.com/?url=https://github.com/nar-vardanyan/frank-stripe-churn-interviews">Deploy to Cloudflare</a></p>

Create your churn study at [hifrank.ai](https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-integration-for-churn-interviews). Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. Works with ChatGPT, Claude, Grok and Muse. Frank is also [available as an app in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168).

## FAQ

### Does Frank integrate with Stripe?

Yes, through Frank Churn Interviews for Stripe, a free open-source app (MIT). It listens for Stripe subscription cancellations and emails the customer a link to a short Frank voice interview, with plan, tenure and cancel reason attached for the interviewer.

### Is this a Stripe app from the Stripe App Marketplace?

No. It is an independent open-source Cloudflare Worker that you deploy to your own Cloudflare account. It is not a Stripe product and is not affiliated with Stripe.

### Which Stripe events does it use?

customer.subscription.deleted, and customer.subscription.updated when cancel_at_period_end changes to true. Both can be turned off separately.

### How long after a cancellation is the email sent?

One hour by default. Set SEND_DELAY_SECONDS to change it, or to 0 to send during the webhook request.

### What does it cost?

The app is free and MIT licensed. You pay for your own Cloudflare, email and Frank usage. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required.

### Does it work with the Stripe customer portal cancellation reason?

Yes. If the customer chose a reason or wrote a comment, the app reads it from the subscription's cancellation_details at send time and passes it to Frank as a private note.

## Related

- [Stripe churn interviews with Frank (app docs)](stripe-churn-interviews.html)
- [How to automatically interview customers who cancel in Stripe](how-to-automatically-interview-customers-who-cancel-in-stripe.html)
- [Stripe cancellation survey vs churn interview](stripe-cancellation-survey-vs-interview.html)
- [Set up churn interviews on Stripe webhooks](set-up-churn-interviews-on-stripe-webhooks.html)
- [Handle customer.subscription.deleted in a Cloudflare Worker](stripe-customer-subscription-deleted-webhook-cloudflare-worker.html)
- [Churn interviews](churn-interviews.html)
- [ChatGPT app for churn interviews](chatgpt-app-for-churn-interviews.html)
- [Send a churn interview invite from n8n](integrations/n8n-churn-interview/)
- [Cancel-page churn survey widget](tools/churn-interview-widget/)

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
      "name": "Stripe Integration for Churn Interviews: Frank Churn Interviews for Stripe",
      "item": "https://nar-vardanyan.github.io/frank-mcp/stripe-integration-for-churn-interviews.html"
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
  "headline": "Stripe Integration for Churn Interviews: Frank Churn Interviews for Stripe",
  "name": "Stripe Integration for Churn Interviews: Frank Churn Interviews for Stripe",
  "url": "https://nar-vardanyan.github.io/frank-mcp/stripe-integration-for-churn-interviews.html",
  "description": "An open-source, MIT-licensed Cloudflare Worker that emails customers who cancel a Stripe subscription a short Frank AI Researcher voice interview link, with plan, tenure and cancel reason attached. Deploy with one button.",
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
      "name": "Does Frank integrate with Stripe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, through Frank Churn Interviews for Stripe, a free open-source app (MIT). It listens for Stripe subscription cancellations and emails the customer a link to a short Frank voice interview, with plan, tenure and cancel reason attached for the interviewer."
      }
    },
    {
      "@type": "Question",
      "name": "Is this a Stripe app from the Stripe App Marketplace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. It is an independent open-source Cloudflare Worker that you deploy to your own Cloudflare account. It is not a Stripe product and is not affiliated with Stripe."
      }
    },
    {
      "@type": "Question",
      "name": "Which Stripe events does it use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "customer.subscription.deleted, and customer.subscription.updated when cancel_at_period_end changes to true. Both can be turned off separately."
      }
    },
    {
      "@type": "Question",
      "name": "How long after a cancellation is the email sent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One hour by default. Set SEND_DELAY_SECONDS to change it, or to 0 to send during the webhook request."
      }
    },
    {
      "@type": "Question",
      "name": "What does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The app is free and MIT licensed. You pay for your own Cloudflare, email and Frank usage. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work with the Stripe customer portal cancellation reason?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If the customer chose a reason or wrote a comment, the app reads it from the subscription's cancellation_details at send time and passes it to Frank as a private note."
      }
    }
  ]
}
</script>
