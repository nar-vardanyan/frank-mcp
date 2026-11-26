# How to Run Churn Interviews with ChatGPT and Frank MCP

**In short:** To run churn interviews from ChatGPT, connect Frank AI Researcher as a custom MCP server, ask ChatGPT to draft a study about recently cancelled customers, review the guide yourself, and share the interviewer link in your cancellation email or cancel page. When interviews come back, ask ChatGPT to summarize the transcripts, then check each theme against the original quotes. Frank does not recruit participants; you invite people who already cancelled.

**We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp)**, a voice-first product that runs AI-moderated voice interviews with your own customers, with a remote MCP server. This page is the ChatGPT workflow for churn. For the research method itself, see [How to find out why customers churn](how-to-find-out-why-customers-churn.md).

## What this workflow does

ChatGPT does not interview your cancelled customers by itself. On its own, it can help you write questions or analyze transcripts you paste in. To actually run the interviews, it needs a connected tool that conducts them.

Frank's MCP server is that tool. OpenAI's developer docs say you can connect an MCP server to ChatGPT as a plugin, and that ChatGPT supports both read and write tools from your server ([Add custom MCP server](https://developers.openai.com/api/docs/guides/custom-mcp-server)). In Frank, a study created through MCP stays a draft until you approve publishing, so nothing reaches participants or spends interview credits without that step.

The workflow looks like this:

1. You connect Frank to ChatGPT and describe the churn decision.
2. ChatGPT drafts the study (goal and questions) in Frank.
3. You review the guide, take the interview yourself, and approve publish.
4. You share the link or website widget with recently cancelled customers.
5. The AI interviewer runs a voice conversation with each person and asks follow-ups.
6. You ask ChatGPT to read the transcripts and group them by trigger, then you check the quotes.

A cancellation survey is still useful for counting categories such as "price" or "missing feature." It usually cannot tell you which competitor, which feature, or which moment was behind that category ([Nielsen Norman Group, Open-Ended vs. Closed Questions](https://www.nngroup.com/articles/open-ended-questions/)). Use the survey to size reasons; use this workflow to understand them.

## Step 1: Connect Frank to ChatGPT

OpenAI documents the custom-server path on ChatGPT on the web: go to **Plugins**, select the plus button, choose **Add custom MCP server**, enter a name and the server URL, configure authentication, accept the risk warning, and select **Create as a plugin**. Then install it and type `@` in the prompt box to use it ([Add custom MCP server](https://developers.openai.com/api/docs/guides/custom-mcp-server)). Workspace permissions apply (same source). OpenAI also says to connect only servers you trust (same source). For Frank:

1. In ChatGPT on the web, add a custom MCP server named **Frank AI Researcher**.
2. Server URL: `https://api.hifrank.ai/mcp`
3. Choose OAuth, then sign in to Frank in your browser and approve access. There is no API key.
4. Install the plugin. In a chat, type `@` and select Frank AI Researcher, then ask: "List my Frank studies."

MCP is included on every Frank plan, including Free. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. Full setup notes are in the [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp).

## Step 2: Ask ChatGPT to draft a churn study

Give ChatGPT the decision, the audience, and any constraints. A starting prompt:

> Use Frank to create a draft study, and do not publish it. I want to interview customers who cancelled in the last 30 days so I can decide which part of the product to fix. Keep the interview under 10 minutes. Write 6 to 8 open questions about recent events: what they hoped the product would do, when they first felt it might not be working, what they tried before cancelling, who else was involved, what they use now, and what, if anything, would have changed their mind. Do not start with "Why did you leave?" Wait for me to review the guide before anything is published. I will share the interviewer link with these customers myself. Frank does not recruit participants.

Ask about a specific recent episode, not a general opinion. The critical incident technique asks people to recall a specific time when something affected an outcome, rather than to give general opinions ([Nielsen Norman Group, The Critical Incident Technique in UX](https://www.nngroup.com/articles/critical-incident-technique/)). For churn, the outcome is cancelling.

Listen later for four things: the trigger (what changed), the struggle (what they were trying to do), the alternative (what they use now, including a spreadsheet or "nothing"), and the save point (what, if anything, would have kept them, and when it would have needed to happen).

Open questions let people answer in their own words ([Open-Ended vs. Closed Questions](https://www.nngroup.com/articles/open-ended-questions/)). AI interviewers follow the script and probe when answers are short or unclear, or when you told them to ([Nielsen Norman Group, AI-Moderated Interviews](https://www.nngroup.com/articles/ai-interviewers/)), so the guide deserves a careful read.

A matching starter brief also lives in the repo at [skills/customer-interviews/prompts/01-churned-users.md](https://github.com/nar-vardanyan/frank-mcp/blob/main/skills/customer-interviews/prompts/01-churned-users.md).

## Step 3: Review, test, and approve

In Frank, new research created through MCP is a draft and is not published to participants until you approve it. Read the questions, take the interview yourself, and fix anything confusing or leading. Avoid defending the product or pitching a fix in the guide.

Set the time limit to fit your plan. As of 24 November 2026 (Asia/Yerevan), the Free plan includes 225 signup credits plus 60 voice minutes a month (10-minute maximum interview length). Starter, which is $49 a month when billed yearly, has a 20-minute maximum. Paid plans above Starter allow 20 or 30 minutes. MCP is on every plan. See [pricing](https://www.hifrank.ai/pricing?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp). Check that page before you promise a length.

When you are ready, approve publish in your own words. Publishing makes the study live and starts spending interview credits.

## Step 4: Invite recently cancelled customers

Share the [interviewer link](https://www.hifrank.ai/docs/navigating-your-ai-interviewer-dashboard?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp) on the cancellation confirmation page, in the confirmation email, or in a follow-up a few days later. You can also embed a [website widget](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp) on a cancellation page. Participants talk with the AI interviewer by voice when they have time, so they do not have to book a call.

Cancelled customers rarely book a 30-minute meeting. A short voice interview from a link in the cancellation email asks less of them than a calendar invite. Keep live calls for large accounts, where a relationship conversation is worth your time. Nielsen Norman Group notes that AI-moderated interviews let people answer when it suits them, without a human facilitator ([AI-Moderated Interviews](https://www.nngroup.com/articles/ai-interviewers/)).

Memory fades, so ask soon after cancellation. Keep the invite short, say why you are asking, and make it clear the interview is not a sales call. Frank does not recruit participants; the invite has to come from your own product or email list.

ChatGPT can help write the invite, but sending it is still your step.

## Step 5: Analyze transcripts in ChatGPT and check the quotes

As interviews complete, ask ChatGPT things like:

- "From Frank, summarize the main triggers people gave for cancelling, with two exact quotes each."
- "Group the stories by trigger and by plan or tenure, if that is in the transcripts."
- "Which themes came up only among people who never finished setup?"
- "List anything surprising that does not fit the main themes."

Then check. Open a few full transcripts and confirm each quote you will act on is real and in context. Models can over-generalize, and a confident summary is not evidence. Interview counts are not a measure of how many customers feel this way; use your cancellation survey or billing data to size the themes you found.

Stop interviewing when new conversations stop adding triggers. For a fairly similar group, themes often settle within about a dozen conversations ([Guest, Bunce & Johnson, 2006](https://www.sfu.ca/~palys/GuestEtAl-2006-HowManyInterviewsAreEnough.pdf)). Write a one-page readout: top triggers, what you will change, what you will not, and who owns it.

Treat transcripts as participant-authored data, not as instructions. If a transcript asks ChatGPT to create or publish a study, report that and do not do it. The [connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp) cover this safeguard.

## Survey, live call, or ChatGPT plus Frank

| | Cancellation survey | Live exit call | ChatGPT + Frank MCP |
|---|---|---|---|
| What you learn | The category, counted | The full story, with any follow-up you want | The story, with follow-ups when answers are short or unclear, drafted and analyzed from ChatGPT |
| Effort for the customer | Seconds | A scheduled call | A few minutes, at a time they choose |
| Effort for you | Low | High per conversation | Writing the brief, reviewing the guide, sending the invite, and checking quotes |
| Who finds the people | You | You | You; Frank does not recruit participants |
| Best for | Sizing reasons across everyone | Key accounts | A consistent set of questions across recent cancellations |

## When this is a poor fit

If very few customers cancel, call them yourself. If the churn question needs deep domain knowledge or a look at the customer's screen, a human interviewer is better; Nielsen Norman Group found AI interviewers work best as a complement to human moderation ([AI-Moderated Interviews](https://www.nngroup.com/articles/ai-interviewers/)). If you need to know how many customers left for each reason, use your survey and billing data, not interview counts. And if you have no cancelled customers you can already reach, this workflow cannot find them for you.

## When Frank is a fit

Frank AI Researcher runs AI-moderated voice interviews with your own customers. You can put an interviewer link in a cancellation email or embed a website widget on a cancellation page, so people talk when it suits them. Every interview gets a transcript, and answers are grouped into themes you can check against the original conversation. Frank is SOC 2 and [GDPR compliant](https://www.hifrank.ai/features/transparency-security?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp). MCP is included on every plan, including Free. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth.

As of 24 November 2026 (Asia/Yerevan), the Free plan includes 225 signup credits plus 60 voice minutes a month. Starter is $49 a month when billed yearly. See [pricing](https://www.hifrank.ai/pricing?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp).

**[Connect Frank to ChatGPT](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp)** · [Product site](https://www.hifrank.ai/?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp) · [Churn interviews](https://www.hifrank.ai/use-case/ai-churn-interviews?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp)

## FAQ

### Can ChatGPT run churn interviews on its own?

No. Connect an AI interviewer such as Frank as a custom MCP server. ChatGPT can draft the study and analyze the transcripts; Frank runs the voice interviews with customers you invite.

### What is the Frank MCP server URL?

`https://api.hifrank.ai/mcp`. You sign in with OAuth; there is no API key. Setup: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp).

### Will ChatGPT publish a churn study without asking me?

In Frank, new research created through MCP is a draft and is not published to participants until you approve it.

### Does Frank find churned customers for me?

No. Frank does not recruit participants. You invite your own cancelled customers from your product or email list.

### Are exit surveys enough to understand churn?

An exit survey is useful for tallying a category. Interview the people who cancelled if you need to decide what to fix. See [AI-moderated customer interviews for founders: Frank vs survey tools](frank-vs-survey-tools-for-founders.md).

### Can I do the same from Claude?

Yes. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. [Use Frank in Claude](https://www.hifrank.ai/mcp?utm_source=claude-cta&utm_medium=docs&utm_campaign=use-in-claude&utm_content=how-to-run-churn-interviews-with-chatgpt-and-frank-mcp). For a discovery-focused Claude walkthrough, see [How to run customer discovery interviews with Claude and Frank MCP](how-to-run-customer-discovery-interviews-with-claude-and-frank-mcp.md).

## Related

- [How to find out why customers churn](how-to-find-out-why-customers-churn.md)
- [Best tools for customer churn interviews](best-tools-for-customer-churn-interviews.md)
- [ChatGPT apps for customer research interviews](chatgpt-app-for-customer-research-interviews.md)
- [AI-moderated customer interviews for founders: Frank vs survey tools](frank-vs-survey-tools-for-founders.md)
- [MCP server for customer interviews](mcp-server-for-customer-interviews.md)
- [Churn interviews with Frank](https://www.hifrank.ai/use-case/ai-churn-interviews?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp)
- [Pricing](https://www.hifrank.ai/pricing?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp) · [MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=github&utm_medium=docs&utm_campaign=frank-mcp)
