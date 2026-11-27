// Copy and hygiene checks on every shipped text file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const skip = new Set(['node_modules', '.git']);
function files(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (skip.has(f)) return [];
    return statSync(p).isDirectory() ? files(p) : [p];
  }).filter((p) => /\.(md|js|mjs|cjs|ts|html|json)$/.test(p) && !p.endsWith('package-lock.json'));
}
const all = files('.');

test('no em or en dashes anywhere', () => {
  const bad = all.filter((p) => /[\u2014\u2013]/.test(readFileSync(p, 'utf8')));
  assert.deepEqual(bad, []);
});

test('README mentions Frank once, with the exact line and link', () => {
  const s = readFileSync('README.md', 'utf8');
  assert.equal((s.match(/Frank/g) || []).length, 1);
  assert.ok(s.includes('Frank is an AI user researcher that runs short voice interviews.'));
  assert.ok(s.includes('https://hifrank.ai/?utm_source=github&utm_medium=oss&utm_campaign=churn-widget'));
});

test('no secret keys in browser code or docs examples', () => {
  const hits = all.filter((p) => /sk_live_[A-Za-z0-9]{6,}|pdl_live_[A-Za-z0-9]{6,}/.test(readFileSync(p, 'utf8')));
  assert.deepEqual(hits, []);
});
