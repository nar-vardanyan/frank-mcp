# ChatGPT prompts for product-market fit customer interviews

**In short:** These ChatGPT prompts help you use customer interviews to understand product-market fit: ask recent active users the Sean Ellis question, interview people from each answer group, and describe, in customers' own words, who already needs your product and what holds others back. Replace the text in [brackets] with your own details. When you want the interviews themselves to run by voice, Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with the users you invite.

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-product-market-fit), a voice-first product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## How to use these prompts

Use these prompts when you have recent active users and need to decide who to focus on, how to position the product, or what to fix next. The survey gives you groups to compare. The interviews explain the benefit, the alternative, and what is missing.

Paste a prompt into ChatGPT, fill in the [brackets], and edit the output before you use it. The prompts follow the order of a study: plan it, write the guide, write the invite, analyze the transcripts, then decide. Remove names, emails, and anything sensitive you do not need before you paste survey answers or transcripts.

## Prompts to plan the study

### 1. Plan a product-market fit study

```text
I run [product] for [customer type]. Help me plan a product-market fit study that combines a short survey with interviews. Ask me what usage and retention data I have, then write the decision this study should inform and the groups to compare, for example weekly active users versus occasional users.
```

### 2. Write the Sean Ellis survey

```text
Write a short survey for recent active users that includes the question "How would you feel if you could no longer use [product]?" with the answers very disappointed, somewhat disappointed, and not disappointed, plus one open question about the main benefit they get. Then explain how to pick people from each answer group for follow-up interviews.
```

### 3. Define a recent active user

```text
Define who counts as a recent active user of [product] using behavior I can pull from my own data, such as [actions]. Suggest a cut-off that leaves out people who only signed up or tried it once.
```

## Prompts to write the discussion guide

### 4. Guide for users who would be very disappointed

```text
Write a 10-minute voice interview guide for users who said they would be very disappointed without [product]. Ask about the last time they used it: what they were doing, what they used before, the main benefit in their own words, who else it helps, and what they would use if it went away. One follow-up each. No leading questions.
```

### 5. Guide for users who would be somewhat disappointed

```text
Write a version for users who said somewhat disappointed: what they hoped for when they started, the last time it fell short, what they use alongside it, and what is missing for them.
```

### 6. Remove compliment-seeking questions

```text
Review both guides [paste] and flag any question that invites compliments or predictions. Rewrite each one around a recent, specific use of the product.
```

## Prompts to write the invite

### 7. In-app message and email for active users

```text
Write an in-app message and a short email inviting active users to a voice interview of about 10 minutes about how they use [product], which they can take from a link when it suits them. Say what we will do with what they tell us. Incentive: [incentive or none]. Under 80 words each. Leave [link] as a placeholder.
```

### 8. Follow-up to survey respondents

```text
Write a short follow-up to people who answered the survey, thanking them and inviting them to the same voice interview. Write one version for each answer group, without telling them which answer is the one we want.
```

## Prompts to analyze transcripts

### 9. Extract benefit, use case, and alternative

```text
Below are interview transcripts, each labeled with the person's survey answer: [paste]. For each one, extract the main benefit in their words, the use case, what they used before, what they would use instead, and the missing piece, if any. One exact quote per field. Do not invent quotes.
```

### 10. Compare the answer groups

```text
Compare the very disappointed group with the somewhat disappointed group. Where do the benefits, use cases, and customer profiles differ? Only report differences backed by more than one interview, and show the quotes.
```

## Prompts to synthesize themes

### 11. Describe the must-have customer

```text
Using these findings, describe the customer for whom [product] is already a must-have, in their own words: who they are, the job, the main benefit, and the alternative. Then list what holds back the somewhat disappointed group, ordered by how many interviews mention it.
```

### 12. Write the product-market fit readout

```text
Write a one-page readout: the survey result, who the must-have customer is, the main benefit in their words, the gaps, and what to change in positioning, onboarding, or the roadmap. State plainly that interview counts describe the people we spoke with, not all users.
```

## Run the interviews with Frank inside ChatGPT

The prompts above help you plan the study and make sense of the results. ChatGPT does not interview your customers by itself. To have the interviews run by voice, connect Frank AI Researcher, which runs AI-moderated voice interviews with the people you invite and asks follow-up questions when answers are short.

1. [Install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). Sign in to Frank in your browser and approve access. There is no API key.
2. In a chat, type `@`, select Frank, and paste a request like this:

   ```text
   Use Frank to create a draft study, and do not publish it. I want to interview active users of [product] who said they would be very disappointed if they could no longer use it. Keep the interview under 10 minutes. Write 6 to 8 open questions about their last use: what they were doing, what they used before, the main benefit in their words, and what they would use if it went away. Wait for me to review the guide. I will share the interviewer link with these users myself.
   ```

3. Read the draft guide, take the interview yourself, and fix anything confusing or leading. A study created through MCP stays a draft until you approve publishing.
4. Share the interviewer link or a website widget with recent active users, grouped by their answer to the Sean Ellis question. People talk with the AI interviewer by voice when they have time, without booking a call. Frank does not recruit participants.
5. As interviews come in, ask ChatGPT to read the transcripts from Frank using prompts 9 to 12 above. Then open a few full transcripts and check each quote you plan to act on.

MCP is included on every Frank plan, including Free. The Free plan includes 60 voice minutes a month, with no card required. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. In other MCP clients, use the MCP endpoint `https://api.hifrank.ai/mcp`.

## Frank AI Researcher is available as an app in ChatGPT

Frank AI Researcher is available as an app in ChatGPT. Draft a study, share the voice interview link with your own customers, and read the transcripts in the same chat.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-product-market-fit) and see [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-product-market-fit).

## FAQ

### How do customer interviews help measure product-market fit?

A survey such as the Sean Ellis question tells you how many recent users would be very disappointed without your product. Interviews with people from each answer group explain why: the main benefit, the alternative they would use, and what is missing for the others.

### Can ChatGPT run product-market fit interviews by itself?

No. On its own, ChatGPT can help you write the survey, guides, and invites, and analyze transcripts you paste in. To have the interviews run by voice, connect a tool that conducts them. Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with users you invite.

### Who should I interview for product-market fit?

Recent active users, not people who only signed up. Interview people from the very disappointed group and the somewhat disappointed group, and compare them. Frank does not recruit participants; you invite your own users.

### Do I need a survey before the interviews?

It helps. The survey answer gives you groups to compare, so the interviews can explain the difference between users who need the product and users who could do without it.

## More ChatGPT prompts for customer interviews

- [ChatGPT prompts for churn customer interviews](chatgpt-prompts-for-churn-customer-interviews.html)
- [ChatGPT prompts for customer discovery interviews](chatgpt-prompts-for-customer-discovery-interviews.html)
- [ChatGPT prompts for win-loss customer interviews](chatgpt-prompts-for-win-loss-customer-interviews.html)
- [ChatGPT prompts for onboarding customer interviews](chatgpt-prompts-for-onboarding-customer-interviews.html)

## Related

- [How to measure product-market fit with customer interviews](measure-product-market-fit-with-customer-interviews.html)
- [Product-market fit template](templates/#product-market-fit)
- [How to run customer interviews](how-to-run-customer-interviews.html)
- [Customer interview questions for founders](customer-interview-questions-for-founders.html)
- [Customer interview sample size planner](tools/customer-interview-sample-size-planner/)
- [Survey to interview question converter](tools/survey-to-interview-converter/)
- [MCP setup](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-product-market-fit)
