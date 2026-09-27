import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildRobotsTxt, buildRssXml, buildSitemapXml } from '../app/lib/search-files.mjs';

const projectDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = resolve(projectDirectory, 'dist/client');

await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  writeFile(resolve(outputDirectory, 'sitemap.xml'), buildSitemapXml(), 'utf8'),
  writeFile(resolve(outputDirectory, 'robots.txt'), buildRobotsTxt(), 'utf8'),
  writeFile(resolve(outputDirectory, 'rss.xml'), buildRssXml(), 'utf8'),
]);
