import Layout from './components/Layout'
import Home from './components/Home'
import useTheme from './hooks/useTheme'

export default function App() {
  const { darkMode, setDarkMode } = useTheme()

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <Home />
    </Layout>
  )
}
