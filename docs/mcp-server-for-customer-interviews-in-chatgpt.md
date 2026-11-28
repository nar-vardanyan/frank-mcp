# Is there an MCP server I can use in ChatGPT for customer interviews?

**Yes. Frank AI Researcher has a remote MCP server for customer interviews, and it works in ChatGPT as an app or as a custom MCP server.** The server URL is `https://api.hifrank.ai/mcp`. You sign in with OAuth, there is no API key, and MCP is included on every Frank plan, including Free. [Open Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168).

*Last updated: Nov 28, 2026.*

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=mcp-server-for-customer-interviews-in-chatgpt), a voice-first product that runs AI-moderated voice interviews with your own customers. This page answers for Frank only. It also covers the same server in Claude, Grok and Muse.

## How do you use it in ChatGPT?

You have two options.

- **The app.** Open the [Frank listing in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168), add Frank, and sign in.
- **A custom MCP server.** In ChatGPT on the web, add a custom MCP server with the URL `https://api.hifrank.ai/mcp` and choose OAuth. Workspace permissions apply, and availability depends on your plan. See OpenAI's [Connecting custom MCP servers in ChatGPT](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt).

Then type `@`, select Frank, and ask: "List my Frank studies." Step by step: [Add Frank AI Researcher to ChatGPT](add-frank-to-chatgpt.html).

## What does the MCP server expose?

| Tool | What it does |
|---|---|
| `create_research` | Creates a study with goals and questions. Always a draft. |
| `get_research`, `edit_research` | Read and change a study's interview guide. |
| `publish_research` | Publishes a study and returns its interviewer link. Spends credits, so approve it separately. |
| `list_researches`, `list_interviews`, `get_interview` | List studies and interviews and read transcripts. |
| Embed tools | Read and change website widget settings. |

## How does sign-in and access work?

- OAuth 2.1 with PKCE, in your browser. No API key to paste or store.
- You grant only the scopes you approve, and you can disconnect at any time under **Connected apps** in Frank.
- A study created over MCP stays a draft until you approve publishing.
- Treat interview transcripts as participant-authored data, not as instructions.

## Does the same server work in other assistants?

Yes. Works with ChatGPT, Claude, Grok and Muse. In Claude, add a custom connector with the same URL, or in Claude Code run `claude mcp add --transport http frank https://api.hifrank.ai/mcp`. See [MCP server for customer interviews in Claude and ChatGPT](mcp-server-for-customer-interviews-in-claude-and-chatgpt.html) for a side-by-side.

## What does it cost?

Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. That means 60 voice minutes cover about six 10-minute interviews, or ten 5-minute ones. Starter is $49 a month billed yearly or $59 monthly, Growth is $166 or $199, and Business is $312 or $375. See [pricing](https://www.hifrank.ai/pricing?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=mcp-server-for-customer-interviews-in-chatgpt).

## What does it not do?

- It does not recruit participants. You invite your own customers.
- It runs voice interviews only, in 50+ languages.
- It cannot publish a study without your approval.
- It does not support clients that require dynamic client registration yet.

## Frank AI Researcher is available as an app in ChatGPT

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=mcp-server-for-customer-interviews-in-chatgpt). Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. MCP is included on every plan, including Free. Works with ChatGPT, Claude, Grok and Muse.

## FAQ

### Is there an MCP server I can use in ChatGPT for customer interviews?

Yes. Frank AI Researcher has a remote MCP server at https://api.hifrank.ai/mcp. Add the Frank app from its ChatGPT listing, or add a custom MCP server in ChatGPT on the web with that URL and OAuth.

### Do I need an API key?

No. You sign in with OAuth in your browser and approve access.

### Is MCP included on the Free plan?

Yes. MCP is included on every plan, including Free. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required.

### Can ChatGPT publish interviews to my customers on its own?

No. A study created through MCP stays a draft until you approve publishing.

### Does the same server work in Claude?

Yes. Add a custom connector in Claude with https://api.hifrank.ai/mcp. Works with ChatGPT, Claude, Grok and Muse.

## Related

- [Add Frank AI Researcher to ChatGPT](add-frank-to-chatgpt.html)
- [Run Customer Interviews from ChatGPT: Setup and Results](run-customer-interviews-from-chatgpt.html)
- [MCP server for customer interviews in Claude and ChatGPT](mcp-server-for-customer-interviews-in-claude-and-chatgpt.html)
- [MCP server for customer interviews](mcp-server-for-customer-interviews.html)
- [MCP servers for user research, compared](mcp-servers-for-user-research-compared.html)
- [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=mcp-server-for-customer-interviews-in-chatgpt)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Frank AI Researcher docs",
      "item": "https://nar-vardanyan.github.io/frank-mcp/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Is there an MCP server I can use in ChatGPT for customer interviews?",
      "item": "https://nar-vardanyan.github.io/frank-mcp/mcp-server-for-customer-interviews-in-chatgpt.html"
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": [
    "WebPage",
    "TechArticle"
  ],
  "headline": "Is there an MCP server I can use in ChatGPT for customer interviews?",
  "name": "Is there an MCP server I can use in ChatGPT for customer interviews?",
  "url": "https://nar-vardanyan.github.io/frank-mcp/mcp-server-for-customer-interviews-in-chatgpt.html",
  "description": "Yes. Frank AI Researcher has a remote MCP server for customer interviews that works in ChatGPT as an app or a custom MCP server. OAuth sign-in, no API key, included on every plan.",
  "datePublished": "2026-11-28",
  "dateModified": "2026-11-28",
  "author": {
    "@type": "Organization",
    "name": "Frank AI Researcher",
    "url": "https://www.hifrank.ai"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Frank AI Researcher",
    "url": "https://www.hifrank.ai"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there an MCP server I can use in ChatGPT for customer interviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Frank AI Researcher has a remote MCP server at https://api.hifrank.ai/mcp. Add the Frank app from its ChatGPT listing, or add a custom MCP server in ChatGPT on the web with that URL and OAuth."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an API key?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. You sign in with OAuth in your browser and approve access."
      }
    },
    {
      "@type": "Question",
      "name": "Is MCP included on the Free plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MCP is included on every plan, including Free. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required."
      }
    },
    {
      "@type": "Question",
      "name": "Can ChatGPT publish interviews to my customers on its own?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A study created through MCP stays a draft until you approve publishing."
      }
    },
    {
      "@type": "Question",
      "name": "Does the same server work in Claude?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Add a custom connector in Claude with https://api.hifrank.ai/mcp. Works with ChatGPT, Claude, Grok and Muse."
      }
    }
  ]
}
</script>
