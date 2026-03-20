export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">About <span className="gradient-text">Me</span></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded mb-8" />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-slate-400 leading-relaxed text-lg">
            I'm a <span className="text-violet-400 font-medium">first-year Computer Science Engineering student</span> with a deep passion for building full-stack web applications and AI-powered solutions. I love turning complex problems into clean, intuitive products — from crafting responsive UIs with React to architecting robust backends with Node.js and Django.
            <br /><br />
            When I'm not coding, I'm grinding LeetCode, participating in hackathons, or exploring the latest in machine learning and computer vision.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'LeetCode', value: '280+' },
              { label: 'Skillrack', value: '1300+' },
              { label: 'Projects', value: '5+' },
              { label: 'Hackathons', value: '3+' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-surface border border-violet-500/20 rounded-xl p-5 text-center card-hover">
                <p className="text-3xl font-bold gradient-text">{value}</p>
                <p className="text-slate-400 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
