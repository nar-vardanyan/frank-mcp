# ChatGPT prompts for onboarding customer interviews

**In short:** These ChatGPT prompts help you interview new users about their first days with your product: define the activation moment, write guides for users who reached it and users who did not, invite people while signup is fresh, and map each point of confusion onto your onboarding steps. Replace the text in [brackets] with your own details. When you want the interviews themselves to run by voice, Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with the users you invite.

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-onboarding), a voice-first product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## How to use these prompts

Use these prompts when signups do not turn into active users, or after you change your onboarding flow. Funnel data shows where people drop off. Interviews explain what they expected, where they got stuck, and what they did next.

Paste a prompt into ChatGPT, fill in the [brackets], and edit the output before you use it. The prompts follow the order of a study: plan it, write the guide, write the invite, analyze the transcripts, then decide. Remove names, emails, and anything sensitive you do not need before you paste survey answers or transcripts.

## Prompts to plan the study

### 1. Pick the onboarding question

```text
Here is our onboarding flow and where users drop off: [paste steps and any funnel data]. Help me pick the one onboarding question this study should answer, and list hypotheses about why new users stall at [step].
```

### 2. Define activation and the groups to compare

```text
Define the activation moment for [product] as a specific action a new user takes. Then suggest two groups to interview: new users who reached it within [number] days and new users who did not.
```

### 3. Plan timing and context

```text
Suggest when to invite each group, given how fresh the signup memory needs to be, and list what to note about each person before the interview (plan, signup source, steps completed) so the analysis can compare like with like.
```

## Prompts to write the discussion guide

### 4. Guide for new users

```text
Write a 10-minute voice interview guide for users who signed up for [product] in the last 14 days. Ask them to walk through it in order: what made them sign up that day, what they expected, the first thing they tried, where they got stuck or unsure, what they did then, and whether they came back. One follow-up each.
```

### 5. Guide for activated users

```text
Write a version for users who reached [activation moment]: what got them there, what almost stopped them, what they did outside the product to make it work, and what they would tell a colleague setting it up.
```

### 6. Replace rating questions

```text
Review this guide [paste] for questions that ask users to rate or predict, such as "How easy was setup?" Rewrite them as questions about what happened during their first sessions.
```

## Prompts to write the invite

### 7. Email a few days after signup

```text
Write a short email sent [number] days after signup, inviting new users to a voice interview of about 10 minutes about their first days with [product], which they can take from a link when it suits them. Say we want to fix what was confusing, and that unfinished setup is exactly what we want to hear about. Under 80 words. Leave [link] as a placeholder.
```

### 8. In-app prompt and re-engagement version

```text
Write a one-line in-app prompt to show after [step] that links to the same interview, plus a version for users who have not logged in for [number] days.
```

## Prompts to analyze transcripts

### 9. Extract each first-days story

```text
Below are onboarding interview transcripts: [paste]. For each one, list the reason they signed up, what they expected, their first action, each point of confusion and the step where it happened, what they did next, and whether they reached [activation moment]. One exact quote per point of confusion. Do not invent quotes.
```

### 10. Map confusion onto onboarding steps

```text
Map the points of confusion onto our onboarding steps: [paste steps]. For each step, list how many interviews mention trouble there, the type of trouble (unclear value, missing data, setup effort, wording), and two quotes.
```

## Prompts to synthesize themes

### 11. Compare activated and stalled users

```text
Compare users who reached activation with users who did not. What did the activated users do or know that the others did not? Separate things we can change in the product from things about the user's situation.
```

### 12. Write the onboarding readout

```text
Write an onboarding readout: the activation moment, where people stall and why, three changes ordered by effort, and the quotes behind each. Suggest what to measure after each change ships.
```

## Run the interviews with Frank inside ChatGPT

The prompts above help you plan the study and make sense of the results. ChatGPT does not interview your customers by itself. To have the interviews run by voice, connect Frank AI Researcher, which runs AI-moderated voice interviews with the people you invite and asks follow-up questions when answers are short.

1. [Install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). Sign in to Frank in your browser and approve access. There is no API key.
2. In a chat, type `@`, select Frank, and paste a request like this:

   ```text
   Use Frank to create a draft study, and do not publish it. I want to interview users who signed up for [product] in the last 14 days so I can see where onboarding loses people. Keep the interview under 10 minutes. Write 6 to 8 open questions that walk through their first days in order: why they signed up, what they expected, what they tried first, where they got stuck, and what they did next. Wait for me to review the guide. I will share the interviewer link with these users myself.
   ```

3. Read the draft guide, take the interview yourself, and fix anything confusing or leading. A study created through MCP stays a draft until you approve publishing.
4. Share the interviewer link or a website widget with users who signed up recently, for example in an email a few days after signup or an in-app message. People talk with the AI interviewer by voice when they have time, without booking a call. Frank does not recruit participants.
5. As interviews come in, ask ChatGPT to read the transcripts from Frank using prompts 9 to 12 above. Then open a few full transcripts and check each quote you plan to act on.

MCP is included on every Frank plan, including Free. The Free plan includes 60 voice minutes a month, with no card required. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. In other MCP clients, use the MCP endpoint `https://api.hifrank.ai/mcp`.

## Frank AI Researcher is available as an app in ChatGPT

Frank AI Researcher is available as an app in ChatGPT. Draft a study, share the voice interview link with your own customers, and read the transcripts in the same chat.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-onboarding) and see [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-onboarding).

## FAQ

### What should I ask new users in an onboarding interview?

Ask them to walk through their first days in order: why they signed up that day, what they expected, the first thing they tried, where they got stuck or unsure, what they did next, and whether they came back. Avoid asking them to rate how easy setup was.

### Can ChatGPT run onboarding interviews by itself?

No. On its own, ChatGPT can help you define activation, write guides and invites, and analyze transcripts you paste in. To have the interviews run by voice, connect a tool that conducts them. Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with users you invite.

### When should I invite new users to an onboarding interview?

Within the first couple of weeks after signup, while the first sessions are still easy to recall. Invite both users who reached your activation moment and users who did not, so you can compare them.

### Does Frank recruit new users to interview?

No. Frank does not recruit participants. You invite your own new users by email, in-app message, or a website widget.

## More ChatGPT prompts for customer interviews

- [ChatGPT prompts for churn customer interviews](chatgpt-prompts-for-churn-customer-interviews.html)
- [ChatGPT prompts for customer discovery interviews](chatgpt-prompts-for-customer-discovery-interviews.html)
- [ChatGPT prompts for win-loss customer interviews](chatgpt-prompts-for-win-loss-customer-interviews.html)
- [ChatGPT prompts for product-market fit customer interviews](chatgpt-prompts-for-product-market-fit-customer-interviews.html)
- [ChatGPT prompts for B2B SaaS user research interviews](chatgpt-prompts-for-b2b-saas-user-research-interviews.html)
- [ChatGPT prompts for pricing interviews](chatgpt-prompts-for-pricing-interviews.html)
- [ChatGPT prompts for feature prioritization interviews](chatgpt-prompts-for-feature-prioritization-interviews.html)
- [ChatGPT prompts for usability testing and UX interviews](chatgpt-prompts-for-usability-testing-and-ux-interviews.html)
- [ChatGPT prompts for jobs-to-be-done interviews](chatgpt-prompts-for-jobs-to-be-done-interviews.html)

## Related

- [Why users don't adopt a new feature](why-users-dont-adopt-a-new-feature.html)
- [Onboarding experience template](templates/#onboarding-experience)
- [Activation drop-off template](templates/#activation-drop-off)
- [Customer interview questions for product managers](customer-interview-questions-for-product-managers.html)
- [How to get customer feedback](how-to-get-customer-feedback.html)
- [Customer interview question bank](tools/customer-interview-question-bank/)
- [MCP setup](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-onboarding)
