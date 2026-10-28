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
  "slug": "gender-education-gap-ai-jobs-career-plan",
  "title": "The Gender Gap in AI-Exposed Jobs: What It Means for Your Career Plan",
  "description": "Pew’s gender and education findings raise questions about how AI could reshape demand for work. Use them to sharpen your personal SWOT and career plans.",
  "category": "AI Job News and Current Affairs",
  "type": "News reflection",
  "date": "2026-10-28",
  "readTime": "6 min read",
  "intro": "Women and men are experiencing different employment outcomes in occupations exposed to AI. New US research from Pew finds a gap that is particularly marked among workers without a bachelor’s degree. I think that finding deserves more attention in career planning: the work AI can help with is only part of the picture. We also need to consider whose work is under pressure and what options they can realistically reach.",
  "profiles": [
    "administrative-operators"
  ],
  "heroImage": {
    "src": "/job-risk-reflection.webp",
    "alt": "A woman holding a notebook considering two paths",
    "width": 1594,
    "height": 987
  },
  "sections": [
    {
      "heading": "What Pew found",
      "paragraphs": [
        [
          "Pew’s ",
          {
            "text": "22 October analysis",
            "href": "https://www.pewresearch.org/short-reads/2026/10/22/men-are-experiencing-more-job-growth-than-women-in-ai-exposed-occupations/"
          },
          " compares US employment in 2017–19 with January 2023–June 2026. It examines how women’s and men’s employment growth within occupations relates to the extent AI can perform or assist their work."
        ],
        "As AI exposure rises, employment growth is stronger for men than women. The gap is concentrated among people without a bachelor’s degree. Among degree holders, neither group’s employment growth has a statistically significant relationship with increasing exposure.",
        "Pew also describes the different work people do. Women without degrees often work in secretarial, reception and customer-service roles with greater exposure. Men with similar education are more concentrated in lower-exposure physical work. That occupational context sits alongside the study’s comparison within occupations.",
        "These are employment patterns spanning years of economic change. How much AI contributed to the differences remains an open question."
      ]
    },
    {
      "heading": "Growth can conceal a very different experience",
      "paragraphs": [
        "The first implication is that growth in AI-exposed occupations gives us an incomplete picture of who is doing well. The gender and education findings reveal differences that disappear in a single total. A growing occupation may still offer a difficult outlook for some of the people working in it.",
        "For personal planning, I would look beyond a forecast for a whole profession. Different responsibilities, levels of seniority and parts of an industry may face different demand. Those are possible places to investigate the gap Pew identifies. The research leaves its explanation open.",
        [
          "This also changes how I would read a reassuring headline about AI creating work. New demand matters, but so does ",
          {
            "text": "the route from someone’s current position to that work",
            "href": "/blog/mckinsey-ai-jobs-career-transition-2026/"
          },
          ". A vacancy requiring experience or qualifications they cannot quickly acquire offers limited help with an immediate loss of demand."
        ]
      ]
    },
    {
      "heading": "What the education difference might mean",
      "paragraphs": [
        "The education pattern makes me question the idea that all work involving information will follow the same path. AI might help someone deliver more specialist work while allowing another employer to consolidate routine work into fewer roles. Both situations can involve substantial AI exposure, with very different consequences for demand.",
        "That is one possible interpretation worth testing against changes around us. A degree may be associated with different responsibilities, sectors or options for moving jobs. We would need more evidence to explain why the gender pattern differs by education.",
        "I would therefore be cautious about making another qualification the automatic response. The useful question is what a qualification would let you do or access. Does it open a credible route to work with demand, or would you still face the same problem after completing it?"
      ]
    },
    {
      "heading": "A future in which existing divisions become sharper",
      "paragraphs": [
        "One possibility is that AI reinforces divisions already present in the labour market. People able to use it in work with growing demand may gain further options. People whose routine work shrinks may face a harder move, especially if the next opportunity requires credentials, time or money they lack. The gender pattern makes the distribution of that pressure worth watching.",
        [
          "There are other possible paths. AI assistance could ",
          {
            "text": "make unfamiliar tasks more accessible",
            "href": "/blog/ai-expands-skills-changes-specialist-value/"
          },
          " and reduce some barriers to a move. As the tools improve, they could also change demand for work that currently looks well positioned. Today’s education pattern gives us a reason to examine our assumptions about the future, rather than settle on one forecast."
        ],
        "For a personal plan, I would consider two situations: AI mainly helps people do their existing work, or it enables an employer to meet demand with fewer people. What would strengthen your position in each? The answer will depend on the work, the employer and your starting point."
      ]
    },
    {
      "heading": "Turning that view into a personal SWOT",
      "paragraphs": [
        [
          "As a hypothetical example, imagine Leila, an administrator without a degree. Managers have begun using an approved AI tool to prepare routine documents themselves, and requests to her have fallen. Her work fits the ",
          {
            "text": "Administrative Operators",
            "href": "/profiles/administrative-operators/"
          },
          " profile. The change gives her a specific reason to review her position."
        ],
        "Leila knows where requests get stuck and which exceptions lead to delays. She has resolved cases where two departments applied conflicting requirements. She wonders whether that experience could help improve the process as more colleagues use AI.",
        "Her SWOT can distinguish what she has observed from what she still needs to establish:"
      ],
      "bullets": [
        "Strength: knowledge of the process and evidence of resolving exceptions. She can describe a real case and the result she helped achieve.",
        "Weakness: limited experience analysing the wider pattern of delays. She needs to find out how much that skill matters for the work she wants to pursue.",
        "Opportunity: helping investigate and improve the AI-assisted process, if her employer needs that contribution. She could use an approved tool to explore anonymised delay records and check its suggestions against actual cases.",
        "Threat: fewer requests may reduce demand for her current role. A degree requirement in potential next roles could also restrict her options."
      ]
    },
    {
      "paragraphs": [
        "Her next step is to check whether process improvement is a real need and what evidence would qualify her to contribute. She can discuss one small investigation with the person responsible for the process. If agreed, she would check whether the proposed change reduces delays and rework, including any extra checking it creates for colleagues.",
        "If the organisation has little need for that work, or entry requirements rule out a near-term move, she needs to explore another route. Her operational experience remains useful evidence; she still has to find where someone needs it."
      ]
    },
    {
      "heading": "Revisit one assumption in your own plan",
      "paragraphs": [
        [
          "Use the gender and education findings to question how well a broad employment trend describes your position. In your ",
          {
            "text": "personal AI-Era SWOT",
            "href": "/framework/#personal-swot"
          },
          ", connect a possible change in demand to the work you actually do. Then examine the skills, evidence and access you would need for an opportunity you are considering."
        ],
        [
          "The questions in ",
          {
            "text": "Will AI Replace My Job?",
            "href": "/blog/will-ai-replace-my-job/"
          },
          " can help you separate changes you have observed from assumptions about demand. Choose one assumption that could change your plan. Write what supports it, what is still unknown and who or what could help you check it. Set a date for that check, then use the answer to choose your next action. A broad trend becomes useful when it helps you investigate a decision you can actually make."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "Pew Research Center, Men Are Experiencing More Job Growth Than Women in AI-Exposed Occupations",
      "url": "https://www.pewresearch.org/short-reads/2026/10/22/men-are-experiencing-more-job-growth-than-women-in-ai-exposed-occupations/",
      "date": "22 October 2026"
    },
    {
      "title": "Pew Research Center, Technical Appendix: data, exposure measures and statistical model",
      "url": "https://www.pewresearch.org/wp-content/uploads/sites/20/2026/10/SR_26.10.22_ai-work-gender_appendix.pdf",
      "date": "22 October 2026"
    }
  ],
  "related": [
    "will-ai-replace-my-job",
    "how-ai-is-changing-everyday-work"
  ]
},

{
  "slug": "how-to-ask-about-ai-job-interview",
  "title": "How to Ask About AI in a Job Interview",
  "description": "Ask how AI shapes the work, responsibilities and learning in a prospective role, then consider whether it fits your career aspirations.",
  "category": "Jobs and Careers in the AI Era",
  "type": "Knowledge / Advice",
  "date": "2026-10-27",
  "readTime": "5 min read",
  "intro": "When an interviewer asks whether you have any questions, AI is worth discussing. You may already know which tools the company uses. What you still need to understand is how those tools shape the work you would do, what you would be responsible for and where the role could take you.",
  "profiles": [
    "output-creators"
  ],
  "heroImage": {
    "src": "/employers-ai-conversation.webp",
    "alt": "Four colleagues discussing work beside a blank whiteboard",
    "width": 1594,
    "height": 986
  },
  "sections": [
    {
      "heading": "Start with the work you want to grow into",
      "paragraphs": [
        [
          "ZipRecruiter’s ",
          {
            "text": "26 October AI Worker Report",
            "href": "https://www.ziprecruiter-research.org/economic-insights-research/2026-ai-worker-report"
          },
          " found differing preferences about AI in a future job: 30.5% of respondents wanted less involvement and 20.4% wanted more. Its September online survey covered more than 1,500 US workers. Those preferences sit alongside reported benefits from AI, including greater enjoyment of work."
        ],
        "I think the useful next question is what someone wants to change about their working life. More AI might mean help with repetitive tasks, or more time reviewing generated output. The work behind the label matters.",
        [
          "Before an interview, consider the work you want to do more of, the responsibility you want to grow into and the experience you need. Your ",
          {
            "text": "personal AI-Era SWOT",
            "href": "/framework/#personal-swot"
          },
          " can help connect those ambitions to your current strengths, gaps and changing demand."
        ],
        "Choose questions that suit the opportunity and interview stage. A prospective manager should be able to discuss the work in more detail than an initial recruiter."
      ]
    },
    {
      "heading": "“Could you walk me through a recent assignment?”",
      "paragraphs": [
        "You might begin: “How does the team use AI in this role, and could you walk me through a recent assignment where it made a difference?”",
        "Find out which parts AI handled and what the person did before and after. Compare that with your interests: would you investigate problems, improve workflows or mainly operate an established process? A list of tools tells you little about how you would spend your time."
      ]
    },
    {
      "heading": "“What would I be responsible for deciding?”",
      "paragraphs": [
        "Ask: “When AI contributes to the work, which decisions would I own, and where would I need someone else’s agreement?” A useful follow-up is: “What happened on a recent occasion when the output needed changing?”",
        "The answer may describe checking drafts, investigating unclear requirements or recommending an approach. Consider whether those responsibilities fit your development goals, and whether you would have the information and support to exercise them.",
        "Also ask how people handle disagreement about an AI recommendation. Listen for who investigates the issue and who makes the final call. That can help you understand both the judgement expected and the authority attached to the role."
      ]
    },
    {
      "heading": "“How have expectations changed with AI?”",
      "paragraphs": [
        "Ask: “As the team has introduced AI, how have you changed delivery expectations and allowed for checking or improving the workflow?”",
        "Find out what counts as a good result and how the team handles the review and decisions that follow faster production. Ask about corrections, approval queues and staff feedback. A recent adjustment can show how the manager responds when the work takes more effort than expected."
      ]
    },
    {
      "heading": "“What could I learn here as the work changes?”",
      "paragraphs": [
        "Ask: “Which capabilities would you expect me to develop over the next year as AI changes the work, and how would you support that?”",
        "Explore the support your goal needs: practice on real assignments, feedback from experienced colleagues or opportunities for wider responsibility. If improving AI workflows interests you, ask who can propose changes and how the team tests them.",
        "Ask how someone in the team has progressed as the work changed. A course may be useful, but your aspiration might also require the chance to make decisions and learn from their consequences."
      ]
    },
    {
      "heading": "How the questions work together",
      "paragraphs": [
        [
          "As a hypothetical example, imagine Maya, a communications writer spending much of her time reviewing AI-generated variations. She wants to develop audience research and editorial judgement in her work as an ",
          {
            "text": "Output Creator",
            "href": "/profiles/output-creators/"
          },
          "."
        ],
        "At an interview, “We use AI throughout content production” initially sounds like more of the same. She asks about a recent campaign. The manager describes a writer interviewing customers, exploring messages with AI and recommending one to test. Maya follows up on who chose the direction and how the team assessed the result.",
        "She then asks how often writers do that research, how production targets leave room for it and what support she would receive to lead a campaign. Together, the answers help her assess whether the role could develop the capabilities she wants. She still needs to weigh the rest of the job."
      ]
    },
    {
      "heading": "Use the conversation to assess the whole opportunity",
      "paragraphs": [
        "Afterwards, compare what you heard with your aspirations. Identify the work that appeals to you, where you would stretch and what remains unclear. Keep the examples behind your impressions so you can follow up specifically.",
        "Weigh that picture alongside pay, colleagues, stability, flexibility and your other priorities. A worthwhile opportunity may involve compromises. Where an interviewer needs to check a detail, ask who could clarify it before you decide.",
        "If you are hiring, prepare to answer these questions through real assignments and development examples. Explain what is established, what the team is still testing and where the new person could influence the approach.",
        [
          "These questions also work in a development conversation with your current manager. Discuss the responsibility you want to grow into as AI changes the work. If you need ideas for independent practice, ",
          {
            "text": "Which AI Skill Should You Learn for Your Next Role?",
            "href": "/blog/which-ai-skill-learn-next-role/"
          },
          " offers a starting point. You will know the conversation helped if you can explain how the opportunity fits your goals and what you still need to find out."
        ]
      ]
    }
  ],
  "related": [
    "ai-job-change-career-progression",
    "which-ai-skill-learn-next-role",
    "show-your-value-ai-assisted-developer"
  ],
  "sources": [
    {
      "title": "ZipRecruiter Economic Research, Better Work, More to Learn: The 2026 AI Worker Report",
      "url": "https://www.ziprecruiter-research.org/economic-insights-research/2026-ai-worker-report",
      "date": "26 October 2026"
    }
  ]
},

{
  "slug": "ai-expands-skills-changes-specialist-value",
  "title": "AI Expands Your Skills. What Happens to the Specialist?",
  "description": "The same AI capability can open up work for one person and threaten another. Use ADAPTOR to assess your position and test where you can create value.",
  "category": "AI and Workplace Change",
  "type": "Coaching",
  "date": "2026-10-26",
  "readTime": "6 min read",
  "intro": "AI can help you do work that previously required someone else’s expertise. That can be an exciting opportunity—until you are the person whose service is needed less. The same change looks different from each side. Understanding your own position is the starting point for deciding what to do next.",
  "profiles": [
    "analysts"
  ],
  "heroImage": {
    "src": "/human-skills-value.webp",
    "alt": "Three colleagues discussing a document around a table, with a laptop and notes in front of them",
    "width": 1594,
    "height": 986
  },
  "sections": [
    {
      "heading": "New capabilities can change who does the work",
      "paragraphs": [
        [
          "A study published in Nature Human Behaviour on 26 October, ",
          {
            "text": "Generative AI and the temporary upskilling of knowledge workers",
            "href": "https://www.nature.com/articles/s41562-026-02566-6"
          },
          ", examined consultants attempting data science tasks outside their usual expertise. The analysis covered 487 consultants. Those given ChatGPT access and training performed better across coding, statistical understanding and prediction tasks than those using conventional online resources."
        ],
        "The experiment took place in March and April 2024 using GPT-4. It tested specific technical tasks, with the AI-assisted group’s overall performance remaining below the data scientist benchmarks. On a subsequent technical knowledge test without AI, the researchers found no evidence of an advantage for that group.",
        "The useful distinction is between being able to accomplish more with a tool and acquiring the expertise behind the work. AI-supported capability can still be valuable. It can also change which tasks you need to ask another person to perform.",
        [
          "That creates two personal questions: what work could you now take on, and which parts of your own work could others begin doing for themselves? The ",
          {
            "text": "ADAPTOR framework",
            "href": "/framework/"
          },
          " provides a way to work through both: identify your Work Profile, build a personal AI-era SWOT, then turn a significant opportunity or threat into goals and action."
        ]
      ]
    },
    {
      "heading": "The opportunity: extending the work you can do",
      "paragraphs": [
        "As a hypothetical example, imagine Priya, a sales operations manager who regularly asks an analyst, Daniel, to investigate repeat purchasing. She knows the customers and commercial priorities, but combining order files and writing the analysis has usually required his help.",
        "Using an approved AI tool with data she is authorised to use, Priya can now generate code to combine those files and explore purchasing patterns. She can ask follow-up questions while investigating an account, rather than requesting another report each time.",
        [
          "In ADAPTOR terms, she is considering adding more ",
          {
            "text": "Analyst",
            "href": "/profiles/analysts/"
          },
          " work to her profile mix. That means interpreting evidence and supporting decisions, beyond producing a chart. Her desired capability is to answer a recurring commercial question reliably."
        ],
        "Her personal SWOT makes the opportunity more specific. She understands buying cycles and customer agreements—a strength. Her limited knowledge of analytical methods is a weakness. AI creates an opportunity to investigate more questions herself. A threat is that she becomes responsible for conclusions she cannot adequately assess.",
        "Priya chooses a short-term goal: within a month, reproduce one established repeat-purchasing analysis and use it to support a customer review. She starts with the agreed reporting definitions and a completed period for which a checked result already exists. She compares results and investigates differences before using the analysis in a new decision.",
        "AI can explain the code and suggest tests. Priya also needs to understand what the figures mean commercially. An annual customer agreement, for example, changes how she should interpret a long gap between orders. She checks those details against the account records and explains which customers warrant a follow-up.",
        "If the analysis agrees with the reference and helps the review, she can try another period. If she cannot explain a material difference, her next action is targeted training or an authorised review. The result tells her how far to extend the work."
      ]
    },
    {
      "heading": "The threat: when people need less of your service",
      "paragraphs": [
        "Daniel sees the same development from another position. Producing recurring reports is part of what he is paid to do. If managers can generate them independently, demand for that part of his work could fall. Asking him to help Priya take it over gives him a reason to worry about his own role.",
        "His SWOT needs an honest view of what remains valuable. More sophisticated analysis is also becoming accessible through AI. He needs to examine where his experience, relationships and judgement make a difference that would be difficult or costly for someone else to reproduce.",
        "In this imagined business, Daniel has worked across several regional sales teams. He knows how their targets influence reported results and has earned a reputation for challenging figures fairly. Managers will discuss awkward findings with him because he checks their explanation before drawing a conclusion. Those are strengths he has built through the work.",
        "The business wants to know whether a promotion creates additional sales or simply discounts purchases customers would have made anyway. AI can propose a method and analyse the available records. The harder problem is obtaining a credible comparison when sales teams have reasons to resist the test.",
        "Daniel sees an opportunity to take responsibility for that investigation: establish what evidence is missing, negotiate a workable test and bring a recommendation the budget owner can act on. His technical knowledge helps him recognise when a commercially convenient compromise would undermine the result. His relationships help him find an acceptable alternative."
      ]
    },
    {
      "heading": "Build on value that is difficult to reproduce",
      "paragraphs": [
        "Daniel sets a short-term goal: within six weeks, agree a test of the next promotion that will help the budget owner decide whether to repeat the discount.",
        "Regional managers resist withholding the offer from some customers because their sales targets are at stake. They propose choosing the comparison group themselves. Drawing on earlier campaigns, Daniel recognises that their choices could favour customers already likely to buy, making the result misleading.",
        "He uses AI to explore alternative designs, then draws on his relationships across the teams to negotiate a smaller, randomly assigned trial. The sales director agrees how participation will affect performance reviews. Daniel checks that the trial can still produce useful evidence.",
        "His contribution combines analytical judgement with the trust needed to resolve competing interests. AI supports the technical work; Daniel secures the commitments that make a credible test possible.",
        "At six weeks, he reviews whether the design and commitments are workable. After the promotion, he checks whether the evidence helped the budget decision and whether the benefit justified the teams’ effort.",
        "If the business values this contribution, his medium-term goal could be to take responsibility for evaluating major promotions. His SWOT may identify further training or relationship-building to support that move. If demand is weak, he needs to test another direction."
      ]
    },
    {
      "heading": "The transition needs a decision from management",
      "paragraphs": [
        "Priya’s opportunity and Daniel’s threat will not automatically resolve into a happy partnership. A manager who wants more self-service should discuss what work Daniel will stop, what contribution he can develop and how that contribution will be recognised. Training others should have an agreed place in his responsibilities.",
        "The manager also needs to account for review effort. Giving more people the ability to generate analyses can create more requests for specialist checks. A trial should assess the quality of decisions and the workload on both sides before increasing output expectations.",
        "Where there is no credible role for the proposed new contribution, Daniel needs a candid answer. His action plan can then include building options elsewhere."
      ]
    },
    {
      "heading": "Use the change to choose your next move",
      "paragraphs": [
        "Choose one task AI is making accessible to you, or to someone who currently depends on you. Work through the same sequence:"
      ],
      "bullets": [
        "Profile: identify the work involved and how it fits your current or desired profile mix.",
        "Personal SWOT: name your relevant strengths and gaps, then describe the specific opportunity or threat created by AI. For exposed work, ask what you contribute that would be difficult or costly to obtain through self-service.",
        "Goal: choose a near-term result that would test your proposed direction. State the task, the decision it should support and what successful work would look like.",
        "Action: run one bounded trial and set a review date. Use the result to decide whether to extend the work, develop a missing skill or explore another direction."
      ]
    },
    {
      "paragraphs": [
        "If you are unsure where demand is changing, spend the next week examining recent requests or speaking with the person who uses your work. By Friday 30 October, identify one concrete change to investigate. If your first trial shows little benefit, change the goal before investing in a larger transition.",
        "Priya and Daniel face the same technology from different starting points. Each needs a plan grounded in the work they can contribute and the value others need. Start with the change closest to your own work, and choose one action that will give you better evidence for your next decision."
      ]
    }
  ],
  "sources": [
    {
      "title": "Wiles and colleagues, Generative AI and the temporary upskilling of knowledge workers",
      "url": "https://www.nature.com/articles/s41562-026-02566-6",
      "date": "26 October 2026"
    },
    {
      "title": "Author-hosted manuscript, including methods and appendices",
      "url": "https://emmawiles.github.io/storage/reskill.pdf",
      "date": "Accessed 26 October 2026"
    }
  ],
  "related": [
    "ai-answer-learning-work",
    "which-ai-skill-learn-next-role",
    "ai-professional-advice-client-value"
  ]
},

{
  "slug": "ai-adoption-barriers-staff-resistance",
  "title": "Before Calling It AI Resistance, Check the Barrier",
  "description": "A stalled AI rollout can reflect resources, trust or fears about changing work. Understand both practical and human barriers before deciding how to respond.",
  "category": "AI Policy, Risk and Workplace Culture",
  "type": "Opinion",
  "date": "2026-10-23",
  "readTime": "6 min read",
  "profiles": [],
  "heroImage": {
    "src": "/employers-ai-conversation.webp",
    "alt": "Four colleagues discussing work beside a blank whiteboard",
    "width": 1594,
    "height": 986
  },
  "intro": "I would be cautious about describing a slow AI rollout as staff resistance. A manager needs to understand what is stopping the work, including the concerns people may struggle to say aloud. Unclear permission to use client information, a lack of time to learn and anxiety about losing a valued role need different responses. A useful adoption plan takes both practical and human difficulties seriously.",
  "sections": [
    {
      "heading": "Look beyond willingness to change",
      "paragraphs": [
        [
          "The European Commission’s ",
          {
            "text": "full October report on AI and automated management",
            "href": "https://webgate.ec.europa.eu/ebsm/api/public/deliverable/download?deliverableId=110055&doc=true"
          },
          " helps put the question in context. It draws on 12,826 interviews conducted in March and April 2026 with representatives of privately owned EU companies employing 1–749 people. The study covers AI and other automated systems."
        ],
        "Across the surveyed businesses, investment costs (50%), regulatory uncertainty (49%) and a lack of internal expertise (48%) were the most frequently cited important difficulties. Management distrust (37%), employee concerns about surveillance (33%) and other employee fears (31%) also featured. These are employers’ accounts of adoption barriers, including firms at different stages of use.",
        "The percentages describe how often employers named a difficulty. In a particular team, a less frequently reported concern may decide whether adoption works at all. An employer survey depends on what respondents recognise and are willing to discuss. I would leave room for concerns staff have not voiced, and for managers’ reluctance to acknowledge their own uncertainty.",
        "My reading is that an adoption plan needs to examine resources, suitability and people’s experience together. A reminder to embrace AI will not resolve an unfunded implementation. Buying a suitable tool will not, by itself, earn the confidence of the people expected to use it."
      ]
    },
    {
      "heading": "The obstacle can exist even when people want to proceed",
      "paragraphs": [
        [
          "Reported business experiences make that distinction more concrete. A ",
          {
            "text": "Federal Reserve Bank of San Francisco research brief",
            "href": "https://www.frbsf.org/wp-content/uploads/ai-adoption-among-small-businesses-cdrb202601.pdf"
          },
          ", published in July 2026, examined written responses to the 2024 US Small Business Credit Survey. More than 8,500 businesses answered its open question about current or planned AI use."
        ],
        "One respondent wanted to investigate AI but said the business lacked the resources and staff to do so. Another described interest in healthcare applications while struggling to find affordable options meeting its privacy requirements. These were business owners describing their circumstances in 2024.",
        "The researchers also found deliberate decisions against adoption, including concerns about accuracy and a preference for personal service. Their analysis distinguishes firms facing practical barriers from those that saw insufficient benefit. It treats those responses as individual accounts and leaves open whether some judgements reflected knowledge gaps.",
        "For a manager, that suggests a useful starting point: ask what would have to change for this particular use of AI to be worth trying. A cost problem needs an assessment of resources and likely value. A suitability concern needs examination of the proposed task and tool. General encouragement answers neither."
      ]
    },
    {
      "heading": "Ask for a specific obstacle and a decision",
      "paragraphs": [
        "Choose one piece of work where adoption has stalled. Ask the people doing it to show what happens when they try the proposed approach, or explain the step they cannot yet take. Examine the task and tool, then ask how the proposed change affects their confidence, responsibilities and working relationships.",
        "Then identify who can act on the answer. A manager may need to fund a more suitable service, obtain a decision from the person responsible for data use, or reconsider whether the task is worth changing. If the expected benefit is small beside the cost, postponing that use may be a reasonable decision.",
        [
          "For a question about whether a particular task is permitted, ",
          {
            "text": "Can You Use That AI Tool at Work?",
            "href": "/blog/can-you-use-ai-tool-at-work/"
          },
          " offers a way to frame it. When the obstacle is learning capacity, ",
          {
            "text": "AI Training Needs Time to Practise at Work",
            "href": "/blog/ai-training-time-practise-work/"
          },
          " develops the practical implications. Naming the obstacle helps the conversation reach someone who can resolve it."
        ]
      ]
    },
    {
      "heading": "Make room for concerns people may not say aloud",
      "paragraphs": [
        "Start by asking what people expect the change to mean for their work. Someone may worry about job security, being monitored or losing the part of the role in which they feel most capable. Another may fear looking incompetent while learning. A manager may be uneasy about overseeing a process they do not understand. I would treat these as possibilities to explore with the people involved.",
        "Offer a private conversation as well as a team discussion. Where concerns involve the line manager, make another route available through another manager, an employee representative or an appropriate support channel. Invite people to describe a specific concern without requiring them to perform enthusiasm for the rollout.",
        "Respond to what you hear. Explain what is decided about roles and monitoring, what remains open and who will decide. Avoid promises of job security that you cannot keep. If a worry concerns proposed changes to jobs, involve the appropriate employee and representative channels. A lesson in prompting will not answer that concern.",
        "When confidence or trust is the obstacle, let staff help choose a relevant task and examine the results with someone who can answer questions. Provide supported practice without public comparisons of who learns fastest. Show how errors can be raised and who can reconsider an AI-assisted decision. Managers should be willing to demonstrate their own learning and acknowledge where they need help.",
        "Then check whether people feel more able to use and question the tool. If concerns persist, ask what remains unresolved and act on it. Better participation and clearer reports of problems can tell you more than silence in a launch meeting."
      ]
    },
    {
      "heading": "There is still a place for clear expectations",
      "paragraphs": [
        "The reasonable objection is that some people will resist a useful change. Managers cannot leave every agreed improvement waiting indefinitely for universal enthusiasm. Workers also have a responsibility to develop skills as the work changes.",
        "I would support firmer learning expectations when the task is relevant, the tool is permitted and people have support and time to learn it. Managers should also have listened to concerns and explained what they can change. If supported use produces an acceptable result but someone still declines an agreed learning activity, the conversation can address that specific behaviour.",
        "Keep that discussion separate from judging whether someone sounds positive about AI. A colleague may remain anxious while making a serious effort to learn. The useful expectation is responsible participation, including raising problems when they arise."
      ]
    },
    {
      "heading": "Judge progress by the work that becomes possible",
      "paragraphs": [
        "End the discussion with a decision: what will be funded, clarified, tested or deferred, who owns it and when the team will review the result. Include the response to people’s concerns. If a trial goes ahead, examine the finished work and the effort needed to check it. Ask staff about confidence and workload as well as the output.",
        "For a worker, the useful contribution is a concrete account of what is stuck and what would allow a fair test. For a manager, it is a response that addresses that obstacle. I would judge the adoption plan by whether it enables useful work, rather than by how enthusiastic people sound about AI."
      ]
    }
  ],
  "sources": [
    {
      "title": "European Commission, Flash Eurobarometer 578: Workplace-related drivers and obstacles for adoption of AI and algorithmic management by SMEs and Mid-Caps — full report",
      "url": "https://webgate.ec.europa.eu/ebsm/api/public/deliverable/download?deliverableId=110055&doc=true",
      "date": "October 2026; released 14 October; fieldwork March–April 2026"
    },
    {
      "title": "Sanchez-Moyano, Holmes and Simms, AI Adoption Among Small Businesses: Qualitative Insights from the Small Business Credit Survey — full research brief",
      "url": "https://www.frbsf.org/wp-content/uploads/ai-adoption-among-small-businesses-cdrb202601.pdf",
      "date": "15 July 2026; responses collected September–November 2024"
    }
  ],
  "related": [
    "can-you-use-ai-tool-at-work",
    "ai-training-time-practise-work"
  ]
},

{
  "slug": "how-much-trust-ai-at-work",
  "title": "How Much Should You Trust AI at Work?",
  "description": "Executives report greater trust in AI than workers, even over their own judgement. How can both groups decide when AI output deserves their confidence?",
  "category": "Human Value, Skills and Leadership",
  "type": "Knowledge / Advice",
  "date": "2026-10-22",
  "readTime": "4 min read",
  "profiles": [
    "relationship-workers"
  ],
  "heroImage": {
    "src": "/human-skills-value.webp",
    "alt": "Three colleagues considering a document together around a table",
    "width": 1594,
    "height": 986
  },
  "intro": "How readily do you trust an AI answer? New research from Charter finds a marked difference between executives and workers. Executives report greater trust in AI output, including a greater willingness to put it ahead of their own judgement. That makes trust a leadership question as well as a personal one: what gives you enough confidence to act on an AI result?",
  "sections": [
    {
      "heading": "Executives report much greater trust",
      "paragraphs": [
        [
          "Charter’s ",
          {
            "text": "AI Pulse research summary",
            "href": "https://www.charterworks.com/research/ai-pulse/"
          },
          ", released on 21 October 2026, draws on over 5,000 surveys and 90 interviews with AI users. Compared with workers, executives were:"
        ]
      ],
      "bullets": [
        "2.5 times as likely to trust AI-generated output.",
        "Around twice as likely to favour AI over their own judgement.",
        "More than twice as likely to favour AI over a knowledgeable colleague."
      ]
    },
    {
      "heading": "What earns your confidence?",
      "paragraphs": [
        "The finding about our own judgement deserves attention. AI can help us question a familiar assumption or work through something beyond our experience. Sometimes its answer will be better than the one we would have produced alone. Learning when to rely on it is part of using it well.",
        "A fluent explanation can also make an unfamiliar subject feel settled. If you cannot assess the answer yourself, its confident tone may carry more weight than it deserves. Ask what you can check: the source behind a claim, the calculation behind a figure or the result of trying the proposal on a small scale. Asking the same AI whether it is confident gives you another answer to assess.",
        "The executive–worker gap gives teams a reason to compare those checks. A leader might value a strategic summary while the people handling individual cases notice missing details. A worker might also dismiss a useful proposal because it changes a familiar routine. Bring both views back to the work: what has this AI process actually done well, and where has it needed correction?"
      ]
    },
    {
      "heading": "A convincing account review still needs testing",
      "paragraphs": [
        "As a hypothetical example, imagine a director using an approved AI tool to review customer profitability. It compares revenue with support costs and recommends higher fees for several accounts. The analysis is clear and consistent. The director is tempted to accept its recommendation across the group, even though she would previously have reviewed each renewal separately.",
        "Before changing the fees, she asks an account manager to investigate a few cases. One customer’s high support costs followed a failed billing-system change. The account manager checks the history with the service team and speaks to the customer about what would make renewal worthwhile. She obtains a feasible repair estimate, then uses AI to compare repair-and-renewal with a higher fee.",
        [
          "For ",
          {
            "text": "Relationship Workers",
            "href": "/profiles/relationship-workers/"
          },
          ", the contribution includes understanding the customer’s needs, negotiating a sustainable commitment and following it through. The account manager can use AI to prepare those conversations and assess options. She still needs to establish what the customer will accept and what colleagues can deliver."
        ],
        "The director now has a better basis for deciding how far to rely on the original recommendation. Some fee increases may be justified; the billing problem needs a different response. Her own instinct to retain an account also needs testing against the costs. The team agrees the commitments and reviews support demand, margin and customer feedback after a month."
      ]
    },
    {
      "heading": "Match your reliance to the task",
      "paragraphs": [
        "Trust can grow as you see reliable results on a particular task. Keep the check proportionate to what happens if the answer is wrong."
      ],
      "bullets": [
        "For an editable first draft, use AI within your workplace’s rules and assess whether the result serves its purpose. A useful email draft is evidence about that drafting task; a pricing recommendation needs its own assessment.",
        "For factual or numerical work, check the important claims against original sources or an independent calculation. If you lack the knowledge to assess a consequential answer, involve someone who can or test it before relying on it.",
        "For decisions affecting customers, budgets or colleagues, establish the objective and assumptions before acting. Where possible, start with a limited, reversible step, name the decision owner and agree when to review the result. Include the workload created for people who must carry it out."
      ]
    },
    {
      "heading": "Let leaders and workers learn from the same results",
      "paragraphs": [
        "Managers can make this practical by reviewing one recent AI-assisted task with the people doing the work. Compare the original output, the corrections and what happened after it was used. Include an occasion when AI improved the team’s initial judgement, if you have one. Give people room to explain both confidence and hesitation.",
        "Use that review to agree one change: a better source of information, a check before a customer commitment or a task the tool can now handle with less supervision. Try it over the next month and look for fewer corrections, useful results and a manageable workload. Increase reliance where the evidence supports it; revisit the process where it keeps letting people down.",
        [
          "The ",
          {
            "text": "human skills that support good AI use",
            "href": "/blog/which-human-skills-become-more-valuable/"
          },
          " include framing the question, assessing evidence and working with other people. Those skills help executives and workers explain why they trust an answer, recognise when that trust was misplaced and make better use of the next one."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "Charter, AI Pulse: Fall 2026 research summary",
      "url": "https://www.charterworks.com/research/ai-pulse/",
      "date": "21 October 2026"
    }
  ],
  "related": [
    "which-human-skills-become-more-valuable",
    "when-ai-makes-work-more-complex",
    "ai-agent-workplace-context"
  ]
},

{
  "slug": "anthropic-junior-hiring-ai-entry-level-work",
  "title": "Anthropic’s Junior Hiring Shift: What Happens to the First Job?",
  "description": "As AI reduces demand for beginner tasks, how can less experienced workers respond—and when does hiring and developing junior staff still make business sense?",
  "category": "AI Job News and Current Affairs",
  "type": "News reflection",
  "date": "2026-10-21",
  "readTime": "5 min read",
  "profiles": [
    "digital-builders"
  ],
  "heroImage": {
    "src": "/job-risk-reflection.webp",
    "alt": "A professional holding a notebook and considering two paths",
    "width": 1594,
    "height": 987
  },
  "intro": "If AI can do beginner tasks faster and more cheaply, a business has a reason to hire fewer beginners. Anthropic’s latest employment report brings that pressure into focus. Less experienced people need ways to respond before they have a first role. Employers need to decide whether developing junior staff can produce a better return than relying on AI and experienced people alone.",
  "sections": [
    {
      "heading": "What Anthropic reported on 16 October",
      "paragraphs": [
        [
          "In ",
          {
            "text": "How employment is changing at Anthropic",
            "href": "https://www.anthropic.com/research/employment-at-anthropic"
          },
          ", published on 16 October 2026, the company reports that juniors’ share of its technical hires fell from 27% to 9%. Anthropic also says it tripled in size over the preceding year, with technical hiring continuing to grow in absolute terms."
        ],
        "A falling junior share describes the mix of hiring; the number of junior hires also depends on total recruitment. The report draws on internal records and 17 employee interviews at this rapidly growing AI company. It also describes human attention becoming a constraint as agents produce more work.",
        "My reading is that we need to examine entry routes alongside redundancies. When beginner tasks become cheaper to automate, business growth may create fewer opportunities to gain the experience employers want. That leaves decisions for both people trying to enter work and the organisations deciding whom to hire."
      ]
    },
    {
      "heading": "For less experienced people: build evidence before the first role",
      "paragraphs": [
        "Start by checking how demand is changing in the work you want to enter. Read current vacancies and speak to people doing the hiring where you can. Look beyond the junior label: which results do employers still need, what experience do they ask for, and where could your existing knowledge help? A familiar industry or customer problem may give you a more useful starting point than learning another general AI tool.",
        [
          "Use that evidence in your ",
          {
            "text": "AI-Era SWOT",
            "href": "/framework/#personal-swot"
          },
          ". Fewer traditional junior openings may be a threat. Knowledge from a previous job, study or another part of your life may be a strength. The opportunity is to combine that knowledge with AI to solve a small problem you understand."
        ],
        [
          "You can begin through a ",
          {
            "text": "small independent project",
            "href": "/blog/which-ai-skill-learn-next-role/"
          },
          ". Choose an outcome for someone willing to try it: perhaps making a recurring task easier. Use AI to help build the solution, find out what the person actually needs, and revise it after use. Keep evidence of the result and explain the decisions you made. A generated demonstration on its own gives an employer little reason to choose you over using the same tool."
        ],
        "Set a short-term goal to complete and test one useful outcome within a month, then use it in targeted applications or conversations. Ask for specific feedback on the gap between that evidence and the work an employer needs. If the same experience gap keeps blocking you, consider adjacent paid work where you can build it, including roles outside your original job title.",
        "Fewer openings still mean more competition for each place. Workers can improve what they bring to that competition; employers determine how many entry routes they create."
      ]
    },
    {
      "heading": "For employers: make the investment case explicit",
      "paragraphs": [
        "I would automate a routine task when AI delivers the required result at a lower total cost. The reason to hire a junior must come from what that person can contribute alongside the tool, and what they can become capable of doing as the business develops.",
        "There are two potential returns. In the near term, an AI-assisted junior may take on recurring work that otherwise consumes more expensive colleagues’ time. Over time, they may develop the company knowledge and judgement needed for larger responsibilities. That can reduce dependence on recruiting experienced people whenever the business needs more capacity.",
        "Both returns need scrutiny. Include salary, tools, supervision and corrections in the cost. Count released senior time only where it improves delivery or serves real demand. For the longer-term case, ask which capabilities the business expects to need and how likely it is to retain and develop the person. Compare that with further automation, hiring experienced staff or buying outside support."
      ]
    },
    {
      "heading": "A hiring decision that starts with the work",
      "paragraphs": [
        "Imagine a small software firm deciding whether to stop junior recruitment. In this hypothetical business, AI has made routine coding much faster. Its senior developers still spend substantial time clarifying customers’ requirements, arranging access to their systems and following changes through testing and release. More generated code would leave that work waiting.",
        [
          "The firm considers hiring a junior ",
          {
            "text": "Digital Builder",
            "href": "/profiles/digital-builders/"
          },
          " to take responsibility for a repeatable class of small customer changes, using AI throughout. A senior developer would initially approve the proposed approach and release. The commercial case is that, with training, the junior could handle more of the customer-to-release work and free senior capacity for complex projects the firm already has demand for."
        ],
        "Before committing, the manager examines recent changes: how much work fits that scope, what it costs seniors now, and how much review a beginner would need. If the volume and expected return support a hire, the development plan gradually expands responsibility as the person demonstrates reliable delivery.",
        "The manager then reviews completed customer outcomes, corrections and senior time across the first three months. Supervision may cost more at first. The plan needs a credible path towards less support and greater useful capacity, with time reserved for teaching rather than rushed reviews.",
        "If improved automation can cover the whole workflow more economically, the business case for that particular junior role weakens. The firm should then reassess which future responsibilities still justify developing people, rather than preserve an old role simply because it used to be the entry point."
      ]
    },
    {
      "heading": "Short-term efficiency and future capability belong in the same decision",
      "paragraphs": [
        [
          "The question for employers is what workforce they will need as AI develops, and how they will obtain it. Our article on ",
          {
            "text": "learning when AI writes the answer",
            "href": "/blog/ai-answer-learning-work/"
          },
          " examines the development side. Here, the hiring decision comes first: identify the work and future capability worth investing in, then fund a route into it."
        ],
        "For less experienced people, the corresponding move is to build evidence around those changing needs while keeping alternative routes open. For companies, it is to judge AI adoption and junior development together over a useful business horizon. A saving on this year’s recruitment budget is only part of that calculation."
      ]
    }
  ],
  "sources": [
    {
      "title": "Anthropic, How employment is changing at Anthropic",
      "url": "https://www.anthropic.com/research/employment-at-anthropic",
      "date": "16 October 2026"
    }
  ],
  "related": [
    "ai-answer-learning-work",
    "show-your-value-ai-assisted-developer"
  ]
},

{
  "slug": "ai-job-change-career-progression",
  "title": "AI Has Changed Your Job. Has Your Career Path Kept Up?",
  "description": "New AI responsibilities can change your role before your career path catches up. Ask what the work counts towards, what support you need and when it will be reviewed.",
  "category": "Jobs and Careers in the AI Era",
  "type": "Opinion",
  "date": "2026-10-20",
  "readTime": "5 min read",
  "profiles": [
    "administrative-operators"
  ],
  "heroImage": {
    "src": "/employers-ai-conversation.webp",
    "alt": "Four colleagues discussing their work beside a whiteboard",
    "width": 1594,
    "height": 986
  },
  "intro": "You used to process the requests. Now AI handles many of them, and colleagues come to you when the process needs changing. Your responsibilities have grown, but your development plan still describes the old job. I think that change deserves a career conversation while the new expectations are taking shape.",
  "sections": [
    {
      "heading": "AI can reshape a job that still exists",
      "paragraphs": [
        [
          "Workday’s ",
          {
            "text": "5 October Global Workforce Report",
            "href": "https://newsroom.workday.com/2026-10-05-Workday-Global-Workforce-Report-AI-Is-Rewriting-Jobs-More-Than-Its-Cutting-Them"
          },
          " says most business leaders surveyed did not expect AI to shrink their workforce. Forty per cent expected it to help them get more from existing employees, while 28% expected it to reduce headcount."
        ],
        "That challenges the assumption that adopting AI automatically means cutting jobs. Many of these leaders envisage people staying while the work changes. For a worker, that opens another career question: if AI takes over parts of my job, what will I become responsible for instead?",
        "I think we should pay more attention to that question. A job can retain its title while the contribution it needs from you shifts. Producing an output may take less time; understanding what is needed, improving the process and taking responsibility for the result may become a larger part of the work.",
        [
          "This is the kind of transition the ",
          {
            "text": "ADAPTOR framework",
            "href": "/framework/"
          },
          " helps you plan for. Start with the work you actually do, assess where AI creates threats and opportunities, then choose goals and actions that move you towards a useful contribution. That gives you a basis for shaping the changed role with your manager."
        ]
      ]
    },
    {
      "heading": "When handling requests becomes improving the process",
      "paragraphs": [
        "Imagine an office administrator whose employer introduces an AI assistant for travel requests. In this hypothetical workplace, the assistant checks the written policy and prepares routine bookings. The administrator spends less time entering details and more time resolving requests that need a decision.",
        "One request falls outside the normal travel budget. The assistant correctly sends it for approval. The administrator discovers that a sales director has promised the customer an urgent visit, but nobody has agreed whose budget should cover the extra cost. She gets the responsible managers to settle that question. After similar cases recur, she helps them define an approval rule and checks that the assistant routes new requests to the right person.",
        [
          "For this ",
          {
            "text": "Administrative Operator",
            "href": "/profiles/administrative-operators/"
          },
          ", reliable processing now includes improving the rules behind the workflow. Once the rule is agreed, AI can apply it. Her developing contribution is understanding where the process needs a business decision and helping turn that decision into dependable practice."
        ]
      ]
    },
    {
      "heading": "Turn the change into a development goal",
      "paragraphs": [
        [
          "The administrator can use an ",
          {
            "text": "AI-Era SWOT",
            "href": "/framework/#personal-swot"
          },
          " to work out where she stands. Her job title still fits, but the balance of her work is changing. Looking at both the exposed tasks and the emerging responsibilities makes the choice clearer."
        ]
      ],
      "bullets": [
        "Strength: she understands how travel requests work in practice and knows who can resolve an exception.",
        "Weakness: she has limited experience of testing and maintaining approval rules once they become part of an automated process.",
        "Opportunity: she could develop responsibility for improving the travel workflow as AI handles more routine processing.",
        "Threat: demand for manually processing bookings may fall, leaving less need for that part of her existing role."
      ]
    },
    {
      "paragraphs": [
        "Her short-term goal could be to improve one recurring approval problem over the next three months. She could review recent cases with the managers who own the decisions, agree a clearer rule and test the revised routing. At the review, they would check whether requests reach the right person with fewer delays or corrections.",
        "That connects her SWOT to a goal and concrete action. It also identifies what she needs from her employer: access to the decision-makers, time to test the change and feedback from someone who can assess her work. Completing the task would give her evidence for a conversation about taking on wider process responsibility."
      ]
    },
    {
      "heading": "Agree how the role can develop",
      "paragraphs": [
        [
          "The route forward needs to be visible. In ",
          {
            "text": "ISACA’s 19 October research summary",
            "href": "https://www.isaca.org/resources/news-and-trends/newsletters/atisaca/2026/volume-20/isaca-research-shows-tech-professionals-mostly-satisfied-but-retention-risks-persist"
          },
          ", an unclear upward path was the leading career obstacle, cited by 41% of women and 33% of men in its global survey of 1,025 technology professionals."
        ],
        "A short trial may fit within an existing role. If improving the AI-assisted process becomes a continuing responsibility, I think the development plan should recognise that change. The discussion could lead to a revised role, a route towards another position, or a project that builds the experience needed for it. Pay and title belong in the discussion when the responsibility warrants them.",
        "Before your next development conversation, describe one responsibility that has changed because of AI. Explain what you did before, what you do now and who relies on the result. Use your SWOT to identify the contribution you want to develop, and bring a permitted example of how your involvement improved the work.",
        "Ask: “Do you expect this to be a continuing part of my role? If so, what would doing it well count towards in my development?” Agree the support you need, who can assess the change and a date to review it.",
        "Managers can make the answer useful by naming the criteria for the next level or an adjacent role. Give the person a chance to demonstrate those criteria through the actual AI-assisted work. Check which existing duties can be reduced so the development task has room to succeed.",
        "If there is no internal route, compare the responsibilities you have developed with roles elsewhere and identify what you still need to learn. If the task is temporary, agree when it ends and what feedback you will receive.",
        [
          "If you are still building the skills, ",
          {
            "text": "a small AI-assisted project",
            "href": "/blog/which-ai-skill-learn-next-role/"
          },
          " gives you a starting point. If your work has already shifted, bring a goal and a proposed first action into the conversation. Leave knowing how your employer sees the role developing, and when you will revisit that answer."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "Workday, Global Workforce Report: AI Is Rewriting Jobs More Than It’s Cutting Them",
      "url": "https://newsroom.workday.com/2026-10-05-Workday-Global-Workforce-Report-AI-Is-Rewriting-Jobs-More-Than-Its-Cutting-Them",
      "date": "5 October 2026"
    },
    {
      "title": "ISACA, Tech Professionals Mostly Satisfied, but Retention Risks Persist",
      "url": "https://www.isaca.org/resources/news-and-trends/newsletters/atisaca/2026/volume-20/isaca-research-shows-tech-professionals-mostly-satisfied-but-retention-risks-persist",
      "date": "19 October 2026"
    }
  ],
  "related": [
    "which-ai-skill-learn-next-role",
    "show-your-value-ai-assisted-developer",
    "will-ai-replace-my-job"
  ]
},

{
  "slug": "scaling-ai-agents-at-work",
  "title": "Is Your Workflow Ready for More AI Agents?",
  "description": "Scaling AI agents means coordinating specialised decisions as well as handling more work. Test shared constraints, decision rules and the exceptions people must resolve.",
  "category": "AI and Workplace Change",
  "type": "Coaching",
  "date": "2026-10-19",
  "readTime": "5 min read",
  "profiles": [
    "team-coordinators"
  ],
  "heroImage": {
    "src": "/human-skills-value.webp",
    "alt": "Three colleagues discussing how their work fits together around a table",
    "width": 1594,
    "height": 986
  },
  "intro": "More orders, more customers or more specialised work can make a single AI agent insufficient. Adding agents increases capacity, but their decisions may now affect one another. Before expanding, examine how those decisions will fit together and which trade-offs the organisation has authorised the system to make.",
  "sections": [
    {
      "heading": "What are people carrying as agent use grows?",
      "paragraphs": [
        [
          "In ",
          {
            "text": "research published on 14 October",
            "href": "https://asana.com/inside-asana/ai-agents-flow-of-work-which-agents-you-use"
          },
          ", Asana reported that 46% of surveyed workers using at least two agents weekly estimated that coordinating them took more than 10% of their working time. That included switching tools, managing outputs and resolving conflicting results. Censuswide conducted the September survey among AI-using office workers and leaders in the UK and US, at companies with more than 50 employees."
        ],
        "Only 23% of the surveyed workers said the agents being introduced addressed the tasks and problems they most needed help with. That raises a question worth taking into your own workplace: which part of the work would another agent actually improve?",
        "Choose one workflow where you already use several agents, or are considering adding them. Name the finished result someone needs. Then identify what is currently stopping that result from arriving sooner or working better. Another drafting agent may offer little help if the difficult part is agreeing which recommendation to act on."
      ]
    },
    {
      "heading": "What becomes harder as agents multiply?",
      "paragraphs": [
        "You might add agents to handle more customers, or introduce specialists because purchasing, scheduling and account management need different expertise. As their work becomes more connected, one agent’s decision can change the options available to several others.",
        "Shared context helps them understand the situation. They also need a way to coordinate action: reserve a scarce resource, revise a plan when another agent uses it, and resolve competing objectives. More agents can generate more proposals for the same limited capacity.",
        "A well-designed system can handle much of this automatically. For your chosen workflow, identify which interactions already have agreed rules and which still require someone to decide. Is the remaining human effort routine coordination that could be automated, or a business trade-off the system has no authority to make?"
      ]
    },
    {
      "heading": "An example: specialist agents sharing limited stock",
      "paragraphs": [
        "As a hypothetical example, imagine a wholesaler that initially uses one agent to help process orders. As volume and customer requirements grow, it adds agents for individual accounts and specialists for stock allocation, purchasing and delivery planning.",
        "All use the same live records. Two account agents propose promising the remaining stock to different customers. The purchasing agent finds cheaper replenishment that would arrive after one customer’s deadline. The delivery agent can meet either urgent request using the last available priority slot. These proposals draw on current information, but they cannot all become commitments.",
        "The workflow needs a way to turn those proposals into one feasible plan. Shared reservations can prevent stock or delivery capacity being allocated twice. A coordinating agent can compare options across the specialists and apply agreed priorities, asking them to revise proposals when resources are committed elsewhere.",
        "The operations manager needs to agree which customers or orders take priority when capacity is short, and how much extra cost the system may authorise. Agents can then apply those rules and bring forward exceptions with feasible options. People would have to keep settling the same conflicts if those decisions were left undefined.",
        [
          "For a ",
          {
            "text": "Team Coordinator",
            "href": "/profiles/team-coordinators/"
          },
          " overseeing this workflow, readiness to expand means testing whether the agents can reach a workable shared plan. More account agents could help serve more customers, but their commitments must remain within the stock, capacity and authority available."
        ]
      ]
    },
    {
      "heading": "What would show that your workflow is ready to expand?",
      "paragraphs": [
        "Return to your chosen workflow. With the person responsible for its outcome, pick one interaction to observe over the next five working days, or through the next complete cycle if the work happens less often. Set the review date before you start.",
        "Watch what happens when several agents compete for the same resource or recommend incompatible actions. Can the system resolve the conflict under agreed rules? Which cases reach a person, and what decision is missing? Include coordination effort alongside the quality and usefulness of the completed result.",
        "For the wholesaler, a trial could replay a busy order period in a test environment. Do the agents produce a feasible allocation without overpromising? How many exceptions need a manager’s decision, and are they new trade-offs or repeated gaps in the rules? Those results help the team assess whether it can handle more accounts."
      ]
    },
    {
      "heading": "Use what you find to make one scaling decision",
      "paragraphs": [
        "Which conclusion fits the evidence from your workflow?"
      ],
      "bullets": [
        "The agents reach useful results and resolve routine conflicts reliably. Consider a limited expansion aimed at a specific unmet need. Agree what improvement you expect, then check whether the additional volume or specialisation delivers it.",
        "People repeatedly settle the same conflicts or reconcile incompatible plans. Identify the missing coordination mechanism, priority or authority. Test that change before increasing the number of agents or the work they handle.",
        "You still cannot see where the effort goes. Keep the scope steady for another observed cycle. Name the missing information and who will collect it, then set a date to decide with the workflow owner."
      ]
    },
    {
      "paragraphs": [
        "Managers should involve the people handling exceptions in the expansion decision. Check whether the system brings them clear options and enough time to judge them. Routine coordination may become automated, while a growing stream of unusual cases still puts pressure on the people authorised to decide.",
        [
          "Reliable access to current information is one part of this. ",
          {
            "text": "Give AI Agents the Context They Need to Do the Work",
            "href": "/blog/ai-agent-workplace-context/"
          },
          " explores that foundation. As agent use expands, also test how their decisions fit together under pressure. Leave the review with a specific decision about what to expand or improve, who will own the change and when you will assess the result."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "Asana, AI agents are in the flow of work. Whether you find value depends on which agents you use.",
      "url": "https://asana.com/inside-asana/ai-agents-flow-of-work-which-agents-you-use",
      "date": "14 October 2026"
    }
  ],
  "related": [
    "ai-agent-workplace-context",
    "when-ai-makes-work-more-complex",
    "where-does-ai-saved-time-go"
  ]
},

{
  "slug": "when-ai-goes-wrong-who-can-pause-it",
  "title": "When AI Goes Wrong at Work, Who Can Pause It?",
  "description": "An AI error needs a clear response. Agree who can pause the workflow, help the people affected and decide when it is ready to restart.",
  "category": "AI Policy, Risk and Workplace Culture",
  "type": "Knowledge / Advice",
  "date": "2026-10-16",
  "readTime": "4 min read",
  "profiles": [
    "relationship-workers"
  ],
  "heroImage": {
    "src": "/employers-ai-conversation.webp",
    "alt": "Four colleagues discussing a workplace decision beside a blank whiteboard",
    "width": 1594,
    "height": 986
  },
  "intro": "An AI agent has sent a customer a promise your team cannot keep. You report it, but the system is still sending replies while people work out who should act. Before that happens, agree who can pause the affected workflow, how the work will continue and who can authorise a restart. Those decisions belong in everyday working arrangements.",
  "sections": [
    {
      "heading": "Bring responsibility close to the work",
      "paragraphs": [
        [
          "In an ",
          {
            "text": "IBM survey announced this week",
            "href": "https://newsroom.ibm.com/2026-10-14-ibm-study-eight-in-ten-emea-enterprises-escalate-ai-incidents-to-board-or-c-suite-as-ai-agents-test-governance"
          },
          ", 80% of the 3,221 executives surveyed said an AI-related incident had reached their board or senior leadership in the past year. Censuswide surveyed leaders at organisations with at least 1,000 employees across eight countries in Europe and the Middle East during September 2026."
        ],
        "Almost all respondents said responsibility for AI risk had been assigned at board level. Their answers about who was responsible for adverse outcomes from AI agents were much more divided. A worker dealing with a live problem needs to know who can act during their shift.",
        [
          "The voluntary ",
          {
            "text": "NIST AI Risk Management Framework Playbook",
            "href": "https://airc.nist.gov/airmf-resources/playbook/manage/"
          },
          " offers a useful starting point. It calls for understood responsibilities and mechanisms for disengaging AI systems, alongside plans for response, recovery and communication. In a team, that means agreeing what to do when a specific piece of AI-assisted work becomes unreliable."
        ]
      ]
    },
    {
      "heading": "Define the problem that would trigger a pause",
      "paragraphs": [
        [
          "As a hypothetical example, imagine an AI booking agent sending appointment confirmations before the bookings are complete. A ",
          {
            "text": "Relationship Worker",
            "href": "/profiles/relationship-workers/"
          },
          " in the service team spots the mismatch and contacts the duty manager. The manager can pause automated confirmations while the team checks the affected bookings and handles enquiries."
        ],
        "The trigger is specific: a confirmation sent without a matching booking. A spelling correction in an unsent draft could be handled by its reviewer. An incorrect commitment already sent to a customer needs a response that reaches beyond editing the text.",
        "For your own workflow, name one failure that would justify intervention. Agree who can pause the affected part, who covers their absence and how to reach them. Check that the person has both the authority and the practical means to act."
      ]
    },
    {
      "heading": "Keep helping the people affected",
      "paragraphs": [
        "A pause needs a workable fallback. In the booking example, someone must take responsibility for incoming enquiries and for contacting customers who received incorrect confirmations. Make those responsibilities clear alongside the decision to stop the automated replies.",
        "For any workflow, ask what will happen to work already in progress and who will help the people affected. The person who spots the error may be able to report it without having the access or authority to resolve it. Give them a clear route to someone who can.",
        "Managers also need to check whether the fallback is manageable. If it creates rushed replies or a growing backlog, adjust capacity or the service promise while the problem is being resolved."
      ]
    },
    {
      "heading": "Agree what has to happen before restarting",
      "paragraphs": [
        "Name the person who can authorise a restart and agree what evidence they need. In the booking example, the team would need to see that confirmations now match completed bookings. They would also need a way to catch another mismatch after restarting.",
        "Check the revised workflow under the conditions that caused the problem, including relevant exceptions. A changed prompt or a supplier saying the issue is fixed gives you something to test. The restart decision should depend on the result.",
        "A limited restart with an early review may be appropriate. Agree who will monitor it, when they will review the results and what would trigger another pause. That keeps responsibility clear as the workflow returns to use."
      ]
    },
    {
      "heading": "Walk through one failure before it happens",
      "paragraphs": [
        "Choose one AI workflow your team already uses. Take a plausible failure into a short discussion with its owner and someone who handles the work. Agree the following in the procedure people actually consult."
      ],
      "bullets": [
        "Trigger and authority: what would justify a pause, who can apply it and who covers their absence?",
        "Continuity and recovery: how will work continue, who will identify affected people and who can approve a remedy?",
        "Restart and review: what evidence is needed, who decides and when will the team check the result?"
      ]
    },
    {
      "paragraphs": [
        "Try the procedure with a fictional case, without changing a live system. Ask each participant to explain their first action. If the response stalls at “ask IT” or “tell the manager”, identify the actual contact and the decision they can make. Rehearse the revised route and check whether people can reach the fallback without leaving work unattended.",
        [
          "If you are still deciding whether a tool is suitable for the task, start with ",
          {
            "text": "Can You Use That AI Tool at Work?",
            "href": "/blog/can-you-use-ai-tool-at-work/"
          },
          ". For a workflow already in use, the next useful step is to make the pause and recovery route clear enough that the person who spots a problem can set it in motion."
        ]
      ]
    }
  ],
  "related": [
    "can-you-use-ai-tool-at-work",
    "how-employers-should-talk-about-ai",
    "staff-challenge-ai-decisions-work"
  ],
  "sources": [
    {
      "title": "IBM, Eight in Ten EMEA Enterprises Escalate AI Incidents to Board or C-Suite as AI Agents Test Governance",
      "url": "https://newsroom.ibm.com/2026-10-14-ibm-study-eight-in-ten-emea-enterprises-escalate-ai-incidents-to-board-or-c-suite-as-ai-agents-test-governance",
      "date": "15 October 2026 announcement; page dated 14 October"
    },
    {
      "title": "NIST, AI Risk Management Framework Playbook — Manage 2.4 and Manage 4",
      "url": "https://airc.nist.gov/airmf-resources/playbook/manage/",
      "date": "accessed 16 October 2026"
    }
  ]
},

{
  "slug": "ai-answer-learning-work",
  "title": "AI Can Write the Answer. Who Is Learning the Work?",
  "description": "When AI produces a polished first answer, how do people build judgement? A practical case for leaders to make reasoning and learning visible at work.",
  "category": "Human Value, Skills and Leadership",
  "type": "Opinion",
  "date": "2026-10-15",
  "readTime": "5 min read",
  "intro": "I think leaders should judge AI-assisted development by what people can explain and decide, alongside what they deliver. A new colleague can produce a polished recommendation while still being unsure which facts would change it. If we accept the document and move straight to the next task, we may miss the chance to develop their judgement.",
  "profiles": [
    "professional-advisors"
  ],
  "heroImage": {
    "src": "/human-skills-value.webp",
    "alt": "Three colleagues discussing a document around a table, with a laptop and notes in front of them",
    "width": 1594,
    "height": 986
  },
  "sections": [
    {
      "heading": "A finished answer can hide an unfinished understanding",
      "paragraphs": [
        "AI can give someone a useful structure, compare options and explain unfamiliar material. That is valuable when they are learning a role. The difficulty comes when the finished output makes it hard to see which parts they understand and which parts they have accepted on trust.",
        [
          "The Conference Board’s ",
          {
            "text": "12 October report on leadership in an AI-enabled workplace",
            "href": "https://www.conference-board.org/publications/leadership-disrupted-preparing-for-an-AI-enabled-workplace"
          },
          " draws on international survey findings and interviews with organisational leaders. Its public summary calls for work-based development and deliberate points where people assess AI-assisted work. I would use those moments to develop the person doing the work as well as review the result."
        ],
        [
          "This question starts early in a career. The World Economic Forum’s ",
          {
            "text": "June 2026 report with PwC",
            "href": "https://www.weforum.org/publications/artificial-intelligence-and-the-future-of-entry-level-work-a-framework-for-safeguarding-and-reinventing-early-career-pathways/"
          },
          " puts job design and talent pipelines among its priorities for entry-level work. If AI changes the tasks newcomers do, leaders need to consider how those people will gain experience."
        ],
        "Simply keeping every old drafting task would be a poor answer. I would keep the responsibility to investigate, recommend and learn from the consequences, while using AI to support the work."
      ]
    },
    {
      "heading": "Let the learner investigate the assumption",
      "paragraphs": [
        "As a hypothetical example, imagine Maya, a junior business consultant helping a client choose a supplier for a seasonal product launch. Using an approved AI tool and supplier information cleared for that use, she prepares a comparison. The draft recommends the cheaper supplier, whose quoted delivery time fits the launch date.",
        "Her senior colleague asks: “What would have to be true for you to recommend the other supplier?” Maya points to cost and delivery time, but cannot yet explain how much uncertainty the client could accept. Instead of rewriting the recommendation, her colleague asks her to find out.",
        "Maya speaks to the client’s operations lead and checks the offers with the suppliers. The launch date is fixed because the client has already booked a promotion. The cheaper supplier has quoted a normal lead time without reserving production capacity; the other offer includes a reserved slot. The client agrees that securing the date justifies the higher price.",
        "Maya adds that context to the AI-assisted comparison and tests how the recommendation changes. She then explains the trade-off to her senior colleague, who reviews the advice before it goes to the client. The revised recommendation makes the capacity commitment explicit, and the client confirms the booking with the chosen supplier.",
        [
          "This is ",
          {
            "text": "Professional Advisor",
            "href": "/profiles/professional-advisors/"
          },
          " work: understanding a client’s circumstances, weighing consequences and helping them act. Maya learns why the apparently cheaper answer was incomplete. AI could also compare the capacity commitments once supplied with that information. Her development comes from finding the missing context and taking part in the decision."
        ],
        "If the senior colleague had silently corrected the draft, the client might have received the same advice. Maya would have had much less opportunity to learn how to reach it."
      ]
    },
    {
      "heading": "Check what carries into the next piece of work",
      "paragraphs": [
        "Explaining a correction immediately afterwards is a start. I would also look for what the person notices in a new situation.",
        "On Maya’s next supplier comparison, the client has a flexible launch date and a tight budget. Repeating “choose the reserved slot” would miss the point. A useful sign of progress is that she checks the client’s priorities, investigates the relevant uncertainty and explains when paying more is worthwhile. She can still use AI throughout that work.",
        "For someone learning a role, a practical request is: “On the next task, could we review my recommendation and the assumption most likely to change it?” Bring your own view to that conversation. Use AI to explore alternatives, then explain which evidence led you to your choice."
      ]
    },
    {
      "heading": "Allow time to improve the workflow",
      "paragraphs": [
        "Even when AI produces a draft faster, leaders should not immediately turn the time saved into higher output targets. This is especially important early in adoption, while people are learning how to use the tool and judge its results.",
        "People need time to review and correct AI output, understand where it helps, and improve the flow of work around it. For Maya, investigating the missing context and discussing why the recommendation changed are part of making AI useful and developing her judgement.",
        [
          "The earlier article on ",
          {
            "text": "time to practise with AI at work",
            "href": "/blog/ai-training-time-practise-work/"
          },
          " explores how to make room for learning. As the workflow improves, leaders can make a better judgement about what extra output is realistic."
        ]
      ]
    },
    {
      "heading": "Use AI to strengthen the learning",
      "paragraphs": [
        "AI itself can explain a recommendation, challenge an assumption or act as a tutor. I would encourage that. A learner could ask it to propose a different conclusion and identify the evidence that would support it.",
        "The useful check comes when the facts change. Can the person recognise the change, investigate it and adapt the advice? If AI-supported learning produces that ability with less senior review, I would reduce the review time. A fluent explanation of the original answer alone would leave me wanting to see the next case.",
        [
          "If you are reviewing your own development, the ",
          {
            "text": "ADAPTOR framework",
            "href": "/framework/"
          },
          " can help turn a specific gap into a goal and action. “I need to learn AI” is broad. “I need to investigate the assumptions behind an AI-assisted recommendation and defend my choice” gives you something to practise in your next piece of work."
        ],
        "For the next AI-assisted assignment you give or receive, agree what the learner should be able to explain or decide afterwards. Then return to it when the next case arrives. The finished document is useful; growing the person’s ability to handle the work is worth planning for too."
      ]
    }
  ],
  "related": [
    "ai-training-time-practise-work",
    "which-human-skills-become-more-valuable",
    "ai-professional-advice-client-value"
  ],
  "sources": [
    {
      "title": "The Conference Board, Leadership Disrupted: Preparing for an AI-Enabled Workplace — public summary",
      "url": "https://www.conference-board.org/publications/leadership-disrupted-preparing-for-an-AI-enabled-workplace",
      "date": "12 October 2026"
    },
    {
      "title": "World Economic Forum and PwC, Artificial Intelligence and the Future of Entry-Level Work",
      "url": "https://www.weforum.org/publications/artificial-intelligence-and-the-future-of-entry-level-work-a-framework-for-safeguarding-and-reinventing-early-career-pathways/",
      "date": "22 June 2026"
    }
  ]
},

{
  "slug": "hubspot-job-cuts-ai-strategy-work",
  "title": "HubSpot’s Job Cuts: When a New Strategy Removes Your Role",
  "description": "An AI business strategy can make a role redundant. A fictional HubSpot example shows how to assess the risk early and use ADAPTOR to plan your next move.",
  "category": "AI Job News and Current Affairs",
  "type": "News reflection",
  "date": "2026-10-14",
  "readTime": "6 min read",
  "profiles": [
    "team-coordinators"
  ],
  "heroImage": {
    "src": "/microsoft-workforce-news.webp",
    "alt": "Two colleagues discussing a piece of work across a table, with a blank page between them",
    "width": 1594,
    "height": 987
  },
  "intro": [
    "On 6 October 2026, HubSpot ",
    {
      "text": "announced plans to cut about 7% of its workforce",
      "href": "https://www.hubspot.com/company-news/company-update"
    },
    ", affecting nearly 660 people. It connects the change to a strategy built around delivering customer outcomes with AI. I think the important question for workers is whether their role still has a place in the business being built. A strategy can remove the need for a whole function, even when AI has not taken over every task within it."
  ],
  "sections": [
    {
      "heading": "What HubSpot announced",
      "paragraphs": [
        "In her message to staff, chief executive Yamini Rangan described a shift from providing software that helps customers grow to delivering outcomes for them with AI. The company plans to organise product teams around customer outcomes, reduce management layers and give teams clearer ownership.",
        "Rangan said the cuts were not driven by AI-related efficiency gains. Her stated reason was to align the organisation with its strategy. That distinction changes how I read the announcement: the company is describing a redesign of the business and its roles.",
        [
          "HubSpot’s ",
          {
            "text": "SEC filing",
            "href": "https://www.sec.gov/Archives/edgar/data/1404655/000119312526414965/d183135d8k.htm"
          },
          " records that the board authorised the plan on 1 October. It expects the role eliminations to be substantially complete by the end of the first quarter of 2027, subject to local law and consultation requirements. The announcement describes a process still being carried out."
        ]
      ]
    },
    {
      "heading": "My reading: a role can lose its purpose in the new business",
      "paragraphs": [
        "Much of the discussion about AI and jobs starts with a task: can AI write this report, answer this query or build this feature? A change in business strategy can reach further. The company may stop providing a service, reorganise how it delivers work or remove a layer that existed to connect separate departments.",
        "In those circumstances, becoming faster at the old tasks may do little to protect the role. The employer has changed the work it wants to organise and pay for. That is why I would pay attention to company strategy alongside learning how to use AI.",
        "The response depends on timing. Before a restructure, you may have room to investigate where your work is heading and prepare alternatives. Once the business has decided to close your function, the priority may be finding your next role."
      ]
    },
    {
      "heading": "An imaginary role inside HubSpot",
      "paragraphs": [
        "For a fictional example inside HubSpot, imagine Sam, a cross-Hub coordination manager. His post exists to manage handoffs between separately owned product Hubs. He negotiates release priorities, gets decisions from different managers and keeps changes moving across those boundaries.",
        "Now imagine that the new organisation brings the relevant work into one team responsible for a customer outcome. That team owns its decisions and delivery. The separate coordination function closes, and Sam’s post is removed from the structure.",
        "Sam might have performed well. His role disappears because the organisational arrangement that required it has gone. Retraining him to carry out the same handoffs more efficiently would leave that problem unchanged."
      ]
    },
    {
      "heading": "Before the announcement: assess where your role fits",
      "paragraphs": [
        "Earlier in this imagined sequence, Sam notices that leaders increasingly discuss AI-delivered outcomes and teams with responsibility for the whole customer journey. He asks what those plans would mean for a post built around coordinating separate Hubs. He also looks at which responsibilities are already moving into the teams.",
        [
          "The ",
          {
            "text": "ADAPTOR framework",
            "href": "/framework/"
          },
          " gives him a way to work through that question. His primary Work Profile is ",
          {
            "text": "Team Coordinator",
            "href": "/profiles/team-coordinators/"
          },
          ": the valuable part of his work is resolving priorities and delivery conflicts. He then builds a personal AI-Era SWOT:"
        ]
      ],
      "bullets": [
        "Strength: He can bring people with competing priorities to a workable delivery decision. He has examples of commitments kept and delays avoided.",
        "Weakness: His current role depends heavily on the company’s existing product boundaries. He has limited experience owning delivery within a single team.",
        "Threat: Teams that own the whole customer outcome could absorb the decisions and handoffs his separate function exists to manage.",
        "Opportunity: His coordination experience could be useful in delivery roles elsewhere, provided he can demonstrate the responsibilities those employers need."
      ]
    },
    {
      "heading": "Turn that assessment into options while you have time",
      "paragraphs": [
        "Sam sets a short-term goal: within a month, identify two realistic routes into delivery work beyond his current coordination function. He compares a few current vacancies with his experience and notes the responsibilities he has yet to demonstrate.",
        "He prepares two examples of resolving a difficult delivery conflict, using information he is entitled to share. He speaks to people doing the work he is considering. If a suitable opportunity exists in his company, he explores it; he also looks externally. These actions help him test where his experience meets demand before he needs an immediate move.",
        "His longer-term goal might be to own delivery within a product team. That would require practice in the gaps he identified, such as setting priorities and following a result through. The sequence is Profile → Personal SWOT → Goals → Action. The strategy gives him a reason to start that work now."
      ]
    },
    {
      "heading": "After the announcement: focus on the next role",
      "paragraphs": [
        "In this fictional case, Sam is then told that his coordination function is closing and his role is being eliminated. He checks the scope, timetable and transition support available. With the closure confirmed, he turns his effort towards moving on quickly.",
        "His earlier preparation now has a practical use. He updates his CV around the delivery problems he has helped resolve and begins applying to suitable openings. He checks internal alternatives if they are available, while pursuing external ones in parallel. He uses career-transition support to review his target roles and applications.",
        "He also updates his SWOT: the threat he was watching has become an immediate change in his circumstances. His short-term goal is now securing suitable paid work. That may mean an adjacent role he can do well today while he develops towards broader delivery responsibility.",
        "For Sam, another course on AI prompting would not restore the closed function. His AI learning needs to serve the work he is moving towards. He might practise using an approved tool to analyse delivery dependencies, then show how he checks the result and uses it to support a decision.",
        "ADAPTOR cannot protect Sam’s original role when the business no longer needs that function. By starting earlier, he has explored his options and prepared evidence of what he can offer. He faces the transition with more confidence and a clearer next step."
      ]
    },
    {
      "heading": "Check the strategy before deciding your next action",
      "paragraphs": [
        "Look at where your employer or clients are investing, which services they are changing and how they want work delivered. Ask whether your function still has a purpose in that direction. Then choose an action that fits what you know: investigate an uncertain change, build alternatives while time allows or begin a transition when your role is being removed.",
        "Managers can help by explaining which functions are expected to continue, change or close, and when staff will know more. Where roles are going, give people clear information about available options and practical support for their next move. A general invitation to “learn AI” leaves the central employment question unanswered.",
        [
          "If you need help examining the evidence in your own situation, ",
          {
            "text": "Will AI Replace My Job?",
            "href": "/blog/will-ai-replace-my-job/"
          },
          " offers a starting point. Use what you learn to decide where to put your effort. The plan you need before an announcement may be very different from the one you need afterwards."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "HubSpot, A message from our CEO: Important HubSpot team and business changes",
      "url": "https://www.hubspot.com/company-news/company-update",
      "date": "6 October 2026"
    },
    {
      "title": "HubSpot, Form 8-K: restructuring plan and employee update",
      "url": "https://www.sec.gov/Archives/edgar/data/1404655/000119312526414965/d183135d8k.htm",
      "date": "Filed 6 October 2026; board approval 1 October 2026"
    }
  ],
  "related": [
    "microsoft-2026-job-cuts-ai-question",
    "will-ai-replace-my-job"
  ]
},

{
  "slug": "which-ai-skill-learn-next-role",
  "title": "Which AI Skill Should You Learn for Your Next Role?",
  "description": "Choose an AI skill by making something useful: a side-hustle deliverable or a solution to a personal problem. Use the project to decide what to learn next.",
  "category": "Jobs and Careers in the AI Era",
  "type": "Coaching",
  "date": "2026-10-13",
  "readTime": "5 min read",
  "profiles": [
    "output-creators"
  ],
  "heroImage": {
    "src": "/job-risk-reflection.webp",
    "alt": "A professional holding a notebook and considering two paths",
    "width": 1594,
    "height": 987
  },
  "intro": "A job advert asks for “AI skills”, but gives you little detail about what that means. You could spend weeks comparing courses and still be unsure where to start. Try making something useful for a side hustle or solving a personal problem that involves similar work. A finished result will show you what you can do with AI and where you need more practice.",
  "sections": [
    {
      "heading": "AI skills build on the work you want to do",
      "paragraphs": [
        [
          "Revelio Labs’ ",
          {
            "text": "September US labour-market tracker",
            "href": "https://www.reveliolabs.com/ai-labor-market-tracker/us/september-2026"
          },
          ", released on 1 October 2026, groups around 80 skills under its AI-skilled classification. These range from using ChatGPT to working with machine learning frameworks and infrastructure. Those capabilities involve different learning paths."
        ],
        [
          "CompTIA’s ",
          {
            "text": "2 October analysis of US job postings",
            "href": "https://www.prnewswire.com/news-releases/employer-demand-for-tech-talent-reaches-three-year-high-comptia-analysis-finds-302897245.html"
          },
          " counted 349,821 active postings requiring AI-related skills in September, and also reported on a job-title category for dedicated AI and machine learning occupations. An AI requirement sits within a role’s wider responsibilities. AI-assisted graphic design still calls for design ability; AI-assisted software development still calls for programming and system understanding."
        ],
        "Look first at the kind of work you want to do. Then consider how AI could help you produce a useful result in that field."
      ]
    },
    {
      "heading": "Choose something useful to make",
      "paragraphs": [
        "Job descriptions can give you a direction even when they say little about AI. A content role might involve product pages and campaign materials. An analyst role might involve comparing options and explaining a recommendation. Use those ordinary responsibilities to choose a project you can do yourself.",
        "A side hustle gives you a reason to finish: you need a product listing, a customer FAQ or a way to keep track of orders. A personal problem works too. You might compare holiday options within a budget or build a small tool that organises information you keep losing.",
        "Choose a project close enough to the work you want to practise. Comparing holidays can help you learn to organise evidence and check an AI-assisted recommendation. If your aim is to develop AI-assisted design skills, a poster for an event you are organising would be a better starting point.",
        "Name the finished thing before choosing the tool. Keep the first version small enough to complete over a weekend. For an event, that might be one page explaining the offer and how to book."
      ]
    },
    {
      "heading": "A side project makes the skill concrete",
      "paragraphs": [
        "As a hypothetical example, imagine a marketing assistant who wants to move into a content role. She also runs occasional weekend drawing workshops. For her next workshop, she decides to make an event page, a short FAQ and two social posts using AI assistance.",
        "She gathers the facts she already controls: who the workshop is for, what participants will try, the materials provided and the booking details. She gives an AI tool that brief and asks for two ways to present the event. One draft leads with the picture people will take home; the other emphasises the techniques they can try. Her workshop is about experimenting, and people arrive with different levels of experience. She chooses the second approach and asks the tool to develop it into a complete page.",
        "She edits the page into her own voice and checks the dates, price and booking link. She then uses the finished page to generate the FAQ and posts, checking that they describe the same offer. If someone asks whether beginners are welcome, she can use that question to improve the page.",
        [
          "For an ",
          {
            "text": "Output Creator",
            "href": "/profiles/output-creators/"
          },
          ", this project develops several connected skills: briefing AI, choosing between drafts, editing for an audience and keeping related materials consistent. She finishes with content she can use for her own event. She can also see which part took the most effort and decide what to practise next."
        ]
      ]
    },
    {
      "heading": "Let the difficult part guide your learning",
      "paragraphs": [
        "As you work, notice where you get stuck. That gives you a more specific reason to choose a tutorial, a short course or another practice task."
      ],
      "bullets": [
        "If the tool is unfamiliar, learn the feature you need for the next step. Follow a short tutorial and try it on your own project while it is fresh.",
        "If the outputs are fluent but unhelpful, revisit the brief. Explain who will use the result, what they need to decide and which facts matter. Compare the next version with the first.",
        "If you struggle to judge the result, practise the underlying craft. For a poster, compare layout and readability with good examples. For an analysis, check the sources and work through the recommendation yourself.",
        "If the project is becoming too large, finish one useful part. A clear product listing or a working order tracker gives you something to build on. If the AI tool keeps creating more work than it saves, try a simpler approach to that part."
      ]
    },
    {
      "heading": "Review your work and show what you can do",
      "paragraphs": [
        "Review the output, identify what needs improving and try again. Use each attempt to become more proficient with the tools and better at judging the result.",
        "A side project can also provide concrete evidence for your CV and interviews. Describe what you made and how you used AI. In an interview, show the finished work and explain your choices and checks. The workshop page, FAQ and posts give the marketing assistant something specific to discuss beyond saying she has “AI skills”.",
        "Managers can offer a similar opportunity at work by giving people a small, useful task and room to improve it. A worker preparing for a move can start with a project outside work, using information and materials they are free to use.",
        [
          "Pick something you have been meaning to make or fix, and finish a first version this weekend. If you are working through the ",
          {
            "text": "ADAPTOR framework",
            "href": "/framework/"
          },
          ", make that your next action. The experience will give you a concrete basis for deciding which AI skill to develop next."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "Revelio Labs, AI Labor Market Tracker: September 2026 (US)",
      "url": "https://www.reveliolabs.com/ai-labor-market-tracker/us/september-2026",
      "date": "1 October 2026"
    },
    {
      "title": "CompTIA, Employer demand for tech talent reaches three-year high",
      "url": "https://www.prnewswire.com/news-releases/employer-demand-for-tech-talent-reaches-three-year-high-comptia-analysis-finds-302897245.html",
      "date": "2 October 2026"
    }
  ],
  "related": [
    "ai-training-time-practise-work",
    "show-your-value-ai-assisted-developer"
  ]
},

{
  "slug": "ai-agent-workplace-context",
  "title": "Give AI Agents the Context They Need to Do the Work",
  "description": "AI agents can perform better with relevant, current information. See how to improve a recurring workflow and test whether the agent picks up later changes.",
  "category": "AI and Workplace Change",
  "type": "Knowledge / Advice",
  "date": "2026-10-12",
  "readTime": "5 min read",
  "profiles": [
    "administrative-operators"
  ],
  "heroImage": {
    "src": "/everyday-work-audit.webp",
    "alt": "A professional mapping a work process on paper beside a laptop",
    "width": 1594,
    "height": 986
  },
  "intro": "An AI agent needs a useful picture of the work to produce a useful result. That means relevant information at the start and a way to retrieve later changes. Before delegating a recurring task, decide which sources it should use and how it will keep its context current.",
  "sections": [
    {
      "heading": "Make the relevant information easy to find",
      "paragraphs": [
        [
          "An AI agent can work through several steps using connected tools. But access to a large workspace still leaves it with the job of finding the information that matters. A recent ",
          {
            "text": "WorkWorlds preprint",
            "href": "https://arxiv.org/html/2609.23806v2"
          },
          ", revised on 23 September 2026, explored that difference."
        ],
        "Researchers tested agents on eight assignments in a simulated pharmaceutical company. Across 192 matched evaluations, selecting relevant files for the agents improved both their access to evidence and their performance compared with asking them to search the full workspace visible to an employee. Much of the difference arose before they reached enough evidence to do the task.",
        "For a recurring workplace task, a useful starting point is to identify the sources it depends on. Include the requirements and decisions behind the task, as well as the document that triggered it. Then consider where those facts may change between runs."
      ]
    },
    {
      "heading": "Start small and keep access focused",
      "paragraphs": [
        [
          "Adding everything can create a different problem. Unrelated records may lead the agent to use information that does not belong in the task. ",
          {
            "text": "Anthropic’s guidance on context",
            "href": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
          },
          " recommends keeping it focused and expanding it in response to what testing reveals. Start with the sources you expect the task to need, observe the output and add information when a specific gap appears."
        ],
        [
          "Keep permissions equally focused. Access to information and permission to act are separate decisions. An agent preparing a reminder may need to read a record, while sending the message or changing a booking requires additional authority. ",
          {
            "text": "OWASP’s guidance on excessive agency",
            "href": "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/"
          },
          " recommends limiting tools and permissions to the task, so an error cannot easily become an action you never intended to authorise."
        ],
        "For an initial trial, allow the agent to read the selected sources and prepare drafts. Check whether it uses relevant information and stays within that task. Add context where it improves the result, and assess any request for wider action permissions separately."
      ]
    },
    {
      "heading": "Improve the context, then repeat the same task",
      "paragraphs": [
        "As a hypothetical example, imagine an operations assistant setting up an approved agent to prepare supplier-visit reminders. Initially, it receives only the meeting notes, which propose a Friday visit. It drafts a Friday reminder. A separate site-readiness record says the visit must wait for a repair to be signed off, so that reminder would be premature.",
        "The assistant improves the workflow by giving the agent approved read access to the current site-readiness record and relevant supplier messages in the shared mailbox, alongside the meeting notes. The instructions tell it to retrieve these sources before each draft, check the visit’s dependencies and show which records support its proposed date. If they conflict, it should flag the issue for a decision. It can prepare drafts, but it has no permission to send messages or change bookings.",
        "Given the same request, the agent now finds the outstanding repair and drafts a message saying that the visit is on hold. The assistant checks this against the site record. The result improves because the agent has the relevant context available when doing the work.",
        "Later, the site lead records the repair sign-off and the supplier confirms a Wednesday visit in the shared mailbox. On the next run, the agent retrieves the updated sources and drafts the Wednesday reminder, with the confirmation linked. This time, the assistant does not have to spot the email and feed the change into the agent manually.",
        [
          "For ",
          {
            "text": "Administrative Operators",
            "href": "/profiles/administrative-operators/"
          },
          ", designing this flow builds on knowing which records people rely on and where decisions are made. That knowledge helps an agent prepare accurate follow-ups repeatedly. The team also needs to record changes in the agreed sources: a decision left in a private conversation will remain outside this workflow."
        ]
      ]
    },
    {
      "heading": "Set up one reliable route to current context",
      "paragraphs": [
        "Apply the same approach to one small task your workplace permits AI to perform. Work with the person responsible for the process to agree:"
      ],
      "bullets": [
        "Which sources belong in the context. Begin with the records that define the task, its requirements and current decisions. Limit access to what the task needs, and add sources when the output reveals a relevant gap.",
        "How changes reach it. Name where updates will be recorded and when the agent should retrieve them. A recurring draft should use current records each time it runs.",
        "What happens when information is missing or conflicts. Have the agent flag the gap for someone who can decide, before proceeding."
      ]
    },
    {
      "heading": "Test whether the revised flow works",
      "paragraphs": [
        "Use a few completed cases whose correct outcomes you know. Keep the request the same and compare the result with the original context and the improved context. Check whether the agent uses the relevant requirement or decision and produces a more accurate, usable draft.",
        "Then test a later change in a safe trial: update an agreed source and run the task again without telling the agent the answer. Can it retrieve the change and apply it? In the supplier example, the check is whether the next reminder reflects the newly confirmed date.",
        "If it misses the update, establish whether the source was inaccessible, the retrieval step was skipped or the information was misunderstood. Fix that part of the workflow and repeat the test. Managers should also check the effort needed to maintain the sources and review drafts before increasing the volume of work.",
        [
          "The ",
          {
            "text": "Conference Board’s September report on work redesign",
            "href": "https://www.conference-board.org/publications/framework-for-agentic-AI-and-work-redesign"
          },
          " recommends providing the data, permissions and quality checks that agents need. Start small, inspect the output and expand the context only where it improves the result. If you need to choose a task first, the ",
          {
            "text": "20-minute task audit",
            "href": "/blog/how-ai-is-changing-everyday-work/"
          },
          " offers a starting point."
        ]
      ]
    }
  ],
  "sources": [
    {
      "title": "Hua and Lian, WorkWorlds: An Infrastructure for Evaluating AI Agents on Workplace Tasks (preprint, version 2)",
      "url": "https://arxiv.org/html/2609.23806v2",
      "date": "23 September 2026"
    },
    {
      "title": "The Conference Board, A Framework for Agentic AI and Work Redesign",
      "url": "https://www.conference-board.org/publications/framework-for-agentic-AI-and-work-redesign",
      "date": "24 September 2026"
    },
    {
      "title": "Anthropic, Effective context engineering for AI agents",
      "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
      "date": "29 September 2025"
    },
    {
      "title": "OWASP, LLM06:2025 Excessive Agency",
      "url": "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/",
      "date": "2025 guidance; checked 12 October 2026"
    }
  ],
  "related": [
    "how-ai-is-changing-everyday-work",
    "when-ai-makes-work-more-complex",
    "where-does-ai-saved-time-go"
  ]
},

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
