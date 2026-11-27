# ChatGPT prompts for usability testing and UX interviews

**In short:** These ChatGPT prompts help you plan and analyze usability tests and the UX interviews around them: write realistic tasks and a neutral test script, prepare a follow-up interview about how people use the live product, and turn your notes and transcripts into findings. Replace the text in [brackets] with your own details. A usability test means watching someone try a task. Frank AI Researcher does not run usability tests or show designs or prototypes. It runs AI-moderated voice interviews, which you can use before or after a test to hear how people use your live product in their own work. Frank is available as an app in ChatGPT.

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-usability-testing), a voice-first product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## How to use these prompts

Use the test prompts when you need to see where people struggle with a specific flow. Use the interview prompts when you need the context around that flow: what people were trying to do, what they use alongside it, and what happened after.

Paste a prompt into ChatGPT, fill in the [brackets], and edit the output before you use it. The prompts follow the order of a study: plan it, write the guide, write the invite, analyze the transcripts, then decide. Remove names, emails, and anything sensitive you do not need before you paste survey answers or transcripts.

## Prompts to plan the study

### 1. Set the research questions

```text
We are testing [flow or screen] in [product]. Ask me what we already know from analytics and support tickets, then write three research questions for a usability test and two for follow-up interviews, and explain which method fits each question.
```

### 2. Write realistic tasks

```text
Write five usability test tasks for [flow] as short scenarios a real user would recognize. Do not use the words on our buttons or menus in the task text. For each task, write what success looks like and what we will watch for.
```

### 3. Choose who to include

```text
Describe who should take part in this study in terms of behavior, for example people who did [task] in the last month, and how to mix new and experienced users. I will invite people from my own user list.
```

## Prompts to write the discussion guide

### 4. Usability test script

```text
Write a moderator script for a usability test of [flow]: a short introduction that says we are testing the product, not the person, a reminder to think aloud, the tasks in order, neutral prompts to use when someone goes quiet, and a short debrief. No leading prompts like "Was that easy?"
```

### 5. Follow-up UX interview guide

```text
Write a 10-minute voice interview guide for users of [product] about the last time they did [task] in their real work: what started it, what they did step by step, where they hesitated, what they used alongside the product, and what happened after. One follow-up each. Do not refer to any design or prototype.
```

### 6. Check scripts for leading language

```text
Review this script and guide [paste]. Flag leading prompts, rating questions, and any wording copied from our interface. Rewrite each one as a neutral prompt or a question about a past event.
```

## Prompts to write the invite

### 7. Email for a follow-up interview

```text
Write a short email inviting users who did [task] recently to a voice interview of about 10 minutes about how they do it, which they can take from a link when it suits them. Say we want to improve that part of the product and there are no right or wrong answers. Under 80 words. Leave [link] as a placeholder.
```

### 8. In-app invite after a task

```text
Write a one-line in-app message shown after a user completes [task], inviting them to the same voice interview, plus a version for users who started [task] but did not finish it.
```

## Prompts to analyze transcripts

### 9. Turn test notes into issues

```text
Below are notes from usability test sessions: [paste]. For each task, list where people hesitated, made errors, or gave up, with the participant and a short quote or observation. Then group the issues and rate each as blocking, slowing, or minor, explaining each rating in one line. Do not invent observations.
```

### 10. Extract context from interview transcripts

```text
Below are follow-up interview transcripts: [paste]. For each one, extract the real-world goal, the steps they described, where they hesitated, the tools they used alongside the product, and what happened after. One exact quote per field. Do not invent quotes.
```

## Prompts to synthesize themes

### 11. Connect test issues with real-world context

```text
Match the usability issues with what people said in interviews. For each issue, show whether interviews suggest it matters in real work, with quotes, and flag issues that only appeared in the test setting.
```

### 12. Write the UX readout

```text
Write a one-page readout: the research questions, the issues found with severity and evidence, the context from interviews, recommended changes ordered by effort, and what to test again after the changes. Report counts as counts of participants, not percentages of all users.
```

## Run the interviews with Frank inside ChatGPT

The prompts above help you plan the study and make sense of the results. ChatGPT does not interview your customers by itself. To have the interviews run by voice, connect Frank AI Researcher, which runs AI-moderated voice interviews with the people you invite and asks follow-up questions when answers are short.

1. [Install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). Sign in to Frank in your browser and approve access. There is no API key.
2. In a chat, type `@`, select Frank, and paste a request like this:

   ```text
   Use Frank to create a draft study, and do not publish it. I want to interview users of [product] about how they do [task] in their real work. Keep the interview under 10 minutes. Write 6 to 8 open questions about the last time they did it: what started it, the steps they took, where they hesitated, what they used alongside the product, and what happened after. Do not refer to any design or prototype. Wait for me to review the guide. I will share the interviewer link with these users myself.
   ```

3. Read the draft guide, take the interview yourself, and fix anything confusing or leading. A study created through MCP stays a draft until you approve publishing.
4. Share the interviewer link or a website widget with users who recently did the task you are studying, for example through an in-app message or email. People talk with the AI interviewer by voice when they have time, without booking a call. Frank does not recruit participants.
5. As interviews come in, ask ChatGPT to read the transcripts from Frank using prompts 9 to 12 above. Then open a few full transcripts and check each quote you plan to act on.

MCP is included on every Frank plan, including Free. The Free plan includes 60 voice minutes a month, with no card required. Works with ChatGPT, Claude, Grok and Muse. In other MCP clients, use the MCP endpoint `https://api.hifrank.ai/mcp`.

## Frank AI Researcher is available as an app in ChatGPT

Frank AI Researcher is available as an app in ChatGPT. Draft a study, share the voice interview link with your own customers, and read the transcripts in the same chat.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-usability-testing) and see [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-usability-testing).

## FAQ

### What is the difference between a usability test and a UX interview?

A usability test watches someone try a task in a product or design. A UX interview asks about a real event or workflow in their life. Use tests to find where a flow breaks, and interviews to learn the context and goals around it.

### Can Frank run usability tests?

No. Frank AI Researcher does not run usability tests or show designs or prototypes. It runs AI-moderated voice interviews, which you can use before or after a usability test to hear how people use your live product in their own work.

### Can ChatGPT help with usability testing?

Yes, with planning and analysis. ChatGPT can help you write tasks, scripts, and interview guides, and turn your session notes and transcripts into findings. It cannot observe your participants for you.

### Does Frank recruit participants for UX research?

No. Frank does not recruit participants. You invite people from your own user list, product, or email list.

## More ChatGPT prompts for customer interviews

- [ChatGPT prompts for churn customer interviews](chatgpt-prompts-for-churn-customer-interviews.html)
- [ChatGPT prompts for customer discovery interviews](chatgpt-prompts-for-customer-discovery-interviews.html)
- [ChatGPT prompts for win-loss customer interviews](chatgpt-prompts-for-win-loss-customer-interviews.html)
- [ChatGPT prompts for product-market fit customer interviews](chatgpt-prompts-for-product-market-fit-customer-interviews.html)
- [ChatGPT prompts for onboarding customer interviews](chatgpt-prompts-for-onboarding-customer-interviews.html)
- [ChatGPT prompts for B2B SaaS user research interviews](chatgpt-prompts-for-b2b-saas-user-research-interviews.html)
- [ChatGPT prompts for pricing interviews](chatgpt-prompts-for-pricing-interviews.html)
- [ChatGPT prompts for feature prioritization interviews](chatgpt-prompts-for-feature-prioritization-interviews.html)
- [ChatGPT prompts for jobs-to-be-done interviews](chatgpt-prompts-for-jobs-to-be-done-interviews.html)

## Related

- [Usability test vs customer interview (glossary)](glossary/usability-test-vs-customer-interview.html)
- [Customer interview questions for UX researchers](customer-interview-questions-for-ux-researchers.html)
- [Leading question (glossary)](glossary/leading-question.html)
- [Workflow mapping template](templates/#workflow-mapping)
- [How to run customer interviews](how-to-run-customer-interviews.html)
- [Customer interview summary template](tools/customer-interview-summary-template/)
- [MCP setup](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-usability-testing)
