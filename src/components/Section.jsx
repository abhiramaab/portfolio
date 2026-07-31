export default function Section({ label, children }) {
  return (
    <div className="grid grid-cols-1 gap-2 border-t border-line py-6 first:border-t-0 md:grid-cols-[92px_1fr] md:gap-8 md:py-7">
      <div className="text-[13px] tabular-nums text-muted md:pt-0.5">{label}</div>
      <div>{children}</div>
    </div>
  )
}
