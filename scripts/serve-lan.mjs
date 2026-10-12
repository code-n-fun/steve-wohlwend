import http from 'node:http';
import { createReadStream, existsSync, statSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { networkInterfaces } from 'node:os';

const root = realpathSync(fileURLToPath(new URL('../dist', import.meta.url)));
const port = Number(process.env.PORT || 8000);
const privateAddresses = Object.values(networkInterfaces()).flat().filter(address => address && address.family === 'IPv4' && !address.internal && /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(address.address));
const host = process.env.PORTFOLIO_HOST || privateAddresses[0]?.address || '127.0.0.1';
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };
const server = http.createServer((request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    return response.end('Method not allowed');
  }
  let filename;
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    filename = path.resolve(root, '.' + pathname);
    if (filename !== root && !filename.startsWith(root + path.sep)) throw new Error();
    if (!existsSync(filename)) throw new Error();
    if (statSync(filename).isDirectory()) {
      if (!pathname.endsWith('/')) {
        response.writeHead(301, { Location: pathname + '/' });
        return response.end();
      }
      filename = path.join(filename, 'index.html');
    }
    filename = realpathSync(filename);
    if (!filename.startsWith(root + path.sep) || !statSync(filename).isFile()) throw new Error();
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    return response.end('Page not found');
  }
  response.writeHead(200, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
  if (request.method === 'HEAD') return response.end();
  createReadStream(filename).pipe(response);
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, host, () => {
  console.log(`Portfolio: http://${host}:${port}`);
  if (host === '127.0.0.1') console.log('No private LAN address detected; serving localhost only.');
});
