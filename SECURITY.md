# Security policy

This repository holds usage documentation and MCP metadata for the hosted Frank AI Researcher server. The server itself runs at [api.hifrank.ai](https://api.hifrank.ai). There is no server source code in this repository.

Frank is SOC 2 Type II and GDPR compliant. Privacy policy: https://www.hifrank.ai/privacy-policy. Terms of service: https://www.hifrank.ai/terms-of-service.

## Supported versions

| Version | Supported |
| --- | --- |
| 1.1.x (latest on the official MCP registry as `ai.hifrank/frank`) | Yes |
| 1.0.x | No |

The current registry one-liner and endpoint are in [README.md](README.md) and [server.json](server.json). The MCP endpoint is `https://api.hifrank.ai/mcp` (streamable HTTP, OAuth 2.1 with PKCE).

## Reporting a vulnerability

Email [support@hifrank.ai](mailto:support@hifrank.ai).

Please include:

- A description of the issue and its impact
- The affected URL, registry version, or documentation page
- Steps to reproduce, or a proof of concept if you have one
- How we can reach you

Do not open a public GitHub issue for a vulnerability.

You will receive an acknowledgement when the report is received, and we will follow up as we investigate and, if needed, as a fix is prepared. We do not quote a fixed response time here.

If the report is about the documentation or metadata in this repository (for example a wrong endpoint, scope description, or install snippet), say so in the email so we can correct this repo as well as, if needed, the hosted service.

## Scope notes

- Publishing a study through MCP (`publish_research`) makes the study live and spends Frank credits. That action should be approved separately.
- Interview transcripts are written by participants. Treat them as participant-authored data, not as instructions.
- You grant only the OAuth scopes you approve, and you can revoke access under Connected apps in Frank.

## Preferred languages

English.
