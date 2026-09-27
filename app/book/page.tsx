import Image from 'next/image';
import Link from 'next/link';
import { Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, JsonLd, pageMetadata } from '../lib/seo';
import { siteConfig } from '../lib/site-data';

export const metadata = pageMetadata({
  title: 'Be an AI-Era ADAPTOR',
  description: 'Be an AI-Era ADAPTOR is available on Amazon as a Kindle eBook and paperback, and through Kindle Unlimited. Explore the guided method and companion workbook.',
  path: '/book/',
  image: { url: '/book-hero.png', alt: 'The ADAPTOR book beside a laptop and coffee', width: 2169, height: 725 },
});

export default function BookPage() {
  const bookData = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${siteConfig.url}/book/#book`,
    name: 'Be an AI-Era ADAPTOR',
    alternateName: 'A Step-by-Step Process to Find Your Value and Plan Your Next Move in the Age of AI',
    description: 'A practical guide to understanding how AI-era change may affect your work and planning your next move with the ADAPTOR framework.',
    url: `${siteConfig.url}/book/`,
    image: `${siteConfig.url}/cover.png`,
    inLanguage: 'en-GB',
    author: { '@type': 'Person', '@id': `${siteConfig.url}/about/#billy-kan`, name: siteConfig.author, url: `${siteConfig.url}/about/` },
    sameAs: siteConfig.amazonUrl,
  };

  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'The book', path: '/book/' }]} />
    <JsonLd data={bookData} />
    <section className="page-hero"><div className="container"><Eyebrow>The book</Eyebrow><h1>Be an AI-Era ADAPTOR</h1><p className="lede">A Step-by-Step Process to Find Your Value and Plan Your Next Move in the Age of AI</p></div></section>
    <section className="visual-strip"><div className="container"><Image src="/book-hero.png" width={2169} height={725} alt="The ADAPTOR book beside a laptop and coffee" /></div></section>
    <section className="section"><div className="container book-page-grid">
      <div><Image className="book-cover" src="/cover.png" width={330} height={528} alt="Cover of Be an AI-Era ADAPTOR by Billy Kan" /></div>
      <div className="book-copy"><Eyebrow>By Billy Kan</Eyebrow><h2>A guided way to put ADAPTOR to work.</h2><p className="subtitle">ADAPTOR is a free framework. The book makes it easier to apply and helps you work through it more effectively, with a guided assessment, worked examples, and practical support for turning your thinking into a plan.</p>
        <ul className="book-bullets"><li>A ten-scenario assessment to help identify and sense-check your Work Profile mix.</li><li>Seven profile-specific chapters on building a personal AI-Era SWOT, with five recurring people and their evolving decisions.</li><li>Examples for connecting real Threats and Opportunities to goals across three time horizons.</li><li>Action planning, milestones for longer-term goals, and a quarterly review process.</li><li>Practical chapters on learning AI with a goal, showing evidence of value, talking about change at work, and responding when a role is already at risk.</li></ul>
        <p>The book is useful if you would rather work through the method with more explanation, examples, and prompts in one place. You can also complete the whole process using the <Link className="inline-link" href="/framework/">free website guide</Link>.</p>
        <p><strong>Available on Amazon as a Kindle eBook and paperback.</strong> The Kindle eBook is also available to Kindle Unlimited members.</p>
        <a className="button" href={siteConfig.amazonUrl} target="_blank" rel="noreferrer">View the book on Amazon <span aria-hidden="true">↗</span></a>
      </div>
    </div></section>

    <section className="section section-tight blue-band" id="companion-workbook"><div className="container">
      <div className="section-header"><div><Eyebrow>How the workbook supports the book</Eyebrow><h2>Companion workbook included with the book.</h2></div></div>
      <div className="workbook-feature"><div className="prose"><p>The ADAPTOR Framework Workbook is a Google Sheet companion designed to help book readers keep their work in one place as they move through the chapters. It supports the process; it is not a requirement for using the free framework.</p>
        <ul><li><strong>Profile Assessment:</strong> work through ten scenarios, then record a primary, secondary, supporting, or desired profile.</li><li><strong>AI-Era SWOT:</strong> organise Strengths, Weaknesses, Opportunities, and Threats with evidence from your work.</li><li><strong>Goal Bank:</strong> connect selected SWOT signals to short-, medium-, and long-term goals.</li><li><strong>Actions:</strong> link actions and milestones to goals, then record dates, progress, and review notes.</li></ul>
        <p>Access instructions are in the book. The public <Link className="inline-link" href="/start/">ADAPTOR Starter Sheet</Link> is a separate, shorter resource for mapping one activity without an email form.</p>
        <a className="button" href={siteConfig.amazonUrl} target="_blank" rel="noreferrer">Get the book and companion workbook <span aria-hidden="true">↗</span></a>
      </div><Image className="wide-feature-image" src="/workbook.png" width={1600} height={983} alt="Preview of the ADAPTOR Framework Workbook, with sheets for profile assessment, personal SWOT, goals, and actions" /></div>
    </div></section>

    <section className="section section-tight"><div className="container split"><div><Eyebrow>What the book can and cannot do</Eyebrow><h2>A plan for better decisions, not a promise about the outcome.</h2></div><div className="prose"><p>The book does not predict exactly which jobs will change or guarantee job security. It gives you a structured way to examine your position, gather evidence, consider options, and take steps you can review.</p><p>You do not need to be an AI specialist to use the framework. The focus is your work, the value you create, and the choices available to you.</p><Link className="arrow-link" href="/framework/">Read the complete free framework <span aria-hidden="true">→</span></Link></div></div></section>
  </main>;
}
