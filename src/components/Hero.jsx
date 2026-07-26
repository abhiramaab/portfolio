import { Mail, MapPin, Terminal } from 'lucide-react'
import { profile } from '../data'
import ContributionGraph from './ContributionGraph'

function Avatar() {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-line shrink-0">
      <img
        src="/avatar.jpg"
        alt={profile.name}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

function RouteSignature() {
  return (
    <div className="relative h-16 w-full max-w-md opacity-90">
      <svg viewBox="0 0 500 44" fill="none" className="w-full h-full overflow-visible">
        <path
          className="route-path"
          d="M2,40 C 120,40 140,4 260,4 S 400,40 498,40"
          stroke="#1E2129"
          strokeWidth="1.5"
        />
        <circle className="route-dot" r="4" fill="#F5A524" />
        <circle cx="2" cy="40" r="3" fill="#5A5F68" />
        <circle cx="498" cy="40" r="3" fill="#22D3EE" />
      </svg>
      <div className="flex justify-between text-[11px] font-mono text-faint -mt-1">
        <span>eCommerce Ops</span>
        <span className="text-accent/80">Backend Dev</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="fade-up flex items-start gap-5 sm:gap-6 mb-8">
          <Avatar />
          <div className="pt-1">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              {profile.name}
            </h1>
            <p className="mt-1 text-lg sm:text-xl text-muted">{profile.role}</p>
          </div>
        </div>

        <div className="fade-up grid grid-cols-2 sm:flex sm:gap-16 gap-6 mb-8">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-faint uppercase mb-1.5">
              Location
            </p>
            <p className="flex items-center gap-1.5 text-ink text-[15px]">
              <MapPin size={14} className="text-faint" /> {profile.location}
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-faint uppercase mb-1.5">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 text-ink text-[15px] hover:text-accent transition-colors"
            >
              <Mail size={14} className="text-faint" /> {profile.email}
            </a>
          </div>
        </div>

        <p className="fade-up max-w-xl text-[15px] leading-relaxed text-muted mb-8">
          I build backend systems with{' '}
          <span className="text-ink font-medium">Java</span>,{' '}
          <span className="text-ink font-medium">Spring Boot</span>, and{' '}
          <span className="text-ink font-medium">MySQL</span> — APIs, authentication, and
          services designed to run cleanly in production. Before this, I spent 4.5+ years
          running eCommerce operations across 7+ marketplaces, which is where I picked up a
          habit for systems that don't break under real-world mess.
        </p>

        <div className="fade-up flex items-center gap-2 text-sm text-muted mb-8">
          <Terminal size={15} className="text-accent shrink-0" />
          <span>{profile.status}</span>
        </div>

        <div className="fade-up flex items-center gap-5 mb-10">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-faint hover:text-ink transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="fade-up mb-10">
          <RouteSignature />
        </div>

        <div className="fade-up">
          <ContributionGraph />
        </div>
      </div>
    </section>
  )
}
