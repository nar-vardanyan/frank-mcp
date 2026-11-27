# ChatGPT prompts for churn customer interviews

**In short:** These ChatGPT prompts help you plan churn interviews with customers who cancelled or downgraded, write a neutral interview guide and invite, and turn the transcripts into a readout your team can act on. Replace the text in [brackets] with your own details. When you want the interviews themselves to run by voice, Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with the customers you invite.

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-churn), a voice-first product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## How to use these prompts

Use these prompts soon after a cancel or downgrade, while the decision is still easy to recall. A cancellation survey tells you which box people ticked. An interview asks for the event behind it: what changed, what they tried, and what they use now.

Paste a prompt into ChatGPT, fill in the [brackets], and edit the output before you use it. The prompts follow the order of a study: plan it, write the guide, write the invite, analyze the transcripts, then decide. Remove names, emails, and anything sensitive you do not need before you paste survey answers or transcripts.

## Prompts to plan the study

### 1. Turn churn into one research decision

```text
I run [product], a [type of product] for [customer type]. In the last [period], customers have been cancelling or downgrading. Before you suggest anything, ask me up to five questions about what I already know (cancellation survey answers, plans, tenure, usage). Then write: the one decision this churn study should inform, three hypotheses about why people leave, and what we would need to hear in interviews to prove each hypothesis wrong.
```

### 2. Choose who to interview first

```text
Here is how our cancelled customers differ: [plan, tenure, company size, cancel reason picked, last active date]. Suggest two or three groups worth interviewing separately, and for each one explain why its churn story might differ. Only suggest groups I can reach from my own cancel list.
```

### 3. Find what the survey cannot tell you

```text
Here are our cancellation survey answers, with names and emails removed: [paste]. Group them into rough categories. For each category, write the one thing a survey answer cannot tell us that an interview could, and the interview question that would get at it.
```

## Prompts to write the discussion guide

### 4. Draft a 10-minute churn interview guide

```text
Write a 10-minute voice interview guide for customers who cancelled [product] in the last 30 days. Use 6 to 8 open questions about the recent decision: what they hoped for when they signed up, the moment they first thought about leaving, what they tried first, who else was involved, what they use now, and what would have changed their mind. No yes/no questions, nothing that defends the product, and do not open with "Why did you leave?" Add one follow-up for each question, for when the answer is short.
```

### 5. Probe vague cancel reasons

```text
Customers often answer "too expensive", "we didn't use it enough" or "missing features". For each of these, write two neutral follow-up questions that ask for the specific event behind the answer, for example what they compared the price with, or the last time they opened the product and what they were trying to do.
```

### 6. Check the guide for leading questions

```text
Review this churn interview guide: [paste]. Flag any question that is leading, hypothetical, stacked, or answerable with yes or no. Explain the problem in one line, then rewrite each flagged question as a question about a past event.
```

## Prompts to write the invite

### 7. Email to a recently cancelled customer

```text
Write a short email to a customer who cancelled [product] [number] days ago, inviting them to a voice interview of about 10 minutes that they can take from a link whenever it suits them. Say why we are asking, that it is not a sales call or a save attempt, and that they can skip any question. Under 90 words, plain text, signed by [name, role]. Leave [link] as a placeholder.
```

### 8. Cancel page and in-app versions

```text
Write a two-line message for our cancellation confirmation page that offers the same voice interview link, plus a version for an in-app message to customers who downgraded. Neutral tone, no discount offers, no guilt.
```

## Prompts to analyze transcripts

### 9. Extract the churn story from each transcript

```text
Below are churn interview transcripts: [paste]. For each one, extract the trigger (what changed), what they were trying to get done, what they tried before cancelling, the alternative they use now (including a spreadsheet or nothing), and the save point, if any. Use a table with one row per interview and one exact quote per row. Do not invent quotes. Write "not mentioned" when a field is missing.
```

### 10. Group interviews by trigger

```text
Using the table above, group the interviews by trigger. For each group, list which interviews are in it, a one-line description, and two exact quotes. Mark any group backed by a single interview as low confidence.
```

## Prompts to synthesize themes

### 11. Compare survey reasons with interview stories

```text
For the same customers, here is what they picked in the cancellation survey and what they said in the interview: [paste]. Where does the survey reason differ from the interview story? List each mismatch with a quote, and say what it suggests about our survey options.
```

### 12. Write the churn readout

```text
Write a one-page churn readout for my team: the decision we set out to inform, the main triggers with quotes, what we will change, what we will not change and why, open questions, and an owner for each next step. Report interview counts as counts, not as percentages of all customers.
```

## Run the interviews with Frank inside ChatGPT

The prompts above help you plan the study and make sense of the results. ChatGPT does not interview your customers by itself. To have the interviews run by voice, connect Frank AI Researcher, which runs AI-moderated voice interviews with the people you invite and asks follow-up questions when answers are short.

1. [Install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). Sign in to Frank in your browser and approve access. There is no API key.
2. In a chat, type `@`, select Frank, and paste a request like this:

   ```text
   Use Frank to create a draft study, and do not publish it. I want to interview customers who cancelled [product] in the last 30 days so I can decide what to fix first. Keep the interview under 10 minutes. Write 6 to 8 open questions about the recent decision: what they hoped for, when they first thought about leaving, what they tried, who else was involved, what they use now, and what would have changed their mind. Wait for me to review the guide. I will share the interviewer link with these customers myself.
   ```

3. Read the draft guide, take the interview yourself, and fix anything confusing or leading. A study created through MCP stays a draft until you approve publishing.
4. Share the interviewer link or a website widget with customers who recently cancelled, for example on your cancellation confirmation page or in a follow-up email. People talk with the AI interviewer by voice when they have time, without booking a call. Frank does not recruit participants.
5. As interviews come in, ask ChatGPT to read the transcripts from Frank using prompts 9 to 12 above. Then open a few full transcripts and check each quote you plan to act on.

MCP is included on every Frank plan, including Free. The Free plan includes 60 voice minutes a month, with no card required. Works with ChatGPT, Claude, Grok and Muse. In other MCP clients, use the MCP endpoint `https://api.hifrank.ai/mcp`.

## Frank AI Researcher is available as an app in ChatGPT

Frank AI Researcher is available as an app in ChatGPT. Draft a study, share the voice interview link with your own customers, and read the transcripts in the same chat.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-churn) and see [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-churn).

## FAQ

### Can ChatGPT run churn interviews by itself?

No. On its own, ChatGPT can help you plan the study, write questions and invites, and analyze transcripts you paste in. To have the interviews run by voice with your cancelled customers, connect a tool that conducts them. Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with customers you invite.

### How soon after a cancel should I send the interview?

Send it soon after the cancel or downgrade, while the decision is still easy to recall, for example on the cancellation confirmation page or in an email a few days later.

### Does Frank recruit cancelled customers for me?

No. Frank does not recruit participants. You invite people from your own cancel list, product, or email list by sharing the interviewer link or a website widget.

### Is it safe to paste transcripts into ChatGPT?

Follow your company's data rules. Remove names, emails, and anything sensitive you do not need before you paste transcripts. If Frank is connected in ChatGPT, ChatGPT can read the transcripts from Frank after you sign in and approve access.

## More ChatGPT prompts for customer interviews

- [ChatGPT prompts for customer discovery interviews](chatgpt-prompts-for-customer-discovery-interviews.html)
- [ChatGPT prompts for win-loss customer interviews](chatgpt-prompts-for-win-loss-customer-interviews.html)
- [ChatGPT prompts for product-market fit customer interviews](chatgpt-prompts-for-product-market-fit-customer-interviews.html)
- [ChatGPT prompts for onboarding customer interviews](chatgpt-prompts-for-onboarding-customer-interviews.html)
- [ChatGPT prompts for B2B SaaS user research interviews](chatgpt-prompts-for-b2b-saas-user-research-interviews.html)
- [ChatGPT prompts for pricing interviews](chatgpt-prompts-for-pricing-interviews.html)
- [ChatGPT prompts for feature prioritization interviews](chatgpt-prompts-for-feature-prioritization-interviews.html)
- [ChatGPT prompts for usability testing and UX interviews](chatgpt-prompts-for-usability-testing-and-ux-interviews.html)
- [ChatGPT prompts for jobs-to-be-done interviews](chatgpt-prompts-for-jobs-to-be-done-interviews.html)

## Related

- [How to run churn interviews with ChatGPT and Frank MCP](how-to-run-churn-interviews-with-chatgpt-and-frank-mcp.html)
- [How to find out why customers churn](how-to-find-out-why-customers-churn.html)
- [Churn interviews](churn-interviews.html)
- [Churn interview questions for B2B SaaS](churn-interview-questions-for-b2b-saas.html)
- [Churn (cancelled customers) template](templates/#churn-cancellation)
- [Cancellation reason sorter](tools/cancellation-reason-sorter/)
- [MCP setup](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-churn)
