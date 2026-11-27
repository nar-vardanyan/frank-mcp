# ChatGPT Apps for Customer Research Interviews, Compared

**In short:** At least 12 research tools are listed in the ChatGPT app directory for running interviews, and more connect to ChatGPT through MCP. They differ on who you interview (your own customers or a recruited panel), the interview format (voice, video, text), languages, published pricing, and whether a person approves a study before it reaches participants. Frank lets ChatGPT draft a study, run AI-moderated voice interviews with your own customers, and read the transcripts, with nothing published until you approve it. Frank is available as an app in ChatGPT: [install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168).

**We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews)**, a voice-first product that runs AI-moderated voice interviews with your own customers. This page compares ChatGPT apps for customer interviews. Each row links that app's own ChatGPT listing, and every cell about another product links the vendor's own page, accessed on 27 November 2026. Frank cells come from the Frank docs. It is not a paid ranking or a complete catalog, and vendors change their pages, so check each site before you connect anything. Frank does not recruit participants.

> **Looking for a yes or no about one tool?** This page compares several research tools that connect to ChatGPT. For direct answers about Frank, see [Is there a ChatGPT app for customer interviews?](chatgpt-app-for-customer-interviews.html) and [Is there a ChatGPT app for user research?](chatgpt-app-for-user-research.html).

## How to pick a ChatGPT app for customer interviews

Start with the job, then check these criteria on each vendor's own pages. The same criteria are columns in the table below.

| Criterion | Why it matters | What to check |
|---|---|---|
| Who you interview | Some tools interview people you already have; others recruit from a panel. | Can you share a link with your own customers? Is a panel offered, and is recruiting billed separately? |
| Interview format | Voice, video, text and screen tasks suit different questions. | Which formats run from ChatGPT today, not on a roadmap. |
| Approval before anything reaches participants | An assistant can create and launch studies. A person should approve what participants see. | Does the vendor say studies stay drafts, or triggers stay paused, until you approve? |
| Results in the chat | The point of a ChatGPT app is reading evidence where you work. | Can ChatGPT read transcripts, themes and quotes back, and can you open the full transcript? |
| Languages | Interviews in the participant's own language get fuller answers. | The vendor's language claim, then a test interview in each language you need. |
| Security and compliance | Interviews are personal data. | SOC 2, GDPR, and how transcripts are stored and deleted. |
| Pricing you can see | Some tools publish prices; others quote after a demo. | Is there a free way to start, and what does one interview cost? |
| Other assistants | Teams often use more than one AI client. | Is there a remote MCP server for Claude or other clients, with OAuth and no API key? |

## Checklist before you connect one

1. Write the decision the interviews should inform, and who you need to hear from.
2. Open the app's ChatGPT listing and the vendor's pricing page. Note what the plan you would use includes.
3. Connect it, then ask it to list your studies to confirm the connection.
4. Ask it to draft a study and keep it as a draft. Check that nothing reaches participants before you approve.
5. Take the interview yourself, then remove leading or stacked questions.
6. Run a small pilot with five to ten of your own customers.
7. Ask for themes with exact quotes, then open full transcripts and check the quotes in context.
8. Check where transcripts are stored and how to delete them before you scale up.

## How research tools get into ChatGPT

ChatGPT connects to outside tools through the Model Context Protocol (MCP), an open standard for linking AI applications to tools and data ([modelcontextprotocol.io](https://modelcontextprotocol.io/)). OpenAI's developer docs say you can connect an MCP server to ChatGPT as a plugin, and that ChatGPT supports both read and write tools from your server ([OpenAI, Add custom MCP server](https://developers.openai.com/api/docs/guides/custom-mcp-server)).

That matters for research. Older guidance described ChatGPT connectors as limited to read-only search and fetch, which would mean an assistant could look up past studies but not start new ones. OpenAI's current docs say write actions are available, subject to confirmation settings (same source). So the real question is what each research tool exposes.

OpenAI also warns that an untrusted server may access information shared through app use or trick ChatGPT into using tools in unintended ways, and says to connect only servers you trust (same source).

## Three kinds of ChatGPT research app

1. **Run interviews.** The assistant can set up a study and the tool interviews real people. New evidence comes back into the chat.
2. **Build and recruit.** The assistant can design a study and set up recruiting from a panel.
3. **Search what you have.** The assistant can pull themes, quotes and synthesis from past studies, but doesn't start fieldwork.

## ChatGPT apps for customer interviews, compared

Apps listed in the ChatGPT app directory that run interviews with people. Each app name links its ChatGPT listing. Vendor cells quote or summarize the vendor's own page, accessed 27 November 2026. "Not stated on the pages reviewed" means the page we opened did not say; it does not mean the feature is missing. Numbers in vendor cells are the vendor's own claims.

| App (ChatGPT listing) | Interview format | Participants | Languages | Pricing | Approval before anything reaches participants |
|---|---|---|---|---|---|
| **[Frank AI Researcher](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168)** | AI-moderated voice interviews ([Frank docs](https://nar-vardanyan.github.io/frank-mcp/chatgpt-app-for-customer-interviews.html)) | Your own customers, by link, email, in your product, or website widget. Frank does not recruit participants. ([Frank docs](https://nar-vardanyan.github.io/frank-mcp/chatgpt-app-for-customer-interviews.html)) | Multilingual interviews ([Frank docs](https://nar-vardanyan.github.io/frank-mcp/chatgpt-app-for-customer-interviews.html)) | Free plan: 225 signup credits plus 60 voice minutes a month, no card. MCP is included on every plan. ([hifrank.ai/pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews)) | Studies created through MCP stay drafts until you approve publishing. ([Frank docs](https://nar-vardanyan.github.io/frank-mcp/chatgpt-app-for-customer-interviews.html)) |
| **[Usercall: User Interviews](https://chatgpt.com/plugins/plugin_asdk_app_6abde61cdafc8191b1257f676fed1018)** | AI-moderated interviews by voice, text or both ([usercall.co](https://www.usercall.co/)) | Share a link, trigger after a product moment, recruit through panel partners, or bring existing data ([usercall.co](https://www.usercall.co/)) | 50+ languages (vendor claim) ([usercall.co/pricing](https://www.usercall.co/pricing)) | From $89 a month. First interview or analysis free. ([usercall.co/pricing](https://www.usercall.co/pricing)) | New research triggers start paused until you switch them on. ([usercall.co](https://www.usercall.co/)) |
| **[Listen Labs](https://chatgpt.com/plugins/plugin_asdk_app_6a0765f330f08191a2e5d95f075948a9)** | AI-moderated interviews with follow-up questions ([listenlabs.com](https://listenlabs.com/)) | Recruits from a global participant network of 50M+ (vendor claim) ([listenlabs.com](https://listenlabs.com/)) | 120+ languages (vendor claim) ([listenlabs.com](https://listenlabs.com/)) | No public pricing page found. The site offers a demo. ([listenlabs.com](https://listenlabs.com/)) | Not stated on the pages reviewed ([listenlabs.com](https://listenlabs.com/)) |
| **[Strella](https://chatgpt.com/plugins/plugin_asdk_app_69bd87a9820081919a9bdbbac64c05ba)** | AI-moderated and human-moderated interviews ([strella.io](https://www.strella.io/)) | Your own customers, or a panel of up to 8M participants (vendor claim) ([strella.io](https://www.strella.io/)) | 46+ languages (vendor claim) ([strella.io](https://www.strella.io/)) | No public pricing page found. The site offers a demo. ([strella.io](https://www.strella.io/)) | Not stated on the pages reviewed ([strella.io](https://www.strella.io/)) |
| **[Conveo](https://chatgpt.com/plugins/plugin_asdk_app_6abe512c9440819189c3248b09fdc8a2)** | AI-moderated voice and video interviews, plus concept, prototype and website tests ([conveo.ai](https://conveo.ai/)) | Recruiting with a screener and quotas ([conveo.ai/book-a-demo](https://conveo.ai/book-a-demo)) | Not stated on the pages reviewed ([conveo.ai](https://conveo.ai/)) | No public prices. "Start for free" sign-up with a work email, or book a demo. ([conveo.ai](https://conveo.ai/)) | Not stated on the pages reviewed ([conveo.ai](https://conveo.ai/)) |
| **[Voicepanel](https://chatgpt.com/plugins/plugin_asdk_app_69ec465134088191977792a5d4f50c8f)** | Voice, video, screen, text and tasks in one study ([voicepanel.com](https://www.voicepanel.com/)) | Invite your own customers with a link, or recruit from integrated panels ([voicepanel.com](https://www.voicepanel.com/)) | Automatic translation in over 35 languages (vendor claim) ([voicepanel.com/pricing](https://www.voicepanel.com/pricing)) | Pay per project from $5,000, or an Enterprise license from $30,000 a year ([voicepanel.com/pricing](https://www.voicepanel.com/pricing)) | Not stated on the pages reviewed ([voicepanel.com](https://www.voicepanel.com/)) |
| **[Versive](https://chatgpt.com/plugins/plugin_asdk_app_6a91e524b44081918911ddb0e78a4958)** | AI-moderated interviews, surveys and concept tests, with real and synthetic users ([getversive.com](https://www.getversive.com/)) | Recruit from partner panels, invite your own users by email, or embed studies in your product ([getversive.com](https://www.getversive.com/)) | Interviews in dozens of languages (vendor claim) ([getversive.com](https://www.getversive.com/)) | Free plan covers surveys, without AI-moderated interviews. Pro from $99 a month billed annually. ([getversive.com/pricing](https://www.getversive.com/pricing)) | Not stated on the pages reviewed ([getversive.com](https://www.getversive.com/)) |
| **[Tracy AI Interviewer](https://chatgpt.com/plugins/plugin_asdk_app_6ae7f56ce3748191a47ac301fddf8f04)** | Two-way video or audio interviews with follow-ups. Use cases on the site include hiring screens and customer interviews. ([tracyinterview.ai](https://tracyinterview.ai/)) | People you send the interview link to ([tracyinterview.ai/blog/tracy-chatgpt-integration](https://tracyinterview.ai/blog/tracy-chatgpt-integration)) | 9 languages (vendor list) ([tracyinterview.ai](https://tracyinterview.ai/)) | First 3 results free, then $1 per credit (one credit per started 20 minutes) ([tracyinterview.ai/pricing](https://tracyinterview.ai/pricing)) | Nothing is created until you approve the draft in ChatGPT. ([tracyinterview.ai/blog/tracy-chatgpt-integration](https://tracyinterview.ai/blog/tracy-chatgpt-integration)) |
| **[User Intuition](https://chatgpt.com/plugins/plugin_asdk_app_6ad5de9718bc8191bf0a468cb455fed1)** | AI-moderated interviews by chat, audio or video ([userintuition.ai/pricing](https://www.userintuition.ai/pricing/)) | Your own customers, or a vetted respondent panel (recruiting billed separately) ([userintuition.ai/pricing](https://www.userintuition.ai/pricing/)) | 80+ languages (vendor claim) ([userintuition.ai](https://www.userintuition.ai/)) | Starter: $30 per quality voice interview with your own sample, no monthly fee. 3 free interviews to start. ([userintuition.ai/pricing](https://www.userintuition.ai/pricing/)) | Not stated on the pages reviewed ([userintuition.ai/pricing](https://www.userintuition.ai/pricing/)) |
| **[UserTold: AI User Research](https://chatgpt.com/plugins/plugin_asdk_app_6a8759c2dba48191b391f3915cc0ee5f)** | In-product user tests: screen and voice recordings, with a voice follow-up conversation ([usertold.ai](https://usertold.ai/)) | Users you can already reach. Does not recruit participants. ([usertold.ai](https://usertold.ai/)) | Not stated on the pages reviewed ([usertold.ai](https://usertold.ai/)) | $0.25 per recorded minute, AI included ([usertold.ai/pricing](https://usertold.ai/pricing)) | Not stated on the pages reviewed ([usertold.ai](https://usertold.ai/)) |
| **[CleverX](https://chatgpt.com/plugins/plugin_asdk_app_6ad7ea506e988191a95de021786872a9)** | AI-moderated interviews on video or audio, plus human-moderated interviews, surveys and tests ([cleverx.com](https://cleverx.com/)) | A verified participant pool, your own audience by link, or custom B2B recruitment ([cleverx.com/pricing](https://cleverx.com/pricing)) | 15 languages for the AI moderator (vendor claim) ([cleverx.com](https://cleverx.com/)) | Pro: $149 per user per month, plus credits per completed response. Free to start. ([cleverx.com/pricing](https://cleverx.com/pricing)) | Not stated on the pages reviewed ([cleverx.com](https://cleverx.com/)) |
| **[Great Question](https://chatgpt.com/plugins/plugin_asdk_app_6abed98cf9b08191b2c40cc2c305459b)** | Interviews, surveys and tests. AI moderation is an add-on. ([greatquestion.com/pricing](https://www.greatquestion.com/pricing)) | People in your CRM, or its panel ([greatquestion.com](https://www.greatquestion.com/)) | Not stated on the pages reviewed ([greatquestion.com](https://www.greatquestion.com/)) | Self-serve: $129 per seat per month. Enterprise: custom annual plans. ([greatquestion.com/pricing](https://www.greatquestion.com/pricing)) | Not stated on the pages reviewed ([greatquestion.com](https://www.greatquestion.com/)) |

The same data is in [chatgpt-interview-apps.csv](https://github.com/nar-vardanyan/frank-mcp/blob/main/data/chatgpt-interview-apps.csv) and [chatgpt-interview-apps.json](https://github.com/nar-vardanyan/frank-mcp/blob/main/data/chatgpt-interview-apps.json), with a source URL and access date for every cell.

### Also connect to ChatGPT through MCP

These tools document a ChatGPT connection through MCP. We did not find them in the ChatGPT app directory mirrors we checked on 27 November 2026, so there is no listing link.

| Tool | ChatGPT connection | Interview format | Participants | Languages | Pricing |
|---|---|---|---|---|---|
| **Outset** | Outset MCP connects to ChatGPT and other MCP tools ([outset.ai/resources/changeblog/outset-mcp](https://outset.ai/resources/changeblog/outset-mcp)) | AI-moderated interviews by video, voice or text ([outset.ai](https://outset.ai/)) | Recruit through Outset, or share the link with your own list ([outset.ai](https://outset.ai/)) | 40+ languages (vendor claim) ([outset.ai/pricing](https://outset.ai/pricing)) | Custom plans ([outset.ai/pricing](https://outset.ai/pricing)) |
| **Koji** | Run studies from ChatGPT and other MCP clients ([koji.so](https://www.koji.so/)) | AI-moderated interviews by voice, chat or phone ([koji.so](https://www.koji.so/)) | Self-recruit or panel recruitment ([koji.so](https://www.koji.so/)) | 30+ languages (vendor claim) ([koji.so](https://www.koji.so/)) | Not captured (the pricing page did not render for our check) ([koji.so/pricing](https://www.koji.so/pricing)) |

## Where each kind of tool fits

- **You want to hear from customers you already have, by voice, started from a chat.** Frank fits here: ChatGPT drafts the study, you approve it, and Frank interviews the customers you invite. The Free plan includes 60 voice minutes a month, and MCP is included on every plan.
- **You need participants recruited for you.** Pick a tool whose page documents a panel or recruiting, and check how recruiting is billed. Frank does not recruit participants.
- **You need video, screen recording, or prototype and website tasks.** Pick a tool that documents those formats. Frank runs voice interviews only and does not show designs or prototypes.
- **You mostly want to search research you already ran.** A repository-style connection may be enough.

## Connecting Frank to ChatGPT

Frank is available as an app in ChatGPT: [install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). Open the listing in ChatGPT, add Frank, then sign in to Frank in your browser and approve access. There is no API key. In a chat, type `@` and select Frank, then ask: "List my Frank studies."

If the app isn't available in your workspace, or you prefer to add the server yourself, use the custom MCP server path. OpenAI documents the custom-server path on ChatGPT on the web: go to **Plugins**, select the plus button, choose **Add custom MCP server**, enter a name and the server URL, configure authentication, accept the risk warning, and select **Create as a plugin**. Then install it and type `@` in the prompt box to use it ([OpenAI, Add custom MCP server](https://developers.openai.com/api/docs/guides/custom-mcp-server)). Workspace permissions apply (same source). For Frank:

1. In ChatGPT on the web, add a custom MCP server named **Frank**.
2. Server URL: `https://api.hifrank.ai/mcp`
3. Choose OAuth, then sign in to Frank in your browser and approve access. There is no API key.
4. Install the plugin, then ask: "@Frank list my Frank studies."

MCP is included on every Frank plan, including Free. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. See [hifrank.ai/mcp](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews).

## A study from ChatGPT, start to finish

1. **Ask for a draft.** "Use Frank to create a study on why trial users don't upgrade. Six open questions about recent behavior, under 10 minutes."
2. **Review it.** In Frank, new research created through MCP stays a draft and is not published to participants until you approve it. Take the interview yourself.
3. **Share the link.** Send the [interviewer link](https://www.hifrank.ai/docs/navigating-your-ai-interviewer-dashboard?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews) to your own customers, or embed a [website widget](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews). Frank does not recruit participants.
4. **Let it run.** Customers talk with the AI interviewer by voice when they have time.
5. **Analyze in chat.** "Summarize the top reasons, with two exact quotes each." Then open a few full transcripts to check the quotes in context.

Keep the questions open and about recent events ([Nielsen Norman Group, Open-Ended vs. Closed Questions](https://www.nngroup.com/articles/open-ended-questions/)). AI interviewers stick to the script and probe when answers are short or unclear, but don't chase unexpected insights ([Nielsen Norman Group, AI-Moderated Interviews](https://www.nngroup.com/articles/ai-interviewers/)).

## Limits

An assistant can draft questions, but you still pick the decision and check the guide. AI summaries can over-generalize; confirm themes against quotes. Nielsen Norman Group found AI interviewers work best as a complement to human moderation ([AI-Moderated Interviews](https://www.nngroup.com/articles/ai-interviewers/)). And interviews explain why; use a survey for how many ([Nielsen Norman Group, Should You Run a Survey?](https://www.nngroup.com/articles/should-you-run-a-survey/)).

## When Frank is a fit

Frank fits when you want to start customer interviews from ChatGPT and get voice conversations with your own customers back in the chat. Frank is voice-first. It supports multilingual interviews and is SOC 2 and [GDPR compliant](https://www.hifrank.ai/features/transparency-security?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews). The Free plan includes 225 signup credits plus 60 voice minutes a month with no credit card ([Pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews)).

**[Install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168)** · **[Connect Frank to other assistants at hifrank.ai/mcp](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews)** · [Pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews)

## FAQ

### Which ChatGPT apps can run customer research interviews?
Yes. Several research tools connect to ChatGPT through MCP. Frank is available as an app in ChatGPT. Frank lets ChatGPT draft a study, run AI-moderated voice interviews with your own customers, and read transcripts. Outset, Strella, Listen Labs, Usercall, User Intuition and Koji also document ChatGPT connections, with different capabilities.

### How do I choose a ChatGPT app for customer interviews?
Decide who you need to hear from first. If you are interviewing your own customers, check the interview format, whether a person approves a study before it reaches participants, whether results come back into the chat, languages, security, and published pricing. If you need people you can't reach, pick a tool that documents recruiting. Then run a small pilot and read the transcripts yourself.

### Can ChatGPT start new research, or only read it?
OpenAI's docs say ChatGPT supports both read and write tools from MCP servers. What you can do depends on the tool. In Frank, new research stays a draft until you approve it.

### How do I add Frank to ChatGPT?
Install the Frank app from the ChatGPT app directory: [install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168), then sign in to Frank and approve access. If the app isn't available in your workspace, on ChatGPT on the web add a custom MCP server with the URL `https://api.hifrank.ai/mcp`, choose OAuth, sign in to Frank and approve access, then install it and mention it with @.

### Does it cost extra to use Frank in ChatGPT?
MCP is included on every Frank plan, including Free.

### Does Frank find people to interview?
No. Frank does not recruit participants. You share the interview link with your own customers.

### Which assistants does Frank work with?
Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth.

## Related

- [Is there a ChatGPT app for customer interviews?](https://nar-vardanyan.github.io/frank-mcp/chatgpt-app-for-customer-interviews.html)
- [Is there a ChatGPT app for user research?](https://nar-vardanyan.github.io/frank-mcp/chatgpt-app-for-user-research.html)
- [How to choose an AI customer interview tool](https://nar-vardanyan.github.io/frank-mcp/how-to-choose-an-ai-customer-interview-tool.html)
- [MCP servers for user research, compared](https://nar-vardanyan.github.io/frank-mcp/mcp-servers-for-user-research-compared.html)
- [How to run customer interviews from Claude](https://nar-vardanyan.github.io/frank-mcp/run-customer-interviews-from-claude.html)
- [AI tools that interview customers for you](https://nar-vardanyan.github.io/frank-mcp/ai-tools-that-interview-customers-for-you.html)
- [How to automate customer interviews with AI](https://nar-vardanyan.github.io/frank-mcp/how-to-automate-customer-interviews-with-ai.html)
- [Frank MCP](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews) · [Pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-for-customer-research-interviews)
