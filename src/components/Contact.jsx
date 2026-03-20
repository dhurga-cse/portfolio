import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const contacts = [
  {
    icon: <HiMail className="text-3xl text-violet-400" />,
    label: 'Email',
    value: 'dhurga.g2024cse@sece.ac.in',
    href: 'mailto:dhurga.g2024cse@sece.ac.in',
  },
  {
    icon: <FaLinkedin className="text-3xl text-blue-400" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhurga-g-21932b328/',
    href: 'https://www.linkedin.com/in/dhurga-g-21932b328/',
  },
  {
    icon: <FaGithub className="text-3xl text-slate-300" />,
    label: 'GitHub',
    value: 'github.com/dhurga-cse',
    href: 'https://github.com/dhurga-cse',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Get In <span className="gradient-text">Touch</span></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded mb-4 mx-auto" />
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          I'm open to internships, collaborations, and exciting projects. Feel free to reach out — I'd love to connect!
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contacts.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="bg-surface border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-3 card-hover group"
            >
              {icon}
              <p className="text-xs text-slate-500 uppercase tracking-widest">{label}</p>
              <p className="text-slate-300 text-sm group-hover:text-violet-400 transition-colors font-medium">{value}</p>
            </a>
          ))}
        </div>

        <a href="mailto:dhurga@email.com" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3">
          <HiMail className="text-lg" /> Say Hello 👋
        </a>
      </div>
    </section>
  )
}
