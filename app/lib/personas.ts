export type PersonaExample = {
  slug: string;
  name: string;
  role: string;
  title: string;
  intro: string;
  context: string;
  profiles: { primary: string; secondary: string; supporting: string; desired: string; note: string };
  swot: { strength: string; weakness: string; opportunity: string; threat: string };
  swotInsight: string;
  horizon: string;
  goal: string;
  goalReason: string;
  actions: string[];
  review: string;
  nextMove: string;
  takeaway: string;
  relatedProfile: { name: string; slug: string };
};

export const additionalPersonas: PersonaExample[] = [
  {
    slug: 'ben', name: 'Ben', role: 'Junior software developer', title: 'Ben: proving the thinking behind the code.',
    intro: 'Ben has been a developer for 18 months. Coding assistants help his team produce fixes and tests faster, including the small tasks he has relied on to learn. He wants his work to show more than a finished change.',
    context: 'He fixes bugs, adds features and tests software. Diagnosing a problem often means reading logs and checking how a change will affect users before he writes any code.',
    profiles: { primary: 'Digital Builder', secondary: 'Analyst', supporting: 'Output Creator', desired: 'Professional Advisor', note: 'He wants to grow into technical advice as he builds experience and trust.' },
    swot: {
      strength: 'He investigates symptoms across code and user behaviour, then explains the uncertainty in his proposed fix.',
      weakness: 'He sometimes accepts generated code before tracing its logic, and he has limited experience explaining product trade-offs.',
      opportunity: 'AI can help him compare approaches and edge cases while his reviews and tests demonstrate sound technical judgement.',
      threat: 'If simple implementation work shrinks, junior developers may have fewer chances to learn and prove what they understand.',
    },
    swotInsight: 'His challenge is to use the speed of AI without losing the practice that builds real understanding.',
    horizon: 'Long-term direction',
    goal: 'Over the next year, become trusted to explain technical choices in product decisions, especially their user impact and delivery risk.',
    goalReason: 'His bug investigations and technical explanations give him a starting point. Trust will grow through repeated examples across product work.',
    actions: ['Write two short decision notes from real product work, showing the options, tests and trade-offs.', 'Ask a senior developer and a product manager what each needs to decide from the note.', 'Check AI-suggested options against the codebase before recommending one.'],
    review: 'Ben completed one decision note at his first review. A senior developer found its technical trade-off useful, but the product manager found it too abstract. He rewrote the note around user impact before preparing the second.',
    nextMove: 'He keeps the long-term goal and seeks product feedback on the revised format. The decision conversation will tell him more about his progress than a count of finished notes.',
    takeaway: 'Generated code can look finished quickly. Ben makes the diagnosis, testing and consequences visible so others can trust the work.',
    relatedProfile: { name: 'Digital Builders', slug: 'digital-builders' },
  },
  {
    slug: 'chloe', name: 'Chloe', role: 'Freelance copywriter and content marketer', title: 'Chloe: moving into the conversation before the draft.',
    intro: 'Clients increasingly bring Chloe AI-written copy and ask for a cheap polish. Her stronger contribution often happens earlier, when she clarifies the audience, offer and message.',
    context: 'She earns a living from website copy and campaigns for small businesses and agencies. She also helps clients decide what content should accomplish before production begins.',
    profiles: { primary: 'Output Creator', secondary: 'Professional Advisor', supporting: 'Analyst and Relationship Worker', desired: 'None', note: 'Advisory work already shapes her paid projects, though the finished writing is what clients tend to notice.' },
    swot: {
      strength: 'She can challenge a vague brief and choose a message that fits the audience and the client’s purpose.',
      weakness: 'Her pricing still centres on finished assets, which makes her judgement easy to mistake for a writing add-on.',
      opportunity: 'She can offer a focused review of AI-assisted content, explaining which options are credible and why.',
      threat: 'Clients may buy fewer routine writing deliverables or compare her fee with the cost of generating a draft.',
    },
    swotInsight: 'Chloe’s position depends on bringing her judgement into the client conversation early enough to shape the work.',
    horizon: 'Medium-term direction',
    goal: 'Within six to twelve months, become involved earlier in selected client campaigns so her advice shapes direction before content production starts.',
    goalReason: 'The goal builds on advisory work she already does and responds to pressure on production-only fees.',
    actions: ['Test one concise AI-content judgement review with two existing clients.', 'Show a client how audience risk and message clarity change the choice between AI draft options.', 'Describe the offer in one sentence and make its decision outcome clear.'],
    review: 'Her first client liked the review but found her menu of services confusing. The part they valued was her explanation of which AI draft was risky for their audience. A second client later paid for that focused review before commissioning copy.',
    nextMove: 'Chloe simplifies the offer and brings it into the briefing stage. She still writes, but the client can now see the decision her writing supports.',
    takeaway: 'A polished asset may hide the choices that make it useful. Chloe gives those choices a clear place in the client relationship.',
    relatedProfile: { name: 'Output Creators', slug: 'output-creators' },
  },
  {
    slug: 'david', name: 'David', role: 'Customer service team leader', title: 'David: designing the handoff to people.',
    intro: 'David leads a service team as a chatbot begins handling routine policy questions and updates. He expects fewer simple contacts, and perhaps a smaller team. The harder cases still need experienced judgement.',
    context: 'His day combines coaching agents, handling escalations, checking service results and resolving operational problems. Service delivery and customer trust sit together in his role.',
    profiles: { primary: 'Team Coordinator', secondary: 'Relationship Worker', supporting: 'Administrative Operator and Analyst', desired: 'None', note: 'He wants to strengthen the leadership and customer judgement already central to his work.' },
    swot: {
      strength: 'He can read a complaint beyond its dashboard label and judge when a customer needs a human response.',
      weakness: 'A significant part of his day goes into queue monitoring, reporting and follow-up that tools can increasingly handle.',
      opportunity: 'Chatbot data and frontline examples can help him improve escalation rules and coaching for complex cases.',
      threat: 'Lower routine volume could reduce team size while leaving people to handle a greater share of sensitive contacts.',
    },
    swotInsight: 'His experience matters most when an apparently ordinary case carries a trust, policy or timing risk.',
    horizon: 'Medium-term direction',
    goal: 'Within six to twelve months, be recognised for service judgement where chatbot handling and human review must work together.',
    goalReason: 'The goal answers a threat to team coordination by making his contribution to service design more concrete.',
    actions: ['Collect three types of chatbot handoff that need human judgement, using real complaint examples.', 'Discuss the cases with the service operations manager and propose clear escalation triggers.', 'Review whether the rules help agents resolve cases without avoidable repeat contact.'],
    review: 'David identified three handoff case types, but the operations discussion happened later than planned. Once the chatbot was live, routine contact fell while complaints remained. The evidence made the escalation question more urgent.',
    nextMove: 'He carries forward the unfinished work and proposes three practical rules for the next quarter, grounded in complaint and handoff examples.',
    takeaway: 'A fast first answer helps when the service knows when to bring a person in and what that person must own.',
    relatedProfile: { name: 'Team Coordinators', slug: 'team-coordinators' },
  },
  {
    slug: 'emma', name: 'Emma', role: 'HR advisor', title: 'Emma: drawing the line for HR self-service.',
    intro: 'Emma’s organisation is introducing an HR chatbot for routine policy questions. She supports that use, but worries that managers may apply a generic answer to a sensitive employee situation.',
    context: 'Managers come to her for policy interpretation and employee relations advice. The useful answer often depends on confidence, trust, evidence and the timing of a conversation.',
    profiles: { primary: 'Professional Advisor', secondary: 'Relationship Worker', supporting: 'Administrative Operator and Output Creator', desired: 'None', note: 'She wants to deepen the judgement and coaching already at the centre of her role.' },
    swot: {
      strength: 'She sees when a request for a policy answer hides a difficult people decision and can explain the practical risks.',
      weakness: 'Much of her visible output is standard guidance, letters and process explanation that can be drafted or found through self-service.',
      opportunity: 'She can set a useful boundary between routine chatbot guidance and cases needing human review.',
      threat: 'A confident chatbot answer may be copied into a sensitive email without anyone checking the employee context.',
    },
    swotInsight: 'Her value sits in responsible application of advice, especially when the facts, relationships or consequences are unsettled.',
    horizon: 'Short-term direction',
    goal: 'Within three months, help managers recognise when HR self-service is enough and when context, trust or accountability calls for human review.',
    goalReason: 'The chatbot is arriving now. Emma can use her advisory strength before habits of over-reliance become established.',
    actions: ['Agree a small set of warning signs that should prompt an HR conversation.', 'Discuss the boundary with managers using one routine and one sensitive example.', 'Create a short guide showing when a chatbot answer needs review before use.'],
    review: 'Emma had the boundary conversation, but the guidance remained informal. After launch, she saw managers paste chatbot answers into sensitive emails. That sharpened the risk she needed to address.',
    nextMove: 'She turns the informal advice into a short guide with three scenarios: safe self-service, HR review, and a case where timing changes the response.',
    takeaway: 'Good access to policy information can help managers. Emma brings judgement to the people and circumstances around the answer.',
    relatedProfile: { name: 'Professional Advisors', slug: 'professional-advisors' },
  },
];

export function getAdditionalPersona(slug: string) {
  return additionalPersonas.find((persona) => persona.slug === slug);
}
