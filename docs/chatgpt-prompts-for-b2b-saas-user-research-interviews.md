# ChatGPT prompts for B2B SaaS user research interviews

**In short:** These ChatGPT prompts help you run user research interviews in B2B SaaS, where the person who buys, the person who sets the product up, and the people who use it every day often want different things. Plan the study around those roles, write a guide for each, invite people from accounts you already have, and analyze the transcripts by role. Replace the text in [brackets] with your own details. When you want the interviews themselves to run by voice, Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with the people you invite.

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-b2b-saas-user-research), a voice-first product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## How to use these prompts

Use these prompts when a roadmap, onboarding, or packaging decision depends on how different people inside customer accounts actually work. Product analytics shows what happened in the product. Interviews explain the workflow around it, the workarounds, and who else is involved.

Paste a prompt into ChatGPT, fill in the [brackets], and edit the output before you use it. The prompts follow the order of a study: plan it, write the guide, write the invite, analyze the transcripts, then decide. Remove names, emails, and anything sensitive you do not need before you paste survey answers or transcripts.

## Prompts to plan the study

### 1. Map the roles in a customer account

```text
I run [product], a B2B SaaS product for [customer type]. List the roles that usually touch the product in a customer account (for example buyer, admin, team lead, end user). For each role, write what they are responsible for, what they are likely to know that the others do not, and one research question only they can answer.
```

### 2. Turn a roadmap question into a study

```text
We need to decide [decision]. Ask me up to five questions about what we already know from analytics, support tickets, and sales notes. Then write the learning goal for a user research study, the roles to interview, and what we would need to hear to change our current plan.
```

### 3. Choose accounts to invite

```text
Here is a list of accounts with plan, size, industry, tenure, and usage level, without contact details: [paste]. Suggest a mix of accounts to invite so we hear from heavy and light users and from different segments, and explain the reasoning. Only suggest accounts we already have.
```

## Prompts to write the discussion guide

### 4. Guide for end users

```text
Write a 10-minute voice interview guide for end users of [product] about the last time they did [task]. Ask them to walk through it in order: what started it, the tools and people involved, where it slowed down, what they did outside the product, and what happened after. One follow-up per question. No questions about features we are planning.
```

### 5. Guide for admins

```text
Write a version for admins who set up and manage [product] for their team: the last time they added users or changed settings, what they had to explain to colleagues, what they report on, and what made their job harder. One follow-up each.
```

### 6. Check the guides for jargon and leading questions

```text
Review these guides [paste]. Flag internal product names, jargon a customer would not use, leading questions, and questions answerable with yes or no. Rewrite each flagged question in plain language about a past event.
```

## Prompts to write the invite

### 7. Email through the account owner

```text
Write a short email that our customer success manager can send to their main contact at an account, asking them to share a voice interview link with two or three people on their team who use [product]. Say what we want to learn, that it takes about 10 minutes from a link whenever it suits them, and that it is not a sales call. Under 100 words. Leave [link] as a placeholder.
```

### 8. In-app invite for active users

```text
Write a one-line in-app message for users who did [task] this week, inviting them to a short voice interview about how they do it, plus a version for admins shown on the settings page.
```

## Prompts to analyze transcripts

### 9. Extract the workflow by role

```text
Below are interview transcripts, each labeled with role and account segment: [paste]. For each one, extract the task, the steps in order, the tools and people involved, where it slowed down, and any workaround. One exact quote per field. Do not invent quotes. Write "not mentioned" when a field is missing.
```

### 10. Compare roles

```text
Compare what admins, end users, and buyers said. Where do their goals or complaints conflict? Where do they agree? Show quotes from each role, and mark findings backed by a single interview as low confidence.
```

## Prompts to synthesize themes

### 11. Find the workflow gaps worth fixing

```text
Group the slowdowns and workarounds across all interviews. For each group, show which roles and segments mention it, two quotes, and whether it points to onboarding, the product, permissions, or reporting.
```

### 12. Write the research readout

```text
Write a one-page readout for product and customer success: the decision we set out to inform, what we learned by role, the gaps worth fixing, what we will not change and why, and open questions. Report interview counts as counts, not as percentages of all customers.
```

## Run the interviews with Frank inside ChatGPT

The prompts above help you plan the study and make sense of the results. ChatGPT does not interview your customers by itself. To have the interviews run by voice, connect Frank AI Researcher, which runs AI-moderated voice interviews with the people you invite and asks follow-up questions when answers are short.

1. [Install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). Sign in to Frank in your browser and approve access. There is no API key.
2. In a chat, type `@`, select Frank, and paste a request like this:

   ```text
   Use Frank to create a draft study, and do not publish it. I want to interview end users of [product] at our B2B customers about how they do [task] today. Keep the interview under 10 minutes. Write 6 to 8 open questions that walk through the last time they did it: what started it, the tools and people involved, where it slowed down, and what they did outside the product. Wait for me to review the guide. I will share the interviewer link with these users myself.
   ```

3. Read the draft guide, take the interview yourself, and fix anything confusing or leading. A study created through MCP stays a draft until you approve publishing.
4. Share the interviewer link or a website widget with people at accounts you already have, for example through your customer success team or an in-app message. People talk with the AI interviewer by voice when they have time, without booking a call. Frank does not recruit participants.
5. As interviews come in, ask ChatGPT to read the transcripts from Frank using prompts 9 to 12 above. Then open a few full transcripts and check each quote you plan to act on.

MCP is included on every Frank plan, including Free. The Free plan includes 60 voice minutes a month, with no card required. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. In other MCP clients, use the MCP endpoint `https://api.hifrank.ai/mcp`.

## Frank AI Researcher is available as an app in ChatGPT

Frank AI Researcher is available as an app in ChatGPT. Draft a study, share the voice interview link with your own customers, and read the transcripts in the same chat.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-b2b-saas-user-research) and see [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-b2b-saas-user-research).

## FAQ

### Who should I interview for B2B SaaS user research?

Interview more than one role per account where you can: the people who use the product every day, the admins who set it up, and, for buying questions, the person who signed off. Each role sees a different part of the workflow.

### Can ChatGPT run user research interviews by itself?

No. On its own, ChatGPT can help you plan the study, write guides and invites, and analyze transcripts you paste in. To have the interviews run by voice, connect a tool that conducts them. Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with people you invite.

### Does Frank recruit users at customer accounts?

No. Frank does not recruit participants. You invite people from accounts you already have, for example through your customer success team, an in-app message, or a website widget.

### How do I get busy B2B users to take part?

Ask through someone they already know, such as their account owner or admin, keep it short, and let them take the interview from a link when it suits them instead of booking a call.

## More ChatGPT prompts for customer interviews

- [ChatGPT prompts for churn customer interviews](chatgpt-prompts-for-churn-customer-interviews.html)
- [ChatGPT prompts for customer discovery interviews](chatgpt-prompts-for-customer-discovery-interviews.html)
- [ChatGPT prompts for win-loss customer interviews](chatgpt-prompts-for-win-loss-customer-interviews.html)
- [ChatGPT prompts for product-market fit customer interviews](chatgpt-prompts-for-product-market-fit-customer-interviews.html)
- [ChatGPT prompts for onboarding customer interviews](chatgpt-prompts-for-onboarding-customer-interviews.html)
- [ChatGPT prompts for pricing interviews](chatgpt-prompts-for-pricing-interviews.html)
- [ChatGPT prompts for feature prioritization interviews](chatgpt-prompts-for-feature-prioritization-interviews.html)
- [ChatGPT prompts for usability testing and UX interviews](chatgpt-prompts-for-usability-testing-and-ux-interviews.html)
- [ChatGPT prompts for jobs-to-be-done interviews](chatgpt-prompts-for-jobs-to-be-done-interviews.html)

## Related

- [Customer interview questions for B2B SaaS](customer-interview-questions-for-b2b-saas.html)
- [Customer interview questions for customer success teams](customer-interview-questions-for-customer-success-teams.html)
- [How to run customer interviews](how-to-run-customer-interviews.html)
- [Voice of customer (glossary)](glossary/voice-of-customer.html)
- [Workflow mapping template](templates/#workflow-mapping)
- [Customer interview guide generator](tools/customer-interview-guide-generator/)
- [MCP setup](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-b2b-saas-user-research)
