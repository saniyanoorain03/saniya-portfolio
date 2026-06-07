function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#020617] text-white px-10 py-20"
    >
      <h1 className="text-5xl font-bold mb-10 text-center">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border border-yellow-200 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Resume Analyzer
          </h2>

          <p className="text-gray-300">
            AI-powered resume analysis tool using Flask,
            TF-IDF, cosine similarity, and NLP techniques.
          </p>
        </div>

        <div className="border border-yellow-200 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Real-Time Chat App
          </h2>

          <p className="text-gray-300">
            MERN + Socket.io based chat application
            with authentication and live messaging.
          </p>
        </div>

        <div className="border border-yellow-200 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            ProductHub
          </h2>

          <p className="text-gray-300">
            MERN Stack Product Management System with CRUD
            operations, inventory management, REST API
            integration, and MongoDB database management.
          </p>
        </div>

        <div className="border border-yellow-200 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Contact Manager
          </h2>

          <p className="text-gray-300">
            CRUD-based contact management system using
            MERN stack with organized data handling.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Projects