import { Metadata } from 'next'
import { Hero3DModel } from '@/components/Hero3DModel'
import { AnimatedTitle } from '@/components/AnimatedTitle'
import { TechnologiesContainer } from '@/components/TechnologiesContainer'
import { ProjectsContainer } from '@/components/ProjectsContainer'
import { InformationContainer } from '@/components/InformationContainer'

export const metadata: Metadata = {
  title: 'Gustavo Henrique | Full Stack Developer',
  description: 'Creative Full Stack Developer crafting digital experiences with modern web technologies.',
}

export default function Home() {
  return (
    <main className="main-container">
      <section className="hero">
        <Hero3DModel />
        <div className="hero-content">
          <h1>GUSTAVO HENRIQUE</h1>
          <div className="title-accent">
            <AnimatedTitle />
          </div>
          <p>Crafting digital experiences with code and creativity</p>
          <div className="cta-buttons">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>
        </div>
      </section>

      <InformationContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}