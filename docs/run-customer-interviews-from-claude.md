# How to Run Customer Interviews from Claude

**In short:** To run customer interviews from Claude, connect an AI interviewer to Claude as a custom connector (a remote MCP server), then ask Claude to draft the study, review it yourself, and share the interview link with your customers. When interviews come back, ask Claude to summarize the transcripts and check each theme against the original quotes.

**We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude)**, a voice-first product that runs AI-moderated voice interviews with your own customers, with a remote [MCP server](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude). This page uses Frank as the example. Frank does not recruit participants.

## What "running interviews from Claude" means

Claude does not phone your customers by itself. On its own, it can help you write an interview guide or analyze transcripts you paste in. To actually run interviews, Claude needs a tool that conducts them. That is what a custom connector adds.

Claude's custom connectors use the Model Context Protocol (MCP), an open standard for connecting AI applications to tools and data. Anthropic says custom connectors using remote MCP are available on Claude, Cowork and Claude Desktop for users on Free, Pro, Max, Ultra, Team and Enterprise plans, and that Free users are limited to one custom connector ([Claude Help Center, Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp)). More on the protocol: [modelcontextprotocol.io](https://modelcontextprotocol.io/).

With an interview tool connected, the workflow looks like this:

1. You describe the decision and who you want to hear from.
2. Claude drafts the study (goal and questions) in the interview tool.
3. You review and approve it, then share the link with your customers.
4. The AI interviewer runs voice conversations with each person.
5. You ask Claude to read the transcripts and summarize themes, with quotes.

## Step 1: Connect Frank to Claude

Anthropic's steps for an individual Pro or Max plan are: open **Customize > Connectors**, click **+ Add**, then **Add custom connector**, enter a name, and add the server URL exactly as the provider documents it ([Claude Help Center](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp)). On Team and Enterprise plans, an Owner adds the connector for the organization first, and members then connect to it individually (same source). For Frank:

1. In Claude, add a custom connector named **Frank**.
2. Paste the server URL: `https://api.hifrank.ai/mcp`
3. Under OAuth client, keep **Use Claude's published identity (Recommended)** if it is shown.
4. Sign in to Frank in your browser and approve access. There is no API key.
5. To check it works, ask: "List my Frank studies."

[Use Frank in Claude](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude&utm_content=use-in-claude)

MCP is included on every Frank plan, including Free. Works with ChatGPT, Claude, Grok and Muse.

Anthropic notes that custom connectors let Claude access and act in services that Anthropic has not verified, so only connect servers you trust; you can revoke access by disconnecting the connector ([Claude Help Center](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp)).

## Step 2: Ask Claude to draft the study

Give Claude the decision, the audience and any constraints. For example:

> Create a Frank study to learn why trial users on our Starter plan don't convert. Audience: people whose trial ended in the last 30 days without upgrading. Keep it under 10 minutes. Ask about what they hoped the product would do, what they tried, where they got stuck, and what they use instead. Use open questions about recent events.

A good guide has 6 to 8 open questions about recent behavior, each with a follow-up. Open questions let people answer in their own words ([Nielsen Norman Group, Open-Ended vs. Closed Questions](https://www.nngroup.com/articles/open-ended-questions/)). AI interviewers follow the script and probe when answers are short or unclear, or when you told them to ([Nielsen Norman Group, AI-Moderated Interviews](https://www.nngroup.com/articles/ai-interviewers/)), so the guide deserves a careful read.

## Step 3: Review, test and approve

In Frank, new research created through MCP is a draft and is not published to participants until you approve it. Read the questions, take the interview yourself, and fix anything confusing. Set the time limit to fit your plan: up to 10 minutes on Free, and 20 or 30 minutes on paid plans ([pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude)).

## Step 4: Invite your own customers

Share the [interviewer link](https://www.hifrank.ai/docs/navigating-your-ai-interviewer-dashboard?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude) by email, in-app message or a cancellation flow, or embed a [website widget](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude). Participants talk with the AI interviewer by voice whenever they have time, so nobody schedules a call. Frank does not recruit participants; you need customers you can already reach.

Claude can help write the invite email, but sending it is still your step, from your own email or product.

## Step 5: Analyze transcripts in Claude

As interviews complete, ask Claude things like:

- "Summarize the main reasons trial users gave for not upgrading, with two exact quotes each."
- "Which themes came up only among people who never finished setup?"
- "List anything surprising that doesn't fit the main themes."

Then check. Open a few full transcripts and confirm each quote you'll act on is real and in context. Models can over-generalize, and a confident summary is not evidence. Stop interviewing when new conversations stop adding themes; for a fairly similar group, that is often within about a dozen interviews ([Guest, Bunce & Johnson, 2006](https://www.sfu.ca/~palys/GuestEtAl-2006-HowManyInterviewsAreEnough.pdf)).

## Claude alone vs Claude with an interview tool

| | Claude alone | Claude + Frank (MCP) |
|---|---|---|
| Draft an interview guide | Yes | Yes, created as a draft study in Frank |
| Run voice interviews with customers | No | Yes, Frank runs them; you share the link |
| Analyze transcripts | Only what you paste in | Yes, from your Frank studies |
| Find participants | No | No; Frank does not recruit participants |

## When this is a poor fit

If you need deep discovery on a messy problem, interview people yourself; Nielsen Norman Group found AI interviewers work best as a complement to human moderation ([AI-Moderated Interviews](https://www.nngroup.com/articles/ai-interviewers/)). If you have no customers to invite yet, start with recruiting. And if your organization does not allow custom connectors, ask your Claude admin first.

## When Frank is a fit

Frank runs AI-moderated voice interviews with your own customers. Every interview gets a transcript, and answers are grouped into themes you can check against the original conversation. Frank supports multilingual interviews. Frank is SOC 2 and [GDPR compliant](https://www.hifrank.ai/features/transparency-security?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude). MCP is included on every plan, including Free. Works with ChatGPT, Claude, Grok and Muse.

**[Use Frank in Claude](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude&utm_content=use-in-claude)** · [Pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude)

## FAQ

### Can Claude interview customers for me?
Not on its own. Connect an AI interviewer such as Frank as a custom connector, and Claude can draft the study and analyze the transcripts while Frank runs the voice interviews.

### What is the Frank MCP server URL?
`https://api.hifrank.ai/mcp`. You sign in with OAuth; there is no API key.

### Does it work on Claude's Free plan?
Anthropic says custom connectors are available on Free, Pro, Max, Ultra, Team and Enterprise plans, with Free users limited to one custom connector. Frank includes MCP on every plan, including Free.

### Will Claude publish a study without asking me?
In Frank, new research created through MCP is a draft and is not published to participants until you approve it.

### Does Frank find people to interview?
No. Frank does not recruit participants. You invite your own customers by link or website widget.

### Can I do the same from ChatGPT?
Yes. Works with ChatGPT, Claude, Grok and Muse. See [hifrank.ai/mcp](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude).

## Related

- [How to automate customer interviews with AI](https://nar-vardanyan.github.io/frank-mcp/how-to-automate-customer-interviews-with-ai.html)
- [How to interview customers at scale](https://nar-vardanyan.github.io/frank-mcp/how-to-interview-customers-at-scale.html)
- [Frank MCP](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude) · [Pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=run-customer-interviews-from-claude)
