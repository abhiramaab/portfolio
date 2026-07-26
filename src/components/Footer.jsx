export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 py-8 border-t border-line">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-faint font-mono">
        <span>&copy; {year} A B Abhirama</span>
        <span>Built with React &amp; Tailwind</span>
      </div>
    </footer>
  )
}
