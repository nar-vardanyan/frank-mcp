---
# The primary button reads page.study_url. If the value starts with "#",
# the page also shows a "Link opens soon" note so a placeholder is not a dead button.
# Swap study_url to the interviewer link once the study is published (see founder-study-url-swap.md).
study_url: "#"
# Deletion contact, used in both privacy versions below. Change it here only.
privacy_email: "narek@tryfrank.ai"
permalink: /founder-study/
layout: default
hide_signup_cta: true
hide_research_cta: true
schema_page: true
---
# How Founders Actually Talk to Customers, 2026

A ten minute voice interview about your last real customer conversation. Results public in mid-December.

## What the study is

An open study on how founders and product people talk to customers in 2026. It is about what you did, not what you think you should do: you tell Frank about one specific, recent conversation with a customer or user. Frank AI Researcher, a voice-first tool from Prelaunch Group, Inc., runs the AI-moderated voice interview.

The study asks:

- When you last had a real one on one conversation with a customer or user, and how many you had in the last month.
- How you find people to talk to: existing customers, support tickets, sales calls, cold outreach, communities, paid panels or friends.
- What you actually asked: about past behaviour, or a pitch and a request for opinions.
- Whether a conversation changed something concrete, like the roadmap, pricing, how you describe the product or a feature you cut.
- What stops you talking to customers more often.
- Where your notes and recordings end up, and who reads them.
- Where you use AI in customer conversations, and where you don't trust it.
- How the answers differ by role, stage, team size, and B2B or B2C.

It is for founders, co-founders and CEOs with a live product or one in active build, and for product managers, heads of product, and designers or researchers who shape what gets built. Any stage, any team size, B2B or B2C.

<p class="docs-study-cta-wrap"><a class="docs-study-cta" href="{{ page.study_url | escape }}">Take the 10 minute interview</a></p>
{% assign study_url_prefix = page.study_url | slice: 0, 1 %}
{% if study_url_prefix == "#" %}
<p class="docs-study-cta-note">Link opens soon.</p>
{% endif %}

## What you get

- Early results, a couple of days before they go public.
- Credit in the report, if you want it: named, anonymous, or not quoted at all.
- A free Frank study set up for you if you want one.

## What happens to your answers

A ten minute voice interview for a public study. It's recorded and transcribed. Your answers go into an open report and an anonymized dataset. You're only named if you choose that at the end, and you can be anonymous or not quoted at all. Want your interview deleted? Email {{ page.privacy_email }}. Frank is SOC 2 and GDPR compliant.

**Who runs this study.** Frank, a product of Prelaunch Group, Inc., 2055 Limestone RD STE 200-C, Wilmington, DE 19808, USA. For this study, Prelaunch Group, Inc. decides how your answers are used.

**What we collect.**
- Your voice conversation with Frank, recorded and transcribed.
- What you tell us about your role and company size.
- Your name, title, company and email, only if you give them at the end (to credit you, to check a quote with you, to send you the early results, or to set up the free study you asked for).

**What we publish.**
- A report with counts and themes across all interviews.
- An anonymized dataset (CSV and JSON) with one row per interview. It never includes your name, email or company unless you chose to be named. It never includes your email, the free-study or early-copy answers, transcripts or audio.
- Short quotes, only the way you chose: named, anonymous, or not at all.

**What we remove.** Before anything is published we take out your name, email and company (unless you chose to be named), the names of any people, customers or companies you mention, and details that could identify you, like a very specific product or city.

**Quote check.** If you chose to be named, we email you your quote before it goes public. If we don't hear back within 3 working days, we use it anonymously instead.

**What we don't do.** We never publish audio. We don't sell your data, and we don't add you to a mailing list. We only email you for the things you asked for at the end of the interview.

**How long we keep it.** Recordings and transcripts are kept until the report is published and for up to 12 months afterwards, so we can answer questions about the data. Then we delete them. The anonymized dataset stays public.

**Your choices.** You can skip any question or stop at any time. You can ask us to delete your interview before publication, or to remove your quote after publication, by emailing **{{ page.privacy_email }}**. We reply within 30 days. Depending on where you live, you may have other rights under the law (for example under GDPR or California law), which are described in our Privacy Policy.

**Security.** Interviews and transcripts are encrypted in transit and at rest. Frank is SOC 2 and GDPR compliant.

**More.** [Privacy Policy](https://www.hifrank.ai/privacy-policy?utm_source=frank-mcp-docs&utm_medium=landing&utm_campaign=founder-study-2026) and [security overview](https://www.hifrank.ai/features/transparency-security?utm_source=frank-mcp-docs&utm_medium=landing&utm_campaign=founder-study-2026).

## FAQ

### How often do founders talk to customers?

That is the first thing this study asks. Each founder or PM tells Frank when they last had a real one on one conversation with a customer or user, and roughly how many they had in the last month. There are no results yet. They go public in mid-December.

### What do founders get wrong in customer interviews?

The study looks at what founders and PMs actually asked in their last customer conversation: questions about past behaviour, or a pitch and a request for opinions. It also asks about a time someone skipped talking to customers before a decision. What we find goes into the report in mid-December.

### How many customer interviews before product market fit?

This study does not set a number. It asks how many customer conversations founders and PMs had in the last month, whether their product has paying customers yet, and whether a conversation changed something concrete like the roadmap or pricing. Results come out in mid-December.

### What are common customer discovery interview mistakes?

The study asks each participant to walk through one recent conversation: who it was with, what they hoped to learn, what they asked and whether they showed a demo. It also asks what gets in the way of talking to customers more often. The report in mid-December describes what founders and PMs told us.

### How long should a customer interview be?

This study does not measure the right length for a customer interview. Its own interview takes about ten minutes and stays on one real conversation you had.

### When do the results come out?

Results go public in mid-December as an open report and an anonymized dataset. If you ask for an early copy at the end of the interview, you get it a couple of days before it goes public.

<script>
(function () {
  // Pass incoming utm_* parameters on to the interview link, overriding the page defaults.
  if (!location.search) return;
  var incoming = new URLSearchParams(location.search);
  document.querySelectorAll("a.docs-study-cta").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#") return;
    try {
      var u = new URL(href, location.href);
      incoming.forEach(function (v, k) { if (k.indexOf("utm_") === 0) u.searchParams.set(k, v); });
      a.setAttribute("href", u.toString());
    } catch (e) {}
  });
})();
</script>
