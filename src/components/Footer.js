// Importing from react-icons for social media icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

/**
 * Footer component
 * Displays at the bottom of all pages with social links and copyright
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Links */}
        <div className="footer-social">
          <a 
            href="https://github.com" 
            className="footer-social-link" 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com" 
            className="footer-social-link" 
            target="_blank" 
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com" 
            className="footer-social-link" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="footer-social-link" 
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {currentYear} Enrique Saracho</p>
        </div>

        {/* Additional Info */}
        <div className="footer-info">
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
