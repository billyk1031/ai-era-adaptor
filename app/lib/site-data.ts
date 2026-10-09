export const siteConfig = {
  name: 'Be an AI-Era ADAPTOR',
  shortName: 'ADAPTOR',
  url: 'https://ai-era-adaptor.com',
  amazonUrl: 'https://www.amazon.com/dp/B0HB5VNWJ9',
  linkedinUrl: 'https://www.linkedin.com/in/billykan/',
  author: 'Billy Kan',
} as const;

export type ProfileSlug = 'administrative-operators' | 'digital-builders' | 'analysts' | 'professional-advisors' | 'team-coordinators' | 'output-creators' | 'relationship-workers';

export type Profile = {
  slug: ProfileSlug;
  letter: string;
  name: string;
  nature: string;
  exposure: string;
  value: string;
  examples: string[];
  reflectionPrompt: string;
  accent: string;
};

export const profiles: Profile[] = [
  { slug: 'administrative-operators', letter: 'A', name: 'Administrative Operators', nature: 'Keep processes, schedules, records, documents, and internal operations moving.', exposure: 'Routine administration may be automated, consolidated, or self-served by managers using AI-enabled tools.', value: 'Context, reliability, exception handling, practical organisational knowledge, and judgement about timing and sensitivity.', examples: ['Diary management', 'Inbox triage', 'Document preparation', 'Action tracking', 'Operational support'], reflectionPrompt: 'Which routine tasks take most of your time? Where do people rely on your judgement to catch an exception, protect sensitive information, or keep work moving?', accent: 'blue' },
  { slug: 'digital-builders', letter: 'D', name: 'Digital Builders', nature: 'Create, configure, code, automate, design, maintain, or implement digital systems and outputs.', exposure: 'AI can accelerate basic implementation, generate code and drafts, and reduce demand for low-level technical output.', value: 'System thinking, architecture judgement, testing, integration, user empathy, maintainability, and delivery ownership.', examples: ['Software development', 'Automation', 'Technical implementation', 'System configuration', 'Digital design'], reflectionPrompt: 'Which parts of building or maintaining a system are becoming faster to produce? Where do integration, testing, reliability, or user needs still depend on your judgement?', accent: 'violet' },
  { slug: 'analysts', letter: 'A', name: 'Analysts', nature: 'Research, interpret information, compare options, analyse data, and support decisions.', exposure: 'AI can summarise, compare, draft analysis, generate reports, and produce plausible first-pass recommendations.', value: 'Problem framing, evidence quality judgement, interpretation, business context, and knowing what matters.', examples: ['Desk research', 'Market analysis', 'Reporting', 'Data interpretation', 'Decision support'], reflectionPrompt: 'Which parts of your analysis are now easier to generate? What do you do to test evidence, frame the right question, or explain what a finding means in this particular context?', accent: 'green' },
  { slug: 'professional-advisors', letter: 'P', name: 'Professional Advisors', nature: 'Provide expertise, judgement, compliance support, consulting, coaching, or specialist services.', exposure: 'Clients and users may use AI for generic advice, basic drafting, or first-pass interpretation before involving a human advisor.', value: 'Trust, accountability, tailored judgement, risk interpretation, ethical sensitivity, and implementation support.', examples: ['HR advice', 'Consulting', 'Coaching', 'Compliance guidance', 'Specialist training'], reflectionPrompt: 'What advice could a client or colleague get from a generic AI response? What changes when you understand their circumstances, carry accountability, or help them put advice into practice?', accent: 'orange' },
  { slug: 'team-coordinators', letter: 'T', name: 'Team Coordinators', nature: 'Coordinate people, projects, delivery, stakeholders, decisions, and execution.', exposure: 'AI may reduce reporting, meeting, tracking, planning, and coordination overhead.', value: 'Prioritisation, conflict resolution, trade-off management, people leadership, accountability, and change leadership.', examples: ['Project management', 'Delivery management', 'Stakeholder coordination', 'Operations management', 'Change coordination'], reflectionPrompt: 'Which coordination work is mainly information gathering or reporting? Where do priorities conflict, people need a decision, or a hand-off needs your intervention?', accent: 'red' },
  { slug: 'output-creators', letter: 'O', name: 'Output Creators', nature: 'Produce written, visual, strategic, educational, communication, or creative outputs.', exposure: 'Good-enough drafts, images, summaries, posts, proposals, and communication assets are becoming cheaper to produce.', value: 'Taste, originality, editorial judgement, audience understanding, brand voice, message clarity, and commercial intent.', examples: ['Copywriting', 'Presentations', 'Training materials', 'Marketing emails', 'Creative concepts'], reflectionPrompt: 'Which outputs can now be drafted quickly? What do you contribute through audience understanding, editorial judgement, originality, or making the work serve a real purpose?', accent: 'pink' },
  { slug: 'relationship-workers', letter: 'R', name: 'Relationship Workers', nature: 'Create value through direct human interaction with customers, clients, users, patients, or communities.', exposure: 'Routine interactions may move to chatbots, AI assistants, self-service portals, or automated workflows.', value: 'Trust, empathy, emotional intelligence, escalation handling, negotiation, service recovery, and relationship depth.', examples: ['Customer service', 'Account management', 'Customer success', 'Complaint handling', 'Stakeholder engagement'], reflectionPrompt: 'Which interactions are routine and could be self-served? When does someone need you to understand their situation, handle an exception, rebuild trust, or stay accountable for a resolution?', accent: 'teal' },
];

export type ArticleParagraph = string | (string | { text: string; href: string })[];
export type ArticleSection = { heading?: string; paragraphs?: ArticleParagraph[]; bullets?: ArticleParagraph[] };
export type ArticleSource = { title: string; url: string; date: string };
export type Article = { slug: string; title: string; description: string; category: string; type: 'Knowledge / Advice' | 'Coaching' | 'News reflection' | 'Explainer' | 'Advice' | 'Analysis' | 'Opinion' | 'Workplace guide'; date: string; readTime: string; intro: ArticleParagraph; profiles: ProfileSlug[]; sections: ArticleSection[]; related: string[]; heroImage?: { src: string; alt: string; width: number; height: number }; sources?: ArticleSource[]; sourceNote?: string };

export const categories = [
  { name: 'AI and Workplace Change', slug: 'ai-and-workplace-change', description: 'How AI changes tasks, roles, workflows, and expectations at work.' },
  { name: 'Jobs and Careers in the AI Era', slug: 'jobs-and-careers', description: 'Clear thinking for people making career decisions while work is changing.' },
  { name: 'AI Job News and Current Affairs', slug: 'ai-job-news', description: 'News, labour-market evidence, company announcements, and what they may mean.' },
  { name: 'Human Value, Skills and Leadership', slug: 'human-value', description: 'The judgement, trust, context, and leadership that work still needs.' },
  { name: 'AI Policy, Risk and Workplace Culture', slug: 'ai-policy-and-culture', description: 'The practical questions organisations need to ask before and during adoption.' },
] as const;

export const articles: Article[] = [
{
  "slug": "staff-challenge-ai-decisions-work",
  "title": "Staff Should Be Able to Challenge AI Decisions at Work",
  "description": "Staff need a way to challenge AI decisions and a regular review of how multiple AI changes affect results, workload and working life.",
  "category": "AI Policy, Risk and Workplace Culture",
  "type": "Opinion",
  "date": "2026-10-09",
  "readTime": "5 min read",
  "profiles": [
    "team-coordinators"
  ],
  "heroImage": {
    "src": "/employers-ai-conversation.webp",
    "alt": "Four colleagues discussing a workplace decision beside a blank whiteboard",
    "width": 1594,
    "height": 986
  },
  "intro": "I think staff should have a clear way to challenge how AI changes their work. If a tool starts allocating tasks or shaping expectations, they need to know who can reconsider the decision. They also need opportunities to discuss how AI adoption is affecting working life as a whole. Several changes can add up to pressures that a review of one tool would miss.",
  "sections": [
    {
      "heading": "Influence belongs in the rollout plan",
      "paragraphs": [
        [
          "In findings published on 6 October, ",
          {
            "text": "Gallup reports",
            "href": "https://news.gallup.com/poll/714602/benefits-work-unevenly-distributed.aspx"
          },
          " that 52% of surveyed US employees had less influence over the adoption of new technology than they wanted. That question covers technology broadly. The American Job Quality Study surveyed 15,482 employees between January and March 2026."
        ],
        "For me, this raises a practical question for AI adoption: which decisions can staff influence while there is still time to change them? Explaining a finished plan may help people understand it. Involving them earlier gives the organisation a chance to discover whether the plan will work.",
        [
          "UK workplace body Acas ",
          {
            "text": "advises employers",
            "href": "https://www.acas.org.uk/consulting-employees/when-to-hold-a-consultation"
          },
          " to consult staff and their representatives when a change is identified, before a final decision. That timing is a useful principle for an AI rollout: make the choices still open clear, and involve the people who understand their consequences."
        ]
      ]
    },
    {
      "heading": "A sensible allocation can still miss the work",
      "paragraphs": [
        "As a hypothetical example, imagine a manager testing an AI assistant that proposes how to divide incoming work. It uses the team’s task records to suggest an even number of assignments for each person. The manager reviews the plan before using it.",
        "A colleague points out that some assignments involve resolving disputed customer requirements. The records show a single task, while the work can take several conversations. Another colleague has agreed time for mentoring a new starter. Neither commitment is visible in the information supplied to the assistant.",
        [
          "Resolving these competing demands is part of the ",
          {
            "text": "Team Coordinators",
            "href": "/profiles/team-coordinators/"
          },
          " Work Profile. The manager checks the examples with staff, agrees how to account for complex cases and mentoring, then supplies that context to the assistant. The team tries the revised allocation and reviews missed deadlines and overtime after a week."
        ],
        "The AI proposal improves because people can question its assumptions and change the information and priorities behind it. A feedback form that reaches nobody with authority would leave the same problem in place."
      ]
    },
    {
      "heading": "Managers still have to make a decision",
      "paragraphs": [
        "The strongest objection is speed. Managers cannot reopen every routine assignment, and colleagues may disagree about what is fair. An AI system that works well could lose much of its usefulness if every output requires a meeting.",
        "I would keep routine decisions within agreed boundaries and give staff a clear route for material exceptions. A repeated workload problem deserves attention; a familiar allocation that fits the agreed rules can proceed. Managers should explain why they accept or reject a challenge, with employee representatives involved where appropriate.",
        "I would support a lighter review process when experience shows that the tool handles the relevant circumstances reliably and staff can still correct an exception promptly. Repeated complaints, rushed reviews or unexplained overrides would strengthen the case for closer scrutiny."
      ]
    },
    {
      "heading": "Make the route usable during ordinary work",
      "paragraphs": [
        "Before introducing an AI-driven change, a manager should be able to answer these questions in plain language:"
      ],
      "bullets": [
        "What can staff question? Name the decisions or effects they can raise, such as unsuitable assignments, missing context or a workload that cannot be sustained.",
        "Who can act? Identify the person responsible for reviewing the concern and deciding whether to adjust the tool, change the process or pause the affected use.",
        "When will they hear back? Set a response time that fits the consequences. Explain how urgent problems will be handled while the concern is being reviewed."
      ]
    },
    {
      "heading": "Keep reviewing the overall effect of AI",
      "paragraphs": [
        "A challenge route deals with a particular concern. The cumulative effects of AI also need attention. In the allocation example, another tool might speed up drafting while a third produces more requests for approval. Each change could look useful on its own, while their combined effect leaves the team with more decisions and less time to make them.",
        "Alongside checks on individual changes, I would keep a regular review of AI adoption as a whole. A quarterly check could provide structure, with staff able to share observations between reviews. Ask whether AI is improving the work, where it creates extra effort, and how it affects workload, learning and relationships across teams."
      ]
    },
    {
      "heading": "Listen to staff and act on what you hear",
      "paragraphs": [
        [
          "Short staff surveys can help track how those experiences change. Focus groups can explore the reasons, while informal discussions such as ",
          {
            "text": "Lean Coffee sessions",
            "href": "https://leancoffee.org/"
          },
          " give staff room to choose the issues they want to discuss. Use an approach that fits the organisation and gives people a fair chance to contribute."
        ],
        "Managers should compare what staff report with results such as quality, delays and overtime. Share what has been learnt, agree any adjustments and keep listening as the work evolves. Staff should be able to raise an urgent concern when it arises, without waiting for the quarterly conversation."
      ]
    },
    {
      "heading": "Bring the conversation into your own work",
      "paragraphs": [
        [
          "The ",
          {
            "text": "guide to talking with staff about AI",
            "href": "/blog/how-employers-should-talk-about-ai/"
          },
          " can help with the wider conversation. The test here is whether a concern reaches someone who can make a decision and whether staff hear the reason for it."
        ],
        "If your own work is changing, bring one concrete example to your manager or representative: what the AI-assisted process missed, how it affected the work, and what you want reconsidered. Ask who will decide and when you should expect an answer.",
        "Over time, look at both the concerns raised and the wider pattern of staff experience. Which changes helped? Where are pressures accumulating, and what needs adjusting? Staff influence becomes credible when those observations shape decisions and people hear what happened next."
      ]
    }
  ],
  "sources": [
    {
      "title": "Gallup, AI Benefits at Work Unevenly Distributed",
      "url": "https://news.gallup.com/poll/714602/benefits-work-unevenly-distributed.aspx",
      "date": "6 October 2026"
    },
    {
      "title": "Acas, What to consult on",
      "url": "https://www.acas.org.uk/consulting-employees/when-to-hold-a-consultation",
      "date": "Updated 10 August 2026"
    }
  ],
  "related": [
    "how-employers-should-talk-about-ai",
    "where-does-ai-saved-time-go"
  ]
},

{
  "slug": "when-ai-makes-work-more-complex",
  "title": "What to Do When AI Makes Your Work More Complex",
  "description": "AI can speed up a task while making the work around it harder. Explore what has changed, find where you get stuck and choose a manageable next step.",
  "category": "Human Value, Skills and Leadership",
  "type": "Coaching",
  "date": "2026-10-08",
  "readTime": "4 min read",
  "profiles": [],
  "intro": "AI helps you finish a task faster, yet the working day feels harder. There may be more output to check, more decisions to make or more difficult cases reaching you. Before deciding you need another AI course, take one piece of work and ask what has become more demanding.",
  "sections": [
    {
      "heading": "What has actually become harder?",
      "paragraphs": [
        [
          "In ",
          {
            "text": "findings published on 1 October",
            "href": "https://www.pwc.co.uk/press-room/press-releases/research-commentary/2026/one-in-five-uk-employees-are-now-using-ai-everyday-at-work-but-4.html"
          },
          ", PwC reported that 45% of UK AI users said their role had become more complex, while 44% reported a heavier workload. Its 2026 workforce survey included 2,023 UK workers. If that sounds familiar, where do you feel the extra demand?"
        ],
        "Choose a recent piece of AI-assisted work that took more effort than you expected. Trace it from the request to the result, including the checking, decisions and follow-up. Where did you get stuck?",
        "Try to describe the change precisely. “The AI produces three drafts in minutes, but I now have to resolve conflicting feedback on all three” gives you something to investigate. “Everything is more complicated” leaves you with nowhere to start."
      ]
    },
    {
      "heading": "What is causing the extra effort?",
      "paragraphs": [
        "Look at that difficult point before judging your own ability. Has the amount of work increased? Are you dealing with harder decisions because AI handles the routine steps? Or has faster production exposed an unclear requirement or a dependency on someone else?",
        "Write your best explanation and one observation that supports it. Then consider another explanation. A longer review might mean the AI output needs correction, or it might mean colleagues disagree about the result they want. Those problems call for different responses.",
        "If you are unsure, choose someone close to the work and review one example together within the next week. Ask them to help you locate the extra effort. Keep the question open until you have looked at the actual work."
      ]
    },
    {
      "heading": "An example: when routine enquiries move to AI",
      "paragraphs": [
        [
          "As a hypothetical example, imagine an adviser whose AI assistant now handles routine delivery enquiries. The customers reaching her increasingly need exceptions or help with broken promises. This is ",
          {
            "text": "Relationship Workers",
            "href": "/profiles/relationship-workers/"
          },
          " work, but the question is the same: what has changed in the work reaching the person?"
        ],
        "One customer has waited through two delayed appliance deliveries. The AI offers a refund, but the adviser learns that the customer would accept a different model if delivery could be guaranteed. She can explore that option with AI, yet needs the warehouse to confirm availability and an authorised colleague to agree the commitment.",
        "Her next step depends on where she gets stuck. If she struggles to uncover what the customer needs, supported practice may help. If she understands the need but cannot get a delivery decision, she needs a clearer route to the decision-maker. More training alone would leave that delay in place."
      ]
    },
    {
      "heading": "Which change would help most?",
      "paragraphs": [
        "Return to your own example. Complete this sentence: “This work would become more manageable if ___.” Use your answer to choose a small next step."
      ],
      "bullets": [
        "If a skill gap is slowing you down, choose one judgement or technique to practise on real work, with feedback from someone experienced. Decide what you want to do better, such as spotting a weak assumption or asking a question that clarifies the request.",
        "If missing context or unclear responsibility is the problem, ask for the information or decision you need. You might clarify which result matters before asking AI for more options, or agree who can resolve conflicting instructions.",
        "If the volume has grown beyond what you can check properly, discuss priorities and capacity. Bring an example of the time spent reviewing and correcting the output. Explore fewer versions, a narrower scope or more time for review.",
        "If the cause is still unclear, agree a short observation period. For the next week, note where one recurring task stalls and discuss those examples with the person who owns the workflow."
      ]
    },
    {
      "heading": "How will you know it helped?",
      "paragraphs": [
        "Take the proposed change to someone who can support it: your manager, a colleague or the client who sets the brief. Ask to try it on a bounded piece of work and agree a review date. You might say: “AI has made drafting faster, but reviewing several versions is taking longer. Could we agree the brief first and review one version next week?”",
        "Choose a useful sign of improvement. That could be fewer corrections, a quicker decision or less repeated work. Check the human effort too: did you have enough time to think, and did the change reduce pressure or simply move it to a colleague?",
        [
          "At the review, decide whether to keep the change, adjust it or investigate a different cause. If you discover a development need, ",
          {
            "text": "AI Training Needs Time to Practise at Work",
            "href": "/blog/ai-training-time-practise-work/"
          },
          " explores how to make room for that learning."
        ]
      ]
    },
    {
      "heading": "Keep the feedback loop open",
      "paragraphs": [
        "Introducing AI can have unforeseen effects on the work around it. It is difficult to get everything right in one attempt. An ongoing loop of experiment → feedback → review → refine gives you a way to learn from what happens and improve the approach.",
        "Managers and leaders should encourage the people involved to give feedback, including when the change creates extra work or makes a task harder. Ask what they are noticing, review it together and be open to changing the plan. Show how their feedback has shaped the next experiment."
      ]
    }
  ],
  "sources": [
    {
      "title": "PwC UK, One in five UK employees are now using AI everyday at work but 44% report a heavier workload",
      "url": "https://www.pwc.co.uk/press-room/press-releases/research-commentary/2026/one-in-five-uk-employees-are-now-using-ai-everyday-at-work-but-4.html",
      "date": "1 October 2026"
    }
  ],
  "related": [
    "which-human-skills-become-more-valuable",
    "ai-training-time-practise-work"
  ],
  "heroImage": {
    "src": "/human-skills-value.webp",
    "alt": "Three colleagues examining a piece of work and considering a decision together",
    "width": 1594,
    "height": 986
  }
},

{
  "slug": "ai-professional-advice-client-value",
  "title": "AI and Professional Advice: What Are Clients Paying For Now?",
  "description": "Thomson Reuters’ latest analysis raises a question for advisors: when AI makes routine answers cheaper, how does your work improve a client’s decision?",
  "category": "AI Job News and Current Affairs",
  "type": "News reflection",
  "date": "2026-10-07",
  "readTime": "4 min read",
  "profiles": [
    "professional-advisors"
  ],
  "intro": [
    "On 2 October 2026, the Thomson Reuters Institute published ",
    {
      "text": "an analysis of AI and the value of tax advice",
      "href": "https://www.thomsonreuters.com/en/institute/articles/what-are-you-actually-charging-for"
    },
    ". It argues that firms need to reconsider what clients are paying for as routine preparation becomes automated. I think the question reaches beyond accounting: if a client can get a plausible answer from AI, what does involving you change?"
  ],
  "sections": [
    {
      "heading": "Clients are asking for better work from AI",
      "paragraphs": [
        [
          "The analysis draws on Thomson Reuters’ ",
          {
            "text": "Future of Professionals Report 2026",
            "href": "https://www.thomsonreuters.com/en/institute/future-of-professionals-2026/report"
          },
          ", released on 22 June. Its global survey covered 1,816 professionals across law, tax, audit, accounting, compliance, risk and global trade, in 62 countries. Fieldwork took place in March and April."
        ],
        "The report says 78% of corporate clients consider AI-enabled quality improvements from professional service providers very important or essential. Only 6% say most or all of their providers deliver those improvements.",
        "The October article applies that concern to tax firms and argues for more proactive advice and pricing that reflects judgement. While Thomson Reuters’ view may be influenced by its commercial interest in selling professional AI products, the clients’ expectations are still worth taking seriously."
      ]
    },
    {
      "heading": "My reading: a quicker answer changes the starting point",
      "paragraphs": [
        "A client who arrives with an AI-generated explanation may need less time spent on the basics. They may ask you to assess a proposed course of action, resolve an uncertainty or help them make it work. That changes the service they are likely to value.",
        "AI can produce plans, options and answers quickly, but their usefulness depends on the questions asked and the context provided. Clients may lack the experience, knowledge or time to give AI the input it needs.",
        [
          "That gives ",
          {
            "text": "Professional Advisors",
            "href": "/profiles/professional-advisors/"
          },
          " an important role in shaping the question. What is the client trying to achieve? Which circumstances would change the answer? An advisor can help establish that context before AI begins producing recommendations."
        ],
        "I would look for value across that whole process: helping the client ask a useful question, providing the relevant context, then assessing and applying the answer. Each contribution can improve the decision the client makes."
      ]
    },
    {
      "heading": "What that could look like in a client decision",
      "paragraphs": [
        "As a hypothetical example, imagine an operations consultant advising a small retailer. The client has asked AI how to launch next-day delivery and received a detailed plan. The consultant starts by asking: “What do customers need from delivery, and which promises can the business reliably keep?”",
        "Conversations with customers and warehouse staff reveal that predictable delivery dates matter most. The carrier also collects only in the morning. With this context, the consultant uses an approved AI tool to compare a limited next-day service with a dependable two-day offer.",
        "The client chooses to trial the two-day offer. They agree to check missed delivery promises, complaints and warehouse overtime after two weeks. Asking a better question gave the AI work a clearer purpose and helped the client choose a service they could test."
      ]
    },
    {
      "heading": "There is still a place for routine services",
      "paragraphs": [
        "Some clients need a straightforward task completed accurately at a fair price. Efficient routine work can remain a useful service, and firms may use AI to serve more clients. Others need substantial help with a difficult decision. Both offers need clear expectations about quality and responsibility.",
        [
          "For anyone worried about falling demand, ",
          {
            "text": "Will AI Replace My Job?",
            "href": "/blog/will-ai-replace-my-job/"
          },
          " offers questions for checking what has actually changed. The same inquiry applies to a client relationship."
        ]
      ]
    },
    {
      "heading": "Bring one real decision into your next client conversation",
      "paragraphs": [
        "Choose a recent assignment where the client already had an AI answer, or could reasonably have obtained one. Ask which part they could handle themselves and where they needed your help. Consider whether you helped frame the question, supplied missing context or improved how the answer was used. Discuss what that changed for the client.",
        "In the retailer example, the consultant helped the client examine what customers needed before committing to a faster service. That explains her contribution more clearly than saying that she used AI to prepare a plan.",
        [
          "If those conversations suggest your service needs to change, the ",
          {
            "text": "Professional Advisors walkthrough",
            "href": "/profiles/professional-advisors/"
          },
          " connects client self-service to a personal SWOT, a development goal and a first action. Start with the client decision you can improve, then work out what you need to learn or change to do it well."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "Thomson Reuters Institute, If AI can do the work, then what are you actually charging for?",
      "url": "https://www.thomsonreuters.com/en/institute/articles/what-are-you-actually-charging-for",
      "date": "2 October 2026"
    },
    {
      "title": "Thomson Reuters, Future of Professionals Report 2026",
      "url": "https://www.thomsonreuters.com/en/institute/future-of-professionals-2026/report",
      "date": "22 June 2026"
    },
    {
      "title": "Thomson Reuters, Future of Professionals report release announcement",
      "url": "https://www.thomsonreuters.com/en/press-releases/2026/june/ai-is-ready-but-firms-are-not-how-falling-behind-on-ai-implementation-is-costing-clients-and-talent",
      "date": "22 June 2026"
    }
  ],
  "related": [
    "will-ai-replace-my-job",
    "which-human-skills-become-more-valuable"
  ],
  "heroImage": {
    "src": "/blog/advisor-client-question-context-v2.webp",
    "alt": "An advisor and client clarify a question together over a blank page, with a laptop beside them.",
    "width": 1584,
    "height": 993
  }
},

{
  "slug": "show-your-value-ai-assisted-developer",
  "title": "If AI Wrote the Code, What Did You Contribute?",
  "description": "If AI helped write the code, what did you contribute? Two business-logic examples show how a developer’s analysis improves an AI-built order-allocation tool.",
  "category": "Jobs and Careers in the AI Era",
  "type": "Knowledge / Advice",
  "date": "2026-10-06",
  "readTime": "6 min read",
  "profiles": [
    "digital-builders",
    "analysts"
  ],
  "heroImage": {
    "src": "/everyday-work-audit.webp",
    "alt": "A professional mapping a work process beside a laptop",
    "width": 1594,
    "height": 986
  },
  "intro": "In a developer job interview, you describe a project built with AI assistance. The interviewer asks: “If AI helped write the code, what did you contribute?” A useful answer shows where your understanding changed what the AI produced—and how you checked that the change helped.",
  "sections": [
    {
      "heading": "The code needs a business decision to implement",
      "paragraphs": [
        [
          "Imagine a developer discussing an order-allocation tool in an interview. In this hypothetical project, a distributor has more orders than stock and wants a system to recommend which orders it can fulfil. The developer uses an approved coding agent to build the prototype. For ",
          {
            "text": "Digital Builders",
            "href": "/profiles/digital-builders/"
          },
          ", a capable agent can handle much of the implementation, including standard checks and tests."
        ],
        "The harder work in this project lies in two decisions: which stock is genuinely available, and whose order takes priority when there is not enough. The records contain quantities, dates and customer details. The rules people use to make those decisions are scattered across departments, with some still disputed.",
        "The developer investigates those rules with the people responsible for them. Her interview answer can show how that analysis shaped the system the agent built."
      ]
    },
    {
      "heading": "1. Work out which stock the business can actually promise",
      "paragraphs": [
        "The warehouse system shows 120 units on hand. Sales expects the tool to treat them as available. Finance says 30 belong to a supplier under a consignment arrangement. Service has set aside another 20 for warranty replacements. Neither condition appears in the quantity field.",
        "The coding agent can help trace stock movements and identify conflicting records. But the developer still needs to establish what these entries mean for this business. She examines the supplier arrangement with purchasing and asks service how it uses the reserve. She finds that consignment units can be sold through the normal process. The service reserve can be released only when the service manager confirms that incoming stock will cover outstanding warranty commitments.",
        "Subtracting every reservation would unnecessarily block sales. Counting everything on hand could promise units that service needs. The developer maps the stock states and asks the responsible managers to agree when each can be used. She then gives the agent those rules to implement, including the approval needed to release the service reserve.",
        "The resulting tool shows what can be promised now and which additional units depend on a decision. To check it, she takes a past allocation case and works through it with purchasing and service. They compare the recommendation with the obligations that applied at the time.",
        "Her contribution is the analysis that makes “available stock” meaningful. More elaborate code would not resolve the disagreement about what the business was entitled or willing to promise."
      ]
    },
    {
      "heading": "2. Resolve priorities that a simple ranking would hide",
      "paragraphs": [
        "Now two customers want the remaining stock. One has an older order and a larger account. The other needs a smaller quantity to keep a production line running. Sales favours the larger account; operations points to the disruption the smaller customer would face. A first-come-first-served rule and a revenue ranking would produce different answers.",
        "The developer looks at how previous shortages were handled and asks what commitments were made to each customer. She discovers that the larger account’s order can be split across two deliveries without missing its agreed deadline. The smaller customer has little usable stock left, but the urgency entered by sales has not been confirmed with the customer.",
        "She uses the agent to compare possible allocations against those facts. One option would supply the smaller order now and split the larger delivery. That option depends on confirming the smaller customer’s need and the replenishment date. She brings the trade-off to the commercial and operations leads, who own the decision.",
        "Once they agree the approach, she translates it into system behaviour. The tool checks whether a split delivery can meet an existing commitment. It flags unconfirmed urgency and shows the consequences of each option. When commitments conflict, it asks for an authorised decision rather than silently choosing a customer.",
        "She checks the prototype against historical shortage cases with the people who handled them. A disagreement becomes a question about the rule or the evidence behind it. Passing tests against an invented ranking would have told her very little about whether the recommendation was acceptable.",
        "Here, the developer’s value is in finding the hidden commitments and making a disputed trade-off visible. A coding agent could propose the same options with enough context. She can explain how she obtained that context and got the business decision reflected in the implementation."
      ]
    },
    {
      "heading": "Explain how your analysis improved the AI output",
      "paragraphs": [
        "In the interview, the developer could say:",
        "“The agent built the allocation prototype. I investigated why the stock figure could not be used directly and agreed release rules with purchasing and service. I also found that order age and account size missed some delivery commitments. I worked through the competing allocations with the commercial and operations leads, then used the agent to implement the agreed checks and approval points. We reviewed past shortage cases to see whether the recommendations reflected those commitments.”",
        "That gives the interviewer two decisions to explore. The developer can show what the initial rules missed, what she learned from the business and how the revised system behaved. She can also identify the decisions that remained with managers.",
        [
          "There is a current hiring context for demonstrating this kind of work. In its ",
          {
            "text": "5 October workforce report",
            "href": "https://newsroom.workday.com/2026-10-05-Workday-Global-Workforce-Report-AI-Is-Rewriting-Jobs-More-Than-Its-Cutting-Them"
          },
          ", Workday analysed requisitions from roughly 550 enterprise employers using its recruiting software. Demand for hands-on AI skills, including building tools and automating workflows, rose 51% between September 2025 and July 2026. A project like the allocation tool gives an applicant a way to demonstrate that hands-on work."
        ]
      ]
    },
    {
      "heading": "A developer’s job can contain several kinds of work",
      "paragraphs": [
        [
          "The job title in this example is developer. Building the tool is ",
          {
            "text": "Digital Builder",
            "href": "/profiles/digital-builders/"
          },
          " work. Investigating what the stock records mean, comparing allocations and testing the evidence behind a recommendation is ",
          {
            "text": "Analyst",
            "href": "/profiles/analysts/"
          },
          " work. Both contribute to the result."
        ],
        "That mix gives the developer a more useful starting point for a career plan. She may be comfortable implementing agreed rules but less confident investigating conflicting requirements. Her next goal could be to lead the analysis of one allocation rule, with an experienced colleague reviewing her findings before implementation. If she already does that analysis well, she can make it visible through the decisions it improves.",
        [
          "The ",
          {
            "text": "ADAPTOR framework",
            "href": "/framework/"
          },
          " helps you uncover the Work Profile mix inside your own job title. Use that mix to build your personal SWOT, choose what you need to develop and turn it into a goal and action. In this case, learning another coding tool would address only part of the work."
        ]
      ]
    },
    {
      "heading": "Look for the business question behind your code",
      "paragraphs": [
        "Before your next interview, revisit an AI-assisted project where the requirements were incomplete or contested. Find a decision you helped clarify. What did you have to learn from users, records or other teams before the agent could build the right behaviour?",
        "Compare the initial approach with the agreed result. Show how your analysis changed a rule, a recommendation or a decision that needed approval. Use a permitted example to explain the consequence, and describe how you checked it with the people responsible.",
        "If your contribution so far has mainly been accepting generated code, look for an unresolved business question in the project. Investigate it with a colleague who knows the work. Then use the agent to explore options and implement the decision once it has been agreed.",
        [
          "The ",
          {
            "text": "Digital Builders walkthrough",
            "href": "/profiles/digital-builders/"
          },
          " explores system understanding and delivery ownership as areas to develop. An interview example becomes stronger when you can show how that understanding helped AI produce something the business could use."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "Workday, Global Workforce Report: AI Is Rewriting Jobs More Than It’s Cutting Them",
      "url": "https://newsroom.workday.com/2026-10-05-Workday-Global-Workforce-Report-AI-Is-Rewriting-Jobs-More-Than-Its-Cutting-Them",
      "date": "5 October 2026"
    }
  ],
  "related": [
    "will-ai-replace-my-job",
    "which-human-skills-become-more-valuable",
    "ai-training-time-practise-work"
  ]
},

{
  "slug": "where-does-ai-saved-time-go",
  profiles: ["output-creators"],
  "title": "AI Saves Time at Work. Who Decides What Happens Next?",
  "description": "Faster AI drafts can lead to better work or simply more work. Agree how to use the capacity gained before raising workload expectations.",
  "category": "AI and Workplace Change",
  "type": "Opinion",
  "date": "2026-10-05",
  "readTime": "6 min read",
  "heroImage": {
    "src": "/employers-ai-conversation.webp",
    "alt": "Colleagues discussing a change to their work beside a whiteboard",
    "width": 1594,
    "height": 986
  },
  "intro": "When AI helps a team finish work sooner, the next question is what to do with the time gained. I think that deserves a conversation before workload targets rise. A faster task could make room for work that has been neglected, and the people doing it should have a chance to make that case.",
  "sections": [
    {
      "heading": "First, establish what time has actually been saved",
      "paragraphs": [
        "Finishing an AI-generated draft quickly feels like progress. But the useful saving becomes clear only after the draft has been checked and the work has reached the person who needs it. Extra corrections or a slow approval can absorb much of the time gained.",
        [
          "That gap between faster tasks and wider improvement appears in Gallup’s ",
          {
            "text": "workplace productivity overview",
            "href": "https://www.gallup.com/workplace/713063/ai-workplace-productivity.aspx"
          },
          ", updated on 30 September. Its discussion of US employee surveys describes positive productivity perceptions, with benefits concentrated in individual tasks. Those perceptions are a useful starting point for investigating the complete process. They leave the amount of capacity available for other work to be established."
        ],
        "Once a team has evidence of a saving, it can consider where that capacity would do the most good. The choice becomes clearer when there is a specific problem to solve."
      ]
    },
    {
      "heading": "Use the saving to address a problem the team already has",
      "paragraphs": [
        "As a hypothetical example, imagine a sales team using an approved AI tool to draft proposals from permitted product information and customer requirements. Staff verify the claims and pricing before sending anything to the customer. After allowing for those checks, they find the process takes less time.",
        "The manager sees an opportunity to produce more proposals each week. The salespeople see another possibility. Several previous proposals needed major revisions because the team had misunderstood the customer’s implementation constraints.",
        "They suggest using some of the saved drafting time for a customer conversation before finalising the recommendation. The salesperson would check what could make implementation difficult and adjust the offer accordingly. AI would handle more of the writing, freeing time to improve the fit of the proposal.",
        "That gives the manager a concrete alternative to consider. The team is connecting the capacity gained to a problem that already costs it time and weakens its work."
      ]
    },
    {
      "heading": "Make room for the proposed change to work",
      "paragraphs": [
        "The customer conversation will only help if the salesperson can act on what they learn. They need access to the customer and permission to adjust the recommendation. If every adjustment gets stuck in the existing approval process, the proposal may still take just as long to complete.",
        [
          "Changes of this kind feature in a ",
          {
            "text": "BCG study published on 24 September",
            "href": "https://www.bcg.com/publications/2026/companies-use-ai-to-redesign-work"
          },
          ". Its qualitative interviews with 50 selected companies across ten countries describe shifts in responsibilities and decision-making as firms develop their use of AI. These practices offer ideas to examine in your own workplace, with the needs of the work guiding which changes make sense."
        ],
        "For the sales team, the next conversation therefore needs to cover how recommendations can change as well as how staff spend their time. Someone must be responsible for resolving that question before the trial starts."
      ]
    },
    {
      "heading": "Compare that proposal with the case for more output",
      "paragraphs": [
        "Even with those arrangements in place, the manager may prefer to raise the proposal target. Customers could be waiting, and reducing the backlog might bring a greater benefit than spending longer on each offer. Budget constraints may also limit the options.",
        "I would support a higher target when repeated results show the complete process is faster, quality remains acceptable and the workload is sustainable. Fewer customer delays would strengthen that case. If proposals keep returning for major revision, the team has a stronger reason to investigate customer fit first.",
        "Before choosing either approach, the manager also needs to consider what the new pace would mean for the people involved."
      ]
    },
    {
      "heading": "Keep the pace sustainable for people",
      "paragraphs": [
        "AI can produce drafts far faster than people can assess them. In the sales example, a sharp rise in proposals could leave the same staff checking more claims and making more customer decisions each day. If every proposal depends on their judgement, pressure builds at that point in the process.",
        "Shorter deadlines can spread that pressure to colleagues too. The person approving prices may receive more requests marked urgent, even though their own work takes just as long. A saving in one task can become a faster pace of work for everyone around it.",
        "I think managers and leaders should leave room for careful decisions and unexpected problems when setting targets. Some of the gain could reduce overtime or give staff breathing space. Directing it all towards more and faster deliverables risks making the human workload harder to sustain.",
        "The trial should therefore test whether people can maintain the proposed pace alongside the improvement in results."
      ]
    },
    {
      "heading": "Agree a trial before changing expectations",
      "paragraphs": [
        "For this sales team, a limited trial could keep the existing volume target while staff test the additional customer conversations. They would record the time spent on the complete proposal and the substantial revisions needed after customer feedback. They would also check whether reviews spill into overtime or leave colleagues waiting. At the review, the manager could judge both the value of the conversations and the pressure on staff.",
        [
          "Planning the use of productivity gains, then revisiting that plan against verified results, is also part of the Conference Board’s ",
          {
            "text": "24 September briefing on agentic AI and work redesign",
            "href": "https://www.conference-board.org/publications/framework-for-agentic-AI-and-work-redesign"
          },
          ". The briefing draws on executive interviews and other research sessions. Although it concerns AI agents, I would apply the same discipline to ordinary workplace AI tools."
        ],
        "If AI is saving time in your own work, bring a similarly specific proposal to your next workload conversation:"
      ],
      "bullets": [
        "Explain the saving across the complete task, including checking and rework. Where you only have an estimate, identify what still needs testing.",
        "Name the problem you would address with that capacity and the result you expect. Explain why it is worth considering alongside greater output.",
        "Agree a trial period and the workload expectations that apply during it. Record what you will measure and who will review the results.",
        "Check the impact on people who review or approve the work. Discuss workload with them and watch for overtime or rushed checks. Agree when to adjust the pace if the work becomes difficult to sustain."
      ]
    },
    {
      "paragraphs": [
        "The trial also gives you something useful for a conversation about your role. In the sales example, staff would have evidence of how their customer judgement improves AI-supported proposals.",
        [
          "You can carry that evidence into your ",
          {
            "text": "ADAPTOR AI-Era SWOT",
            "href": "/framework/"
          },
          ". Faster drafting may expose part of an ",
          { "text": "Output Creator", "href": "/profiles/output-creators/" },
          "’s work. Taking greater responsibility for customer fit creates an opportunity to develop ",
          { "text": "Relationship Worker", "href": "/profiles/relationship-workers/" },
          " skills. A short-term goal could be to demonstrate that contribution through the trial, then use the results to discuss how your role could develop."
        ],
        "You may have limited influence over the final allocation of time. A practical proposal gives your manager an option to assess while expectations are still being discussed."
      ]
    }
  ],
  "sources": [
    {
      "title": "Gallup, AI and Workplace Productivity: What Leaders Need to Know",
      "url": "https://www.gallup.com/workplace/713063/ai-workplace-productivity.aspx",
      "date": "27 July 2026; updated 30 September 2026"
    },
    {
      "title": "BCG, Five Ways That AI Front-Runners Change How Work Gets Done",
      "url": "https://www.bcg.com/publications/2026/companies-use-ai-to-redesign-work",
      "date": "24 September 2026"
    },
    {
      "title": "The Conference Board, A Framework for Agentic AI and Work Redesign",
      "url": "https://www.conference-board.org/publications/framework-for-agentic-AI-and-work-redesign",
      "date": "24 September 2026"
    }
  ],
  "related": [
    "how-ai-is-changing-everyday-work",
    "which-human-skills-become-more-valuable"
  ]
},

{
  "slug": "can-you-use-ai-tool-at-work",
  profiles: ["administrative-operators"],
  "title": "Can You Use That AI Tool at Work? Start With the Task",
  "description": "Using AI at work? Check the task and company guidance, judge when an unapproved tool is suitable, and validate automation before it reaches critical data.",
  "category": "AI Policy, Risk and Workplace Culture",
  "type": "Coaching",
  "date": "2026-10-02",
  "readTime": "5 min read",
  "heroImage": {
    "src": "/employers-ai-conversation.webp",
    "alt": "Colleagues discussing a work decision beside a blank whiteboard",
    "width": 1594,
    "height": 986
  },
  "intro": "A colleague shows you an AI tool that turns meeting notes into actions. Before using it, consider the task and the information involved. An approved tool may already have clear company guidelines. With an unapproved tool, summarising a public report presents a different judgement from uploading client notes or connecting company systems.",
  "sections": [
    {
      "heading": "The gap between encouragement and permission",
      "paragraphs": [
        [
          "In its ",
          {
            "text": "30 September article on AI agents",
            "href": "https://www.gartner.com/en/articles/agentic-ai-oversight"
          },
          ", Gartner describes employees building and using automations outside formal oversight. It recommends assessing the sensitivity of the information an agent can access alongside how much it can do on its own. Those two questions are useful even for a small workplace experiment."
        ],
        [
          "A ",
          {
            "text": "survey released by OneTrust on 14 September",
            "href": "https://www.onetrust.com/news/onetrust-research-86-of-organizations-experienced-ai-related-incidents-yet-few-slowed-deployment/"
          },
          " adds a reason to make the approval route workable. One-third of surveyed organisations reported employees using unapproved AI because approved tools or processes were not available quickly enough. Sapio Research conducted the vendor-commissioned survey of 1,200 senior business decision-makers across eight countries. Their responses give a view of organisational experience; the permission for your own task still needs checking locally."
        ],
        "Start with the tool’s approval status and the task you want it to perform. Which route applies to your work?"
      ]
    },
    {
      "heading": "If the tool is approved, follow the existing guidance",
      "paragraphs": [
        "Your company should make clear which uses are covered and what information the tool may handle. For routine work within those conditions, use the authorised account and follow the agreed checks. You should not need to seek fresh approval for every draft.",
        "Check that the guidance covers your actual task. Permission to summarise internal documents may leave client records outside the allowed scope. Connecting the tool to another system can also introduce permissions that its original approval did not cover.",
        "If the guidance is missing or unclear, ask the tool owner to resolve the specific gap. A manager can help you find that person. Agree a date for an answer and use the existing workflow while you wait."
      ]
    },
    {
      "heading": "If the tool is unapproved, judge the proposed use",
      "paragraphs": [
        "Check your company’s guidance first. Where it permits public-data use, summarising a freely available industry report in an unapproved chatbot may be a reasonable choice. Use material you are entitled to share and check the summary against the original before relying on it.",
        "Consider what else the request reveals. A public report can become a sensitive input if your prompt includes an unpublished strategy or asks about a named client. Keep the task limited to the public material when that is all the tool needs.",
        "Use your judgement about the information and the consequences. Work through these questions:"
      ],
      "bullets": [
        "Does company guidance allow this use? If you cannot tell, ask the appropriate team to clarify.",
        "Would the tool receive only public material, or would the prompt expose confidential or personal information?",
        "Will you check a draft yourself, or could the tool affect records, decisions or other people directly?"
      ]
    },
    {
      "paragraphs": [
        "For a low-risk task within company rules, you may be able to proceed without a separate approval request. Check the output and take responsibility for how you use it.",
        "If the data boundary or permitted use is unclear, seek help from the relevant IT, security or privacy team. Describe the task so they can advise on the specific concern. Confidential data or access to company systems may need formal assessment before you proceed.",
        "If the tool would become part of a regular team workflow, consider proposing it for approval. That gives the organisation a chance to assess the supplier and provide consistent guidance. Follow any existing restrictions while that decision is pending."
      ]
    },
    {
      "heading": "Define the task before you configure the tool",
      "paragraphs": [
        "Make the required input, the work to be done and the expected output clear. For a chatbot, put those requirements into the prompt. For an automation, specify them in the workflow design.",
        ["As a hypothetical example, a project coordinator could use an approved chatbot to extract actions from meeting notes. Her prompt might say: “From these permitted notes, produce an action list with owners and due dates. Mark missing details as unknown. Do not infer commitments that the notes do not contain.” This action-tracking task falls within the ", {"text": "Administrative Operators", "href": "/profiles/administrative-operators/"}, " Work Profile."],
        "She would check the draft against the notes before sharing it. Client launch plans could require different data permissions, even within the same approved tool. Removing names would still leave commercially sensitive details.",
        "Decide where the workflow ends. Producing a draft list leaves the coordinator in control of what enters the project system. Automatically updating records or emailing colleagues needs a separate assessment of those actions."
      ]
    },
    {
      "heading": "Test automation before it reaches critical data",
      "paragraphs": [
        "For automation or higher-risk work, agree a test and validation plan before broad rollout or use on critical records. Apply this to approved tools too when the proposed workflow introduces those risks.",
        [
          "The voluntary ",
          {
            "text": "NIST AI Risk Management Framework",
            "href": "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/"
          },
          " calls for rigorous testing with documented results. It also includes ongoing monitoring and recovery planning. In a workplace workflow, agree what must pass and who can authorise release."
        ],
        "For the coordinator’s proposed automation, test in an isolated environment with permitted test data. Compare its action list and proposed record changes with results checked by a person. Include awkward cases before judging it ready."
      ],
      "bullets": [
        "Check missing owners, conflicting dates and ambiguous commitments. Confirm that the workflow flags uncertainty instead of inventing an answer.",
        "Verify that only the intended records can change. Test duplicate processing and what happens when a connection fails midway.",
        "Confirm the required human approval before consequential changes. Test how to stop the workflow and recover from an incorrect update.",
        "Document test cases and results, including unresolved failures. Record the responsible reviewer’s decision before a limited rollout."
      ]
    },
    {
      "paragraphs": [
        "Monitor the limited rollout before expanding it. Keep a record of errors and corrections. Revalidate when a material change to the tool or workflow could affect the result."
      ]
    },
    {
      "heading": "Make the useful next step part of normal work",
      "paragraphs": [
        "Choose the action that fits what you have found. For an approved use that works reliably, update the relevant standard operating procedure (SOP) through its usual owner. Include the permitted inputs and prompt or workflow configuration. Record the output checks and who maintains the procedure.",
        "For a permitted, low-risk use of an unapproved tool, keep the source and your checks with the work. If colleagues could benefit from using it regularly, propose an agreed approach through the relevant team. Seek clarification where the rules or risks are uncertain.",
        "For automation, keep the validation evidence with the procedure. Record the release decision and arrangements for monitoring and recovery. Colleagues adopting the workflow should be able to see its limits and the checks they must perform.",
        [
          "When the change affects a team, the ",
          {
            "text": "guide to talking with staff about AI",
            "href": "/blog/how-employers-should-talk-about-ai/"
          },
          " can help you explain the new responsibilities."
        ],
        [
          "This work can also give you evidence for your ",
          {
            "text": "ADAPTOR AI-Era SWOT",
            "href": "/framework/"
          },
          ". A validated workflow shows how your judgement improves the use of AI. An approval proposal can turn an opportunity into a concrete next action. Keep the procedure and results as evidence of the contribution you made."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "Gartner, The AI Agents You Can’t See Can Still Create Risk",
      "url": "https://www.gartner.com/en/articles/agentic-ai-oversight",
      "date": "30 September 2026"
    },
    {
      "title": "OneTrust, Research on AI-related incidents and governance",
      "url": "https://www.onetrust.com/news/onetrust-research-86-of-organizations-experienced-ai-related-incidents-yet-few-slowed-deployment/",
      "date": "14 September 2026"
    },
    {
      "title": "NIST, AI Risk Management Framework Core",
      "url": "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/",
      "date": "January 2023"
    }
  ],
  "related": [
    "how-employers-should-talk-about-ai",
    "ai-training-time-practise-work"
  ]
},

{
  "slug": "ai-training-time-practise-work",
  profiles: ["team-coordinators"],
  "title": "AI Training Needs Time to Practise at Work",
  "description": "A global workforce survey finds uneven access to learning resources. Here is a practical way to build AI practice into work and make human judgement visible.",
  "category": "Human Value, Skills and Leadership",
  "type": "Knowledge / Advice",
  "date": "2026-10-01",
  "readTime": "4 min read",
  "heroImage": {
    "src": "/human-skills-value.webp",
    "alt": "Three colleagues weighing a decision together around a table",
    "width": 1594,
    "height": 986
  },
  "intro": "AI use at work is growing, but reported access to learning resources is falling. PwC’s latest survey describes both shifts. A practical team question is where people can practise on real tasks, with time and feedback to improve how AI fits their work.",
  "sections": [
    {
      "heading": "A learning gap sits behind AI adoption",
      "paragraphs": [
        [
          "PwC published its ",
          {
            "text": "Global Workforce Hopes and Fears Survey 2026",
            "href": "https://www.pwc.com/gx/en/1/issues/workforce/hopes-and-fears.html"
          },
          " on 29 September. In the survey, 51% of respondents said they could access the learning and development resources they need. The figure was 59% a year earlier. Researchers gathered responses in May and June from 49,364 workers. The survey covered 48 countries and regions across 29 sectors."
        ],
        "PwC’s ‘engine room’ cohort represents 56% of respondents. Fewer than 40% said they could access those resources, compared with nearly 80% of ‘front-runners’. PwC defines the cohorts using respondents’ views of demand for their skills and the benefits they report gaining from AI. Its access question asks about learning and development resources broadly, leaving AI training and practice time within a wider measure.",
        [
          "The European Training Foundation and its partners published ",
          {
            "text": "Changing landscape of skills in the age of AI",
            "href": "https://www.cedefop.europa.eu/en/publications/2243"
          },
          " on 24 September. Listed by Cedefop, the report describes changing skill needs across many occupations. Cognitive and socio-emotional capabilities feature alongside digital and AI skills. Read together, these findings point to a practical question for managers: where can people practise new capabilities in the work they will continue to do?"
        ]
      ]
    },
    {
      "heading": "Practise at the point of work",
      "paragraphs": [
        "As a hypothetical example, imagine an operations planner using an employer-approved AI tool. It summarises open orders and suggests a sequence for the week. One order appears ready to move, but the planner knows it still needs a quality sign-off. They check the source information and confirm the sign-off with a colleague. Then they update the sequence before the team acts.",
        [
          "AI can help assemble information, while the planner’s knowledge of the process shapes the practical next step. If workers are expected to catch exceptions like this, the workflow should make that responsibility clear and give them room to learn from the checks. The ",
          {
            "text": "Team Coordinators Work Profile",
            "href": "/profiles/team-coordinators/"
          },
          " describes similar work involving hand-offs, decisions and delivery."
        ]
      ]
    },
    {
      "heading": "Set up a two-week practice loop",
      "paragraphs": [
        "Choose one repeated, low-risk task and an approved tool. Agree what the tool may do and what information it may use. Make clear which decisions and checks stay with a person.",
        "Run the trial for two weeks. Reserve 30 minutes of working time each week to review three to five permitted examples. Review them with a colleague or manager.",
        "Before the trial, choose one signal to follow:"
      ],
      "bullets": [
        "Count meaningful corrections made before an AI output is shared.",
        "Track missed hand-offs.",
        "Measure the time from starting the task to having an output ready. Include checking and rework."
      ]
    },
    {
      "paragraphs": [
        "Compare a few similar tasks from before and during the trial. If corrections rise or ownership is unclear, adjust the task or boundary. If the work improves, name the judgement that helped. Give people room to keep developing it.",
        [
          "Managers can build time, access and feedback into the learning plan. Where a condition is missing, ask for a small approved trial. Agree who will review the AI output. The site’s ",
          {
            "text": "guide to talking with staff about AI",
            "href": "/blog/how-employers-should-talk-about-ai/"
          },
          " can help structure that conversation. Keep the observations. The free ",
          {
            "text": "ADAPTOR framework",
            "href": "/framework/"
          },
          " can help you connect the work you do with the value you add. Use what you’ve learnt to choose a practical next goal."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "PwC, Global Workforce Hopes and Fears Survey 2026",
      "url": "https://www.pwc.com/gx/en/1/issues/workforce/hopes-and-fears.html",
      "date": "29 September 2026"
    },
    {
      "title": "European Training Foundation et al., Changing landscape of skills in the age of AI",
      "url": "https://www.cedefop.europa.eu/en/publications/2243",
      "date": "24 September 2026"
    }
  ],
  "related": [
    "how-employers-should-talk-about-ai",
    "which-human-skills-become-more-valuable"
  ]
},

{
  "slug": "mckinsey-ai-jobs-career-transition-2026",
  profiles: ["relationship-workers", "analysts"],
  "title": "AI May Create New Jobs. Can You Reach Them?",
  "description": "McKinsey’s new workforce report raises a practical question: how can you assess AI’s impact on your work and use it to help build a route into a new role?",
  "category": "AI Job News and Current Affairs",
  "type": "News reflection",
  "date": "2026-09-30",
  "readTime": "4 min read",
  "heroImage": {
    "src": "/job-risk-reflection.webp",
    "alt": "A professional considering two possible paths",
    "width": 1594,
    "height": 987
  },
  "intro": "A forecast of new jobs can sound reassuring until you ask where those jobs are and what it would take to get one. McKinsey’s new US workforce report, published on 29 September 2026, puts that question in focus. My reading: a career option becomes useful when you can see a workable route into it.",
  "sections": [
    {
      "heading": "What the report says",
      "paragraphs": [
        [
          "In ",
          {
            "text": "Workforce in motion",
            "href": "https://www.mckinsey.com/mgi/our-research/Workforce-in-motion-Skills-and-pathways-to-future-jobs-in-the-United-States"
          },
          ", McKinsey estimates that roughly 11 million US workers may need to change occupations by 2035. Alternative assumptions put that figure at around six million to more than 16 million."
        ],
        "These are modelled possibilities, rather than observed job losses. The analysis combines AI and other automation with broader forces such as demographic change and infrastructure investment. It also models demand growing elsewhere in the economy.",
        "For a route between occupations, the report examines demand for the destination, overlap in skills, preservation of pay and the time needed to gain required credentials. That brings the discussion closer to the choices a person actually faces.",
        [
          "The figures refer to the US, but the challenge of helping people move as work changes matters across developed economies. McKinsey’s earlier ",
          {
            "text": "research on Europe",
            "href": "https://www.mckinsey.com/mgi/our-research/a-new-future-of-work-the-race-to-deploy-ai-and-raise-skills-in-europe-and-beyond/"
          },
          " also models substantial occupational transitions. I see a wider lesson here: look at how AI changes your work and how it could help you prepare for what comes next. The pace and opportunities will vary by country and employer."
        ]
      ]
    },
    {
      "heading": "My reading: use AI to help build the next role",
      "paragraphs": [
        "If AI is taking over part of your work, ask what that changes about the contribution people need from you. Then ask how the same technology could help you make that contribution. Combining AI with your knowledge of the work, judgement and relationships may open a route you would otherwise overlook.",
        ["Imagine a customer-support adviser in a team introducing an AI assistant for routine enquiries. Fewer straightforward cases reach her, while colleagues spend more time resolving exceptions and correcting poor handoffs. She knows the product and can recognise when a technically correct answer will still leave a customer confused. Her customer-facing work fits the ", {"text": "Relationship Workers", "href": "/profiles/relationship-workers/"}, " Work Profile."],
        ["With her manager’s agreement, she uses an approved AI tool to group anonymised escalations and suggest recurring failure patterns. She checks the original cases, talks to colleagues and tests revised handoff rules. Over a month, the team compares repeat contacts, missed escalations and total handling time, including her checking work. Investigating those patterns and testing changes develops the ", {"text": "Analysts", "href": "/profiles/analysts/"}, " part of her work profile mix."],
        "This hypothetical adviser is building evidence for a move into service-quality work: understanding customer problems, evaluating AI responses and improving the process. AI helps her examine more cases; her judgement guides what to change. The opportunity depends on whether her employer needs and supports that work. A successful trial would give her something concrete to discuss, rather than guarantee a new position.",
        "Employers can make these transitions more workable by giving staff time, access to approved tools and opportunities to learn on real assignments. Workers need a route into the changing work as well as encouragement to adapt."
      ]
    },
    {
      "heading": "Use ADAPTOR to plan your own transition",
      "paragraphs": [
        [
          "This is the kind of question the free ",
          {
            "text": "ADAPTOR framework",
            "href": "/framework/"
          },
          " is designed to help you work through: Profile → Personal SWOT → Goals → Action. It connects the AI impact on your current work with the contribution you could develop next."
        ],
        "Begin with your work profile mix. Which parts of your role involve routine production or enquiries? Where do you already contribute analysis, judgement or relationships? In the support example, routine contact is under pressure, while customer insight and service analysis offer a possible direction.",
        "Build your AI-Era SWOT around that change. Record one threat to demand for your current work, one strength you could carry forward, one way AI could enable a more useful contribution and one gap you would need to close. Use observations from your workplace to test each point.",
        "Turn the strongest opportunity into a small goal and an agreed trial. Name the result you want to improve, the human checks it needs and how you will judge progress. Then check whether a current vacancy or internal need values that contribution, including its pay, location, hours and any required qualification.",
        "You should leave with a possible direction, evidence to build and a date to discuss the result with someone who knows the work. A transition may begin by changing your contribution within the role you already have.",
        [
          "If you are still unsure how much demand for your current work is changing, ",
          {
            "text": "Will AI Replace My Job?",
            "href": "/blog/will-ai-replace-my-job/"
          },
          " helps you separate evidence from assumptions."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "McKinsey Global Institute, Workforce in motion: Skills and pathways to future jobs in the United States",
      "url": "https://www.mckinsey.com/mgi/our-research/Workforce-in-motion-Skills-and-pathways-to-future-jobs-in-the-United-States",
      "date": "29 September 2026"
    },
    {
      "title": "McKinsey Global Institute, A new future of work: The race to deploy AI and raise skills in Europe and beyond",
      "url": "https://www.mckinsey.com/mgi/our-research/a-new-future-of-work-the-race-to-deploy-ai-and-raise-skills-in-europe-and-beyond/",
      "date": "21 May 2024"
    }
  ],
  "related": [
    "will-ai-replace-my-job",
    "how-ai-is-changing-everyday-work"
  ]
},

  {
    slug: 'how-ai-is-changing-everyday-work',
  profiles: [],
    title: 'How AI Is Changing Everyday Work: A 20-Minute Task Audit',
    description: 'Worried about AI and your job? Map one weekly task, check what is changing, and decide what to watch next.',
    category: 'AI and Workplace Change',
    type: 'Knowledge / Advice',
    date: '2026-09-27',
    readTime: '4 min read',
    heroImage: { src: '/everyday-work-audit.webp', alt: 'A professional mapping a work process beside a laptop', width: 1594, height: 986 },
    intro: 'If you are wondering what AI means for your job, pick one piece of work you do every week. Which steps are changing? Has anyone changed what they expect from you? You can get closer to an answer in 20 minutes than you can by reading another prediction about your profession.',
    sections: [
      {
        heading: 'Look at the work behind the job title',
        paragraphs: [
          'A project coordinator might collect updates, resolve conflicting dates, write a summary and chase a decision. AI can help with the summary. The coordinator still has to find out whether colleagues now handle the other steps themselves and who resolves a clash when dates slip.',
          ['That distinction runs through the ', { text: 'Team Coordinators walkthrough', href: '/profiles/team-coordinators/' }, '. Research from the ILO and OECD points to broad changes in tasks and working conditions. Your own workflow will show which parts are changing around you.'],
        ],
      },
      {
        heading: 'Try this 20-minute audit',
        paragraphs: [
          'Choose a recurring piece of work that someone relies on: perhaps a customer reply, a report or a weekly update. Take a page of notes.',
        ],
        bullets: [
          'First 5 minutes: Write what the work is for and who uses it. For a weekly update: “The team lead can see what needs a decision.”',
          'Next 10 minutes: List the steps from request to result. Include gathering information, drafting, checking, handling exceptions and following up. Mark which steps are already changing at work, and what you have actually seen.',
          'Last 5 minutes: Circle one step worth investigating. Could a tool speed it up? Could a colleague do it themselves? Who would then check the result or handle the awkward cases?',
        ],
      },
      {
        heading: 'Check whether the change helps',
        paragraphs: [
          'If your workplace permits it, try an approved AI tool on the circled step. Compare a few similar pieces of work before and after. Count the whole job: preparation, checking, corrections and hand-offs. Ask the person receiving it whether the result is useful. Keep confidential or personal data out of unapproved tools.',
          'If you cannot run a test, ask that person what they now need from the work. Watch whether requests or responsibilities shift. Those observations count too.',
        ],
      },
      {
        heading: 'Watch for a month, then decide',
        paragraphs: [
          'Over the next month, notice whether people still ask for the work, whether they do more of it themselves, and who now catches errors or makes decisions. Time saved in one step may not change the value of the whole role; an ILO review found that reported time savings do not necessarily translate into higher measured output, earnings or employment.',
          'Then write down three things: what changed, what you still need to find out, and one sensible next move. You might improve your quality check, discuss a new expectation with your manager, or stop using a tool that creates more rework than it saves.',
          [
            'Keep your notes. The next time the workflow changes, you will have something concrete to compare. To turn that snapshot into a wider plan, use the ',
            { text: 'ADAPTOR framework guide', href: '/framework/' },
            '. If you are worried about demand for your whole role, ',
            { text: 'Will AI Replace My Job?', href: '/blog/will-ai-replace-my-job/' },
            ' takes that question further.',
          ],
        ],
      },
    ],
    sources: [
      { title: 'ILO, Generative AI and Jobs: A Refined Global Index of Occupational Exposure', url: 'https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure', date: '20 May 2025' },
      { title: 'OECD, Artificial intelligence, job quality and inclusiveness', url: 'https://www.oecd.org/en/publications/oecd-employment-outlook-2023_08785bba-en/full-report/artificial-intelligence-job-quality-and-inclusiveness_a713d0ad.html', date: '2023' },
      { title: 'ILO, The impact of GenAI on jobs, productivity and work organization: a review of the empirical evidence', url: 'https://www.ilo.org/publications/impact-genai-jobs-productivity-and-work-organization-review-empirical', date: '1 June 2026' },
    ],
    related: ['will-ai-replace-my-job', 'which-human-skills-become-more-valuable'],
  },
  {
    slug: 'will-ai-replace-my-job',
  profiles: [],
    title: 'Will AI Replace My Job? Questions Worth Asking First',
    description: 'Worried AI could replace your job? Examine demand for your work, separate evidence from assumptions, and choose a practical next step.',
    category: 'Jobs and Careers in the AI Era',
    type: 'Coaching',
    date: '2026-09-27',
    readTime: '4 min read',
    heroImage: { src: '/job-risk-reflection.webp', alt: 'A professional considering two possible paths', width: 1594, height: 987 },
    intro: 'A new tool appears at work. Someone mentions a hiring freeze. You begin to wonder: “Will AI replace my job?” Look at the work people still need from you, what has changed and what you can check. That will give you a better answer than your job title alone.',
    sections: [
      {
        heading: 'What are you paid to make happen?',
        paragraphs: [
          'Write one sentence about the result of your work. Who relies on it, and what would they miss if you stopped doing it? A job description may list dozens of tasks; the result tells you why those tasks exist.',
          'Now ask which parts a colleague, manager or customer might do for themselves with AI. Could the same work be covered by fewer people? Where would they still need your judgement, help with exceptions or accountability? What evidence do you have?',
          ['If that is hard to picture, try the ', { text: '20-minute task audit', href: '/blog/how-ai-is-changing-everyday-work/' }, ' on one real piece of work. The ', { text: 'seven Work Profiles', href: '/profiles/' }, ' can then help you recognise the other kinds of work inside your role.'],
        ],
      },
      {
        heading: 'What has actually changed?',
        paragraphs: [
          'Make two short lists. Under “I have seen”, put specific changes: fewer requests, a new tool in regular use, different expectations, or work moving to someone else. Under “I am assuming”, put the conclusions you have drawn from those changes.',
          'Consider another explanation for each signal. A quiet month might reflect budget pressure or seasonality. A faster draft may leave the checking work untouched. The ILO’s 2025 research finds that changes to jobs are a more likely broad effect of generative AI than wholesale replacement of most occupations. Your employer’s plans still need a conversation closer to home.',
        ],
      },
      {
        heading: 'Which question could someone help you answer?',
        paragraphs: [
          'Choose the assumption that matters most. You might ask a manager: “As this work changes, which results will you still need from my role?” A freelancer might ask a client which work they now handle themselves and where they still want support. Pick someone close enough to the work to give you a useful answer.',
        ],
      },
      {
        heading: 'Use the answer to choose your next move',
        paragraphs: [
          'Once you have checked, which of these comes closest to your situation?',
        ],
        bullets: [
          'People still need the result, but the work is changing. Ask which contribution matters most now. Choose one way to improve or show that contribution, and agree how you will judge it in a month.',
          'You cannot yet tell what will happen to demand. Name the missing fact and who can clarify it. Set a date for that conversation. Meanwhile, note the results you have delivered and identify one adjacent role or client need worth exploring.',
          'Requests are falling, work is being reassigned, or your role is formally at risk. Check whether the shift is temporary. If a restructure is proposed, get its scope, timetable and available support. Begin looking at internal and external options now; the pressure may have several causes.',
        ],
      },
      {
        heading: 'Write a conclusion you can revisit',
        paragraphs: [
          'Complete this sentence: “Based on ___, my role currently looks [in demand but changing / uncertain / under pressure]. I will ___ by ___, and I will reassess if ___.” This gives you a working answer to the question you started with—and a way to update it when the facts change.',
          ['To build a fuller plan, use the ', { text: 'ADAPTOR framework guide', href: '/framework/' }, ' to connect your work profile and personal SWOT to goals and action. ', { text: 'Aisha’s example', href: '/examples/aisha/' }, ' shows how one person made her less visible judgement easier to recognise.'],
        ],
      },
    ],
    sources: [
      { title: 'ILO, Generative AI and Jobs: A Refined Global Index of Occupational Exposure', url: 'https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure', date: '20 May 2025' },
    ],
    related: ['how-ai-is-changing-everyday-work', 'which-human-skills-become-more-valuable'],
  },
  {
    slug: 'microsoft-2026-job-cuts-ai-question',
  profiles: [],
    title: 'Microsoft’s 2026 Job Cuts and the New Demand for Human Work',
    description: 'Microsoft announced 4,800 role cuts and a plan to place 6,000 experts with AI customers. My reading: roles can disappear while demand for human work shifts.',
    category: 'AI Job News and Current Affairs',
    type: 'News reflection',
    date: '2026-09-27',
    readTime: '4 min read',
    heroImage: { src: '/microsoft-workforce-news.webp', alt: 'Two professionals discussing a blank page at work', width: 1594, height: 987 },
    intro: 'In the first week of July 2026, Microsoft announced plans to put 6,000 experts alongside customers building AI systems. Four days later, it said it was eliminating around 4,800 roles. I read those announcements as a sign of demand moving: some roles lose their place while new work still needs people.',
    sections: [
      {
        heading: 'The two announcements',
        paragraphs: [
          'On 2 July, Microsoft said it would invest $2.5 billion in a new Frontier Company business. Its plan is to embed 6,000 industry and engineering experts with customers to design, deploy and improve AI systems. The announcement describes the work Microsoft wants to expand; it does not say all 6,000 people will be new hires.',
          'On 6 July, the company announced cuts of around 4,800 roles, mostly in Commercial and Xbox. Microsoft said those roles were not being directly replaced by AI. In the same message, it said AI is automating some daily tasks and changing how work is organised.',
        ],
      },
      {
        heading: 'My reading: a role can go while human value remains',
        paragraphs: [
          'AI can make parts of a job cheaper or easier to do. Employers may then need fewer people in an old role, even as they need people for different work.',
          'Microsoft has not attributed these particular cuts to AI replacing staff. Taken together, the announcements suggest a shift in emphasis: fewer roles in some parts of the business and more investment in industry expertise, engineering and helping customers make AI useful.',
          'A role reflects what an employer needs at a particular moment. People bring knowledge, judgement, relationships and the ability to learn beyond that role. The practical question is where those qualities may meet demand next.',
          'Losing a role is real and painful. Nobody can assume that the people affected can simply move into the new positions. My point is that we should look early at where demand is growing, then work out how our experience could contribute there. Waiting to defend the old bundle of tasks may leave us fewer options.',
        ],
      },
      {
        heading: 'Follow the demand in your own workplace',
        paragraphs: [
          'Ask yourself three things: Which parts of my work are becoming easier to automate or self-serve? Where is my employer or client investing more attention and money? Which part of my experience could help with that new work?',
          ['The ', { text: 'Digital Builders', href: '/profiles/digital-builders/' }, ' and ', { text: 'Professional Advisors', href: '/profiles/professional-advisors/' }, ' walkthroughs explore two kinds of work in the new customer-facing effort. For your own position, ', { text: 'Will AI Replace My Job?', href: '/blog/will-ai-replace-my-job/' }, ' helps you examine demand and evidence.'],
        ],
      },
    ],
    sources: [
      { title: 'Microsoft, The latest in our company transformation', url: 'https://blogs.microsoft.com/blog/2026/07/06/the-latest-in-our-company-transformation/', date: '6 July 2026' },
      { title: 'Microsoft, Microsoft Frontier Company: AI engineering that amplifies and protects your intelligence', url: 'https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/', date: '2 July 2026' },
    ],
    related: ['will-ai-replace-my-job', 'how-ai-is-changing-everyday-work'],
  },
  {
    slug: 'which-human-skills-become-more-valuable',
  profiles: ["analysts"],
    title: 'Which Human Skills Become More Valuable as AI Spreads?',
    description: 'Which human skills become more valuable with AI? A practical example shows how question-framing, evidence-checking and collaboration turn AI output into useful work.',
    category: 'Human Value, Skills and Leadership',
    type: 'Opinion',
    date: '2026-09-27',
    readTime: '3 min read',
    heroImage: { src: '/human-skills-value.webp', alt: 'Three colleagues weighing a decision together around a table', width: 1594, height: 986 },
    intro: 'When people ask which human skills will matter as AI spreads, I think about the whole piece of work: the question, the tool, the checks and the decision. AI will keep improving. Which skills help us use it to get a better result?',
    sections: [
      {
        heading: 'Think about the whole piece of work',
        paragraphs: [
          'Imagine a service analyst trying to understand a rise in customer complaints. Using an approved AI tool and anonymised messages, she groups the complaints and gets a draft summary. It suggests that late deliveries are the main problem.',
          'She checks a sample of the original messages and speaks to the service team. The deliveries are often on time; customers are frustrated because updates arrive too late. She proposes a clearer update, then watches whether repeat contacts fall over the next month.',
          'AI helped her get through the messages. Asking the right question, checking the evidence and listening to colleagues helped her solve the right problem. The value came from how she put those skills and the tool together.',
          ['The ', { text: 'Analysts walkthrough', href: '/profiles/analysts/' }, ' follows the same kind of work from a SWOT finding to a goal and a first action.'],
        ],
      },
      {
        heading: 'The skills I would develop',
        paragraphs: [
          'I would learn enough about AI to know what to ask of it and where it tends to go wrong. Alongside that, I would practise framing problems, testing evidence, understanding the people affected and following through on a decision. These skills become more useful together.',
          'That fits the direction of current research. The World Economic Forum’s 2025 employer survey expects technology skills to grow fastest while also naming analytical thinking and leadership as important. A June 2026 OECD brief points to growing importance for using and interpreting data. These are broad signals; the useful skills in your role will depend on the work around you.',
          'AI will improve at some of the checking and conversation too. I expect the work to change again. Learn how to direct, assess and apply the tools, and keep watching where your judgement improves the result.',
        ],
      },
      {
        heading: 'Try this on your own work',
        paragraphs: [
          'Choose a recurring piece of work. Where could an approved AI tool help? What would you need to check or learn from other people before acting on its output? Name one result you could measure—fewer corrections, a faster decision or better customer feedback. Try it, and see whether the whole piece of work improves.',
          ['If you need a starting point, use the ', { text: '20-minute task audit', href: '/blog/how-ai-is-changing-everyday-work/' }, '. The free ', { text: 'ADAPTOR framework', href: '/framework/' }, ' can then help you turn what you learn into a personal SWOT and next steps.'],
        ],
      },
    ],
    sources: [
      { title: 'World Economic Forum, Future of Jobs Report 2025: Skills outlook', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/', date: '7 January 2025' },
      { title: 'OECD, AI and skills: What we know so far', url: 'https://www.oecd.org/en/publications/ai-and-skills_f843b352-en/full-report.html', date: '5 June 2026' },
    ],
    related: ['how-ai-is-changing-everyday-work', 'will-ai-replace-my-job'],
  },
  {
    slug: 'how-employers-should-talk-about-ai',
  profiles: ["team-coordinators"],
    title: 'How Should Employers Talk to Staff About AI?',
    description: 'Introducing AI at work? Use a before–during–after communication plan for a small pilot, including staff questions, feedback and a clear decision point.',
    category: 'AI Policy, Risk and Workplace Culture',
    type: 'Knowledge / Advice',
    date: '2026-09-27',
    readTime: '4 min read',
    heroImage: { src: '/employers-ai-conversation.webp', alt: 'Colleagues having a two-way discussion beside a blank whiteboard', width: 1594, height: 986 },
    intro: 'If you announce an AI pilot with a promise of “greater efficiency”, staff may hear a question you have not answered: what happens to our work? A useful conversation starts with the specific change you are testing. It continues while people try it, and it ends with a decision they can understand.',
    sections: [
      {
        heading: 'Before: explain the pilot in plain terms',
        paragraphs: [
          ["Imagine a support team testing an approved tool that drafts replies to routine customer queries. Tell staff which queries are included, who checks the drafts, what information the tool can use, and how long the pilot will run. Say what you will measure: response time, corrections, customer feedback and the team’s workload. For ", {"text": "Team Coordinators", "href": "/profiles/team-coordinators/"}, ", setting responsibilities and acting on staff feedback are central parts of leading this change."],
          'Be equally clear about decisions. Has a staffing change been proposed, or is the pilot only testing a workflow? Say what is true today and when you will revisit it. Do not promise that roles will never change. If a change affecting roles is already on the table, discuss it openly through the appropriate employee and representative channels.',
          'Acas advises employers to discuss AI early with staff and representatives. Its consultation guidance also stresses that the issue should be clearly defined and raised before a final decision is made.',
        ],
      },
      {
        heading: 'During: make it safe to question the result',
        paragraphs: [
          'The people handling awkward queries will spot failures a project plan misses. Ask them where the tool helps, where it creates rework and which customers may be poorly served. Give them a named person to contact and a regular check-in. Record the questions and say what you changed in response.',
          ['The ', { text: 'Relationship Workers walkthrough', href: '/profiles/relationship-workers/' }, ' examines what happens when routine contact moves to self-service. ', { text: 'David’s example', href: '/examples/david/' }, ' shows the service leader’s view of chatbot handoffs and complex cases.'],
          'Train staff on the approved tool and its data boundaries before asking them to use it. Keep a person responsible for each outgoing reply. If staff raise concerns about accuracy, privacy or workload, pause that part of the pilot until someone has checked the issue.',
        ],
      },
      {
        heading: 'After: show what you learned',
        paragraphs: [
          'At the agreed review date, share the results—including the corrections and the extra checking time. Ask staff three questions: Do you understand what will change next? Do you know who owns errors? Did your feedback affect the decision? Compare their answers with what you heard at the start.',
          'Then say whether you will continue, change or stop the pilot, why, and when you will review it again. That closes the loop. Silence after a pilot invites people to fill the gap themselves.',
          ['If you need to map the work before announcing a pilot, the ', { text: '20-minute task audit', href: '/blog/how-ai-is-changing-everyday-work/' }, ' is a starting point. For the skills staff can develop alongside AI, read ', { text: 'Which Human Skills Become More Valuable as AI Spreads?', href: '/blog/which-human-skills-become-more-valuable/' }, '.'],
        ],
      },
    ],
    sources: [
      { title: 'Acas, One third of employers think AI will increase productivity', url: 'https://www.acas.org.uk/one-third-of-employers-think-ai-will-increase-productivity', date: '15 May 2025' },
      { title: 'Acas, What to consult on', url: 'https://www.acas.org.uk/consulting-employees/when-to-hold-a-consultation', date: 'updated 10 August 2026' },
    ],
    related: ['which-human-skills-become-more-valuable', 'how-ai-is-changing-everyday-work'],
  },
];

export function getProfile(slug: string) { return profiles.find((profile) => profile.slug === slug); }
export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
export function getCategory(slug: string) { return categories.find((category) => category.slug === slug); }
export function formatDate(date: string) { return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T12:00:00Z`)); }

export function getArticlesForProfile(slug: ProfileSlug) {
  return articles.filter((article) => article.profiles.includes(slug))
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}
