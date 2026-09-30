import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleCard, ArrowLink, Eyebrow } from '../../components/SiteShell';
import { BreadcrumbJsonLd, JsonLd, pageMetadata } from '../../lib/seo';
import { articles, formatDate, getArticle, getCategory, siteConfig, type ArticleParagraph } from '../../lib/site-data';

const categorySlugs: Record<string, string> = {
  'Jobs and Careers in the AI Era': 'jobs-and-careers',
  'AI and Workplace Change': 'ai-and-workplace-change',
  'AI Job News and Current Affairs': 'ai-job-news',
  'Human Value, Skills and Leadership': 'human-value',
  'AI Policy, Risk and Workplace Culture': 'ai-policy-and-culture',
};

function ArticleBodyParagraph({ value }: { value: ArticleParagraph }) {
  return <p>{typeof value === 'string' ? value : value.map((part, index) =>
    typeof part === 'string' ? part : part.href.startsWith('https://')
      ? <a className="inline-link" href={part.href} target="_blank" rel="noopener noreferrer" key={`${part.href}-${index}`}>{part.text}</a>
      : <Link className="inline-link" href={part.href} key={`${part.href}-${index}`}>{part.text}</Link>
  )}</p>;
}

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const image = article.heroImage?.src ?? '/cover.png';
  return {
    ...pageMetadata({
      title: article.title,
      description: article.description,
      path: '/blog/' + article.slug + '/',
      image: article.heroImage
        ? { url: article.heroImage.src, alt: article.heroImage.alt, width: article.heroImage.width, height: article.heroImage.height }
        : { url: image, alt: 'Cover of Be an AI-Era ADAPTOR', width: 330, height: 528 },
    }),
    authors: [{ name: 'Billy Kan', url: '/about/' }],
    openGraph: {
      type: 'article',
      siteName: 'ADAPTOR',
      title: `${article.title} | ADAPTOR`,
      description: article.description,
      url: '/blog/' + article.slug + '/',
      publishedTime: article.date,
      authors: ['Billy Kan'],
      images: [{ url: image, ...(article.heroImage ? { width: article.heroImage.width, height: article.heroImage.height, alt: article.heroImage.alt } : { width: 330, height: 528, alt: 'Cover of Be an AI-Era ADAPTOR' }) }],
    },
    twitter: { card: 'summary_large_image', title: `${article.title} | ADAPTOR`, description: article.description, images: [image] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const category = getCategory(categorySlugs[article.category]);
  const related = article.related.map((slug) => getArticle(slug)).filter(Boolean);
  const structuredData = { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, datePublished: article.date, image: article.heroImage ? new URL(article.heroImage.src, siteConfig.url).toString() : undefined, author: { '@type': 'Person', '@id': `${siteConfig.url}/about/#billy-kan`, name: siteConfig.author, url: `${siteConfig.url}/about/` }, publisher: { '@type': 'Person', '@id': `${siteConfig.url}/about/#billy-kan`, name: siteConfig.author }, mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}/` };
  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'AI at work', path: '/blog/' }, ...(category ? [{ name: category.name, path: '/blog/category/' + category.slug + '/' }] : []), { name: article.title, path: '/blog/' + article.slug + '/' }]} />
    <section className="article-hero"><div className="container"><Eyebrow>{article.category}</Eyebrow><h1>{article.title}</h1><div className="article-meta"><span>{article.type}</span><span>{formatDate(article.date)}</span><span>{article.readTime}</span><span>By <Link className="inline-link" href="/about/">Billy Kan</Link></span></div></div></section>
    <section className="section"><div className="container article-layout">
      <article className="prose">{article.heroImage && <Image className="article-feature-image" src={article.heroImage.src} width={article.heroImage.width} height={article.heroImage.height} alt={article.heroImage.alt} priority />}<p className="lede">{article.intro}</p>{article.sections.map((section, index) => <section key={article.slug + '-' + index}>{section.heading && <h2>{section.heading}</h2>}{section.paragraphs?.map((paragraph, paragraphIndex) => <ArticleBodyParagraph key={paragraphIndex} value={paragraph} />)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}{article.sources && <section className="article-end"><h2>Sources and further reading</h2><ul>{article.sources.map((source) => <li key={source.url}><a className="inline-link" href={source.url} target="_blank" rel="noreferrer">{source.title}</a> ({source.date})</li>)}</ul></section>}{article.sourceNote && <div className="source-note"><strong>Editorial note</strong><br />{article.sourceNote}</div>}<div className="article-end"><ArrowLink href="/blog/">Back to all articles</ArrowLink></div></article>
      <aside className="article-aside"><strong>More in this category</strong>{category && <Link href={'/blog/category/' + category.slug + '/'}>{category.name}</Link>}</aside>
    </div></section>
    <JsonLd data={structuredData} />
    <section className="section section-tight"><div className="container"><Eyebrow>Related reading</Eyebrow><div className="article-grid">{related.map((relatedArticle) => relatedArticle && <div key={relatedArticle.slug}><ArticleCard article={relatedArticle} /></div>)}</div></div></section>
  </main>;
}
