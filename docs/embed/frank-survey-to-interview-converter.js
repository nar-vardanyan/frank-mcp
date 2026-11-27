/*! Frank AI Researcher embed: Survey to interview question converter v0.1.0 | MIT, Prelaunch Group, Inc. | no tracking, no network calls */
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
feBoot("survey-to-interview-converter", function (FE_BOX, el) {
  FE_BOX.innerHTML = "<h2 class=\"fe-title\">Survey to Interview Question Converter</h2>\n    <p class=\"lede\">Paste the questions from your survey. Each one comes back as an open, non-leading interview question about something that really happened, with a follow-up and a one-line reason for the change. Free, no login, and rule-based: it runs in your browser and nothing you paste is sent anywhere.</p>\n\n    <form class=\"gen\" id=\"gen\" autocomplete=\"off\">\n      <div class=\"field\">\n        <label for=\"survey\">Survey questions <span class=\"hint\">(one per line; numbers, bullets and answer options are fine; up to 20 questions)</span></label>\n        <textarea id=\"survey\" name=\"survey\" spellcheck=\"true\">1. How likely are you to recommend Acme to a friend or colleague?\n2. On a scale of 1-10, how satisfied are you with our onboarding?\n3. Would you use a feature that lets you export reports to Excel?\n4. How much would you pay for the Pro plan?\n5. Do you use the mobile app every day?\n6. Which of the following features do you use most?\na) Reports\nb) Dashboards\nc) Alerts\n7. How easy and fast was checkout?\n8. Why did you cancel your subscription?</textarea>\n      </div>\n      <div class=\"field\">\n        <label for=\"pname\">Product name <span class=\"hint\">(optional, used when a question doesn't name one)</span></label>\n        <input id=\"pname\" name=\"pname\" maxlength=\"60\" placeholder=\"e.g. Acme\">\n      </div>\n      <div class=\"actions\">\n        <button class=\"btn btn-primary\" type=\"submit\">Convert to interview questions</button>\n        <button class=\"btn btn-ghost\" type=\"button\" id=\"clear\">Clear</button>\n      </div>\n    </form>\n\n    <section id=\"result\" aria-labelledby=\"result-title\">\n      <h2 id=\"result-title\" style=\"border:0;margin:8px 0 4px;font-size:1.1em;color:var(--muted)\">Your interview questions</h2>\n      <div class=\"actions js-only\" role=\"group\" aria-label=\"Result actions\">\n        <button class=\"btn btn-ghost\" type=\"button\" id=\"copy\">Copy</button>\n        <button class=\"btn btn-ghost\" type=\"button\" id=\"dl-md\">Download .md</button>\n        <button class=\"btn btn-ghost\" type=\"button\" id=\"dl-txt\">Download .txt</button>\n        <span class=\"status\" id=\"status\" role=\"status\" aria-live=\"polite\"></span>\n      </div>\n      <article class=\"guide\" id=\"guide\" aria-live=\"polite\">\n        <h2>Voice interview questions</h2><p class=\"say\"><strong>Welcome (say this):</strong> Thanks for talking with me. This is a short conversation about your recent experience. It is not a sales call, and there are no right or wrong answers.</p><ol><li>Tell me about the last time you mentioned Acme to someone, or chose not to. What did you say?<span class=\"probe\">Follow-up if the answer is short: What made you bring it up, or hold back?</span><span class=\"why\"><span class=\"tag\">NPS</span>Survey: How likely are you to recommend Acme to a friend or colleague?<br>Why: NPS-style score: a number says how much, not why. Ask about a real time they talked about it.</span></li><li>Walk me through the last time you dealt with our onboarding. What went well, and what got in the way?<span class=\"probe\">Follow-up if the answer is short: What did you do next?</span><span class=\"why\"><span class=\"tag\">rating</span>Survey: On a scale of 1-10, how satisfied are you with our onboarding?<br>Why: Rating or agree/disagree scale: a score says how much, not why. Ask about a real time.</span></li><li>Tell me about the last time you needed to export reports to Excel. What did you do?<span class=\"probe\">Follow-up if the answer is short: What did you try after that?</span><span class=\"why\"><span class=\"tag\">hypothetical</span>Survey: Would you use a feature that lets you export reports to Excel?<br>Why: Hypothetical or future: people are poor at predicting what they would do. Ask about the last time it really came up.</span></li><li>Tell me about the last time you paid for something to solve this problem. How did you decide it was worth it?<span class=\"probe\">Follow-up if the answer is short: What else were you paying for in this area?</span><span class=\"why\"><span class=\"tag\">hypothetical price</span>Survey: How much would you pay for the Pro plan?<br>Why: Hypothetical price: people guess low on prices they have not paid. Ask what they paid and how they decided.</span></li><li>Tell me about the last time you used the mobile app. What happened?<span class=\"probe\">Follow-up if the answer is short: What did you do next?</span><span class=\"why\"><span class=\"tag\">yes/no</span>Survey: Do you use the mobile app every day?<br>Why: Yes/no question: it gets a one-word answer. Ask for the story behind it.</span></li><li>Walk me through the last time you used the product. What were you trying to get done?<span class=\"probe\">Follow-up if the answer is short: What did you try first?</span><span class=\"why\"><span class=\"tag\">multiple choice</span>Survey: Which of the following features do you use most? [Reports / Dashboards / Alerts]<br>Why: Multiple choice: the options put words in people's mouths. Let them describe it in their own words.</span></li><li>Walk me through the last time you dealt with checkout. What went well, and what got in the way?<span class=\"probe\">Follow-up if the answer is short: What did you do next?</span><span class=\"why\"><span class=\"tag\">double-barrelled, rating</span>Survey: How easy and fast was checkout?<br>Why: Double-barrelled: it asked about two things at once; ask about one episode and let them cover both. Rating or agree/disagree scale: a score says how much, not why. Ask about a real time.</span></li><li>Walk me through what was happening the last time you cancelled your subscription.<span class=\"probe\">Follow-up if the answer is short: What happened right before that?</span><span class=\"why\"><span class=\"tag\">why</span>Survey: Why did you cancel your subscription?<br>Why: &quot;Why&quot; can make people defend themselves. Ask what was happening instead.</span></li></ol><p><strong>Close:</strong> Thank you. That's everything I wanted to ask.</p>\n      </article>\n    </section>" + feCredit("survey-to-interview-converter", el);
  var FE_ROOT = FE_BOX.getRootNode();
  var FE_CTA = feLink("survey-to-interview-converter", feOpt(el, "source"));
  (function (FE_ROOT, FE_BOX, FE_CTA) {

var CONVERT = (function () {
  // Deterministic survey-to-interview rewriter. Rules follow the agent skill's guide-and-probes.md
  // (ask about a concrete recent episode, no hypotheticals, no hypothetical prices, one thing at a time,
  // no hidden answers) and the frank-mcp customer interview questions template.
  var MAX_IN = 20;

  var PAST = {
    use: "used", find: "found", buy: "bought", pay: "paid", choose: "chose", try: "tried", need: "needed",
    want: "wanted", like: "liked", enjoy: "enjoyed", recommend: "recommended", get: "got", see: "saw",
    read: "read", open: "opened", cancel: "cancelled", switch: "switched", contact: "contacted",
    visit: "visited", order: "ordered", share: "shared", invite: "invited", install: "installed",
    upgrade: "upgraded", downgrade: "downgraded", renew: "renewed", have: "had", go: "went", make: "made",
    think: "thought", feel: "felt", know: "knew", understand: "understood", complete: "completed",
    return: "returned", download: "downloaded", check: "checked", compare: "compared", start: "started",
    stop: "stopped", call: "called", email: "emailed", look: "looked", write: "wrote", send: "sent",
    take: "took", give: "gave", come: "came", leave: "left", sign: "signed", log: "logged", set: "set",
    book: "booked", schedule: "scheduled", search: "searched", browse: "browsed", watch: "watched",
    listen: "listened", play: "played", create: "created", build: "built", export: "exported",
    import: "imported", connect: "connected", integrate: "integrated", invite: "invited", ask: "asked",
    reach: "reached", hear: "heard", learn: "learned", discover: "discovered", purchase: "purchased",
    subscribe: "subscribed", unsubscribe: "unsubscribed", delete: "deleted", uninstall: "uninstalled",
    add: "added", remove: "removed", change: "changed", update: "updated", manage: "managed", track: "tracked",
    plan: "planned", prepare: "prepared", run: "ran", hire: "hired", deal: "dealt", struggle: "struggled",
    experience: "experienced", encounter: "encountered", notice: "noticed", visit_: "visited", rely: "relied",
    spend: "spent", save: "saved", move: "moved", miss: "missed", complain: "complained", apply: "applied",
    navigate: "navigated", onboard: "onboarded", configure: "configured", test: "tested", review: "reviewed"
  };
  var PP = { used: "use", tried: "try", bought: "buy", paid: "pay", cancelled: "cancel", canceled: "cancel",
    switched: "switch", recommended: "recommend", contacted: "contact", ordered: "order", shared: "share",
    installed: "install", upgraded: "upgrade", downgraded: "downgrade", renewed: "renew", had: "have",
    been: "go", made: "make", thought: "think", felt: "feel", known: "know", completed: "complete",
    returned: "return", downloaded: "download", checked: "check", compared: "compare", started: "start",
    stopped: "stop", called: "call", emailed: "email", looked: "look", written: "write", sent: "send",
    taken: "take", given: "give", left: "leave", signed: "sign", logged: "log", booked: "book",
    searched: "search", created: "create", built: "build", exported: "export", imported: "import",
    connected: "connect", asked: "ask", heard: "hear", purchased: "purchase", subscribed: "subscribe",
    deleted: "delete", uninstalled: "uninstall", experienced: "experience", encountered: "encounter",
    noticed: "notice", considered: "consider", found: "find", got: "get", gotten: "get", seen: "see",
    visited: "visit", needed: "need", wanted: "want", liked: "like", enjoyed: "enjoy", reached: "reach",
    struggled: "struggle", spent: "spend", missed: "miss", complained: "complain", applied: "apply" };

  function stripLead(s) {
    return s.replace(/^\s*(?:q(?:uestion)?\s*\d+\s*[:.)-]|\d+\s*[.):-]|[-*\u2022\u25CF\u25E6\u2013\u2014>]+)\s*/i, "").trim();
  }
  function isOption(s) {
    return /^\s*(?:[a-h][.)]\s|\(\s?[a-h]\s?\)\s|\[\s?[x ]?\s?\]|\(\s?\)|[\u2610\u2611\u25CB\u25EF\u25A1])/i.test(s);
  }
  function clean(s) { return s.replace(/\s+/g, " ").trim(); }

  function parse(text) {
    var lines = String(text || "").split(/\r?\n/);
    var items = [];
    lines.forEach(function (raw) {
      if (!raw.trim()) return;
      var opt = isOption(raw);
      var s = clean(stripLead(raw).replace(/^(?:[a-h][.)]|\(\s?[a-h]\s?\)|\[\s?[x ]?\s?\]|\(\s?\)|[\u2610\u2611\u25CB\u25EF\u25A1])\s*/i, ""));
      if (!s) return;
      var prev = items[items.length - 1];
      var shortNoQ = s.indexOf("?") < 0 && s.split(" ").length <= 4 && !/^(tell|walk|describe|explain|rate|please)\b/i.test(s);
      if (prev && (opt || (shortNoQ && prev.text.indexOf("?") >= 0))) { prev.options.push(s); return; }
      items.push({ text: s, options: [] });
    });
    return items;
  }

  // Split a double-barrelled question into parts. Returns null when it is a single question.
  function splitDouble(s) {
    var qs = s.split(/\?\s+(?=\S)/).map(function (x) { return clean(x.replace(/\?+$/, "")); }).filter(Boolean);
    if (qs.length > 1) return qs.map(function (x) { return x + "?"; });
    var m = s.match(/^(.*?\S)\s*(?:,\s*)?\b(?:and|or)\s+((?:how|what|why|when|where|which|who|do|does|did|is|are|was|were|would|will|could|can|have|has)\b.*)$/i);
    if (m && m[1].split(" ").length >= 3) return [clean(m[1].replace(/[,;]$/, "")) + "?", m[2].charAt(0).toUpperCase() + m[2].slice(1)];
    return null;
  }
  function adjPair(s) {
    if (/\b(\w+ful|easy|clear|fast|simple|quick|fair|reliable|intuitive)\s+and\s+(\w+ful|easy|clear|fast|simple|quick|fair|reliable|intuitive|affordable)\b/i.test(s)) return true;
    return /\bhow\s+(\w+)\s+and\s+(\w+)\s+(?:was|is|were|are|did|do)\b/i.test(s) ||
      /\b(satisf\w*|happy|easy|clear|useful|fast)\s+(?:with|was|is)?\s*(?:the\s+)?\w+\s+and\s+(?:the\s+)?\w+/i.test(s) && /\b(rate|satisf|scale|how)\b/i.test(s);
  }

  function lower1(s) { return s.charAt(0).toLowerCase() + s.slice(1); }
  function cap1(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function trimQ(s) {
    return clean(s.replace(/\(?\s*(?:on\s+)?a\s+scale\s+(?:of|from)\s+\d+\s*(?:-|to|\u2013)\s*\d+\s*\)?/ig, "")
      .replace(/\(\s*\d+\s*(?:-|to|\u2013)\s*\d+[^)]*\)/g, "").replace(/\bfrom\s+\d+\s*(?:-|to)\s*\d+\b/ig, "")
      .replace(/[?.!:]+\s*$/, "").replace(/\s*,\s*$/, "").replace(/^[\s,;:.\-]+/, ""));
  }
  function you2(s) { // turn the respondent's object back into second person for the interviewer
    return s.replace(/\byour\b/ig, "your").replace(/\byourself\b/ig, "yourself");
  }
  // "use the app every day" -> "used the app"; unknown verb -> "needed to <verb> ..."
  function pastClause(vp) {
    vp = clean(vp.replace(/\b(every day|daily|weekly|monthly|regularly|often|usually|always|ever|currently|now|today|frequently|in the future|next time)\b/ig, "")).replace(/\s+([,.])/g, "$1");
    var w = vp.split(" "), v = w[0].toLowerCase();
    if (PAST[v]) { w[0] = PAST[v]; return w.join(" "); }
    if (PP[v]) { w[0] = v; return w.join(" "); }
    return "needed to " + vp;
  }

  function convertOne(q, P, opts) {
    var s = clean(q), t = trimQ(s), L = t.toLowerCase(), m;
    var out = function (type, question, probe, why) { return { type: type, q: question, probe: probe, why: why }; };

    // Already open and about a real past event: keep.
    if (/^(tell me about|walk me through|describe (the|a) (last|recent)|what happened|how did you|what did you|when did you|who (else )?(was|were)|what was going on)\b/i.test(t) && !/\bwould\b|\bif\b/i.test(L))
      return out("open", cap1(t) + (/[.?]$/.test(s) ? s.slice(-1) : "?"), "What happened next?", "Kept: already open and about something that happened.");

    // NPS
    if (/recommend/.test(L) && /(likely|would you|how probable)/.test(L)) {
      m = t.match(/recommend\s+(.+?)\s+to\s+(?:a\s+)?(?:friend|colleague|someone|others|people)/i);
      var thing = m ? you2(m[1]) : P;
      return out("NPS", "Tell me about the last time you mentioned " + thing + " to someone, or chose not to. What did you say?",
        "What made you bring it up, or hold back?", "NPS-style score: a number says how much, not why. Ask about a real time they talked about it.");
    }
    // Hypothetical price
    if (/(how much would you pay|willing to pay|would you pay|what would you pay|what (price|amount) would|how much (should|would) (it|this|we) cost|fair price)/.test(L))
      return out("hypothetical price", "Tell me about the last time you paid for something to solve this problem. How did you decide it was worth it?",
        "What else were you paying for in this area?", "Hypothetical price: people guess low on prices they have not paid. Ask what they paid and how they decided.");
    // Leading
    if (/^(don't|doesn't|didn't|isn't|aren't|wasn't|wouldn't|won't|shouldn't)\b|\bagree that\b|how (great|amazing|awesome|much did you (love|like|enjoy))|how frustrating|how annoying|wouldn't you/.test(L)) {
      m = t.match(/(?:think|feel|believe|agree)\s+(?:that\s+)?(.+?)\s+(?:is|was|are|were|has|have|makes?|helps?)\b/i) || t.match(/(?:with|about|of|using|use)\s+(.+)$/i);
      return out("leading", "Walk me through the last time you used " + (m ? you2(m[1]) : P) + ". How did it go?",
        "What did you do next?", "Leading: the wording suggested the answer. Ask what happened and let them judge it.");
    }
    // "How would you describe X": opinion
    if ((m = t.match(/^how would you (?:describe|summari[sz]e|explain)\s+(.+)$/i)))
      return out("opinion", "Tell me about the last time you used " + you2(m[1]) + ". What stood out to you?",
        "How would you put that to a colleague?", "General description: people give tidy summaries. A recent example gives you the detail.");
    // Hypothetical or future
    if (/^(would|will|could|might|if)\b|\bin the future\b|\bwould you (like|want|use|buy|consider|be)\b|\binterested in\b|\bwish\b|\bwhat would (you|make)\b|\bhow would you\b/.test(L)) {
      m = t.match(/^if\s+(?:we|you|there|they)\s+(?:added|had|built|offered|made|launched|released|were to add|could add|add|was|were)\s+(.+?)(?:,|\s+would\b|\s+will\b|\s+do\b|$)/i) ||
          t.match(/\b(?:use|buy|try|want|like|consider|pay for|be interested in|interested in|see|have|get|switch to)\s+(.+)$/i);
      var topic = m ? you2(m[1]) : null;
      if (topic) topic = topic.replace(/^(?:to\s+)?(?:a|an)\s+feature\s+(?:that|which)\s+(?:lets you|allows you to|helps you)\s+/i, "");
      var first = topic ? topic.split(" ")[0].toLowerCase() : "";
      var body = !topic ? "ran into the problem this question is about"
        : (PAST[first] ? "needed to " + topic : "needed something like " + topic);
      if (/what would you (improve|change)|what would make/.test(L))
        return out("hypothetical", "Tell me about the last time you used " + P + ". What, if anything, slowed you down?",
          "What did you do about it?", "Hypothetical or wish list: people are poor at predicting what they would do. Ask about the last real use.");
      return out("hypothetical", "Tell me about the last time you " + body + ". What did you do?",
        "What did you try after that?", "Hypothetical or future: people are poor at predicting what they would do. Ask about the last time it really came up.");
    }
    // Rating / Likert / satisfaction / ease
    if (/\b(rate|rating|scale|stars?|score)\b|\b(satisf|dissatisf|agree|disagree)|^i (found|find|feel|think|am|was)\b.*\b(easy|hard|difficult|useful|helpful|clear|confusing|simple|valuable|fast|slow|good|great|satisfied)\b|^how (easy|hard|difficult|simple|clear|useful|helpful|likely|important|good|bad|happy)\b|^(is|was|are|were) (it|the|this|that|your|our)\b.*\b(easy|hard|difficult|clear|useful|helpful|good|fair|confusing|fast|slow|worth)\b/.test(L)) {
      m = t.match(/^how (?:easy|hard|difficult|simple) (?:was|is) it to\s+(.+)$/i) || t.match(/^(?:is|was) it (?:easy|hard|difficult|simple) to\s+(.+)$/i);
      if (m) return out("rating", "Walk me through the last time you " + pastClause(you2(m[1])) + ". What happened at each step?",
        "Which part took the longest?", "Rating scale: a score says how much, not why. Ask them to walk through a real time.");
      m = t.match(/(?:satisfied|happy|pleased|dissatisfied|unhappy)\s+(?:are you\s+|were you\s+)?with\s+(.+)$/i) ||
          t.match(/\brate\s+(?:your\s+experience\s+(?:with|of)\s+)?(.+)$/i) || t.match(/\bagree\b[^:]*:\s*(.+)$/i) ||
          t.match(/^how (?:\w+(?:\s+(?:and|or)\s+\w+)?)\s+(?:was|is|were|are)\s+(.+)$/i) ||
          t.match(/^(?:is|was|are|were)\s+(.+?)\s+(?:easy|hard|difficult|clear|useful|helpful|good|fair|confusing|fast|slow|worth)\b/i) ||
          t.match(/^i\s+(?:found|find|feel|think)\s+(?:that\s+)?(.+?)\s+(?:is\s+|was\s+)?(?:easy|hard|difficult|useful|helpful|clear|confusing|simple|valuable|fast|slow|good|great)\b/i);
      var top = m ? you2(trimQ(m[1])).replace(/^(?:the\s+)?(?:onboarding|setup|checkout)$/i, function (x) { return x; }) : P;
      if (/\b(price|pricing|cost|plan|fee|subscription)\b/i.test(top) || /\b(price|pricing)\b.*\b(fair|worth|clear)\b/i.test(L))
        return out("rating", "How did you decide whether " + P + " was worth paying for?", "What did you compare it against?",
          "Price judged on a scale or yes/no: ask how they actually decided it was worth paying for.");
      if (/^(i|we)\b/i.test(top)) top = P;
      return out("rating", "Walk me through the last time you dealt with " + top + ". What went well, and what got in the way?",
        "What did you do next?", "Rating or agree/disagree scale: a score says how much, not why. Ask about a real time.");
    }
    // Demographic / background
    if (/^(what is|what's|which|how many|how old|where)\b.*\b(your (age|gender|role|job title|title|industry|country|company size|income|team size)|employees|old are you|do you live|are you based)\b/.test(L) || /^(age|gender|role|job title|company size|industry|country)\b/.test(L))
      return out("background", "To start, tell me a bit about your role and what a normal week looks like.",
        "Where does " + P + " fit into that week, if at all?", "Background fact: ask once as a warm-up, or take it from data you already have.");
    // Frequency
    if (/^how (often|frequently|many times|regularly)\b/.test(L)) {
      m = t.match(/^how (?:often|frequently|many times|regularly)\s+(?:do|did|have)\s+you\s+(.+)$/i);
      var vp = m ? pastClause(you2(m[1])) : "used " + P;
      return out("frequency", "Tell me about the last time you " + vp + ". What led up to it?",
        "How often does that come up for you?", "Frequency question: an estimate is a guess. The last real time gives you the context.");
    }
    // Multiple choice
    if (opts.length || /\b(which of (the following|these)|select (one|all)|choose (one|all)|check all|pick (one|all))\b/.test(L) || /^which\b/.test(L)) {
      m = t.match(/^which\s+(?:of the following\s+)?(?:\w+\s+){0,3}?(?:do|did)\s+you\s+(.+)$/i);
      if (m && pastClause(you2(m[1].replace(/\b(most|least|the most|best)\b/ig, ""))).split(" ").length < 2) m = null;
      var mc = m ? "Walk me through the last time you " + pastClause(you2(m[1].replace(/\b(most|least|the most|best)\b/ig, ""))) + ". What were you trying to get done?"
        : "Walk me through the last time you used " + P + ". What were you trying to get done?";
      return out("multiple choice", clean(mc), "What did you try first?",
        "Multiple choice: the options put words in people's mouths. Let them describe it in their own words.");
    }
    // Why
    if (/^why\b/.test(L)) {
      m = t.match(/^why\s+(?:did|do|have|would)\s+you\s+(.+)$/i);
      return out("why", "Walk me through what was happening the last time you " + (m ? pastClause(you2(m[1])) : "used " + P) + ".",
        "What happened right before that?", "\"Why\" can make people defend themselves. Ask what was happening instead.");
    }
    // Yes/no closed
    if (/^(is|was|are|were|do|does|did)\b/.test(L) && /\b(price|pricing|cost|fair|worth|expensive|cheap)\b/.test(L))
      return out("yes/no", "How did you decide whether " + P + " was worth paying for?", "What did you compare it against?",
        "Yes/no about price: ask how they actually decided it was worth paying for.");
    if (/^(do|does|did|are|is|was|were|have|has|had|can|could|should|shall)\b/.test(L)) {
      m = t.match(/^(?:do|did|have|had|can|could)\s+you\s+(?:ever\s+)?(.+)$/i);
      if (m && !/^(think|feel|believe|like|prefer)\b/i.test(m[1]))
        return out("yes/no", "Tell me about the last time you " + pastClause(you2(m[1])) + ". What happened?",
          "What did you do next?", "Yes/no question: it gets a one-word answer. Ask for the story behind it.");
      m = t.match(/\b(?:about|with|of|using|use)\s+(.+)$/i);
      return out("yes/no", "Tell me about the last time you used " + (m ? you2(m[1]) : P) + ". What stood out to you?",
        "Can you give me an example?", "Yes/no or opinion question: it gets a one-word answer. Ask about a real time.");
    }
    // Opinion about the product
    if (/^what (do|did) you (think|like|dislike|love|hate|feel)\b/.test(L)) {
      m = t.match(/\babout\s+(.+)$/i);
      return out("opinion", "Tell me about the last time you used " + (m ? you2(m[1]) : P) + ". What stood out to you?",
        "Can you give me an example?", "General opinion: people give tidy summaries. A recent example gives you the detail.");
    }
    return out("open", cap1(t) + (/[.?]$/.test(s) ? s.slice(-1) : "?"), "Can you give me a recent example?", "Kept: open as written. If you can, anchor it to a recent event.");
  }

  function convert(text, productName) {
    var P = clean(productName || "").slice(0, 60) || "the product";
    var items = parse(text), notes = [];
    if (items.length > MAX_IN) { notes.push("Only the first " + MAX_IN + " of " + items.length + " questions were converted. Interviews work best with 6 to 10."); items = items.slice(0, MAX_IN); }
    var rows = [], seen = {};
    items.forEach(function (it) {
      var parts = splitDouble(it.text), dbl = !!parts || adjPair(it.text);
      (parts || [it.text]).forEach(function (p) {
        var r = convertOne(p, P, it.options);
        if (dbl) { r.type = "double-barrelled, " + r.type; r.why = (parts ? "Double-barrelled: split into separate questions. " : "Double-barrelled: it asked about two things at once; ask about one episode and let them cover both. ") + r.why; }
        r.original = it.text + (it.options.length ? " [" + it.options.join(" / ") + "]" : "");
        r.q = r.q.replace(/\bthe last time you ((?:\w+ ){1,3}?)(your|the|a) first\b/i, "the time you $1$2 first").replace(/\s+([,.?])/g, "$1");
        var key = r.q.toLowerCase();
        if (seen[key]) { seen[key].merged = (seen[key].merged || 0) + 1; return; }
        seen[key] = r; rows.push(r);
      });
    });
    rows.forEach(function (r) { if (r.merged) r.why += " (" + r.merged + " similar question" + (r.merged > 1 ? "s" : "") + " merged into this one.)"; });
    return { product: P, rows: rows, notes: notes, inputCount: items.length };
  }

  function toMarkdown(res, cta) {
    var L = ["# Voice interview guide (converted from a survey)", "", "**Welcome (say this):** Thanks for talking with me. This is a short conversation about your recent experience. It is not a sales call, and there are no right or wrong answers.", "", "## Questions", ""];
    res.rows.forEach(function (r, i) {
      L.push((i + 1) + ". " + r.q, "   - Follow-up if the answer is short: " + r.probe, "   - Survey question: " + r.original, "   - Why it changed: " + r.why);
    });
    if (res.notes.length) { L.push(""); res.notes.forEach(function (n) { L.push("Note: " + n); }); }
    L.push("", "**Close:** Thank you. That's everything I wanted to ask.", "", "Run it as a voice interview with Frank: " + cta);
    return L.join("\n");
  }

  return { convert: convert, toMarkdown: toMarkdown, parse: parse, MAX_IN: MAX_IN };
})();

(function () {
  FE_BOX.className += " has-js";
  var CTA = FE_CTA;
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function $(id) { return FE_ROOT.getElementById(id); }
  var render_ = (function resultHTML(res, esc) {
  if (!res.rows.length) return "<p class=\"note\">Paste at least one survey question above, one per line, then press Convert.</p>";
  return "<h2>Voice interview questions</h2>" +
    "<p class=\"say\"><strong>Welcome (say this):</strong> Thanks for talking with me. This is a short conversation about your recent experience. It is not a sales call, and there are no right or wrong answers.</p>" +
    res.notes.map(function (n) { return "<p class=\"note\">" + esc(n) + "</p>"; }).join("") +
    "<ol>" + res.rows.map(function (r) {
      return "<li>" + esc(r.q) +
        "<span class=\"probe\">Follow-up if the answer is short: " + esc(r.probe) + "</span>" +
        "<span class=\"why\"><span class=\"tag\">" + esc(r.type) + "</span>Survey: " + esc(r.original) + "<br>Why: " + esc(r.why) + "</span></li>";
    }).join("") + "</ol>" +
    "<p><strong>Close:</strong> Thank you. That's everything I wanted to ask.</p>";
});
  var current;
  function render() {
    current = CONVERT.convert($("survey").value, $("pname").value);
    $("guide").innerHTML = render_(current, esc);
    $("status").textContent = "";
    var has = current.rows.length > 0;
    ["copy", "dl-md", "dl-txt"].forEach(function (id) { $(id).disabled = !has; });
  }
  $("gen").addEventListener("submit", function (e) { e.preventDefault(); render(); $("result").scrollIntoView({ behavior: "smooth", block: "start" }); });
  $("clear").addEventListener("click", function () { $("survey").value = ""; render(); $("survey").focus(); });
  $("pname").addEventListener("input", render);
  function md() { return CONVERT.toMarkdown(current, CTA); }
  function txt() { return md().replace(/^#+ /gm, "").replace(/\*\*/g, ""); }
  $("copy").addEventListener("click", function () {
    var text = md();
    function ok() { $("status").textContent = "Copied"; }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); ok(); } catch (err) { $("status").textContent = "Select the questions and copy them manually"; }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok, fallback); else fallback();
  });
  function download(body, ext, type) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([body], { type: type + ";charset=utf-8" }));
    a.download = "survey-to-interview-questions." + ext;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    $("status").textContent = "Downloaded";
  }
  $("dl-md").addEventListener("click", function () { download(md(), "md", "text/markdown"); });
  $("dl-txt").addEventListener("click", function () { download(txt(), "txt", "text/plain"); });
  render();
})();

  })(FE_ROOT, FE_BOX, FE_CTA);
}, ":host{all:initial;display:block;}\n  .fe { --ink:#1f2328; --muted:#59636e; --line:#d1d9e0; --soft:#f6f8fa; --accent:#0b6e4f; --accent-dark:#085a40; }\n  .fe, .fe * { box-sizing: border-box; }\n  .fe { margin:0; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif; color:var(--ink); line-height:1.6; background:#fff; }\n  .wrap { max-width: 860px; margin: 0 auto; padding: 24px 20px 64px; }\n  .top { display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; font-size:14px; border-bottom:1px solid var(--line); padding-bottom:12px; }\n  .top a { color:var(--muted); text-decoration:none; }\n  .top a:hover { text-decoration:underline; }\n  h1 { font-size: 2.1em; line-height:1.2; margin: 28px 0 8px; }\n  h2 { font-size: 1.45em; margin: 40px 0 12px; padding-bottom: 6px; border-bottom:1px solid var(--line); }\n  h3 { font-size: 1.1em; margin: 24px 0 8px; }\n  .lede { font-size: 1.1em; color: var(--muted); margin-top:0; }\n  a { color:#0969da; }\n  form.gen { background: var(--soft); border:1px solid var(--line); border-radius:10px; padding:20px; margin: 20px 0; }\n  label { display:block; font-weight:600; font-size:14px; margin-bottom:4px; }\n  .hint { font-weight:400; color:var(--muted); }\n  input, textarea { width:100%; padding:10px 12px; font-size:16px; border:1px solid var(--line); border-radius:6px; background:#fff; color:var(--ink); font-family:inherit; }\n  textarea { min-height: 220px; resize: vertical; line-height:1.5; }\n  .field { margin-bottom: 14px; }\n  input:focus, textarea:focus, .btn:focus { outline: 2px solid #0969da; outline-offset: 2px; }\n  .btn { display:inline-block; border:0; border-radius:6px; padding:11px 18px; font-size:16px; font-weight:600; cursor:pointer; text-decoration:none; }\n  .btn-primary { background:var(--accent); color:#fff; }\n  .btn-primary:hover { background:var(--accent-dark); }\n  .btn-ghost { background:#fff; color:var(--ink); border:1px solid var(--line); }\n  .btn-ghost:hover { background:var(--soft); }\n  .actions { display:flex; gap:10px; flex-wrap:wrap; margin-top:14px; align-items:center; }\n  .guide { border:1px solid var(--line); border-radius:10px; padding: 8px 22px 18px; background:#fff; overflow-wrap:anywhere; }\n  .guide h2 { border:0; margin-top:16px; }\n  .guide ol { padding-left: 22px; }\n  .guide li { margin-bottom: 16px; }\n  .probe { display:block; color: var(--muted); font-size: 0.95em; }\n  .why { display:block; font-size: 0.9em; color: var(--muted); border-left: 3px solid var(--line); padding-left: 10px; margin-top: 4px; }\n  .tag { display:inline-block; font-size: 0.75em; font-weight:600; background:#eaf6f1; color:var(--accent-dark); border-radius: 10px; padding: 0 8px; margin-right: 6px; }\n  .say { background: var(--soft); border-left: 3px solid var(--accent); padding: 10px 14px; border-radius: 4px; }\n  .note { background:#fff8c5; border:1px solid #eac54f; border-radius:6px; padding:8px 12px; }\n  .cta { margin: 22px 0; padding: 18px 20px; border-radius: 10px; background: #eaf6f1; border:1px solid #b7e1cf; }\n  .cta p { margin: 0 0 10px; }\n  .status { color: var(--accent-dark); font-weight:600; font-size:14px; }\n  .js-only { display:none; }\n  .has-js .js-only { display:flex; }\n  table { border-collapse: collapse; width: 100%; font-size: 0.95em; }\n  th, td { border: 1px solid var(--line); padding: 8px 10px; text-align: left; vertical-align: top; }\n  th { background: var(--soft); }\n  .table-wrap { overflow-x: auto; }\n  footer { margin-top: 48px; padding-top: 16px; border-top:1px solid var(--line); color: var(--muted); font-size:14px; }\n  @media (max-width: 640px) { h1 { font-size: 1.7em; } .guide { padding: 6px 14px 14px; } }\n  @media print { form.gen, .cta, .top, .actions, footer, .seo { display:none !important; } }\n  /* chatgpt-cta */ .cta-chatgpt { margin-top:14px; padding-top:12px; border-top:1px solid #b7e1cf; }\n  .cta-chatgpt p { margin:0 0 10px; }\n  .btn-chatgpt { background:#fff; color:var(--accent); border:1px solid var(--accent); white-space:normal; max-width:100%; box-sizing:border-box; }\n  .btn-chatgpt:hover { background:#f6f8fa; }\n  .cta-signup { display:inline-block; margin:10px 0 0; }\n  /* embed-section */ .embed-code { background:var(--soft); border:1px solid var(--line); border-radius:6px; padding:10px 12px; margin:6px 0 8px; overflow-x:auto; white-space:pre-wrap; word-break:break-all; font-size:13px; line-height:1.5; }\n  .embed-copy { font-size:14px; padding:8px 14px; }\n.fe{box-sizing:border-box;max-width:820px;margin:0 auto;padding:18px;border:1px solid var(--line);border-radius:12px;background:#fff;color:var(--ink);text-align:left;overflow-wrap:anywhere;font-size:16px;}.fe .fe-title{font-size:1.4em;line-height:1.25;margin:0 0 6px;padding:0;border:0;}.fe .credit{margin-top:16px;padding-top:10px;border-top:1px solid var(--line);font-size:13px;color:var(--muted);}.fe .credit p{margin:0 0 4px;}.fe .sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}.fe button:focus-visible,.fe a:focus-visible{outline:2px solid #0969da;outline-offset:2px;}@media (max-width:520px){.fe{padding:12px;}}");

})();
