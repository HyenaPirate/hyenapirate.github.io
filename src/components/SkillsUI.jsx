import "../styles/SkillsUI.css";

function Skill({ name }) {
  return (
    <div className="skill-container">
      <h1 className="skill-name">{name}</h1>
    </div>
  );
}

export function SkillSet({ setTitle, skills }) {
  return (
    <div className="skillset-container">
      <h1 className="skillset-title">{setTitle}</h1>
      <div className="skillset-list">
        {skills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}
