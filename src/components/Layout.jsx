import { Github, Mail, Moon, Sun } from 'lucide-react'
import { navSections } from '../data'

export default function Layout({ darkMode, setDarkMode, children }) {
  return (
    <div className="mx-auto grid min-h-screen max-w-[940px] grid-cols-1 px-6 md:grid-cols-[160px_1fr]">
      <aside className="sticky top-0 z-20 border-b border-line bg-[color:var(--bg)]/95 pt-5 pb-4 backdrop-blur-sm md:static md:z-auto md:border-b-0 md:bg-transparent md:pt-0 md:pb-0 md:py-14 md:pr-7 md:backdrop-blur-none">
        <div className="flex flex-col gap-4 md:sticky md:top-14 md:gap-5">
          <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3 md:flex md:flex-col md:gap-2.5">
            {navSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-[13px] leading-snug text-muted transition-colors hover:text-ink sm:text-sm"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex w-fit items-center gap-1.5 border-t border-line pt-4 text-[13px] text-muted transition-colors hover:text-ink sm:text-sm md:border-t-0 md:pt-0"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            {darkMode ? 'flashbang' : 'lights out'}
          </button>
        </div>
      </aside>

      <main className="pb-16 pt-6 md:border-l md:border-line md:py-14 md:pl-10 md:pt-14">
        {children}
      </main>
    </div>
  )
}

export function ElsewhereIcon({ label }) {
  if (label === 'GitHub') return <Github size={17} />
  if (label === 'Email') return <Mail size={17} />
  return null
}
