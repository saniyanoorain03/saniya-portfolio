const projects = [
  {
    title: 'Resume Analyzer',
    description:
      'Built using Flask, TF-IDF, and cosine similarity for resume-job matching and skill analysis.',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'MERN stack chat application using Socket.io for real-time messaging.',
  },
  {
    title: 'AI Story Generator',
    description:
      'AI-powered SaaS application for generating personalized stories.',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-[#C6A87D] mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 p-8 rounded-3xl hover:border-[#C6A87D] transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects