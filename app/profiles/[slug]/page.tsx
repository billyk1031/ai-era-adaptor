import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLink, BookCta, Eyebrow } from '../../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../../lib/seo';
import { getProfile, profiles } from '../../lib/site-data';

export function generateStaticParams() { return profiles.map((profile) => ({ slug: profile.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const profile = getProfile((await params).slug);
  return profile ? pageMetadata({
    title: profile.name,
    description: profile.nature + ' Explore typical activities, possible AI-era changes, and questions to apply this Work Profile to your own role.',
    path: '/profiles/' + profile.slug + '/',
    image: { url: '/personas.png', alt: 'People representing the different kinds of work in ADAPTOR', width: 1594, height: 986 },
  }) : {};
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const profile = getProfile((await params).slug);
  if (!profile) notFound();
  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Work Profiles', path: '/profiles/' }, { name: profile.name, path: '/profiles/' + profile.slug + '/' }]} />
    <section className="article-hero"><div className="container"><Eyebrow>ADAPTOR · Step 1: Profile</Eyebrow><h1><span className="profile-inline-letter" aria-hidden="true">{profile.letter}</span>{' '}{profile.name}</h1><p className="lede">{profile.nature} Use this profile to identify activities and evidence for your Personal SWOT.</p></div></section>
    <section className="section"><div className="container split">
      <div className="prose"><Eyebrow>Typical activities</Eyebrow><h2>What this work contributes</h2><p>This profile can show up in many job titles. Look for the activities you do and the outcomes people count on you to deliver.</p><ul>{profile.examples.map((example) => <li key={example}>{example}</li>)}</ul></div>
      <div className="workbook-panel"><Eyebrow>Possible change</Eyebrow><h2>Where AI may affect the work</h2><p>{profile.exposure}</p><p>Whether that changes demand for the wider role depends on how the organisation uses the technology, what customers need, and who remains responsible for quality and outcomes.</p></div>
    </div></section>
    <section className="section section-tight blue-band"><div className="container split"><div><Eyebrow>Human contribution</Eyebrow><h2>What may still need your judgement</h2></div><div className="prose"><p>{profile.value}</p><p>These qualities do not automatically determine the future of a role. They become useful evidence when you can connect them to a decision, result, relationship, or responsibility that matters in your work.</p></div></div></section>
    <section className="section"><div className="container method-prompt profile-reflection"><Eyebrow>Apply this profile to your own work</Eyebrow><h2>A question to take into your Personal SWOT</h2><p>{profile.reflectionPrompt}</p><p>Write down one example you have observed. Separate what happened from what you think it may mean, then consider how it fits alongside the other profiles in your role. Is it evidence of a Strength or Weakness in your current position, or an Opportunity or Threat around your work?</p></div></section>
    <section className="section section-tight"><div className="container"><div className="section-header"><div><Eyebrow>Next · Personal SWOT</Eyebrow><h2>Use your profile mix to examine your own position.</h2></div><ArrowLink href="/framework/">See the complete method</ArrowLink></div><p className="section-intro">Set this profile alongside the other kinds of work in your role. Carry specific observations—not assumptions about the profile—into your Personal SWOT. From there, the framework helps you choose linked goals and actions.</p><div className="hero-actions"><Link className="button" href="/framework/#personal-swot">Build your Personal SWOT <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/profiles/">Browse all Work Profiles</Link></div></div></section>
    <section className="section"><div className="container"><BookCta compact /></div></section>
  </main>;
}
