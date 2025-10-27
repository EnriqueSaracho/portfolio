import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";

/**
 * Home component.
 * Main page of the app. Displays different sections (components).
 */
export default function Home() {
  return (
    <div className="Home">
      <About />
      <Projects />
      <Experiences />
    </div>
  );
}
