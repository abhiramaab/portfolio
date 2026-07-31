import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Selected work</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-10">
          Featured Projects
        </h2>

        <div className="grid gap-5">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group border border-line rounded-lg p-6 bg-surface hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                  <p className="text-sm text-faint">{p.tagline}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-ink transition-colors"
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-ink transition-colors"
                    >
                      Live <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[14px] leading-relaxed text-muted mt-3 mb-4 max-w-2xl">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-faint border border-line rounded px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
