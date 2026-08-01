import { useEffect, useState } from 'react'

const THEME_KEY = 'portfolio-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return true

  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'light') return false
    return true
  } catch {
    return true
  }
}

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('theme-switch')
    root.classList.toggle('dark', darkMode)

    try {
      localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light')
    } catch {
      // ignore storage errors
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', darkMode ? '#000000' : '#fdfdfc')

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.remove('theme-switch'))
    })

    return () => cancelAnimationFrame(frame)
  }, [darkMode])

  return { darkMode, setDarkMode }
}
