import { Moon, Sun } from "lucide-react";

const links = [
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ theme, toggleTheme }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
  onClick={toggleTheme}
  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
>
  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
</button>
        <nav className="flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors font-mono"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
