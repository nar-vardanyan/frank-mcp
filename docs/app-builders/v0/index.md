# Add customer interviews to your v0 app

**Frank is an AI user researcher that runs short voice interviews. This guide adds Frank's website widget to an app you built with v0, so your users can talk to Frank right inside the app.** The widget needs no OAuth and no API key: you paste Frank's install code into your app. Free plan: 60 voice minutes a month, no card required.

Part of [Add customer interviews to your AI-built app](../). Builder docs checked 27 November 2026; numbers in brackets point to the sources at the end.

## Add the Frank widget

### 1. Get your install code from Frank

Create a study in Frank. When it is ready to share, an **Embed** option appears next to the interviewer link. On the install screen, set the **protected domain** to the domain your published v0 app runs on, because the install code is restricted to that domain. Pick how participants are identified (email entry, anonymous, or variables from your app), then copy the code ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=v0)). If you change a setting later, copy the code again.

### 2. Paste this prompt into the v0 chat for your project

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

### 3. How v0 handles the code

v0 uses Next.js, React, TypeScript, Tailwind CSS and shadcn/ui [2]. In Next.js, a third-party script that should load on every route goes in the root layout with the `next/script` component, and Next.js loads it only once as users move between pages [3].

v0 keeps API keys in **Project menu**, **Settings**, **Environment Variables**, per environment [4]. The Frank install code needs no environment variable: its embed ID goes in your page's HTML. If you later call Frank's REST API from server code, keep that API key in an environment variable there [4].

### The install code

Frank's install code looks like this ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=v0)). Always paste your own copy, which has your embed ID and settings:

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

In a Next.js app, the same code can go in `app/layout.tsx` with `next/script` [3]. Replace `emb_...` with your embed ID:

```tsx
import Script from 'next/script'

// inside <body> in app/layout.tsx
<Script id="frank-init">
  {`window.Frank = window.Frank || function(){(window.Frank.q=window.Frank.q||[]).push(arguments)};
  Frank('init', { embedId: 'emb_...' });`}
</Script>
<Script src="https://widget.hifrank.ai/widget.js" />
```

Next.js requires an `id` on inline scripts [3].

### 4. Where to place it

Each moment asks a different question, so give each its own Frank study and install code, and use one widget per page.

- **Right after sign-up.** New users still remember what they expected and what almost stopped them from signing up.
- **After the first key action.** Once someone has used the main feature for real, they can describe what worked and what confused them, not what they imagine.
- **On the cancel or downgrade flow.** People who are leaving can tell you what triggered it and what they use instead, while it is fresh. Let the cancel finish either way.

The widget asks for the microphone only after a participant interacts with it, and it shows a closed state if the study is paused ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=v0)). Test it on your published app at the protected domain.

## How to add a remote MCP server in v0

This part is optional. It lets the v0 AI read your Frank studies and transcripts while you build, so what users said can shape the next change. Frank's MCP server is `https://api.hifrank.ai/mcp`, and you sign in with your Frank account (OAuth). There is no API key. MCP is included on every plan, including Free. For other clients, see [Frank's MCP page](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=v0).

1. Open the **+** menu in the prompt form and select **MCPs** [1].
2. Choose to configure a custom MCP server instead of a preset [1].
3. Enter the name `Frank AI Researcher` and the URL `https://api.hifrank.ai/mcp`.
4. Choose **OAuth** as the authentication type and sign in to Frank [1].
5. Start or continue a chat. v0 considers connected MCP servers and their tools when it responds [1].

MCP tools are available to v0 while it generates. The app v0 generates cannot call the MCP tools directly [1], which is another reason the widget is the way to reach your users.

v0's API docs describe OAuth clients that use a client ID metadata document, which Frank's sign-in supports [5]. Those docs cover the v0 API rather than the chat, and we have not confirmed that Frank connects in v0 yet.

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

[Create a free Frank account](https://app.hifrank.ai/signup?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=v0). More on the widget: [Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=v0). More on MCP: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=v0).

## Other builders

- [Add customer interviews to your Replit app](../replit/)
- [Add customer interviews to your Lovable app](../lovable/)
- [Add customer interviews to your Bolt app](../bolt/)
- [Add customer interviews to your Base44 app](../base44/)

## Sources

1. [v0 Docs: MCP Integrations](https://v0.app/docs/MCP), accessed 27 November 2026.
2. [v0 Docs: FAQs](https://v0.app/docs/faqs), accessed 27 November 2026.
3. [Next.js Docs: Scripts](https://nextjs.org/docs/app/guides/scripts), accessed 27 November 2026.
4. [v0 Docs: External APIs](https://v0.app/docs/external-apis), accessed 27 November 2026.
5. [v0 API Docs: OAuth MCP Servers](https://v0.app/docs/api/v1/guides/oauth-mcp-servers), accessed 27 November 2026.

Frank facts: [Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=v0) and [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=v0), accessed 27 November 2026.
