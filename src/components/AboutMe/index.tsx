'use client'

import { useState } from 'react'
import './style.sass'
import { FiCode, FiDatabase, FiLayers, FiX } from 'react-icons/fi'
import { DownloadCV } from '../DownloadCV'
import { curricula } from '@/data/curricula'

export const AboutMe = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const openPreview = (url: string) => {
    setPreviewUrl(url)
  }

  const closePreview = () => {
    setPreviewUrl(null)
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
              {curricula.map((curriculum, index) => (
                <div key={index} className="curriculum-actions">
                  <DownloadCV 
                    filePath={curriculum.filePath} 
                    fileName={curriculum.fileName} 
                    buttonText={curriculum.buttonText} 
                  />
                  <button onClick={() => openPreview(curriculum.filePath)} className="preview-button">
                    Preview
                  </button>
                </div>
              ))}
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

      {previewUrl && (
        <div className="preview-modal-overlay" onClick={closePreview}>
          <div className="preview-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-preview-button" onClick={closePreview}>
              <FiX />
            </button>
            <iframe src={previewUrl} title="Curriculum Preview" width="100%" height="100%"></iframe>
          </div>
        </div>
      )}
    </section>
  )
}