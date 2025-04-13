'use client'

import { useState } from 'react'
import { ProjectsContainer } from '../ProjectsContainer'
import './style.sass'

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className="projects-section">
      <div className="section-header">
        <div className="glitch-container">
          <h2 data-text="ALL_PROJECTS">ALL_PROJECTS</h2>
        </div>
        <div className="cyber-line"></div>
        <p>SELECT * FROM projects WHERE technology LIKE '%{filter}%'</p>
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
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'React' ? 'active' : ''}`}
            onClick={() => setFilter('React')}
          >
            React
          </button>
          <button 
            className={`filter-btn ${filter === 'TypeScript' ? 'active' : ''}`}
            onClick={() => setFilter('TypeScript')}
          >
            TypeScript
          </button>
          <button 
            className={`filter-btn ${filter === 'Node.js' ? 'active' : ''}`}
            onClick={() => setFilter('Node.js')}
          >
            Node.js
          </button>
        </div>
      </div>

      <ProjectsContainer 
        filter={filter} 
        searchTerm={searchTerm}
      />
    </section>
  )
}