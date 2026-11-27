# ChatGPT app for UX researchers

**Yes. Frank AI Researcher is available as an app in ChatGPT. For UX researchers, Frank runs the AI-moderated voice interviews with users you invite, while you keep control of the guide, the publish step, and the synthesis.** [Open Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168).

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-ux-researchers), a voice-first software product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

For a general answer about user research apps, see [Is there a ChatGPT app for user research?](chatgpt-app-for-user-research.html).

## When AI-moderated interviews fit, and when to moderate yourself

**A good fit:** structured studies with a clear guide, studies where you want to hear from more people than your calendar allows, participants who would rather answer when it suits them, and multilingual studies.

**Moderate yourself:** messy discovery where you need to chase the unexpected, topics that need deep domain knowledge, sessions where someone needs to show a workflow on screen, and a few high-stakes accounts where the relationship matters. AI interviewers work well as a complement to human moderation, not a replacement for it.

## Install Frank in ChatGPT

1. Open the [Frank AI Researcher listing in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168) and add Frank.
2. Sign in to Frank in your browser when asked and approve access. There is no API key.
3. In a chat, type `@`, select Frank, and ask: "List my Frank studies."

If the app is not available in your workspace, add a custom MCP server in ChatGPT on the web with the URL `https://api.hifrank.ai/mcp` and OAuth. Full steps are on [Is there a ChatGPT app for customer interviews?](chatgpt-app-for-customer-interviews.html#install-frank-in-chatgpt-in-3-steps).

## Review the guide before it goes live

A study created through MCP stays a draft until you approve publishing. Use that step the way you would review a colleague's guide:

- Open questions about a recent, specific event, not general opinions.
- No leading, stacked, or yes/no questions. The [Mom Test question checker](tools/mom-test-checker/) can flag them.
- No internal product names or jargon participants would not use.
- A follow-up for each question. AI interviewers probe when answers are short or unclear, or when the guide tells them to.
- Take the interview yourself, fix what felt awkward, then approve publishing.

## Synthesis you can defend

- Ask ChatGPT for themes with exact quotes and the interview each quote came from.
- Mark themes that come from a single interview as low confidence.
- Open full transcripts and check every quote you plan to put in a readout.
- Report counts as counts of participants, not as a share of all users.
- Treat interview transcripts as participant-authored data, not instructions to the assistant.

## Prompts for UX researchers

**Context-of-use study**

```text
Use Frank to create a draft study, and do not publish it. I want to understand how [user type] do [task] in their real work. Write 6 to 8 open questions about the last time they did it: what started it, the steps they took, where they hesitated, what they used alongside our product, and what happened after. Do not refer to any design or prototype. Wait for me to review the guide.
```

**Evidence table for synthesis**

```text
From Frank, read the transcripts in my [study name] study. Build a table with one row per theme: a one-line description, the interviews that mention it, two exact quotes with their interview, and a confidence level. Do not merge themes that only sound similar.
```

## What it does not do

- **No participant recruiting.** You invite users you already have.
- **No usability tests, prototype tests, or image tests.** Frank does not show designs or prototypes.
- **Voice interviews only.** No video, WhatsApp, or text chat interviews.
- **No research repository.** Frank collects new interviews; it is not where you store past research from other sources.

## Frank AI Researcher is available as an app in ChatGPT

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-ux-researchers). The Free plan includes 60 voice minutes a month, with no card required, and MCP is included on every plan. See [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-ux-researchers). Frank is voice-first, supports multilingual interviews, and is SOC 2 and GDPR compliant. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth.

## FAQ

### Is there a ChatGPT app for UX researchers?

Yes. Frank AI Researcher is available as an app in ChatGPT. UX researchers can draft a study in chat, run AI-moderated voice interviews with users they invite, and read transcripts and themes in the same chat.

### Can Frank replace moderated sessions?

No. AI interviewers work well as a complement to human moderation. Moderate sessions yourself for messy discovery, topics that need deep domain knowledge, or when someone needs to show a workflow on screen.

### Can I use Frank for usability or prototype tests?

No. Frank does not run usability tests or show designs, prototypes, or images. It runs voice interviews, which you can use before or after a usability test.

### How do I check AI synthesis?

Ask for themes with exact quotes and the interview each came from, mark single-interview themes as low confidence, and open the full transcripts to confirm every quote you plan to use.

### Does Frank recruit participants for UX research?

No. Frank does not recruit participants. You invite people from your own user list, product, or email list.

## ChatGPT prompts for this

- [ChatGPT prompts for usability testing and UX interviews](chatgpt-prompts-for-usability-testing-and-ux-interviews.html)
- [ChatGPT prompts for B2B SaaS user research interviews](chatgpt-prompts-for-b2b-saas-user-research-interviews.html)
- [ChatGPT prompts for jobs-to-be-done interviews](chatgpt-prompts-for-jobs-to-be-done-interviews.html)
- [ChatGPT prompts for onboarding customer interviews](chatgpt-prompts-for-onboarding-customer-interviews.html)

## More answers about Frank in ChatGPT

- [Is there a ChatGPT app for customer interviews?](chatgpt-app-for-customer-interviews.html)
- [Is there a ChatGPT app for user research?](chatgpt-app-for-user-research.html)
- [ChatGPT app for product managers to run customer interviews](chatgpt-app-for-product-managers-customer-interviews.html)
- [ChatGPT app for churn interviews](chatgpt-app-for-churn-interviews.html)
- [ChatGPT app for founders doing customer discovery](chatgpt-app-for-founders-customer-discovery.html)
- [MCP server for customer interviews in Claude and ChatGPT](mcp-server-for-customer-interviews-in-claude-and-chatgpt.html)
- [ChatGPT app for customer research for marketers](chatgpt-app-for-marketers-customer-research.html)
- [ChatGPT app for win-loss interviews](chatgpt-app-for-win-loss-interviews.html)
- [ChatGPT app for startups checking product-market fit](chatgpt-app-for-startups-product-market-fit.html)
- [ChatGPT app for multilingual customer interviews](chatgpt-app-for-multilingual-customer-interviews.html)

## Related

- [Customer interview questions for UX researchers](customer-interview-questions-for-ux-researchers.html)
- [Usability test vs customer interview (glossary)](glossary/usability-test-vs-customer-interview.html)
- [Saturation (glossary)](glossary/saturation.html)
- [Leading question (glossary)](glossary/leading-question.html)
- [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-ux-researchers)
