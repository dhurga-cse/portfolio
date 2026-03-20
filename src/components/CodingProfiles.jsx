import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si'
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'

const profiles = [
  {
    icon: <SiLeetcode className="text-4xl text-yellow-400" />,
    platform: 'LeetCode',
    stat: '280+',
    label: 'Problems Solved',
    extra: 'Global Rank: 489,551',
    link: 'https://leetcode.com/u/dhurga_2024/',
    border: 'border-yellow-500/20 hover:border-yellow-500/50',
    glow: 'hover:shadow-yellow-500/10',
    bg: 'from-yellow-500/5',
  },
  {
    icon: <FaCode className="text-4xl text-green-400" />,
    platform: 'Skillrack',
    stat: '1380+',
    label: 'Problems Solved',
    extra: 'Rank: 11,063 · 15+ Certificates',
    link: 'http://www.skillrack.com/profile/514907/171756773b8fb0de775f20d5a44c4546fcf14a67',
    border: 'border-green-500/20 hover:border-green-500/50',
    glow: 'hover:shadow-green-500/10',
    bg: 'from-green-500/5',
  },
  {
    icon: <SiCodechef className="text-4xl text-amber-500" />,
    platform: 'CodeChef',
    stat: '580+',
    label: 'Problems Solved',
    extra: 'Global Rank: 108,351',
    link: 'https://www.codechef.com/users/dhurgacse',
    border: 'border-amber-500/20 hover:border-amber-500/50',
    glow: 'hover:shadow-amber-500/10',
    bg: 'from-amber-500/5',
  },
  {
    icon: <SiHackerrank className="text-4xl text-emerald-400" />,
    platform: 'HackerRank',
    stat: '1265',
    label: 'Total Points',
    extra: '5★ SQL · 3★ C · 3★ Python',
    link: 'https://www.hackerrank.com/profile/dhurga_g2024cse',
    border: 'border-emerald-400/20 hover:border-emerald-400/50',
    glow: 'hover:shadow-emerald-400/10',
    bg: 'from-emerald-400/5',
  },
]

export default function CodingProfiles() {
  return (
    <section id="coding" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Coding <span className="gradient-text">Profiles</span></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map(({ icon, platform, stat, label, extra, link, border, glow, bg }) => (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`group bg-surface border ${border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${glow} bg-gradient-to-b ${bg} to-transparent flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                {icon}
                <FaExternalLinkAlt className="text-slate-600 group-hover:text-slate-400 transition-colors text-sm mt-1" />
              </div>
              <p className="text-3xl font-extrabold text-white mb-1">{stat}</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">{label}</p>
              <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-violet-400 transition-colors">{platform}</h3>
              <p className="text-slate-500 text-xs mt-auto">{extra}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
