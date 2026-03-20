import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = ['About', 'Skills', 'Internship', 'Projects', 'Achievements', 'Certificates', 'Coding', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-xl font-bold gradient-text cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Dhurga G
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className="text-slate-400 hover:text-violet-400 transition-colors duration-200 text-sm font-medium">
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-300 text-2xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-slate-300 hover:text-violet-400 text-left py-1 transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
