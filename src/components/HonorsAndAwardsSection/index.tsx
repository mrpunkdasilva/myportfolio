'use client'

import { awards } from '@/data/awards'
import './style.sass'
import { FiArrowUpRight } from 'react-icons/fi'

export const HonorsAndAwardsSection = () => {
  return (
    <section className="honors-and-awards-section" id="honors-and-awards">
      <div className="section-header">
        <h2>
          <span className="header-decorator">&lt;</span>
          Honors & Awards
          <span className="header-decorator">/&gt;</span>
          <span className="blink">_</span>
        </h2>
      </div>
      <div className="awards-list">
        {awards.map((award, index) => (
          <a 
            key={index} 
            href={award.linkedinLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="award-item-link"
          >
            <div className="award-item">
              <div className="award-content">
                <h3>
                  {award.title}
                  <FiArrowUpRight className="external-link-icon" />
                </h3>
                <p>{award.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
