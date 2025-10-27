// Importing Experience component.
import { ProjectThumbnail as Project } from "./Project";
import { Experience } from "./Experience";

/**
 * Experiences section component.
 */
export default function Experiences() {
  return (
    <div className="container2" id="experience">
      {/* Title */}
      <h2 className="title">Experience</h2>

      {/* Projects list */}
      <div className="experiences">
        <Experience
          title="ECH Technologies"
          date="Feb 2022 - Mar 2022"
          role={"Software developer Intern"}
          desc1={
            "Populated and optimized a PostgreSQL relational database schema with team developers, improving data accessibility and code testing capabilities."
          }
          desc2={
            "Configured a Linux development environment and installed tools (PostgreSQL, Git, VSCode) via command line."
          }
        />
        <Experience
          title="Langara Hacks! 2024"
          date="Sep 2024"
          role={"Participant, ✓Third Place Winner, ✓Best Beginner Project"}
          desc1={
            "Created an app that utilizes an AI audio separator model to isolate instrumental tracks from the original audio and identify lyrics, converting any YouTube video into a karaoke version."
          }
          desc2={
            "The application consists of two backend servers: one built with Python using MDX-Net audio processing to isolate the instrumental track, and another in Node.js to extract lyrics from the audio. The frontend is built with React and styled using Tailwind CSS."
          }
          linkTitle={"Karaoke App"}
          url={"https://devpost.com/software/karaoke-app"}
        />
        <Experience
          title="Hack Nights"
          date="May 2024 - May 2025"
          role={"Participant"}
          desc1={
            "Participated in weekly coding sessions hosted by the Langara College Computer Science Club, working on personal and group software development projects."
          }
          desc2={
            "Implemented React and Tailwind CSS, along with Node.js, Express.js, MongoDB, and data fetched from the IGDB API to create my full-stack project Ludi, a video game catalog where users can browse game details, rate titles, save favorites, and create personalized to-play queues."
          }
          linkTitle={"Ludi"}
          path={"https://ludi-eight.vercel.app/"}
        />
        <Experience
          title="Project 0"
          date="Mar 2025"
          role={"Participant"}
          desc1={
            "Tree of Life is a visualizer that maps the entire taxonomy of life on Earth, offering an interactive way to explore evolutionary relationships."
          }
          desc2={
            "We developed the project using Three.js for 3D visualization, JavaScript, and Express.js for the server-side logic."
          }
          linkTitle={"Tree of Life"}
          url={"https://devpost.com/software/tree-of-life-icv3oy"}
        />
        <Experience
          title="Outlier"
          date="Oct 2024 - Present"
          role={"AI Trainer"}
          desc1={
            "Enhanced AI model performance by testing and intentionally challenging it with complex constraints in prompts, then refining guidance to improve response accuracy and adaptability."
          }
          desc2={
            "Evaluated model outputs based on instruction adherence, truthfulness, completeness, relevance, safety, and stylistic quality, contributing to consistent model improvements across key performance areas."
          }
        />
      </div>
    </div>
  );
}
