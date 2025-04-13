import "./style.sass"
import { projects } from "@/data/projects"
import { ProjectArticle } from "../ArticleProject"

interface ProjectsContainerProps {
    filter?: string
    searchTerm?: string
}

export const ProjectsContainer = ({ filter = 'all', searchTerm = '' }: ProjectsContainerProps) => {
    const filteredProjects = projects.filter(project => {
        const matchesTech = filter === 'all' || 
            project.technologies.some(tech => 
                tech.toLowerCase().includes(filter.toLowerCase())
            )
        
        const matchesSearch = 
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech => 
                tech.toLowerCase().includes(searchTerm.toLowerCase())
            )

        return matchesTech && matchesSearch
    })

    return (
        <section id="projects-container">
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.title} className="project-wrapper">
                        <ProjectArticle {...project} />
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="no-results">
                    <h3>No projects found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            )}
        </section>
    )
}