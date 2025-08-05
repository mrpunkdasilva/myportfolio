'use client'

import './style.sass'
import { FiTerminal, FiCode, FiDatabase, FiLayers } from 'react-icons/fi'
import { DownloadCV } from '../DownloadCV'

export const AboutMe = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-info')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="about-me" id={"about"}>
      <div className="about-content">
        <div className="section-header">
          <h2>
            <span className="header-decorator">&lt;</span>
            About_Me
            <span className="header-decorator">/&gt;</span>
            <span className="blink">_</span>
          </h2>
        </div>

        <div className="bio">
          <div className="bio-header">
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Available for hire</span>
            </div>
            <div className="experience-badge">
              <span className="badge-icon">⚡</span>
              <span>3+ Years of Development Experience</span>
            </div>
          </div>
          
          <div className="bio-content">
            <p className="intro">
              <span className="highlight">Full-Stack Developer</span> passionate about creating 
              innovative and scalable solutions. Specialized in modern architectures and 
              agile development practices, focusing on performance and user experience.
            </p>
            
            <p className="journey">
              Currently pursuing a <span className="highlight">Software Engineering</span> degree at 
              Jala University, where I'm building a solid foundation in software architecture 
              principles, design patterns, and agile methodologies. My journey includes 
              practical experience with freelance projects and enterprise solution development.
            </p>

            <div className="bio-actions">
              <DownloadCV 
                filePath="/curriculo-gustavo-henrique.pdf" 
                fileName="curriculo-gustavo-henrique.pdf" 
                buttonText="Download CV (PDF)" 
              />
              <DownloadCV 
                filePath="/resources/curriculum.md" 
                fileName="curriculum.md" 
                buttonText="Download CV (MD)" 
              />
            </div>
          </div>
        </div>

        <div className="highlights">
          <div className="highlight-item">
            <h3>
              <FiCode className="icon" />
              Frontend Development
            </h3>
            <p>
              Developer with experience in freelance projects, using React, 
              Next.js, and modern technologies. Creation of responsive and 
              interactive interfaces with HTML5, CSS3, JavaScript, and popular frameworks.
            </p>
          </div>

          <div className="highlight-item">
            <h3>
              <FiDatabase className="icon" />
              Backend Development
            </h3>
            <p>
              Experience in backend development with Node.js, PHP, and Java. 
              Knowledge in relational databases like MySQL and PostgreSQL, 
              and non-relational databases like MongoDB.
            </p>
          </div>

          <div className="highlight-item">
            <h3>
              <FiLayers className="icon" />
              Methodologies & Tools
            </h3>
            <p>
              Knowledge in agile methodologies (Scrum) and version control tools. 
              Experience in developing complete web systems, from frontend 
              to backend.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}