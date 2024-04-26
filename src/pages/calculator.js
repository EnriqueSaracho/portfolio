// Importing project component.
import { ProjectPage as Project } from "../components/Project";

// Page: Notebook Calculator project page.
export default function Calculator() {
  const images = [
    require("../images/calculator/calculator-comp.jpg"),
    require("../images/calculator/calculator-comp2.jpg"),
    require("../images/calculator/calculator-comp3.jpg"),
  ];

  return (
    <div>
      <Project
        img={images}
        title="Notebook Calculator"
        desc={
          "This calculator not only performs basic arithmetic operations but also keeps a detailed record of every calculation until manually cleared. The operations are conveniently displayed in a customizable sheet, allowing users to modify and update calculations as needed.\nWhether you're a student, professional, or simply someone who values precision and flexibility in calculations, this calculator with its unique tracking and modification features is designed to meet your diverse needs."
        }
        btn1={"https://enriquesaracho.github.io/calculator/"}
        btn1Text={"See App"}
        btn2={"https://github.com/EnriqueSaracho/calculator"}
        btn2Text={"See Code"}
        field="Front-End Web development"
        skills={["HTML", "CSS", "JavaScript"]}
      />
    </div>
  );
}
