'use client'

import { useState } from 'react'
import { ProjectsContainer } from '../ProjectsContainer'
import './style.sass'

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className="projects-section" id={"projects"}>
      <div className="section-header">
        <div className="glitch-container">
          <h2 data-text="ALL_PROJECTS">ALL_PROJECTS</h2>
        </div>
        <div className="cyber-line"></div>
        <p>SELECT * FROM projects WHERE technology LIKE '%{selectedCategory}%'</p>
      </div>

      <div className="projects-filters">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="filter-buttons">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            data-category="all"
          >
            All Projects
          </button>
          <button
            onClick={() => setSelectedCategory('react')}
            className={`filter-btn ${selectedCategory === 'react' ? 'active' : ''}`}
            data-category="react"
          >
            React
          </button>
          <button
            onClick={() => setSelectedCategory('next')}
            className={`filter-btn ${selectedCategory === 'next' ? 'active' : ''}`}
            data-category="next"
          >
            Next.js
          </button>
          <button
            onClick={() => setSelectedCategory('typescript')}
            className={`filter-btn ${selectedCategory === 'typescript' ? 'active' : ''}`}
            data-category="typescript"
          >
            TypeScript
          </button>
          <button
            onClick={() => setSelectedCategory('node')}
            className={`filter-btn ${selectedCategory === 'node' ? 'active' : ''}`}
            data-category="node"
          >
            Node.js
          </button>
        </div>
      </div>

      <ProjectsContainer 
        filter={selectedCategory} 
        searchTerm={searchTerm}
      />
    </section>
  )
}