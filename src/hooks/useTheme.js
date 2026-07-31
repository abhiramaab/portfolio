import { useEffect, useState } from 'react'

function getInitialTheme() {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('theme') === 'dark'
}

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('theme-switch')
    root.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
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
