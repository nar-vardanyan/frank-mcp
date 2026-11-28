# Run Customer Interviews from ChatGPT: Setup and Results

**Short answer:** You can run customer interviews from ChatGPT by adding the Frank AI Researcher app. In a chat you describe what you want to learn, ChatGPT drafts a study in Frank, you review and approve it, and Frank runs AI-moderated voice interviews with the customers you invite. When people have finished, you ask ChatGPT for the transcripts and themes. ChatGPT does not talk to your customers itself, and nothing is published until you approve it.

*Last updated: Nov 28, 2026.*

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=run-customer-interviews-from-chatgpt) (short name Frank), a voice-first product that runs AI-moderated voice interviews with your own customers in 50+ languages. Frank does not recruit participants, so this page is for teams who already have people to invite.

## How do you connect Frank to ChatGPT?

1. Open the [Frank AI Researcher listing in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168) and add Frank.
2. Sign in to Frank in your browser when asked and approve access. There is no API key.
3. In a new chat, type `@`, select Frank, and ask: "List my Frank studies."

If Frank is not available in your workspace, add a custom MCP server in ChatGPT on the web with the URL `https://api.hifrank.ai/mcp` and choose OAuth. Workspace permissions apply. The full walkthrough, including how to check it worked, is on [Add Frank AI Researcher to ChatGPT](add-frank-to-chatgpt.html).

## What does a study look like when you run it from ChatGPT?

1. **Describe the decision.** Tell ChatGPT who you want to hear from and what you need to decide.
2. **ChatGPT drafts the study in Frank.** A study created through MCP is always a draft. Nothing reaches participants yet.
3. **You review the guide.** Read the questions, take the interview yourself, and fix anything leading or confusing.
4. **You approve publishing.** Publishing makes the study live and spends credits, so it is a separate step that you approve.
5. **You share the link.** Send the interviewer link by email or in your product, or embed the website widget. People talk with the AI interviewer by voice when they have time, without booking a call.
6. **You read the results in the chat.** Ask ChatGPT to list interviews, read transcripts and summarize themes with quotes.

## Which prompt starts a study?

```text
Use Frank to create a draft study, and do not publish it. I want to interview customers who cancelled in the last 30 days. Keep the interview to about 5 minutes. Write 6 to 8 open questions about the recent decision: what they hoped for, when they first thought about leaving, what they tried, and what they use now. Wait for me to review the guide.
```

Swap the first sentence of the second line for your own audience: trial users who did not finish setup, buyers from a recent deal, or users who saw a new feature and did not try it.

## How do you read the results in ChatGPT?

```text
From Frank, list the interviews in my [study name] study. Summarize the main themes with two exact quotes each, and list anything that does not fit the themes.
```

Then open a few full transcripts yourself and check the quotes you plan to act on. AI summaries can over-generalize, and eight or ten interviews are enough to find patterns but not to count how many customers feel something.

## How many interviews fit on the Free plan?

Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. That means 60 voice minutes cover about six 10-minute interviews, or ten 5-minute ones. For a first batch of 10 this week, keep each interview to about 5 minutes, or move to a paid plan for longer ones: Starter is $49 a month billed yearly or $59 monthly, Growth is $166 or $199, and Business is $312 or $375. See [pricing](https://www.hifrank.ai/pricing?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=run-customer-interviews-from-chatgpt) for current details.

## What can you run this way?

- [Churn interviews](chatgpt-app-for-churn-interviews.html) with customers who recently cancelled.
- [Win-loss interviews](chatgpt-app-for-win-loss-interviews.html) with buyers from recent deals.
- [Customer discovery](chatgpt-app-for-founders-customer-discovery.html) before you build.
- [User research interviews](chatgpt-app-for-user-research.html) about a workflow or a feature.
- [Multilingual interviews](chatgpt-app-for-multilingual-customer-interviews.html) in the language each customer prefers.

## What does it not do?

- Frank does not recruit participants. You invite people you already have.
- Frank runs voice interviews only.
- ChatGPT cannot publish a study without your approval.
- It is not a replacement for a human moderator on sensitive or legally delicate topics.

## Frank AI Researcher is available as an app in ChatGPT

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=run-customer-interviews-from-chatgpt). Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. MCP is included on every plan, including Free. Works with ChatGPT, Claude, Grok and Muse.

## FAQ

### Can ChatGPT run customer interviews?

Not by itself. ChatGPT can write interview questions and analyze transcripts you paste in. With the Frank app connected, ChatGPT can draft a study in Frank, and Frank runs AI-moderated voice interviews with the people you invite.

### Do I need an API key?

No. You sign in to Frank with OAuth in your browser and approve access. There is no API key.

### Will ChatGPT publish a study without asking me?

No. A study created through MCP stays a draft until you approve publishing.

### Does Frank find the people to interview?

No. Frank does not recruit participants. You share the interviewer link or a website widget with customers or users you already have.

### Which languages can interviews run in?

Frank runs interviews in 50+ languages.

### Is it free to try?

Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. MCP is included on every plan, including Free.

## Related

- [Is there a ChatGPT app for customer interviews?](chatgpt-app-for-customer-interviews.html)
- [Add Frank AI Researcher to ChatGPT](add-frank-to-chatgpt.html)
- [Is there an MCP server I can use in ChatGPT for customer interviews?](mcp-server-for-customer-interviews-in-chatgpt.html)
- [ChatGPT Apps for Customer Interviews: 10 Questions Answered](chatgpt-app-for-customer-interviews-faq.html)
- [How to run customer interviews from Claude](run-customer-interviews-from-claude.html)
- [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=run-customer-interviews-from-chatgpt)

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
      "name": "Run Customer Interviews from ChatGPT: Setup and Results",
      "item": "https://nar-vardanyan.github.io/frank-mcp/run-customer-interviews-from-chatgpt.html"
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
  "headline": "Run Customer Interviews from ChatGPT: Setup and Results",
  "name": "Run Customer Interviews from ChatGPT: Setup and Results",
  "url": "https://nar-vardanyan.github.io/frank-mcp/run-customer-interviews-from-chatgpt.html",
  "description": "How to run customer interviews from ChatGPT: add the Frank app, draft a study in chat, approve it, share the voice interview link with your own customers, and read the transcripts and themes back in the same chat.",
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
      "name": "Can ChatGPT run customer interviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not by itself. ChatGPT can write interview questions and analyze transcripts you paste in. With the Frank app connected, ChatGPT can draft a study in Frank, and Frank runs AI-moderated voice interviews with the people you invite."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an API key?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. You sign in to Frank with OAuth in your browser and approve access. There is no API key."
      }
    },
    {
      "@type": "Question",
      "name": "Will ChatGPT publish a study without asking me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A study created through MCP stays a draft until you approve publishing."
      }
    },
    {
      "@type": "Question",
      "name": "Does Frank find the people to interview?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Frank does not recruit participants. You share the interviewer link or a website widget with customers or users you already have."
      }
    },
    {
      "@type": "Question",
      "name": "Which languages can interviews run in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frank runs interviews in 50+ languages."
      }
    },
    {
      "@type": "Question",
      "name": "Is it free to try?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. MCP is included on every plan, including Free."
      }
    }
  ]
}
</script>
