'use client'

import './style.sass'
import { FiTerminal, FiCode, FiDatabase, FiLayers } from 'react-icons/fi'

export const AboutMe = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-info')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="about-me">
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
              <span className="highlight">Desenvolvedor Full-Stack</span> apaixonado por criar 
              soluções inovadoras e escaláveis. Especializado em arquiteturas modernas e 
              práticas de desenvolvimento ágil, com foco em performance e experiência do usuário.
            </p>
            
            <p className="journey">
              Atualmente cursando <span className="highlight">Engenharia de Software</span> na 
              Jala University, onde desenvolvo uma base sólida em princípios de arquitetura 
              de software, padrões de projeto e metodologias ágeis. Minha jornada inclui 
              experiência prática com projetos freelance e desenvolvimento de soluções 
              empresariais.
            </p>
          </div>
        </div>

        <div className="highlights">
          <div className="highlight-item">
            <h3>
              <FiCode className="icon" />
              Desenvolvimento Frontend
            </h3>
            <p>
              Desenvolvedor com experiência em projetos freelance, utilizando React, 
              Next.js e tecnologias modernas. Criação de interfaces responsivas e 
              interativas com HTML5, CSS3, JavaScript e frameworks populares.
            </p>
          </div>

          <div className="highlight-item">
            <h3>
              <FiDatabase className="icon" />
              Desenvolvimento Backend
            </h3>
            <p>
              Experiência em desenvolvimento backend com Node.js, PHP e Java. 
              Conhecimento em bancos de dados relacionais como MySQL e PostgreSQL, 
              e não relacionais como MongoDB.
            </p>
          </div>

          <div className="highlight-item">
            <h3>
              <FiLayers className="icon" />
              Metodologias & Ferramentas
            </h3>
            <p>
              Conhecimento em metodologias ágeis (Scrum) e ferramentas de versionamento. 
              Experiência em desenvolvimento de sistemas web completos, desde o frontend 
              até o backend.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}