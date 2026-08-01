import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react'
import { navSections } from '../data'

function ThemeToggle({ darkMode, setDarkMode, className = '' }) {
  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex w-fit items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink ${className}`}
    >
      {darkMode ? <Sun size={14} /> : <Moon size={14} />}
      {darkMode ? 'flashbang' : 'lights out'}
    </button>
  )
}

function SidebarNav({ onNavigate, className = '' }) {
  return (
    <nav className={`flex flex-col gap-2.5 ${className}`}>
      {navSections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={onNavigate}
          className="text-sm text-muted transition-colors hover:text-ink"
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}

export default function Layout({ darkMode, setDarkMode, children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const closeOnScroll = () => setMenuOpen(false)

    window.addEventListener('scroll', closeOnScroll, { passive: true })
    window.addEventListener('wheel', closeOnScroll, { passive: true })
    window.addEventListener('touchmove', closeOnScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', closeOnScroll)
      window.removeEventListener('wheel', closeOnScroll)
      window.removeEventListener('touchmove', closeOnScroll)
    }
  }, [menuOpen])

  return (
    <div className="mx-auto grid min-h-screen max-w-[940px] grid-cols-1 px-6 md:grid-cols-[160px_1fr]">
      {/* Mobile header + hamburger menu */}
      <div className="sticky top-0 z-30 -mx-6 border-b border-line bg-[color:var(--bg)] px-6 py-4 md:hidden">
        <div className="flex items-center justify-between">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="inline-flex items-center justify-center text-muted transition-colors hover:text-ink"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-line pt-4">
            <SidebarNav onNavigate={closeMenu} />
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:block md:py-14 md:pr-7">
        <div className="sticky top-14 flex flex-col gap-5">
          <SidebarNav />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
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
  if (label === 'LinkedIn') return <Linkedin size={17} />
  if (label === 'Email') return <Mail size={17} />
  return null
}
