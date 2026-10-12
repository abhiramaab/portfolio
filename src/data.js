export const profile = {
  name: 'Abhirama',
  role: 'Self-Taught Backend Developer',
  tagline: "from ops chaos to deterministic backends — building software that holds up.",
  email: 'abhiram.b@icloud.com',
  github: 'https://github.com/abhiramaab',
  location: 'Bengaluru, India',
}

export const summary = {
  link: {
    href: 'https://usesynoptiq.com',
  },
  rest: '  Self-taught backend developer building distributed services and event pipelines with Java (8/17/21), Spring Boot, and Spring Security. I contribute patches to open-source codebases including Apache BifroMQ, Spring Cloud, Spring Boot Admin, Apache Camel, Apache Shiro, Apache Hop, and Kestra, fixing bugs in distributed MQTT brokers, authentication, Kafka transport, and concurrency. I build distributed workflows, idempotent services, and resilient data models.',
}

export const projects = [
  {
    name: 'LoomPay',
    href: 'https://loompay.abhiram.tech',
    tagline: 'Payment gateway with Idempotency, distributed locks, outbox events, and ledger bookkeeping.',
    github: 'https://github.com/abhiramaab/loompay',
    docs: 'https://github.com/abhiramaab/loompay/blob/main/docs/ARCHITECTURE.md',
    live: 'https://loompay.abhiram.tech',
    description: 'Payment backend built in Java 21 and Spring Boot. Implements Idempotency (double-checked locking) and Redis distributed locks to stop duplicate charges, Redis ZSET sliding-window rate limiting to prevent downstream service overload, an outbox table to reliably deliver webhooks, consistent hashing to route merchants, and double-entry accounting to track balances.',
    desc: 'Payment backend with Idempotency, Redis distributed locks, Redis ZSET sliding-window rate limiting, Transactional Outbox event dispatching, and double-entry accounting.',
    tags: ['Java 21', 'Spring Boot', 'Rate Limiting (ZSET)', 'Idempotency', 'Distributed Locks', 'Redis', 'PostgreSQL', 'Docker'],
    external: true,
  },
  {
    name: 'Synoptiq',
    href: 'https://usesynoptiq.com',
    docs: 'https://github.com/abhiramaab/synoptiq-docs',
    desc: 'Productivity platform that syncs Gmail and Google Calendar via OAuth2, with HTTP/2 multiplexing, SSE streaming, and JWT auth.',
    external: true,
  },
  {
    name: 'RouteSphere',
    href: 'https://routesphere.abhiram.tech/',
    docs: 'https://github.com/abhiramaab/RouteSphere/blob/main/docs/ARCHITECTURE.md',
    desc: 'Logistics and fleet operations platform with Spring Boot backend, Spring Data JPA, JWT auth, and interactive live tracking dashboard.',
    external: true,
  },
]

export const openSource = [
  {
    name: 'Apache BifroMQ',
    badge: 'Integrated',
    repoDesc: 'Distributed MQTT Broker (High-Performance Engine)',
    prs: [
      { label: 'PR #314', href: 'https://github.com/apache/bifromq/pull/314' },
      { label: 'PR #315 (Merged)', href: 'https://github.com/apache/bifromq/pull/315' },
    ],
    desc: 'Diagnosed QoS 1 persistent subscriber deadlock caused by inbound Netty decoder & outbound packet-sizer mismatch (Issue #313); authored varint-aware boundary limits and drop-and-confirm delivery semantics in PR #314, integrated into main via PR #315.',
  },
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
