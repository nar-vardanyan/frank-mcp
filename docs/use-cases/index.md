# Customer Interview Use Cases: 10 Task Flows for Frank

**Last updated:** Nov 28, 2026.

Each page below is one use case with a real task flow: the Frank MCP tools to call in order, the `create_research` input, a sample interview guide, what you get back and an example prompt for your assistant.

Frank AI Researcher (Frank) runs voice-first, AI-moderated voice interviews with your own customers. The Free plan includes 225 signup credits plus 60 voice minutes a month, no card required. MCP is included on every plan, including Free. Connect Frank first: [MCP server for customer interviews](../mcp-server-for-customer-interviews.md).

## Use cases

- [Onboarding Friction Interviews: Find Where New Users Get Stuck](onboarding-friction-interviews.md): Interview new users a few days after signup about their first session, so you hear in their words where onboarding slowed them down and what they expected instead.
- [Pricing Change Reaction Interviews: Hear How Customers Respond Before You Announce](pricing-change-reaction-interviews.md): Before you change a plan or a price, interview current customers about how they use the plan today and how they would react to the change, so you see the risk in their own words.
- [Feature Prioritization Interviews: Rank Requests by the Problem Behind Them](feature-prioritization-interviews.md): Interview the customers who asked for features on your roadmap about the problem behind each request, so you can rank work by how often and how badly the problem hurts.
- [Signup Motivation Interviews: Learn Why New Users Signed Up](signup-motivation-interviews.md): Interview people within a few days of signup about what was happening when they decided to try your product, so your homepage and onboarding speak to the real reason.
- [NPS Follow-up Interviews: Find Out What Is Behind the Score](nps-follow-up-interviews.md): After an NPS or satisfaction survey, invite detractors and passives to a short voice interview about the reason for their score, so you get the story behind the number.
- [Beta Feedback Interviews: Talk to Every Beta User About Real Use](beta-feedback-interviews.md): Interview beta users after they have used the new feature on real work, so you learn what worked, what broke and whether they would keep using it before general release.
- [Persona Discovery Interviews: Learn Who Your Best Customers Really Are](persona-discovery-interviews.md): Interview your most active customers about their role, their work and the job your product does for them, so your personas come from evidence instead of guesses.
- [Support Follow-up Interviews: Learn the Root Cause Behind Support Tickets](support-follow-up-interviews.md): After a support ticket is resolved, invite the customer to a short voice interview about what they were trying to do when the problem started, so you fix the cause and not only the ticket.
- [Trial Conversion Interviews: Learn Why Trial Users Did or Did Not Upgrade](trial-conversion-interviews.md): Interview users at the end of a trial or free period about what they tried, what they expected and what decided the upgrade, so you know what blocks conversion.
- [Upgrade Motivation Interviews: Learn Why Customers Moved to a Paid Plan](upgrade-motivation-interviews.md): Interview customers who recently upgraded or expanded about what was happening when they decided, so you can find more customers in the same situation and repeat it.

## The task flow, in short

`ping`, then `list_products` (or `create_product`), `create_research` (draft), `link_product`, `get_research` and `edit_research` to review, `publish_research` only when the user approves, `list_embeds`, `configure_embed` and `get_embed` for the website widget, and `list_interviews` and `get_interview` to read the results.

## Related

- [First study quickstart](../first-study-quickstart.md): one copy-paste prompt for your first draft study
- [Docs home](https://nar-vardanyan.github.io/frank-mcp/)
- [MCP server for customer interviews](../mcp-server-for-customer-interviews.md)
- [Add customer interviews to your AI-built app](https://nar-vardanyan.github.io/frank-mcp/app-builders/)
