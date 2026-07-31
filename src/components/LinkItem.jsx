export default function LinkItem({ href, name, desc, external }) {
  return (
    <div className="mb-4 last:mb-0">
      <a
        className="ulink text-[15px]"
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {name}
      </a>
      <div className="mt-0.5 text-sm leading-snug text-muted">{desc}</div>
    </div>
  )
}
