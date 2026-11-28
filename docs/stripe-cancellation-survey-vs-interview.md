# Stripe Cancellation Survey vs Churn Interview: What Each Tells You

**Short answer:** Use Stripe's built-in cancellation reason to count why people leave, and a short interview to understand it. The survey is one click inside the cancel flow and covers almost everyone. The interview comes after, reaches fewer people, and tells you the story behind the reason. The free [Frank Churn Interviews for Stripe](https://github.com/nar-vardanyan/frank-stripe-churn-interviews) app connects the two by sending the Stripe reason to Frank AI Researcher before the interview starts.

*Last updated: Nov 28, 2026.*

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-cancellation-survey-vs-interview), a voice-first AI interviewer for your own customers. Below, the facts about Stripe and cancel-flow tools come from their own pages, checked on Nov 28, 2026.

## What does Stripe's cancellation survey collect?

In the customer portal settings, you can select the reasons that your customers see from the following list: It's too expensive, I need more features, I found an alternative, I no longer need it, Customer service was less than expected, Ease of use was less than expected, Quality was less than expected, and Other reason. If a customer selects Other reason, they can optionally enter additional free text ([Stripe docs](https://docs.stripe.com/customer-management/cancellation-page)).

The answer is saved on the subscription as `cancellation_details.feedback` and `cancellation_details.comment` ([Stripe API reference](https://docs.stripe.com/api/subscriptions/cancel)). You see it on the subscription page, in Stripe Sigma, in the subscription webhooks, and in the cancellation reasons chart under retention performance ([Stripe docs](https://docs.stripe.com/billing/retention/performance)).

## What does a churn interview add?

| | Stripe cancellation reason | Churn interview |
|---|---|---|
| When | During the cancel flow | After the cancellation |
| Effort for the customer | One click | About 10 minutes, by voice |
| Who answers | Most people who cancel in the portal | A smaller group who choose to talk |
| What you get | A reason code and sometimes a comment | The trigger, the timeline, what they tried, what they use now |
| Good for | Counting and trends by plan | Deciding what to fix |
| Follow-up questions | None | Yes, the interviewer asks them |

"Too expensive" is a common example. The code says price. An interview can show what sits behind it, for example that the customer stopped using a feature weeks earlier and the price only became a question when the next bill arrived.

## When is the survey enough?

- You need a count by plan or by month.
- Reasons are spread out and you want to know which one to look at first.
- You already know the story from support tickets and only want to track it.

## When should you add interviews?

- One reason dominates and you do not know what is behind it.
- "Other reason" comments are short and vague.
- You are about to change pricing, onboarding or a core feature because of churn.

## Where do cancel-flow tools fit?

Cancel-flow tools sit between the cancel button and your billing system. They ask a survey question, show a save offer such as a pause or a discount, and apply it to the subscription. [Churnkey](https://churnkey.co/) works with Stripe and also handles failed-payment recovery. [ProsperStack](https://prosperstack.com/solutions/cancellation-flows/) supports Stripe and many other billing platforms. [Raaft](https://raaft.io/pricing) lists a free plan with 20 sessions a month and integrates with Stripe. Choose one of those if you want to save the subscription in the moment. An interview does not try to save anyone. It runs after the decision and only asks questions.

## How do you use both with Stripe?

1. Keep the cancellation reason on in the Stripe customer portal.
2. Deploy [Frank Churn Interviews for Stripe](https://deploy.workers.cloudflare.com/?url=https://github.com/nar-vardanyan/frank-stripe-churn-interviews). It listens for the cancellation, waits an hour, and emails a 10 minute interview link.
3. The app reads `cancellation_details` and passes the reason and comment to Frank as a private note, so the interviewer can ask about it.
4. Compare the interview themes with your reason counts each month.

Step by step: [How to automatically interview customers who cancel in Stripe](how-to-automatically-interview-customers-who-cancel-in-stripe.html).

## Start

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-cancellation-survey-vs-interview">Create your churn study in Frank</a></p>

Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. Works with ChatGPT, Claude, Grok and Muse.

## FAQ

### Does Stripe have a cancellation survey?

Yes. In the Stripe customer portal settings, you can select the reasons that your customers see from the following list: It's too expensive, I need more features, I found an alternative, I no longer need it, Customer service was less than expected, Ease of use was less than expected, Quality was less than expected, and Other reason. If a customer selects Other reason, they can optionally enter additional free text. The answer is saved on the subscription as cancellation_details.

### Where do I find Stripe cancellation reasons?

On the subscription details page in the Dashboard, in Stripe Sigma, in the subscription webhooks, and in the cancellation reasons chart under Billing retention performance.

### Is a cancellation survey or a churn interview better?

They answer different questions. The survey counts reasons across most cancellations. The interview explains a reason in detail with a smaller group. You can run both.

### Can I send the Stripe cancellation reason into the interview?

Yes. Frank Churn Interviews for Stripe reads cancellation_details at send time and passes the reason and comment to Frank AI Researcher as a private note that the interviewer sees and the customer does not.

### Does Frank make save offers like a cancel-flow tool?

No. Frank runs voice interviews to learn why customers left. For save offers in the cancel flow, use a cancel-flow tool such as Churnkey, ProsperStack or Raaft.

## Related

- [Stripe integration for churn interviews](stripe-integration-for-churn-interviews.html)
- [Stripe churn interviews with Frank (app docs)](stripe-churn-interviews.html)
- [How to automatically interview customers who cancel in Stripe](how-to-automatically-interview-customers-who-cancel-in-stripe.html)
- [AI customer interviews vs surveys](ai-customer-interviews-vs-surveys.html)
- [Best tools for customer churn interviews](best-tools-for-customer-churn-interviews.html)
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
      "name": "Stripe Cancellation Survey vs Churn Interview: What Each Tells You",
      "item": "https://nar-vardanyan.github.io/frank-mcp/stripe-cancellation-survey-vs-interview.html"
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
  "headline": "Stripe Cancellation Survey vs Churn Interview: What Each Tells You",
  "name": "Stripe Cancellation Survey vs Churn Interview: What Each Tells You",
  "url": "https://nar-vardanyan.github.io/frank-mcp/stripe-cancellation-survey-vs-interview.html",
  "description": "Stripe's customer portal collects a fixed cancellation reason and an optional comment. A short churn interview explains the reason. When to use each, how to use both, and the cancel-flow tools in between.",
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
      "name": "Does Stripe have a cancellation survey?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. In the Stripe customer portal settings, you can select the reasons that your customers see from the following list: It's too expensive, I need more features, I found an alternative, I no longer need it, Customer service was less than expected, Ease of use was less than expected, Quality was less than expected, and Other reason. If a customer selects Other reason, they can optionally enter additional free text. The answer is saved on the subscription as cancellation_details."
      }
    },
    {
      "@type": "Question",
      "name": "Where do I find Stripe cancellation reasons?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On the subscription details page in the Dashboard, in Stripe Sigma, in the subscription webhooks, and in the cancellation reasons chart under Billing retention performance."
      }
    },
    {
      "@type": "Question",
      "name": "Is a cancellation survey or a churn interview better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They answer different questions. The survey counts reasons across most cancellations. The interview explains a reason in detail with a smaller group. You can run both."
      }
    },
    {
      "@type": "Question",
      "name": "Can I send the Stripe cancellation reason into the interview?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Frank Churn Interviews for Stripe reads cancellation_details at send time and passes the reason and comment to Frank AI Researcher as a private note that the interviewer sees and the customer does not."
      }
    },
    {
      "@type": "Question",
      "name": "Does Frank make save offers like a cancel-flow tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Frank runs voice interviews to learn why customers left. For save offers in the cancel flow, use a cancel-flow tool such as Churnkey, ProsperStack or Raaft."
      }
    }
  ]
}
</script>
