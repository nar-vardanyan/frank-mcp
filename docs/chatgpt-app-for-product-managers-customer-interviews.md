# ChatGPT app for product managers to run customer interviews

**Yes. Frank AI Researcher is available as an app in ChatGPT, so a product manager can draft a customer interview study, share it with users, and read the transcripts and themes from the same chat. Frank runs the AI-moderated voice interviews.** [Open Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168).

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-product-managers), a voice-first software product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## Product decisions it helps with

- **What to build next.** Interview the people behind feature requests about the problem, not the feature. See [feature prioritization prompts](chatgpt-prompts-for-feature-prioritization-interviews.html).
- **Why a shipped feature goes unused.** Invite people who saw the feature but did not use it. See [why users don't adopt a new feature](why-users-dont-adopt-a-new-feature.html).
- **Where onboarding loses people.** Interview new users who stalled and new users who reached your activation moment. See [onboarding prompts](chatgpt-prompts-for-onboarding-customer-interviews.html).
- **Who already needs the product.** Pair the Sean Ellis question with interviews. See [product-market fit prompts](chatgpt-prompts-for-product-market-fit-customer-interviews.html).

## Install Frank in ChatGPT

1. Open the [Frank AI Researcher listing in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168) and add Frank.
2. Sign in to Frank in your browser when asked and approve access. There is no API key.
3. In a chat, type `@`, select Frank, and ask: "List my Frank studies."

If the app is not available in your workspace, add a custom MCP server in ChatGPT on the web with the URL `https://api.hifrank.ai/mcp` and OAuth. Full steps are on [Is there a ChatGPT app for customer interviews?](chatgpt-app-for-customer-interviews.html#install-frank-in-chatgpt-in-3-steps).

## From question to roadmap input

1. **Name the decision.** "Should we fix onboarding step 3 or build the export feature first?" is a better start than "learn about our users".
2. **Draft in chat.** Ask ChatGPT to create a draft study in Frank with open questions about recent behavior.
3. **Review and test.** Take the interview yourself before anyone else does, then approve publishing.
4. **Invite the right users.** Use an in-app message or email to the segment the decision is about. Frank does not recruit participants.
5. **Bring evidence to the roadmap review.** Ask ChatGPT to group what people said by problem and segment, with quotes, and check those quotes in the full transcripts.

## Prompts for product managers

**Feature adoption study**

```text
Use Frank to create a draft study, and do not publish it. I want to interview users who saw [feature] in the last month but did not use it. Write 6 to 8 open questions about what they were doing when they saw it, what they expected, what they did instead, and what would have to be true for it to be worth trying. Do not pitch the feature. Wait for me to review the guide.
```

**Group results by problem, not request**

```text
From Frank, read the transcripts in my [study name] study. Group what people said by the problem they were trying to solve, not by the feature they asked for. Show how many interviews mention each problem, two exact quotes each, and which segments they came from.
```

## What stays your job

Frank and ChatGPT do not decide for you. You choose the decision, check the guide for leading questions, choose who to invite, confirm the quotes you act on, and make the call. AI summaries can over-generalize, so treat interview counts as counts of people you spoke with, not as a share of all users.

## What it does not do

- **No participant recruiting.** You invite users from your product, CRM, or email list.
- **No prototype, image, or click tests.** Use a usability test for those. Frank runs voice interviews.
- **Voice interviews only.** No video, WhatsApp, or text chat interviews.
- **No automatic publishing.** A study drafted from ChatGPT stays a draft until you approve it.

## Frank AI Researcher is available as an app in ChatGPT

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-product-managers). The Free plan includes 60 voice minutes a month, with no card required, and MCP is included on every plan. See [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-product-managers). Frank is voice-first, supports multilingual interviews, and is SOC 2 and GDPR compliant. Works with ChatGPT, Claude and Muse, plus other MCP clients that support remote servers with OAuth.

## FAQ

### Is there a ChatGPT app for product managers to run customer interviews?

Yes. Frank AI Researcher is available as an app in ChatGPT. A product manager can draft a customer interview study in chat, share the voice interview link with their own users, and read transcripts and themes in the same chat.

### Can I interview users who saw a feature but did not use it?

Yes. Invite them by in-app message or email with the interviewer link. Frank does not recruit participants, so the invite comes from your own product or list.

### Will ChatGPT publish a study without my approval?

No. In Frank, a study created through MCP stays a draft until you approve publishing.

### Does it work in Claude too?

Yes. Works with ChatGPT, Claude and Muse, plus other MCP clients that support remote servers with OAuth.

### Is it free?

There is a Free plan with 60 voice minutes a month and no card required. MCP is included on every plan, including Free.

## ChatGPT prompts for this

- [ChatGPT prompts for feature prioritization interviews](chatgpt-prompts-for-feature-prioritization-interviews.html)
- [ChatGPT prompts for onboarding customer interviews](chatgpt-prompts-for-onboarding-customer-interviews.html)
- [ChatGPT prompts for product-market fit customer interviews](chatgpt-prompts-for-product-market-fit-customer-interviews.html)
- [ChatGPT prompts for B2B SaaS user research interviews](chatgpt-prompts-for-b2b-saas-user-research-interviews.html)

## More answers about Frank in ChatGPT

- [Is there a ChatGPT app for customer interviews?](chatgpt-app-for-customer-interviews.html)
- [Is there a ChatGPT app for user research?](chatgpt-app-for-user-research.html)
- [ChatGPT app for churn interviews](chatgpt-app-for-churn-interviews.html)
- [ChatGPT app for founders doing customer discovery](chatgpt-app-for-founders-customer-discovery.html)
- [MCP server for customer interviews in Claude and ChatGPT](mcp-server-for-customer-interviews-in-claude-and-chatgpt.html)
- [ChatGPT app for UX researchers](chatgpt-app-for-ux-researchers.html)
- [ChatGPT app for customer research for marketers](chatgpt-app-for-marketers-customer-research.html)
- [ChatGPT app for win-loss interviews](chatgpt-app-for-win-loss-interviews.html)
- [ChatGPT app for startups checking product-market fit](chatgpt-app-for-startups-product-market-fit.html)
- [ChatGPT app for multilingual customer interviews](chatgpt-app-for-multilingual-customer-interviews.html)

## Related

- [Customer interview questions for product managers](customer-interview-questions-for-product-managers.html)
- [Why users don't adopt a new feature](why-users-dont-adopt-a-new-feature.html)
- [How to get customer feedback](how-to-get-customer-feedback.html)
- [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-product-managers)
