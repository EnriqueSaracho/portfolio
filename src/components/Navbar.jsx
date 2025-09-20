import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side */}
      <a href="/portfolio#about" className="navbar__brand">Kiki</a>

      {/* Right side */}
      <ul className="navbar__links">
        <li><a href="#project">Project</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
