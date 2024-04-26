// Importing project component.
import { ProjectPage as Project } from "../components/Project";

// Page: Checkers Pizza project page.
export default function Portfolio() {
  const images = [
    require("../images/portfolio/portfolio-about.jpg"),
    require("../images/portfolio/portfolio-skills.jpg"),
    require("../images/portfolio/portfolio-projects.jpg"),
  ];

  return (
    <div>
      <Project
        img={images}
        title="Portfolio Website"
        desc="I built this porfolio with React. The primary objectives were to make it simple to understand, navigate and easy for me to update. This was achievable thanks to React components, icons, react-router-dom, and JSX flexible code. The home page containes three components/sections, one for my information and links, another one for my skills and finally the projects part. Each project has a page of its own (like this one) with links to the project or code."
        btn1={"https://github.com/EnriqueSaracho/portfolio_03"}
        btn1Text={"See Code"}
        field="Front-End Web development"
        skills={["HTML", "CSS", "JavaScript", "React"]}
      />
    </div>
  );
}
