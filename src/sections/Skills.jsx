const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'MongoDB',
  'Flask',
  'Python',
  'Tailwind CSS',
  'REST APIs',
  'JWT',
  'GitHub',
  'NLP',
  'Machine Learning'
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-[#C6A87D] mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6 text-center hover:border-[#C6A87D] transition duration-300"
            >
              <p className="text-gray-200 font-medium">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills