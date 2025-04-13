'use client'

import './style.sass'
import { Project } from '@/data/projects'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useState } from 'react'

export const ProjectArticle = ({ 
    title, 
    description, 
    technologies, 
    challenges, 
    solutions, 
    keyFeatures, 
    learnings, 
    link, 
    githubLink,
    isFeatured 
}: Project) => {
    const [activeTab, setActiveTab] = useState<'features' | 'challenges' | 'learnings'>('features')

    return (
        <article className={`project-article ${isFeatured ? 'featured' : ''}`}>
            <div className="project-header">
                <h3>{title}</h3>
                <div className="project-links">
                    {link && (
                        <a 
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            title="Live Demo"
                        >
                            <FiExternalLink />
                        </a>
                    )}
                    {githubLink && (
                        <a 
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            title="View Code"
                        >
                            <FiGithub />
                        </a>
                    )}
                </div>
            </div>

            <p className="description">{description}</p>

            <div className="technologies">
                {technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>

            <div className="project-tabs">
                <button 
                    className={activeTab === 'features' ? 'active' : ''}
                    onClick={() => setActiveTab('features')}
                >
                    Features
                </button>
                <button 
                    className={activeTab === 'challenges' ? 'active' : ''}
                    onClick={() => setActiveTab('challenges')}
                >
                    Challenges
                </button>
                <button 
                    className={activeTab === 'learnings' ? 'active' : ''}
                    onClick={() => setActiveTab('learnings')}
                >
                    Learnings
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'features' && (
                    <ul className="features-list">
                        {keyFeatures.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                )}
                
                {activeTab === 'challenges' && (
                    <div className="challenges-solutions">
                        {challenges.map((challenge, index) => (
                            <div key={challenge} className="challenge-solution-pair">
                                <div className="challenge">
                                    <h5>Challenge:</h5>
                                    <p>{challenge}</p>
                                </div>
                                <div className="solution">
                                    <h5>Solution:</h5>
                                    <p>{solutions[index]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'learnings' && (
                    <ul className="learnings-list">
                        {learnings.map((learning) => (
                            <li key={learning}>{learning}</li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    )
}