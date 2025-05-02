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
    <div className="component">
      {/* Title */}
      <h2 className="title">
        Hi, I'm <span className="high-light-text">Enrique</span>
      </h2>

      <div className="typewriter-1">
        <Typewriter
          options={{
            wrapperClassName: "",
            cursorClassName: "tw-cursor-1",
            delay: 50,
            deleteSpeed: 5,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'But most people call me <span class="high-light-text">Maximus Decimus Meridius, commander of the Armies of the North, general of the Felix Legions, loyal servant to the true emperor Marcus Aurelius.</span>'
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(1000)
              .deleteChars(145)
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .pauseFor(500)
              .typeString(' <span class="high-light-text">Kiki</span> ')
              .start();
          }}
        />
      </div>

      {/* Info */}
      <p className="about-text">
        Enrique Saracho Felix <br></br>
        Industrial Engineering / Full Stack Software Developer<br></br>
        Vancouver, BC. <br></br>
        enriquesarachofelix@gmail.com <br></br>
        +1 (236) 863-5617
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
      <div className="socials">
        <a
          href="https://github.com/EnriqueSaracho"
          className="icon-a-tag"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/enrique-saracho-felix/"
          className="icon-a-tag"
          target="_blank"
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
