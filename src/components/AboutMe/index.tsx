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
        <h2>About Me</h2>

        <div className="bio">
          <p>
            Full-Stack Developer with hands-on experience in freelance projects,
            specializing in modern web technologies and solutions. Currently pursuing
            a Bachelor's degree in Software Engineering at Jala University.
          </p>
          <button onClick={scrollToContact} className="contact-button">
            Contact Me
          </button>
        </div>

        <div className="highlights">
          <div className="highlight-item">
            <h3>Development</h3>
            <p>
              Experienced in both frontend and backend development, creating responsive
              and efficient web applications using modern frameworks and best practices.
            </p>
          </div>

          <div className="highlight-item">
            <h3>Problem Solving</h3>
            <p>
              Strong analytical skills and ability to transform complex requirements
              into elegant solutions, with a focus on code quality and performance.
            </p>
          </div>

          <div className="highlight-item">
            <h3>Collaboration</h3>
            <p>
              Proficient in agile methodologies (Scrum) and version control systems (Git),
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