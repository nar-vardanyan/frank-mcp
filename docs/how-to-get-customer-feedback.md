# How to Get Customer Feedback

**In short:** Pick one decision the feedback should change, then choose a method that can change it. Use analytics or tickets to see what is happening, a short survey to count how many people feel a certain way, and interviews to learn why. An AI agent such as Claude or ChatGPT can help draft the questions and summarize answers, but it cannot invent your customers or replace your judgment. You invite people you already know, and you check the quotes before you act.

**We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback)**, a voice-first product that runs AI-moderated voice interviews with your own customers and connects to AI agents through MCP. This guide names other approaches too, and the method works without our tool.

## Choose a method that can change the decision

Write one sentence: we will collect feedback from [who] to decide [what]. If a finding could not change anything, tighten the question first.

| If you need to… | A method that fits | Why |
|---|---|---|
| See what is happening in the product | Analytics, tickets, or session data | These show what people did, not why |
| Count how many people chose a category | A short survey | Surveys are typically more closed-ended than interviews ([Nielsen Norman Group, Should You Run a Survey?](https://www.nngroup.com/articles/should-you-run-a-survey/)) |
| Understand why something happened | Interviews, including AI-moderated voice interviews | Open questions let people answer in their own words, and an interviewer can follow up ([Nielsen Norman Group, Open-Ended vs. Closed Questions](https://www.nngroup.com/articles/open-ended-questions/)) |

For a fuller comparison, see [AI customer interviews vs surveys](ai-customer-interviews-vs-surveys.md). For SaaS teams, start with people who recently signed up, activated, or cancelled, because they can talk about a specific recent episode, not a general opinion ([Nielsen Norman Group, The Critical Incident Technique in UX](https://www.nngroup.com/articles/critical-incident-technique/)).

## A six-step way to collect it

1. **Name the decision.** Tell yourself, or an AI agent, the one decision this feedback should change, such as why trial users do not activate or why people cancel.
2. **Pick the method.** Use analytics for what is happening, a survey for a count, and interviews for why. AI-moderated voice interviews let people answer from a link, without a scheduled call. See [How to get user feedback without scheduling calls](user-feedback-without-scheduling-calls.md).
3. **Draft 6 to 8 open questions about recent behavior.** Ask "Tell me about the last time you…" rather than "Would you use…?" or "How much would you pay…?" A starting list is in [Customer interview questions template](customer-interview-questions-template.md).
4. **Invite your own customers.** Share an interview link, a survey, or a website widget with people who recently did the thing you are studying. Frank does not recruit participants, and neither should you expect an AI agent to find them.
5. **Read every answer and group themes.** If an AI agent drafts the readout, ask for one exact quote per theme, then open a few full transcripts and check the quote is real and in context.
6. **Decide, then stop or tighten.** Write a one-page readout: what you heard, what you will do, and what you will not. Stop when new conversations stop adding themes, or run a tighter follow-up.

## What an AI agent can and cannot do

An AI agent such as Claude or ChatGPT can help with planning and analysis. On its own, it can only work with what you paste in. Connected to an interview tool through MCP, it can draft a study and read transcripts. The interviews themselves are run by the connected tool, and you still approve publishing and send the invite.

| The agent can | You still do |
|---|---|
| Turn a vague worry into one research question | Choose the decision that matters |
| Draft interview or survey questions | Remove leading or hypothetical questions |
| Create a draft study in a connected tool | Approve publishing, and invite your own customers |
| Read answers, group themes, and pull quotes | Check the quotes against the transcripts |
| Draft the readout and the next study | Decide what to do |

A starting prompt, once Frank is connected:

> Use Frank to create a draft study, and do not publish it. I want feedback from customers who signed up in the last 30 days so I can decide what to fix in onboarding. Keep the interview under 10 minutes. Write 6 to 8 open questions about recent events. Wait for me to review the guide. I will share the interviewer link myself. Frank does not recruit participants.

Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. Setup: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback). Server URL: `https://api.hifrank.ai/mcp` (OAuth, no API key). In Frank, a study created through MCP stays a draft until you approve publishing.

## How much feedback is enough

For interviews, continue until new conversations stop adding themes. In one well-known study, thematic saturation occurred within the first 12 interviews, with the basic elements of overarching themes present as early as 6, in a relatively homogeneous group. Twelve is often not enough if the group is mixed, the data quality is poor, or the question is broad ([Guest, Bunce & Johnson, 2006](https://www.sfu.ca/~palys/GuestEtAl-2006-HowManyInterviewsAreEnough.pdf)).

Interview counts are not a measure of how many customers feel a certain way. Use a survey or product data to size a theme you found in interviews.

## When Frank is a fit

Frank AI Researcher runs AI-moderated voice interviews with your own customers. Participants join from a [shareable interviewer link](https://www.hifrank.ai/docs/navigating-your-ai-interviewer-dashboard?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback) or a [website widget](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback), so they do not have to book a call. Every interview gets a transcript, and answers are grouped into themes you can check against the original conversation. MCP is included on every plan, including Free. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth.

As of 24 November 2026, the Free plan includes 225 signup credits plus 60 voice minutes a month. Starter is $49 a month when billed yearly. See [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback).

Frank fits when you want consistent voice conversations with customers you can already reach. It is a weaker fit if you need a recruited panel, a live screen-share, or a relationship conversation you should hold yourself. Frank does not recruit participants.

**[Connect Frank with MCP](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback)** · [Product site](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback)

## FAQ

### How do I get customer feedback if I cannot schedule calls?

Share a voice interview link or a website widget, or use a short survey. People can answer when they have time. See [How to get user feedback without scheduling calls](user-feedback-without-scheduling-calls.md).

### Can Claude or ChatGPT collect customer feedback for me?

Not on their own. They can help you plan questions and summarize answers you give them. Connected to an interview tool such as Frank through MCP, they can draft a study and read transcripts. You still invite the participants and approve publishing.

### Does Frank find customers for me?

No. Frank does not recruit participants. You invite people from your own product or email list.

### How do I get customer feedback for a SaaS product?

Start with a recent event: a signup who never activated, a trial that expired, or a cancellation. Ask about that episode, then use a survey or billing data to size the themes. The steps on this page are the same; the invite list is your own users.

### Will an AI agent publish a study without asking me?

In Frank, new research created through MCP is a draft and is not published to participants until you approve it.

## Related

- [How to run customer interviews](how-to-run-customer-interviews.md)
- [How to get user feedback without scheduling calls](user-feedback-without-scheduling-calls.md)
- [AI customer interviews vs surveys](ai-customer-interviews-vs-surveys.md)
- [Customer interview questions template](customer-interview-questions-template.md)
- [How many customer interviews do you need](https://www.hifrank.ai/blog/how-many-customer-interviews-do-you-need?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback)
- [Pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback) · [MCP](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-get-customer-feedback)
