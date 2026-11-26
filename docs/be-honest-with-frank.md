---
# Swap this one value for the live interview URL when the study is published.
# The primary button reads page.study_url. If the value starts with "#",
# the page also shows a "Link opens soon" note so the placeholder is not a dead button.
study_url: "#study-link-coming"
layout: default
hide_signup_cta: true
schema_page: true
seo_title: "Be honest with Frank: a 10-minute voice interview"
description: "Be honest with Frank, a 10-minute AI-moderated voice interview from Frank AI Researcher. Take it when you have time."
---
# Be honest with Frank

A 10-minute voice interview.

Frank AI Researcher will ask the questions. You can talk when you have time.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="{{ page.study_url }}">Take the 10-minute interview</a></p>
{% assign study_url_prefix = page.study_url | slice: 0, 1 %}
{% if study_url_prefix == "#" %}
<p class="docs-study-cta-note">Link opens soon.</p>
{% endif %}

## Why is it called Frank?

Frank is the AI researcher that runs this conversation. The product is Frank AI Researcher, a voice-first tool from Prelaunch Group, Inc. that conducts AI-moderated voice interviews.

## What happens to your answers

Your answers are collected as a voice interview conducted by Frank AI Researcher. Interviews, transcripts, and related outputs are encrypted in transit and at rest. Frank is SOC 2 and GDPR compliant.

Under the Supplemental Participant Privacy Notice, the organization that invited you is usually the controller of the study. That organization decides who can access the results and how long they are kept. Frank may also process limited information for security, legal compliance, and fraud prevention.

Read the [Privacy Policy](https://www.hifrank.ai/privacy-policy) and the [security overview](https://www.hifrank.ai/features/transparency-security).

## Run this for your own customers

Want to run a similar voice interview with people you already have? [Run this for your own customers](https://www.hifrank.ai/try-frank?utm_source=frank-mcp-docs&utm_medium=study-landing&utm_campaign=be-honest-with-frank). The Free plan includes 60 voice minutes a month, with no card.
