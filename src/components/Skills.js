// Importing SkillsIcon component.
import SkillsIcon from "./SkillsIcon";

/**
 * Skills component.
 */
export default function Skills() {
  return (
    <div className="component">
      {/* Title */}
      <h2 className="title">Skills</h2>

      {/* Skills */}
      <div className="skills">
        <SkillsIcon name="C++" />
        <SkillsIcon name="Java" />
        <SkillsIcon name="Python" />
        <SkillsIcon name="HTML" />
        <SkillsIcon name="CSS" />
        <SkillsIcon name="JavaScript" />
        <SkillsIcon name="Bootstrap" />
        <SkillsIcon name="mongoDB" />
        <SkillsIcon name="React" />
        <SkillsIcon name="Express.js" />
        <SkillsIcon name="Node.js" />
        <SkillsIcon name="PHP" />
        <SkillsIcon name="SQL" />
        <SkillsIcon name="PostreSQL" />
        <SkillsIcon name="MySQL" />
        <SkillsIcon name="VS Code" />
        <SkillsIcon name="Visual Studio" />
        <SkillsIcon name="Unity" />
        <SkillsIcon name="Git" />
        <SkillsIcon name="GitHub" />
        <SkillsIcon name="Docker" />
      </div>
    </div>
  );
}
