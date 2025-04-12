import "./style.sass"
import { projects } from "@/data/projects"
import { ProjectArticle } from "../ArticleProject"

export const ProjectsContainer = () => {
    return (
        <section id="projects-container">
            <h2>Projects</h2>

            <p>
                Get to know my projects that I have done, implementing all the technologies that I master and that I am learning.
            </p>
            <br/>
            <br/>

            {projects.map((project) => (
                <div key={project.title} className="project-wrapper">
                    <ProjectArticle {...project} />
                    <br />
                    <hr />
                    <br />
                </div>
            ))}

            <p>
                Made with 💜 by Gustavo Henrique
            </p>
        </section>
    )
}