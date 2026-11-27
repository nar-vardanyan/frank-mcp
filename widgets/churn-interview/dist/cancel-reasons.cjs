/*! cancel-reasons v0.1.0 | MIT License */
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/cancel-reasons.js
var cancel_reasons_exports = {};
__export(cancel_reasons_exports, {
  DEFAULT_REASONS: () => DEFAULT_REASONS,
  attach: () => attach,
  autoInit: () => autoInit,
  default: () => cancel_reasons_default,
  open: () => open,
  report: () => report,
  sendWebhook: () => sendWebhook,
  version: () => version
});
module.exports = __toCommonJS(cancel_reasons_exports);
var DEFAULT_REASONS = [
  { value: "too_expensive", label: "It's too expensive" },
  { value: "missing_features", label: "It is missing features I need" },
  { value: "switched_service", label: "I switched to another product" },
  { value: "unused", label: "I don't use it enough" },
  { value: "too_complex", label: "It's too hard to use" },
  { value: "low_quality", label: "Quality was lower than I expected" },
  { value: "customer_service", label: "Support didn't meet my needs" },
  { value: "other", label: "Something else" }
];
var DEFAULT_TEXT = {
  title: "Before you go, what made you cancel?",
  description: "Optional. Your answer helps us improve. Your cancellation continues either way.",
  reasonsLegend: "Main reason",
  commentLabel: "Anything else you want to tell us? (optional)",
  commentPlaceholder: "",
  submitLabel: "Send and continue cancelling",
  skipLabel: "Skip and continue cancelling",
  closeLabel: "Close",
  interviewLabel: "Want to tell us more in a 5-minute voice chat?"
};
var DEFAULTS = {
  reasons: DEFAULT_REASONS,
  text: DEFAULT_TEXT,
  maxCommentLength: 1e3,
  callbackTimeoutMs: 1500,
  webhookUrl: null,
  webhookHeaders: null,
  metadata: null,
  interviewLink: null,
  theme: null,
  onSubmit: null,
  onDismiss: null,
  onContinue: null,
  container: null
};
var BYPASS = "__cancelReasonsBypass";
var EVENT_SUBMIT = "cancelreasons:submit";
var EVENT_DISMISS = "cancelreasons:dismiss";
var CSS = `
:host{all:initial}
dialog{box-sizing:border-box;width:min(440px,calc(100vw - 32px));max-height:calc(100vh - 32px);overflow:auto;padding:24px;border:1px solid var(--cr-border,#d0d5dd);border-radius:var(--cr-radius,12px);background:var(--cr-bg,#fff);color:var(--cr-fg,#101828);font:15px/1.45 var(--cr-font,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif);box-shadow:0 20px 50px rgba(16,24,40,.25)}
dialog::backdrop{background:rgba(16,24,40,.45)}
*,*::before,*::after{box-sizing:border-box}
h2{margin:0 32px 6px 0;font-size:18px;line-height:1.3}
p.cr-desc{margin:0 0 16px;color:var(--cr-muted,#475467);font-size:14px}
fieldset{border:0;margin:0 0 16px;padding:0}
legend{padding:0;margin:0 0 8px;font-weight:600;font-size:14px}
.cr-opt{display:flex;gap:10px;align-items:flex-start;padding:8px 10px;margin:0 0 6px;border:1px solid var(--cr-border,#d0d5dd);border-radius:8px;cursor:pointer}
.cr-opt:hover{border-color:var(--cr-accent,#2f54eb)}
.cr-opt input{margin:3px 0 0;accent-color:var(--cr-accent,#2f54eb)}
label.cr-l{display:block;font-weight:600;font-size:14px;margin:0 0 6px}
textarea{width:100%;min-height:76px;padding:8px 10px;border:1px solid var(--cr-border,#d0d5dd);border-radius:8px;font:inherit;color:inherit;background:transparent;resize:vertical}
.cr-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
button{font:inherit;cursor:pointer;border-radius:8px;padding:9px 14px;border:1px solid var(--cr-border,#d0d5dd);background:transparent;color:inherit}
button.cr-primary{background:var(--cr-accent,#2f54eb);border-color:var(--cr-accent,#2f54eb);color:var(--cr-accent-fg,#fff);font-weight:600}
button.cr-close{position:absolute;top:12px;right:12px;width:32px;height:32px;padding:0;border:0;font-size:20px;line-height:32px}
button:focus-visible,input:focus-visible,textarea:focus-visible,a:focus-visible{outline:2px solid var(--cr-accent,#2f54eb);outline-offset:2px}
a.cr-interview{display:inline-block;margin-top:14px;color:var(--cr-accent,#2f54eb);font-size:14px}
.cr-count{display:block;text-align:right;font-size:12px;color:var(--cr-muted,#475467)}
@media (prefers-reduced-motion:no-preference){dialog[open]{animation:cr-in .14s ease-out}@keyframes cr-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}}
`;
var uid = 0;
function mergeOptions(options) {
  const o = Object.assign({}, DEFAULTS, options || {});
  o.text = Object.assign({}, DEFAULT_TEXT, options && options.text || {});
  if (!Array.isArray(o.reasons) || o.reasons.length === 0) o.reasons = DEFAULT_REASONS;
  return o;
}
function safeHttpUrl(url) {
  try {
    const u = new URL(String(url), typeof location !== "undefined" ? location.href : void 0);
    return u.protocol === "https:" || u.protocol === "http:" ? u.href : null;
  } catch (_) {
    return null;
  }
}
function el(tag, attrs, children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const k in attrs) {
      if (attrs[k] === null || attrs[k] === void 0 || attrs[k] === false) continue;
      if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k] === true ? "" : String(attrs[k]));
    }
  }
  (children || []).forEach((c) => c && node.appendChild(c));
  return node;
}
function applyTheme(host, theme) {
  if (!theme) return;
  const map = { accent: "--cr-accent", accentText: "--cr-accent-fg", background: "--cr-bg", text: "--cr-fg", muted: "--cr-muted", border: "--cr-border", radius: "--cr-radius", fontFamily: "--cr-font" };
  for (const k in map) if (theme[k]) host.style.setProperty(map[k], String(theme[k]));
}
function sendWebhook(url, payload, headers) {
  const target = safeHttpUrl(url);
  if (!target) return Promise.resolve(false);
  try {
    return fetch(target, {
      method: "POST",
      keepalive: true,
      headers: Object.assign({ "Content-Type": "application/json" }, headers || {}),
      body: JSON.stringify(payload)
    }).then((r) => r.ok, () => false);
  } catch (_) {
    return Promise.resolve(false);
  }
}
function withTimeout(value, ms) {
  if (!value || typeof value.then !== "function") return Promise.resolve();
  return new Promise((resolve) => {
    const t = setTimeout(resolve, Math.max(0, ms));
    value.then(() => {
      clearTimeout(t);
      resolve();
    }, () => {
      clearTimeout(t);
      resolve();
    });
  });
}
function open(options) {
  const o = mergeOptions(options);
  const t = o.text;
  const id = "cr" + ++uid;
  return new Promise((resolve) => {
    let host;
    try {
      host = el("div", { "data-cancel-reasons-dialog": "" });
      applyTheme(host, o.theme);
      const root = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;
      root.appendChild(el("style", { text: CSS }));
      const radios = o.reasons.map((r, i) => {
        const input = el("input", { type: "radio", name: id + "-reason", value: r.value, id: id + "-r" + i });
        return el("label", { class: "cr-opt", for: id + "-r" + i }, [input, el("span", { text: r.label })]);
      });
      const fieldset = el("fieldset", null, [el("legend", { text: t.reasonsLegend })].concat(radios));
      const textarea = el("textarea", { id: id + "-c", name: "comment", maxlength: o.maxCommentLength, placeholder: t.commentPlaceholder || null, "aria-describedby": id + "-n" });
      const count = el("span", { class: "cr-count", id: id + "-n", "aria-live": "polite", text: "0 / " + o.maxCommentLength });
      textarea.addEventListener("input", () => {
        count.textContent = textarea.value.length + " / " + o.maxCommentLength;
      });
      const submitBtn = el("button", { type: "submit", class: "cr-primary", text: t.submitLabel });
      const skipBtn = el("button", { type: "button", class: "cr-skip", text: t.skipLabel });
      const closeBtn = el("button", { type: "button", class: "cr-close", "aria-label": t.closeLabel, text: "\xD7" });
      const parts = [
        closeBtn,
        el("h2", { id: id + "-t", text: t.title }),
        el("p", { class: "cr-desc", id: id + "-d", text: t.description }),
        fieldset,
        el("label", { class: "cr-l", for: id + "-c", text: t.commentLabel }),
        textarea,
        count,
        el("div", { class: "cr-actions" }, [submitBtn, skipBtn])
      ];
      const interviewUrl = o.interviewLink && safeHttpUrl(o.interviewLink.url || o.interviewLink);
      if (interviewUrl) {
        parts.push(el("a", { class: "cr-interview", href: interviewUrl, target: "_blank", rel: "noopener noreferrer", text: o.interviewLink && o.interviewLink.label || t.interviewLabel }));
      }
      const form = el("form", { method: "dialog", novalidate: true }, parts);
      const dialog = el("dialog", { "aria-labelledby": id + "-t", "aria-describedby": id + "-d", class: "cr-dialog" }, [form]);
      root.appendChild(dialog);
      const previouslyFocused = document.activeElement;
      let done = false;
      const finish = (result) => {
        if (done) return;
        done = true;
        try {
          if (dialog.open) dialog.close();
        } catch (_) {
        }
        host.remove();
        if (previouslyFocused && typeof previouslyFocused.focus === "function" && !result) {
          try {
            previouslyFocused.focus();
          } catch (_) {
          }
        }
        resolve(result);
      };
      const build = (skipped) => {
        const checked = fieldset.querySelector("input:checked");
        const reason = skipped || !checked ? null : checked.value;
        const match = reason ? o.reasons.find((r) => r.value === reason) : null;
        const comment = skipped ? "" : textarea.value.trim().slice(0, o.maxCommentLength);
        return {
          reason,
          reasonLabel: match ? match.label : null,
          comment,
          skipped: !!skipped || !reason && !comment,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          page: typeof location !== "undefined" ? location.origin + location.pathname : null,
          metadata: o.metadata || null
        };
      };
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        finish(build(false));
      });
      skipBtn.addEventListener("click", () => finish(build(true)));
      closeBtn.addEventListener("click", () => finish(null));
      dialog.addEventListener("cancel", (e) => {
        e.preventDefault();
        finish(null);
      });
      (o.container || document.body).appendChild(host);
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      const first = fieldset.querySelector("input");
      if (first) first.focus();
    } catch (err) {
      if (host) try {
        host.remove();
      } catch (_) {
      }
      resolve(Object.assign(build0(o), { error: String(err && err.message || err) }));
    }
  });
}
function build0(o) {
  return { reason: null, reasonLabel: null, comment: "", skipped: true, timestamp: (/* @__PURE__ */ new Date()).toISOString(), page: typeof location !== "undefined" ? location.origin + location.pathname : null, metadata: o.metadata || null };
}
function report(result, options, trigger) {
  const o = mergeOptions(options);
  const tasks = [];
  try {
    const detail = result;
    (trigger || document).dispatchEvent(new CustomEvent(EVENT_SUBMIT, { detail, bubbles: true, composed: true }));
  } catch (_) {
  }
  if (o.webhookUrl) tasks.push(sendWebhook(o.webhookUrl, result, o.webhookHeaders));
  if (typeof o.onSubmit === "function") {
    try {
      tasks.push(o.onSubmit(result));
    } catch (_) {
    }
  }
  return withTimeout(Promise.all(tasks.map((p) => Promise.resolve(p).catch(() => {
  }))), o.callbackTimeoutMs);
}
function continueCancel(trigger, result, o) {
  if (typeof o.onContinue === "function") {
    try {
      o.onContinue(result, trigger);
    } catch (_) {
    }
    return;
  }
  trigger[BYPASS] = true;
  try {
    trigger.click();
  } finally {
    setTimeout(() => {
      trigger[BYPASS] = false;
    }, 0);
  }
}
function resolveTargets(target) {
  if (!target) return [];
  if (typeof target === "string") return Array.prototype.slice.call(document.querySelectorAll(target));
  if (target.nodeType === 1) return [target];
  if (typeof target.length === "number") return Array.prototype.slice.call(target);
  return [];
}
function attach(target, options) {
  const o = mergeOptions(options);
  const nodes = resolveTargets(target);
  let busy = false;
  const handler = (event) => {
    const trigger = event.currentTarget;
    if (trigger[BYPASS]) return;
    if (event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (busy) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    busy = true;
    open(o).then((result) => {
      if (!result) {
        try {
          trigger.dispatchEvent(new CustomEvent(EVENT_DISMISS, { bubbles: true, composed: true }));
        } catch (_) {
        }
        if (typeof o.onDismiss === "function") try {
          o.onDismiss();
        } catch (_) {
        }
        busy = false;
        return;
      }
      return report(result, o, trigger).then(() => {
        busy = false;
        continueCancel(trigger, result, o);
      });
    }).catch(() => {
      busy = false;
      continueCancel(trigger, build0(o), o);
    });
  };
  nodes.forEach((n) => n.addEventListener("click", handler, true));
  return {
    detach() {
      nodes.forEach((n) => n.removeEventListener("click", handler, true));
    }
  };
}
function autoInit(root) {
  const scope = root || document;
  const nodes = scope.querySelectorAll("[data-cancel-reasons]:not([data-cancel-reasons-ready])");
  return Array.prototype.map.call(nodes, (n) => {
    n.setAttribute("data-cancel-reasons-ready", "");
    const d = n.dataset;
    const opts = {};
    if (d.cancelReasonsWebhook) opts.webhookUrl = d.cancelReasonsWebhook;
    if (d.cancelReasonsInterviewUrl) opts.interviewLink = { url: d.cancelReasonsInterviewUrl };
    if (d.cancelReasonsTitle) opts.text = { title: d.cancelReasonsTitle };
    return attach(n, opts);
  });
}
var version = "0.1.0";
var cancel_reasons_default = { attach, open, report, autoInit, sendWebhook, DEFAULT_REASONS, version };
