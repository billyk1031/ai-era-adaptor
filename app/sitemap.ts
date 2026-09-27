import type { MetadataRoute } from 'next';
import { getSitemapPaths } from './lib/search-files.mjs';
import { siteConfig } from './lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapPaths().map((path) => ({ url: new URL(path, siteConfig.url).toString() }));
}
