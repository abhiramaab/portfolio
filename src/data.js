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
    href: 'https://usesynoptiq.com',
  },
  rest: '  Java Backend Developer specializing in Java (8/17/21), Spring Boot, Spring Security, and Microservices architectures. Proven track record contributing to major open-source ecosystems (Spring Cloud, Spring Boot Admin, Apache Camel, Apache Shiro, Apache Hop, Jenkins, Kestra) resolving cloud authentication, Kafka transport, and concurrency defects. Designing secure REST APIs, scalable distributed systems, and resilient data models.',
}

export const projects = [
  {
    name: 'Synoptiq',
    href: 'https://usesynoptiq.com',
    desc: 'Enterprise productivity platform featuring OAuth2 Google Sync (Gmail API), HTTP/2 multiplexing, SSE token streaming, and JWT authentication.',
    external: true,
  },
  {
    name: 'RouteSphere',
    href: 'https://routesphere.abhiram.tech/',
    desc: 'Logistics and fleet operations platform with Spring Boot backend, Spring Data JPA, JWT auth, and interactive live tracking dashboard.',
    external: true,
  },
  {
    name: 'LoomPay',
    href: 'https://loompay.abhiram.tech',
    tagline: 'Payment gateway with Idempotency, distributed locks, outbox events, and ledger bookkeeping.',
    github: 'https://github.com/abhiramaab/loompay',
    live: 'https://loompay.abhiram.tech',
    description: 'Payment backend built in Java 21 and Spring Boot. Implements Idempotency (double-checked locking) and Redis distributed locks to stop duplicate charges, an outbox table to reliably deliver webhooks, consistent hashing to route merchants, and double-entry accounting to track balances.',
    desc: 'Payment backend with Idempotency, Redis distributed locks, Transactional Outbox event dispatching, Consistent Hashing routing, and double-entry accounting.',
    tags: ['Java 21', 'Spring Boot', 'Idempotency', 'Distributed Locks', 'Redis', 'PostgreSQL', 'System Design', 'Docker'],
    external: true,
  },
]

export const openSource = [
  {
    name: 'Spring Cloud',
    href: 'https://github.com/spring-cloud/spring-cloud-config/pull/3272',
    pr: '#3272',
    badge: 'Merged',
    repoDesc: 'Distributed Configuration & Microservices Engine',
    desc: 'Implemented passwordless Azure Managed Identity authentication for Git repos in Spring Cloud Config (+706 lines); acquired Azure tokens and injected Bearer headers into JGit HTTP transport with fallback.',
  },
  {
    name: 'codecentric / Spring Boot Admin',
    href: 'https://github.com/codecentric/spring-boot-admin/pull/5584',
    pr: '#5584',
    badge: 'Merged',
    repoDesc: 'Centralized Microservices Management & Monitoring',
    desc: 'Implemented configurable browser notification timeouts via server-side application properties and deep-link navigation directly to instance details for single-instance status changes with Vitest tests (Issue #5504, +148 lines).',
  },
  {
    name: 'Apache Camel',
    href: 'https://github.com/apache/camel-kamelets/pull/3039',
    pr: '#3039',
    badge: 'Merged',
    repoDesc: 'ASF Enterprise Integration & Event-Driven Framework',
    desc: 'Resolved Kafka record key loss across HTTP hops by configuring kafka-sink Kamelet to map standard kafka-key and CloudEvents ce-kafkakey headers to CamelKafkaKey.',
  },
  {
    name: 'Apache Shiro',
    href: 'https://github.com/apache/shiro/pull/2854',
    pr: '#2854',
    badge: 'Merged',
    repoDesc: 'ASF Security Framework',
    desc: 'Fixed Active Directory DN Authentication by resolving user principal name binding bug; validated and merged into official release 3.0.1.',
  },
  {
    name: 'Apache Hop',
    href: 'https://github.com/apache/hop/pull/8344',
    badge: 'Merged',
    repoDesc: 'ASF Data Orchestration Platform',
    prs: [
      { label: 'PR #8344 (Merged)', href: 'https://github.com/apache/hop/pull/8344' },
      { label: 'PR #8343 (Merged)', href: 'https://github.com/apache/hop/pull/8343' },
    ],
    desc: 'Fixed Hop Web stalled session bug via ServerPushSession UI keepalive (Issue #8327); suppressed redundant notification HTTP wire logs with regression test suite (Issue #8340). Both merged into Apache Hop.',
  },
  {
    name: 'Kestra',
    href: 'https://github.com/kestra-io/kestra/pull/19007',
    badge: 'Merged',
    repoDesc: 'Declarative Orchestration Engine (15k+ Stars)',
    prs: [
      { label: 'Core #19007 (Merged)', href: 'https://github.com/kestra-io/kestra/pull/19007' },
      { label: 'Telegram #51 (Merged)', href: 'https://github.com/kestra-io/plugin-telegram/pull/51' },
    ],
    desc: 'Resolved Model Context Protocol (MCP) client auto health-check socket leaks across builder instances (Issue #18981); added case-sensitive enum validation for Telegram plugin.',
  },
  {
    name: 'Jenkins',
    href: 'https://github.com/jenkinsci/atlassian-jira-software-cloud-plugin/pull/143',
    badge: 'PR',
    repoDesc: 'Workflow SCM Step & Jira Plugins',
    prs: [
      { label: 'Jira Plugin #143', href: 'https://github.com/jenkinsci/atlassian-jira-software-cloud-plugin/pull/143' },
      { label: 'Workflow SCM #273', href: 'https://github.com/jenkinsci/workflow-scm-step-plugin/pull/273' },
    ],
    desc: 'Resolved broken build/deployment URLs in Jira Cloud plugin via RunUrlProvider branch path percent-encoding; eliminated redundant workspace baseline polling in Workflow SCM Step plugin.',
  },
]

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
    'Spring MVC',
    'Spring Security',
    'Spring Data JPA',
    'Hibernate',
    'System Design (HLD & LLD)',
    'Idempotency & Distributed Locks',
    'Distributed Systems (Outbox, Consistent Hashing)',
    'Double-Entry Ledger',
    'Microservices',
    'Spring Cloud (Eureka, Gateway, OpenFeign)',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Docker',
    'AWS EC2',
    'RESTful APIs',
    'JWT & OAuth2',
    'Git & GitHub',
    'Maven',
    'JUnit 5',
  ],
  subtitle: 'Mostly backend systems, APIs, and distributed architectures.',
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
  { label: 'Currently learning', id: 'currently-learning' },
  { label: 'Stack', id: 'stack' },
  { label: 'Elsewhere', id: 'elsewhere' },
]
