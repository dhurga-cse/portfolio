import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 animate-slide-up">
          <p className="font-mono text-violet-400 text-sm mb-3 tracking-widest">Hello, World! 👋</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            I'm <span className="gradient-text">Dhurga</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4">Full Stack Developer</h2>
          <p className="font-mono text-slate-400 text-sm md:text-base mb-8">
            MERN &nbsp;|&nbsp; Django &nbsp;|&nbsp; AI Projects &nbsp;|&nbsp; 280+ LeetCode
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
              <FaFileAlt /> Resume
            </a>
            <a href="https://github.com/dhurga-cse" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline flex items-center gap-2">
              <HiMail /> Contact
            </button>
          </div>

          {/* Social row */}
          <div className="flex gap-5 mt-8">
            <a href="https://github.com/dhurga-cse" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-400 text-xl transition-colors"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/dhurga-g-21932b328/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-400 text-xl transition-colors"><FaLinkedin /></a>
            <a href="mailto:dhurga.g2024cse@ac.in" className="text-slate-400 hover:text-violet-400 text-xl transition-colors"><HiMail /></a>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0 animate-float">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 blur-md opacity-60" />
            <div className="relative w-full h-full rounded-full border-2 border-violet-500/50 overflow-hidden bg-surface flex items-center justify-center">
              <img
                src="/profile.jpeg"
                alt="Dhurga"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
