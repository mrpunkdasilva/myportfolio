'use client'

import './style.sass'
import { TechStack } from '../TechStack'

export const AboutMe = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-info')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="about-me">
      <div className="about-content">
        <h2>About Me<span className="blink">_</span></h2>

        <div className="bio">
          <div className="bio-header">
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Available for hire</span>
            </div>
          </div>
          
          <p>
            <span className="highlight">Full-Stack Developer</span> with hands-on experience 
            in freelance projects, specializing in modern web technologies and solutions. 
            Currently pursuing a Bachelor's degree in Software Engineering at Jala University.
          </p>
          
          <div className="cta-container">
            <button onClick={scrollToContact} className="contact-button">
              <span className="button-text">Contact Me</span>
              <span className="button-icon">→</span>
            </button>
          </div>
        </div>

        <div className="highlights">
          <div className="highlight-item">
            <h3>
              <span className="icon">⚡</span>
              Development
            </h3>
            <p>
              Experienced in both frontend and backend development, creating responsive
              and efficient web applications using modern frameworks and best practices.
            </p>
          </div>

          <div className="highlight-item">
            <h3>
              <span className="icon">🔮</span>
              Problem Solving
            </h3>
            <p>
              Strong analytical skills and ability to transform complex requirements
              into elegant solutions, with a focus on code quality and performance.
            </p>
          </div>

          <div className="highlight-item">
            <h3>
              <span className="icon">🤝</span>
              Collaboration
            </h3>
            <p>
              Proficient in agile methodologies and version control systems,
              with excellent communication skills for team environments.
            </p>
          </div>
        </div>

        <TechStack />

        <div className="contact-info" id={"contact"}>
          <h3>Let's Connect</h3>
          <div className="info-cards">
            <div className="info-card">
              <div>
                <h4>Phone</h4>
                <p>55+ (11) 98597-6152</p>
              </div>
            </div>

            <div className="info-card">
              <div>
                <h4>Email</h4>
                <p>gustavojs417@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div>
                <h4>Location</h4>
                <p>SP - SP, Brazil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}