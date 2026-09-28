import Link from 'next/link';
import { Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({ title: 'The ADAPTOR framework', description: 'Explore the ADAPTOR framework, five illustrative people and seven Work Profiles.', path: '/start/', image: { url: '/personas.png', alt: 'Five professionals representing different kinds of work', width: 1594, height: 986 } });

export default function StartPage() {
  return <main><BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Start', path: '/start/' }]} /><section className="page-hero"><div className="container"><Eyebrow>ADAPTOR</Eyebrow><h1>A framework for understanding your work in the age of AI.</h1><p className="lede">The four-step method connects Work Profile, personal SWOT, goals and action. Its illustrated examples show possible results in different kinds of work.</p><div className="hero-actions"><Link className="button" href="/framework/">Explore the framework <span aria-hidden="true">→</span></Link></div></div></section></main>;
}
