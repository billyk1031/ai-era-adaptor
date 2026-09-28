import Link from 'next/link';
import Image from 'next/image';
import { ArrowLink, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../lib/seo';
import { profiles } from '../lib/site-data';

export const metadata = pageMetadata({
  title: 'The seven ADAPTOR Work Profiles',
  description: 'Explore seven kinds of work in the ADAPTOR framework and see how AI may change their tasks, value and demand.',
  path: '/profiles/',
  image: { url: '/work-profiles/analysts.jpg', alt: 'Illustrated analysis materials and magnifying glass', width: 1254, height: 1254 },
});

export default function ProfilesPage() {
  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Work Profiles', path: '/profiles/' }]} />
    <section className="page-hero"><div className="container"><Eyebrow>Seven Work Profiles</Eyebrow><h1>Seven kinds of work, seven ways AI may change the picture.</h1><p className="lede">The ADAPTOR Work Profiles describe work, not personality or job risk. They show how AI may affect common activities and where human judgement may matter. Most people combine more than one.</p></div></section>
    <section className="section"><div className="container"><p className="section-intro">Explore typical activities, possible changes and sources of human value across the seven profiles. Each page follows an illustrative SWOT through a goal, actions and review.</p><div className="profile-grid work-profile-grid">{profiles.map((profile) => <article className="profile-card work-profile-card" key={profile.slug}><Image className="work-profile-image" src={`/work-profiles/${profile.slug}.jpg`} width={1254} height={1254} alt={`Illustration of tools and work associated with ${profile.name}`} /><span className="profile-letter">{profile.letter}</span><h3>{profile.name}</h3><p>{profile.nature}</p><ArrowLink href={'/profiles/' + profile.slug + '/'}>See the walkthrough</ArrowLink></article>)}</div></div></section>
    <section className="section blue-band"><div className="container split"><div><Eyebrow>Read these as patterns</Eyebrow><h2>Look for evidence in your own work.</h2></div><div className="prose"><p>The same profile can look different across career stages, organisations and industries. Your own mix and SWOT need to reflect the work people actually rely on you to do.</p><Link className="arrow-link" href="/book/">See how the book helps <span aria-hidden="true">→</span></Link></div></div></section>
  </main>;
}
