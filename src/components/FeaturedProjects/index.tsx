'use client'

import './style.sass'
import { projects } from '@/data/projects'
import { ProjectArticle } from '../ArticleProject'
import { FloatingCubes } from './FloatingCubes'
import { useState } from 'react'
import { HoverModel } from './HoverModel'

export const FeaturedProjects = () => {
    const featuredProjects = projects.slice(0, 3).map(project => ({
        ...project,
        isFeatured: true
    }))

    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    return (
        <section className="featured-projects">
            <FloatingCubes />
            <div className="content-wrapper">
                <div className="section-header">
                    <div className="glitch-container">
                        <h2 data-text="FEATURED_PROJECTS">FEATURED_PROJECTS</h2>
                    </div>
                    <div className="cyber-line"></div>
                    <p>SELECT * FROM projects WHERE featured = true</p>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project) => (
                        <div 
                            key={project.title} 
                            className="project-card"
                            onMouseEnter={() => setHoveredCard(project.title)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="card-frame top"></div>
                            <div className="card-frame right"></div>
                            <div className="card-frame bottom"></div>
                            <div className="card-frame left"></div>
                            <HoverModel isVisible={hoveredCard === project.title} />
                            <ProjectArticle {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}