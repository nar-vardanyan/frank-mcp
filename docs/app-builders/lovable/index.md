# Add customer interviews to your Lovable app

**Frank is an AI user researcher that runs short voice interviews. This guide adds Frank's website widget to an app you built with Lovable, so your users can talk to Frank right inside the app.** The widget needs no OAuth and no API key: you paste Frank's install code into your app. Free plan: 60 voice minutes a month, no card required.

Part of [Add customer interviews to your AI-built app](../). Builder docs checked 27 November 2026; numbers in brackets point to the sources at the end.

## Add the Frank widget

### 1. Get your install code from Frank

Create a study in Frank. When it is ready to share, an **Embed** option appears next to the interviewer link. On the install screen, set the **protected domain** to the domain your published Lovable app runs on, because the install code is restricted to that domain. Pick how participants are identified (email entry, anonymous, or variables from your app), then copy the code ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=lovable)). If you change a setting later, copy the code again.

### 2. Paste this prompt into the project chat in Lovable

Replace the placeholder with your install code before you send it.

```text
Add the Frank user interview widget to this app. Here is my install code from Frank:

[PASTE YOUR FRANK INSTALL CODE HERE]

Load it once for the whole app, in the main HTML file or root layout, so it is not added
twice. The script tag must load https://widget.hifrank.ai/widget.js. If the code
includes Frank('identify', ...), pass the signed-in user's name and email after sign-in.
Do not change anything else in the app.
```

[Open this prompt in Lovable](https://lovable.dev/#prompt=Add%20the%20Frank%20user%20interview%20widget%20to%20this%20app.%20Here%20is%20my%20install%20code%20from%20Frank%3A%0A%0A%5BPASTE%20YOUR%20FRANK%20INSTALL%20CODE%20HERE%5D%0A%0ALoad%20it%20once%20for%20the%20whole%20app%2C%20in%20the%20main%20HTML%20file%20or%20root%20layout%2C%20so%20it%20is%20not%20added%20twice.%20The%20script%20tag%20must%20load%20https%3A%2F%2Fwidget.hifrank.ai%2Fwidget.js.%20If%20the%20code%20includes%20Frank%28%27identify%27%2C%20...%29%2C%20pass%20the%20signed-in%20user%27s%20name%20and%20email%20after%20sign-in.%20Do%20not%20change%20anything%20else%20in%20the%20app.) starts a new Lovable project with the prompt filled in. Lovable never sends a prompt link on its own, so you can paste your install code first [2]. To use the prompt in an existing project, Lovable also accepts `https://lovable.dev/projects/YOUR_PROJECT_ID?prompt=` followed by the URL-encoded prompt [2].

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

### 3. How Lovable handles the code

Lovable builds your app from chat, so the prompt below asks it to place the install code.

Lovable's **Secrets** are for backend values and never reach the browser. Values prefixed with `VITE_` are build-time browser values and belong in the project's `.env` file [3]. The Frank install code is browser code with an embed ID that goes in your page's HTML, so it needs no secret. If you later call Frank's REST API from an Edge Function, keep that API key in Secrets [3].

### The install code

Frank's install code looks like this ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=lovable)). Always paste your own copy, which has your embed ID and settings:

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

The widget asks for the microphone only after a participant interacts with it, and it shows a closed state if the study is paused ([Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=lovable)). Test it on your published app at the protected domain.

## How to add a remote MCP server in Lovable

This part is optional. It lets the Lovable AI read your Frank studies and transcripts while you build, so what users said can shape the next change. Frank's MCP server is `https://api.hifrank.ai/mcp`, and you sign in with your Frank account (OAuth). There is no API key. MCP is included on every plan, including Free. For other clients, see [Frank's MCP page](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=lovable).

1. Open **Connectors**, select **Add custom**, and choose **MCP server** [1].
2. Enter `Frank AI Researcher` as the **Server name** [1].
3. Enter `https://api.hifrank.ai/mcp` as the **Server URL** [1].
4. Keep **OAuth**, which is the default, then click **Add & authorize** and sign in to Frank [1].
5. Ask Lovable something the server can answer, for example "Using Frank AI Researcher, list my studies." [1]

Custom MCP servers are available on all plans. They are personal to you and never part of your published app [1]. A workspace admin can turn custom MCP off; if **MCP server** is grayed out, that setting is off [1].

Lovable's docs do not say how it registers with an OAuth server. Frank's sign-in does not offer dynamic client registration yet, so if Lovable needs it, Frank may not connect yet. We have not confirmed that Frank connects in Lovable. The widget above does not depend on this.

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

[Create a free Frank account](https://app.hifrank.ai/signup?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=lovable). More on the widget: [Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=lovable). More on MCP: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=lovable).

## Other builders

- [Add customer interviews to your Replit app](../replit/)
- [Add customer interviews to your Bolt app](../bolt/)
- [Add customer interviews to your v0 app](../v0/)
- [Add customer interviews to your Base44 app](../base44/)

## Sources

1. [Lovable Docs: Connect a custom MCP server as a chat connector](https://docs.lovable.dev/integrations/custom-mcp), accessed 27 November 2026.
2. [Lovable Docs: Build with URL](https://docs.lovable.dev/integrations/build-with-url), accessed 27 November 2026.
3. [Lovable Docs: Secrets](https://docs.lovable.dev/features/secrets), accessed 27 November 2026.

Frank facts: [Frank widget docs](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=lovable) and [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=app-builder-guide&utm_campaign=lovable), accessed 27 November 2026.
