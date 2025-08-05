'use client'

import { experiences } from '@/data/experiences'
import './style.sass'

export const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <h2>
          <span className="header-decorator">&lt;</span>
          Experience
          <span className="header-decorator">/&gt;</span>
          <span className="blink">_</span>
        </h2>
      </div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title} at {exp.company}</h3>
            <p className="period">{exp.period} | {exp.location}</p>
            <div className="star-details">
              {exp.star.map((detail, detailIndex) => (
                <p key={detailIndex}>
                  <strong>{detail.type}:</strong> {detail.description}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
