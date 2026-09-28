import Link from 'next/link';
import Image from 'next/image';
import { AdaptorWordmark, ArticleCard, ArrowLink, Eyebrow } from './components/SiteShell';
import { pageMetadata } from './lib/seo';
import { articles } from './lib/site-data';

export const metadata = pageMetadata({
  title: 'AI-era work, clearly considered',
  description: 'Understand the ADAPTOR framework through five people and seven Work Profiles. Explore the guide for building a plan for your own work.',
  path: '/',
  image: { url: '/personas.png', alt: 'Five professionals representing different kinds of work', width: 1594, height: 986 },
});

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <Eyebrow>Practical thinking for AI-era work</Eyebrow>
            <h1>If AI changes the demand for work like mine, what should I do next?</h1>
            <p className="lede">AI is changing tasks, roles, expectations and business models. A clearer picture of your own work will help you decide how to respond.</p>
            <div className="hero-actions">
              <Link className="button" href="#framework">See how ADAPTOR works <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <div className="hero-art">
            <Image src="/personas.png" width={1594} height={986} alt="Five professionals representing different kinds of work" priority />
          </div>
        </div>
      </section>

      <section className="section" id="the-problem">
        <div className="container split">
          <div>
            <Eyebrow>The problem</Eyebrow>
            <h2>AI can change the demand for work, even when the job remains.</h2>
          </div>
          <div className="prose">
            <p>When a task becomes faster, cheaper, or self-service, an organisation may rethink the workflow around it: who does the work, how many people are needed, and what skills matter. A job title alone rarely tells the whole story.</p>
            <p>The useful question is more specific: which parts of your work are changing, what value do you still bring, and what could you do next? ADAPTOR gives those questions an order.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="framework">
        <div className="container">
          <Eyebrow>The framework</Eyebrow>
          <h2 className="framework-name">ADAPTOR</h2>
          <p className="framework-intro">ADAPTOR gives you a sequence for thinking about AI and your work. The seven Work Profiles help describe the work beneath a job title. A personal SWOT then connects that picture to goals and action.</p>

          <div className="framework-visual framework-visual-wide">
            <div className="framework-visual-copy">
              <span className="framework-kicker">One connected method</span>
              <h3>From the work you do to a grounded next move.</h3>
              <div className="path">
                <div className="path-item"><span className="path-dot">1</span><span><strong>Profile</strong><small>Identify the mix of work beneath your job title.</small></span></div>
                <div className="path-item"><span className="path-dot">2</span><span><strong>Personal SWOT</strong><small>Examine that work using evidence about your position and what is changing.</small></span></div>
                <div className="path-item"><span className="path-dot">3</span><span><strong>Goals</strong><small>Choose outcomes that respond to the most important signals.</small></span></div>
                <div className="path-item"><span className="path-dot">4</span><span><strong>Action</strong><small>Make a move, learn from it, and review the plan.</small></span></div>
              </div>
            </div>
          </div>

          <div className="framework-profile-intro"><Eyebrow>The seven Work Profiles</Eyebrow><h3>What does ADAPTOR stand for?</h3><p>Each letter names a kind of work, from Administrative Operators to Relationship Workers. A role may contain several. That mix gives you a starting point for the personal SWOT.</p></div>
          <AdaptorWordmark />
          <div className="hero-actions"><Link className="button" href="/framework/">Read the framework <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section blue-band" id="examples">
        <div className="container split">
          <div>
            <Eyebrow>See the method at work</Eyebrow>
            <h2>See what the process can produce.</h2>
          </div>
          <div className="prose">
            <p>Five illustrative people show what personal Profiles, SWOT findings, goals and actions can look like. The seven Work Profiles show broader patterns in different kinds of work.</p>
            <div className="hero-actions"><Link className="button" href="/examples/">Follow the five people <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/profiles/">Browse seven Work Profiles</Link></div>
          </div>
        </div>
      </section>

      <section className="section" id="book">
        <div className="container book-page-grid">
          <Image className="book-cover" src="/cover.png" width={330} height={528} alt="Cover of Be an AI-Era ADAPTOR" />
          <div className="book-copy">
            <Eyebrow>Go further with the book</Eyebrow>
            <h2>Apply ADAPTOR with a guide beside you.</h2>
            <p>The examples on this site show possible results. <Link className="inline-link" href="/book/"><em>Be an AI-Era ADAPTOR</em></Link> helps you apply the method to your own work, with a structured assessment, detailed guidance and a companion workbook.</p>
            <Link className="button" href="/book/">Get the book to build your plan <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section blue-band">
        <div className="container">
          <div className="section-header">
            <div><Eyebrow>Further reading</Eyebrow><h2>Understand workplace change before deciding what it means for you.</h2></div>
            <ArrowLink href="/blog/">Browse all articles</ArrowLink>
          </div>
          <div className="article-grid">
            {articles.slice(0, 2).map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
