// Headless browser tests (Chrome via puppeteer-core). Run: npm test
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { start } from '../scripts/serve.mjs';

const require = createRequire(import.meta.url);
const CHROME = process.env.CHROME_PATH || '/usr/bin/google-chrome';
let srv, browser, base;

before(async () => {
  srv = await start(0);
  base = `http://127.0.0.1:${srv.port}`;
  browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
});
after(async () => { await browser?.close(); srv?.server.close(); });

const dialogOpen = (page) => page.waitForFunction(() => {
  const h = document.querySelector('[data-cancel-reasons-dialog]');
  return h && h.shadowRoot.querySelector('dialog[open]');
});
const inShadow = (page, fn, ...args) => page.evaluate((src, ...a) => {
  const root = document.querySelector('[data-cancel-reasons-dialog]').shadowRoot;
  return new Function('root', 'args', src)(root, a);
}, fn, ...args);

async function demo() {
  const page = await browser.newPage();
  srv.hooks.length = 0;
  await page.goto(base + '/demo/index.html');
  return page;
}

async function blank(body = '') {
  const page = await browser.newPage();
  srv.hooks.length = 0;
  await page.goto(base + '/demo/cancelled.html');
  await page.setContent(`<!doctype html><html lang="en"><body>${body}</body></html>`);
  await page.addScriptTag({ url: base + '/dist/cancel-reasons.min.js' });
  return page;
}

test('link: answer + comment, webhook gets payload, then navigation continues', async () => {
  const page = await demo();
  await page.click('#cancel-link');
  await dialogOpen(page);
  assert.ok(!page.url().includes('cancelled.html'), 'must not navigate before the step');
  await inShadow(page, `root.querySelector('input[value=too_expensive]').click();
    const t = root.querySelector('textarea'); t.value = '  Budget cut this quarter  '; t.dispatchEvent(new Event('input'));`);
  await Promise.all([page.waitForNavigation(), inShadow(page, `root.querySelector('button.cr-primary').click()`)]);
  assert.match(page.url(), /cancelled\.html\?via=link$/);
  await new Promise((r) => setTimeout(r, 300));
  const hook = srv.hooks.find((h) => h.path === '/webhook');
  assert.ok(hook, 'webhook received');
  assert.equal(hook.type, 'application/json');
  assert.equal(hook.body.reason, 'too_expensive');
  assert.equal(hook.body.reasonLabel, "It's too expensive");
  assert.equal(hook.body.comment, 'Budget cut this quarter');
  assert.equal(hook.body.skipped, false);
  assert.match(hook.body.page, /\/demo\/index\.html$/);
  await page.close();
});

test('skip continues the cancel with skipped: true and no comment', async () => {
  const page = await demo();
  await page.click('#cancel-link');
  await dialogOpen(page);
  await inShadow(page, `root.querySelector('textarea').value = 'should not be sent'`);
  await Promise.all([page.waitForNavigation(), inShadow(page, `root.querySelector('button.cr-skip').click()`)]);
  assert.match(page.url(), /cancelled\.html/);
  await new Promise((r) => setTimeout(r, 300));
  const hook = srv.hooks.find((h) => h.path === '/webhook');
  assert.equal(hook.body.skipped, true);
  assert.equal(hook.body.reason, null);
  assert.equal(hook.body.comment, '');
  await page.close();
});

test('submitting with nothing filled in still continues (never required)', async () => {
  const page = await demo();
  await page.click('#cancel-link');
  await dialogOpen(page);
  await Promise.all([page.waitForNavigation(), inShadow(page, `root.querySelector('button.cr-primary').click()`)]);
  assert.match(page.url(), /cancelled\.html/);
  await page.close();
});

test('Escape closes, stays on page, restores focus, fires dismiss, no webhook', async () => {
  const page = await demo();
  await page.evaluate(() => { window.__dismissed = 0; document.addEventListener('cancelreasons:dismiss', () => window.__dismissed++); });
  await page.focus('#cancel-link');
  await page.keyboard.press('Enter');
  await dialogOpen(page);
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('[data-cancel-reasons-dialog]'));
  assert.match(page.url(), /demo\/index\.html$/);
  assert.equal(await page.evaluate(() => document.activeElement.id), 'cancel-link');
  assert.equal(await page.evaluate(() => window.__dismissed), 1);
  await new Promise((r) => setTimeout(r, 200));
  assert.equal(srv.hooks.length, 0);
  // Can open again after dismissing.
  await page.click('#cancel-link');
  await dialogOpen(page);
  await page.close();
});

test('keyboard only: arrow to a reason, Tab to submit, Enter continues', async () => {
  const page = await demo();
  await page.focus('#cancel-link');
  await page.keyboard.press('Enter');
  await dialogOpen(page);
  const focused = await page.evaluate(() => document.querySelector('[data-cancel-reasons-dialog]').shadowRoot.activeElement?.value);
  assert.equal(focused, 'too_expensive', 'first reason gets focus');
  await page.keyboard.press('Space');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Tab'); // textarea
  await page.keyboard.type('Need SSO');
  await page.keyboard.press('Tab'); // submit
  await Promise.all([page.waitForNavigation(), page.keyboard.press('Enter')]);
  await new Promise((r) => setTimeout(r, 300));
  const hook = srv.hooks.find((h) => h.path === '/webhook');
  assert.equal(hook.body.reason, 'missing_features');
  assert.equal(hook.body.comment, 'Need SSO');
  await page.close();
});

test('form submit button: the original form submission continues', async () => {
  const page = await demo();
  await page.click('#cancel-submit');
  await dialogOpen(page);
  await Promise.all([page.waitForNavigation(), inShadow(page, `root.querySelector('input[value=unused]').click(); root.querySelector('button.cr-primary').click()`)]);
  assert.equal(await page.$eval('#posted', (e) => e.textContent), 'Form posted');
  await new Promise((r) => setTimeout(r, 300));
  assert.deepEqual(srv.hooks.find((h) => h.path === '/webhook').body.metadata, { subscriptionId: 'sub_demo' });
  await page.close();
});

test('page click handler runs exactly once, after the step', async () => {
  const page = await blank(`<button id="b">Cancel</button>`);
  const results = await page.evaluate(async () => {
    const log = [];
    const b = document.getElementById('b');
    b.addEventListener('click', () => log.push('handler'));
    CancelReasons.attach(b, { onSubmit: (r) => log.push('onSubmit:' + r.reason) });
    b.click();
    log.push('after-click');
    await new Promise((r) => setTimeout(r, 50));
    const root = document.querySelector('[data-cancel-reasons-dialog]').shadowRoot;
    root.querySelector('input[value=other]').click();
    root.querySelector('button.cr-primary').click();
    await new Promise((r) => setTimeout(r, 100));
    return log;
  });
  assert.deepEqual(results, ['after-click', 'onSubmit:other', 'handler']);
  await page.close();
});

test('a hanging onSubmit or slow/failing webhook cannot block the cancel', async () => {
  const page = await blank(`<button id="b">Cancel</button>`);
  const elapsed = await page.evaluate(async (base) => {
    let continuedAt = 0;
    const b = document.getElementById('b');
    b.addEventListener('click', () => { continuedAt = performance.now(); });
    CancelReasons.attach(b, { onSubmit: () => new Promise(() => {}), webhookUrl: base + '/webhook-slow', callbackTimeoutMs: 400 });
    b.click();
    await new Promise((r) => setTimeout(r, 50));
    const t0 = performance.now();
    document.querySelector('[data-cancel-reasons-dialog]').shadowRoot.querySelector('button.cr-skip').click();
    await new Promise((r) => setTimeout(r, 900));
    return continuedAt ? continuedAt - t0 : -1;
  }, base);
  assert.ok(elapsed > 0 && elapsed < 800, `continued after ${elapsed} ms`);

  const page2 = await blank(`<button id="b">Cancel</button>`);
  const ok = await page2.evaluate(async () => {
    let continued = false;
    const b = document.getElementById('b');
    b.addEventListener('click', () => { continued = true; });
    CancelReasons.attach(b, { onSubmit: () => { throw new Error('boom'); }, webhookUrl: 'http://127.0.0.1:1/nothing-here' });
    b.click();
    await new Promise((r) => setTimeout(r, 50));
    document.querySelector('[data-cancel-reasons-dialog]').shadowRoot.querySelector('button.cr-primary').click();
    await new Promise((r) => setTimeout(r, 1800));
    return continued;
  });
  assert.equal(ok, true);
  await page.close(); await page2.close();
});

test('fails open: if the dialog cannot render, the cancel still continues', async () => {
  const page = await blank(`<button id="b">Cancel</button>`);
  const continued = await page.evaluate(async () => {
    let c = false;
    Element.prototype.attachShadow = () => { throw new Error('blocked'); };
    const b = document.getElementById('b');
    b.addEventListener('click', () => { c = true; });
    CancelReasons.attach(b);
    b.click();
    await new Promise((r) => setTimeout(r, 300));
    return c;
  });
  assert.equal(continued, true);
  await page.close();
});

test('voice chat link is off by default; https only when set', async () => {
  const page = await blank(`<button id="a">A</button><button id="b">B</button><button id="c">C</button>`);
  const r = await page.evaluate(async () => {
    const out = {};
    const check = async (id, opts) => {
      CancelReasons.attach('#' + id, opts);
      document.getElementById(id).click();
      await new Promise((r) => setTimeout(r, 50));
      const root = document.querySelector('[data-cancel-reasons-dialog]').shadowRoot;
      const a = root.querySelector('a.cr-interview');
      out[id] = a ? { href: a.href, text: a.textContent, rel: a.rel, target: a.target } : null;
      root.querySelector('button.cr-close').click();
      await new Promise((r) => setTimeout(r, 50));
    };
    await check('a', {});
    await check('b', { interviewLink: { url: 'https://example.com/interview' } });
    await check('c', { interviewLink: { url: 'javascript:alert(1)' } });
    return out;
  });
  assert.equal(r.a, null);
  assert.deepEqual(r.b, { href: 'https://example.com/interview', text: 'Want to tell us more in a 5-minute voice chat?', rel: 'noopener noreferrer', target: '_blank' });
  assert.equal(r.c, null);
  await page.close();
});

test('custom reasons, text, maxlength, and HTML in labels is not injected', async () => {
  const page = await blank(`<button id="b">Cancel</button>`);
  const r = await page.evaluate(async () => {
    CancelReasons.attach('#b', { reasons: [{ value: 'x', label: '<img src=x onerror="window.__xss=1">Too slow' }], text: { title: 'Sorry to see you go' }, maxCommentLength: 20 });
    document.getElementById('b').click();
    await new Promise((r) => setTimeout(r, 50));
    const root = document.querySelector('[data-cancel-reasons-dialog]').shadowRoot;
    return { title: root.querySelector('h2').textContent, n: root.querySelectorAll('input[type=radio]').length, img: !!root.querySelector('img'), max: root.querySelector('textarea').maxLength, xss: !!window.__xss };
  });
  assert.deepEqual(r, { title: 'Sorry to see you go', n: 1, img: false, max: 20, xss: false });
  await page.close();
});

test('ESM build exports the same API', async () => {
  const page = await browser.newPage();
  await page.goto(base + '/demo/cancelled.html');
  const keys = await page.evaluate(async (u) => Object.keys(await import(u)).sort(), base + '/dist/cancel-reasons.mjs');
  assert.deepEqual(keys, ['DEFAULT_REASONS', 'attach', 'autoInit', 'default', 'open', 'report', 'sendWebhook', 'version']);
  const v = await page.evaluate(async (u) => (await import(u)).version, base + '/dist/cancel-reasons.min.mjs');
  assert.equal(v, JSON.parse(readFileSync('package.json')).version);
  await page.close();
});

test('axe-core: no accessibility violations in the open dialog', async () => {
  const page = await demo();
  await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
  await page.click('#cancel-js');
  await dialogOpen(page);
  const res = await page.evaluate(async () => {
    const r = await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'] });
    return r.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }));
  });
  // Ignore demo page structure rules; we only care about the widget.
  const widget = res.filter((v) => JSON.stringify(v.nodes).includes('data-cancel-reasons-dialog'));
  assert.deepEqual(widget, []);
  const roles = await inShadow(page, `const d = root.querySelector('dialog');
    return { labelled: root.getElementById(d.getAttribute('aria-labelledby')).textContent, legend: root.querySelector('legend').textContent, closeName: root.querySelector('.cr-close').getAttribute('aria-label') };`);
  assert.deepEqual(roles, { labelled: 'Before you go, what made you cancel?', legend: 'Main reason', closeName: 'Close' });
  await page.close();
});
