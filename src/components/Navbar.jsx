import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down (but not at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Generic function to handle navigation to any section
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false); // closing hamburger navbar

    if (location.pathname === "/portfolio") {
      // Already on home page, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll to the section
      navigate("/portfolio");
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Handle brand click (scroll to top or navigate to home)
  const handleBrandClick = (e) => {
    e.preventDefault();
    setMenuOpen(false); // closing hamburger navbar

    if (location.pathname === "/portfolio") {
      // Already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page
      navigate("/portfolio");
    }
  };

  return (
    <nav className={`navbar ${isVisible ? "navbar--visible" : "navbar--hidden"}`}>
      <div className="navbar__container">
        {/* Left side */}
        <a href="/portfolio#about" className="navbar__brand" onClick={handleBrandClick}>
          Kiki
        </a>

        {/* Right side */}
        <ul className="navbar__links">
          <li>
            <a href="/portfolio#projects" onClick={(e) => handleSectionClick(e, "projects")}>
              Projects
            </a>
          </li>
          {/* Add more sections here as needed */}
          {/* <li><a href="/portfolio#about" onClick={(e) => handleSectionClick(e, 'about')}>About</a></li> */}
          {/* <li><a href="/portfolio#skills" onClick={(e) => handleSectionClick(e, 'skills')}>Skills</a></li> */}
          {/* <li><a href="/portfolio#contact" onClick={(e) => handleSectionClick(e, 'contact')}>Contact</a></li> */}
        </ul>

        {/* Hamburger button only < 768px */}
        {/* <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button> */}
        <button className={`navbar__toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </button>

        {/* Full screen overlay menu */}
        <div className={`navbar__overlay ${menuOpen ? "open" : ""}`}>
          <ul className="navbar__overlay-links">
            <li>
              <a href="/portfolio#projects" onClick={(e) => handleSectionClick(e, "projects")}>
                Projects
              </a>
            </li>
            {/* <li>
            <a href="/portfolio#about" onClick={(e) => handleSectionClick(e, "about")}>
            About
            </a>
          </li> */}
            {/* <li>
            <a href="/portfolio#skills" onClick={(e) => handleSectionClick(e, "skills")}>
              Skills
            </a>
          </li> */}
            {/* <li>
            <a href="/portfolio#contact" onClick={(e) => handleSectionClick(e, "contact")}>
              Contact
            </a>
          </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
