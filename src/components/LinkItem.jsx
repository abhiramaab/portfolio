export default function LinkItem({ href, name, desc, docs, external }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <a
          className="ulink text-[15px]"
          href={href}
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          {name}
        </a>
        {docs && (
          <a
            href={docs}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-muted underline decoration-line hover:text-ink"
          >
            [Docs]
          </a>
        )}
      </div>
      <div className="mt-0.5 text-sm leading-snug text-muted">{desc}</div>
    </div>
  )
}
