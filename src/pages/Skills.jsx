import { SkillSet } from "../components/SkillsUI";
import "../styles/Skills.css";
import SkillsDatabase from "../scripts/SkillsDatabase";

function Skills() {
  return (
    <div className="SkillsDiv">
      <div className="skills-catalog">
        {SkillsDatabase.map((category) => (
          <SkillSet
            key={category.title}
            setTitle={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
