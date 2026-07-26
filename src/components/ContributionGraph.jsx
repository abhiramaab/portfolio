import { contributionLevels, contributionsStart, contributionsTotal } from '../data'

const LEVEL_COLOR = ['#0F0F11', '#123A2E', '#166534', '#22A759', '#3EE87F']
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function buildWeeks() {
  const start = new Date(contributionsStart + 'T00:00:00Z')
  const days = contributionLevels.map((level, i) => {
    const d = new Date(start)
    d.setUTCDate(start.getUTCDate() + i)
    return { date: d, level }
  })

  const weeks = []
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7))
  }
  return weeks
}

function monthLabels(weeks) {
  const labels = []
  let lastMonth = -1
  weeks.forEach((week, i) => {
    const month = week[0].date.getUTCMonth()
    if (month !== lastMonth) {
      labels.push({ index: i, label: MONTH_NAMES[month] })
      lastMonth = month
    }
  })
  return labels
}

export default function ContributionGraph() {
  const weeks = buildWeeks()
  const months = monthLabels(weeks)

  return (
    <div className="mt-10 overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="flex text-[10px] font-mono text-faint mb-1.5 pl-1">
          {weeks.map((_, i) => {
            const m = months.find((mo) => mo.index === i)
            return (
              <div key={i} style={{ width: '13px' }}>
                {m ? m.label : ''}
              </div>
            )
          })}
        </div>
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) => (
                <div
                  key={di}
                  title={`${day.date.toISOString().slice(0, 10)} · level ${day.level}`}
                  className="w-[10px] h-[10px] rounded-[2px]"
                  style={{ backgroundColor: LEVEL_COLOR[day.level] }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className="text-[11px] font-mono text-faint uppercase tracking-wider">
            {contributionsTotal} contributions
          </p>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-faint">
            <span>Less</span>
            {LEVEL_COLOR.map((c) => (
              <span key={c} className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: c }} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  )
}
