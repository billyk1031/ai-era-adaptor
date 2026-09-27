import { buildRssXml } from '../lib/search-files.mjs';

export function GET() { return new Response(buildRssXml(), { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } }); }
