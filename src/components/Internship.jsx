import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa'
import { HiChip } from 'react-icons/hi'

const internships = [
  {
    role: 'Full Stack MERN Intern',
    company: 'Web Development Internship',
    period: '2025',
    link: '#',
    description: 'Developed and deployed a MERN-based web application with React frontend, Node.js/Express backend, MongoDB database, and JWT authentication. Managed API development, integration, and production deployment on Render.',
    skills: [
      { cat: 'Frontend', items: ['React.js', 'Responsive UI', 'React Hooks'] },
      { cat: 'Backend', items: ['Node.js', 'Express.js', 'RESTful API', 'JWT Auth'] },
      { cat: 'Database', items: ['MongoDB Atlas'] },
    ],
  },
]

export default function Internship() {
  return (
    <section id="internship" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Internship <span className="gradient-text">Experience</span></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded mb-10" />

        <div className="flex flex-col gap-6">
          {internships.map(({ role, company, period, link, description, skills }) => (
            <div key={role} className="relative bg-surface border border-violet-500/20 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 group">
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <FaBriefcase className="text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{role}</h3>
                    <p className="text-slate-400 text-sm">{company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-3 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-300 rounded-full">{period}</span>
                  <a href={link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

              {/* Skills acquired */}
              <div className="border-t border-white/5 pt-5">
                <div className="flex items-center gap-2 mb-3">
                  <HiChip className="text-violet-400" />
                  <span className="text-xs text-slate-400 uppercase tracking-widest">Skills Acquired</span>
                </div>
                <div className="flex flex-col gap-3">
                  {skills.map(({ cat, items }) => (
                    <div key={cat} className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-500 w-16 shrink-0">{cat}:</span>
                      {items.map((item) => (
                        <span key={item} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow line */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
