import { HiBadgeCheck } from 'react-icons/hi'
import { FaExternalLinkAlt } from 'react-icons/fa'

const certificates = [
  { title: 'Completion of CPP Training', issuer: 'IIT Bombay', year: '2025', color: 'text-orange-400', border: 'border-orange-500/20 hover:border-orange-500/50' },
  { title: 'SQL Certificate (Basic / Intermediate)', issuer: 'HackerRank', year: '2025', color: 'text-emerald-400', border: 'border-emerald-500/20 hover:border-emerald-500/50' },
  { title: 'Mastering DSA Using C and C++', issuer: 'Udemy', year: '2025', color: 'text-violet-400', border: 'border-violet-500/20 hover:border-violet-500/50' },
  { title: 'Completion of C Training', issuer: 'IIT Bombay', year: '2024', color: 'text-blue-400', border: 'border-blue-500/20 hover:border-blue-500/50' },
  { title: 'Top DBMS Interview Questions', issuer: 'CodeChef', year: '2024', color: 'text-amber-400', border: 'border-amber-500/20 hover:border-amber-500/50' },
  { title: 'C and C++ — Intermediate', issuer: 'Sololearn', year: '2025', color: 'text-cyan-400', border: 'border-cyan-500/20 hover:border-cyan-500/50' },
]

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Certificates</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map(({ title, issuer, year, color, border }, i) => (
            <div
              key={title}
              className={`group bg-surface border ${border} rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-3`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <HiBadgeCheck className={`text-2xl ${color} mt-0.5`} />
                <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">{year}</span>
              </div>
              <p className="text-slate-200 font-semibold text-sm leading-snug">{title}</p>
              <p className={`text-xs font-medium ${color}`}>{issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
