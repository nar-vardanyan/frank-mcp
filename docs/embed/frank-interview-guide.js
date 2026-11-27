/*! Frank AI Researcher embed: Customer interview guide generator v0.1.0 | MIT, Prelaunch Group, Inc. | no tracking, no network calls */
(function () {
"use strict";
if (typeof window === "undefined") return;
var GUIDE = (function () {
  // Question bank. Sources: frank-mcp docs/customer-interview-questions-template.md,
  // agent-skill references/guide-and-probes.md, and the script generator (PR #40).
  // Each goal: 7 shared questions plus 1 product-type question inserted at position 4.
  // Each item: [question, probe]. Tokens: {P} product, {JOIN} start verb, {LEAVE} stop verb.
  var TYPES = {
    saas:        { label: "B2B SaaS",            P: "the software",    JOIN: "signed up for",      LEAVE: "cancel" },
    consumer:    { label: "Consumer app",        P: "the app",         JOIN: "downloaded",         LEAVE: "stop using" },
    marketplace: { label: "Marketplace",         P: "the marketplace", JOIN: "joined",             LEAVE: "stop using" },
    devtool:     { label: "Developer tool",      P: "the tool",        JOIN: "started using",      LEAVE: "stop using" },
    ecommerce:   { label: "E-commerce store",    P: "the store",       JOIN: "first ordered from", LEAVE: "stop buying from" },
    other:       { label: "Other",               P: "the product",     JOIN: "started using",      LEAVE: "stop using" }
  };

  var GOALS = {
    churn: {
      label: "Churn",
      desc: "Why customers stopped using or cancelled. Talk to people who left recently.",
      episode: "decided to {LEAVE} {P}",
      core: [
        ["Think back to when you first {JOIN} {P}. What was going on that made you look for something like it?", "What had you tried before?"],
        ["Walk me through the moment you decided to {LEAVE} {P}.", "What happened right before that?"],
        ["What had changed, compared with when you started?", "When did you first notice it?"],
        ["What almost made you stay?", "What happened after that?"],
        ["What do you use now, including a spreadsheet or \"nothing\"?", "How did you pick that?"],
        ["What did {P} do well for you, even if it wasn't enough?", "Is there anything you miss now?"],
        ["What, if anything, would have changed your mind, and when would it have needed to happen?", "Did you tell anyone about it at the time?"]
      ],
      byType: {
        saas:        ["Who else on your team was involved in the decision to cancel, and what did they care about?", "Who had the final say?"],
        consumer:    ["What were you using the app for in a normal week, before you stopped?", "When was the last time you opened it?"],
        marketplace: ["Tell me about the last transaction you made on {P}. How did it go?", "What did you do the next time you needed the same thing?"],
        devtool:     ["Walk me through how {P} fit into your workflow before you stopped using it.", "What did you have to change to remove it?"],
        ecommerce:   ["Tell me about your last order from {P}. How did it go?", "Where did you buy the next time you needed something similar?"],
        other:       ["What were you using {P} for, day to day?", "When was the last time you used it?"]
      },
      tips: [
        "Talk to people within a few weeks of leaving, while the real reason is still fresh.",
        "Separate the trigger (the moment they started looking) from the reason (why they were open to leaving).",
        "Don't defend the product or explain features. If they missed something, write it down and move on."
      ]
    },
    winloss: {
      label: "Win-loss",
      desc: "How buyers chose between you, a competitor, or doing nothing. Talk to recent buyers from deals you won and lost.",
      episode: "compared options and made a decision",
      core: [
        ["What made you start looking for a solution in the first place?", "Why then, and not earlier?"],
        ["Which options did you look at, and how did you find them?", "Where did {P} come in on your list?"],
        ["How did you narrow the list down?", "What ruled options out?"],
        ["Walk me through how you decided.", "What was the moment you knew which way you were going to go?"],
        ["What almost tipped it the other way?", "What happened next?"],
        ["How did {P} come across during the process, compared with what you expected?", "Was anything unclear or hard to get an answer on?"],
        ["What would have needed to be true for the decision to go the other way?", "Is there anything we didn't ask about that mattered?"]
      ],
      byType: {
        saas:        ["Who else was involved in the decision, and what did each person care about?", "Who had the final say?"],
        consumer:    ["Where did you first hear about the options you compared?", "What did you read or watch before choosing?"],
        marketplace: ["What did you check before you trusted an option enough to use it?", "Where did you look for that?"],
        devtool:     ["How did you try the options out before deciding?", "What did you test first?"],
        ecommerce:   ["Tell me about the moment you were ready to buy. What were you looking at?", "What did you check before you paid?"],
        other:       ["Who else was involved in the decision, and what did they care about?", "Who had the final say?"]
      },
      tips: [
        "Interview both wins and losses. Wins tell you what to repeat. Losses tell you what to fix.",
        "Talk to buyers within a month of the decision, while the details are still fresh.",
        "Buyers are often more open with someone outside the sales team."
      ]
    },
    discovery: {
      label: "Discovery",
      desc: "How people get a job done today and where it breaks down, before you decide what to build. Replace [the job] with the customer's words.",
      episode: "tried to [the job]",
      core: [
        ["Tell me about the last time you tried to [the job]. What were you trying to get done?", "What triggered it?"],
        ["What did you try first? What did you try after that?", "What tools did you use?"],
        ["Where did you get stuck, or what took longer than you expected?", "How often does that happen?"],
        ["What do you use now to get this done? What do you like about it, and what do you work around?", "Any spreadsheets, scripts or workarounds you rely on?"],
        ["When was the last time you actively looked for a better way?", "What happened?"],
        ["What does this cost you today, in money or time?", "How did you decide it was worth it, or not?"],
        ["If this problem disappeared tomorrow, what would change in your week?", "Is there anything we didn't cover that matters?"]
      ],
      byType: {
        saas:        ["Who else on your team is involved in this job, and what do they care about?", "Who notices when it goes wrong?"],
        consumer:    ["Where were you, and what were you using, the last time this came up?", "What else were you doing at the time?"],
        marketplace: ["The last time, how did you find the person or thing you needed?", "What did you check before you trusted them?"],
        devtool:     ["Walk me through how this fits into your build, deploy or review workflow.", "Where do you switch between tools?"],
        ecommerce:   ["Tell me about the last time you bought something for this. How did you choose where to buy?", "What did you check before you paid?"],
        other:       ["Who else was involved, and what did they care about?", "Who notices when it goes wrong?"]
      },
      tips: [
        "Don't pitch the idea you have in mind. Once people know what you want to hear, they'll often say it.",
        "Look for workarounds: spreadsheets, scripts, copy and paste. They show where the pain is strong enough to act on.",
        "When someone asks for a feature, ask what they would do with it. The goal behind the request is the insight."
      ]
    },
    pricing: {
      label: "Pricing",
      desc: "How customers judge value and cost, based on what they actually paid and decided. Talk to people who bought, didn't buy, or downgraded.",
      episode: "decided whether to pay for {P}",
      core: [
        ["Before {P}, how were you solving this problem, and what did it cost you in money or time?", "What else were you paying for in this area?"],
        ["How did you decide whether {P} was worth paying for?", "What did you compare it against?"],
        ["When you looked at the pricing, what did you look at first?", "What made you hesitate?"],
        ["What part of {P} would you be most upset to lose?", "What part could you live without?"],
        ["Tell me about the last time you paid for {P}. How did it go?", "Was anything unclear?"],
        ["Have you ever downgraded or cancelled something like this because of price? What happened?", "What did you do instead?"],
        ["Is there anything about how {P} charges that you would change?", "What makes you say that?"]
      ],
      byType: {
        saas:        ["How does the budget for a tool like this get approved where you work?", "Who else has to agree?"],
        consumer:    ["How do you usually decide whether an app is worth paying for?", "What was the last app you paid for, and why?"],
        marketplace: ["Tell me about the last fee you paid on {P}. How did you think about it?", "How does it compare with what you pay elsewhere?"],
        devtool:     ["How was the decision to pay for {P} made: by you, your team, or someone else?", "What did you need to show them?"],
        ecommerce:   ["Tell me about the last time you compared prices before buying from {P}.", "What else did you look at besides the price?"],
        other:       ["Who decides whether to pay for something like {P}?", "What did they need to see?"]
      },
      tips: [
        "Don't ask \"How much would you pay?\" People guess low on hypothetical prices. Ask what they pay today and how they decided.",
        "Listen for the unit of value people use: per seat, per order, per project, per month.",
        "Find out who signs off on the purchase. The user and the buyer are often different people."
      ]
    }
  };

  function clean(s) { return (s || "").replace(/\s+/g, " ").trim().slice(0, 60); }

  function build(goalKey, typeKey, name) {
    var g = GOALS[goalKey] || GOALS.churn;
    var t = TYPES[typeKey] || TYPES.other;
    var P = clean(name) || t.P;
    function f(s) {
      s = s.replace(/\{P\}/g, P).replace(/\{JOIN\}/g, t.JOIN).replace(/\{LEAVE\}/g, t.LEAVE);
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
    var items = g.core.slice(0, 3).concat([g.byType[typeKey] || g.byType.other], g.core.slice(3));
    return {
      title: g.label + " interview guide: " + (clean(name) ? clean(name) + " (" + t.label + ")" : t.label),
      welcome: "Thanks for talking with me. This is a short conversation about a recent time you " +
        f(g.episode).replace(/^./, function (c) { return c.toLowerCase(); }) +
        ". It is not a sales call, and there are no right or wrong answers.",
      questions: items.map(function (q) { return { q: f(q[0]), probe: f(q[1]) }; }),
      close: "Thank you. That's everything I wanted to ask.",
      tips: g.tips
    };
  }

  // Custom guide from URL params, e.g. an industry page deep link:
  // ?guide=<Title>&q=<question>&q=<question>... Questions are kept exactly as given (max 12, 300 chars each).
  function fromParams(search) {
    var p = new URLSearchParams(search || "");
    var qs = p.getAll("q").map(function (x) { return x.replace(/\s+/g, " ").trim().slice(0, 300); }).filter(Boolean).slice(0, 12);
    var title = (p.get("guide") || "").replace(/\s+/g, " ").trim().slice(0, 120);
    var out = { goal: GOALS[p.get("goal")] ? p.get("goal") : null, type: TYPES[p.get("type")] ? p.get("type") : null, name: clean(p.get("name") || "") };
    if (qs.length) out.custom = {
      title: title || "Customer interview guide",
      welcome: "Thanks for talking with me. This is a short conversation about your recent experience. It is not a sales call, and there are no right or wrong answers.",
      questions: qs.map(function (q) { return { q: q, probe: "" }; }),
      close: "Thank you. That's everything I wanted to ask.",
      tips: []
    };
    return out;
  }

  function toMarkdown(s, cta) {
    var L = ["# " + s.title, "", "**Welcome (say this):** " + s.welcome, "", "## Questions", ""];
    s.questions.forEach(function (x, i) {
      L.push((i + 1) + ". " + x.q);
      if (x.probe) L.push("   - Follow-up if the answer is short: " + x.probe);
    });
    L.push("", "**Close:** " + s.close);
    if (s.tips.length) { L.push("", "## Tips", ""); s.tips.forEach(function (t) { L.push("- " + t); }); }
    L.push("", "Run it as a voice interview with Frank: " + cta);
    return L.join("\n");
  }

  return { TYPES: TYPES, GOALS: GOALS, build: build, toMarkdown: toMarkdown, fromParams: fromParams };
})();

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

// Customer interview guide generator embed UI. Questions come from GUIDE (guide-core.js), unchanged from the live tool.
var GG_CSS = [
  ".fe .probe{display:block;color:var(--muted);font-size:.95em;}",
  ".fe .say{background:var(--soft);border-left:3px solid var(--accent);padding:8px 12px;border-radius:4px;}",
  ".fe .guide h3.title{font-size:1.1em;margin:0 0 8px;}"
].join("");

function ggHTML(s) {
  return "<div class=\"guide\"><h3 class=\"title\">" + feEsc(s.title) + "</h3>" +
    "<p class=\"say\"><strong>Welcome (say this):</strong> " + feEsc(s.welcome) + "</p>" +
    "<ol>" + s.questions.map(function (x) {
      return "<li>" + feEsc(x.q) + (x.probe ? "<span class=\"probe\">Follow-up if the answer is short: " + feEsc(x.probe) + "</span>" : "") + "</li>";
    }).join("") + "</ol>" +
    "<p><strong>Close:</strong> " + feEsc(s.close) + "</p>" +
    (s.tips.length ? "<h3>Tips</h3><ul>" + s.tips.map(function (t) { return "<li>" + feEsc(t) + "</li>"; }).join("") + "</ul>" : "") + "</div>";
}

feBoot("interview-guide-generator", function (box, el) {
  var id = feUid("gg");
  var st = document.createElement("style"); st.textContent = GG_CSS; box.parentNode.insertBefore(st, box);
  var cta = feLink("guide-generator", feOpt(el, "source"));
  function opts(map, sel) {
    return Object.keys(map).map(function (k) { return "<option value=\"" + k + "\"" + (k === sel ? " selected" : "") + ">" + feEsc(map[k].label) + "</option>"; }).join("");
  }
  var g0 = GUIDE.GOALS[feOpt(el, "goal")] ? feOpt(el, "goal") : "churn";
  var t0 = GUIDE.TYPES[feOpt(el, "type")] ? feOpt(el, "type") : "saas";
  box.setAttribute("role", "group"); box.setAttribute("aria-labelledby", id + "-t");
  box.innerHTML =
    "<h2 id=\"" + id + "-t\">Customer interview guide generator</h2>" +
    "<p class=\"lede\">Pick what you want to learn and what you sell. You get 8 open questions about real past events, each with a follow-up, plus a welcome line and tips.</p>" +
    "<form autocomplete=\"off\"><div class=\"grid\">" +
    "<div class=\"field\"><label for=\"" + id + "-goal\">Interview goal</label><select id=\"" + id + "-goal\">" + opts(GUIDE.GOALS, g0) + "</select></div>" +
    "<div class=\"field\"><label for=\"" + id + "-type\">Product type</label><select id=\"" + id + "-type\">" + opts(GUIDE.TYPES, t0) + "</select></div></div>" +
    "<div class=\"field\"><label for=\"" + id + "-name\">Product name <span class=\"hint\">(optional)</span></label><input id=\"" + id + "-name\" type=\"text\" maxlength=\"60\"></div>" +
    "<div class=\"actions\"><button class=\"primary\" type=\"submit\">Build my guide</button>" +
    "<button class=\"ghost\" type=\"button\" data-act=\"copy\">Copy as Markdown</button>" +
    "<button class=\"ghost\" type=\"button\" data-act=\"dl\">Download .md</button>" +
    "<span class=\"status\" role=\"status\" aria-live=\"polite\"></span></div></form>" +
    "<section class=\"out\"></section>" +
    feCredit("guide-generator", el);
  var goal = box.querySelector("#" + id + "-goal"), type = box.querySelector("#" + id + "-type"), name = box.querySelector("#" + id + "-name");
  var out = box.querySelector(".out"), status = box.querySelector(".status"), current;
  function render() { current = GUIDE.build(goal.value, type.value, name.value); out.innerHTML = ggHTML(current); status.textContent = ""; }
  function md() { return GUIDE.toMarkdown(current, cta); }
  box.querySelector("form").addEventListener("submit", function (e) { e.preventDefault(); render(); status.textContent = "Guide updated"; });
  goal.addEventListener("change", render); type.addEventListener("change", render); name.addEventListener("input", render);
  box.querySelector("[data-act=copy]").addEventListener("click", function () { feCopy(md(), status); });
  box.querySelector("[data-act=dl]").addEventListener("click", function () {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([md()], { type: "text/markdown;charset=utf-8" }));
    a.download = "customer-interview-guide-" + goal.value + "-" + type.value + ".md";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    status.textContent = "Downloaded";
  });
  render();
});

})();
