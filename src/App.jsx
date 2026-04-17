import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CurrentlyBuilding from './components/CurrentlyBuilding'
import Roadmap from './components/Roadmap'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Scroll reveal — watches all .reveal elements across the page
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 90)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <Hero />
      <CurrentlyBuilding />
      <Roadmap />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
