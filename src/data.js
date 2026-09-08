export const profile = {
  name: 'Abhirama',
  role: 'Backend Developer',
  tagline: "from ops chaos to deterministic backends — building software that holds up.",
  email: 'abhiram.b@icloud.com',
  github: 'https://github.com/abhiramaab',
  location: 'Bengaluru, India',
}

export const summary = {
  link: {
    href: 'https://project.synoptiq.abhiram.tech',
  },
  rest: '  Java Backend Developer specializing in Java (8/17/21), Spring Boot, Spring Security, and Microservices architectures. Proven track record contributing to major open-source ecosystems (Apache Shiro, Jenkins, Kestra) resolving authentication and protocol-level bugs. Designing secure REST APIs, scalable distributed systems, and resilient data models.',
}

export const projects = [
  {
    name: 'Synoptiq',
    href: 'https://usesynoptiq.com',
    desc: 'Enterprise productivity platform featuring OAuth2 Google Sync (Gmail API), SSE token streaming, and JWT authentication.',
    external: true,
  },
  {
    name: 'RouteSphere',
    href: 'https://github.com/abhiramaab/routesphere-microservices',
    desc: 'Microservices logistics platform decomposed across 9 services with Spring Cloud Eureka, API Gateway, OpenFeign, and JWT auth.',
    external: true,
  },
  {
    name: 'WorkBoard',
    href: 'https://github.com/abhiramaab/workboard',
    desc: 'Modular REST backend for project and task management with JPA/Hibernate relational schemas, JPA Specifications, and RBAC.',
    external: true,
  },
]

export const openSource = [
  {
    name: 'Apache Shiro',
    href: 'https://github.com/apache/shiro/pull/2854',
    pr: '#2854',
    badge: 'Merged',
    repoDesc: 'ASF Security Framework',
    desc: 'Fixed Active Directory DN Authentication by resolving user principal name binding bug; validated and merged into official release 3.0.1.',
  },
  {
    name: 'Kestra',
    href: 'https://github.com/kestra-io/kestra/pull/19007',
    pr: '#19007',
    badge: 'PR',
    prs: [
      { label: 'Core #19007', href: 'https://github.com/kestra-io/kestra/pull/19007' },
      { label: 'Telegram #51 (Merged)', href: 'https://github.com/kestra-io/plugin-telegram/pull/51' },
    ],
    repoDesc: 'Declarative Orchestration Engine (15k+ Stars)',
    desc: 'Resolved Model Context Protocol (MCP) client auto health-check socket floods with regression test suite; added parseMode validation to Telegram plugin.',
  },
  {
    name: 'Jenkins',
    href: 'https://github.com/jenkinsci/atlassian-jira-software-cloud-plugin/pull/143',
    pr: '#143',
    badge: 'PR',
    repoDesc: 'Atlassian Jira Software Cloud Plugin',
    desc: 'Resolved broken build and deployment URLs sent to Jira Cloud by engineering RunUrlProvider to properly percent-encode multibranch paths; backed with JenkinsRule integration tests.',
  },
]

export const previously = {
  text: 'Before backend development, I spent 4.5+ years running eCommerce operations across 7+ marketplaces — inventory, fulfillment, and the kind of operational chaos that teaches you what production actually means. Now I build backend systems with',
  rest: 'Java & Spring Boot — APIs, authentication, and services designed to run cleanly in production.',
}

export const currentlyLearning = [
  'System Design',
  'Microservices',
  'Kubernetes',
  'Distributed Systems',
  'AI Agent Architectures',
]

export const stack = {
  items: [
    'Java (8/17/21)',
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'Hibernate',
    'Microservices',
    'Spring Cloud (Eureka, Gateway, OpenFeign)',
    'PostgreSQL',
    'MySQL',
    'Docker',
    'AWS EC2',
    'Redis',
    'RESTful APIs',
    'JWT & OAuth2',
    'Git & GitHub',
    'Maven',
    'JUnit 5',
  ],
  subtitle: 'Mostly backend systems, APIs, and product.',
}

export const elsewhere = [
  { label: 'GitHub', href: 'https://github.com/abhiramaab' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ababhirama' },
  { label: 'Email', href: 'mailto:abhiram.b@icloud.com' },
]

export const navSections = [
  { label: 'Summary', id: 'summary' },
  { label: 'Projects', id: 'projects' },
  { label: 'Open Source', id: 'open-source' },
  { label: 'Previously', id: 'previously' },
  { label: 'Currently learning', id: 'currently-learning' },
  { label: 'Stack', id: 'stack' },
  { label: 'Elsewhere', id: 'elsewhere' },
]
