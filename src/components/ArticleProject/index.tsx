'use client'

import './style.sass'
import { Project } from '@/data/projects'

export const ProjectArticle = ({ 
    title, 
    description, 
    technologies, 
    challenges, 
    solutions, 
    keyFeatures, 
    learnings, 
    link, 
    githubLink 
}: Project) => {
    return (
        <article className="project-article">
            <div className="project-info">
                <h3>{title}</h3>
                <p className="description">{description}</p>

                <div className="section">
                    <h4>Technologies Used</h4>
                    <div className="tags">
                        {technologies.map((tech) => (
                            <span key={tech} className="tag">{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h4>Key Features</h4>
                    <ul>
                        {keyFeatures.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="section">
                    <h4>Challenges & Solutions</h4>
                    <div className="challenges-solutions">
                        <div>
                            <h5>Challenges</h5>
                            <ul>
                                {challenges.map((challenge) => (
                                    <li key={challenge}>{challenge}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5>Solutions</h5>
                            <ul>
                                {solutions.map((solution) => (
                                    <li key={solution}>{solution}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h4>Key Learnings</h4>
                    <ul>
                        {learnings.map((learning) => (
                            <li key={learning}>{learning}</li>
                        ))}
                    </ul>
                </div>

                <div className="project-actions">
                    {link && (
                        <a 
                            className="btn live-btn" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href={link}
                        >
                            Live Demo
                        </a>
                    )}
                    {githubLink && (
                        <a 
                            className="btn github-btn" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href={githubLink}
                        >
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}