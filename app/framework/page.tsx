import { AdaptorWordmark, ArrowLink, BookCta, Eyebrow } from '../components/SiteShell';
import { BreadcrumbJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'How the ADAPTOR framework works',
  description: 'Understand how ADAPTOR connects Work Profile, personal SWOT, goals and action, with five individual examples and seven Work Profiles.',
  path: '/framework/',
  image: { url: '/personas.png', alt: 'Five professionals representing different kinds of work', width: 1594, height: 986 },
});

export default function FrameworkPage() {
  return <main>
    <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'The ADAPTOR framework', path: '/framework/' }]} />
    <section className="page-hero"><div className="container">
      <Eyebrow>The ADAPTOR framework</Eyebrow>
      <h1>A practical way to understand your work and decide what to do next.</h1>
      <p className="lede">ADAPTOR connects four steps: describe the work, examine your position, choose goals and turn them into actions you can review.</p>
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
      <p className="section-intro">Each step produces something that shapes the next: a description of work, a personal assessment, an outcome, and a practical move to review.</p>
    </div></section>

    <section className="section method-section" id="profile"><div className="container method-layout">
      <div className="method-index"><span>01</span><p>Where am I now?</p></div>
      <div className="method-content"><Eyebrow>Profile</Eyebrow><h2>Look beneath your job title.</h2>
        <p>A job title can hide a mix of very different activities. Start with the work you are paid, trusted, or expected to do. The seven ADAPTOR Work Profiles describe broad kinds of work; most roles combine more than one.</p>
        <ol className="instruction-list"><li>Write down the activities that take up a meaningful part of your working week.</li><li>Choose the profile that best describes the main work you are responsible for as your <strong>Primary Work Profile</strong>.</li><li>Choose an important second kind of work as your <strong>Secondary Work Profile</strong>. Add a Supporting Profile if it materially affects your SWOT, or a Desired Profile if you want to move toward different work.</li><li>Sense-check the mix against actual responsibilities, outcomes and feedback. Approximate proportions are enough to make the map useful.</li></ol>
        <div className="method-prompt"><strong>Ask yourself</strong><p>What work do people depend on me to do? What do I spend time doing? Where do I want to build more responsibility?</p></div>
        <p><strong>Output:</strong> a current work-profile mix that tells you which activities and responsibilities to examine in your Personal SWOT. It describes the work you do and the direction you may want to explore.</p>
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
        <ol className="instruction-list"><li>Consider your profile mix, career stage, industry, organisation and any Desired Profile.</li><li>Write a few observations in each box. Keep each statement specific enough to discuss; three to five useful signals per box is a workable starting point.</li><li>For each signal, note what you have actually seen: a changed workflow, customer request, manager decision, quality issue, hiring pattern or repeated task.</li><li>Separate the evidence from your interpretation. Mark what you still need to find out so a worry does not harden into a fact.</li><li>Choose the signals that could matter most to your work, options or timing. Start with the ones that need attention now.</li></ol>
        <div className="method-prompt"><strong>Ask yourself</strong><p>What have I observed? What am I inferring from it? What would help me check whether that interpretation is right?</p></div>
        <p><strong>Output:</strong> a personal, evidence-backed SWOT that gives you several real starting points for goals.</p>
      </div>
    </div></section>

    <section className="section method-section" id="goals"><div className="container method-layout">
      <div className="method-index"><span>03</span><p>Where do I want to move?</p></div>
      <div className="method-content"><Eyebrow>Goals</Eyebrow><h2>Connect a change outside you to a response you can shape.</h2>
        <p>Start with one Threat you need to respond to or one Opportunity you want to develop. Then decide whether to use a Strength or reduce a Weakness. Write the outcome you want to reach; you can choose the actions once that outcome is clear.</p>
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
        <ol className="instruction-list"><li>For each goal, ask what must change for the outcome to become more likely.</li><li>Write a clear action you can begin. Check that it supports the goal and that you will be able to tell whether it happened or helped.</li><li>For a longer goal, choose the next milestone and leave later steps open to what you learn.</li><li>Set a date to review what happened. Note what you learned, whether the goal still fits, and what action should come next.</li></ol>
        <p>Revisit your profile mix and SWOT when your responsibilities, organisation, market, or evidence changes. A quarterly check-in is one practical rhythm; review sooner when something important shifts.</p>
        <div className="method-prompt"><strong>Ask yourself</strong><p>What will I do first? What would count as useful progress? When will I look at the result and decide whether to continue, adjust, or stop?</p></div>
        <p><strong>Output:</strong> an action or milestone linked to a goal, plus a date to learn from the result.</p>
      </div>
    </div></section>

    <section className="section blue-band"><div className="container"><Eyebrow>The method in context</Eyebrow><h2>Two ways to see what ADAPTOR can produce.</h2><p className="section-intro">Five people show how the method plays out in individual situations. The seven Work Profiles explore broader patterns you may recognise in your own role. Your workplace evidence will tell you which patterns matter.</p><div className="example-chain"><article><h3>Five people</h3><p>See a Profile mix, selected SWOT findings, a goal, actions and a later review in one continuing situation.</p><ArrowLink href="/examples/">Explore the people</ArrowLink></article><article><h3>Seven kinds of work</h3><p>Compare how AI might affect different activities and where judgement, context or trust could matter.</p><ArrowLink href="/profiles/">Browse Work Profiles</ArrowLink></article></div></div></section>
    <section className="section"><div className="container"><BookCta /></div></section>
  </main>;
}
