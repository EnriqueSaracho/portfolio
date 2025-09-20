// Importing socials icons.
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocalPhone } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";

/**
 * About component.
 */
export default function About() {
  return (
    <div id="about" className="about">
      {/* Title */}
      <h2 className="about-title">
        Hi! I'm <span className="high-light-text">Enrique Saracho Felix</span>
      </h2>

      <div className="typewriter-1">
        <Typewriter
          options={{
            wrapperClassName: "",
            cursorClassName: "tw-cursor-1",
            delay: 100,
            deleteSpeed: 5,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString(
                'But most people call me <span class="high-light-text">Maximus Decimus Meridius</span>'
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(0)
              .deleteChars(24)
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .pauseFor(500)
              .typeString(' <span class="high-light-text">Kiki</span>')
              .start();
          }}
        />
      </div>

      {/* Info */}
      <p className="about-text">
        Industrial Engineer / Full Stack Software Developer<br></br>
        Vancouver, BC. <br></br>
      </p>

      {/* Curriculum */}
      {/* <a
        href={require("../files/Enrique_Saracho.pdf")}
        download="Enrique_Saracho.pdf"
        className="btn cv-btn"
      >
        CV <FaDownload />
      </a> */}

      {/* Links to social pages */}
      <div className="socials component">
        <a
          href="https://github.com/EnriqueSaracho"
          className="icon-a-tag"
          rel="noreferrer"
          title="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/enrique-saracho-felix/"
          className="icon-a-tag"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a
          href="mailto:enriquesarachofelix@gmail.com"
          className="icon-a-tag"
          title="Send mail"
        >
          <GrMail className="social-icon" />
        </a>
        <a href="tel:+1-236-863-5617" className="icon-a-tag" title="Call">
          <MdLocalPhone className="social-icon" />
        </a>
      </div>
    </div>
  );
}
