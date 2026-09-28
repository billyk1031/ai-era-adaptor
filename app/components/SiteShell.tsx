import Link from 'next/link';
import { profiles, siteConfig } from '../lib/site-data';

export function SiteHeader() {
  return <header className="site-header">
    <div className="container header-inner">
      <Link className="brand" href="/" aria-label="ADAPTOR home"><span className="brand-mark">A</span><strong>ADAPTOR</strong></Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/framework/">The framework</Link><Link href="/examples/">People and examples</Link><Link href="/profiles/">Work profiles</Link><Link href="/blog/">AI at work</Link><Link href="/faq/">FAQ</Link><Link href="/book/" className="nav-cta">The book</Link>
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          <Link href="/framework/">The framework</Link><Link href="/examples/">People and examples</Link><Link href="/profiles/">Work profiles</Link><Link href="/blog/">AI at work</Link><Link href="/faq/">FAQ</Link><Link href="/book/">The book</Link>
        </nav>
      </details>
    </div>
  </header>;
}
export function SiteFooter() { return <footer className="site-footer"><div className="container footer-grid"><div><Link className="footer-brand" href="/"><span className="brand-mark">A</span> ADAPTOR</Link><p className="footer-note">Practical thinking for people navigating AI-era work.</p></div><div className="footer-links"><Link href="/framework/">The framework</Link><Link href="/examples/">People and examples</Link><Link href="/profiles/">Work profiles</Link><Link href="/blog/">AI at work</Link><Link href="/book/">The book</Link><Link href="/faq/">FAQ</Link><Link href="/about/">About the author</Link><a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a><Link href="/privacy/">Privacy</Link><Link href="/disclaimer/">Disclaimer</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Billy Kan</span><span>Built for clearer next moves.</span></div></footer>; }
export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function ArrowLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) { return <Link className={`arrow-link ${className}`} href={href}>{children}<span aria-hidden="true">→</span></Link>; }
export function AdaptorWordmark({ compact = false }: { compact?: boolean }) { return <div className={`adaptor-wordmark ${compact ? 'adaptor-wordmark-compact' : ''}`} aria-label="The seven ADAPTOR Work Profiles">{profiles.map((profile, index) => <div className="wordmark-item" key={`${profile.name}-${index}`}><strong>{profile.letter}</strong><span>{profile.name}</span></div>)}</div>; }
export function ArticleCard({ article }: { article: { slug: string; title: string; description: string; category: string; type: string; readTime: string } }) { return <article className="article-card"><div className="article-card-top"><span className="tag">{article.category}</span><span className="read-time">{article.readTime}</span></div><h3><Link href={`/blog/${article.slug}/`}>{article.title}</Link></h3><p>{article.description}</p><div className="article-card-bottom"><span className="type-label">{article.type}</span><ArrowLink href={`/blog/${article.slug}/`}>Read article</ArrowLink></div></article>; }
export function BookCta({ compact = false }: { compact?: boolean }) { return <section className={`book-cta ${compact ? 'book-cta-compact' : ''}`}><div><Eyebrow>Make the process your own</Eyebrow><h2>Build a plan for your work.</h2><p>These pages show ADAPTOR in action. <Link className="inline-link" href="/book/"><em>Be an AI-Era ADAPTOR</em></Link> gives you detailed guidance and a companion workbook for working through your own Profile, SWOT, goals and actions.</p></div><Link className="button button-light" href="/book/">Explore the book <span aria-hidden="true">→</span></Link></section>; }
