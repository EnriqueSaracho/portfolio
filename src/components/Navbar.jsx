import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side */}
      <div className="navbar__brand">Kiki</div>

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
