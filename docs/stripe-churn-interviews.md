# Interview customers who cancel in Stripe, automatically

**In short:** When a customer cancels a Stripe subscription, this open-source app waits a short time, then emails them a link to a short Frank voice interview about why they left. They can talk when they have a minute, and you read the transcript later. You do not have to schedule a call.

**We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-churn-interviews)** (short name Frank), a voice-first product that interviews your own customers. The Stripe app is a free, independent open-source project. It is not a Stripe product, and it is not affiliated with Stripe. This page describes what it does, how to set it up, and one important limit, using public details as of 28 November 2026. Related guides: [How to interview churned customers quickly](how-to-interview-churned-customers-quickly.md) and [How to find out why customers churn](how-to-find-out-why-customers-churn.md).

## What it does

1. Stripe sends a cancellation event (`customer.subscription.deleted`, and, if you leave the option on, `customer.subscription.updated` when cancel-at-period-end turns on).
2. The app checks the webhook signature, skips people on your exclude or opt-out list, and skips a cancellation it has already queued or emailed.
3. It waits. The default is 1 hour. If they turn cancellation off before the email goes out, the pending invite is dropped.
4. At send time it reads the customer and subscription from Stripe, adds the person to your Frank study with a private note, and emails your plain-text message with the study link.

One cancellation produces one email, even when Stripe sends both the cancel-at-period-end event and the later delete event. If they subscribe again and cancel later, they can get one new invite.

## What the interviewer sees

When the invite is due, the app adds the person to your published Frank study with a private note, for example:

```text
Plan: Pro
Tenure: 30 days
Stripe cancellation reason: cancellation_requested
```

Frank shows that note to the interviewer, not to the customer. The note is matched to the email address from Stripe. The person has to enter that same email when they start the interview, or the interviewer will not see the plan, tenure, or cancel reason. The email itself contains the study's public interview link, unchanged.

## Set up

You need a Frank account, a Stripe account, a free Cloudflare account, and either Resend or an SMTP server.

1. In Frank, create a churn study, set the length to 10 minutes, and publish it. Copy the interview link. Create an API key (Frank shows it once).
2. Open the [GitHub repository](https://github.com/nar-vardanyan/frank-stripe-churn-interviews) and click **Deploy to Cloudflare**. When it asks, paste the interview URL, the Frank API key, your name, the product name, the from-address, a Resend API key (or SMTP settings), and two random secrets. For the Stripe webhook secret, paste a placeholder first.
3. Open the worker URL Cloudflare gives you. In Stripe, add an endpoint for `https://<that-host>/webhook`. Subscribe to `customer.subscription.deleted` and `customer.subscription.updated`. Copy the signing secret onto the worker, and set the public URL used in opt-out links.
4. Cancel a test subscription. The customer gets the email after the delay. Open the study in Frank to read the interview.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/nar-vardanyan/frank-stripe-churn-interviews)

The button deploys the default branch of the public repository. You can also deploy from your machine with Wrangler. Full configuration, including the delay, SMTP, the email template, and privacy deletion, is in the [repository README](https://github.com/nar-vardanyan/frank-stripe-churn-interviews).

Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. Those 60 minutes cover about six 10-minute interviews or ten 5-minute ones. Works with ChatGPT, Claude, Grok and Muse.

The Stripe app talks to Frank's public REST API with a secret key. It does not use the MCP server, because a webhook handler cannot complete a browser login.

## The email-match limit

The private note (plan, tenure, and cancel reason) is stored against the email in Stripe. When the person starts the interview, they have to enter that same email for the interviewer to see the note. If they type a different address, Frank still runs the interview, but the interviewer will not see the plan or the cancel reason.

## FAQ

### What do I need to set this up?

A Stripe account, a free Cloudflare account, a Frank API key, a published Frank study, and an email sender such as Resend or SMTP. Then click the Deploy to Cloudflare button and paste those values.

### Is this a Stripe product?

No. It is an independent open-source app. It is not affiliated with Stripe, and it is not a Stripe product.

### When does the email go out?

By default, about an hour after the cancellation is recorded. You can change the delay, including a 1-minute delay for a test.

### What if the customer types a different email in the interview?

The interview still runs. The private note with their plan, tenure, and cancel reason is shown only when they enter the same email they have in Stripe.

### Can someone opt out?

Yes. If you set the opt-out secret and public URL, the email includes an opt-out link. That marks the Stripe customer so later cancellations do not send, and any pending invite is canceled too.

### Will a customer get two emails for one cancellation?

No. The app treats one cancellation as one email, even if Stripe sends both a cancel-at-period-end event and a later delete event. If they subscribe again and cancel later, they can get one new invite.

### Does Frank recruit the cancelled customers?

No. Frank AI Researcher does not recruit participants. The app only emails people who cancelled in your own Stripe account, and only if they are not on your exclude or opt-out list.

### What does the Free plan include?

Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. 60 voice minutes cover about six 10-minute interviews or ten 5-minute ones.

## Setup

- [Sign up](https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-churn-interviews)
- [Pricing](https://www.hifrank.ai/pricing?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-churn-interviews)
- [MCP connector setup](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=stripe-churn-interviews)
- [GitHub repository](https://github.com/nar-vardanyan/frank-stripe-churn-interviews)
- [Deploy to Cloudflare](https://deploy.workers.cloudflare.com/?url=https://github.com/nar-vardanyan/frank-stripe-churn-interviews)

## Related

- [How to interview churned customers quickly](how-to-interview-churned-customers-quickly.md)
- [How to find out why customers churn](how-to-find-out-why-customers-churn.md)
- [Churn interviews](churn-interviews.md)
- [How to send a Frank churn interview invite from n8n](integrations/n8n-churn-interview/)
- [Best tools for customer churn interviews](best-tools-for-customer-churn-interviews.md)
