# Discovery interview

A discovery interview is a conversation meant to understand a problem, a workflow, or a job someone already has, before you shape a product. It focuses on recent, real events rather than reactions to a solution you have already decided to build. The output is a picture of the problem and current workarounds, not a yes on your idea.

Updated November 27, 2026.

## How it's used

Use discovery interviews when you are still forming the problem, entering a new segment, or testing whether a job is painful enough to warrant a product change. Invite people you can already reach who recently did the job or felt the problem. Frank AI Researcher does not recruit participants.

Keep the [interview guide](interview-guide.html) open enough to follow a story, and tight enough that you can compare interviews. [The Mom Test](the-mom-test.html) is a useful check on the wording.

Frank can run discovery interviews as AI-moderated voice interviews. You still set the goal, write or generate the guide, and invite the people.

## Approaches compared

| Approach | Cost | Speed | Candor and depth | When to use |
| --- | --- | --- | --- | --- |
| Live interviews | High time cost to schedule and run each conversation | Limited by calendars | High depth when the interviewer is skilled. People can go off-script or show their work | When the problem is messy, you need to build a relationship, or someone needs to show you their screen |
| Surveys | Low time cost per person once the survey is written | Fast to send to many people | Shallow on why. Useful for counts, weak for stories | When you need to measure how many people do or think something you already understand |
| AI-moderated voice interviews | You spend time on the guide and invitations, not on scheduling each call | People can talk when they have time, and interviews can run in parallel | Deeper than a survey, more consistent than ad hoc chats. A human interviewer is still better for messy, relationship-heavy discovery | When a product manager has a focused question, can already reach the people, and needs comparable stories without booking every call |

## Example questions

1. Walk me through the last time you had to deal with [problem or job]. What started it?
2. What did you do first, and what did you try after that?
3. Where did you get stuck, and what did that cost you in time, money, or coordination?
4. Who else was involved, and how did you decide what to do?
5. What do you use now, including a workaround, and what is still awkward about it?

If you want a ready starting guide, use the [customer interview guide generator](../tools/customer-interview-guide-generator/) with a discovery goal, or the [customer interview questions for founders](../customer-interview-questions-for-founders.html) page.

## How to run it with Frank AI Researcher

To run product discovery interviews with Frank AI Researcher, invite people you can already reach who recently did the job or felt the problem. Frank does not recruit participants, and it does not run usability, image, or prototype tests.

1. Name the decision you need to make, and write an open guide about a recent event, not about whether people like your idea. Check the wording with the [Mom Test question checker](../tools/mom-test-checker/), or start from the [customer interview guide generator](../tools/customer-interview-guide-generator/).
2. Create a study in Frank, paste the questions, and take the interview yourself before you share it.
3. Send the interviewer link to people you already know or can already reach. They can talk when they have time.
4. Read the transcripts, look for repeated stories, and notice when new interviews stop changing the picture. See [saturation](saturation.html).

If you work in ChatGPT or Claude, connect Frank as an MCP server at `https://api.hifrank.ai/mcp`. A study created through MCP stays a draft until you approve publishing.

If you want to hear answers like these in a customer's own voice, [try a short interview with Frank](https://www.hifrank.ai/try-frank?utm_source=frank-mcp-docs&utm_medium=glossary&utm_campaign=discovery-interview). Frank AI Researcher runs AI-moderated voice interviews with customers you already have. Frank does not recruit participants.

## Common mistakes

- Pitching the solution, then asking people to rate it. That is not discovery.
- Asking Would you use this? or Do you have this problem? Closed or hypothetical questions hide the real workflow.
- Talking only to people who already love your category, and missing the ones who currently ignore it.
- Stopping after two encouraging conversations and treating that as validation. Look for repeated stories, and notice when new interviews stop changing the picture. See [saturation](saturation.html).

## FAQ

### What is a good AI tool for a PM to run product discovery interviews?

A product manager who can already reach users, customers, or people in the target job can use Frank AI Researcher to run AI-moderated voice interviews. You set the goal, write or generate an open guide about recent events, invite people you can already reach, and read the transcripts. Frank does not recruit participants, and it does not run usability or prototype tests. A live human interview is still a better fit when the discovery is messy or someone needs to show you their screen.

### When should I use a survey instead of a discovery interview?

Use a survey when you need counts: how many people do a job, how often it happens, or how they would choose among options you already understand. Use a discovery interview when you need the story: what they did last time, what they tried, and what was missing. Many teams use a survey to find a pattern, then interview a smaller set of people about that pattern.

### Can I use discovery interviews to validate an idea I have already decided to build?

You can learn something, but only if you still ask about the person's past behavior and current workarounds, not whether they like your idea. A compliment or a promise to use the idea is weak evidence. If you already have a design, a usability test answers whether people can use it; a discovery interview answers whether the job matters.

### Does Frank recruit participants for discovery interviews?

No. Frank AI Researcher does not recruit participants. You invite people you can already reach who recently did the job or felt the problem.

### How is a discovery interview different from a usability test?

A discovery interview asks about a real event or job in someone's life, often with no design in front of them. A usability test watches someone try a task in a product or design. Frank runs voice interviews, not usability tests, and it does not run image or prototype tests.

## Related terms

- [Jobs to be Done (JTBD)](jobs-to-be-done.html)
- [The Mom Test](the-mom-test.html)
- [Interview guide](interview-guide.html)
- [Leading question](leading-question.html)
- [Usability test vs customer interview](usability-test-vs-customer-interview.html)
- [Saturation](saturation.html)
- [All glossary terms](./)

## Related guides and tools

- [How to run customer discovery interviews with Claude and Frank MCP](../how-to-run-customer-discovery-interviews-with-claude-and-frank-mcp.html)
- [How to validate a startup idea with customer interviews](../validate-a-startup-idea-with-customer-interviews.html)
- [How to run customer interviews](../how-to-run-customer-interviews.html)
- [Customer interview questions for founders](../customer-interview-questions-for-founders.html)
- [Customer interview questions template](../customer-interview-questions-template.html)
- [Customer interview guide generator](../tools/customer-interview-guide-generator/)
- [Mom Test question checker](../tools/mom-test-checker/)
- [30 customer interview study templates](../templates/)
