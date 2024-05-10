// Importing Project component.
import { ProjectThumbnail as Project } from "./Project";

/**
 * Projects component.
 */
export default function Projects() {
  return (
    <div className="component container2">
      {/* Title */}
      <h2 className="title">Projects</h2>

      {/* Projects list */}
      <div className="projects">
        <Project
          img={require("../images/game-list/game-list.jpg")}
          title="Game Rating App"
          field="Full-Stack Web development"
          desc={"A video game catalog with cool features."}
          skills={["mongoDB", "Express.js", "React", "Node.js"]}
          path="/portfolio/game-list"
        />
        <Project
          img={require("../images/checkers/checkers.jpg")}
          title="Checkers Pizza"
          field="Front-End Web development"
          desc="Web Development I course project. It's a website for a fictional pizza place called Checkers!"
          skills={["HTML", "CSS", "JavaScript"]}
          path="/portfolio/checkers"
        />
        <Project
          img={require("../images/calculator/calculator.jpg")}
          title="Notebook Calculator"
          field="Front-End Web development"
          desc="This calculator keeps track of operations and is able to modify them as needed."
          skills={["HTML", "CSS", "JavaScript"]}
          path="/portfolio/calculator"
        />
        <Project
          img={require("../images/portfolio/portfolio.jpg")}
          title="Portfolio Website"
          field="Front-End Web development"
          desc="This Portfolio! Simple and flexible with project pages and links."
          skills={["React", "CSS"]}
          path="/portfolio/portfolio"
        />
      </div>
    </div>
  );
}
