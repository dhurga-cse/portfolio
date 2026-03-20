import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Smart City Navigator',
    description: 'A Django web application using MongoDB and Leaflet.js for real-time route mapping, accessibility features, and smart urban mobility using OpenRouteService API.',
    tech: ['Python', 'Django', 'MongoDB', 'Leaflet.js', 'Bootstrap', 'JavaScript', 'OpenRouteService API'],
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    github: 'https://github.com/dhurga-cse/Smart_City_Navigator',
    live: '#',
    color: 'from-violet-500/20 to-blue-500/20',
    year: '2025',
  },
  {
    title: 'SeeSpeak',
    description: 'AI-powered assistive tool using YOLO, OpenCV, Tesseract OCR, and Face Recognition to detect objects, read text, and convert to speech — aiding visually impaired users.',
    tech: ['Python', 'OpenCV', 'YOLO', 'Tesseract OCR', 'Face Recognition', 'TTS'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    github: 'https://github.com/dhurga-cse/SeeSpeak',
    live: '#',
    color: 'from-cyan-500/20 to-emerald-500/20',
    year: '2025',
  },
  {
    title: 'WanderWise — Smart Travel Planner',
    description: 'A MERN stack web app that allows users to plan trips, optimize routes, track expenses, and get personalized hotel recommendations.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80',
    github: 'https://github.com/dhurga-cse/WanderWise',
    live: '#',
    color: 'from-pink-500/20 to-orange-500/20',
    year: '2026',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Featured <span className="gradient-text">Projects</span></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, tech, image, github, live, color, year }) => (
            <div key={title} className="group bg-surface border border-white/5 rounded-2xl overflow-hidden card-hover flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${color} to-transparent opacity-70`} />
                <span className="absolute top-3 right-3 text-xs px-2.5 py-1 bg-black/50 backdrop-blur-sm text-slate-300 rounded-full border border-white/10">
                  {year}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-3 border-t border-white/5">
                  <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400 transition-colors font-medium">
                    <FaGithub /> GitHub
                  </a>
                  {live !== '#' && (
                    <a href={live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
