import "./style.sass"
import { projects } from "@/data/projects"
import { ProjectArticle } from "../ArticleProject"

export const ProjectsList = () => {
    return (
        <section id="projects-list">
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-wrapper">
                        <ProjectArticle {...project} />
                    </div>
                ))}
            </div>
        </section>
    )
}