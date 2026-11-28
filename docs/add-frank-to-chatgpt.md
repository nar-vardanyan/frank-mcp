# Add Frank AI Researcher to ChatGPT

**Short answer:** Open the Frank AI Researcher listing in ChatGPT, add Frank, sign in to Frank in your browser and approve access. Then type `@` in a chat, select Frank, and ask it to list your studies. If Frank is not available in your workspace, add a custom MCP server with the URL `https://api.hifrank.ai/mcp` and OAuth.

*Last updated: Nov 28, 2026.*

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=add-frank-to-chatgpt), a voice-first product that runs AI-moderated voice interviews with your own customers. This is the setup page. For what to do after it works, see [Run customer interviews from ChatGPT](run-customer-interviews-from-chatgpt.html).

## How do you install Frank from the ChatGPT app listing?

1. Open the [Frank AI Researcher listing in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168).
2. Add Frank.
3. Sign in to Frank in your browser when asked, and approve access. There is no API key.
4. Start a new chat, type `@`, and select Frank.

## How do you add Frank as a custom MCP server instead?

Use this path if the app is not available in your workspace. In ChatGPT on the web:

1. Go to **Plugins**, select the plus button, and choose **Add custom MCP server**.
2. Name it Frank AI Researcher.
3. Set the server URL to `https://api.hifrank.ai/mcp`.
4. Choose OAuth, then create and install the plugin.
5. Sign in to Frank in your browser and approve access.

OpenAI documents the custom server path in [Add custom MCP server](https://developers.openai.com/api/docs/guides/custom-mcp-server) and in [Connecting custom MCP servers in ChatGPT](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt). Whether custom servers are available depends on your ChatGPT plan and workspace settings.

## How do you check that it worked?

In a new chat, ask:

```text
@Frank list my Frank studies.
```

If it works, ChatGPT calls Frank and lists your studies, or tells you that you have none yet. Next, ask it to draft a study and keep it as a draft.

## What if it does not work?

- **Frank does not appear after you type `@`.** Check that the app is installed and enabled in your workspace, then open a new chat. In a team workspace, an admin may need to allow it first.
- **You are asked to sign in again.** Sign in to your Frank account in the browser and approve access again.
- **You see no studies.** You may be signed in to a different Frank account than the one that owns the studies.
- **Your client requires dynamic client registration.** Frank does not support those clients yet.

## What can ChatGPT do once Frank is connected?

- Create a study with goals and questions, always as a draft.
- Read and edit a study's guide.
- Publish a study and return its interviewer link, after you approve it. Publishing makes the study live and spends credits.
- List studies and interviews and read transcripts.
- Read and change website widget settings.

You grant only the scopes you approve during sign-in. The full tool list is in the [frank-mcp README](https://github.com/nar-vardanyan/frank-mcp#what-agents-can-do).

## How do you remove access?

In Frank, open **Connected apps** and disconnect ChatGPT. Disconnecting stops the assistant from reading or changing your studies.

## Does it cost extra?

No. MCP is included on every Frank plan, including Free. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required.

## Frank AI Researcher is available as an app in ChatGPT

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=add-frank-to-chatgpt). Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. MCP is included on every plan, including Free. Works with ChatGPT, Claude, Grok and Muse.

## FAQ

### How do I add Frank to ChatGPT?

Open the Frank AI Researcher listing in ChatGPT, add Frank, sign in to Frank in your browser and approve access. Then type @ in a chat, select Frank, and ask it to list your studies.

### What is the Frank MCP server URL?

https://api.hifrank.ai/mcp. It is a remote server. You sign in with OAuth, and there is no API key.

### Can I use Frank in Claude too?

Yes. Works with ChatGPT, Claude, Grok and Muse. In other MCP clients, connect to the same server URL.

### How do I disconnect Frank from ChatGPT?

In Frank, open Connected apps and disconnect ChatGPT.

### Does ChatGPT see my interview transcripts?

ChatGPT can read the studies and transcripts that you allow during sign-in, so that it can summarize them for you. Treat transcripts as participant-authored data, and connect only apps you trust.

## Related

- [Run Customer Interviews from ChatGPT: Setup and Results](run-customer-interviews-from-chatgpt.html)
- [Is there a ChatGPT app for customer interviews?](chatgpt-app-for-customer-interviews.html)
- [Is there an MCP server I can use in ChatGPT for customer interviews?](mcp-server-for-customer-interviews-in-chatgpt.html)
- [MCP server for customer interviews in Claude and ChatGPT](mcp-server-for-customer-interviews-in-claude-and-chatgpt.html)
- [How to run customer interviews from Claude](run-customer-interviews-from-claude.html)
- [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=add-frank-to-chatgpt)

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
      "name": "Add Frank AI Researcher to ChatGPT",
      "item": "https://nar-vardanyan.github.io/frank-mcp/add-frank-to-chatgpt.html"
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
  "headline": "Add Frank AI Researcher to ChatGPT",
  "name": "Add Frank AI Researcher to ChatGPT",
  "url": "https://nar-vardanyan.github.io/frank-mcp/add-frank-to-chatgpt.html",
  "description": "How to add Frank AI Researcher to ChatGPT from the app listing or as a custom MCP server, check that it works, fix common problems, and remove access.",
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
      "name": "How do I add Frank to ChatGPT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open the Frank AI Researcher listing in ChatGPT, add Frank, sign in to Frank in your browser and approve access. Then type @ in a chat, select Frank, and ask it to list your studies."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Frank MCP server URL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "https://api.hifrank.ai/mcp. It is a remote server. You sign in with OAuth, and there is no API key."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Frank in Claude too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Works with ChatGPT, Claude, Grok and Muse. In other MCP clients, connect to the same server URL."
      }
    },
    {
      "@type": "Question",
      "name": "How do I disconnect Frank from ChatGPT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Frank, open Connected apps and disconnect ChatGPT."
      }
    },
    {
      "@type": "Question",
      "name": "Does ChatGPT see my interview transcripts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ChatGPT can read the studies and transcripts that you allow during sign-in, so that it can summarize them for you. Treat transcripts as participant-authored data, and connect only apps you trust."
      }
    }
  ]
}
</script>
