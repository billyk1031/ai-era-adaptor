import Link from 'next/link';
import { ArticleCard, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../lib/seo';
import { articles, categories } from '../lib/site-data';

export const metadata = pageMetadata({ title: 'AI at work', description: 'Evidence, analysis, advice, and practical thinking about how AI is changing workplaces, jobs, careers, and workplace culture.', path: '/blog/', image: { url: '/microsoft-workforce-news.webp', alt: 'Two professionals discussing a blank page at work', width: 1594, height: 987 } });

export default function BlogPage() { return <main><BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'AI at work', path: '/blog/' }]} /><section className="page-hero"><div className="container"><Eyebrow>AI at work</Eyebrow><h1>Understand the change before deciding what it means.</h1><p className="lede">Evidence, analysis, opinion, and practical advice about AI’s effect on workplaces, jobs, careers, and the people inside them.</p><div className="category-list">{categories.map((category) => <Link className="category-chip" href={`/blog/category/${category.slug}/`} key={category.slug}>{category.name}</Link>)}</div></div></section><section className="section"><div className="container"><div className="article-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div></div></section></main>; }
