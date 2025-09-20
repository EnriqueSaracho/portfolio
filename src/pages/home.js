import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

/**
 * Home component.
 * Main page of the app. Displays different sections (components).
 */
export default function Home() {
  return (
    <div className="Home">
        <About />
      <div className="container1">
        {/* <Skills /> */}
      </div>
      <Projects />
    </div>
  );
}
