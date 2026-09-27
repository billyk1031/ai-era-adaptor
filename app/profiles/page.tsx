import Link from 'next/link';
import { ArrowLink, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../lib/seo';
import { profiles } from '../lib/site-data';

export const metadata = pageMetadata({
  title: 'The seven ADAPTOR Work Profiles',
  description: 'Explore the seven ADAPTOR Work Profiles and map the mix of activities beneath your job title. Profiles describe work, not personality or job risk.',
  path: '/profiles/',
  image: { url: '/personas.png', alt: 'Five professionals representing different kinds of work', width: 1594, height: 986 },
});

export default function ProfilesPage() {
  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Work Profiles', path: '/profiles/' }]} />
    <section className="page-hero"><div className="container"><Eyebrow>ADAPTOR · Step 1 of 4</Eyebrow><h1>Which kinds of work fill your week?</h1><p className="lede">The seven ADAPTOR Work Profiles are the first step of the framework. They describe broad kinds of work, from keeping operations moving to building relationships. Choose the mix that reflects your responsibilities, then use it to focus your Personal SWOT on the work you actually do.</p><div className="hero-actions"><Link className="button" href="/framework/">See how profiles fit the full method <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/start/">Map one activity</Link></div></div></section>
    <section className="section"><div className="container"><p className="section-intro">Start with the work people rely on you to do. Choose a Primary Profile and an important Secondary Profile. Add a Supporting Profile if it affects your SWOT, or a Desired Profile if you want to move toward different work. You do not need exact percentages.</p><div className="profile-grid">{profiles.map((profile) => <article className="profile-card" key={profile.slug}><span className="profile-letter">{profile.letter}</span><h3>{profile.name}</h3><p>{profile.nature}</p><ArrowLink href={'/profiles/' + profile.slug + '/'}>Explore this profile</ArrowLink></article>)}</div></div></section>
    <section className="section blue-band"><div className="container split"><div><Eyebrow>Use your profile mix</Eyebrow><h2>A profile points to questions. Your evidence supplies the answers.</h2></div><div className="prose"><p>The same profile can mean different things in different organisations and at different career stages. Look at what has changed in your tasks, expectations, customer demand, and the value you contribute. Carry those observations into your Personal SWOT.</p><Link className="arrow-link" href="/framework/#personal-swot">Build your personal AI-Era SWOT <span aria-hidden="true">→</span></Link></div></div></section>
  </main>;
}
