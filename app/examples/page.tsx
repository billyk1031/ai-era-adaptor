import Image from 'next/image';
import { ArrowLink, BookCta, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({ title: 'Five people applying ADAPTOR', description: 'Five illustrative examples show what an ADAPTOR Profile, SWOT, goal and action can look like in different working situations.', path: '/examples/', image: { url: '/personas.png', alt: 'Five illustrated professionals representing different kinds of work', width: 1594, height: 986 } });

const people = [
  { name: 'Aisha', role: 'Executive assistant', situation: 'Directors are beginning to handle routine drafting and summaries themselves. Aisha looks for a way to show the judgement and coordination behind her work.' },
  { name: 'Ben', role: 'Junior software developer', situation: 'Coding assistants speed up familiar tasks. Ben needs to keep learning and build evidence of technical judgement.' },
  { name: 'Chloe', role: 'Freelance copywriter', situation: 'Clients arrive with AI drafts. Chloe explores how to make her advice on audience and message more visible.' },
  { name: 'David', role: 'Customer service team leader', situation: 'A chatbot takes common questions. David examines the handoff to people and his team’s role in complex cases.' },
  { name: 'Emma', role: 'HR advisor', situation: 'Managers can self-serve routine policy answers. Emma focuses on the cases that still need contextual human review.' },
];

export default function ExamplesPage() {
  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'People and examples', path: '/examples/' }]} />
    <section className="page-hero"><div className="container"><Eyebrow>ADAPTOR in everyday work</Eyebrow><h1>Five people, five different ways through ADAPTOR.</h1><p className="lede">These illustrative examples show how a Work Profile can lead to a personal SWOT, a goal, actions and a later review. Each person faces a different kind of change at work.</p></div></section>
    <section className="section"><div className="container"><div className="section-header"><div><Eyebrow>Five situations</Eyebrow><h2>Recognisable work, individual results.</h2></div></div><div className="profile-grid persona-grid">{people.map((person) => <article className="profile-card persona-card" key={person.name}><Image className="persona-portrait" src={`/personas/${person.name.toLowerCase()}.jpg`} width={1254} height={1254} alt={`Illustration of ${person.name}`} /><h3>{person.name} · {person.role}</h3><p>{person.situation}</p><ArrowLink href={`/examples/${person.name.toLowerCase()}/`}>Follow {person.name}&apos;s example</ArrowLink></article>)}</div></div></section>
    <section className="section section-tight blue-band"><div className="container split"><div><Eyebrow>A different lens</Eyebrow><h2>See the broader pattern behind a role.</h2></div><div className="prose"><p>A person’s role usually combines several Work Profiles. For a generic view of how each kind of work may be affected by AI, browse the seven profile pages.</p><ArrowLink href="/profiles/">Explore the Work Profiles</ArrowLink></div></div></section>
    <section className="section"><div className="container"><BookCta /></div></section>
  </main>;
}
