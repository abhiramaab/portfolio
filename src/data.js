export const profile = {
  name: 'Abhirama',
  role: 'Backend Developer',
  location: 'Bengaluru, India',
  email: 'abhiram.b@icloud.com',
  github: 'https://github.com/abhiramaab',
  status: 'Currently building Synoptiq',
  bio: "I build backend systems with Java and Spring Boot — APIs, authentication, and services designed to run cleanly in production. Before this, I spent 4.5+ years running eCommerce operations across 7+ marketplaces, which is where I picked up a habit for systems that don't break under real-world mess.",
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/abhiramaab' },
  { label: 'Email', href: 'mailto:abhiram.b@icloud.com' },
]

// Real public contribution activity for github.com/abhiramaab, fetched at build time.
// levels are 0-4 (GitHub's own intensity buckets), one entry per day, consecutive
// starting from contributionsStart. This is a point-in-time snapshot, not a live feed.
export const contributionsStart = '2025-07-27'
export const contributionsTotal = 192
export const contributionLevels = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,2,0,0,0,2,1,0,0,1,3,0,0,0,0,0,1,0,0,3,1,0,1,1,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,3,3,1,0,3,2,1,1,1,4]

export const techIcons = [
  { name: 'Java', icon: 'FaJava', color: '#f89820' },
  { name: 'Spring Boot', icon: 'SiSpring', color: '#6DB33F' },
  { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
  { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
  { name: 'AWS EC2', icon: 'Cloud', color: '#FF9900' },
  { name: 'Git', icon: 'SiGit', color: '#F05032' },
  { name: 'GitHub', icon: 'SiGithub', color: '#F2F2F3' },
  { name: 'Postman', icon: 'SiPostman', color: '#FF6C37' },
  { name: 'Maven', icon: 'SiApachemaven', color: '#C71A36' },
  { name: 'Swagger', icon: 'SiSwagger', color: '#85EA2D' },
  { name: 'Python', icon: 'FaPython', color: '#3776AB' },
]

export const contactMethods = [
  {
    icon: 'Mail',
    title: profile.email,
    subtitle: 'Quick inquiries & questions',
    href: `mailto:${profile.email}`,
  },
  {
    icon: 'Github',
    title: 'github.com/abhiramaab',
    subtitle: 'Check out the code',
    href: profile.github,
  },
]

export const techStack = {
  Backend: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'JWT', 'Microservices'],
  Data: ['MySQL', 'PostgreSQL', 'JPA / Hibernate', 'Query Optimization'],
  API: ['REST APIs', 'Swagger / OpenAPI', 'DTO Pattern', 'Pagination & Sorting'],
  Testing: ['JUnit 5', 'Mockito'],
  Tooling: ['Git', 'GitHub', 'Maven', 'Docker', 'AWS EC2', 'Postman'],
  Also: ['Python', 'OAuth2', 'Gmail API', 'OpenAI API'],
}

export const projects = [
  {
    name: 'Synoptiq',
    tagline: 'AI-powered workflow automation platform',
    description:
      'A modular automation engine on Java and Spring Boot: Gmail sync, AI-generated email summaries, scheduled jobs, thread watchlists, and search/filtering. Built to turn Gmail threads into Asana tasks, YouTube videos into LinkedIn posts, and GitHub activity into daily email digests — with GitHub, Drive, Calendar, Notion, and Slack on the roadmap.',
    tags: ['Spring Boot', 'PostgreSQL', 'OAuth2', 'Gmail API', 'OpenAI API'],
    github: null,
    live: 'https://project.synoptiq.abhiram.tech',
  },
  {
    name: 'RouteSphere',
    tagline: 'Microservices-based logistics & fleet management system',
    description:
      'Nine independently deployable Spring Boot services behind an API Gateway with Eureka service discovery, JWT auth, and Spring Security. Centralized routing and a scalable structure built for independent deployment. Currently adding centralized logging for production readiness.',
    tags: ['Spring Boot', 'Microservices', 'Docker', 'JWT', 'Eureka'],
    github: 'https://github.com/abhiramaab/routesphere-microservices',
    live: 'https://project.routesphere.abhiram.tech',
  },
  {
    name: 'WorkBoard',
    tagline: 'Role-based project & task management backend',
    description:
      'Supports multi-level organizational hierarchies across departments, employees, projects, and tasks. Clean JPA entity relationships and a DTO layer keep API responses tidy, with pagination and role-based access control built in from the start.',
    tags: ['Spring Boot', 'JPA', 'RBAC', 'REST APIs'],
    github: 'https://github.com/abhiramaab/workboard',
    live: null,
  },
]
