import { useEffect, useState } from 'react'

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('theme-switch')
    root.classList.toggle('dark', darkMode)

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.remove('theme-switch'))
    })

    return () => cancelAnimationFrame(frame)
  }, [darkMode])

  return { darkMode, setDarkMode }
}
