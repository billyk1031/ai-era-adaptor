import Link from 'next/link';
import { AdaptorWordmark, ArrowLink, BookCta, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'The ADAPTOR framework: a free, complete guide',
  description: 'Learn the complete ADAPTOR method: map your Work Profile, build an evidence-based personal SWOT, set connected goals, and turn them into actions you can review.',
  path: '/framework/',
  image: { url: '/personas.png', alt: 'Five professionals representing different kinds of work', width: 1594, height: 986 },
});

export default function FrameworkPage() {
  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'The ADAPTOR framework', path: '/framework/' }]} />
    <section className="page-hero"><div className="container">
      <Eyebrow>The ADAPTOR framework</Eyebrow>
      <h1>A practical way to understand your work and decide what to do next.</h1>
      <p className="lede">ADAPTOR is free to use in full. It helps you look beneath your job title, assess how AI-era changes affect your position, choose goals that respond to what you find, and take action.</p>
      <div className="hero-actions"><Link className="button" href="/start/">Start with one part of your work <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/profiles/">Browse the Work Profiles</Link></div>
      <AdaptorWordmark />
    </div></section>

    <section className="section section-tight"><div className="container">
      <div className="section-header"><div><Eyebrow>One connected method</Eyebrow><h2>From what you do to what you will do next.</h2></div></div>
      <div className="method-map" aria-label="ADAPTOR process: Profile, Personal SWOT, Goals, Action">
        <div><span>01</span><strong>Profile</strong><small>Where am I now?</small></div><span className="method-arrow" aria-hidden="true">→</span>
        <div><span>02</span><strong>Personal SWOT</strong><small>What is changing around and within my work?</small></div><span className="method-arrow" aria-hidden="true">→</span>
        <div><span>03</span><strong>Goals</strong><small>Where do I want to move?</small></div><span className="method-arrow" aria-hidden="true">→</span>
        <div><span>04</span><strong>Action</strong><small>What will I do and review?</small></div>
      </div>
      <p className="section-intro">You can complete every step with this guide and your own notes. The examples below use one fictional person so you can see how each output feeds the next.</p>
    </div></section>

    <section className="section method-section" id="profile"><div className="container method-layout">
      <div className="method-index"><span>01</span><p>Where am I now?</p></div>
      <div className="method-content"><Eyebrow>Profile</Eyebrow><h2>Describe the work, not just the job title.</h2>
        <p>A job title can hide a mix of very different activities. Start with the work you are paid, trusted, or expected to do. The seven ADAPTOR Work Profiles describe broad kinds of work; most roles combine more than one.</p>
        <ol className="instruction-list"><li>Write down the activities that take up a meaningful part of your working week.</li><li>Choose the profile that best describes the main work you are responsible for as your <strong>Primary Work Profile</strong>.</li><li>Choose an important second kind of work as your <strong>Secondary Work Profile</strong>. Add a Supporting Profile if it materially affects your SWOT, or a Desired Profile if you want to move toward different work.</li><li>Sense-check the mix against actual responsibilities, outcomes, and feedback. You do not need exact percentages; this is a useful map, not a measurement.</li></ol>
        <div className="method-prompt"><strong>Ask yourself</strong><p>What work do people depend on me to do? What do I spend time doing? Where do I want to build more responsibility?</p></div>
        <p><strong>Output:</strong> a current work-profile mix that tells you which activities and responsibilities to examine in your Personal SWOT. A profile is not a personality type or a job-risk score.</p>
        <ArrowLink href="/profiles/">Read all seven Work Profiles</ArrowLink>
      </div>
    </div></section>

    <section className="section method-section section-alt" id="personal-swot"><div className="container method-layout">
      <div className="method-index"><span>02</span><p>What is changing?</p></div>
      <div className="method-content"><Eyebrow>Personal AI-Era SWOT</Eyebrow><h2>Build a picture of your position from real signals.</h2>
        <p>Bring your Primary and Secondary Work Profiles into this step. For each, look at the activities you actually do, the value others rely on, and the changes you have observed. The profiles tell you where to look; your SWOT makes the assessment personal. Strengths and Weaknesses are features of your current position. Opportunities and Threats are changes around you that could increase or reduce the demand for your work.</p>
        <div className="swot-grid">
          <article className="swot-card"><h3>Strengths</h3><p>Human value you bring that remains useful as AI spreads: context, judgement, trust, accountability, or knowledge of how work gets done.</p></article>
          <article className="swot-card"><h3>Weaknesses</h3><p>Parts of your work or positioning that are routine, exposed, difficult to see, generic, or underdeveloped.</p></article>
          <article className="swot-card"><h3>Opportunities</h3><p>Ways AI may help you improve quality, move toward more valuable work, build options, or create something new.</p></article>
          <article className="swot-card"><h3>Threats</h3><p>Ways AI may reduce demand, compress roles, change expectations, enable self-service, or weaken your current position.</p></article>
        </div>
        <ol className="instruction-list"><li>Consider your profile mix, career stage, industry, organisation, and any Desired Profile.</li><li>Write a few observations in each box. Keep each statement specific enough to discuss; three to five useful signals per box is a workable starting point, not a quota.</li><li>For each signal, note what you have actually seen: a changed workflow, customer request, manager decision, quality issue, hiring pattern, or repeated task.</li><li>Separate the evidence from your interpretation. Mark what you still need to find out instead of treating a worry or forecast as a fact.</li><li>Choose the signals that could matter most to your work, options, or timing. You do not need to act on every item at once.</li></ol>
        <div className="method-prompt"><strong>Ask yourself</strong><p>What have I observed? What am I inferring from it? What would help me check whether that interpretation is right?</p></div>
        <p><strong>Output:</strong> a personal, evidence-backed SWOT that gives you several real starting points for goals.</p>
      </div>
    </div></section>

    <section className="section method-section" id="goals"><div className="container method-layout">
      <div className="method-index"><span>03</span><p>Where do I want to move?</p></div>
      <div className="method-content"><Eyebrow>Goals</Eyebrow><h2>Connect a change outside you to a response you can shape.</h2>
        <p>Start with one Threat you need to respond to or one Opportunity you want to develop. Then decide whether to use a Strength or reduce a Weakness. The goal is the outcome you want; it is not yet the list of tasks you will do.</p>
        <div className="goal-formula"><span>Threat or Opportunity</span><b>+</b><span>Strength to use or Weakness to reduce</span><b>→</b><span>A concrete outcome</span></div>
        <p>Write goals for the horizons that matter to you. A connected, concrete, feasible goal answers three questions: does it respond to a real SWOT signal, would you recognise progress, and does it fit the time available?</p>
        <div className="goal-horizons">
          <article><h3>Short term</h3><p><strong>Now to 3 months.</strong> Choose a realistic outcome you can begin influencing soon.</p></article>
          <article><h3>Medium term</h3><p><strong>3 to 12 months.</strong> Build toward stronger value, positioning, or contribution over time.</p></article>
          <article><h3>Long term</h3><p><strong>12 months and beyond.</strong> Build options, credibility, or a direction that may take longer to prepare.</p></article>
        </div>
        <div className="method-prompt"><strong>Ask yourself</strong><p>Which Threat or Opportunity deserves attention first? What Strength could help, or what Weakness would make the response more realistic to address?</p></div>
        <p><strong>Output:</strong> one or more goals tied to specific SWOT signals. Keep them as outcomes; you will decide the actions in the next step.</p>
      </div>
    </div></section>

    <section className="section method-section section-alt" id="action"><div className="container method-layout">
      <div className="method-index"><span>04</span><p>How will I get there?</p></div>
      <div className="method-content"><Eyebrow>Action and review</Eyebrow><h2>Choose a move that teaches you something.</h2>
        <p>Actions translate a goal into something observable. A short-term goal can have a practical action plan. Medium- and long-term goals usually need a nearer milestone first.</p>
        <ol className="instruction-list"><li>For each goal, ask what must change for the outcome to become more likely.</li><li>Write a clear action you can begin. Check that it supports the goal and that you will be able to tell whether it happened or helped.</li><li>For a longer goal, choose the next milestone rather than trying to plan every step in advance.</li><li>Set a date to review what happened. Note what you learned, whether the goal still fits, and what action should come next.</li></ol>
        <p>Revisit your profile mix and SWOT when your responsibilities, organisation, market, or evidence changes. A quarterly check-in is one practical rhythm; review sooner when something important shifts.</p>
        <div className="method-prompt"><strong>Ask yourself</strong><p>What will I do first? What would count as useful progress? When will I look at the result and decide whether to continue, adjust, or stop?</p></div>
        <p><strong>Output:</strong> an action or milestone linked to a goal, plus a date to learn from the result.</p>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-header"><div><Eyebrow>One fictional example</Eyebrow><h2>Follow the same work through all four steps.</h2></div></div>
      <p className="section-intro">This made-up example shows how a person could reason from observations to a plan. It is an illustration, not a prediction about administrative roles.</p>
      <div className="example-chain">
        <article><span>01 · PROFILE</span><h3>A mixed role</h3><p>An administrative coordinator spends time preparing meeting materials and tracking follow-up. Administrative Operator is the primary profile; Team Coordinator is secondary.</p></article>
        <article><span>02 · PERSONAL SWOT</span><h3>Four useful signals</h3><ul><li><strong>Strength:</strong> spots sensitive exceptions and dependencies others miss.</li><li><strong>Weakness:</strong> routine updates take time and can obscure that judgement.</li><li><strong>Opportunity:</strong> with approved tools, a first draft could take less time, leaving more room for review and follow-up.</li><li><strong>Threat:</strong> managers may self-serve routine summaries, reducing demand for some of the current output.</li></ul></article>
        <article><span>03 · GOALS</span><h3>Pick outcomes by horizon</h3><ul><li><strong>Short:</strong> within three months, make exception judgement more visible in team updates.</li><li><strong>Medium:</strong> over 3–12 months, develop a repeatable contribution to improving a process that produces recurring exceptions.</li><li><strong>Long:</strong> over 12+ months, explore a move toward broader operations or delivery coordination if that direction still fits.</li></ul></article>
        <article><span>04 · ACTION</span><h3>Try and review a move</h3><p>For the short-term goal, add a brief exception-and-recommendation note to one update within two weeks. Ask a manager whether it helped, record the response, and review it after two weeks.</p></article>
      </div>
      <p className="example-caveat">A useful plan creates a better basis for a decision. It cannot guarantee what an employer, customer, or market will do.</p>
    </div></section>

    <section className="section blue-band"><div className="container split"><div><Eyebrow>Begin wherever you are</Eyebrow><h2>Use the whole guide, or map one activity first.</h2></div><div className="prose"><p>The ADAPTOR Starter Sheet takes one recurring activity through the same four steps. Use it as a quick way to begin, then extend your thinking across the rest of your role using this page and the Work Profile library.</p><div className="hero-actions"><Link className="button" href="/start/">Open the Starter Exercise <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/profiles/">Browse Work Profiles</Link></div></div></div></section>
    <section className="section"><div className="container"><BookCta /></div></section>
  </main>;
}
