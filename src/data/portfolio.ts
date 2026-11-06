// All site content lives here. Edit this file to update the portfolio.

export type Project = {
  id: string;
  name: string;
  subtitle?: string;
  // Your part of the work, for projects built with other people.
  role?: string;
  sector: string;
  status: "live" | "private";
  url?: string;
  urlLabel?: string;
  // One line shown on the home page board.
  hook: string;
  // Real-world usage, shown on the board and the project page.
  reach?: string;
  award?: { title: string; event: string; detail: string; href: string };
  summary: string;
  problem: string;
  thinking: { title: string; why: string }[];
  // "What I built" is for your own contribution, "The product" describes the product itself.
  pointsLabel: "What I built" | "The product";
  points: string[];
  tags: string[];
  image: { src: string; alt: string };
};

export const profile = {
  name: "Rahul Mittal",
  role: "Senior Full Stack AI Engineer",
  location: "Chandigarh, India",
  photo: { src: "/rahul-mittal.webp", alt: "Portrait of Rahul Mittal" },
  email: "rahulmittal.768@gmail.com",
  // Add entries such as { label: "LinkedIn", href: "https://..." } to show them under Contact.
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rahul-mittal-750a141a9/" },
    { label: "GitHub", href: "https://github.com/rahulml768" },
  ] as { label: string; href: string }[],
  // Drop a PDF into public/ and set this to "/your-file.pdf" to show a resume button.
  resumeUrl: "",
  headline: "Software that real operations run on.",
  intro:
    "I'm a senior full stack AI engineer. I've built ERP modules, healthcare compliance platforms and AI products like Canvas Client, Agentra and Agent 69.",
  facts: [
    { label: "Now", value: "Nucleo Analytics, Product team" },
    { label: "Core stack", value: "React, Next.js, Node.js, Python, RAG, LangChain" },
    { label: "Focus", value: "AI engineering, microservices, system design" },
    { label: "Recognition", value: "Community Award, 0G APAC Hackathon" },
  ],
};

const emailSubject = "Opportunity for Rahul Mittal";
const emailBody = `Hi Rahul,

I came across your portfolio and was impressed by your work in full stack development and AI engineering, especially products like Canvas Client and Agentra.

We are looking for someone with your experience, and I would like to discuss an opportunity with you.

Company:
Role or project:
AI or engineering focus:
Location or remote:
A good time to talk:

Looking forward to hearing from you.

Best regards,
`;

// Opens Gmail in the browser, because mailto links do nothing without a mail app installed.
export function gmailCompose(subject: string, body: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const emailHref = gmailCompose(emailSubject, emailBody);

export const metrics = [
  {
    value: "40%",
    label: "Faster server response time",
    detail: "Query and server-side tuning at Onfinity, which also cut backend processing time by 30%",
  },
  {
    value: "4",
    label: "ERP modules built from scratch",
    detail: "Used across multiple countries, including Kuwait and Oman",
  },
  {
    value: "1,000+",
    label: "Users on Canvas Client",
    detail: "Fixed latency issues across the platform at Nucleo Analytics",
  },
];

export const projects: Project[] = [
  {
    id: "canvas-client",
    name: "Canvas Client",
    subtitle: "Built at Nucleo Analytics",
    role: "I built the entire platform.",
    sector: "Agency project management",
    status: "live",
    url: "https://canvasclient.com/",
    urlLabel: "canvasclient.com",
    hook: "Project management built for agencies: win the lead, run the work, send the invoice.",
    reach: "1,000+ users",
    summary:
      "Project management built for agencies, with tasks, clients, team chat and reporting in one workspace, from the first lead to the final invoice.",
    problem:
      "Agencies run on separate tools that aren't integrated with each other, so tasks, client records, chat and reports end up scattered and nobody sees the whole picture.",
    thinking: [
      {
        title: "One integrated platform",
        why: "Instead of connecting more tools together, Canvas Client puts everything in one platform, so tasks, conversations and reporting stay attached to the same client.",
      },
      {
        title: "AI does the setup, not the judgement",
        why: "AI breaks a project into subtasks, dates and owners, so a team starts from a plan instead of an empty board.",
      },
    ],
    pointsLabel: "What I built",
    points: [
      "AI task creation that generates subtasks, due dates and owner assignments.",
      "Workflow automation with reusable templates.",
      "Team chat, file sharing and @mentions alongside client records.",
      "Reports on performance, profitability and growth.",
    ],
    tags: [
      "AI engineering",
      "Next.js",
      "MUI",
      "Firebase",
      "Socket.io",
      "Sentry",
      "Microservices",
      "System design",
      "AI task generation",
      "Workflow automation",
    ],
    image: {
      src: "/work/canvas-client.webp",
      alt: "Canvas Client website showing task, project and team chat panels",
    },
  },
  {
    id: "agentra",
    name: "Agentra",
    subtitle: "Formerly Zavorik",
    sector: "AI employees",
    status: "live",
    url: "https://agentra.live/",
    urlLabel: "agentra.live",
    hook: "Give us your website, and we'll give you a team of AI employees.",
    reach: "Real users",
    summary:
      "AI employees organised into departments. A chief-of-staff agent takes a plain-language instruction and routes it to department directors, who break it into tasks for specialist agents.",
    problem:
      "Small teams need marketing and sales work done, but a chat assistant only answers. Someone still has to plan the work, coordinate it and follow it through.",
    thinking: [
      {
        title: "Organise agents like a company",
        why: "An instruction moves from a chief of staff to directors to specialists, so one sentence can become coordinated work instead of one isolated reply.",
      },
      {
        title: "Autonomy stops where mistakes cost money",
        why: "Emails, campaigns and spend wait for human sign-off. The system moves quickly on preparation and slows down where an error would cost money or reputation.",
      },
    ],
    pointsLabel: "The product",
    points: [
      "Marketing and Sales departments working from a shared memory of customers, brand voice and past results.",
      "Emails, campaigns and spend wait for human approval before they go out.",
      "Work can be requested and approved over WhatsApp, Slack or email.",
      "Connects to tools including Gmail, Meta Ads, HubSpot, Salesforce and LinkedIn.",
    ],
    tags: [
      "AI engineering",
      "Agentic AI",
      "Next.js",
      "Microservices",
      "System design",
      "Approval workflows",
      "Integrations",
    ],
    image: {
      src: "/work/agentra.webp",
      alt: "Agentra website showing AI teams working on a product launch",
    },
  },
  {
    id: "agent-69",
    name: "Agent 69",
    subtitle: "Formerly Agentra · Built by Mohit, Rahul and Daksh",
    role: "I built the entire backend, and we also wrote some of the platform's agents ourselves in Python. Mohit built the blockchain side and Daksh built the frontend.",
    sector: "On-chain AI agents",
    status: "live",
    url: "https://www.agentra69.in/",
    urlLabel: "agentra69.in",
    hook: "AI agents deployed as on-chain assets that earn every time they are called.",
    award: {
      title: "Community Award",
      event: "0G APAC Hackathon",
      detail: "Won under its earlier name, Agentra. One of 23 winners from 293 submissions, with builders from 38 countries and regions.",
      href: "https://0g.ai/blog/0g-apac-hackathon-recap",
    },
    summary:
      "On-chain infrastructure where creators deploy AI agents as iNFTs. Users call those agents directly, and creators and their agents get paid for each call.",
    problem:
      "Someone who builds a useful AI agent has no simple way to prove they own it, set a price for it or get paid each time it runs.",
    thinking: [
      {
        title: "Make the agent the asset",
        why: "Each deployed agent is minted as an iNFT, so ownership is verifiable and transferable instead of being tied to one platform account.",
      },
      {
        title: "Agents can be customers too",
        why: "Agents can hire, message and pay each other on-chain, so a multi-agent pipeline runs without someone coordinating every step by hand.",
      },
    ],
    pointsLabel: "The product",
    points: [
      "Deploy Studio to configure prompts, models and tools, then push an agent live in one click.",
      "Every agent gets a live MCP endpoint, with permissions, usage limits and automatic failover handled behind it.",
      "Each execution is metered, and creators and agents earn tokens per call with a transparent billing history.",
      "Agent metadata, configurations and execution logs are anchored to 0G Storage.",
    ],
    tags: [
      "AI engineering",
      "Agentic AI",
      "Context engineering",
      "Python",
      "Node.js",
      "React",
      "Solidity",
      "Ethers",
      "iNFT",
      "MCP",
      "Microservices",
      "System design",
    ],
    image: {
      src: "/work/agent-69.webp",
      alt: "Agent 69 website with the headline You built the Agent, We made it an Asset",
    },
  },
  {
    id: "two-girls-garage",
    name: "Two Girls Garage",
    role: "I built the store, including FTP and SFTP product synchronization and the Shippo, Authorize.Net and Vega integrations.",
    sector: "Auto parts e-commerce",
    status: "live",
    url: "https://2girlsgarage.com/",
    urlLabel: "2girlsgarage.com",
    hook: "A heavy-duty auto parts store with supplier product sync, shipping and payments built in.",
    summary:
      "An online store for heavy-duty auto parts in Cincinnati, Ohio, with a large catalogue from many manufacturers and a Buy One, Give One program that sponsors racers.",
    problem:
      "A catalogue this large, from this many manufacturers, can't be kept current by hand. Products have to stay in sync while customers browse, pay and get their orders shipped.",
    thinking: [
      {
        title: "Let supplier data drive the catalogue",
        why: "Products sync over FTP and SFTP, so the store follows supplier data instead of depending on manual entry.",
      },
      {
        title: "Giving is part of the purchase",
        why: "With Buy One, Give One, a buyer chooses a racer to receive the same or an equivalent part, and racers get a race-grade substitute when the item isn't one.",
      },
    ],
    pointsLabel: "What I built",
    points: [
      "Product synchronization from supplier feeds over FTP and SFTP.",
      "Shippo integration for shipping.",
      "Authorize.Net integration for payments.",
      "Vega integration.",
    ],
    tags: ["Next.js", "E-commerce", "FTP", "SFTP", "Product sync", "Shippo", "Authorize.Net", "Vega"],
    image: {
      src: "/work/two-girls-garage.webp",
      alt: "Two Girls Garage store with featured auto parts and the headline Heavy Duty Auto Parts Supplier",
    },
  },
  {
    id: "sagenik",
    name: "Sagenik",
    sector: "Healthcare compliance",
    status: "live",
    url: "https://sagenik.com/",
    urlLabel: "sagenik.com",
    hook: "Proof that every compliance task was done, by whom and at which location.",
    summary:
      "A compliance platform for multi-location healthcare groups. Every obligation is assigned to a named person at a specific location, tracked to completion and kept as a timestamped audit record.",
    problem:
      "A policy document proves nothing to a regulator. A healthcare group has to show that a specific person at a specific site did a specific task, and that proof has to hold across every location.",
    thinking: [
      {
        title: "Permissions follow the organisation",
        why: "Access is set at user, department and enterprise level because that is how a healthcare group is actually structured. A flat list of roles can't say who should see which site's records.",
      },
      {
        title: "Billing follows the customer",
        why: "A single clinic and a multi-location enterprise don't pay the same way, so the payment system supports both instead of forcing one model onto the other.",
      },
    ],
    pointsLabel: "What I built",
    points: [
      "Integrated a multi-hospital healthcare ecosystem into one scalable platform with end-to-end operational and compliance workflows.",
      "Implemented role-based access control with granular permissions at user, department and enterprise level.",
      "Engineered the payment gateway system, supporting both single-location and multi-location enterprise billing.",
    ],
    tags: [
      "React",
      "Node.js",
      "Microservices",
      "System design",
      "RBAC",
      "Payment gateway",
      "Multi-location billing",
      "Compliance workflows",
    ],
    image: {
      src: "/work/sagenik.webp",
      alt: "Sagenik website showing an enterprise compliance overview dashboard",
    },
  },
  {
    id: "proud-diaspo-face",
    name: "Proud Diaspo Face",
    role: "I built the web app and the backend queries for the app.",
    sector: "Social network for immigrants",
    status: "live",
    url: "https://prouddiaspoface.com/",
    urlLabel: "prouddiaspoface.com",
    hook: "A social app where immigrants find friends, share their stories and build communities.",
    summary:
      "A social platform for immigrants, on the web and in the app stores, built around profiles, posts, communities and private messaging.",
    problem:
      "Moving to a new country can leave people without a community. Immigrants need one place to find each other, share their journeys and feel at home.",
    thinking: [
      {
        title: "Messaging starts with consent",
        why: "A chat opens only after the other person accepts a message request, which keeps conversations respectful and lets people control who can reach them.",
      },
      {
        title: "Built around communities",
        why: "People can create or join communities around shared interests, so the app leads to real connections instead of more scrolling.",
      },
    ],
    pointsLabel: "The product",
    points: [
      "Global posts for sharing stories, memories and achievements.",
      "Private chat that starts once a message request is accepted.",
      "Friend requests for growing a supportive network.",
      "Communities that people can create or join.",
    ],
    tags: [
      "Web app",
      "Backend queries",
      "Microservices",
      "System design",
      "Private messaging",
      "Communities",
    ],
    image: {
      src: "/work/proud-diaspo-face.webp",
      alt: "Proud Diaspo Face website with the headline Connect. Share. Belong.",
    },
  },
  {
    id: "socilytix",
    name: "Socilytix",
    subtitle: "Built at Nucleo Analytics",
    sector: "Meta ads management",
    status: "live",
    url: "https://socilytix.com/",
    urlLabel: "socilytix.com",
    hook: "A client connects their Meta account once, and the team manages everything from here.",
    summary:
      "A workspace for running Meta advertising, with campaigns, ad sets, audiences, pixels and performance insights in one place.",
    problem:
      "To run a client's ads, an agency normally has to ask for account credentials or set up shared access, and repeat that for every client. It's slow, and nobody likes handing over logins.",
    thinking: [
      {
        title: "Connect once, manage from here",
        why: "A client connects their account one time, and the team runs it from Socilytix from then on. There are no credentials to hand over and no sharing to set up.",
      },
      {
        title: "Reports are made to leave the app",
        why: "Performance reports can be shared and clients can be invited in, so results reach them without another round of handoffs.",
      },
    ],
    pointsLabel: "The product",
    points: [
      "Syncs campaigns and ad sets directly from Meta.",
      "Audience management and pixel tracking.",
      "Campaign budget optimisation (CBO) support.",
      "KPI dashboards and shareable performance reports.",
    ],
    tags: ["React", "Recharts", "Microservices", "System design", "Meta Ads integration"],
    image: {
      src: "/work/socilytix.webp",
      alt: "Socilytix sign-in page describing its advertising platform",
    },
  },
];

export const erp = {
  company: "Onfinity",
  formerly: "Vienna Advantage",
  image: {
    src: "/erp/onfinity.webp",
    alt: "Onfinity ERP website with the headline One ERP for the whole plant",
  },
  tags: [".NET", "React.js", "Microservices", "System design"],
  headline: "Four ERP modules, built from scratch.",
  reach: "Used across multiple countries, including Kuwait and Oman",
  intro:
    "At Onfinity, then called Vienna Advantage, I built core modules of the ERP product from the ground up, covering people, field operations, money and customers, with .NET on the backend and React.js on the frontend.",
  featured: {
    name: "Service & Maintenance",
    image: {
      src: "/erp/service.webp",
      alt: "Onfinity maintenance and field service page",
    },
    summary: "Focused on making resource management more efficient.",
    thinking:
      "A schedule is only as good as what it knows about where people are. That is why live tracking and automated task allocation belong in the same module.",
    points: [
      "Resource tracking system for real-time personnel monitoring.",
      "Automated scheduling for optimized task allocation.",
      "Google Maps API integration for live resource tracking.",
    ],
  },
  modules: [
    {
      name: "HRM",
      summary: "People and HR operations inside the ERP.",
      image: { src: "/erp/hrm.webp", alt: "Onfinity HR and payroll page" },
    },
    {
      name: "Treasury & Finance",
      summary: "Treasury and financial operations inside the ERP.",
      image: { src: "/erp/finance.webp", alt: "Onfinity finance page" },
    },
    {
      name: "CRM",
      summary: "Customer relationship management inside the ERP.",
      image: { src: "/erp/crm.webp", alt: "Onfinity CRM page" },
    },
  ],
};

export const principles = [
  {
    title: "An agent is only as good as its context.",
    why: "Getting an agent to work well is mostly about what it is given: what it knows, which tools it can call and when a person has to approve. I treat that as engineering work, not prompt tweaking.",
    proof: "Agent 69, Agentra",
  },
  {
    title: "Access control is a product decision.",
    why: "Who can see what decides whether a hospital group can use the software at all. I treat permissions as part of the design, not a settings page added at the end.",
    proof: "Sagenik, Ultivic",
  },
  {
    title: "If it got faster, show the number.",
    why: "Fast is a feeling until it is measured. I point to the figure, and to what changed in the queries or the search layer to get it.",
    proof: "30%, 40% and 15%+ above",
  },
  {
    title: "Live data has to change a decision.",
    why: "A moving dot on a map is decoration unless someone can act on it. Tracking is worth building when it sits next to the action it informs, like moving a task or reassigning a person.",
    proof: "Service & Maintenance",
  },
];

export const closing =
  "If you're building something people rely on every day and need someone who can own it from the database to the interface, I'd like to hear about it.";

export const experience = [
  {
    company: "Nucleo Analytics",
    role: "Full Stack Developer",
    period: "04/2026 – Present",
    about: "Product team.",
    points: [
      "Built Canvas Client, a project management platform for agencies with 1,000+ users, and fixed its latency issues.",
      "Worked on Socilytix, a workspace for managing Meta ads and client reporting.",
    ],
    tags: [],
  },
  {
    company: "Ultivic Pvt",
    role: "Full Stack Developer",
    period: "07/2025 – 2026",
    place: "Mohali, India",
    about: "Web and mobile application development.",
    points: [
      "Developed and enforced role-based access control with granular permissions for secure, multi-level data access.",
      "Boosted backend search and retrieval with Elasticsearch, improving data query performance by over 15% across critical modules.",
    ],
    tags: ["RBAC", "Elasticsearch"],
  },
  {
    company: "Onfinity",
    role: "Full Stack Developer",
    period: "08/2023 – 07/2025",
    place: "Mohali, India",
    about: "Web application development. Formerly Vienna Advantage.",
    points: [
      "Improved backend processing time by 30% by optimizing database queries and server-side logic.",
      "Improved server response time by 40% using optimized query algorithms.",
      "Integrated third-party APIs into existing applications.",
    ],
    tags: [".NET", "React.js", "Query optimization", "Third-party APIs", "Google Maps API"],
  },
];

export const education = {
  degree: "Bachelor of Technology",
  school: "Chandigarh Group of Colleges",
  place: "Mohali, India",
};

export const skills = [
  {
    group: "AI",
    items: ["AI engineering", "Agentic AI", "Context engineering", "RAG", "LangChain", "AI agents in Python"],
  },
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"] },
  {
    group: "Frameworks & CMS",
    items: ["Node.js", "Express.js", "Next.js", "React.js", ".NET", "Socket.io", "jQuery", "WordPress"],
  },
  { group: "Architecture", items: ["Microservices", "System design"] },
  { group: "Cloud", items: ["AWS", "Cloudflare"] },
  { group: "Databases", items: ["MongoDB", "SQL", "Mongoose"] },
  { group: "Tools", items: ["GitHub", "Postman", "CI/CD pipelines", "Elasticsearch"] },
  {
    group: "Working style",
    items: ["OOP", "Problem solving", "Team collaboration", "Leadership", "Communication"],
  },
];
