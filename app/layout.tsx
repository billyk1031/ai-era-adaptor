import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from './components/SiteShell';
import { JsonLd } from './lib/seo';
import { siteConfig } from './lib/site-data';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'ADAPTOR | AI-era work, clearly considered', template: '%s | ADAPTOR' },
  description: 'Practical thinking for people navigating AI-era work, changing job demand, and the future of the workplace.',
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
  openGraph: { type: 'website', siteName: 'ADAPTOR', title: 'ADAPTOR | AI-era work, clearly considered', description: 'Understand what AI may mean for work, careers, and workplaces—and decide what to do next.', images: ['/cover.png'] },
  twitter: { card: 'summary_large_image', title: 'ADAPTOR | AI-era work, clearly considered', description: 'Understand what AI may mean for work, careers, and workplaces—and decide what to do next.', images: ['/cover.png'] },
};

const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: `${siteConfig.url}/`,
  name: siteConfig.shortName,
  alternateName: siteConfig.name,
  description: 'A practical framework for understanding AI-era work, illustrated through five people and seven Work Profiles. Find a way to examine your own work and plan your next move.',
  inLanguage: 'en-GB',
  publisher: { '@id': `${siteConfig.url}/about/#billy-kan` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><JsonLd data={websiteData} /><SiteHeader />{children}<SiteFooter /></body></html>;
}
