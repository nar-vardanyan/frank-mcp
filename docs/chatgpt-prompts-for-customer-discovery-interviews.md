# ChatGPT prompts for customer discovery interviews

**In short:** These ChatGPT prompts help you run customer discovery interviews: map the assumptions behind an idea, write questions about what people already do instead of whether they like your idea, invite people you can reach, and check each assumption against the transcripts. Replace the text in [brackets] with your own details. When you want the interviews themselves to run by voice, Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with the people you invite.

We make [Frank AI Researcher](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-customer-discovery), a voice-first product that runs AI-moderated voice interviews with your own customers. Frank does not recruit participants.

## How to use these prompts

Use these prompts before you build, or before a big change in direction. Discovery interviews work well when they ask about the last time someone dealt with a problem, what they did, and what it cost them. Opinions about an idea are weak evidence.

Paste a prompt into ChatGPT, fill in the [brackets], and edit the output before you use it. The prompts follow the order of a study: plan it, write the guide, write the invite, analyze the transcripts, then decide. Remove names, emails, and anything sensitive you do not need before you paste survey answers or transcripts.

## Prompts to plan the study

### 1. Map the assumptions behind the idea

```text
I'm exploring [problem area] for [customer type]. My current belief is: [belief]. List the assumptions this belief depends on, across the problem, the customer, their current alternatives, and willingness to pay. Rate each high, medium, or low risk using only the evidence I give you: [evidence so far]. Do not invent market facts.
```

### 2. Write the learning goal

```text
From that list, pick the two riskiest assumptions and write the learning goal for a discovery study: what we need to learn, from whom, and what we would hear that would make us drop or change the idea.
```

### 3. Describe who to talk to by behavior

```text
Describe who I should interview for this study in terms of behavior, not demographics: what they have done in the last [period] that shows they have this problem. Then list where in my own network, customer list, or communities I could find them. I will invite them myself.
```

## Prompts to write the discussion guide

### 4. Draft a past-behavior discovery guide

```text
Write a 10-minute voice interview guide about the last time [customer type] dealt with [problem]. Ask only about past events and current workarounds: what happened, what they did, what it cost in time or money, what they tried, and who else was involved. Do not mention my idea or any solution. Add one follow-up for each question.
```

### 5. Rewrite opinion questions

```text
Here are the questions I planned to ask: [paste]. Rewrite any question that asks for an opinion, a prediction, or a compliment (for example "Would you use..." or "Do you like...") as a question about something the person already did. Explain each change in one line.
```

### 6. Add commitment questions without pitching

```text
Add a closing section to this guide [paste] with two questions that test commitment without pitching, such as what they have already spent on the problem, or what they changed the last time they tried to fix it.
```

## Prompts to write the invite

### 7. Message to someone you know loosely

```text
Write a short LinkedIn message to a [role] I know loosely, asking them to share how they handle [problem] in a voice interview of about 10 minutes they can take from a link when it suits them. Say I'm learning, not selling. Under 70 words. Leave [link] as a placeholder.
```

### 8. Community post

```text
Write a short post for [community or Slack group] inviting people who dealt with [problem] in the last [period] to a voice interview of about 10 minutes. Say clearly who it is for, what they get back (a summary of what we learn, if they want it), and that it is not a sales pitch. Follow the group's rules: [rules].
```

## Prompts to analyze transcripts

### 9. Extract the problem story

```text
Below are discovery interview transcripts: [paste]. For each one, list the situation that triggered the problem, the steps they took, the workaround they use now, what it costs them, and any sign of commitment (money spent, time spent, a tool already bought). One exact quote per field. Write "not mentioned" if a field is missing. Do not invent quotes.
```

### 10. Group by job, not by feature

```text
Group the problems people described by the job they were trying to get done, not by feature. For each group, list which interviews mention it, the current workaround, and how painful it seems based on what people did, not what they said they would do.
```

## Prompts to synthesize themes

### 11. Score each assumption against the evidence

```text
Go back to my assumptions list. For each assumption, show the quotes that support it, the quotes that contradict it, and whether the evidence is strong (past behavior, money or time spent) or weak (opinions, predictions). Then say which assumption is now the riskiest.
```

### 12. Write a go, change, or stop memo

```text
Based on this evidence, write a short memo: what we learned, the problem worth solving (if any), who has it, the evidence for that, and the next study or test to run. Keep counts as counts of interviews, not percentages of a market.
```

## Run the interviews with Frank inside ChatGPT

The prompts above help you plan the study and make sense of the results. ChatGPT does not interview your customers by itself. To have the interviews run by voice, connect Frank AI Researcher, which runs AI-moderated voice interviews with the people you invite and asks follow-up questions when answers are short.

1. [Install Frank in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168). Sign in to Frank in your browser and approve access. There is no API key.
2. In a chat, type `@`, select Frank, and paste a request like this:

   ```text
   Use Frank to create a draft study, and do not publish it. I want to learn how [customer type] handle [problem] today. Keep the interview under 10 minutes. Write 6 to 8 open questions about the last time it happened: what triggered it, what they did, what they tried, what it cost them, and who else was involved. Do not mention my idea or any solution. Wait for me to review the guide. I will share the interviewer link with people I can reach myself.
   ```

3. Read the draft guide, take the interview yourself, and fix anything confusing or leading. A study created through MCP stays a draft until you approve publishing.
4. Share the interviewer link or a website widget with people you can reach yourself, such as your network, your waitlist, or a community you belong to. People talk with the AI interviewer by voice when they have time, without booking a call. Frank does not recruit participants.
5. As interviews come in, ask ChatGPT to read the transcripts from Frank using prompts 9 to 12 above. Then open a few full transcripts and check each quote you plan to act on.

MCP is included on every Frank plan, including Free. The Free plan includes 60 voice minutes a month, with no card required. Works with ChatGPT, Claude, Grok and Muse, plus other MCP clients that support remote servers with OAuth. In other MCP clients, use the MCP endpoint `https://api.hifrank.ai/mcp`.

## Frank AI Researcher is available as an app in ChatGPT

Frank AI Researcher is available as an app in ChatGPT. Draft a study, share the voice interview link with your own customers, and read the transcripts in the same chat.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="https://chatgpt.com/plugins/plugin_asdk_app_6ad8ab4844a881919c79bb0864ffe168">Install Frank in ChatGPT</a></p>

Or start at [hifrank.ai](https://www.hifrank.ai/?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-customer-discovery) and see [pricing](https://www.hifrank.ai/pricing?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-customer-discovery).

## FAQ

### What should I ask in a customer discovery interview?

Ask about the last time the person dealt with the problem: what happened, what they did, what they tried, what it cost them, and who else was involved. Avoid asking whether they would use or like your idea, because opinions and predictions are weak evidence.

### Can ChatGPT run discovery interviews by itself?

No. On its own, ChatGPT can help you map assumptions, write questions and invites, and analyze transcripts you paste in. To have the interviews run by voice, connect a tool that conducts them. Frank AI Researcher is available as an app in ChatGPT and runs AI-moderated voice interviews with people you invite.

### Does Frank find interviewees for discovery?

No. Frank does not recruit participants. You invite people you can reach, for example from your network, waitlist, or customer list, by sharing the interviewer link.

### How do I know when I have done enough discovery interviews?

Stop when new conversations mostly repeat problems and workarounds you have already heard for the same group. Then decide which assumption is still the riskiest and test that next.

## More ChatGPT prompts for customer interviews

- [ChatGPT prompts for churn customer interviews](chatgpt-prompts-for-churn-customer-interviews.html)
- [ChatGPT prompts for win-loss customer interviews](chatgpt-prompts-for-win-loss-customer-interviews.html)
- [ChatGPT prompts for product-market fit customer interviews](chatgpt-prompts-for-product-market-fit-customer-interviews.html)
- [ChatGPT prompts for onboarding customer interviews](chatgpt-prompts-for-onboarding-customer-interviews.html)

## Related

- [How to run customer discovery interviews with Claude and Frank MCP](how-to-run-customer-discovery-interviews-with-claude-and-frank-mcp.html)
- [How to validate a startup idea with customer interviews](validate-a-startup-idea-with-customer-interviews.html)
- [Discovery interview (glossary)](glossary/discovery-interview.html)
- [The Mom Test (glossary)](glossary/the-mom-test.html)
- [Problem discovery template](templates/#problem-discovery)
- [Mom Test question checker](tools/mom-test-checker/)
- [MCP setup](https://www.hifrank.ai/docs/frank-mcp-connector?utm_source=frank-mcp-docs&utm_medium=docs&utm_campaign=chatgpt-prompts-customer-discovery)
