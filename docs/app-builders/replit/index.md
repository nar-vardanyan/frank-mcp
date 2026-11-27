# Add customer interviews to your Replit app

**Frank is an AI user researcher that runs short voice interviews. This guide adds Frank's website widget to an app you built with Replit, so your users can talk to Frank right inside the app.** The widget needs no OAuth and no API key: you paste Frank's install code into your app. Free plan: 60 voice minutes a month, no card required.

Part of [Add customer interviews to your AI-built app](../). Builder docs checked 27 November 2026; numbers in brackets point to the sources at the end.

## Add the Frank widget

### 1. Get your install code from Frank

Create a study in Frank. When it is ready to share, an **Embed** option appears next to the interviewer link. On the install screen, set the **protected domain** to the domain your published Replit app runs on, because the install code is restricted to that domain. Pick how participants are identified (email entry, anonymous, or variables from your app), then copy the code ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=replit)). If you change a setting later, copy the code again.

### 2. Paste this prompt into the Agent chat in your Replit project

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

### 3. How Replit handles the code

Replit Agent builds and edits your app's code, so the prompt below asks it to place the install code for you.

Replit keeps credentials in **Secrets** and non-sensitive settings in **Configurations**, and your code reads both as environment variables [2]. The Frank install code needs neither: its embed ID goes in your page's HTML, as Frank's install code shows. If you later call Frank's REST API from your server, keep that API key in Secrets [2].

### The install code

Frank's install code looks like this ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=replit)). Always paste your own copy, which has your embed ID and settings:

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

The widget asks for the microphone only after a participant interacts with it, and it shows a closed state if the study is paused ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=replit)). Test it on your published app at the protected domain.

## How to add a remote MCP server in Replit

**Not working yet.** Connecting Frank's MCP server from Replit does not work today. When we tried it on 27 November 2026, **Test & save** returned "Failed to initialize connection. Please try again later." and Frank's sign-in page never opened. To use Frank in a Replit app today, use the widget above. Replit's steps for adding a custom MCP server are below for reference [1].

Once it works, this would let the Replit AI read your Frank studies and transcripts while you build. Frank's MCP server is `https://api.hifrank.ai/mcp`, and you sign in with your Frank account (OAuth). There is no API key. MCP is included on every plan, including Free. For other clients, see [Frank's MCP page](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=replit).

1. Open **Settings**, then **Integrations**, then **Your integrations**. Select **Add custom**, then **Add personal MCP server** [1]. To share it with your workspace, choose **Add workspace MCP server**, which needs permission to manage workspace integrations [1].
2. Set the display name to `Frank AI Researcher` [1].
3. Enter the server URL `https://api.hifrank.ai/mcp` [1].
4. Select **Test & save**. Replit says it walks you through any OAuth sign-in the server needs [1]. With Frank, this step currently fails (see above).

Custom MCP options depend on feature availability and permissions for your account or workspace. If you do not see them, Replit says to ask your workspace administrator [1].

## Start with Frank

Frank is an AI user researcher that runs short voice interviews. Free plan: 60 voice minutes a month, no card required. Frank does not recruit participants: you invite your own users, and the widget is how they reach Frank inside your app.

[Create a free Frank account](https://app.hifrank.ai/signup?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=replit). More on the widget: [Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=replit). More on MCP: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=replit).

## Other builders

- [Add customer interviews to your Lovable app](../lovable/)
- [Add customer interviews to your Bolt app](../bolt/)
- [Add customer interviews to your v0 app](../v0/)
- [Add customer interviews to your Base44 app](../base44/)

## Sources

1. [Replit Docs: Connect via MCP](https://docs.replit.com/build/connect-via-mcp), accessed 27 November 2026.
2. [Replit Docs: Secrets](https://docs.replit.com/core-concepts/project-editor/app-setup/secrets), accessed 27 November 2026.

Frank facts: [Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=replit) and [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=replit), accessed 27 November 2026.
