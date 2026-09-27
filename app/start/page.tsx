import Link from 'next/link';
import { BookCta, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../lib/seo';
import { siteConfig } from '../lib/site-data';

export const metadata = pageMetadata({
  title: 'Start with ADAPTOR',
  description: 'Map one part of your work with the ADAPTOR Starter Sheet. Use this short exercise to connect a Work Profile, personal SWOT, goal, and action.',
  path: '/start/',
  image: { url: '/everyday-work-audit.webp', alt: 'A professional mapping a work process beside a laptop', width: 1594, height: 986 },
});

const steps = [
  ['01', 'Profile', 'Name one recurring activity and choose the one or two Work Profiles that describe it. This is a starting point; the full site explains how to map a wider role.'],
  ['02', 'Personal SWOT', 'Write one observed Threat or Opportunity affecting that activity and one relevant Strength or Weakness. Note what you have actually seen.'],
  ['03', 'Goal', 'Choose an outcome for the next three months. Connect it to the two SWOT signals you selected.'],
  ['04', 'Action', 'Choose a move to begin within two weeks. Decide what progress would look like and when you will review it.'],
];

export default function StartPage() {
  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Start with ADAPTOR', path: '/start/' }]} />
    <section className="page-hero"><div className="container">
      <Eyebrow>Start with ADAPTOR</Eyebrow>
      <h1>Map one part of your work.</h1>
      <p className="lede">In about ten minutes, take one recurring activity through Profile, Personal SWOT, Goal, and Action. It is a simple way to begin using the free ADAPTOR framework in your own work.</p>
      <div className="hero-actions">
        <a className="button" href={siteConfig.starterSheetCopyUrl} target="_blank" rel="noreferrer">Make a copy in Google Sheets <span aria-hidden="true">↗</span></a>
        <a className="button button-outline" href="/adaptor-starter-sheet.xlsx" download>Download the Starter Sheet (.xlsx)</a>
      </div>
      <p className="starter-note">No email form. Saving a Google Sheets copy requires a Google account; the direct download does not.</p>
    </div></section>

    <section className="section"><div className="container split">
      <div className="prose">
        <Eyebrow>A small start, with room to continue</Eyebrow>
        <h2>One activity is enough to learn the sequence.</h2>
        <p>Choose a real, recurring piece of work—not your whole career. The Starter Sheet helps you connect one part of that work to an observed change, a goal, and an action you can review.</p>
        <p>The framework itself is explained in full on this site. When you are ready, use the <Link className="inline-link" href="/framework/">complete ADAPTOR guide</Link> to extend the method across your role. You can also work with paper or your own notes.</p>
        <p>Use a fictional or general description if your work contains confidential employer, client, or personal information.</p>
      </div>
      <div className="numbered-list">{steps.map(([number, title, copy]) => <div className="numbered-item" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
    </div></section>

    <section className="section section-tight blue-band"><div className="container split">
      <div><Eyebrow>What you will have</Eyebrow><h2>A useful first snapshot of your work.</h2></div>
      <div className="prose"><p>At the end, you will have one activity and profile mix, an evidence-backed SWOT pair, an outcome to aim for, and an action with a review date. It is a complete small exercise; it does not assess your whole career or predict your job security.</p><div className="hero-actions"><Link className="button" href="/framework/">Continue with the full method <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/profiles/">Explore the seven Work Profiles</Link></div></div>
    </div></section>
    <section className="section"><div className="container"><BookCta /></div></section>
  </main>;
}
