// Rewrites the jsDelivr URLs in README.md and docs/*.md for the chosen publishing option.
//   node scripts/set-cdn.mjs npm                       -> cdn.jsdelivr.net/npm/cancel-reasons@<version>/dist/...
//   node scripts/set-cdn.mjs gh <owner/repo> <tag> <folder>
//        e.g. node scripts/set-cdn.mjs gh nar-vardanyan/frank-mcp cancel-reasons-v0.1.0 cancel-reasons
import { readFileSync, writeFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const [mode, repo, tag, folder] = process.argv.slice(2);
let prefix;
if (mode === 'npm') prefix = `https://cdn.jsdelivr.net/npm/${pkg.name}@${pkg.version}/dist/`;
else if (mode === 'gh' && repo && tag && folder) prefix = `https://cdn.jsdelivr.net/gh/${repo}@${tag}/${folder.replace(/\/$/, '')}/dist/`;
else { console.error('usage: set-cdn.mjs npm | gh <owner/repo> <tag> <folder>'); process.exit(1); }

const re = /https:\/\/cdn\.jsdelivr\.net\/(?:npm\/[^/\s"'`]+|gh\/[^/\s"'`]+\/[^@\s"'`]+@[^/\s"'`]+\/[^\s"'`]*?)\/dist\//g;
for (const f of ['README.md', 'docs/stripe.md', 'docs/paddle.md']) {
  const s = readFileSync(f, 'utf8');
  const out = s.split('\n').map((l) => (l.includes('<version>') || l.includes('@main/') && l.startsWith('- Latest') ? l : l.replace(re, prefix))).join('\n');
  writeFileSync(f, out);
  console.log(`${f}: ${(s.match(re) || []).length} URL(s) -> ${prefix}`);
}
