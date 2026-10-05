import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';
import { getSitemapPaths } from '../app/lib/search-files.mjs';
import { siteConfig } from '../app/lib/site-data.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const statePath = resolve(root, '.indexnow/last-submitted.json');
const endpoint = 'https://api.indexnow.org/indexnow';

export function changedUrls(current, previous) {
  return [...new Set([...Object.keys(current), ...Object.keys(previous)])]
    .filter((url) => current[url] !== previous[url]);
}

export function validateUrls(urlList, origin) {
  for (const value of urlList) {
    const url = new URL(value);
    if (url.origin !== origin || url.username || url.password || url.search || url.hash) {
      throw new Error(`Invalid IndexNow URL: ${value}`);
    }
  }
}

async function publicAssetHash(directory) {
  const hash = createHash('sha256');
  async function visit(folder) {
    const entries = await readdir(folder, { withFileTypes: true });
    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      const path = resolve(folder, entry.name);
      if (entry.isDirectory()) await visit(path);
      else if (/\.(png|jpe?g|webp|svg|gif|avif|pdf|woff2?)$/i.test(entry.name)) {
        hash.update(path.slice(directory.length));
        hash.update(await readFile(path));
      }
    }
  }
  await visit(directory);
  return hash.digest('hex');
}

export async function submit(payload, fetcher = fetch, wait = delay) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const response = await fetcher(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(30_000),
    });
    if (response.status === 200 || response.status === 202) return response.status;
    const message = (await response.text()).slice(0, 500);
    if (attempt === 3 || (response.status !== 429 && response.status < 500)) {
      throw new Error(`IndexNow HTTP ${response.status}: ${message}`);
    }
    const retryAfter = Number(response.headers.get('retry-after'));
    await wait(Math.min(60_000, Math.max(5_000 * 2 ** attempt, retryAfter * 1000 || 0)));
  }
}

async function main() {
  const origin = new URL(siteConfig.url).origin;
  const { key } = JSON.parse(await readFile(resolve(root, 'indexnow.json'), 'utf8'));
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error('Invalid IndexNow key');
  const keyLocation = `${origin}/${key}.txt`;
  const builtKey = await readFile(resolve(root, `dist/client/${key}.txt`), 'utf8');
  if (builtKey.trim() !== key) throw new Error('Exported IndexNow key does not match');

  // Asset replacements can change a page without changing its HTML.
  // Conservatively notify every page when a public image/download changes.
  const assets = await publicAssetHash(resolve(root, 'public'));
  const pages = {};
  for (const path of getSitemapPaths()) {
    const html = await readFile(resolve(root, `dist/client${path}index.html`));
    pages[new URL(path, origin).href] = createHash('sha256').update(html).update(assets).digest('hex');
  }
  let previous = {};
  try {
    const state = JSON.parse(await readFile(statePath, 'utf8'));
    if (state.origin !== origin || state.version !== 1) throw new Error('Incompatible IndexNow history');
    previous = state.pages;
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const urlList = changedUrls(pages, previous);
  validateUrls(urlList, origin);
  console.log(`IndexNow: ${urlList.length} new, changed or removed URLs (${Object.keys(pages).length} current pages).`);
  if (process.argv.includes('--dry-run')) {
    console.log(JSON.stringify({ host: new URL(origin).host, keyLocation, urlList }, null, 2));
    return;
  }
  if (urlList.length) {
    // Pages can take a little time to serve the newly deployed verification file.
    let verified = false;
    for (let attempt = 0; attempt < 6; attempt++) {
      const response = await fetch(keyLocation, { cache: 'no-store', signal: AbortSignal.timeout(30_000) });
      if (response.status === 200 && (await response.text()).trim() === key) {
        verified = true;
        break;
      }
      if (attempt < 5) await delay(10_000);
    }
    if (!verified) throw new Error(`Live ownership key unavailable: ${keyLocation}`);
    for (let offset = 0; offset < urlList.length; offset += 10_000) {
      const status = await submit({ host: new URL(origin).host, key, keyLocation, urlList: urlList.slice(offset, offset + 10_000) });
      console.log(status === 200 ? 'IndexNow: submission received (HTTP 200).' : 'IndexNow: submission accepted; key validation pending (HTTP 202).');
    }
  }
  await mkdir(dirname(statePath), { recursive: true });
  await writeFile(statePath, JSON.stringify({ version: 1, origin, pages }, null, 2) + '\n');
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
