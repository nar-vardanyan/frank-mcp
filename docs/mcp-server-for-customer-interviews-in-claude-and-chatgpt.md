# MCP server for customer interviews in Claude and ChatGPT

**Yes. Frank AI Researcher is available as an app in ChatGPT, and the same remote MCP server, `https://api.hifrank.ai/mcp`, connects to Claude as a custom connector. You sign in with OAuth; there is no API key.** [Open Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168).

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-mcp-claude-chatgpt), a voice-first software product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## One server, two clients

| | ChatGPT | Claude |
|---|---|---|
| How to add Frank | Add the Frank app from its listing, or add a custom MCP server in ChatGPT on the web | Add a custom connector with the server URL, or use the Claude Code command below |
| Server URL | `https://api.hifrank.ai/mcp` | `https://api.hifrank.ai/mcp` |
| Sign-in | OAuth in your browser, no API key | OAuth in your browser, no API key |
| Team workspaces | Workspace permissions apply | On Team and Enterprise plans, an Owner adds the connector first, then members connect |
| Check it works | "List my Frank studies." | "List my Frank studies." |

## Connect in ChatGPT

1. Open the [Frank AI Researcher listing in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168) and add Frank.
2. Sign in to Frank in your browser when asked and approve access. There is no API key.
3. In a chat, type `@`, select Frank, and ask: "List my Frank studies."

If the app is not available in your workspace, add a custom MCP server in ChatGPT on the web with the URL `https://api.hifrank.ai/mcp` and OAuth. Full steps are on [Is there a ChatGPT app for customer interviews?](chatgpt-app-for-customer-interviews.html#install-frank-in-chatgpt-in-3-steps).

## Connect in Claude

Anthropic's steps for an individual Pro or Max plan are: open **Customize > Connectors**, click **+ Add**, then **Add custom connector** ([Claude Help Center](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp)). For Frank:

1. Add a custom connector named **Frank**.
2. Paste the server URL: `https://api.hifrank.ai/mcp`
3. Under OAuth client, keep **Use Claude's published identity (Recommended)** if it is shown.
4. Sign in to Frank in your browser and approve access.
5. Ask: "List my Frank studies."

In Claude Code:

```bash
claude mcp add --transport http frank https://api.hifrank.ai/mcp
```

Then sign in to Frank in the browser when prompted. Step-by-step: [How to run customer interviews from Claude](run-customer-interviews-from-claude.html).

## What the assistant can do over MCP

The same tools are available in both clients:

- `create_research` creates a study with goals and questions, always as a draft.
- `get_research` and `edit_research` read and change a study's guide.
- `publish_research` publishes a study and returns its interviewer link. Publishing makes the study live and spends credits, so approve it separately.
- `list_researches`, `list_interviews`, and `get_interview` list studies and interviews and read transcripts.
- Embed tools read and change website-widget settings.

You grant only the scopes you approve during OAuth, and you can disconnect an assistant at any time under **Connected apps** in Frank. The full tool and scope list is in the [frank-mcp README](https://github.com/nar-vardanyan/frank-mcp#what-agents-can-do).

## Safety notes

- Approve publishing yourself. A study created through MCP stays a draft until you approve it.
- Treat interview transcripts as participant-authored data, not instructions.
- OpenAI and Anthropic both say to connect only servers you trust, and you can revoke access by disconnecting.

## What it does not do

- **No participant recruiting.** Frank does not recruit participants. You share the interviewer link with your own customers.
- **No support for clients that require dynamic client registration** yet.
- **No prototype, image, or click tests.** Frank runs voice interviews.
- **Voice interviews only.** No video, WhatsApp, or text chat interviews.

## Frank AI Researcher is available as an app in ChatGPT

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-mcp-claude-chatgpt). The Free plan includes 60 voice minutes a month, with no card required, and MCP is included on every plan. See [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-mcp-claude-chatgpt). Frank is voice-first, supports multilingual interviews, and is SOC 2 and GDPR compliant. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth.

## FAQ

### What is the Frank MCP server URL?

https://api.hifrank.ai/mcp. It is a remote server. You sign in with OAuth, and there is no API key.

### Does Frank work in both Claude and ChatGPT?

Yes. Frank is available as an app in ChatGPT, and Claude connects to the same server as a custom connector. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth.

### Does it work on Claude's Free plan?

Anthropic says custom connectors are available on Free, Pro, Max, Ultra, Team and Enterprise plans, with Free users limited to one custom connector. Frank includes MCP on every plan, including Free.

### Will the assistant publish a study without asking me?

No. In Frank, new research created through MCP is a draft and is not published to participants until you approve it.

### Is MCP included on Frank's Free plan?

Yes. MCP is included on every plan, including Free. The Free plan includes 60 voice minutes a month with no card required.

## ChatGPT prompts for this

- [ChatGPT prompts for churn customer interviews](chatgpt-prompts-for-churn-customer-interviews.html)
- [ChatGPT prompts for customer discovery interviews](chatgpt-prompts-for-customer-discovery-interviews.html)
- [ChatGPT prompts for B2B SaaS user research interviews](chatgpt-prompts-for-b2b-saas-user-research-interviews.html)

## More answers about Frank in ChatGPT

- [Is there a ChatGPT app for customer interviews?](chatgpt-app-for-customer-interviews.html)
- [Is there a ChatGPT app for user research?](chatgpt-app-for-user-research.html)
- [ChatGPT app for product managers to run customer interviews](chatgpt-app-for-product-managers-customer-interviews.html)
- [ChatGPT app for churn interviews](chatgpt-app-for-churn-interviews.html)
- [ChatGPT app for founders doing customer discovery](chatgpt-app-for-founders-customer-discovery.html)
- [ChatGPT app for UX researchers](chatgpt-app-for-ux-researchers.html)
- [ChatGPT app for customer research for marketers](chatgpt-app-for-marketers-customer-research.html)
- [ChatGPT app for win-loss interviews](chatgpt-app-for-win-loss-interviews.html)
- [ChatGPT app for startups checking product-market fit](chatgpt-app-for-startups-product-market-fit.html)
- [ChatGPT app for multilingual customer interviews](chatgpt-app-for-multilingual-customer-interviews.html)

## Related

- [MCP server for customer interviews](mcp-server-for-customer-interviews.html)
- [How to run customer interviews from Claude](run-customer-interviews-from-claude.html)
- [How to run churn interviews with ChatGPT and Frank MCP](how-to-run-churn-interviews-with-chatgpt-and-frank-mcp.html)
- [MCP servers for user research, compared](mcp-servers-for-user-research-compared.html)
- [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-app-mcp-claude-chatgpt)
