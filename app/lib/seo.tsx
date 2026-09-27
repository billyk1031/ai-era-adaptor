import type { Metadata } from 'next';
import { siteConfig } from './site-data';

export type SocialImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image: SocialImage;
};

export function pageMetadata({ title, description, path, image }: PageMetadataOptions): Metadata {
  const socialTitle = title === 'AI-era work, clearly considered'
    ? 'ADAPTOR | AI-era work, clearly considered'
    : `${title} | ADAPTOR`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      types: { 'application/rss+xml': '/rss.xml' },
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.shortName,
      title: socialTitle,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}

export function JsonLd({ data }: { data: unknown }) {
  const safeJson = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson }} />;
}

export type BreadcrumbItem = { name: string; path: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  }} />;
}
