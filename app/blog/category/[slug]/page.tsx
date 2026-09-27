import { notFound } from 'next/navigation';
import { ArticleCard, Eyebrow } from '../../../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../../../lib/seo';
import { articles, categories, getCategory } from '../../../lib/site-data';

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const category = getCategory((await params).slug);
  const categoryArticle = category && articles.find((article) => article.category === category.name);
  const image = categoryArticle?.heroImage ?? { src: '/personas.png', alt: 'People representing different kinds of work', width: 1594, height: 986 };
  return category ? pageMetadata({ title: category.name, description: category.description, path: '/blog/category/' + category.slug + '/', image: { url: image.src, alt: image.alt, width: image.width, height: image.height } }) : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const category = getCategory((await params).slug); if (!category) notFound(); const categoryArticles = articles.filter((article) => article.category === category.name); return <main><BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'AI at work', path: '/blog/' }, { name: category.name, path: '/blog/category/' + category.slug + '/' }]} /><section className="page-hero"><div className="container"><Eyebrow>Blog category</Eyebrow><h1>{category.name}</h1><p className="lede">{category.description}</p></div></section><section className="section"><div className="container"><div className="article-grid">{categoryArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div></div></section></main>; }
