import Link from 'next/link';
import { BookCta, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, JsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'ADAPTOR framework and book FAQ',
  description: 'Answers about using the complete free ADAPTOR framework, the Starter Exercise, the seven Work Profiles, and the book and companion workbook.',
  path: '/faq/',
  image: { url: '/workbook.png', alt: 'Preview of the ADAPTOR Framework Workbook', width: 1600, height: 983 },
});

type FAQItem = { question: string; answer: string; link?: { href: string; label: string; external?: boolean } };
const faqGroups: { title: string; items: FAQItem[] }[] = [
  { title: 'About the framework', items: [
    { question: 'What is the ADAPTOR framework?', answer: 'ADAPTOR is a practical framework for understanding how AI-era change may affect the demand for your work. It moves through Profile, Personal SWOT, Goals, and Action so you can examine your position and decide what to do next.' },
    { question: 'Can I use ADAPTOR without buying the book?', answer: 'Yes. The complete framework is free to use. This site explains all four steps, the seven Work Profiles, how to build an evidence-based Personal SWOT, how to set connected goals, and how to plan and review actions.' },
    { question: 'How do I complete the process using only this site?', answer: 'Read the framework guide and Work Profile pages, then apply each step to your role using your own notes. Map your work mix; record evidence in all four SWOT areas; connect important Threats or Opportunities to Strengths or Weaknesses; set goals across the horizons that matter; and choose actions or milestones with review dates.' },
    { question: 'Is ADAPTOR a personality test or a job-risk score?', answer: 'No. The Work Profiles describe kinds of work, not personality types or levels of job security. The framework helps you examine your own context and evidence; it does not predict whether your job will disappear.' },
    { question: 'What are the seven Work Profiles?', answer: 'Administrative Operators, Digital Builders, Analysts, Professional Advisors, Team Coordinators, Output Creators, and Relationship Workers. Most roles contain a mix. Choose profiles by looking at actual responsibilities rather than a job title alone.' },
  ] },
  { title: 'Getting started', items: [
    { question: 'Where should I begin?', answer: 'You can start with the complete guide or map one recurring activity in the ADAPTOR Starter Sheet. The Starter Exercise takes a small piece of your work through the same four steps. It has a Google Sheets copy option and a direct .xlsx download, with no email form.' },
    { question: 'What evidence should I put in my Personal SWOT?', answer: 'Use things you have actually observed: a workflow change, a repeated task, a customer request, a decision, a quality issue, feedback, or a change in expectations. Keep the observation separate from your interpretation, and note what you still need to find out.' },
    { question: 'Can ADAPTOR help if my role is already at risk?', answer: 'It can give you a way to focus quickly: what is changing, which parts of your contribution remain important, what options are available, and what action is useful now. It cannot predict an employer’s decision or replace practical advice about your specific employment situation.' },
  ] },
  { title: 'About the book', items: [
    { question: 'What does the book add if the framework is free?', answer: 'The book guides you through the method in one place, with a ten-scenario Profile assessment, detailed Work Profile and SWOT chapters, five recurring examples, connected goal guidance, action planning, quarterly review, and practical chapters on learning AI and showing evidence of value.' },
    { question: 'What is the companion workbook?', answer: 'The ADAPTOR Framework Workbook is a Google Sheet included for book purchasers. It supports the chapters with a Profile Assessment, AI-Era SWOT, Goal Bank, and Actions area. Access instructions are in the book. It is separate from the public Starter Sheet.', link: { href: '/book/#companion-workbook', label: 'See the companion workbook on the Book page' } },
    { question: 'Does the book teach AI tools or prompting?', answer: 'It is not a catalogue of AI tools or prompts. The book starts with your work and the outcomes you want, then considers where learning or using AI may help with a real goal.' },
    { question: 'Does the book promise an AI-proof career?', answer: 'No. It does not guarantee job security or predict exactly which roles will change. It offers a structured way to understand your position, consider your options, and make better-informed moves.' },
    { question: 'Where can I buy the book?', answer: 'Be an AI-Era ADAPTOR is available on Amazon as a Kindle eBook and paperback. Kindle Unlimited members can also read the eBook through their subscription.', link: { href: '/book/', label: 'See the Book page' } },
  ] },
];

const allFaqs = faqGroups.flatMap((group) => group.items);

export default function FAQPage() {
  const structuredData = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: allFaqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq/' }]} />
    <section className="page-hero"><div className="container"><Eyebrow>Questions, answered</Eyebrow><h1>About ADAPTOR and the book.</h1><p className="lede">How the framework works, how to use it here, and what the book adds.</p></div></section>
    <section className="section"><div className="container faq-groups">{faqGroups.map((group) => <section key={group.title}><h2>{group.title}</h2><div className="faq-list">{group.items.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><div className="faq-answer"><p>{item.answer}</p>{item.link && <p><Link className="inline-link" href={item.link.href} target={item.link.external ? '_blank' : undefined} rel={item.link.external ? 'noreferrer' : undefined}>{item.link.label}{item.link.external ? ' ↗' : ' →'}</Link></p>}</div></details>)}</div></section>)}</div></section>
    <JsonLd data={structuredData} />
    <section className="section"><div className="container"><BookCta compact /></div></section>
  </main>;
}
