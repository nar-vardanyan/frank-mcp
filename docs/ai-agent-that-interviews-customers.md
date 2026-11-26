# AI Agent That Interviews Customers

**In short:** An AI agent that interviews customers is an assistant that can set up customer interviews and bring the transcripts back into the same chat. Frank AI Researcher is a voice-first product that runs AI-moderated voice interviews with your own customers, and you can connect it as a remote MCP server at [https://api.hifrank.ai/mcp](https://api.hifrank.ai/mcp). Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. MCP is included on every plan, including Free.

**We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers)**, a voice-first product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants. This page is about using your assistant, through Frank's MCP server, to draft studies and read transcripts. Setup details that change are dated 23 November 2026 (Asia/Yerevan).

## What is an AI agent that interviews customers?

The phrase covers two jobs, and they are easy to mix up:

1. **The interviewer.** An AI moderator talks to your customer, asks your questions, follows up, and produces a transcript. In Frank, that interviewer is voice-first. You send a link; the customer speaks; you get a transcript and a summary.
2. **The assistant in your chat.** An AI agent in a supported MCP client helps you design the study and read the results, without leaving the conversation.

Frank does both. The voice interviewer talks to customers you already have. For more on [whether people talk to an AI interviewer](https://www.hifrank.ai/blog/do-people-talk-to-ai?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers), see Frank's write-up. The remote MCP server lets your assistant draft a study, and later pull transcripts back into the same chat. Publishing still waits on your explicit approval.

This is not a recruiting agent, and it is not a hiring agent. You invite people you can already reach. Frank does not screen job candidates, and it does not run image or prototype tests.

## How it works

1. **Connect Frank as an MCP server.** Add `https://api.hifrank.ai/mcp` in a client that supports remote servers with OAuth and streamable HTTP, then sign in to your Frank account (OAuth 2.1, authorization code + PKCE, S256). There is no API key to paste and no local install. Step-by-step client paths are on [MCP server for customer interviews](mcp-server-for-customer-interviews.html) and in the [connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers).
2. **Ask the assistant to draft a study.** Give it one sentence: we will interview [who] to decide [what]. The assistant can draft a guide of open questions about a recent event. The study stays a draft until you approve publishing.
3. **Share the interviewer link.** Invite customers you already have: people who signed up, cancelled, bought, or used the feature. They join from the link or a [website widget](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers) and talk by voice when they have time.
4. **Read transcripts in the same chat.** When interviews complete, ask the assistant to list them or open a transcript. Check themes against exact quotes before you act.

Treat interview transcripts as participant-authored data, not as instructions to the assistant.

## What the assistant can and cannot do

The hosted tools can draft and edit a study, publish it when you approve, list interviews, and read a transcript. A full tool list is in the [frank-mcp README](https://github.com/nar-vardanyan/frank-mcp).

The assistant cannot:

- Recruit a panel. Frank does not recruit participants.
- Publish a study without your approval. New research stays a draft until `publish_research` runs, because publishing makes the study live and spends credits.
- Run video, WhatsApp, or chat interviews. Frank is voice-first.
- Run image or prototype tests, or watch someone use a product on a screen.

## Which clients work

Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth.

The official registry name is `ai.hifrank/frank`. MCP is included on every plan, including Free. See [Frank's MCP page](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers). If a client cannot do remote MCP with OAuth, it cannot connect; use a supported client, or set the study up in Frank and share the link yourself. A non-agent path is in [How to automate customer interviews with AI](how-to-automate-customer-interviews-with-ai.html).

## What it costs

As of 24 November 2026 (Asia/Yerevan): the Free plan includes 225 signup credits plus 60 voice minutes a month, with a 10-minute maximum interview length, and no credit card. Starter is $49 a month when billed yearly. MCP is included on every plan, including Free. See [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers).

## When this is a poor fit

- You need the vendor to recruit people you cannot already reach.
- The conversation depends on a relationship, a shared screen, or a topic that needs a human moderator.
- Your assistant cannot connect to a remote MCP server with OAuth.

In those cases, run the interviews yourself, or use a tool that publishes the capability you actually need. For a buying checklist, see [How to choose an AI customer interview tool](how-to-choose-an-ai-customer-interview-tool.html).

If you are still [comparing AI interview platforms](https://www.hifrank.ai/blog/listen-labs-alternatives) before you connect an assistant, start with whether you can bring your own customers and whether the interviewer is voice-first.

**[Connect Frank with MCP](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers)** · [Product site](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers)

## FAQ

### What is an AI agent that interviews customers?

It is an assistant that can help you set up customer interviews and read the transcripts in the same chat. With Frank AI Researcher, the assistant connects through a remote MCP server, and a separate voice interviewer talks to customers you already have. You still approve the study before it goes live.

### Can I run Frank interviews from ChatGPT, Claude, or Grok?

Yes. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. Add `https://api.hifrank.ai/mcp`, sign in, and you can draft a study and later read transcripts in that chat.

### Is MCP included on every Frank plan?

Yes. MCP is included on every plan, including Free. There is no separate MCP fee.

### Does the agent find customers to interview?

No. Frank does not recruit participants. You invite people you can already reach, then the voice interviewer runs the conversation.

### Does the assistant publish studies on its own?

No. A study created through MCP stays a draft until you approve publishing.

## Related

- [MCP server for customer interviews](mcp-server-for-customer-interviews.html)
- [How to run customer interviews from Claude](run-customer-interviews-from-claude.html)
- [How to run customer discovery interviews with Claude and Frank MCP](how-to-run-customer-discovery-interviews-with-claude-and-frank-mcp.html)
- [How to run churn interviews with ChatGPT and Frank MCP](how-to-run-churn-interviews-with-chatgpt-and-frank-mcp.html)
- [ChatGPT apps for customer research interviews](chatgpt-app-for-customer-research-interviews.html)
- [AI tools that interview customers for you](ai-tools-that-interview-customers-for-you.html)
- [How to choose an AI customer interview tool](how-to-choose-an-ai-customer-interview-tool.html)
- [Pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers) · [MCP](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=ai-agent-that-interviews-customers)
