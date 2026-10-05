import Link from 'next/link';
import { ArticleCard, Eyebrow } from './SiteShell';
import { getArticlesForProfile, type ProfileSlug } from '../lib/site-data';

export function ProfileRelatedArticles({ slug }: { slug: ProfileSlug }) {
  const related = getArticlesForProfile(slug);
  return <section id="related-articles" className="section section-tight"><div className="container"><Eyebrow>AI at work</Eyebrow><h2>Related articles</h2>{related.length ? <div className="article-grid">{related.map((article) => <ArticleCard key={article.slug} article={article} />)}</div> : <p>There are no articles referring to this Work Profile yet. <Link className="inline-link" href="/blog/">Browse all articles</Link>.</p>}</div></section>;
}
