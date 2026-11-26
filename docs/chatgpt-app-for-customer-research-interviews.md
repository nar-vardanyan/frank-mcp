# ChatGPT Apps for Customer Research Interviews: What Each Can Do

**In short:** Several research tools now connect to ChatGPT through MCP, but they do different things there. Some run new customer interviews from a chat; others only search research you already have. Frank lets ChatGPT draft a study, run AI-moderated voice interviews with your own customers, and read the transcripts, with nothing published until you approve it.

**We make [Frank AI Researcher](https://www.hifrank.ai)**, a voice-first product that runs AI-moderated voice interviews with your own customers. This page compares research tools that document a ChatGPT connection, using each company's live public pages and structured data, opened on 19 November 2026. It is not a paid ranking or a complete catalog. Check each site before you connect anything. Frank does not recruit participants.

## How research tools get into ChatGPT

ChatGPT connects to outside tools through the Model Context Protocol (MCP), an open standard for linking AI applications to tools and data ([modelcontextprotocol.io](https://modelcontextprotocol.io/)). OpenAI's developer docs say you can connect an MCP server to ChatGPT as a plugin, and that ChatGPT supports both read and write tools from your server ([OpenAI, Add custom MCP server](https://developers.openai.com/api/docs/guides/custom-mcp-server)).

That matters for research. Older guidance described ChatGPT connectors as limited to read-only search and fetch, which would mean an assistant could look up past studies but not start new ones. OpenAI's current docs say write actions are available, subject to confirmation settings (same source). So the real question is what each research tool exposes.

OpenAI also warns that an untrusted server may access information shared through app use or trick ChatGPT into using tools in unintended ways, and says to connect only servers you trust (same source).

## Three kinds of ChatGPT research app

1. **Run interviews.** The assistant can set up a study and the tool interviews real people. New evidence comes back into the chat.
2. **Build and recruit.** The assistant can design a study and set up recruiting from a panel.
3. **Search what you have.** The assistant can pull themes, quotes and synthesis from past studies, but doesn't start fieldwork.

## Research tools that document a ChatGPT connection

| Tool | What ChatGPT can do through it (per the vendor) | Interviews | Participants |
|---|---|---|---|
| **Frank** | Draft a study (kept as a draft until you approve), list studies, read transcripts and themes ([MCP](https://www.hifrank.ai/mcp)) | AI-moderated voice interviews, multilingual interviews | Your own customers via link or widget; does not recruit |
| **Outset** | "Create studies, configure recruitment, launch research, and analyze findings" ([Outset MCP](https://outset.ai/resources/changeblog/outset-mcp)) | Text, voice, video and voice-to-voice ([Pricing](https://outset.ai/pricing)) | 25+ panel integrations, or your own lists ([Recruit](https://outset.ai/platform/recruit)) |
| **Strella** | "Explore projects, analyze transcripts, and manage studies" ([Strella MCP docs](https://app.strella.io/docs/product/mcp)) | AI and human moderation ([Product](https://www.strella.io/product)) | Panel of "over 8 million participants" ([Product](https://www.strella.io/product)) |
| **Listen Labs** | Pull "themes, quotes, and cross-study synthesis" from your Listen workspace ([Listen MCP](https://listenlabs.com/blog/listen-mcp)) | AI moderator, 120+ languages ([listenlabs.com](https://listenlabs.com/)) | 50M+ network, or your own contacts ([listenlabs.com](https://listenlabs.com/)) |
| **Usercall** | Hosted connector at `https://mcp.usercall.co`, sign in with OAuth, no API key ([Usercall API docs](https://app.usercall.co/docs/api)) | AI voice interviews, 50+ languages ([Pricing](https://www.usercall.co/pricing)) | Recruits for you, or bring your own ([Recruit](https://www.usercall.co/recruit-participants)) |
| **User Intuition** | "API & MCP server access" listed on its Starter plan ([Pricing](https://www.userintuition.ai/pricing/)) | Chat, audio or video ([Pricing](https://www.userintuition.ai/pricing/)) | Your own customers, or a 4M+ vetted panel ([Pricing](https://www.userintuition.ai/pricing/)) |
| **Koji** | "Run studies from Claude, ChatGPT" in plain language ([koji.so](https://www.koji.so/)) | Voice, chat or phone ([koji.so](https://www.koji.so/)) | Self-recruit or panel ([koji.so](https://www.koji.so/)) |
| **Great Question** | MCP access is part of Enterprise, not Self-serve ([Pricing](https://www.greatquestion.com/pricing)) | AI-moderated interviews are an Enterprise add-on ([Pricing](https://www.greatquestion.com/pricing)) | Research CRM and panel add-ons ([Pricing](https://www.greatquestion.com/pricing)) |

Vendor descriptions are quoted from their own pages. If a capability isn't on the page reviewed, it isn't assumed missing.

## Connecting Frank to ChatGPT

OpenAI documents the custom-server path on ChatGPT on the web: go to **Plugins**, select the plus button, choose **Add custom MCP server**, enter a name and the server URL, configure authentication, accept the risk warning, and select **Create as a plugin**. Then install it and type `@` in the prompt box to use it ([OpenAI, Add custom MCP server](https://developers.openai.com/api/docs/guides/custom-mcp-server)). Workspace permissions apply (same source). For Frank:

1. In ChatGPT on the web, add a custom MCP server named **Frank**.
2. Server URL: `https://api.hifrank.ai/mcp`
3. Choose OAuth, then sign in to Frank in your browser and approve access. There is no API key.
4. Install the plugin, then ask: "@Frank list my Frank studies."

MCP is included on every Frank plan, including Free. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. See [hifrank.ai/mcp](https://www.hifrank.ai/mcp).

## A study from ChatGPT, start to finish

1. **Ask for a draft.** "Use Frank to create a study on why trial users don't upgrade. Six open questions about recent behavior, under 10 minutes."
2. **Review it.** In Frank, new research created through MCP stays a draft and is not published to participants until you approve it. Take the interview yourself.
3. **Share the link.** Send the [interviewer link](https://www.hifrank.ai/docs/navigating-your-ai-interviewer-dashboard) to your own customers, or embed a [website widget](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site). Frank does not recruit participants.
4. **Let it run.** Customers talk with the AI interviewer by voice when they have time.
5. **Analyze in chat.** "Summarize the top reasons, with two exact quotes each." Then open a few full transcripts to check the quotes in context.

Keep the questions open and about recent events ([Nielsen Norman Group, Open-Ended vs. Closed Questions](https://www.nngroup.com/articles/open-ended-questions/)). AI interviewers stick to the script and probe when answers are short or unclear, but don't chase unexpected insights ([Nielsen Norman Group, AI-Moderated Interviews](https://www.nngroup.com/articles/ai-interviewers/)).

## How to choose

- **Want new evidence from your own customers, started from chat?** Pick a tool that runs interviews from a link you can share. Frank fits here.
- **Need people you can't reach?** Pick one that sets up recruiting through MCP, such as Outset (per its changelog).
- **Mostly want to query past research?** A repository-style connection, such as Listen MCP, is enough.
- **Check the plan.** Some tools include MCP everywhere; Great Question puts it in Enterprise; Frank includes it on every plan, including Free.
- **Check approval controls.** Make sure nothing goes to participants without a person approving it.

## Limits

An assistant can draft questions, but you still pick the decision and check the guide. AI summaries can over-generalize; confirm themes against quotes. Nielsen Norman Group found AI interviewers work best as a complement to human moderation ([AI-Moderated Interviews](https://www.nngroup.com/articles/ai-interviewers/)). And interviews explain why; use a survey for how many ([Nielsen Norman Group, Should You Run a Survey?](https://www.nngroup.com/articles/should-you-run-a-survey/)).

## When Frank is a fit

Frank fits when you want to start customer interviews from ChatGPT and get voice conversations with your own customers back in the chat. Frank is voice-first. It supports multilingual interviews and is SOC 2 and [GDPR compliant](https://www.hifrank.ai/features/transparency-security). The Free plan includes 225 signup credits plus 60 voice minutes a month with no credit card ([Pricing](https://www.hifrank.ai/pricing)).

**[Connect Frank to ChatGPT free at hifrank.ai/mcp](https://www.hifrank.ai/mcp)** · [Pricing](https://www.hifrank.ai/pricing)

## FAQ

### Is there a ChatGPT app for customer research interviews?
Yes. Several research tools connect to ChatGPT through MCP. Frank lets ChatGPT draft a study, run AI-moderated voice interviews with your own customers, and read transcripts. Outset, Strella, Listen Labs, Usercall, User Intuition and Koji also document ChatGPT connections, with different capabilities.

### Can ChatGPT start new research, or only read it?
OpenAI's docs say ChatGPT supports both read and write tools from MCP servers. What you can do depends on the tool. In Frank, new research stays a draft until you approve it.

### How do I add Frank to ChatGPT?
On ChatGPT on the web, add a custom MCP server with the URL `https://api.hifrank.ai/mcp`, choose OAuth, sign in to Frank and approve access, then install it and mention it with @.

### Does it cost extra to use Frank in ChatGPT?
MCP is included on every Frank plan, including Free.

### Does Frank find people to interview?
No. Frank does not recruit participants. You share the interview link with your own customers.

### Which assistants does Frank work with?
Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth.

## Related

- [How to run customer interviews from Claude](https://nar-vardanyan.github.io/frank-mcp/run-customer-interviews-from-claude.html)
- [AI tools that interview customers for you](https://nar-vardanyan.github.io/frank-mcp/ai-tools-that-interview-customers-for-you.html)
- [How to automate customer interviews with AI](https://nar-vardanyan.github.io/frank-mcp/how-to-automate-customer-interviews-with-ai.html)
- [Frank MCP](https://www.hifrank.ai/mcp) · [Pricing](https://www.hifrank.ai/pricing)
