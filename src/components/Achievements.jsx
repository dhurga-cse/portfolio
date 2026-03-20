import { FaTrophy, FaRocket, FaBrain, FaFlask } from 'react-icons/fa'

const achievements = [
  {
    icon: <FaTrophy className="text-yellow-400 text-2xl" />,
    title: 'Finalist — Reverse Coding X',
    org: 'Shaastra 2026, IIT Madras',
    year: '2026',
    desc: 'Selected as a finalist in Reverse Coding X at Shaastra, the prestigious annual technical festival of IIT Madras.',
    color: 'border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-yellow-500/10',
    badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    glow: 'from-yellow-500/10',
  },
  {
    icon: <FaFlask className="text-cyan-400 text-2xl" />,
    title: 'Finalist — Quantathon',
    org: 'Shaastra 2026, IIT Madras',
    year: '2026',
    desc: 'Qualified as a finalist in Quantathon at Shaastra 2026, competing against top engineering students across India.',
    color: 'border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/10',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    glow: 'from-cyan-500/10',
  },
  {
    icon: <FaRocket className="text-violet-400 text-2xl" />,
    title: 'Hackathon Participant',
    org: 'Coimbatore Institute of Technology',
    year: '2026',
    desc: 'Participated in a national-level hackathon at CIT, building innovative solutions under tight deadlines.',
    color: 'border-violet-500/30 hover:border-violet-500/60 hover:shadow-violet-500/10',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    glow: 'from-violet-500/10',
  },
  {
    icon: <FaBrain className="text-pink-400 text-2xl" />,
    title: 'Tata Crucible Campus Quiz',
    org: 'Tata Group',
    year: '2025',
    desc: 'Participated in the prestigious Tata Crucible Campus Quiz, one of India\'s largest and most competitive business quizzes.',
    color: 'border-pink-500/30 hover:border-pink-500/60 hover:shadow-pink-500/10',
    badge: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    glow: 'from-pink-500/10',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Achievements</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map(({ icon, title, org, year, desc, color, badge, glow }, i) => (
            <div
              key={title}
              className={`relative bg-surface border ${color} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden group`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Background glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${glow} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {icon}
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badge}`}>{year}</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
              <p className="text-violet-400 text-xs font-medium mb-3">{org}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
