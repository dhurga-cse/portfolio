import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, FaPython } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiDjango, SiPostman, SiMysql, SiCplusplus, SiC } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const categories = [
  {
    title: 'Languages',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'C', icon: <SiC className="text-blue-400" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
      { name: 'Java', icon: <FaJava className="text-orange-400" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-400" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
    ],
  },
  {
    title: 'Frameworks',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
      { name: 'Express.js', icon: <SiExpress className="text-slate-300" /> },
      { name: 'Django', icon: <SiDjango className="text-green-500" /> },
    ],
  },
  {
    title: 'Database & Tools',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'SQL', icon: <SiMysql className="text-blue-400" /> },
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-400" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'VS Code', icon: <VscVscode className="text-blue-400" /> },
    ],
  },
  {
    title: 'Core Concepts',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'DSA', icon: <span className="text-pink-400 font-bold text-sm">DSA</span> },
      { name: 'OOP', icon: <span className="text-rose-400 font-bold text-sm">OOP</span> },
      { name: 'DBMS', icon: <span className="text-fuchsia-400 font-bold text-sm">DB</span> },
      { name: 'DAA', icon: <span className="text-purple-400 font-bold text-sm">DAA</span> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Tech <span className="gradient-text">Stack</span></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ title, color, skills }, i) => (
            <div
              key={title}
              className="bg-surface border border-white/5 rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${color} text-white mb-5`}>
                {title}
              </div>
              <div className="flex flex-col gap-3">
                {skills.map(({ name, icon }) => (
                  <div key={name} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="text-lg w-5 flex items-center justify-center">{icon}</span>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
