import profile from '../assets/profile.jpg'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-[#C6A87D] mb-4 text-lg">
            Assalamualaikum, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Saniya D
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
            Full Stack & AI Enthusiast
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
            I build modern web applications, AI-powered tools,
            and meaningful digital experiences using MERN,
            Flask, and NLP technologies.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-[#C6A87D] text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition duration-300">
              View Projects
            </button>

            <button className="border border-[#C6A87D] text-[#C6A87D] px-6 py-3 rounded-xl hover:bg-[#C6A87D] hover:text-black transition duration-300">
              Download Resume
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-[#C6A87D] shadow-2xl shadow-[#C6A87D]/20">
            <img
              src={profile}
              alt="Saniya"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero