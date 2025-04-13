'use client'

import './style.sass'
import { projects } from '@/data/projects'
import { ProjectArticle } from '../ArticleProject'

export const FeaturedProjects = () => {
    const featuredProjects = projects.slice(0, 3)

    return (
        <section className="featured-projects">
            <div className="section-header">
                <h2>Featured Projects</h2>
                <a href="/projects" className="view-all">
                    View All Projects
                </a>
            </div>

            <div className="projects-grid">
                {featuredProjects.map((project) => (
                    <div key={project.title} className="project-card">
                        <ProjectArticle {...project} isFeatured={true} />
                    </div>
                ))}
            </div>
        </section>
    )
}