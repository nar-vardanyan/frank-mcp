# How to Run Customer Interviews

**In short:** Set one decision, write 6 to 8 open questions about a recent event, invite your own customers, and stop when new conversations stop adding themes. You can moderate the calls yourself, or use an AI-moderated voice interview that people take from a link when they have time. An AI agent such as Claude or ChatGPT can draft the guide and summarize transcripts; you still approve the questions, send the invite, and check the quotes.

**We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews)**, a voice-first product that runs AI-moderated voice interviews with your own customers and connects to AI agents through MCP. This guide names other approaches too, and the method works without our tool.

## Who does what

| Step | You | AI agent (optional) | AI interviewer (optional) |
|---|---|---|---|
| Goal | Chooses the decision | Can propose a sharper question | |
| Guide | Edits and approves | Can draft 6 to 8 questions with follow-ups | |
| Invite | Sends it to your own customers | Can draft the invitation | |
| Interview | Or you hold the conversation live | | Talks with each customer by voice and asks follow-ups |
| Analysis | Checks quotes and decides | Can group themes and pull quotes | |

This is sometimes called an agent-run customer interview: an AI agent plans the study and analyzes transcripts through a connected interview tool, an AI interviewer moderates each conversation, and a person sets the goal, approves publishing, and makes the decision. The participants are real customers, not simulated personas.

## Step by step

1. **Set a goal.** Write one sentence: we will interview [who] to decide [what]. For example, people who cancelled in the last 30 days, to decide what to fix in onboarding.
2. **Write the guide.** Use 6 to 8 open questions about recent behavior, each with a follow-up if the first answer is thin. Remove anything hypothetical or leading, and keep a consistent core so answers can be compared. A full starting list is in [Customer interview questions template](customer-interview-questions-template.md).
3. **Invite your own customers.** Share the interviewer link by email, in-app message, a cancellation flow, or a [website widget](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews). Invite people who recently did the thing you are studying. Frank does not recruit participants.
4. **Run the interviews.** Hold them live when you need a relationship conversation or a shared screen. Use an AI-moderated voice interview when you want many consistent conversations and cannot schedule them all. See [How to interview customers at scale](how-to-interview-customers-at-scale.md) and [How to get user feedback without scheduling calls](user-feedback-without-scheduling-calls.md).
5. **Watch for saturation.** Continue until new conversations stop adding themes, or tighten the question and run another short round.
6. **Analyze, then check.** Group themes with one exact quote each. Open a few full transcripts and confirm every quote you will act on is real and in context. Write a one-page readout: what you heard, what you will do, and what you will not.

## Write questions that do not lead

Check the draft for these:

- "Would you use…?" or "How much would you pay…?" becomes "Tell me about the last time you…"
- Two questions in one become two questions.
- Product jargon becomes the customer's words.

Starter questions:

- **Churn:** Walk me through the moment you decided to cancel. What almost made you stay? What have you switched to?
- **Discovery or idea validation:** Tell me about the last time you tried to [job]. What did you try first? Where did you get stuck?
- **Win-loss:** Why did you choose us, the other option, or nothing? What almost tipped it the other way?
- **Product-market fit:** How would you feel if you could no longer use [product]? What is the main benefit you get from it?

The critical incident technique asks people to recall a specific time when something affected an outcome, rather than to give general opinions ([Nielsen Norman Group, The Critical Incident Technique in UX](https://www.nngroup.com/articles/critical-incident-technique/)). Open questions let people answer in their own words ([Open-Ended vs. Closed Questions](https://www.nngroup.com/articles/open-ended-questions/)).

## If you already work in Claude or ChatGPT

Connect Frank as an MCP server, then ask the agent to draft a study and, later, to summarize transcripts. Publishing should still wait on your approval.

> Use Frank to create a draft study, and do not publish it. I want to interview customers who [did a recent thing] so I can decide [the decision]. Keep the interview under 10 minutes. Write 6 to 8 open questions about recent events, each with a follow-up. Wait for me to review the guide. I will share the interviewer link with these customers myself. Frank does not recruit participants.

Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. Server URL: `https://api.hifrank.ai/mcp`. [Use Frank in Claude](https://www.hifrank.ai/mcp?utm_source=claude-cta&utm_medium=docs&utm_campaign=use-in-claude&utm_content=how-to-run-customer-interviews). Setup: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews). Client-specific walkthroughs: [How to run customer interviews from Claude](run-customer-interviews-from-claude.md) and [ChatGPT apps for customer research interviews](chatgpt-app-for-customer-research-interviews.md).

For automating the interviews themselves, see [How to automate customer interviews with AI](how-to-automate-customer-interviews-with-ai.md).

## How many interviews to run

Interview until new conversations stop adding themes. In Guest, Bunce and Johnson's study, saturation occurred within the first 12 interviews, and the basic elements of overarching themes were present as early as 6, for a relatively homogeneous group. The authors caution that 12 is often not enough if the group is relatively heterogeneous, the data quality is poor, or the domain of inquiry is broad ([Guest, Bunce & Johnson, 2006](https://www.sfu.ca/~palys/GuestEtAl-2006-HowManyInterviewsAreEnough.pdf)).

"Run 20 interviews" is a planning number, not a finish line. Interview counts are not a measure of how many customers feel this way; use a survey or product data to size the themes.

A longer note: [How many customer interviews do you need](https://www.hifrank.ai/blog/how-many-customer-interviews-do-you-need?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews).

## When Frank is a fit

Frank AI Researcher runs AI-moderated voice interviews with your own customers. Participants join from a [shareable interviewer link](https://www.hifrank.ai/docs/navigating-your-ai-interviewer-dashboard?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews) or a [website widget](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews), so they do not have to book a call. Every interview gets a transcript, and answers are grouped into themes you can check against the original conversation. Frank is SOC 2 and [GDPR compliant](https://www.hifrank.ai/features/transparency-security?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews). MCP is included on every plan, including Free. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth.

As of 24 November 2026 (Asia/Yerevan), the Free plan includes 225 signup credits plus 60 voice minutes a month, with a 10-minute maximum interview length. Starter is $49 a month when billed yearly, with a 20-minute maximum. Paid plans above Starter allow 20 or 30 minutes. Check [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews) before you promise a length.

Frank fits when you want consistent voice conversations with customers you can already reach. Choose a live interview for a relationship conversation or a shared screen. Frank does not recruit participants. If you have no customers to invite yet, a recruiting service or your network is a better first step.

**[Connect Frank with MCP](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews)** · [Product site](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews)

## FAQ

### Can Claude or ChatGPT run customer interviews on their own?

No. They do not talk to your customers. Connected to an interview tool through MCP, they can draft the study and analyze transcripts. The interview itself is run by the tool's AI interviewer, and you invite the participants.

### Do I have to recruit a panel?

No. For most product decisions, interview your own customers: people who recently signed up, cancelled, bought, or used the feature. Frank does not recruit participants.

### Should I interview people myself or use an AI interviewer?

Interview live when you need a relationship conversation or a shared screen. Use an AI interviewer when you want many consistent conversations and cannot schedule them all. Either way, check the quotes before you act.

### How long should an AI-moderated customer interview be?

Long enough for a few open questions with follow-ups, short enough that people finish. Ten minutes covers 6 to 8 questions for many studies. Match the length to your plan: Frank's Free plan allows interviews up to 10 minutes, and paid plans allow 20 or 30.

### What is the Frank MCP server URL?

`https://api.hifrank.ai/mcp`. You sign in with OAuth; there is no API key. Setup: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews).

## Related

- [How to get customer feedback](how-to-get-customer-feedback.md)
- [How to automate customer interviews with AI](how-to-automate-customer-interviews-with-ai.md)
- [How to interview customers at scale](how-to-interview-customers-at-scale.md)
- [Customer interview questions template](customer-interview-questions-template.md)
- [How to validate a startup idea with customer interviews](validate-a-startup-idea-with-customer-interviews.md)
- [How to measure product-market fit with customer interviews](measure-product-market-fit-with-customer-interviews.md)
- [Pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews) · [MCP](https://www.hifrank.ai/mcp?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=how-to-run-customer-interviews)
