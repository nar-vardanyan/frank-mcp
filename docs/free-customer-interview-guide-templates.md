---
# Intake form link. Swap FORM_URL_PLACEHOLDER for the live form URL (one line, see 100-studies-form-swap.md).
# While it is the placeholder, the button points to "#" and the page shows "Form opens soon."
intake_form_url: "FORM_URL_PLACEHOLDER"
---
# Free Customer Interview Guide Templates

**Last updated:** Nov 28, 2026.

Six free interview guides for startups that want to hear from their own customers. Each one has five open questions, a welcome and a closing message. The questions take about eight minutes, so they fit a 10-minute interview, the Free plan cap. Use them as AI-moderated voice interviews in Frank AI Researcher, or with any interview setup you already have.

{% assign form_is_placeholder = false %}{% if page.intake_form_url == "FORM_URL_PLACEHOLDER" %}{% assign form_is_placeholder = true %}{% endif %}
{% capture intake_href %}{% if form_is_placeholder %}#{% else %}{{ page.intake_form_url }}?utm_source=frank-mcp-docs&utm_campaign=100-studies{% endif %}{% endcapture %}

## Set up a study in three steps

1. **Connect Frank or sign up.** [Create a free Frank account](https://app.hifrank.ai/signup?utm_source=docs&utm_medium=referral&utm_campaign=kpi4b&utm_content=free-customer-interview-guide-templates), or connect Frank's MCP server `https://api.hifrank.ai/mcp` in your AI assistant ([MCP setup](mcp-server-for-customer-interviews.md)). Works with ChatGPT, Claude, Grok and Muse. Frank's Free plan includes 225 signup credits plus 60 voice minutes a month, no card required.
2. **Pick a template.** Choose the one below that matches your decision. Replace `{product}`, `{customer}` and `{company}`, put your own question in as question 3 (asked about something that already happened), set the interview length to 10 minutes, set every question to 1-2 follow-ups (the default is none), set the interview language, and publish the study.
3. **Share the interview link.** Paste the invite copy below into an email or in-app message with your interview link, or add Frank's website widget (floating, inline or popup) from your Frank dashboard. Frank does not recruit participants, so you invite your own customers or users.

## Want a guide written for your study?

Tell us about your product and the decision you need to make in the intake form. We turn your answers into a paste-ready guide based on these templates, and you create and publish the study in your own Frank account.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="{{ intake_href | strip | escape }}">Fill in the intake form</a></p>
{% if form_is_placeholder %}
<p class="docs-study-cta-note">Form opens soon.</p>
{% endif %}

## How to use these templates

- Ask about past behaviour, not opinions. Keep one idea per question.
- No leading questions, and no pitch for your product during the interview.
- Five questions are enough. The follow-ups do the depth.
- Participants can answer in their own language.

**Welcome message (all templates):**

> Hi, thanks for making time. I'm an AI interviewer working with {company}. This takes about eight minutes, there are no right or wrong answers, and the team wants your honest view, including the critical parts. It's recorded and transcribed so the team can learn from it. Is that okay?

**Closing message (all templates):**

> Thank you, that was really helpful. Your answers go straight to the {company} team. Have a good day.

## The six templates

### 1. Why people sign up or buy

**Goal:** Understand what triggered the decision to try {product} and what almost stopped it.

1. Think back to just before you started using {product}. What was going on that made you look for something?
2. Before {product}, how were you handling that?
3. {your question, as a past event}
4. Before you signed up or paid, did anything make you hesitate? Tell me about it.
5. If {product} disappeared tomorrow, what would you do instead?

### 2. Why people cancel or go quiet

**Goal:** Find the real reasons {customer} stopped using {product}, and what would have kept them.

1. Tell me about when you first started using {product}. What did you hope it would do for you?
2. When did you last use it, and what were you trying to get done?
3. {your question, as a past event}
4. What did you start doing instead, if anything?
5. Was there a moment where it could have gone the other way? What would have needed to be different?

### 3. What to build next

**Goal:** Find the jobs {customer} still does by hand or with workarounds.

1. Walk me through the last time you used {product}. What were you trying to get done?
2. During that time, did you have to leave {product} or use something else to finish the job? Tell me about that.
3. {your question, as a past event}
4. Think about the part of the job you finish outside {product}. Walk me through how you do it today.
5. If you could change one thing about {product} tomorrow, what would it be and why?

### 4. Reaction to a price or a new idea

**Goal:** Hear how {customer} reacts to {idea} and what drives the reaction.

**Tip:** {idea} is the concept or price in one or two plain sentences. Paste the same text into question 2.

1. Tell me about the last time you had to deal with {problem}. How did you handle it?
2. Here's the idea: {idea}. What's your first reaction?
3. {your question, as a past event where it can be}
4. What would you need to see or know before you'd pay for something like this?
5. Think of the last time you paid for a tool like this. Who else was involved in that decision?

### 5. Why we win or lose deals

**Goal:** Learn why buyers chose or didn't choose {product}.

**Tip:** Invite recent wins and recent losses separately. You can run two studies from this template, one for each.

1. What made you start looking for a solution like this?
2. Which other options did you look at at the time?
3. {your question, as a past event}
4. What was the deciding factor in the end?
5. What could {company} have done better during the process?

### 6. Where people get stuck when they start

**Goal:** Find where new users get stuck in their first days with {product}.

1. Think back to your first day with {product}. What were you hoping to get done?
2. Walk me through what you did first, step by step.
3. {your question, as a past event}
4. Was there a moment you thought about giving up? What happened?
5. What would you tell a friend to make their first day easier?

## Invite copy

**Email or in-app message:**

> Hi {first name}, we're trying to make {product} better and would love 8 minutes of your honest take. It's a short voice conversation with an AI interviewer, any time that suits you, no call to book: {interview link}. Thank you. {founder name}

**Website widget:** set it up in your Frank dashboard's widget settings (floating, inline or popup) and add it to your own site.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Free Customer Interview Guide Templates",
  "description": "Six free customer interview guide templates for startups: sign-up reasons, churn, what to build next, price or concept tests, win-loss and onboarding. Five questions each, sized for a 10-minute interview, ready to run as AI-moderated voice interviews in Frank AI Researcher.",
  "url": "https://nar-vardanyan.github.io/frank-mcp/free-customer-interview-guide-templates.html",
  "datePublished": "2026-11-28",
  "dateModified": "2026-11-28",
  "inLanguage": "en",
  "mainEntityOfPage": "https://nar-vardanyan.github.io/frank-mcp/free-customer-interview-guide-templates.html",
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
  "@type": "ItemList",
  "name": "Customer interview guide templates",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Why people sign up or buy"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Why people cancel or go quiet"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "What to build next"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Reaction to a price or a new idea"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Why we win or lose deals"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Where people get stuck when they start"
    }
  ]
}
</script>

## Related

- [Customer interview questions template](customer-interview-questions-template.md)
- [How to run customer interviews](how-to-run-customer-interviews.md)
- [MCP server for customer interviews](mcp-server-for-customer-interviews.md)
- [Frank's Free plan](ai-customer-interview-tool-free-plan.md)
