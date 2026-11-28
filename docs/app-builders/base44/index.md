# Add customer interviews to your Base44 app

**Frank is an AI user researcher that runs short voice interviews. This guide adds Frank's website widget to an app you built with Base44, so your users can talk to Frank right inside the app.** The widget needs no OAuth and no API key: you paste Frank's install code into your app. Free plan: 60 voice minutes a month, no card required.

Part of [Add customer interviews to your AI-built app](../). Builder docs checked 27 November 2026; numbers in brackets point to the sources at the end.

## Add the Frank widget

### 1. Get your install code from Frank

Create a study in Frank. When it is ready to share, an **Embed** option appears next to the interviewer link. On the install screen, set the **protected domain** to the domain your published Base44 app runs on, because the install code is restricted to that domain. Pick how participants are identified (email entry, anonymous, or variables from your app), then copy the code ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=base44)). If you change a setting later, copy the code again.

### 2. Paste this prompt into the AI chat in your Base44 app editor

Replace the placeholder with your install code before you send it.

```text
Add the Frank user interview widget to this app. Here is my install code from Frank:

[PASTE YOUR FRANK INSTALL CODE HERE]

Load it once for the whole app, in the main HTML file or root layout, so it is not added
twice. The script tag must load https://widget.hifrank.ai/widget.js. If the code
includes Frank('identify', ...), pass the signed-in user's name and email after sign-in.
Do not change anything else in the app.
```

To show the widget at one moment only (see where to place it, below), use this prompt instead:

```text
Add the Frank user interview widget to one screen only: [THE SCREEN, for example the
first screen after sign-up, the screen after a user first completes the main action, or
the cancel or downgrade screen]. Here is my install code from Frank:

[PASTE YOUR FRANK INSTALL CODE HERE]

Run the install code only when that screen opens, load
https://widget.hifrank.ai/widget.js only once, and do not show the widget anywhere else.
If the code includes Frank('identify', ...), pass the signed-in user's name and email.
Never block or delay the cancel button. Do not change anything else in the app.
```

### 3. How Base44 handles the code

Base44's docs add third-party scripts by asking the AI chat to put the `<script>` parts inside the `<head>` of `index.html`, then publishing the app. You can also paste the code into `index.html` yourself from the **Code** tab [2]. Base44 warns that a `<noscript>` tag in the `<head>` stops the app from loading in the editor [2]; the Frank install code has none.

Base44 app secrets are for backend functions [3]. The Frank install code needs no secret: its embed ID goes in your page's HTML. If you later call Frank's REST API from a backend function, keep that API key as an app secret [3].

### The install code

Frank's install code looks like this ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=base44)). Always paste your own copy, which has your embed ID and settings:

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

The `identify` call is only needed when participants are identified from your app's variables. It passes the signed-in user's name and email, so they do not have to type them. You can leave it out for email entry or anonymous mode.

### 4. Where to place it

Each moment asks a different question, so give each its own Frank study and install code, and use one widget per page.

- **Right after sign-up.** New users still remember what they expected and what almost stopped them from signing up.
- **After the first key action.** Once someone has used the main feature for real, they can describe what worked and what confused them, not what they imagine.
- **On the cancel or downgrade flow.** People who are leaving can tell you what triggered it and what they use instead, while it is fresh. Let the cancel finish either way.

The widget asks for the microphone only after a participant interacts with it, and it shows a closed state if the study is paused ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=base44)). Test it on your published app at the protected domain.

## How to add a remote MCP server in Base44

This part is optional. It lets the Base44 AI read your Frank studies and transcripts while you build, so what users said can shape the next change. Frank's MCP server is `https://api.hifrank.ai/mcp`, and you sign in with your Frank account (OAuth). There is no API key. MCP is included on every plan, including Free. For other clients, see [Frank's MCP page](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=base44).

1. Click your workspace name at the bottom left, then **Account settings** [1].
2. Click **Builder** and scroll to **MCP Connections**. Click **Add custom MCP** (or **Add MCP** if you already have one) [1].
3. Enter the name `Frank AI Researcher` and the URL `https://api.hifrank.ai/mcp` [1].
4. Choose **OAuth**, click **Authorize & Add**, and sign in to Frank in the window that opens [1].
5. In the AI chat, say what you want, for example "Use Frank AI Researcher to list my studies." [1]

Custom MCP connections need a Base44 Builder plan or higher [1]. They are only available in the editor chat while you build, not in your published app's logic or workflows [1].

Base44's docs do not say how it registers with an OAuth server. Frank's sign-in does not offer dynamic client registration yet, so if Base44 needs it, Frank may not connect yet. We have not confirmed that Frank connects in Base44. The widget above does not depend on this.

Prompts to try once Frank is connected:

```text
Use Frank AI Researcher to read my latest completed interviews, list the top 3 problems
people mention, and suggest one change to this app for each.
```

```text
Use Frank AI Researcher to draft a study that interviews people who signed up this week
about what almost stopped them. Draft only. Do not publish it.
```

A study created through MCP stays a draft until you approve publishing.

## Start with Frank

Frank is an AI user researcher that runs short voice interviews. Free plan: 60 voice minutes a month, no card required. Frank does not recruit participants: you invite your own users, and the widget is how they reach Frank inside your app.

[Create a free Frank account](https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=base44). More on the widget: [Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=base44). More on MCP: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=base44).

## Other builders

- [Add customer interviews to your Replit app](../replit/)
- [Add customer interviews to your Lovable app](../lovable/)
- [Add customer interviews to your Bolt app](../bolt/)
- [Add customer interviews to your v0 app](../v0/)

## Sources

1. [Base44 Docs: Managing MCP connections](https://docs.base44.com/documentation/account-and-billing/setting-up-a-custom-mcp), accessed 27 November 2026.
2. [Base44 Docs: Viewing and customizing your app analytics (Adding a tracking script)](https://docs.base44.com/documentation/performance-and-seo/app-analytics), accessed 27 November 2026.
3. [Base44 Docs: Managing app secrets](https://docs.base44.com/Integrations/managing-app-secrets), accessed 27 November 2026.

Frank facts: [Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=base44) and [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=base44), accessed 27 November 2026.
