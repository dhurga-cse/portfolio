import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="bg-primary text-slate-200 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Internship />
      <Projects />
      <Achievements />
      <Certificates />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  )
}
