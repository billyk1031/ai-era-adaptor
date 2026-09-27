import Link from 'next/link';
import Image from 'next/image';
import { AdaptorWordmark, ArticleCard, ArrowLink, Eyebrow } from './components/SiteShell';
import { pageMetadata } from './lib/seo';
import { articles, profiles } from './lib/site-data';

export const metadata = pageMetadata({
  title: 'AI-era work, clearly considered',
  description: 'Understand how AI may change your work, then use the free ADAPTOR framework to map your Work Profile, build a personal SWOT, set goals, and take action.',
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
            <p className="lede">AI is changing tasks, roles, expectations, and business models. To respond well, you need a clearer picture of your own work—not just another prediction about jobs.</p>
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
          <Eyebrow>The free framework</Eyebrow>
          <h2 className="framework-name">ADAPTOR</h2>
          <p className="framework-intro">ADAPTOR is a complete, free method for turning uncertainty about AI and work into a plan you can revisit. Its seven Work Profiles help you see what your role is made of. From there, you build a Personal SWOT, choose goals, and take action.</p>

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

          <div className="framework-profile-intro">
            <Eyebrow>Step 1 · Profile</Eyebrow>
            <h3>Start with the kinds of work you actually do.</h3>
            <p>Each letter in ADAPTOR names a Work Profile. Most roles are a mix: choose a Primary Profile for the work people mainly rely on you to do, and a Secondary Profile for another important part. The profiles are lenses for your Personal SWOT—not personality types or a verdict on job risk.</p>
          </div>
          <AdaptorWordmark />
          <div className="profile-grid">
            {profiles.map((profile) => (
              <article className="profile-card" key={profile.slug}>
                <span className="profile-letter">{profile.letter}</span>
                <h3>{profile.name}</h3>
                <p>{profile.nature}</p>
                <ArrowLink href={'/profiles/' + profile.slug + '/'}>See the SWOT prompt</ArrowLink>
              </article>
            ))}
          </div>

          <div className="profile-to-swot">
            <div>
              <Eyebrow>Step 1 → Step 2</Eyebrow>
              <h3>Use your profile mix to make the SWOT personal.</h3>
            </div>
            <div>
              <p>For example, an administrative coordinator might combine Administrative Operator with Team Coordinator. That points them towards routine meeting summaries and sensitive follow-up. They can then ask what they have actually observed: is handling exceptions a Strength? Is self-service summarising a possible Threat? The profile identifies the work to examine; the SWOT assesses their own position.</p>
              <ArrowLink href="/framework/">Follow the complete four-step guide</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section blue-band" id="start">
        <div className="container split">
          <div>
            <Eyebrow>Put the method to work</Eyebrow>
            <h2>Begin with one real activity.</h2>
          </div>
          <div className="prose">
            <p>Once you understand the sequence, start small. The ADAPTOR Starter Exercise helps you take one recurring activity through Profile, Personal SWOT, Goals, and Action. It gives you a first useful result you can extend across the rest of your role.</p>
            <p>No account or email is needed. The framework and its full guide remain free to use.</p>
            <Link className="button" href="/start/">Open the Starter Exercise <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section" id="book">
        <div className="container book-page-grid">
          <Image className="book-cover" src="/cover.png" width={330} height={528} alt="Cover of Be an AI-Era ADAPTOR" />
          <div className="book-copy">
            <Eyebrow>Go further with the book</Eyebrow>
            <h2>Apply ADAPTOR with a guide beside you.</h2>
            <p>The framework is yours to use without buying anything. <em>Be an AI-Era ADAPTOR</em> makes it easier to put the method to work through deeper guidance, worked examples, a structured assessment, and a companion workbook for purchasers.</p>
            <p>If your first exercise raises more questions about your role or next move, the book helps you work through them in more depth.</p>
            <Link className="button" href="/book/">See what the book adds <span aria-hidden="true">→</span></Link>
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
