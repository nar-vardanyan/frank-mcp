# ChatGPT prompts for pricing interviews

**In short:** These ChatGPT prompts help you run qualitative pricing interviews: how customers describe the value they get, how they read your plans and packaging, what triggered a purchase or an upgrade, and how they compared options. They do not ask ChatGPT to guess price points or what people would pay. A model cannot know that, and people are poor at predicting it. Replace the text in [brackets] with your own details. When you want the interviews themselves to run by voice, Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with the people you invite.

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-pricing), a voice-first product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## How to use these prompts

Use these prompts before you change plans, packaging, or how you explain pricing. Interviews show how people think about value and make the decision. Set actual prices with your own sales and billing data and real tests, not with answers to hypothetical questions.

Paste a prompt into ChatGPT, fill in the [brackets], and edit the output before you use it. The prompts follow the order of a study: plan it, write the guide, write the invite, analyze the transcripts, then decide. Remove names, emails, and anything sensitive you do not need before you paste survey answers or transcripts.

## Prompts to plan the study

### Frame the pricing decision

```text
We are considering a change to [plans, packaging, or how we present pricing] for [product]. Ask me up to five questions about what we already know from sales notes, support tickets, and billing data. Then write the decision this study should inform and three hypotheses about how customers perceive value. Do not suggest or estimate any prices or willingness-to-pay figures.
```

### Choose who to interview

```text
Suggest groups to interview for a qualitative pricing study, for example recent buyers, customers who upgraded, customers who downgraded, and prospects who chose not to buy. For each group, write what they can tell us about value and the purchase decision that the others cannot. Only suggest groups I can reach from my own customer and deal lists.
```

### List what not to ask

```text
List the kinds of pricing questions that produce unreliable answers in interviews, such as asking people what they would pay or whether a price is fair, and explain why. For each one, suggest a question about a past decision that gets at the same topic.
```

## Prompts to write the discussion guide

### Guide on value and the purchase decision

```text
Write a short voice interview guide for customers who bought [product] recently. Ask about the purchase in order: what triggered the search, what they compared us with (including doing nothing or a spreadsheet), who needed to approve it, how they explained the cost internally, and what value they get now in their own words. Do not ask what they would pay or whether the price is fair. One follow-up per question.
```

### Guide on plans and packaging

```text
Write a version about our plans and packaging: how they picked a plan, which differences between plans mattered to them, what was confusing on the pricing page, what made them upgrade or stay, and what they expected to get that they did not. Ask about what they did, not what they would do.
```

### Check the guide for price anchoring

```text
Review this pricing interview guide [paste]. Flag any question that mentions a specific price, asks people to name a price, invites a fairness rating, or leads toward an answer. Rewrite each flagged question as a question about a past decision.
```

## Prompts to write the invite

### Email to recent buyers

```text
Write a short email inviting customers who bought or upgraded recently to a voice interview about how they made the decision, which they can take from a link whenever it suits them. Say we want to understand how they think about value, that it is not a sales call, and that they will not be asked to negotiate. Keep it brief and plain. Leave [link] as a placeholder.
```

### Email to prospects who did not buy

```text
Write a short, respectful email to a prospect who decided not to buy, inviting them to the same kind of voice interview about how they compared options. Thank them for their time and make it clear we will not try to reopen the deal.
```

## Prompts to analyze transcripts

### Extract value language and decision steps

```text
Below are pricing interview transcripts: [paste]. For each one, extract the purchase trigger, the options compared, who approved the decision, how they described the value in their own words, and anything confusing about plans or packaging. One exact quote per field. Do not invent quotes, and do not infer or estimate any prices or willingness-to-pay figures.
```

### Map how buyers compare options

```text
Group how people compared options: what they compared us with, the criteria they used, and which differences decided it. Show quotes for each group, and mark groups backed by a single interview as low confidence. Do not add any prices or numbers that are not in the transcripts.
```

## Prompts to synthesize themes

### Turn value language into packaging questions

```text
From these findings, list the outcomes customers value in their own words, which plan or feature differences mattered to them, and where our packaging or pricing page confuses people. For each, suggest what to test next with real customers. Do not propose specific prices.
```

### Write the pricing research readout

```text
Write a one-page readout: the decision we set out to inform, how customers describe value, purchase triggers, how they compare options, packaging confusion, and open questions to answer with billing data or live tests. State that the interviews describe perceptions and decisions, not price points.
```

## Run the interviews with Frank inside ChatGPT

The prompts above help you plan the study and make sense of the results. ChatGPT does not interview your customers by itself. To have the interviews run by voice, connect Frank AI Researcher, which runs AI-moderated voice interviews with the people you invite and asks follow-up questions when answers are short.

1. [Install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). Sign in to Frank in your browser and approve access. There is no API key.
2. In a chat, type `@`, select Frank, and paste a request like this:

   ```text
   Use Frank to create a draft study, and do not publish it. I want to interview customers who bought [product] recently about how they made the decision. Keep the interview short. Write open questions about what triggered the search, what they compared us with, who approved it, how they explained the cost internally, and the value they get now in their own words. Do not ask what they would pay or whether the price is fair. Wait for me to review the guide. I will share the interviewer link with these customers myself.
   ```

3. Read the draft guide, take the interview yourself, and fix anything confusing or leading. A study created through MCP stays a draft until you approve publishing.
4. Share the interviewer link or a website widget with recent buyers, customers who upgraded or downgraded, and prospects who chose not to buy, all from your own lists. People talk with the AI interviewer by voice when they have time, without booking a call. Frank does not recruit participants.
5. As interviews come in, ask ChatGPT to read the transcripts from Frank using the analysis and synthesis prompts above. Then open a few full transcripts and check each quote you plan to act on.

MCP is included on every Frank plan, including Free, with no card required. See [Frank pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-pricing) for current plan details. Works with ChatGPT, Claude and Muse, plus other MCP clients that support remote servers with OAuth. In other MCP clients, use the MCP endpoint `https://api.hifrank.ai/mcp`.

## Frank AI Researcher is available as an app in ChatGPT

Frank AI Researcher is available as an app in ChatGPT. Draft a study, share the voice interview link with your own customers, and read the transcripts in the same chat.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-pricing) and see [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-pricing).

## FAQ

### Can ChatGPT tell me what to charge?

No. ChatGPT does not know what your customers would pay, and these prompts deliberately do not ask it to guess. Use interviews to understand value perception, packaging, purchase triggers, and how buyers compare options, then set prices with your own sales and billing data and live tests.

### What should I ask in a pricing interview?

Ask about a real recent decision: what triggered the search, what they compared you with, who approved it, how they explained the cost internally, and what value they get now. Avoid asking people to name a price or rate whether a price is fair.

### Can ChatGPT run pricing interviews by itself?

No. On its own, ChatGPT can help you plan the study, write guides and invites, and analyze transcripts you paste in. To have the interviews run by voice, connect a tool that conducts them. Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with people you invite.

### Does Frank recruit buyers for pricing research?

No. Frank does not recruit participants. You invite your own customers and prospects by sharing the interviewer link.

## More ChatGPT prompts for customer interviews

- [ChatGPT prompts for churn customer interviews](chatgpt-prompts-for-churn-customer-interviews.html)
- [ChatGPT prompts for customer discovery interviews](chatgpt-prompts-for-customer-discovery-interviews.html)
- [ChatGPT prompts for win-loss customer interviews](chatgpt-prompts-for-win-loss-customer-interviews.html)
- [ChatGPT prompts for product-market fit customer interviews](chatgpt-prompts-for-product-market-fit-customer-interviews.html)
- [ChatGPT prompts for onboarding customer interviews](chatgpt-prompts-for-onboarding-customer-interviews.html)
- [ChatGPT prompts for B2B SaaS user research interviews](chatgpt-prompts-for-b2b-saas-user-research-interviews.html)
- [ChatGPT prompts for feature prioritization interviews](chatgpt-prompts-for-feature-prioritization-interviews.html)
- [ChatGPT prompts for usability testing and UX interviews](chatgpt-prompts-for-usability-testing-and-ux-interviews.html)
- [ChatGPT prompts for jobs-to-be-done interviews](chatgpt-prompts-for-jobs-to-be-done-interviews.html)

## Related

- [Pricing and value template](templates/#pricing-value)
- [Plan and packaging template](templates/#plan-packaging)
- [Win/loss interviews](win-loss-interviews.html)
- [Leading question (glossary)](glossary/leading-question.html)
- [Customer interview questions for founders](customer-interview-questions-for-founders.html)
- [Customer interview guide generator](tools/customer-interview-guide-generator/)
- [MCP setup](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-pricing)
