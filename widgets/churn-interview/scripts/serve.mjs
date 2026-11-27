// Tiny static server for the demo and tests. Also records POSTs to /webhook.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };

export function start(port = 0) {
  const hooks = [];
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, 'http://x');
    if (url.pathname.startsWith('/webhook')) {
      let body = '';
      for await (const c of req) body += c;
      if (url.pathname === '/webhook-slow') await new Promise((r) => setTimeout(r, 5000));
      hooks.push({ path: url.pathname, body: body ? JSON.parse(body) : null, type: req.headers['content-type'] });
      res.writeHead(url.pathname === '/webhook-500' ? 500 : 204).end();
      return;
    }
    if (req.method === 'POST') { res.writeHead(200, { 'content-type': 'text/html' }).end('<h1 id="posted">Form posted</h1>'); return; }
    const path = normalize(join(root, url.pathname === '/' ? 'demo/index.html' : url.pathname));
    if (!path.startsWith(root)) { res.writeHead(403).end(); return; }
    try {
      const data = await readFile(path);
      res.writeHead(200, { 'content-type': types[extname(path)] || 'application/octet-stream' }).end(data);
    } catch { res.writeHead(404).end('not found'); }
  });
  return new Promise((resolve) => server.listen(port, '127.0.0.1', () => resolve({ server, hooks, port: server.address().port })));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { port, hooks } = await start(Number(process.env.PORT) || 8080);
  console.log(`Demo: http://127.0.0.1:${port}/  (webhook POSTs are logged here)`);
  setInterval(() => { while (hooks.length) console.log('webhook', JSON.stringify(hooks.shift())); }, 500);
}
