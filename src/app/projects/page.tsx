import { Metadata } from 'next'
import { ProjectsSection } from '@/components/ProjectsSection'
import './style.sass'

export const metadata: Metadata = {
  title: 'Projects | Gustavo Henrique',
  description: 'A list of all projects by Gustavo Henrique.',
}

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <ProjectsSection />
    </main>
  )
}