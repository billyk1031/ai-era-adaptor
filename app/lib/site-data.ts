export const siteConfig = {
  name: 'Be an AI-Era ADAPTOR',
  shortName: 'ADAPTOR',
  url: 'https://ai-era-adaptor.com',
  amazonUrl: 'https://www.amazon.com/dp/B0HB5VNWJ9',
  linkedinUrl: 'https://www.linkedin.com/in/billykan/',
  author: 'Billy Kan',
} as const;

export type Profile = {
  slug: string;
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
export type ArticleSection = { heading?: string; paragraphs?: ArticleParagraph[]; bullets?: string[] };
export type ArticleSource = { title: string; url: string; date: string };
export type Article = { slug: string; title: string; description: string; category: string; type: 'Knowledge / Advice' | 'Coaching' | 'News reflection' | 'Explainer' | 'Advice' | 'Analysis' | 'Opinion' | 'Workplace guide'; date: string; readTime: string; intro: string; sections: ArticleSection[]; related: string[]; heroImage?: { src: string; alt: string; width: number; height: number }; sources?: ArticleSource[]; sourceNote?: string };

export const categories = [
  { name: 'AI and Workplace Change', slug: 'ai-and-workplace-change', description: 'How AI changes tasks, roles, workflows, and expectations at work.' },
  { name: 'Jobs and Careers in the AI Era', slug: 'jobs-and-careers', description: 'Clear thinking for people making career decisions while work is changing.' },
  { name: 'AI Job News and Current Affairs', slug: 'ai-job-news', description: 'News, labour-market evidence, company announcements, and what they may mean.' },
  { name: 'Human Value, Skills and Leadership', slug: 'human-value', description: 'The judgement, trust, context, and leadership that work still needs.' },
  { name: 'AI Policy, Risk and Workplace Culture', slug: 'ai-policy-and-culture', description: 'The practical questions organisations need to ask before and during adoption.' },
] as const;

export const articles: Article[] = [
{
  "slug": "mckinsey-ai-jobs-career-transition-2026",
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
        "Imagine a customer-support adviser in a team introducing an AI assistant for routine enquiries. Fewer straightforward cases reach her, while colleagues spend more time resolving exceptions and correcting poor handoffs. She knows the product and can recognise when a technically correct answer will still leave a customer confused.",
        "With her manager’s agreement, she uses an approved AI tool to group anonymised escalations and suggest recurring failure patterns. She checks the original cases, talks to colleagues and tests revised handoff rules. Over a month, the team compares repeat contacts, missed escalations and total handling time, including her checking work.",
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
          'Imagine a support team testing an approved tool that drafts replies to routine customer queries. Tell staff which queries are included, who checks the drafts, what information the tool can use, and how long the pilot will run. Say what you will measure: response time, corrections, customer feedback and the team’s workload.',
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
