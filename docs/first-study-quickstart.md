# First Study Quickstart: Create a Frank Study From Your Assistant in 3 Steps

**Last updated:** Nov 28, 2026. Tool names and parameters come from the tool list of Frank's MCP server at `https://api.hifrank.ai/mcp`, read on Nov 28, 2026.

**Short answer:** Connect `https://api.hifrank.ai/mcp` in your assistant with OAuth, paste the prompt below, and your assistant creates a draft voice interview study in Frank with a 10-minute guide. Nothing goes live and no credits are spent until you ask it to publish.

Frank AI Researcher (Frank) runs voice-first, AI-moderated voice interviews with your own customers. It does not find participants for you. The Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. MCP is included on every plan, including Free.

## Step 1: Connect Frank

Add `https://api.hifrank.ai/mcp` as a remote MCP server and choose OAuth. Sign in to Frank, or [create a free account](https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=first-study-quickstart) first, then click **Allow** on the consent page. Works with ChatGPT, Claude, Grok and Muse. Setup for each assistant: [MCP server for customer interviews](mcp-server-for-customer-interviews.md).

If you create your account during the connection, sign in again from your assistant afterwards if the connection did not finish. Approval links last ten minutes.

## Step 2: Paste this prompt

> Using Frank: 1) call ping. 2) call list_products; if I have no product, call create_product with name "[my product name]", description "[one sentence about what it does]" and category "saas_software" (or the category that fits). 3) call create_research with exactly the JSON below, then call link_product with the new researchId and my productId. 4) call get_research and show me the questions. Do not call publish_research.

```json
{
  "name": "First customer interviews",
  "description": "Short voice interviews with current customers about why they use the product and what gets in their way.",
  "goals": [
    "Learn why customers started using the product",
    "Learn what gets in their way today"
  ],
  "researchType": "discovery",
  "botTypes": [
    "audio"
  ],
  "topics": [
    {
      "name": "Getting started",
      "questions": [
        {
          "text": "What were you trying to get done when you started using the product?",
          "followUpDepth": "1-2 follow-ups"
        },
        {
          "text": "What were you using before?",
          "followUpDepth": "1-2 follow-ups"
        }
      ]
    },
    {
      "name": "Today",
      "questions": [
        {
          "text": "Walk me through the last time you used the product. What happened?",
          "followUpDepth": "1-2 follow-ups"
        },
        {
          "text": "What almost made you stop using it?",
          "followUpDepth": "1-2 follow-ups"
        }
      ]
    },
    {
      "name": "Next",
      "questions": [
        {
          "text": "If you could change one thing, what would it be and why?",
          "followUpDepth": "1-2 follow-ups"
        }
      ]
    }
  ]
}
```

Replace the bracketed parts with your product's name and description. To match a specific use case, swap in a guide from the [use cases](use-cases/).

## Step 3: Review, then publish when you are ready

Read the questions your assistant shows you. To change one, ask for it in plain words, for example "Change question 4 to ask about the last week". Your assistant uses `edit_research`. When the guide looks right, say:

> Publish the study in English with a 10-minute length and give me the interviewer link.

That calls `publish_research` with `language` and `duration: 10`. Publishing makes the study live and starts spending credits, and it cannot be undone from the chat. Use `language: "multi"` for multilingual interviews.

## What you have after these steps

- A draft study in Frank, linked to your product, with 2 goals and 5 questions in 3 sections.
- After publishing: an interviewer link to send to customers you already have, or a website widget. Ask your assistant to run `list_embeds`, `configure_embed` and `get_embed` for the install snippet.
- As interviews come in: `list_interviews` for status, `get_interview` for each transcript, and sentiment and thematic analysis in the Frank dashboard.

## Calls your assistant makes

| Step | Tool | Required input |
|---|---|---|
| Check the connection | `ping` | none |
| Find a product | `list_products` | none |
| Create a product if none fits | `create_product` | `name`, `description`, `category` |
| Create the draft | `create_research` | `name`, `description`, `goals`, `topics` |
| Attach it | `link_product` | `researchId`, `productId` |
| Show the guide | `get_research` | `researchId` |
| Publish, only when you ask | `publish_research` | `researchId`, `language` |

## Troubleshooting

- **The assistant offers other interview formats:** ask for voice. The JSON above sets `botTypes` to `["audio"]`.
- **No interviewer link:** a draft has none. The link appears once the study is published.
- **The connection stopped after signup:** connect again from your assistant and sign in with the account you just created.

## Pricing and security

The Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. Free interviews are up to 10 minutes long. See [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=first-study-quickstart) for paid plans. Frank is SOC 2 and GDPR compliant.

## Related

- [Customer interview use cases](use-cases/): 10 task flows with sample guides
- [MCP server for customer interviews](mcp-server-for-customer-interviews.md)
- [Get your first 5 interviews with Frank](get-your-first-5-interviews-with-frank.md): where to share the link once the study is live
- [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=first-study-quickstart)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "First Study Quickstart: Create a Frank Study From Your Assistant in 3 Steps",
  "description": "Connect Frank's MCP server, paste one prompt, and your assistant creates a draft voice interview study with a 10-minute guide. Includes the exact create_research input and what to do next.",
  "datePublished": "2026-11-28",
  "dateModified": "2026-11-28",
  "inLanguage": "en",
  "mainEntityOfPage": "https://nar-vardanyan.github.io/frank-mcp/first-study-quickstart.html",
  "author": {
    "@type": "Organization",
    "name": "Frank",
    "url": "https://www.hifrank.ai"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.hifrank.ai/#organization",
    "name": "Frank",
    "url": "https://www.hifrank.ai"
  }
}
</script>
