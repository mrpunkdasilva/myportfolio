'use client'

import './style.sass'
import { skillCategories } from '@/data/skills'

export const SkillsSection = () => {
    return (
        <section className="skills-section">
            <div className="section-header">
                <h2>Skills & Technologies</h2>
                <p>Technologies I've been working with recently</p>
            </div>

            <div className="skills-container">
                {skillCategories.map((category) => (
                    <div key={category.name} className="skill-category">
                        <div className="category-header">
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                        </div>
                        <div className="skills-grid">
                            {category.skills.map((tech) => (
                                <div key={tech.id} className="skill-card">
                                    <div className="skill-icon">
                                        {tech.icon}
                                    </div>
                                    <div className="skill-info">
                                        <h4>{tech.name}</h4>
                                        <span className="skill-level">{tech.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}