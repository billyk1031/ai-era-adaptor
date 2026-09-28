export type ProfileWalkthrough = {
  slug: string;
  opening: string;
  scenario: string;
  work: string;
  changeHeading: string;
  change: string;
  caution: string;
  swot: { strength: string; weakness: string; opportunity: string; threat: string };
  swotComment: string;
  goalHeading: string;
  goal: string;
  goalLogic: string;
  actions: string[];
  review: string;
  advice: string;
  relatedPersona: { name: string; slug: string };
};

export const profileWalkthroughs: ProfileWalkthrough[] = [
  {
    slug: 'administrative-operators',
    opening: 'Administrative work makes requests, records, schedules and follow-up dependable. AI can draft and route much of the routine work, so an Administrative Operator may need to show the judgement that keeps exceptions from becoming problems.',
    scenario: 'Consider an operations assistant who supports several managers, prepares weekly meeting records and keeps requests moving between teams.',
    work: 'The assistant handles routine records and reminders, but also notices when an apparently simple request has an awkward deadline, unclear owner or sensitive context.',
    changeHeading: 'Self-service can hide the work around the task.',
    change: 'AI-enabled scheduling, summaries and workflow tools may reduce the time spent producing notes and chasing predictable updates. Managers may start handling some of those tasks themselves.',
    caution: 'That could free time for better coordination, or lead the organisation to assume fewer people are needed. The difference depends on which exceptions still arise and whether anyone sees the assistant resolving them.',
    swot: {
      strength: 'Knows when a request needs discretion, a different owner or a change in timing before it is processed.',
      weakness: 'Most visible output is repeatable notes, records and reminders; the preventive judgement is rarely recorded.',
      opportunity: 'Use AI drafts and trackers to release time for handoffs, exception handling and process improvement.',
      threat: 'Managers may self-serve routine administration and conclude that the remaining coordination happens automatically too.',
    },
    swotComment: 'The weak point is visibility. An exception that prevents delay or rework tells a fuller story than a faster meeting note.',
    goalHeading: 'Make exception handling count.',
    goal: 'Over the next three months, make the assistant’s role in resolving cross-team exceptions visible in one recurring workflow.',
    goalLogic: 'A record of prevented delays or rework would show the contribution that routine output rarely reveals.',
    actions: ['Choose one weekly request or meeting workflow and record the exceptions that interrupt it.', 'Use an approved tool for routine summaries, then add a brief note on the decision, owner or sensitive handoff that needed human attention.', 'Ask the managers which interventions saved them time or prevented a problem.'],
    review: 'After a month, the managers may see fewer routine notes but clearer handoffs. If the exception note is simply adding reading, shorten it and focus on the cases that changed a decision or deadline.',
    advice: 'Record the outcome of each intervention alongside the tasks completed. In your own SWOT, check how often these exceptions arise and how much they matter.',
    relatedPersona: { name: 'Aisha', slug: 'aisha' },
  },
  {
    slug: 'digital-builders',
    opening: 'Digital Builders create and maintain software, automations and digital systems. AI can speed up familiar implementation; the harder question is who understands the problem, checks the result and owns what happens after release.',
    scenario: 'Consider a developer on a product team that uses coding assistants for small features, tests and documentation.',
    work: 'The developer writes code, investigates defects, integrates changes and works with product and support colleagues when a feature behaves differently from the specification.',
    changeHeading: 'Faster code raises the cost of weak review.',
    change: 'AI can suggest working code and plausible tests quickly. It may also make a change look complete before anyone has checked dependencies, edge cases, user impact or maintainability.',
    caution: 'For a junior builder, the same routine tasks that become faster are often the tasks that build skill. For an established builder, the pressure may be to accept more output without more time for review.',
    swot: {
      strength: 'Can connect a technical change to user behaviour, system constraints and failure paths.',
      weakness: 'A large share of visible work is standard implementation that AI can draft quickly.',
      opportunity: 'Use generated options to compare approaches, then make testing and integration judgement part of the deliverable.',
      threat: 'Stakeholders may expect more features in less time and miss the effort needed for reliable delivery.',
    },
    swotComment: 'The builder’s reasoning becomes visible when the system is under pressure and the team needs to understand a change.',
    goalHeading: 'Own the quality of one feature.',
    goal: 'Within six months, become the person the team trusts to explain implementation risks and release checks for one product area.',
    goalLogic: 'System understanding becomes easier to recognise when colleagues can see how it shaped a reliable release.',
    actions: ['For one upcoming feature, write a short note on user impact, dependencies and likely failure points before implementation.', 'Review AI-generated code and tests against those risks; record what was changed or rejected.', 'Discuss the note with a product colleague and a senior developer, then track post-release defects or support issues.'],
    review: 'If the team finds the note useful but too technical for product decisions, rewrite the user-impact section. If defects still come from missed dependencies, focus the next pre-release check on those dependencies.',
    advice: 'Show the reasoning in real delivery evidence. A faster build is useful, but the role’s value becomes clearer when someone can explain why it is safe, maintainable and fit for the user.',
    relatedPersona: { name: 'Ben', slug: 'ben' },
  },
  {
    slug: 'professional-advisors',
    opening: 'Professional Advisors help people interpret information, weigh risk and act. AI can make general advice readily available; the human contribution becomes clearer when the situation calls for context, accountability and practical follow-through.',
    scenario: 'Consider an advisor who supports managers with policy, process and sensitive workplace decisions.',
    work: 'They answer recurring questions and prepare guidance, but also challenge the question asked when it hides a more consequential people or business issue.',
    changeHeading: 'A confident answer can still be the wrong advice.',
    change: 'AI can summarise policy and draft standard notes. Managers may use it as a first stop and consult an advisor later, or only after a problem has developed.',
    caution: 'A generic answer may omit facts, local precedent, confidentiality or how a person will receive the decision. The advisor needs a clear boundary for when self-service is sufficient and when judgement must enter.',
    swot: {
      strength: 'Can identify the real decision behind a routine request and explain its practical risks.',
      weakness: 'Much visible work is standard guidance and drafting from known sources.',
      opportunity: 'Use AI for a first pass while concentrating advisory time on context, implementation and the cases where the answer is uncertain.',
      threat: 'Users may bypass review because an AI response sounds complete and authoritative.',
    },
    swotComment: 'The advisor’s judgement becomes easier to see when it changes a decision or prevents a poor one.',
    goalHeading: 'Clarify when advice needs a person.',
    goal: 'In the next three months, establish clear review triggers for one category of decisions that people are beginning to self-serve.',
    goalLogic: 'Clear review triggers give managers a way to recognise situations where a general answer leaves too much unresolved.',
    actions: ['Collect a small set of recent questions: routine, ambiguous and sensitive.', 'Write a short guide showing which can be self-served, which need review and what information the advisor needs.', 'Try the guide with managers and check whether the escalation point is understood.'],
    review: 'If managers still bring every case to the advisor, the routine category needs clearer examples. If they use self-service in sensitive situations, make the review trigger easier to spot and bring it into the workflow.',
    advice: 'Look at the decisions people made and carried through with the advice. Confidentiality and professional obligations must shape any use of AI.',
    relatedPersona: { name: 'Emma', slug: 'emma' },
  },
  {
    slug: 'team-coordinators',
    opening: 'Team Coordinators keep people and delivery aligned when priorities, ownership and deadlines collide. AI can handle more updates and tracking, putting greater weight on the decisions made from that information.',
    scenario: 'Consider a project coordinator who prepares weekly status reports and keeps a cross-functional launch on track.',
    work: 'They collect progress, maintain a plan and chase actions. Their most useful interventions happen when two teams disagree on timing or no one owns a blocker.',
    changeHeading: 'A dashboard can show a delay without resolving it.',
    change: 'AI-generated summaries and action logs may remove much of the reporting work. Leaders can see progress directly and may question why a coordinator is needed.',
    caution: 'A tidy status view can conceal disputed priorities, an unrealistic deadline or a decision waiting for someone with authority. The coordinator’s value depends on bringing those issues to resolution.',
    swot: {
      strength: 'Can spot an ownership gap and bring the right people into a timely decision.',
      weakness: 'Visible contribution is often measured in meetings, trackers and status updates.',
      opportunity: 'Use automated updates to spend more time on trade-offs, blockers and delivery outcomes.',
      threat: 'Managers may self-serve project visibility and treat coordination as unnecessary overhead.',
    },
    swotComment: 'An agreed owner, a changed plan or a risk resolved in time may be the real result of a useful status conversation.',
    goalHeading: 'Turn visibility into decisions.',
    goal: 'Over the next quarter, reduce recurring launch delays by making ownership and trade-offs explicit in one project.',
    goalLogic: 'The coordinator can now show how their work affects a delivery outcome that the team cares about.',
    actions: ['Use the weekly update to identify two recurring blockers and the decisions they need.', 'Record the choice each blocker needs, its decision owner and the date by which it matters.', 'Review the decisions with the project lead and compare delay patterns over the next two cycles.'],
    review: 'If fewer updates are needed but the same blockers return, the coordination method has not changed enough. If decisions happen sooner, retain the short decision log and stop producing status detail no one uses.',
    advice: 'Be careful about claiming that a better dashboard proves better delivery. Track the specific delays, handoffs or decisions that changed.',
    relatedPersona: { name: 'David', slug: 'david' },
  },
  {
    slug: 'output-creators',
    opening: 'Output Creators make copy, visuals, presentations and other material people use. AI can produce a credible draft quickly, so the role has to show the judgement that gives an output purpose and makes it work for its audience.',
    scenario: 'Consider a content lead who produces campaign copy, presentations and channel variations for a small marketing team.',
    work: 'They turn briefs into assets, but also decide what message is worth making, what evidence is missing and how the audience should respond.',
    changeHeading: 'More content is easy; useful content still needs direction.',
    change: 'AI can generate first drafts and variations at low cost. Colleagues may take routine production into their own hands and ask the creator to polish the result at the end.',
    caution: 'A fluent draft can still be generic, misleading or wrong for a particular audience. The creator’s judgement belongs in the brief and the review as well as the edit.',
    swot: {
      strength: 'Can see when the requested asset does not match the audience’s actual question or decision.',
      weakness: 'A large share of visible output is drafting and reformatting that AI can accelerate.',
      opportunity: 'Use quick drafts to test directions, then set editorial standards and shape the concept before production.',
      threat: 'Finished assets may be priced or valued as interchangeable when their underlying judgement is hidden.',
    },
    swotComment: 'Show the stakeholder why one direction was chosen. The reasoning gives the finished asset its purpose.',
    goalHeading: 'Move upstream in the brief.',
    goal: 'Within six months, be involved in defining the message and quality criteria for one recurring campaign before assets are commissioned.',
    goalLogic: 'This gives audience judgement a clear place in the work before anyone begins drafting.',
    actions: ['Select one campaign and write a brief that states the audience, action sought and evidence needed.', 'Compare two AI-assisted directions, recording what each gets right and where it misleads or misses the audience.', 'Present the recommendation before production, then ask the campaign owner whether it improved the final decision.'],
    review: 'If stakeholders only ask for faster variations, the decision point may be too late. Bring the comparison into an earlier planning conversation and measure whether it reduces rework or changes the campaign direction.',
    advice: 'Count the effect of the creative choice as well as production time. For freelancers, make that decision work explicit in the offer and fee.',
    relatedPersona: { name: 'Chloe', slug: 'chloe' },
  },
  {
    slug: 'relationship-workers',
    opening: 'Relationship Workers create value in conversations with customers, clients and other people. As AI takes routine first contact, human interactions may become fewer, more complex and more consequential.',
    scenario: 'Consider a customer success specialist whose clients increasingly use an AI assistant for account questions and standard requests.',
    work: 'The specialist answers questions, but also notices hesitation, resolves frustration and protects a relationship when the standard answer does not fit.',
    changeHeading: 'The handoff matters more than the first answer.',
    change: 'Chatbots can answer common questions immediately and summarise prior contact. That may reduce simple interactions and free the specialist for exceptions.',
    caution: 'It may also remove the small conversations where trust was built. When a customer reaches a person only after self-service has failed, patience and case ownership become more important.',
    swot: {
      strength: 'Can hear the concern behind a routine question and rebuild confidence after a frustrating experience.',
      weakness: 'Performance is measured mainly by contact volume and speed, including simple answers now moving to self-service.',
      opportunity: 'Use AI summaries to prepare for difficult conversations and improve the handoff from automation to a named owner.',
      threat: 'Leaders may reduce human capacity as routine volume falls, even while the remaining cases require more time and care.',
    },
    swotComment: 'The decisive test is whether a customer reaches the right person in time and gets a resolution they trust.',
    goalHeading: 'Improve recovery after self-service.',
    goal: 'Over the next three months, improve the handoff and resolution of one recurring category of difficult customer case.',
    goalLogic: 'Tracking recovery after self-service makes the specialist’s relationship work visible in customer outcomes.',
    actions: ['Review a small sample of reopened or escalated cases and identify the point where a person should have joined.', 'Agree one handoff trigger and a clear case owner with the service team.', 'Track repeat contact, time to resolution and customer feedback for that case type.'],
    review: 'If customers still repeat their story after handoff, improve the context passed from the assistant. If the trigger catches too many routine cases, narrow it without dropping the situations where trust is at risk.',
    advice: 'Use outcome and relationship evidence alongside efficiency metrics. A quick automated reply can still leave a costly unresolved case.',
    relatedPersona: { name: 'David', slug: 'david' },
  },
];

export function getProfileWalkthrough(slug: string) {
  return profileWalkthroughs.find((walkthrough) => walkthrough.slug === slug);
}
