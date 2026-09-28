import Link from 'next/link';
import { BookCta, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, JsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({ title: 'ADAPTOR framework and book FAQ', description: 'Questions about the ADAPTOR framework, five illustrative examples, seven Work Profiles, the book and companion workbook.', path: '/faq/', image: { url: '/workbook.png', alt: 'Preview of the ADAPTOR Framework Workbook', width: 1600, height: 983 } });

type FAQItem = { question: string; answer: string; link?: { href: string; label: string } };
const faqGroups: { title: string; items: FAQItem[] }[] = [
  { title: 'About the framework', items: [
    { question: 'What is the ADAPTOR framework?', answer: 'ADAPTOR is a practical way to examine how AI-era change may affect your work. It moves from Work Profile to personal SWOT, then to goals and action.' },
    { question: 'What can I find on this site?', answer: 'The framework page explains the four connected steps. Five illustrative people show individual results, while the seven Work Profiles show broader patterns in different kinds of work.', link: { href: '/framework/', label: 'Explore the framework' } },
    { question: 'Is ADAPTOR a personality test or job-risk score?', answer: 'Work Profiles describe the work inside a role, often as a mix of several kinds. Your personal SWOT then examines evidence about your position and what may be changing.' },
    { question: 'What are the seven Work Profiles?', answer: 'Administrative Operators, Digital Builders, Analysts, Professional Advisors, Team Coordinators, Output Creators and Relationship Workers. A person’s role may contain several.', link: { href: '/profiles/', label: 'Browse the profiles' } },
  ] },
  { title: 'About the illustrations', items: [
    { question: 'Are the five people real?', answer: 'Aisha, Ben, Chloe, David and Emma are illustrative examples built around recognisable work situations. Each shows one way the process could play out.', link: { href: '/examples/', label: 'Meet the five people' } },
    { question: 'How are the Work Profile pages different?', answer: 'A persona page follows one individual situation. Each Work Profile page describes a broader kind of work and walks through a typical SWOT, goal, actions and review.' },
  ] },
  { title: 'About the book', items: [
    { question: 'What does the book add?', answer: 'The book guides you through applying ADAPTOR to your own work. It includes a ten-scenario Profile assessment, seven detailed SWOT chapters, five continuing examples, goal and action guidance, a quarterly review process and practical workplace advice.', link: { href: '/book/', label: 'Explore the book' } },
    { question: 'What is the companion workbook?', answer: 'The ADAPTOR Framework Workbook is a Google Sheet companion for recording your Profile assessment, personal SWOT, Goal Bank, actions and review notes. Access instructions come with the book.', link: { href: '/book/#companion-workbook', label: 'See the companion workbook' } },
    { question: 'Does the book guarantee job security?', answer: 'Employers make their own decisions, so no plan can guarantee an outcome. The guide helps you examine evidence, consider options and take steps you can review.', link: { href: '/book/', label: 'Explore the book' } },
    { question: 'Where can I buy the book?', answer: 'Be an AI-Era ADAPTOR is available on Amazon as a Kindle eBook and paperback. Kindle Unlimited members can also read the eBook through their subscription.', link: { href: '/book/', label: 'See the Book page' } },
  ] },
];
const allFaqs = faqGroups.flatMap((group) => group.items);

export default function FAQPage() {
  const structuredData = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: allFaqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
  return <main><BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq/' }]} /><section className="page-hero"><div className="container"><Eyebrow>Questions, answered</Eyebrow><h1>About ADAPTOR and the book.</h1><p className="lede">How the method works, what the illustrations show, and how the book supports a personal plan.</p></div></section><section className="section"><div className="container faq-groups">{faqGroups.map((group) => <section key={group.title}><h2>{group.title}</h2><div className="faq-list">{group.items.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><div className="faq-answer"><p>{item.answer}</p>{item.link && <p><Link className="inline-link" href={item.link.href}>{item.link.label} →</Link></p>}</div></details>)}</div></section>)}</div></section><JsonLd data={structuredData} /><section className="section"><div className="container"><BookCta compact /></div></section></main>;
}
