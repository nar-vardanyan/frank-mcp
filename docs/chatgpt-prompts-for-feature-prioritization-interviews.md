# ChatGPT prompts for feature prioritization interviews

**In short:** These ChatGPT prompts help you use customer interviews to decide what to build next: turn a backlog of feature requests into the problems behind them, interview the people who asked, and rank problems by what customers actually did, not by how loudly they asked. Replace the text in [brackets] with your own details. When you want the interviews themselves to run by voice, Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with the people you invite.

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-feature-prioritization), a voice-first product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## How to use these prompts

Use these prompts when the backlog is longer than your capacity and requests pull in different directions. A request tells you what someone thinks the solution is. An interview tells you the problem, how often it happens, and what it costs them today.

Paste a prompt into ChatGPT, fill in the [brackets], and edit the output before you use it. The prompts follow the order of a study: plan it, write the guide, write the invite, analyze the transcripts, then decide. Remove names, emails, and anything sensitive you do not need before you paste survey answers or transcripts.

## Prompts to plan the study

### 1. Turn requests into problems

```text
Here are feature requests from customers, with names removed: [paste]. Group them by the underlying problem the customer seems to be trying to solve, not by the feature asked for. For each group, write the problem as a one-line statement and list the requests that point to it.
```

### 2. Pick the problems to investigate

```text
From those problem groups, suggest which ones to investigate first in interviews and why, based on the evidence I have: [usage data, revenue at risk, support volume]. Say what we would need to hear to move a problem up or down the list.
```

### 3. Choose who to interview

```text
For each problem we picked, describe who to interview: customers who asked for it, customers with a similar profile who did not ask, and anyone who built a workaround. Only suggest people I can reach from my own customer list.
```

## Prompts to write the discussion guide

### 4. Guide about the last time the problem happened

```text
Write a 10-minute voice interview guide for customers who asked for [feature]. Ask about the last time they hit the underlying problem: what they were trying to do, what got in the way, what they did instead, how often it happens, and what it costs them in time or money. Do not describe the feature or ask whether they want it. One follow-up per question.
```

### 5. Questions about workarounds

```text
Add questions that uncover workarounds: other tools, spreadsheets, scripts, or people they rely on to get around the problem, and what they would stop doing if it went away.
```

### 6. Remove wish-list questions

```text
Review this guide [paste] and flag questions that invite a wish list, such as "What features would you like?" or "Would you use...". Rewrite each one as a question about something that already happened.
```

## Prompts to write the invite

### 7. Email to customers who asked for a feature

```text
Write a short email to customers who requested [feature], thanking them and inviting them to a voice interview of about 10 minutes about the problem behind the request, which they can take from a link when it suits them. Do not promise we will build it. Under 90 words. Leave [link] as a placeholder.
```

### 8. Reply for the feedback board

```text
Write a short reply we can post on a feature request in our feedback board, inviting people who want this to share the problem behind it in the same voice interview.
```

## Prompts to analyze transcripts

### 9. Extract problem evidence

```text
Below are interview transcripts: [paste]. For each one, extract the problem, the last time it happened, how often it happens, the workaround, what it costs them, and who else is affected. One exact quote per field. Do not invent quotes. Write "not mentioned" when a field is missing.
```

### 10. Compare problems side by side

```text
Build a table with one row per problem: how many interviews mention it, how often it happens based on what people described, what the workaround costs, and the segments affected. Mark single-interview problems as low confidence.
```

## Prompts to synthesize themes

### 11. Rank problems by evidence

```text
Using the table, rank the problems by the strength of the evidence (past behavior, workarounds, time or money spent) rather than by how strongly people asked. Explain each ranking in one line with a quote, and note where the evidence is thin.
```

### 12. Write the prioritization memo

```text
Write a short memo for the roadmap discussion: the problems we heard, how we ranked them and why, what we will build or test next, what we will not build yet and why, and open questions. Report interview counts as counts, not as percentages of all customers.
```

## Run the interviews with Frank inside ChatGPT

The prompts above help you plan the study and make sense of the results. ChatGPT does not interview your customers by itself. To have the interviews run by voice, connect Frank AI Researcher, which runs AI-moderated voice interviews with the people you invite and asks follow-up questions when answers are short.

1. [Install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). Sign in to Frank in your browser and approve access. There is no API key.
2. In a chat, type `@`, select Frank, and paste a request like this:

   ```text
   Use Frank to create a draft study, and do not publish it. I want to interview customers who asked for [feature] to understand the problem behind the request. Keep the interview under 10 minutes. Write 6 to 8 open questions about the last time they hit the problem: what they were trying to do, what got in the way, what they did instead, how often it happens, and what it costs them. Do not describe the feature. Wait for me to review the guide. I will share the interviewer link with these customers myself.
   ```

3. Read the draft guide, take the interview yourself, and fix anything confusing or leading. A study created through MCP stays a draft until you approve publishing.
4. Share the interviewer link or a website widget with customers who requested a feature, similar customers who did not, and people who built workarounds. People talk with the AI interviewer by voice when they have time, without booking a call. Frank does not recruit participants.
5. As interviews come in, ask ChatGPT to read the transcripts from Frank using prompts 9 to 12 above. Then open a few full transcripts and check each quote you plan to act on.

MCP is included on every Frank plan, including Free. The Free plan includes 60 voice minutes a month, with no card required. Works with ChatGPT, Claude and Muse, plus other MCP clients that support remote servers with OAuth. In other MCP clients, use the MCP endpoint `https://api.hifrank.ai/mcp`.

## Frank AI Researcher is available as an app in ChatGPT

Frank AI Researcher is available as an app in ChatGPT. Draft a study, share the voice interview link with your own customers, and read the transcripts in the same chat.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-feature-prioritization) and see [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-feature-prioritization).

## FAQ

### How do customer interviews help with feature prioritization?

They turn requests into problems. Ask about the last time the problem happened, what people did instead, how often it happens, and what it costs them, then rank problems by that evidence rather than by how often a feature was requested.

### Should I ask customers which features they want?

Not directly. Wish lists and "would you use" answers are weak evidence. Ask about past struggles and workarounds, and decide on the solution yourself.

### Can ChatGPT run feature prioritization interviews by itself?

No. On its own, ChatGPT can help you group requests, write guides and invites, and analyze transcripts you paste in. To have the interviews run by voice, connect a tool that conducts them. Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with people you invite.

### Does Frank recruit people for these interviews?

No. Frank does not recruit participants. You invite customers from your own feedback board, request list, or product.

## More ChatGPT prompts for customer interviews

- [ChatGPT prompts for churn customer interviews](chatgpt-prompts-for-churn-customer-interviews.html)
- [ChatGPT prompts for customer discovery interviews](chatgpt-prompts-for-customer-discovery-interviews.html)
- [ChatGPT prompts for win-loss customer interviews](chatgpt-prompts-for-win-loss-customer-interviews.html)
- [ChatGPT prompts for product-market fit customer interviews](chatgpt-prompts-for-product-market-fit-customer-interviews.html)
- [ChatGPT prompts for onboarding customer interviews](chatgpt-prompts-for-onboarding-customer-interviews.html)
- [ChatGPT prompts for B2B SaaS user research interviews](chatgpt-prompts-for-b2b-saas-user-research-interviews.html)
- [ChatGPT prompts for pricing interviews](chatgpt-prompts-for-pricing-interviews.html)
- [ChatGPT prompts for usability testing and UX interviews](chatgpt-prompts-for-usability-testing-and-ux-interviews.html)
- [ChatGPT prompts for jobs-to-be-done interviews](chatgpt-prompts-for-jobs-to-be-done-interviews.html)

## Related

- [Why users don't adopt a new feature](why-users-dont-adopt-a-new-feature.html)
- [Customer interview questions for product managers](customer-interview-questions-for-product-managers.html)
- [Feature validation template](templates/#feature-validation)
- [Feature adoption template](templates/#feature-adoption)
- [Customer interview question bank](tools/customer-interview-question-bank/)
- [Mom Test question checker](tools/mom-test-checker/)
- [MCP setup](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-feature-prioritization)
