import {
  currentlyLearning,
  elsewhere,
  openSource,
  profile,
  projects,
  stack,
  summary,
} from '../data'
import { ElsewhereIcon } from './Layout'
import LinkItem from './LinkItem'
import Section from './Section'

export default function Home() {
  return (
    <>
      <div className="rise">
        <img
          src="/avatar.jpg"
          alt={profile.name}
          width="46"
          height="46"
          className="mb-[18px] block h-[46px] w-[46px] rounded-full border border-line2 object-cover"
        />
        <div className="text-[15px] leading-normal">
          <h1 className="font-medium text-ink">{profile.name}</h1>
          <div className="text-body">{profile.role}</div>
          <div className="text-muted">{profile.tagline}</div>
        </div>
      </div>

      <div className="mt-6 border-t border-line" />

      <div className="rise" style={{ animationDelay: '0.05s' }}>
        <Section id="summary" label="Summary">
          <p className="text-[15px] leading-relaxed text-body">{summary.rest.trim()}</p>
        </Section>

        <Section id="projects" label="Projects">
          {projects.map((p) => (
            <LinkItem
              key={p.name}
              href={p.href}
              name={p.name}
              desc={p.desc}
              external={p.external}
            />
          ))}
        </Section>

        <Section id="open-source" label="Open Source">
          {openSource.map((item) => (
            <div key={item.name} className="mb-4 last:mb-0">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <a
                  className="ulink text-[15px]"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
                <span className="text-xs text-muted">({item.repoDesc})</span>
                {item.prs ? (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                    {item.prs.map((pr, idx) => (
                      <span key={pr.label} className="inline-flex items-center gap-1.5">
                        {idx > 0 && <span>·</span>}
                        <a
                          href={pr.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs text-muted underline decoration-line hover:text-ink"
                        >
                          {pr.label}
                        </a>
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-muted underline decoration-line hover:text-ink"
                    >
                      PR {item.pr}
                    </a>
                    {item.badge && (
                      <span className="rounded border border-line px-1.5 py-0.2 font-mono text-[10px] text-faint uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </span>
                )}
              </div>
              <div className="mt-0.5 text-sm leading-snug text-muted">{item.desc}</div>
            </div>
          ))}
        </Section>

        <Section id="currently-learning" label="Currently learning">
          <div className="text-sm text-body">{currentlyLearning.join(', ')}.</div>
        </Section>

        <Section id="stack" label="Stack">
          <div className="text-sm text-body">{stack.items.join(', ')}.</div>
          <div className="mt-1.5 text-sm text-muted">{stack.subtitle}</div>
        </Section>

        <Section id="elsewhere" label="Elsewhere">
          <div className="flex items-center gap-4">
            {elsewhere.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-ink"
              >
                <ElsewhereIcon label={link.label} />
              </a>
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}
