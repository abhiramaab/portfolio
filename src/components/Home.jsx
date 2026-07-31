import {
  currentlyLearning,
  elsewhere,
  previously,
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
        <Section id="currently" label="Currently">
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

        <Section id="previously" label="Previously">
          <p className="text-[15px] leading-relaxed text-body">
            {previously.text}{' '}
            <a
              className="ulink"
              href={previously.link.href}
              target="_blank"
              rel="noreferrer"
            >
              {previously.link.label}
            </a>{' '}
            {previously.rest}
          </p>
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
