import './style.sass'

interface TechCategory {
  name: string
  techs: string[]
}

const techStack: TechCategory[] = [
  {
    name: "Frontend",
    techs: ["React", "Vue", "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap"]
  },
  {
    name: "Backend",
    techs: ["Node.js", "PHP", "Java", ".NET/C#"]
  },
  {
    name: "Database",
    techs: ["MySQL", "MongoDB"]
  },
  {
    name: "Tools",
    techs: ["Git", "GitHub", "VS Code", "Scrum"]
  }
]

export const TechStack = () => {
  return (
    <div className="tech-stack">
      <h3>Technical Skills</h3>
      
      <div className="tech-categories">
        {techStack.map((category) => (
          <div key={category.name} className="tech-category">
            <h4>{category.name}</h4>
            <div className="tech-items">
              {category.techs.map((tech) => (
                <span key={tech} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}