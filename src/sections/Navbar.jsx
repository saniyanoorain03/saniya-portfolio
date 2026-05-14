function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B1120]/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-[#C6A87D]">
          Saniya D
        </h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar