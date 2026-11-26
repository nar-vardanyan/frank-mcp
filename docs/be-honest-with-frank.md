---
# Swap this one value for the live interview URL when the study is published.
# The primary button reads page.study_url. If the value starts with "#",
# the page also shows a "Link opens soon" note so the placeholder is not a dead button.
study_url: "#study-link-coming"
layout: default
hide_signup_cta: true
schema_page: true
seo_title: "Be honest with Frank: a ten minute voice conversation"
description: "Be honest with Frank, a ten minute voice conversation. Tell Frank about a product decision you got wrong because you didn't talk to customers."
---
# Be honest with Frank

A ten minute voice conversation.

Tell Frank about a product decision you got wrong because you didn't talk to customers. 10 questions, about 10 minutes.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="{{ page.study_url }}">Take the ten minute interview</a></p>
{% assign study_url_prefix = page.study_url | slice: 0, 1 %}
{% if study_url_prefix == "#" %}
<p class="docs-study-cta-note">Link opens soon.</p>
{% endif %}

## Why is it called Frank?

We named it Frank because we noticed people are really honest with Frank. The product is Frank AI Researcher, a voice-first tool from Prelaunch Group, Inc. that conducts AI-moderated voice interviews.

## What happens to your answers

What you share goes into an open data report on how product decisions go wrong, and at the end you choose whether you're named, anonymous, or not quoted at all.

We may quote some answers in the published report. You can be named with your name and company, quoted anonymously, or not quoted at all. Any of the three is completely fine.

In about a week we'll publish the findings as an open data report. If you agreed to be quoted, we'll only use your words the way you chose.

Named quotes use name, title and company exactly as given, after a quote check by email where an email was given. Anonymous quotes use the description the participant chose. Not-quoted participants count in the numbers but are never quoted or paraphrased closely enough to identify.

Interviews, transcripts, and related outputs are encrypted in transit and at rest. Frank is SOC 2 and GDPR compliant.

Read the [Privacy Policy](https://www.hifrank.ai/privacy-policy) and the [security overview](https://www.hifrank.ai/features/transparency-security).

## Run this for your own customers

Want to run a similar voice interview with people you already have? [Run this for your own customers](https://www.hifrank.ai/try-frank?utm_source=frank-mcp-docs&utm_medium=study-landing&utm_campaign=be-honest-with-frank). The Free plan includes 60 voice minutes a month, with no card.
