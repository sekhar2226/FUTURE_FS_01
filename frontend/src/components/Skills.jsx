import {
  FaPython,
  FaReact,
  FaJava,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";

function Skills() {

  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "React", icon: <FaReact /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Git", icon: <FaGitAlt /> }
  ];

  return (
    <section id="skills" className="container py-5">
      <h2>Skills</h2>

      <div className="row">
        {skills.map((skill) => (
          <div className="col-md-3 mb-4" key={skill.name}>
            <div className="skill-card text-center">
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h5>{skill.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;