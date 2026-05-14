function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#020617] text-white px-6 py-24"
    >

      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-[#C6A87D] mb-8">
          Contact Me
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          Let’s connect and build something meaningful.
        </p>

        <div className="space-y-6 text-base md:text-xl">

          <p>
            <span className="text-[#C6A87D] font-semibold">
              Email:
            </span>{" "}

            <a
              href="mailto:saniyad31@gmail.com"
              className="hover:text-[#C6A87D] transition"
            >
              saniya431@gmail.com
            </a>
          </p>

          <p>
            <span className="text-[#C6A87D] font-semibold">
              GitHub:
            </span>{" "}

            <a
              href="https://github.com/saniyanoorain03"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C6A87D] transition"
            >
              github.com/saniyanoorain03
            </a>
          </p>

          <p>
            <span className="text-[#C6A87D] font-semibold">
              LinkedIn:
            </span>{" "}

            <a
              href="https://www.linkedin.com/in/saniya--d"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C6A87D] transition"
            >
              linkedin.com/in/saniya--d
            </a>
          </p>

        </div>

      </div>
    </section>
  )
}

export default Contact