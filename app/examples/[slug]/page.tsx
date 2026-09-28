import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLink, BookCta, Eyebrow } from '../../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../../lib/seo';
import { additionalPersonas, getAdditionalPersona } from '../../lib/personas';

export function generateStaticParams() {
  return additionalPersonas.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const persona = getAdditionalPersona((await params).slug);
  return persona ? pageMetadata({
    title: `${persona.name}’s ADAPTOR example`,
    description: `See ${persona.name}’s Work Profile, personal SWOT, goal, actions and review in an illustrative ADAPTOR example.`,
    path: `/examples/${persona.slug}/`,
    image: { url: `/personas/${persona.slug}.jpg`, alt: `Illustration of ${persona.name}`, width: 1254, height: 1254 },
  }) : {};
}

export default async function PersonaPage({ params }: { params: Promise<{ slug: string }> }) {
  const persona = getAdditionalPersona((await params).slug);
  if (!persona) notFound();

  const swot = [
    ['Strength', persona.swot.strength],
    ['Weakness', persona.swot.weakness],
    ['Opportunity', persona.swot.opportunity],
    ['Threat', persona.swot.threat],
  ];

  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'People and examples', path: '/examples/' }, { name: persona.name, path: `/examples/${persona.slug}/` }]} />
    <section className="article-hero">
      <div className="container persona-hero">
        <div>
          <Eyebrow>Illustrative example · {persona.role}</Eyebrow>
          <h1>{persona.title}</h1>
          <p className="lede">{persona.intro}</p>
        </div>
        <Image className="persona-portrait persona-portrait-feature" src={`/personas/${persona.slug}.jpg`} width={1254} height={1254} alt={`Illustration of ${persona.name}`} />
      </div>
    </section>
    <section className="section">
      <div className="container split">
        <div><Eyebrow>01 · Profile</Eyebrow><h2>Where the work sits.</h2><p>{persona.context}</p></div>
        <div className="workbook-panel">
          <p><strong>Primary:</strong> {persona.profiles.primary}</p>
          <p><strong>Secondary:</strong> {persona.profiles.secondary}</p>
          <p><strong>Supporting:</strong> {persona.profiles.supporting}</p>
          <p><strong>Desired:</strong> {persona.profiles.desired}</p>
          <p>{persona.profiles.note}</p>
        </div>
      </div>
    </section>
    <section className="section section-tight blue-band">
      <div className="container">
        <Eyebrow>02 · Personal AI-Era SWOT</Eyebrow>
        <h2>Four findings that shape the response.</h2>
        <p className="section-intro">{persona.name} chooses the signals that matter in this working situation.</p>
        <div className="swot-grid">{swot.map(([label, finding]) => <article className="swot-card" key={label}><h3>{label}</h3><p>{finding}</p></article>)}</div>
        <p className="example-caveat">{persona.swotInsight}</p>
      </div>
    </section>
    <section className="section">
      <div className="container split">
        <div><Eyebrow>03 · Goal</Eyebrow><h2>{persona.horizon}.</h2></div>
        <div className="prose"><p><strong>{persona.goal}</strong></p><p>{persona.goalReason}</p></div>
      </div>
    </section>
    <section className="section section-tight blue-band">
      <div className="container">
        <Eyebrow>04 · Action and review</Eyebrow>
        <h2>Test the direction in real work.</h2>
        <div className="example-chain">
          <article><h3>First actions</h3><ul>{persona.actions.map((action) => <li key={action}>{action}</li>)}</ul></article>
          <article><h3>What the review revealed</h3><p>{persona.review}</p></article>
        </div>
        <p className="example-caveat"><strong>Next move:</strong> {persona.nextMove}</p>
      </div>
    </section>
    <section className="section">
      <div className="container split">
        <div><Eyebrow>What this illustrates</Eyebrow><h2>The value behind the visible work.</h2></div>
        <div className="prose">
          <p>{persona.takeaway}</p>
          <p>For the wider pattern, see <Link className="inline-link" href={`/profiles/${persona.relatedProfile.slug}/`}>{persona.relatedProfile.name}</Link>. Your own Profile and SWOT will depend on what is happening in your work.</p>
          <ArrowLink href="/examples/">Meet the five people</ArrowLink>
        </div>
      </div>
    </section>
    <section className="section"><div className="container"><BookCta /></div></section>
  </main>;
}
