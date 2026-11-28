# Add customer interviews to your AI-built app

**Frank is an AI user researcher that runs short voice interviews. If you built your app with Replit, Lovable, Bolt, v0 or Base44, the next step is hearing from the people who use it. Add Frank's website widget and your users can talk to Frank right inside your app.** Free plan: 60 voice minutes a month, no card required.

Builder docs checked 27 November 2026. Each guide cites the builder's own docs.

## Two ways to add Frank

1. **The website widget (start here).** Paste Frank's install code into your app with one prompt to your builder. It needs no OAuth and no API key, so it does not depend on which builder you use ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=app-builders)).
2. **Frank's MCP server (optional).** Connect `https://api.hifrank.ai/mcp` in your builder so its AI can read your studies and transcripts while you build. You sign in with your Frank account. For other clients, see [Frank's MCP page](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=app-builders).

## Guides by builder

| Builder | Widget guide | Remote MCP, from the builder's docs |
| --- | --- | --- |
| Replit | [Add customer interviews to your Replit app](replit/) | Custom MCP server by URL ([docs](https://docs.replit.com/build/connect-via-mcp)). Connecting Frank from Replit does not work yet: sign-in fails. Use the widget. |
| Lovable | [Add customer interviews to your Lovable app](lovable/) | Custom MCP server on all plans, OAuth by default ([docs](https://docs.lovable.dev/integrations/custom-mcp)). Its docs do not say whether it needs dynamic client registration, which Frank does not offer yet. May not connect yet. |
| Bolt | [Add customer interviews to your Bolt app](bolt/) | Custom MCP server with HTTP transport and MCP OAuth ([docs](https://support.bolt.new/integrations/mcp)). Its docs do not say whether it needs dynamic client registration, which Frank does not offer yet. May not connect yet. |
| v0 | [Add customer interviews to your v0 app](v0/) | Custom MCP server with OAuth ([docs](https://v0.app/docs/MCP)). [v0 API docs](https://v0.app/docs/api/v1/guides/oauth-mcp-servers) describe client ID metadata documents, which Frank supports. Not yet confirmed. |
| Base44 | [Add customer interviews to your Base44 app](base44/) | Custom MCP connection with OAuth, Builder plan or higher ([docs](https://docs.base44.com/documentation/account-and-billing/setting-up-a-custom-mcp)). Its docs do not say whether it needs dynamic client registration, which Frank does not offer yet. May not connect yet. |

## The prompt

Every guide uses the same prompt. Paste it into your builder's chat with your install code in place of the placeholder:

```text
Add the Frank user interview widget to this app. Here is my install code from Frank:

[PASTE YOUR FRANK INSTALL CODE HERE]

Load it once for the whole app, in the main HTML file or root layout, so it is not added
twice. The script tag must load https://widget.hifrank.ai/widget.js. If the code
includes Frank('identify', ...), pass the signed-in user's name and email after sign-in.
Do not change anything else in the app.
```

Each guide also has a version that shows the widget on one screen only.

## The install code

Copy your own install code from the Embed option of a Frank study. It looks like this ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=app-builders)):

```html
<script>
  window.Frank = window.Frank || function(){(window.Frank.q=window.Frank.q||[]).push(arguments)};
  Frank('init', { embedId: 'emb_...' });
  Frank('identify', {
    name: user.name, // replace 'user' with your app's user variable
    email: user.email,
  });
</script>
<script src="https://widget.hifrank.ai/widget.js" async></script>
```

The `identify` call is only needed when participants are identified from your app's variables.

## Where to place it

Give each moment its own Frank study and install code, and use one widget per page.

- **Right after sign-up.** New users still remember what they expected and what almost stopped them from signing up.
- **After the first key action.** Once someone has used the main feature for real, they can describe what worked and what confused them, not what they imagine.
- **On the cancel or downgrade flow.** People who are leaving can tell you what triggered it and what they use instead, while it is fresh. Let the cancel finish either way.

## FAQ

### How do I add customer interviews to an app I built with an AI app builder?

Create a study in Frank, open its Embed option, set the protected domain to your published app's domain, and copy the install code. Then paste a short prompt and the install code into your builder's chat and ask it to load the code once for the whole app, or only on one screen.

### Do I need OAuth or an API key to add the Frank widget?

No. The widget is browser code whose embed ID goes in your page's HTML, so it needs no OAuth, API key or secret. OAuth sign-in is only used if you also connect Frank's MCP server to your builder.

### Where should I put the interview widget in my app?

Three moments work well: right after sign-up, while new users remember what almost stopped them; after the first key action, when they can describe a real experience; and on the cancel or downgrade flow, when people can say what triggered the decision. Give each moment its own study, and never block the cancel button.

### Can my AI app builder read Frank interviews over MCP?

Replit, Lovable, Bolt, v0 and Base44 all document a way to add a custom remote MCP server with OAuth. Frank's server is https://api.hifrank.ai/mcp. Connecting Frank from Replit does not work yet: sign-in fails. We have not confirmed that Frank connects in the other builders, and builders that need dynamic client registration may not connect until Frank's sign-in offers it. The widget does not depend on MCP.

### Does Frank recruit participants?

No. Frank does not recruit participants. You invite your own users, and the widget is how they reach Frank inside your app.

### What does Frank cost?

Free plan: 60 voice minutes a month, no card required. MCP is included on every plan, including Free.

## Start with Frank

Frank is an AI user researcher that runs short voice interviews. Free plan: 60 voice minutes a month, no card required. Frank is SOC 2 and GDPR compliant and runs multilingual interviews.

[Create a free Frank account](https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=app-builders). Want a free tool for your blog or docs site instead? See the [free customer interview embeds](../embeds/).

## Related

- [Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=app-builders)
- [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=app-builders)
- [MCP server for customer interviews](../mcp-server-for-customer-interviews.html)
- [How to find out why customers churn](../how-to-find-out-why-customers-churn.html)
