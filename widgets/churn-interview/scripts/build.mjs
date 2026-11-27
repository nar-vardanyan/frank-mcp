// Simple build: ESM, CommonJS and a minified script-tag (IIFE) bundle, plus types.
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
const define = { __VERSION__: JSON.stringify(pkg.version) };
const banner = { js: `/*! ${pkg.name} v${pkg.version} | MIT License */` };
mkdirSync('dist', { recursive: true });

const common = { bundle: true, target: ['es2019'], legalComments: 'none', banner };
const replaceVersion = { name: 'version', setup(b) { b.onLoad({ filter: /cancel-reasons\.js$/ }, (a) => ({ contents: readFileSync(a.path, 'utf8').replace("'__VERSION__'", define.__VERSION__), loader: 'js' })); } };

await build({ ...common, entryPoints: ['src/cancel-reasons.js'], format: 'esm', outfile: 'dist/cancel-reasons.mjs', plugins: [replaceVersion] });
await build({ ...common, entryPoints: ['src/cancel-reasons.js'], format: 'cjs', outfile: 'dist/cancel-reasons.cjs', plugins: [replaceVersion] });
await build({ ...common, entryPoints: ['src/iife.js'], format: 'iife', globalName: 'CancelReasons', footer: { js: 'CancelReasons=CancelReasons.default;' }, minify: true, outfile: 'dist/cancel-reasons.min.js', plugins: [replaceVersion] });
await build({ ...common, entryPoints: ['src/cancel-reasons.js'], format: 'esm', minify: true, outfile: 'dist/cancel-reasons.min.mjs', plugins: [replaceVersion] });
copyFileSync('src/cancel-reasons.d.ts', 'dist/cancel-reasons.d.ts');

for (const f of ['cancel-reasons.min.js', 'cancel-reasons.min.mjs', 'cancel-reasons.mjs']) {
  const buf = readFileSync('dist/' + f);
  console.log(`${f}: ${buf.length} B raw, ${gzipSync(buf, { level: 9 }).length} B gzip`);
}

// Copy guard: fail the build on em or en dashes in anything we ship.
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
const shipped = ['README.md', 'CHANGELOG.md', 'docs', 'src', 'dist', 'demo'];
const walk = (p) => (statSync(p).isDirectory() ? readdirSync(p).flatMap((f) => walk(join(p, f))) : [p]);
for (const f of shipped.flatMap(walk).filter((f) => /\.(md|js|mjs|cjs|ts|html)$/.test(f))) {
  const s = readFileSync(f, 'utf8');
  if (/[\u2014\u2013]/.test(s)) throw new Error(`em or en dash in ${f}`);
}
console.log('dash guard: ok');
