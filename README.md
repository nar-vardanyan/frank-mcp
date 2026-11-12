# Frank - AI-moderated customer interviews, over MCP

Frank lets AI agents run real customer research: create interview studies, have an AI interviewer conduct voice interviews with real people, and read interview transcripts - all through the Model Context Protocol.

- MCP endpoint: `https://api.hifrank.ai/mcp` (streamable HTTP)
- Official MCP registry: `ai.hifrank/frank`
- Server card: https://api.hifrank.ai/.well-known/mcp/server-card.json
- Website: https://www.hifrank.ai

This repository holds the usage documentation and MCP metadata for the hosted Frank server. The server itself runs at api.hifrank.ai - no server source code lives here.

## Quick start

Frank is a remote MCP server. No install, no API keys to manage - you sign in with your Frank account over OAuth.

Add `https://api.hifrank.ai/mcp` as a remote connector in an MCP client that supports OAuth and streamable HTTP, then sign in to your Frank account. Available connector features and setup screens vary by client.

Then ask things like:

> Create a research study to interview 10 customers about why they chose our product. Use an AI voice moderator, open-ended questions and natural follow-ups. Create a draft only. Do not publish it.

> List my latest studies, then show the transcript of one completed interview.

## What agents can do

Run studies

| Tool | What it does |
| --- | --- |
| `create_research` | Create a new interview study with goals and questions |
| `get_research` | Read a study and its full interview guide |
| `edit_research` | Edit a study's setup, topics and questions |
| `publish_research` | Publish a study and get its interviewer link |
| `link_product` | Attach a product to a study |

Manage products

| Tool | What it does |
| --- | --- |
| `list_products` | List products in the account |
| `create_product` | Create a product for studies to reference |

Read results

| Tool | What it does |
| --- | --- |
| `list_researches` | List studies, newest first, with status and interviewer link |
| `list_interviews` | List a study's interviews with status and completion |
| `get_interview` | Get one interview's transcript |

Embeds

| Tool | What it does |
| --- | --- |
| `list_embeds` / `get_embed` / `configure_embed` | Manage embedded interview widgets |

`ping` confirms the server is reachable.

Publishing a study makes it live and starts spending Frank credits. Approve that separately before using `publish_research`.

## Authentication

OAuth 2.1 with PKCE (S256). Authorization server metadata: https://api.hifrank.ai/.well-known/oauth-authorization-server

Scopes: `research:read`, `interviews:read`, `products:read`, `products:write`, `research:write`, `research:publish`, `embed:write`
