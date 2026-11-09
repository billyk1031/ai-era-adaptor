import Link from 'next/link';

const startingPoints = [
  { href: '/blog/will-ai-replace-my-job/', title: 'Is AI putting my job at risk?', description: 'Separate changes you can observe from assumptions, then decide what to check or do next.', action: 'Assess your situation' },
  { href: '/blog/which-ai-skill-learn-next-role/', title: 'Which AI skill should I learn?', description: 'Choose something useful to make and use the project to decide what to learn next.', action: 'Choose a skill to practise' },
  { href: '/blog/how-ai-is-changing-everyday-work/', title: 'What is changing in my tasks?', description: 'Use a 20-minute audit to examine one piece of work and decide what to investigate.', action: 'Try the task audit' },
];

export function PracticalHelp() {
  return <section className="section section-tight practical-help" id="practical-help" aria-labelledby="practical-help-title">
    <div className="container">
      <p className="eyebrow">A practical starting point</p>
      <h2 id="practical-help-title">What would help you right now?</h2>
      <div className="practical-help-grid">
        {startingPoints.map(item => <Link className="practical-help-card" href={item.href} key={item.href}>
          <h3>{item.title}</h3><p>{item.description}</p>
          <span className="practical-help-action">{item.action} <span aria-hidden="true">→</span></span>
        </Link>)}
      </div>
    </div>
  </section>;
}
