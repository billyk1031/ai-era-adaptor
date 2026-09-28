import Image from 'next/image';
import Link from 'next/link';
import { ArrowLink, BookCta, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd } from '../lib/seo';
import type { Profile } from '../lib/site-data';
import type { ProfileWalkthrough as Walkthrough } from '../lib/profile-walkthroughs';

export default function ProfileWalkthrough({ profile, walkthrough }: { profile: Profile; walkthrough: Walkthrough }) {
  const swot = [
    ['Strength', walkthrough.swot.strength],
    ['Weakness', walkthrough.swot.weakness],
    ['Opportunity', walkthrough.swot.opportunity],
    ['Threat', walkthrough.swot.threat],
  ];

  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Work Profiles', path: '/profiles/' }, { name: profile.name, path: `/profiles/${profile.slug}/` }]} />
    <section className="article-hero">
      <div className="container work-profile-hero">
        <div>
          <Eyebrow>Work Profile · Generic illustration</Eyebrow>
          <h1><span className="profile-inline-letter" aria-hidden="true">{profile.letter}</span>{' '}{profile.name}</h1>
          <p className="lede">{walkthrough.opening}</p>
        </div>
        <Image className="work-profile-hero-image" src={`/work-profiles/${profile.slug}.jpg`} width={1254} height={1254} alt={`Tools and work associated with ${profile.name}`} />
      </div>
    </section>
    <section className="section">
      <div className="container split">
        <div><Eyebrow>01 · Profile</Eyebrow><h2>What the work contributes.</h2><p>{walkthrough.scenario}</p><p>{walkthrough.work}</p></div>
        <div className="workbook-panel"><Eyebrow>How AI may change the work</Eyebrow><h3>{walkthrough.changeHeading}</h3><p>{walkthrough.change}</p><p>{walkthrough.caution}</p></div>
      </div>
    </section>
    <section className="section section-tight blue-band">
      <div className="container">
        <Eyebrow>02 · A typical AI-Era SWOT</Eyebrow>
        <h2>Four signals worth testing.</h2>
        <p className="section-intro">These findings suit the situation above. Your own SWOT will depend on what you can see in your work.</p>
        <div className="swot-grid">{swot.map(([label, finding]) => <article className="swot-card" key={label}><h3>{label}</h3><p>{finding}</p></article>)}</div>
        <p className="example-caveat">{walkthrough.swotComment}</p>
      </div>
    </section>
    <section className="section">
      <div className="container split">
        <div><Eyebrow>03 · An illustrative goal</Eyebrow><h2>{walkthrough.goalHeading}</h2></div>
        <div className="prose"><p><strong>{walkthrough.goal}</strong></p><p>{walkthrough.goalLogic}</p></div>
      </div>
    </section>
    <section className="section section-tight blue-band">
      <div className="container">
        <Eyebrow>04 · Possible actions and review</Eyebrow>
        <h2>Put the goal to work.</h2>
        <div className="example-chain">
          <article><h3>First moves</h3><ul>{walkthrough.actions.map((action) => <li key={action}>{action}</li>)}</ul></article>
          <article><h3>What to review</h3><p>{walkthrough.review}</p></article>
        </div>
        <p className="example-caveat">{walkthrough.advice}</p>
      </div>
    </section>
    <section className="section">
      <div className="container split">
        <div><Eyebrow>Apply the lens carefully</Eyebrow><h2>One Work Profile is rarely the whole role.</h2></div>
        <div className="prose"><p>Compare this pattern with the other <Link className="inline-link" href="/profiles/">Work Profiles</Link> that appear in your role. Your own SWOT will need evidence from the decisions, results and responsibilities that matter in your work.</p><ArrowLink href={`/examples/${walkthrough.relatedPersona.slug}/`}>See {walkthrough.relatedPersona.name}’s individual example</ArrowLink></div>
      </div>
    </section>
    <section className="section"><div className="container"><BookCta /></div></section>
  </main>;
}
