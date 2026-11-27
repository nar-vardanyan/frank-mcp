/*! Frank AI Researcher embed: Customer interview sample size planner v0.1.0 | MIT, Prelaunch Group, Inc. | no tracking, no network calls */
(function () {
"use strict";
if (typeof window === "undefined") return;
// Shared embed shell. Concatenated into each build by scripts/build.mjs.
// No network calls, no cookies, no storage, no analytics. The only outbound thing is a plain link to hifrank.ai.
var FE_VERSION = "0.1.0";
var FE_HOME = "https://hifrank.ai/";
var FE_SCRIPT = (typeof document !== "undefined" && document.currentScript) || null;

function feEsc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

// utm_source defaults to "embed". The embedding site may set data-frank-source="myblog" to name itself.
// Only [a-z0-9._-] are kept, max 60 chars. Nothing is read from the host page automatically.
function feSource(v) { v = String(v || "").toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, 60); return v || "embed"; }
function feLink(slug, source) {
  return FE_HOME + "?utm_source=" + feSource(source) + "&utm_medium=embed&utm_campaign=" + slug + "-embed";
}

function feOpt(el, name) {
  var v = el.getAttribute("data-frank-" + name);
  if (v == null && FE_SCRIPT) v = FE_SCRIPT.getAttribute("data-frank-" + name);
  return v;
}

var FE_CSS = [
  ":host{all:initial;display:block;}",
  ".fe{--ink:#1f2328;--muted:#59636e;--line:#d1d9e0;--soft:#f6f8fa;--bg:#fff;--accent:#0b6e4f;--accent-dark:#085a40;--tag:#eaf6f1;--warn:#bf8700;--warn-bg:#fff1c2;--warn-ink:#6c4a00;--link:#0969da;",
  "box-sizing:border-box;max-width:760px;margin:0 auto;padding:18px;border:1px solid var(--line);border-radius:12px;background:var(--bg);color:var(--ink);",
  "font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif;font-size:16px;line-height:1.55;text-align:left;overflow-wrap:anywhere;}",
  ".fe.dark{--ink:#e6edf3;--muted:#9ea7b3;--line:#3d444d;--soft:#151b23;--bg:#0d1117;--accent:#2ea876;--accent-dark:#7ee2b8;--tag:#0f2e22;--warn:#d29922;--warn-bg:#3a2a00;--warn-ink:#f2cc60;--link:#4493f8;}",
  "@media (prefers-color-scheme:dark){.fe.auto{--ink:#e6edf3;--muted:#9ea7b3;--line:#3d444d;--soft:#151b23;--bg:#0d1117;--accent:#2ea876;--accent-dark:#7ee2b8;--tag:#0f2e22;--warn:#d29922;--warn-bg:#3a2a00;--warn-ink:#f2cc60;--link:#4493f8;}}",
  ".fe *{box-sizing:border-box;}",
  ".fe h2{font-size:1.25em;line-height:1.3;margin:0 0 4px;}",
  ".fe h3{font-size:1.05em;margin:16px 0 6px;}",
  ".fe p{margin:0 0 10px;}",
  ".fe .lede{color:var(--muted);font-size:.95em;}",
  ".fe a{color:var(--link);}",
  ".fe label{display:block;font-weight:600;font-size:14px;margin:0 0 4px;}",
  ".fe .hint{font-weight:400;color:var(--muted);}",
  ".fe .field{margin:0 0 12px;}",
  ".fe input,.fe textarea,.fe select{width:100%;padding:10px 12px;font:inherit;font-size:16px;color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:6px;}",
  ".fe textarea{min-height:180px;resize:vertical;line-height:1.5;}",
  ".fe .grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}",
  "@media (max-width:520px){.fe{padding:14px;}.fe .grid{grid-template-columns:1fr;}}",
  ".fe input:focus-visible,.fe textarea:focus-visible,.fe select:focus-visible,.fe button:focus-visible,.fe a:focus-visible{outline:2px solid var(--link);outline-offset:2px;}",
  ".fe .actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:4px 0 0;}",
  ".fe button{font:inherit;font-size:15px;font-weight:600;border-radius:6px;padding:10px 16px;cursor:pointer;min-height:44px;}",
  ".fe .primary{background:var(--accent);color:#fff;border:1px solid var(--accent);}",
  ".fe.dark .primary{color:#06140e;}@media (prefers-color-scheme:dark){.fe.auto .primary{color:#06140e;}}",
  ".fe .primary:hover{filter:brightness(.92);}",
  ".fe .ghost{background:var(--bg);color:var(--ink);border:1px solid var(--line);}",
  ".fe .ghost:hover{background:var(--soft);}",
  ".fe .out{margin-top:16px;border-top:1px solid var(--line);padding-top:14px;}",
  ".fe ol{padding-left:22px;margin:8px 0;}",
  ".fe li{margin:0 0 12px;}",
  ".fe .status{color:var(--accent-dark);font-weight:600;font-size:14px;}",
  ".fe .credit{margin-top:16px;padding-top:10px;border-top:1px solid var(--line);font-size:13px;color:var(--muted);}",
  ".fe .credit p{margin:0 0 4px;}",
  ".fe .sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}",
  "@media (prefers-reduced-motion:reduce){.fe *{transition:none!important;animation:none!important;}}",
  "@media print{.fe form,.fe .actions{display:none!important;}}"
].join("");

function feCredit(slug, el) {
  var href = feLink(slug, feOpt(el, "source"));
  var blurb = feOpt(el, "blurb") === "off" ? "" :
    "<p>Frank is an AI user researcher that runs short voice interviews. Free plan: 60 voice minutes a month, no card required.</p>";
  return "<div class=\"credit\">" + blurb +
    "<p><a class=\"credit-link\" href=\"" + feEsc(href) + "\" target=\"_blank\" rel=\"noopener nofollow\">Powered by Frank</a>" +
    "<span class=\"sr\"> (opens in a new tab)</span></p><p>Runs in your browser; nothing you type is sent anywhere.</p></div>";
}

var FE_SEQ = 0;
function feUid(p) { FE_SEQ++; return "fe-" + p + "-" + FE_SEQ; }

// Mounts kind into every [data-frank-embed="kind"] element. If there is none,
// a container is created right before the <script> tag, so one pasted <script> is enough.
function feBoot(kind, mount, css) {
  function mountEl(el) {
    if (!el || el.__frankMounted) return;
    el.__frankMounted = true;
    el.setAttribute("data-frank-mounted", FE_VERSION);
    var root = el.attachShadow ? el.attachShadow({ mode: "open" }) : el;
    var style = document.createElement("style");
    style.textContent = css || FE_CSS;
    var box = document.createElement("div");
    var theme = feOpt(el, "theme");
    box.className = "fe " + (theme === "dark" ? "dark" : theme === "auto" ? "auto" : "light");
    root.appendChild(style);
    root.appendChild(box);
    mount(box, el);
  }
  function isBox(n) { return n && n.nodeType === 1 && n.getAttribute("data-frank-embed") === kind; }
  function run() {
    // 1) The script's own spot: reuse the container right before it, or create one there.
    //    A script placed in <head> creates nothing and only fills containers.
    if (FE_SCRIPT && FE_SCRIPT.parentNode && FE_SCRIPT.parentNode.nodeName !== "HEAD") {
      var prev = FE_SCRIPT.previousElementSibling;
      if (!isBox(prev) || prev.__frankMounted) {
        prev = document.createElement("div");
        prev.setAttribute("data-frank-embed", kind);
        FE_SCRIPT.parentNode.insertBefore(prev, FE_SCRIPT);
      }
      mountEl(prev);
    }
    // 2) Fill every other container of this kind on the page.
    var all = document.querySelectorAll('[data-frank-embed="' + kind + '"]');
    for (var i = 0; i < all.length; i++) mountEl(all[i]);
  }
  window.FrankEmbeds = window.FrankEmbeds || {};
  window.FrankEmbeds[kind] = { version: FE_VERSION, mount: mountEl };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
}

function feCopy(text, status) {
  function ok() { status.textContent = "Copied"; }
  function fallback() {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); ok(); } catch (e) { status.textContent = "Select the text and copy it manually"; }
    document.body.removeChild(ta);
  }
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok, fallback); else fallback();
}

// Ported tool page UI. The build fills in the kind, slug, CSS, HTML and the page script body (see scripts/build.mjs portJs).
// The page script runs unchanged except that document.getElementById/querySelectorAll are scoped to this
// embed's shadow root, URL deep links are not read from the host page, and the Frank CTA uses the embed UTMs.
feBoot("customer-interview-sample-size-planner", function (FE_BOX, el) {
  FE_BOX.innerHTML = "<h2 class=\"fe-title\">How Many Customer Interviews? Sample Size Planner</h2>\n    <p class=\"lede\">Get a sensible range for how many customer interviews to run, with the reasons. Pick your goal, how many segments you have, how similar the people are and how much you already know. The ranges come from published studies on when interviews stop turning up new themes, linked below. Free, no login: it runs in your browser.</p>\n    <p class=\"note\">These are guidance ranges, not a calculation. No study can tell you the exact number for your product. Plan with the range, check your notes as you go, and stop when new interviews stop adding new themes.</p>\n\n    <form class=\"gen\" id=\"gen\" autocomplete=\"off\">\n      <div class=\"grid2\">\n        <div class=\"field\">\n          <label for=\"goal\">Goal of the interviews</label>\n          <select id=\"goal\">\n            <option value=\"discovery\">Discovery: find needs and problems in a market</option>\n            <option value=\"churn\" selected>Churn: why customers left</option>\n            <option value=\"jtbd\">Jobs to Be Done: why customers switched to you</option>\n            <option value=\"focused\">A focused question: one feature, price or message</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label for=\"segments\">Segments <span class=\"hint\">(groups of quite different customers, 1 to 10)</span></label>\n          <input id=\"segments\" type=\"number\" min=\"1\" max=\"10\" step=\"1\" value=\"2\">\n        </div>\n      </div>\n      <fieldset class=\"radios\">\n        <legend>Within a segment, how similar are the people?</legend>\n        <label><input type=\"radio\" name=\"similar\" id=\"similar-similar\" value=\"similar\" checked> Quite similar</label>\n        <label><input type=\"radio\" name=\"similar\" id=\"similar-mixed\" value=\"mixed\"> Very mixed</label>\n      </fieldset>\n      <div class=\"grid2\">\n        <div class=\"field\">\n          <label for=\"known\">How much do you already know?</label>\n          <select id=\"known\">\n            <option value=\"little\">Little: this is new to us</option>\n            <option value=\"some\" selected>Some: we have hunches</option>\n            <option value=\"lot\">A lot: we have a specific question</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label for=\"minutes\">Planned length of each interview <span class=\"hint\">(minutes, optional)</span></label>\n          <input id=\"minutes\" type=\"number\" min=\"1\" max=\"120\" step=\"1\" value=\"\" placeholder=\"your planned length\">\n        </div>\n      </div>\n      <div class=\"actions\">\n        <button class=\"btn btn-primary\" type=\"submit\">Plan my interviews</button>\n      </div>\n    </form>\n\n    <section id=\"result\" aria-labelledby=\"result-title\">\n      <h2 id=\"result-title\" style=\"border:0;margin:8px 0 4px;font-size:1.1em;color:var(--muted)\">Your plan</h2>\n      <article class=\"guide\" id=\"plan\" aria-live=\"polite\">\n        <p class=\"big\" id=\"summary\">Plan 9 to 17 interviews per segment, 18 to 34 in total across 2 segments. Plan for the range and stop when new interviews stop adding new themes.</p><p><strong>Goal:</strong> Churn: why customers left</p><p>Check your notes after about <strong>12</strong> interviews (6 per segment): basic themes often show up that early (Guest, Bunce &amp; Johnson 2006).</p><p id=\"minutes-out\" class=\"hint\">Enter your planned interview length to see the voice minutes.</p><h3>Why this range</h3><ul><li class=\"reason\">A narrow goal about one decision, the kind of study where Hennink &amp; Kaiser found saturation within 9 to 17 interviews.</li><li class=\"reason\">Each segment needs its own range, because the sources count interviews within one relatively similar group.</li></ul><h3>Sources for this plan</h3><ul class=\"src\"><li><a href=\"https://doi.org/10.1016/j.socscimed.2021.114523\" rel=\"noopener\">Hennink &amp; Kaiser (2022)</a>: Across 17 empirical studies, saturation was reached within 9 to 17 interviews, particularly with relatively homogenous populations and narrowly defined objectives. Outliers such as multi-country research needed larger samples.</li><li><a href=\"https://doi.org/10.1177/1525822X05279903\" rel=\"noopener\">Guest, Bunce &amp; Johnson (2006)</a>: In 60 in-depth interviews, saturation occurred within the first twelve interviews, and basic elements for metathemes were present as early as six.</li><li><a href=\"https://doi.org/10.1177/1049732315617444\" rel=\"noopener\">Malterud, Siersma &amp; Guassora (2016)</a>: Information power: the more information the sample holds that is relevant for the study, the fewer participants are needed. It depends on the aim of the study, sample specificity, use of established theory, quality of dialogue and analysis strategy.</li></ul>\n      </article>\n      <div class=\"actions js-only\">\n        <button class=\"btn btn-ghost\" type=\"button\" id=\"copy\">Copy plan</button>\n        <button class=\"btn btn-ghost\" type=\"button\" id=\"dl-md\">Download .md</button>\n        <span class=\"status\" id=\"status\" role=\"status\"></span>\n      </div>\n    </section>" + feCredit("customer-interview-sample-size-planner", el);
  var FE_ROOT = FE_BOX.getRootNode();
  var FE_CTA = feLink("customer-interview-sample-size-planner", feOpt(el, "source"));
  (function (FE_ROOT, FE_BOX, FE_CTA) {

// "How many customer interviews" planner. Pure functions, no network. Every number comes from SOURCES below.
var SSP = (function () {
  var SOURCES = {
    guest: { short: "Guest, Bunce & Johnson (2006)", cite: "Guest, G., Bunce, A. & Johnson, L. (2006). How Many Interviews Are Enough? An Experiment with Data Saturation and Variability. Field Methods, 18(1), 59 to 82.", url: "https://doi.org/10.1177/1525822X05279903",
      finding: "In 60 in-depth interviews, saturation occurred within the first twelve interviews, and basic elements for metathemes were present as early as six." },
    hennink: { short: "Hennink & Kaiser (2022)", cite: "Hennink, M. & Kaiser, B. N. (2022). Sample sizes for saturation in qualitative research: A systematic review of empirical tests. Social Science & Medicine, 292, 114523.", url: "https://doi.org/10.1016/j.socscimed.2021.114523",
      finding: "Across 17 empirical studies, saturation was reached within 9 to 17 interviews, particularly with relatively homogenous populations and narrowly defined objectives. Outliers such as multi-country research needed larger samples." },
    griffin: { short: "Griffin & Hauser (1993)", cite: "Griffin, A. & Hauser, J. R. (1993). The Voice of the Customer. Marketing Science, 12(1), 1 to 27.", url: "https://doi.org/10.1287/mksc.12.1.1",
      finding: "Interviews with 20 to 30 customers should identify 90% or more of the customer needs in a relatively homogeneous customer segment." },
    malterud: { short: "Malterud, Siersma & Guassora (2016)", cite: "Malterud, K., Siersma, V. D. & Guassora, A. D. (2016). Sample Size in Qualitative Interview Studies: Guided by Information Power. Qualitative Health Research, 26(13), 1753 to 1760.", url: "https://doi.org/10.1177/1049732315617444",
      finding: "Information power: the more information the sample holds that is relevant for the study, the fewer participants are needed. It depends on the aim of the study, sample specificity, use of established theory, quality of dialogue and analysis strategy." }
  };
  // Goal -> cited per-segment range.
  var GOALS = {
    discovery: { label: "Discovery: find needs and problems in a market", range: [20, 30], source: "griffin", why: "A broad goal: you are looking for the full set of needs, which Griffin & Hauser found takes 20 to 30 interviews per relatively homogeneous segment." },
    churn: { label: "Churn: why customers left", range: [9, 17], source: "hennink", why: "A narrow goal about one decision, the kind of study where Hennink & Kaiser found saturation within 9 to 17 interviews." },
    jtbd: { label: "Jobs to Be Done: why customers switched to you", range: [9, 17], source: "hennink", why: "A narrow goal about one decision, the kind of study where Hennink & Kaiser found saturation within 9 to 17 interviews." },
    focused: { label: "A focused question: one feature, price or message", range: [9, 17], source: "hennink", why: "A narrowly defined objective, where Hennink & Kaiser found saturation within 9 to 17 interviews." }
  };
  var FIRST_CHECK = 6; // Guest et al. 2006: basic elements for metathemes present as early as six interviews.
  var MAX_SEGMENTS = 10;
  function int(v, lo, hi, d) { var n = parseInt(v, 10); return isNaN(n) || n < lo || n > hi ? d : n; }
  function plan(o) {
    o = o || {};
    var goal = GOALS[o.goal] ? o.goal : "churn", G = GOALS[goal];
    var segments = int(o.segments, 1, MAX_SEGMENTS, 1);
    var similar = o.similar === "mixed" ? "mixed" : "similar";
    var known = o.known === "lot" ? "lot" : o.known === "little" ? "little" : "some";
    var minutes = int(o.minutes, 1, 120, 0);
    var lo = G.range[0], hi = G.range[1];
    var lean = known === "lot" && similar === "similar" ? "low" : known === "little" || similar === "mixed" ? "high" : "middle";
    var reasons = [G.why];
    if (known === "lot") reasons.push("You already know a lot and have a specific question, so each interview holds more relevant information. Malterud and colleagues call this information power: the more of it the sample holds, the fewer participants you need.");
    if (known === "little") reasons.push("You know little so far, so each interview has to cover more ground. Malterud and colleagues list the aim of the study and how specific the sample is among the things that decide how many participants you need.");
    if (similar === "mixed") reasons.push("The people in a segment differ a lot. Hennink & Kaiser's ranges come mostly from relatively homogenous groups, and outliers needed larger samples, so split very different people into separate segments if you can.");
    if (segments > 1) reasons.push("Each segment needs its own range, because the sources count interviews within one relatively similar group.");
    var leanText = { low: "The lower end is likely enough.", middle: "Plan for the range and stop when new interviews stop adding new themes.", high: "Plan for the upper end, or beyond it." }[lean];
    var out = {
      goal: goal, goalLabel: G.label, segments: segments, similar: similar, known: known, minutes: minutes,
      perSegment: [lo, hi], total: [lo * segments, hi * segments], firstCheck: FIRST_CHECK * segments, lean: lean, leanText: leanText,
      reasons: reasons, sources: [G.source, "guest", "malterud"].concat(similar === "mixed" && G.source !== "hennink" ? ["hennink"] : []).filter(function (s, i, a) { return a.indexOf(s) === i; })
    };
    if (minutes) {
      out.voiceMinutes = [out.total[0] * minutes, out.total[1] * minutes];
      out.freePerMonth = Math.floor(60 / minutes);
      out.freeMonths = [Math.ceil(out.voiceMinutes[0] / 60), Math.ceil(out.voiceMinutes[1] / 60)];
    }
    return out;
  }
  function range(r) { return r[0] === r[1] ? String(r[0]) : r[0] + " to " + r[1]; }
  function summary(p) {
    return "Plan " + range(p.perSegment) + " interviews per segment" + (p.segments > 1 ? ", " + range(p.total) + " in total across " + p.segments + " segments" : "") + ". " + p.leanText;
  }
  function minutesText(p) {
    if (!p.minutes) return "";
    return "At " + p.minutes + " minutes each, that is " + range(p.voiceMinutes) + " voice minutes. Frank's free plan has 60 voice minutes a month, which covers about " + p.freePerMonth + " interviews of " + p.minutes + " minutes a month, so this plan would take " + range(p.freeMonths) + " months on the free plan. Real interviews often run shorter or longer than planned.";
  }
  function toMarkdown(p, cta) {
    var out = ["# How many customer interviews: your plan", "", "**Goal:** " + p.goalLabel, "", "**" + summary(p) + "**", "",
      "Check your notes after about " + p.firstCheck + " interviews" + (p.segments > 1 ? " (" + FIRST_CHECK + " per segment)" : "") + ": basic themes often show up that early (Guest, Bunce & Johnson 2006).", ""];
    var mt = minutesText(p); if (mt) out.push(mt, "");
    out.push("## Why", "");
    p.reasons.forEach(function (r) { out.push("- " + r); });
    out.push("", "These are guidance ranges from published studies, not a calculation. Stop when new interviews stop adding new themes.", "", "## Sources", "");
    p.sources.forEach(function (k) { var s = SOURCES[k]; out.push("- " + s.cite + " " + s.url + " : " + s.finding); });
    out.push("");
    if (cta) out.push("Run the interviews by voice with Frank AI Researcher: " + cta, "");
    return out.join("\n");
  }
  function fromParams(search) {
    var p = {};
    String(search || "").replace(/^\?/, "").split("&").forEach(function (kv) {
      if (!kv) return;
      var i = kv.indexOf("=");
      try { p[decodeURIComponent(i < 0 ? kv : kv.slice(0, i))] = i < 0 ? "" : decodeURIComponent(kv.slice(i + 1).replace(/\+/g, " ")); } catch (e) {}
    });
    var r = {};
    if (GOALS[p.goal]) r.goal = p.goal;
    if (p.segments && int(p.segments, 1, MAX_SEGMENTS, 0)) r.segments = int(p.segments, 1, MAX_SEGMENTS, 1);
    return r;
  }
  return { SOURCES: SOURCES, GOALS: GOALS, FIRST_CHECK: FIRST_CHECK, MAX_SEGMENTS: MAX_SEGMENTS, plan: plan, summary: summary, minutesText: minutesText, toMarkdown: toMarkdown, fromParams: fromParams, range: range };
})();

(function () {
  FE_BOX.className += " has-js";
  var CTA = FE_CTA;
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function $(id) { return FE_ROOT.getElementById(id); }
  var render_ = (function planHTML(p, esc, S) {
  var mt = S.minutesText(p);
  return "<p class=\"big\" id=\"summary\">" + esc(S.summary(p)) + "</p>" +
    "<p><strong>Goal:</strong> " + esc(p.goalLabel) + "</p>" +
    "<p>Check your notes after about <strong>" + p.firstCheck + "</strong> interviews" + (p.segments > 1 ? " (" + S.FIRST_CHECK + " per segment)" : "") + ": basic themes often show up that early (Guest, Bunce &amp; Johnson 2006).</p>" +
    (mt ? "<p id=\"minutes-out\">" + esc(mt) + "</p>" : "<p id=\"minutes-out\" class=\"hint\">Enter your planned interview length to see the voice minutes.</p>") +
    "<h3>Why this range</h3><ul>" + p.reasons.map(function (r) { return "<li class=\"reason\">" + esc(r) + "</li>"; }).join("") + "</ul>" +
    "<h3>Sources for this plan</h3><ul class=\"src\">" + p.sources.map(function (k) { var s = S.SOURCES[k]; return "<li><a href=\"" + esc(s.url) + "\" rel=\"noopener\">" + esc(s.short) + "</a>: " + esc(s.finding) + "</li>"; }).join("") + "</ul>";
});
  var current;
  function opts() { return { goal: $("goal").value, segments: $("segments").value, similar: $("similar-mixed").checked ? "mixed" : "similar", known: $("known").value, minutes: $("minutes").value }; }
  function render() { current = SSP.plan(opts()); $("plan").innerHTML = render_(current, esc, SSP); $("status").textContent = ""; }
  $("gen").addEventListener("submit", function (e) { e.preventDefault(); render(); $("result").scrollIntoView({ behavior: "smooth", block: "start" }); });
  Array.prototype.forEach.call(FE_ROOT.querySelectorAll("#gen input, #gen select"), function (el) { el.addEventListener(el.type === "radio" || el.tagName === "SELECT" ? "change" : "input", render); });
  function md() { return SSP.toMarkdown(current, CTA); }
  $("copy").addEventListener("click", function () {
    var text = md();
    function ok() { $("status").textContent = "Copied"; }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); ok(); } catch (err) { $("status").textContent = "Select the plan and copy it manually"; }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok, fallback); else fallback();
  });
  $("dl-md").addEventListener("click", function () {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([md()], { type: "text/markdown;charset=utf-8" }));
    a.download = "customer-interview-plan.md";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    $("status").textContent = "Downloaded";
  });
  // Deep links: ?goal=discovery|churn|jtbd|focused&segments=N
  var P = SSP.fromParams("");
  if (P.goal) $("goal").value = P.goal;
  if (P.segments) $("segments").value = P.segments;
  render();
})();

  })(FE_ROOT, FE_BOX, FE_CTA);
}, ":host{all:initial;display:block;}\n  .fe { --ink:#1f2328; --muted:#59636e; --line:#d1d9e0; --soft:#f6f8fa; --accent:#0b6e4f; --accent-dark:#085a40; }\n  .fe, .fe * { box-sizing: border-box; }\n  .fe { margin:0; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif; color:var(--ink); line-height:1.6; background:#fff; }\n  .wrap { max-width: 860px; margin: 0 auto; padding: 24px 20px 64px; }\n  .top { display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; font-size:14px; border-bottom:1px solid var(--line); padding-bottom:12px; }\n  .top a { color:var(--muted); text-decoration:none; }\n  .top a:hover { text-decoration:underline; }\n  h1 { font-size: 2.1em; line-height:1.2; margin: 28px 0 8px; }\n  h2 { font-size: 1.45em; margin: 40px 0 12px; padding-bottom: 6px; border-bottom:1px solid var(--line); }\n  h3 { font-size: 1.1em; margin: 24px 0 8px; }\n  .lede { font-size: 1.1em; color: var(--muted); margin-top:0; }\n  a { color:#0969da; }\n  form.gen { background: var(--soft); border:1px solid var(--line); border-radius:10px; padding:20px; margin: 20px 0; }\n  label { display:block; font-weight:600; font-size:14px; margin-bottom:4px; }\n  .hint { font-weight:400; color:var(--muted); }\n  input, textarea { width:100%; padding:10px 12px; font-size:16px; border:1px solid var(--line); border-radius:6px; background:#fff; color:var(--ink); font-family:inherit; }\n  textarea { min-height: 220px; resize: vertical; line-height:1.5; }\n  .field { margin-bottom: 14px; }\n  input:focus, textarea:focus, .btn:focus { outline: 2px solid #0969da; outline-offset: 2px; }\n  .btn { display:inline-block; border:0; border-radius:6px; padding:11px 18px; font-size:16px; font-weight:600; cursor:pointer; text-decoration:none; }\n  .btn-primary { background:var(--accent); color:#fff; }\n  .btn-primary:hover { background:var(--accent-dark); }\n  .btn-ghost { background:#fff; color:var(--ink); border:1px solid var(--line); }\n  .btn-ghost:hover { background:var(--soft); }\n  .actions { display:flex; gap:10px; flex-wrap:wrap; margin-top:14px; align-items:center; }\n  .guide { border:1px solid var(--line); border-radius:10px; padding: 8px 22px 18px; background:#fff; overflow-wrap:anywhere; }\n  .guide h2 { border:0; margin-top:16px; }\n  .guide ol { padding-left: 22px; }\n  .guide li { margin-bottom: 16px; }\n  .probe { display:block; color: var(--muted); font-size: 0.95em; }\n  .why { display:block; font-size: 0.9em; color: var(--muted); border-left: 3px solid var(--line); padding-left: 10px; margin-top: 4px; }\n  .tag { display:inline-block; font-size: 0.75em; font-weight:600; background:#eaf6f1; color:var(--accent-dark); border-radius: 10px; padding: 0 8px; margin-right: 6px; }\n  .say { background: var(--soft); border-left: 3px solid var(--accent); padding: 10px 14px; border-radius: 4px; }\n  .note { background:#fff8c5; border:1px solid #eac54f; border-radius:6px; padding:8px 12px; }\n  .cta { margin: 22px 0; padding: 18px 20px; border-radius: 10px; background: #eaf6f1; border:1px solid #b7e1cf; }\n  .cta p { margin: 0 0 10px; }\n  .status { color: var(--accent-dark); font-weight:600; font-size:14px; }\n  .js-only { display:none; }\n  .has-js .js-only { display:flex; }\n  table { border-collapse: collapse; width: 100%; font-size: 0.95em; }\n  th, td { border: 1px solid var(--line); padding: 8px 10px; text-align: left; vertical-align: top; }\n  th { background: var(--soft); }\n  .table-wrap { overflow-x: auto; }\n  footer { margin-top: 48px; padding-top: 16px; border-top:1px solid var(--line); color: var(--muted); font-size:14px; }\n  .row { border:1px solid var(--line); border-radius:8px; padding:10px 14px; margin-bottom:12px; }\n  .row.ok { border-left:4px solid var(--accent); }\n  .row.bad { border-left:4px solid #bf8700; }\n  .row .q { font-weight:600; }\n  .flag { margin:6px 0 0; font-size:0.95em; }\n  .flag .tag { background:#fff1c2; color:#6c4a00; }\n  .rw { display:block; color:var(--muted); }\n  .verdict { font-size:0.85em; color:var(--accent-dark); font-weight:600; }\n  .summary { font-weight:600; }\n  @media (max-width: 640px) { h1 { font-size: 1.7em; } .guide { padding: 6px 14px 14px; } }\n  @media print { form.gen, .cta, .top, .actions, footer, .seo { display:none !important; } }\n  fieldset { border:0; padding:0; margin:0 0 14px; }\n  legend { font-weight:600; font-size:14px; margin-bottom:4px; padding:0; }\n  .radios label, .radios { font-weight:400; }\n  .radios label { display:inline-flex; gap:6px; align-items:center; margin-right:18px; font-size:16px; }\n  .radios input { width:auto; }\n  select { width:100%; padding:10px 12px; font-size:16px; border:1px solid var(--line); border-radius:6px; background:#fff; color:var(--ink); font-family:inherit; }\n  .grid2 { display:grid; grid-template-columns: 1fr 1fr; gap: 0 16px; }\n  @media (max-width: 640px) { .grid2 { grid-template-columns: 1fr; } }\n  .tag.push { background:#ffebe9; color:#82071e; }\n  .tag.pull { background:#ddf4ff; color:#0a3069; }\n  .tag.anxiety { background:#fff1c2; color:#6c4a00; }\n  .tag.habit { background:#f3e8ff; color:#4c1d95; }\n  .tag.timeline, .tag.progress { background:#eaf6f1; color:var(--accent-dark); }\n  .phase-goal { color:var(--muted); margin-top:-6px; }\n  .themes td.num { text-align:right; white-space:nowrap; }\n  .theme { border:1px solid var(--line); border-radius:10px; padding:4px 18px 12px; margin:16px 0; }\n  .theme h3 { margin-top:12px; }\n  .theme .meta { color:var(--muted); font-size:0.9em; margin-top:-6px; }\n  .theme blockquote { margin:6px 0; padding:4px 12px; border-left:3px solid var(--line); color:var(--ink); }\n  .theme.unclear { border-style:dashed; }\n  .bar { display:inline-block; height:8px; background:var(--accent); border-radius:4px; vertical-align:middle; margin-right:6px; }\n  details.all { margin-top:12px; }\n  details.all li { margin-bottom:6px; }\n  .grid3 { display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 16px; }\n  @media (max-width: 640px) { .grid3 { grid-template-columns: 1fr; } }\n  .mail input { margin-bottom:8px; }\n  .mail textarea { min-height: 260px; }\n  #col-field[hidden] { display:none; }\n  .doc h3 { margin-top:18px; }\n  .doc .checks { list-style:none; padding-left:0; }\n  .doc .checks li::before { content:\"\\2610  \"; }\n  .doc blockquote { margin:6px 0; padding:4px 12px; border-left:3px solid var(--accent); background:var(--soft); }\n  .doc .stage { color:var(--muted); font-style:italic; }\n  .checkrow label { display:inline-flex; gap:6px; align-items:center; margin-right:18px; font-weight:400; font-size:16px; }\n  .checkrow input { width:auto; }\n  .big { font-size:1.25em; font-weight:700; margin:12px 0 6px; }\n  .src li { margin-bottom:10px; }\n  input[type=number] { max-width:160px; }\n  @media print { .note.top, .seo, nav, footer, form.gen, .cta, .actions { display:none !important; } .guide { border:0; } }\n  /* chatgpt-cta */ .cta-chatgpt { margin-top:14px; padding-top:12px; border-top:1px solid #b7e1cf; }\n  .cta-chatgpt p { margin:0 0 10px; }\n  .btn-chatgpt { background:#fff; color:var(--accent); border:1px solid var(--accent); white-space:normal; max-width:100%; box-sizing:border-box; }\n  .btn-chatgpt:hover { background:#f6f8fa; }\n  .cta-signup { display:inline-block; margin:10px 0 0; }\n  /* embed-section */ .embed-code { background:var(--soft); border:1px solid var(--line); border-radius:6px; padding:10px 12px; margin:6px 0 8px; overflow-x:auto; white-space:pre-wrap; word-break:break-all; font-size:13px; line-height:1.5; }\n  .embed-copy { font-size:14px; padding:8px 14px; }\n.fe{box-sizing:border-box;max-width:820px;margin:0 auto;padding:18px;border:1px solid var(--line);border-radius:12px;background:#fff;color:var(--ink);text-align:left;overflow-wrap:anywhere;font-size:16px;}.fe .fe-title{font-size:1.4em;line-height:1.25;margin:0 0 6px;padding:0;border:0;}.fe .credit{margin-top:16px;padding-top:10px;border-top:1px solid var(--line);font-size:13px;color:var(--muted);}.fe .credit p{margin:0 0 4px;}.fe .sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}.fe button:focus-visible,.fe a:focus-visible{outline:2px solid #0969da;outline-offset:2px;}@media (max-width:520px){.fe{padding:12px;}}");

})();
