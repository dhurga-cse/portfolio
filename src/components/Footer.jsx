import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-white/5 py-8 px-6 text-center">
      <p className="font-mono text-violet-400 font-bold text-lg mb-3">Dhurga G</p>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/dhurga-cse" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors text-xl"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/dhurga-g-21932b328/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors text-xl"><FaLinkedin /></a>
        <a href="mailto:dhurga.g2024cse@sece.ac.in" className="text-slate-400 hover:text-violet-400 transition-colors text-xl"><HiMail /></a>
      </div>
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} Dhurga. Built with React & Tailwind CSS.
      </p>
    </footer>
  )
}
