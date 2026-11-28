# ChatGPT Connector for Customer Research: What to Check Before You Connect One

**Short answer:** A ChatGPT connector for customer research lets ChatGPT create studies and read results in a research product. Before you connect one, check six things: whether studies stay drafts until you approve them, which scopes it asks for, who the participants are, how the interviews are run, how you disconnect, and what it costs. Frank AI Researcher is one example, and this page uses it to show what each answer looks like.

*Last updated: Nov 28, 2026.*

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=chatgpt-connector-for-customer-research), so treat the Frank answers below as ours. The checklist works for any connector, and each item says what to look for.

## The six checks

### 1. Does ChatGPT need your approval before anything reaches customers?

Look for a draft state. In Frank, a study created over MCP is always a draft. Publishing makes it live and spends credits, so it is a separate step that you approve.

### 2. What can it read and change?

Look for a scope list that you approve during sign-in, and tools you can name. Frank's tools create, read and edit studies, publish after your approval, list interviews and read transcripts, and change website widget settings. See [what the MCP server exposes](mcp-server-for-customer-interviews-in-chatgpt.html#what-does-the-mcp-server-expose).

### 3. Who are the participants?

Some products interview people you invite and some recruit a panel. Frank interviews people you invite, and it does not recruit. If you need a panel, check that before you connect anything.

### 4. How are the interviews run?

Check the format and the languages. Frank runs voice interviews only, in 50+ languages. It does not show prototypes or images.

### 5. How do you remove access?

Look for a place to disconnect, and no long-lived API key to leak. Frank uses OAuth in your browser, and you can disconnect under **Connected apps** in Frank.

### 6. What does it cost?

Look for a free start and published prices. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. That means 60 voice minutes cover about six 10-minute interviews, or ten 5-minute ones. Starter is $49 a month billed yearly or $59 monthly, Growth is $166 or $199, and Business is $312 or $375.

## How does Frank connect?

Open the [Frank listing in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168), or add a custom MCP server with `https://api.hifrank.ai/mcp` and OAuth. Setup steps are on [Add Frank AI Researcher to ChatGPT](add-frank-to-chatgpt.html).

## A note on trust

Both OpenAI and Anthropic advise connecting only servers you trust. Treat transcripts as participant-authored data, not as instructions for the assistant, and read the quotes behind any summary before you act on it.

## Frank AI Researcher is available as an app in ChatGPT

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=chatgpt-connector-for-customer-research). Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. MCP is included on every plan, including Free. Works with ChatGPT, Claude, Grok and Muse.

## FAQ

### What is a ChatGPT connector for customer research?

It is an app or MCP server that lets ChatGPT create research studies and read results in a separate research product. Frank AI Researcher is one: ChatGPT drafts the study, and Frank runs the voice interviews.

### Is a ChatGPT connector safe to use with customer data?

It depends on the connector. Check which scopes it asks for, whether it needs your approval before publishing, and how you disconnect it. Connect only servers you trust.

### Does Frank need an API key?

No. Frank uses OAuth in your browser.

### Can I use the same connector in Claude?

Yes. Works with ChatGPT, Claude, Grok and Muse.

## Related

- [Add Frank AI Researcher to ChatGPT](add-frank-to-chatgpt.html)
- [Is there an MCP server I can use in ChatGPT for customer interviews?](mcp-server-for-customer-interviews-in-chatgpt.html)
- [MCP servers for user research, compared](mcp-servers-for-user-research-compared.html)
- [ChatGPT apps for customer research interviews, compared](chatgpt-app-for-customer-research-interviews.html)
- [Run Customer Interviews from ChatGPT: Setup and Results](run-customer-interviews-from-chatgpt.html)
- [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=chatgpt-connector-for-customer-research)

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
      "name": "ChatGPT Connector for Customer Research: What to Check Before You Connect One",
      "item": "https://nar-vardanyan.github.io/frank-mcp/chatgpt-connector-for-customer-research.html"
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
  "headline": "ChatGPT Connector for Customer Research: What to Check Before You Connect One",
  "name": "ChatGPT Connector for Customer Research: What to Check Before You Connect One",
  "url": "https://nar-vardanyan.github.io/frank-mcp/chatgpt-connector-for-customer-research.html",
  "description": "A short checklist for evaluating a ChatGPT connector or app for customer research interviews, with Frank AI Researcher as a worked example: drafts, approvals, scopes, participants, languages and price.",
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
      "name": "What is a ChatGPT connector for customer research?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is an app or MCP server that lets ChatGPT create research studies and read results in a separate research product. Frank AI Researcher is one: ChatGPT drafts the study, and Frank runs the voice interviews."
      }
    },
    {
      "@type": "Question",
      "name": "Is a ChatGPT connector safe to use with customer data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the connector. Check which scopes it asks for, whether it needs your approval before publishing, and how you disconnect it. Connect only servers you trust."
      }
    },
    {
      "@type": "Question",
      "name": "Does Frank need an API key?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Frank uses OAuth in your browser."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use the same connector in Claude?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Works with ChatGPT, Claude, Grok and Muse."
      }
    }
  ]
}
</script>
