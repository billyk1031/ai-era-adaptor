import Image from 'next/image';
import { BookCta, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, JsonLd, pageMetadata } from '../lib/seo';
import { siteConfig } from '../lib/site-data';

const companyUrl = 'https://peachandavo.co.uk/';

export const metadata = pageMetadata({
  title: 'About the framework author - Billy Kan',
  description: 'Meet Billy Kan, creator of the ADAPTOR framework and author of Be an AI-Era ADAPTOR. Learn about his delivery and change experience and Peach & Avo Ventures LLP.',
  path: '/about/',
  image: { url: '/billy-kan.png', alt: 'Portrait of Billy Kan', width: 319, height: 320 },
});

export default function AboutPage() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/about/#billy-kan`,
    name: 'Billy Kan',
    url: siteConfig.url + '/about/',
    image: siteConfig.url + '/billy-kan.png',
    jobTitle: 'Author and creator of the ADAPTOR framework',
    worksFor: { '@type': 'Organization', name: 'Peach & Avo Ventures LLP', url: companyUrl },
    sameAs: [siteConfig.linkedinUrl],
  };

  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About Billy Kan', path: '/about/' }]} />
      <section className="page-hero">
        <div className="container">
          <Eyebrow>About the author</Eyebrow>
          <h1>About the framework author - Billy Kan</h1>
          <p className="lede">The experience behind ADAPTOR, and the practical work that shaped it.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <Image className="about-portrait" src="/billy-kan.png" width={319} height={320} alt="Portrait of Billy Kan" priority />
          </div>
          <div className="prose">
            <h2>Helping people make sense of change.</h2>
            <p>Billy Kan is a delivery leader, agile coach, change practitioner, and entrepreneur with decades of experience across technology, financial services, business change, and digital delivery.</p>
            <p>He has worked with multinational teams, including in major financial institutions, to deliver complex change and improve how people work together. That experience shapes ADAPTOR: a way to look beyond a job title, examine how demand for your work may change, and decide what to do next.</p>
            <p>Billy and his wife Fiona founded <a className="inline-link" href={companyUrl} target="_blank" rel="noreferrer">Peach & Avo Ventures LLP <span aria-hidden="true">↗</span></a> after moving from Hong Kong to the UK. Their work brings together delivery leadership, agile coaching, AI and workflow improvement, and the development of practical products and ventures.</p>
            <p>ADAPTOR is shared freely on this site. It gives people a way to examine changing work and make choices with the evidence they have. Individual outcomes will depend on their circumstances and employers.</p>
            <a className="arrow-link" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">Connect with Billy on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="section"><div className="container"><BookCta /></div></section>
      <JsonLd data={personData} />
    </main>
  );
}
