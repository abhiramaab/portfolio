import { Github, Mail, Moon, Sun } from 'lucide-react'
import { resume } from '../data'

function navClass(active, page) {
  return [
    'text-sm transition-colors',
    active === page ? 'text-ink' : 'text-muted hover:text-ink',
  ].join(' ')
}

export default function Layout({ darkMode, setDarkMode, children }) {
  return (
    <div className="mx-auto grid min-h-screen max-w-[940px] grid-cols-1 px-6 md:grid-cols-[140px_1fr]">
      <aside className="pt-10 md:py-14 md:pr-7">
        <div className="flex items-center justify-between md:sticky md:top-14 md:flex-col md:items-start md:gap-5">
          <nav className="flex gap-5 md:flex-col md:gap-2.5">
            <a className={navClass('home', 'home')} href="/" aria-current="page">
              Home
            </a>
            <a
              className="ulink text-sm"
              href={resume.href}
              target="_blank"
              rel="noreferrer"
            >
              Résumé
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            {darkMode ? 'flashbang' : 'lights out'}
          </button>
        </div>
      </aside>

      <main className="pb-16 pt-8 md:border-l md:border-line md:py-14 md:pl-10">
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
