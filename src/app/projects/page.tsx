import { Metadata } from 'next'
import { ProjectsContainer } from '@/components/ProjectsContainer'

export const metadata: Metadata = {
  title: 'Projects | Gustavo Henrique',
  description: 'Explore my portfolio of web development projects using React, Next.js, and other modern technologies.',
}

export default function Projects() {
  return <ProjectsContainer />
}