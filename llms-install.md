# Installing Frank AI Researcher (remote MCP server)

Frank is a hosted remote MCP server. There is nothing to install or build, and no API key.

Frank is available as an app in ChatGPT: [install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). In ChatGPT, install it from that listing and sign in. For other MCP clients:

1. Add a remote MCP server named `frank` with URL `https://api.hifrank.ai/mcp` (Streamable HTTP).
2. Connect. The client opens a browser for Frank sign-in (OAuth 2.1 + PKCE). Approve the permissions you want.
3. Verify: ask "List my Frank studies" (tool `list_researches`).

Cline config:

```json
{
  "mcpServers": {
    "frank": {
      "type": "streamableHttp",
      "url": "https://api.hifrank.ai/mcp"
    }
  }
}
```

If sign-in fails with "does not support dynamic client registration", your client needs DCR, which Frank is adding. See https://www.hifrank.ai/docs/frank-mcp-connector.
