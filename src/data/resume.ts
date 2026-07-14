/**
 * Structured, typed resume data — the single source of truth for the site.
 *
 * Keeping content separate from presentation is what makes this a "living"
 * resume: edit the objects below, rebuild, and every page re-renders. There is
 * no CMS and no database to maintain — the data lives here in version control.
 *
 * All content here is real. Edit any object below, rebuild, and the site
 * updates — there is nothing else to keep in sync.
 */

/** A single professional role. */
export interface Experience {
  /** Employer name. */
  company: string;
  /** Role held at the company. */
  role: string;
  /** Human-readable start date, e.g. "Jan 2022". */
  startDate: string;
  /** Human-readable end date, or "Present" for a current role. */
  endDate: string;
  /** Optional location, e.g. "Remote". */
  location?: string;
  /** Short summary of the role and its scope. */
  summary: string;
  /** Bullet points describing impact and accomplishments. */
  highlights: string[];
  /** Notable technologies used in the role. */
  tech?: string[];
}

/** A named group of related skills. */
export interface SkillGroup {
  /** Category label, e.g. "Backend & APIs". */
  category: string;
  /** Individual skills within the category. */
  items: string[];
}

/** An education entry or professional qualification. */
export interface Education {
  institution: string;
  qualification: string;
  startDate: string;
  endDate: string;
  location?: string;
  detail?: string;
}

/** A professional certification. */
export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
  /** Optional link to the credential. */
  href?: string;
}

/**
 * A longer-form case study. Rendered both as a card on the home page and on its
 * own page at `/projects/{slug}`.
 */
export interface Project {
  /** URL-safe identifier, used for the project's page path. */
  slug: string;
  /** Short project title. */
  title: string;
  /** One-line description shown on the card. */
  summary: string;
  /** Where and when the work happened. */
  context: string;
  /** The problem, in a sentence or two of plain prose. */
  problem: string;
  /** The approach taken. */
  approach: string;
  /** The outcome and its impact. */
  outcome: string;
  /** Headline metrics worth surfacing. */
  metrics?: string[];
  /** Notable technologies used. */
  tech?: string[];
}

/** A personal open-source project, linked out to its repository. */
export interface OpenSourceProject {
  /** Project name. */
  name: string;
  /** A sentence or two, in plain prose. */
  description: string;
  /** Link to the source repository. */
  repo: string;
  /** Optional link to a live demo. */
  demo?: string;
  /** Optional extra labelled links, e.g. an alternate view. */
  links?: { label: string; href: string; note?: string }[];
  /** Notable technologies used. */
  tech?: string[];
}

/** A single point of contact / social link. */
export interface ContactLink {
  /** Display label, e.g. "Email" or "GitHub". */
  label: string;
  /** Fully-qualified href, e.g. "mailto:..." or "https://...". */
  href: string;
  /** Optional text shown to the user, defaults to `label`. */
  display?: string;
}

/** Top-level profile / hero information. */
export interface Profile {
  name: string;
  /** Short professional title. */
  title: string;
  /** One-line tagline for the hero section. */
  tagline: string;
  /** A short paragraph introducing yourself. */
  about: string;
  /** A one-line note on what you're open to, shown near the top. */
  availability: string;
  /** Location for display. */
  location: string;
}

/** The complete, typed resume. */
export interface Resume {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  openSource: OpenSourceProject[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
  contact: ContactLink[];
}

export const resume: Resume = {
  profile: {
    name: 'Lawrence Baker',
    title: 'Staff Backend Software Engineer',
    tagline: 'Backend and full-stack engineer. I build reliable systems and share what I learn.',
    about:
      "I'm a software engineer who likes working across a range of technologies to find the " +
      'right solution rather than the flashiest one. Over the past decade I have built mobile ' +
      'apps, APIs, and web platforms, mostly in youth sports, and more recently the agentic AI ' +
      'systems behind them. I enjoy sharing what I am reading and learning with the people I ' +
      'work with, and I care about leaving a codebase clearer than I found it.',
    availability: 'Open to senior and staff engineering roles.',
    location: 'Hanover, PA',
  },

  experience: [
    {
      company: 'OTTO Sport AI',
      role: 'Staff Backend Software Engineer',
      startDate: 'Jan 2026',
      endDate: 'Present',
      location: 'Remote',
      summary:
        'OTTO Sport AI grew out of Demosphere and is building an AI-driven operating system for ' +
        'youth sports. I joined as a senior engineer and moved into a staff role, working on the ' +
        'systems behind that shift.',
      highlights: [
        'Build client-facing and internal agentic systems that support youth sports operations.',
        'Lead the move from a traditional development lifecycle (SDLC) to an AI-driven one (AIDLC), with spec-driven development (SDD) at its center so intent stays explicit and well-scoped work can be handed to agents.',
        'Define the patterns other engineers build on as AI becomes a dependable part of delivery.',
        'Work closely with cross-functional teams to understand how they actually work before automating any of it.',
      ],
      tech: ['TypeScript', 'NestJS', 'React', 'Node.js', 'OpenAI', 'PostgreSQL', 'AWS'],
    },
    {
      company: 'Demosphere',
      role: 'Director of Software Engineering',
      startDate: 'Feb 2022',
      endDate: 'Jan 2026',
      location: 'Remote',
      summary:
        'Led the engineering department building registration and program management software ' +
        'for youth sports, covering payments, scheduling, and background screening.',
      highlights: [
        'Led a department of nine engineers and coordinated offshore teams in India and Ukraine to scale delivery capacity.',
        'Rebuilt the mobile app serving 500,000+ users in three months, cutting API response times and payload sizes by 90% and lifting app store ratings from 2.5 to over 4.',
        'Shipped embeddable public schedules for hundreds of organizations, serving millions of pageviews a day at peak, using event-driven architecture, materialized views, and HTML over the wire.',
        'Shortened the deployment cycle from once every few days to several times a day by introducing incremental delivery, API design playbooks, and modularity standards that became company SOPs.',
        'Cut new-engineer onboarding from a week to a few hours with Docker Compose, AWS EC2 workspaces, and a shared internal knowledge base.',
      ],
      tech: ['Ruby on Rails', 'NestJS', 'React Native', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      company: 'Next Glass · Untappd for Business',
      role: 'Senior Software Engineer',
      startDate: 'Oct 2021',
      endDate: 'Feb 2022',
      location: 'Remote',
      summary:
        'Individual contributor leading key architectural decisions and vetting third-party ' +
        'integrations for the Untappd for Business menu platform.',
      highlights: [
        'Led the consolidation of food, beer, wine, and cocktail menus, using polymorphic relationships to hold very different menu data in one model.',
        'Built a feature-flagging system to roll out changes gradually by client, user, and percentage threshold.',
        'Assessed wine-search vendors for integration into the menu-building products.',
      ],
      tech: ['Ruby on Rails', 'PostgreSQL'],
    },
    {
      company: 'Demosphere',
      role: 'Senior Software Engineer',
      startDate: 'Jul 2019',
      endDate: 'Oct 2021',
      location: 'Remote',
      summary:
        'Led several configurable products across the platform, from referee management to ' +
        'compliance automation and team scheduling.',
      highlights: [
        'Built Officials Management for referee assignment and payouts driven by league rules and referee preferences, using GraphQL with Apollo Federation, React, MongoDB, Redis, and AWS Lambda.',
        'Built Roster Pro Club to automate data transfer from clubs to state and league governing bodies, checking each roster against configurable compliance rules.',
        'Built TeamNet, a web and mobile team management platform with scheduling and messaging, on Ruby on Rails, Node.js, and Apache Cordova.',
      ],
      tech: ['GraphQL', 'Apollo Federation', 'React', 'MongoDB', 'Redis', 'AWS Lambda', 'Node.js'],
    },
    {
      company: 'Demosphere',
      role: 'Software Engineer',
      startDate: 'Sep 2014',
      endDate: 'Jul 2019',
      location: 'Falls Church, VA',
      summary:
        'Full-stack engineer on a Ruby and Rails platform for club, travel, and professional ' +
        'sports registration, working test-first with a continuous delivery pipeline.',
      highlights: [
        'Built a PCI-compliant registration system processing 5+ million registrations a year at a 90% payment completion rate, using tokenization to keep card data off our systems and supporting card and ACH in full or installments.',
        'Integrated third-party risk providers to automate 100,000+ background checks a year with 500,000+ status callbacks, removing the need to store sensitive personal data.',
      ],
      tech: ['Ruby on Rails', 'Sinatra', 'RSpec', 'Docker', 'PostgreSQL'],
    },
    {
      company: 'Washington College',
      role: 'Web Developer',
      startDate: 'Sep 2013',
      endDate: 'Sep 2014',
      location: 'Chestertown, MD',
      summary: 'LAMP-stack development supporting the admissions office.',
      highlights: [
        "Deployed the college's first online undergraduate admissions application, replacing a paper process with digital application management.",
        'Built a scheduling application for prospective students and parents to book personalized campus visits.',
      ],
      tech: ['PHP', 'MySQL', 'jQuery'],
    },
  ],

  projects: [
    {
      slug: 'ai-driven-development',
      title: 'An AI-driven development lifecycle',
      summary:
        'Orchestration repositories and organization plugins that make spec-driven development the default and let AIDLC frameworks plug in the way gems port into Rails.',
      context: 'OTTO Sport AI · 2026',
      problem:
        'As OTTO leaned into AI, the interesting question was not whether a model could write ' +
        'code. It was how a whole team changes the way it works so that AI becomes a dependable ' +
        'part of delivery rather than a novelty that quietly creates rework.',
      approach:
        'I lead the shift from a traditional development lifecycle (SDLC) to an AI-driven one ' +
        '(AIDLC), with spec-driven development at its center: a clear, reviewable specification ' +
        'comes first and becomes the contract that engineers and agents both build against. To ' +
        'make that repeatable I built orchestration repositories that let agents pull in the ' +
        'right knowledge and work against the right code, and I developed and published ' +
        'organization plugins so the team shares one setup. The orchestration is deliberately ' +
        'opinionated, much like Rails and its MVC conventions about separation of concerns and ' +
        'where things belong, which lets other tools plug in the way gems port into Rails.',
      outcome:
        'Because the orchestration sets the conventions, established frameworks plug straight in ' +
        'rather than competing for the same space. BMAD-Method, GitHub Spec Kit, and AWS Labs ' +
        'AIDLC workflows all run on top of the same structure, so the team can reach for whichever ' +
        'fits a task without rebuilding how agents find knowledge or where their work lands. ' +
        'Spec-driven development becomes the normal way to work rather than a special case.',
      metrics: ['SDLC → AIDLC', 'Published org plugins', 'Pluggable frameworks'],
      tech: ['Claude Code', 'BMAD-Method', 'GitHub Spec Kit', 'AIDLC workflows', 'TypeScript'],
    },
    {
      slug: 'embeddable-public-schedules',
      title: 'Embeddable public schedules',
      summary:
        'A widget hundreds of sports organizations embed on their own sites, serving millions of pageviews a day at peak.',
      context: 'Demosphere · 2022–2026',
      problem:
        'Sports organizations wanted their game and event schedules on their own websites, ' +
        'always current and fast to load. Schedules change constantly during a season, and at ' +
        'peak the traffic arrives in large, spiky waves as families check times before games.',
      approach:
        'I designed the feature around event-driven updates and materialized views, so the ' +
        'read path stayed cheap even under load. Pages were rendered as HTML over the wire for ' +
        'fast partial updates, and client-side asset caching kept repeat visits light. The ' +
        'widget was built to drop into any host site without pulling a heavy framework along ' +
        'with it.',
      outcome:
        'The schedules held up through peak season for hundreds of organizations at millions of ' +
        'daily pageviews, with rendering that stayed quick regardless of how often the ' +
        'underlying data changed.',
      metrics: [
        'Hundreds of organizations',
        'Millions of pageviews/day at peak',
        'HTML over the wire',
      ],
      tech: ['Event-driven architecture', 'Materialized views', 'Ruby on Rails', 'PostgreSQL'],
    },
    {
      slug: 'mobile-app-rebuild',
      title: 'Mobile app rebuild',
      summary:
        'A three-month rebuild of a mobile app serving 500,000+ users, with a 90% cut in API response times and a jump from 2.5 to 4+ stars.',
      context: 'Demosphere · 2022–2026',
      problem:
        'The existing mobile app was slow and poorly rated, and it served a large, active user ' +
        'base of families and organizers. A gradual patch-by-patch approach would not have moved ' +
        'the numbers that mattered, and users were feeling the friction daily.',
      approach:
        'We rebuilt the app over three months, reworking the API surface to cut response times ' +
        'and payload sizes, improving client-side render performance, and adding features such ' +
        'as in-app messaging. The work was structured so the team could ship incrementally ' +
        'rather than disappear for a big-bang release.',
      outcome:
        'API response times and payload sizes dropped by around 90%, the app felt noticeably ' +
        'faster, and app store ratings climbed from 2.5 to over 4 in the same window.',
      metrics: ['500,000+ users', '~90% faster API', 'Ratings 2.5 → 4+', 'Rebuilt in 3 months'],
      tech: ['React Native', 'GraphQL', 'Node.js', 'PostgreSQL'],
    },
  ],

  openSource: [
    {
      name: 'Terrashroom Resurrection',
      description:
        'When the maker of the Terrashroom grow chamber shut down and took its cloud service ' +
        'with it, the units turned into expensive paperweights. I wrote open ESPHome firmware ' +
        'that gives owners full local control of fans, humidity, heating, lighting, and sensors ' +
        'over a web interface and REST API, turning bricked hardware back into working mushroom ' +
        'chambers.',
      repo: 'https://github.com/lbaker2/terrashroom-resurrection',
      tech: ['ESPHome', 'ESP32', 'C++', 'Python'],
    },
    {
      name: 'Terminal Puzzles',
      description:
        'A Fallout-style terminal I built for a murder mystery party, played in the browser. ' +
        'During a game the host acts as game master and reveals terminals to players as the ' +
        'story unfolds, so on its own the demo stays quiet by design.',
      repo: 'https://github.com/lbaker2/terminal-puzzles',
      demo: 'https://pip-boy.lbaker.dev',
      links: [
        {
          label: 'Game master view',
          href: 'https://pip-boy.lbaker.dev/gm',
          note: 'PIN 1947',
        },
      ],
      tech: ['TypeScript', 'Vite', 'Vitest'],
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Ruby', 'Python', 'SQL'],
    },
    {
      category: 'Backend & APIs',
      items: ['Ruby on Rails', 'Node.js', 'NestJS', 'GraphQL', 'REST', 'Event-driven architecture'],
    },
    {
      category: 'Frontend & Mobile',
      items: ['React', 'React Native', 'Responsive UI', 'HTML over the wire'],
    },
    {
      category: 'Data & Storage',
      items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'ElastiCache (Redis)', 'Materialized views'],
    },
    {
      category: 'Cloud & Delivery',
      items: ['AWS (EC2, Lambda, S3)', 'Docker', 'CI/CD', 'Continuous delivery'],
    },
    {
      category: 'Quality & Security',
      items: ['TDD (RSpec, Jest)', 'Snyk', 'SonarQube', 'PCI compliance'],
    },
    {
      category: 'AI',
      items: ['LLM integrations', 'Agentic systems', 'Prompt engineering', 'OpenAI'],
    },
    {
      category: 'Leadership',
      items: ['Team management', 'Mentoring', 'API design standards', 'Offshore coordination'],
    },
  ],

  education: [
    {
      institution: 'Washington College',
      qualification: 'BA, Mathematics and BA, Computer Science',
      startDate: '2009',
      endDate: '2013',
      location: 'Chestertown, MD',
    },
  ],

  certifications: [
    {
      name: 'Claude Code in Action',
      issuer: 'Anthropic Education',
      year: '2026',
      href: 'https://verify.skilljar.com/c/a3q65w63utbz',
    },
    {
      name: 'Building with the Claude API',
      issuer: 'Anthropic Education',
      year: '2026',
      href: 'https://verify.skilljar.com/c/hhmpgnrtdf8s',
    },
    {
      name: 'Docker and Kubernetes',
      issuer: 'Udemy',
      year: '2020',
      href: 'https://www.udemy.com/certificate/UC-489ecede-550b-4461-a863-86b2106a20e0/',
    },
  ],

  contact: [
    {
      label: 'Email',
      href: 'mailto:lawrencezmail@gmail.com',
      display: 'lawrencezmail@gmail.com',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/lbaker2',
      display: 'github.com/lbaker2',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lawrencebakerjr',
      display: 'linkedin.com/in/lawrencebakerjr',
    },
  ],
};
