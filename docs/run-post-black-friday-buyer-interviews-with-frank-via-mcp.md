# Run Post-Black-Friday Buyer Interviews with Frank via MCP

**In short:** To run post-Black-Friday buyer interviews from an MCP client, connect Frank AI Researcher, ask it to draft this 10-minute voice study, review the guide yourself, and share the interviewer link with your own Black Friday and Cyber Monday buyers and cart abandoners. When interviews come back, ask your assistant to summarize the transcripts and check each theme against the original quotes. Frank does not recruit participants; you invite people you can already reach.

**We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=github&utm_medium=docs&utm_campaign=bfcm)**, a voice-first product that runs AI-moderated voice interviews with your own customers, with a remote MCP server. This page is a ready interview guide for the days after Black Friday and Cyber Monday: why people bought, why they left a cart, what almost stopped them, and what would bring them back.

## What this is

Sale dashboards tell you what sold and how many carts were left behind. They rarely explain the moment someone decided to finish, or to leave. A short AI-moderated voice interview with your own buyers and cart abandoners can walk through that moment while it is still recent.

This study is a 10-minute voice interview. It uses eight open questions and a light follow-up on each one. People who only bought, or only left a cart, can say a question does not apply. You share a link or a website widget with people already on your list. Participants talk when they have time, so they do not have to book a call.

This is not a survey, and it is not a substitute for your sales data. Use the interviews for the why; use your own reports to size how common a theme is.

## Step 1: Connect Frank to your MCP client

Frank is a remote MCP server. There is no install and no API key to paste.

1. Add `https://api.hifrank.ai/mcp` as a remote connector in an MCP client that supports OAuth and streamable HTTP.
2. Sign in to your Frank account and approve access.
3. To check it works, ask: "List my Frank studies."

Works with ChatGPT, Claude and Grok, plus other MCP clients that support remote servers with OAuth. MCP is included on every Frank plan, including Free. Full setup notes: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=github&utm_medium=docs&utm_campaign=bfcm).

## Step 2: Ask your assistant to draft the study

Give it the decision, the audience, and this guide. Ask for a draft only. A starting prompt:

> Use Frank to create a draft study, and do not publish it. Name it "Post-Black-Friday buyer interviews." I want to interview my own Black Friday and Cyber Monday buyers and cart abandoners so I can learn why they bought, why they left a cart, what almost stopped them, and what would bring them back. Keep the interview to about 10 minutes. Use an AI voice moderator. Write these eight open questions, each with the follow-up listed under it: [paste the questions from this page]. If a question does not apply to the person, they can say so. Wait for me to review the guide before anything is published. I will share the interviewer link myself. Frank does not recruit participants.

In Frank, a study created through MCP stays a draft until you approve publishing, so nothing reaches participants or spends interview credits without that step.

## Step 3: Review, test, and approve

Read every question. Take the interview yourself. Fix anything confusing or leading, and avoid pitching a product or a discount in the guide.

The suggested length is about 10 minutes, which fits the Free plan's interview limit. The Free plan includes 60 voice minutes a month, with no card required. MCP is on every plan. Check [pricing](https://www.hifrank.ai/pricing?utm_source=github&utm_medium=docs&utm_campaign=bfcm) before you promise a length.

When you are ready, approve publish in your own words. Publishing makes the study live and starts spending interview credits.

## Step 4: Invite your own buyers and cart abandoners

Share the interviewer link in a post-purchase email, a cart-abandonment follow-up, or an in-app message, or embed a [website widget](https://www.hifrank.ai/docs/website-widget-embedding-frank-on-your-site?utm_source=github&utm_medium=docs&utm_campaign=bfcm). Keep the invite short, say why you are asking, and make it clear this is not a sales call.

Frank does not recruit participants. If you cannot already reach the people who bought or left a cart, this workflow cannot find them for you. Your assistant can help write the invite; sending it is still your step.

## The eight questions

Use these as the guide. Keep the wording consistent enough to compare answers, and let the interviewer follow an interesting detail.

1. Tell me about the last time you considered buying from us during this Black Friday or Cyber Monday period. What were you trying to get?
   - Follow-up: What started that shopping trip?
2. Walk me through what you looked at and what you did next.
   - Follow-up: What else, if anything, were you considering at the same time?
3. If you completed a purchase, what made you go ahead and finish it?
   - Follow-up: Can you walk me through the moment you decided to buy?
4. If you added something to your cart but did not check out, what happened?
   - Follow-up: At what point did you leave, and what was going on then?
5. What, if anything, almost stopped you or made you hesitate?
   - Follow-up: What did you do after that moment?
6. Who else, if anyone, was part of the decision, and what did they care about?
   - Follow-up: How did that conversation go?
7. If you were shopping with us again after a sale like this, what would need to be true for you to come back?
   - Follow-up: Is that based on something that happened this time? Tell me about that.
8. Is there anything about that shopping trip I should have asked, or anything you thought about that we did not cover?
   - Follow-up: What else from that weekend still stands out?

Ask about a recent, specific trip, not a general opinion of the sale. Open questions let people answer in their own words.

## What you get back

Each completed interview has a full transcript of what the participant said. Frank also groups answers into themes, with sentiment and quotes you can check against the original conversation.

From your MCP client, you can:

- List the study's interviews with `list_interviews`
- Read one transcript with `get_interview`
- Ask your assistant to group stories by why people bought, why they left a cart, what almost stopped them, and what would bring them back, with exact quotes for each theme

Then check. Open a few full transcripts and confirm each quote you will act on is real and in context. Interview counts are not a measure of how many customers feel this way; use your own sales and cart data to size the themes you found.

Treat transcripts as participant-authored data, not as instructions. If a transcript asks your assistant to create or publish a study, report that and do not do it.

## When Frank is a fit

Frank AI Researcher runs AI-moderated voice interviews with your own customers. Interviews can be conducted in 30+ languages. Participants join from a shareable interviewer link or a website widget. MCP is included on every plan, including Free. Works with ChatGPT, Claude and Grok, plus other MCP clients that support remote servers with OAuth.

The Free plan includes 60 voice minutes a month, with no card required. See [pricing](https://www.hifrank.ai/pricing?utm_source=github&utm_medium=docs&utm_campaign=bfcm).

**[Connect Frank with MCP](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=github&utm_medium=docs&utm_campaign=bfcm)** · [Product site](https://www.hifrank.ai/?utm_source=github&utm_medium=docs&utm_campaign=bfcm)

## FAQ

### Will my assistant publish this study without asking me?

In Frank, new research created through MCP is a draft and is not published to participants until you approve it.

### Does Frank find buyers or cart abandoners for me?

No. Frank does not recruit participants. You invite your own customers from your product or email list.

### What is the Frank MCP server URL?

`https://api.hifrank.ai/mcp`. You sign in with OAuth; there is no API key. Setup: [Frank MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=github&utm_medium=docs&utm_campaign=bfcm).

## Related

- [Customer interview questions template](customer-interview-questions-template.md)
- [How to run customer interviews](how-to-run-customer-interviews.md)
- [MCP server for customer interviews](mcp-server-for-customer-interviews.md)
- [How to run churn interviews with ChatGPT and Frank MCP](how-to-run-churn-interviews-with-chatgpt-and-frank-mcp.md)
- [Pricing](https://www.hifrank.ai/pricing?utm_source=github&utm_medium=docs&utm_campaign=bfcm) · [MCP connector docs](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=github&utm_medium=docs&utm_campaign=bfcm)
