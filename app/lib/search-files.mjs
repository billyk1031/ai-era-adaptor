import { articles, categories, profiles, siteConfig } from './site-data.ts';

const corePaths = ['', 'framework', 'start', 'profiles', 'book', 'faq', 'about', 'blog', 'privacy', 'disclaimer'];

export function getSitemapPaths() {
  return [
    ...corePaths.map((path) => path ? `/${path}/` : '/'),
    ...profiles.map((profile) => `/profiles/${profile.slug}/`),
    ...categories.map((category) => `/blog/category/${category.slug}/`),
    ...articles.map((article) => `/blog/${article.slug}/`),
  ];
}

function escapeXml(value) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] ?? character);
}

function absoluteUrl(path) {
  return new URL(path, siteConfig.url).toString();
}

export function buildSitemapXml() {
  const urls = getSitemapPaths().map((path) => `<url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`;
}

export function buildRobotsTxt() {
  return `User-agent: *\nAllow: /\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`;
}

export function buildRssXml() {
  const items = articles.map((article) => {
    const url = absoluteUrl(`/blog/${article.slug}/`);
    return `<item><title>${escapeXml(article.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${new Date(`${article.date}T12:00:00Z`).toUTCString()}</pubDate><description>${escapeXml(article.description)}</description></item>`;
  }).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>ADAPTOR — AI at work</title><link>${absoluteUrl('/blog/')}</link><description>Evidence, analysis, opinion, and practical thinking about AI at work.</description><language>en-gb</language><atom:link href="${absoluteUrl('/rss.xml')}" rel="self" type="application/rss+xml"/>${items}</channel></rss>\n`;
}
