# How to Automatically Interview Customers Who Cancel in Stripe

**Short answer:** Point a Stripe webhook for `customer.subscription.deleted` at a small worker that waits about an hour, then emails the customer a personal note from you with a link to a 10 minute voice interview. Frank AI Researcher runs the interview, so nobody has to book a call. The free, open-source [Frank Churn Interviews for Stripe](https://github.com/nar-vardanyan/frank-stripe-churn-interviews) app does all of this and deploys to Cloudflare with one button.

*Last updated: Nov 28, 2026.*

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=how-to-automatically-interview-customers-who-cancel-in-stripe), which runs AI-moderated voice interviews with your own customers in 50+ languages. We published this app so that churn interviews can start without anyone booking a call.

## Why interview customers who cancel?

A cancellation reason tells you which option someone picked. An interview tells you what led there: when they first thought about leaving, what they tried, who else was involved, and what they use now. You only need a handful of those stories to see a pattern, and the first days after a cancellation are when people remember them best.

## What has to happen, step by step?

1. **Catch the cancellation.** Stripe sends `customer.subscription.deleted` when a subscription ends. If customers cancel at period end, Stripe sends `customer.subscription.updated` with `cancel_at_period_end: true` first, and the delete event only when the period runs out. Decide which one starts the interview. The app can use both and still send one email.
2. **Verify the webhook.** Check the `Stripe-Signature` header against your signing secret before doing anything else.
3. **Skip people you should not email.** Internal accounts, test customers, anyone who opted out, and any cancellation you already handled.
4. **Wait a little.** An email that lands seconds after the cancel button feels automated. The app waits one hour by default.
5. **Collect context.** Read the plan, start date and `cancellation_details` from Stripe at send time.
6. **Send a short note from a person.** Plain text, signed by the founder, one link, one sentence about time.
7. **Let an AI interviewer run the conversation.** The customer opens the link and talks when they have 10 minutes. Frank asks follow-up questions and you read the transcript later.

## How do you set it up with the open-source app?

1. In Frank, create a churn study, set the length to 10 minutes, publish it, and copy the interview link. Create an API key.
2. Click [Deploy to Cloudflare](https://deploy.workers.cloudflare.com/?url=https://github.com/nar-vardanyan/frank-stripe-churn-interviews) and paste the values it asks for.
3. In Stripe, add a webhook endpoint for `https://<your-worker>/webhook` with `customer.subscription.deleted` and `customer.subscription.updated`.
4. Put the real signing secret on the worker and cancel a test subscription.

The full walkthrough, including testing with the Stripe CLI, is in [Set up churn interviews on Stripe webhooks](set-up-churn-interviews-on-stripe-webhooks.html).

## What does the email say?

The default template is in `emails/churn.txt` in the repo and you can edit it:

{% raw %}
```text
Subject: Can I ask why you canceled?

Hi {{greeting}},

{{founder_name}} here, from {{product_name}}. I saw that you canceled, and I am sorry to see you go.

If you have 10 minutes, I would like to hear why you left. Frank, an AI interviewer, will ask a few questions by voice. No need to book a time. Start whenever you want:

{{interview_url}}

Thank you,
{{founder_name}}
```
{% endraw %}

The email says plainly that Frank is an AI interviewer. Keep that line.

## What should the interview ask?

Ask about the recent decision, not opinions about the product. A good churn guide covers the trigger, the timeline, what they tried first, the alternative they picked, and what would have changed their mind. Do not open with "Why did you leave?" and keep save offers out of it. Question ideas: [Churn interview questions for B2B SaaS](churn-interview-questions-for-b2b-saas.html).

## How do you read the results?

Read the transcripts twice a week. Group them by trigger, not by the reason code from Stripe, and note the plan and tenure next to each one. A theme backed by one interview is a lead, not a finding. If you use ChatGPT or Claude, you can ask Frank over MCP to group interviews by trigger with quotes. See [ChatGPT app for churn interviews](chatgpt-app-for-churn-interviews.html).

## What does it cost?

The app is free and MIT licensed. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. That covers about six 10-minute interviews a month. See [pricing](https://www.hifrank.ai/pricing?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=how-to-automatically-interview-customers-who-cancel-in-stripe) for paid plans.

## Start

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=how-to-automatically-interview-customers-who-cancel-in-stripe">Create your churn study in Frank</a></p>

Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. Works with ChatGPT, Claude, Grok and Muse.

## FAQ

### Can I automatically interview customers who cancel in Stripe?

Yes. A Stripe webhook for customer.subscription.deleted can trigger an email with a voice interview link. The free open-source Frank Churn Interviews for Stripe app does this on Cloudflare Workers, waits an hour by default, and passes plan, tenure and cancel reason to Frank AI Researcher.

### Do I need to schedule calls with churned customers?

No. The customer opens the link and talks to Frank, an AI interviewer, whenever they have 10 minutes. You read the transcript afterwards.

### When does Stripe send customer.subscription.deleted?

When the subscription actually ends. If the customer canceled at period end, that is at the end of the period. The app can also start from the earlier customer.subscription.updated event where cancel_at_period_end becomes true.

### Will a customer get two emails if Stripe sends two events?

No. The app treats the cancel-at-period-end event and the later delete event as one cancellation and sends one email.

### Can customers opt out?

Yes. If you set OPTOUT_SECRET and PUBLIC_BASE_URL, each email includes an opt-out link, and later cancellations from that customer are skipped.

### Which languages can the interviews run in?

Frank runs voice interviews in 50+ languages.

## Related

- [Stripe integration for churn interviews](stripe-integration-for-churn-interviews.html)
- [Stripe churn interviews with Frank (app docs)](stripe-churn-interviews.html)
- [Stripe cancellation survey vs churn interview](stripe-cancellation-survey-vs-interview.html)
- [Set up churn interviews on Stripe webhooks](set-up-churn-interviews-on-stripe-webhooks.html)
- [How to interview churned customers quickly](how-to-interview-churned-customers-quickly.html)
- [How to find out why customers churn](how-to-find-out-why-customers-churn.html)
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
      "name": "How to Automatically Interview Customers Who Cancel in Stripe",
      "item": "https://nar-vardanyan.github.io/frank-mcp/how-to-automatically-interview-customers-who-cancel-in-stripe.html"
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
  "headline": "How to Automatically Interview Customers Who Cancel in Stripe",
  "name": "How to Automatically Interview Customers Who Cancel in Stripe",
  "url": "https://nar-vardanyan.github.io/frank-mcp/how-to-automatically-interview-customers-who-cancel-in-stripe.html",
  "description": "Send every customer who cancels a Stripe subscription a short voice interview link, automatically, with plan, tenure and cancel reason attached. A free open-source Cloudflare Worker plus Frank AI Researcher.",
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
      "name": "Can I automatically interview customers who cancel in Stripe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A Stripe webhook for customer.subscription.deleted can trigger an email with a voice interview link. The free open-source Frank Churn Interviews for Stripe app does this on Cloudflare Workers, waits an hour by default, and passes plan, tenure and cancel reason to Frank AI Researcher."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to schedule calls with churned customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The customer opens the link and talks to Frank, an AI interviewer, whenever they have 10 minutes. You read the transcript afterwards."
      }
    },
    {
      "@type": "Question",
      "name": "When does Stripe send customer.subscription.deleted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When the subscription actually ends. If the customer canceled at period end, that is at the end of the period. The app can also start from the earlier customer.subscription.updated event where cancel_at_period_end becomes true."
      }
    },
    {
      "@type": "Question",
      "name": "Will a customer get two emails if Stripe sends two events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The app treats the cancel-at-period-end event and the later delete event as one cancellation and sends one email."
      }
    },
    {
      "@type": "Question",
      "name": "Can customers opt out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If you set OPTOUT_SECRET and PUBLIC_BASE_URL, each email includes an opt-out link, and later cancellations from that customer are skipped."
      }
    },
    {
      "@type": "Question",
      "name": "Which languages can the interviews run in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frank runs voice interviews in 50+ languages."
      }
    }
  ]
}
</script>
