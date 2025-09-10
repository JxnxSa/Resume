import Bar from "./Bar";

function Skill() {
  const skills = [
    "Angular",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Bootstrap",
    "React.js",
  ];
  return (
    <div className="mt-3">
      <h2 style={{ color: "navy" }}>ทักษะ</h2>
      <Bar/>
      {skills.map((skill, index) => (
        <li key={index} style={{ marginBottom: "2px" }}>
          {skill}
        </li>
      ))}
    </div>
  );
}

export default Skill;
