import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg text-ink font-body transition-colors duration-300">
      <Nav theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}