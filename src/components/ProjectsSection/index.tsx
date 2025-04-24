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
          {/* Main Category */}
          <button
            onClick={() => setSelectedCategory('all')}
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            data-category="all"
          >
            All Projects
          </button>

          {/* Frontend Frameworks */}
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
            onClick={() => setSelectedCategory('vue')}
            className={`filter-btn ${selectedCategory === 'vue' ? 'active' : ''}`}
            data-category="vue"
          >
            Vue.js
          </button>
          <button
            onClick={() => setSelectedCategory('angular')}
            className={`filter-btn ${selectedCategory === 'angular' ? 'active' : ''}`}
            data-category="angular"
          >
            Angular
          </button>

          {/* Core Technologies */}
          <button
            onClick={() => setSelectedCategory('javascript')}
            className={`filter-btn ${selectedCategory === 'javascript' ? 'active' : ''}`}
            data-category="javascript"
          >
            JavaScript
          </button>
          <button
            onClick={() => setSelectedCategory('typescript')}
            className={`filter-btn ${selectedCategory === 'typescript' ? 'active' : ''}`}
            data-category="typescript"
          >
            TypeScript
          </button>

          {/* Styling */}
          <button
            onClick={() => setSelectedCategory('css')}
            className={`filter-btn ${selectedCategory === 'css' ? 'active' : ''}`}
            data-category="css"
          >
            CSS
          </button>
          <button
            onClick={() => setSelectedCategory('tailwind')}
            className={`filter-btn ${selectedCategory === 'tailwind' ? 'active' : ''}`}
            data-category="tailwind"
          >
            Tailwind
          </button>
          <button
            onClick={() => setSelectedCategory('sass')}
            className={`filter-btn ${selectedCategory === 'sass' ? 'active' : ''}`}
            data-category="sass"
          >
            Sass
          </button>

          {/* Backend */}
          <button
            onClick={() => setSelectedCategory('node')}
            className={`filter-btn ${selectedCategory === 'node' ? 'active' : ''}`}
            data-category="node"
          >
            Node.js
          </button>
          <button
            onClick={() => setSelectedCategory('python')}
            className={`filter-btn ${selectedCategory === 'python' ? 'active' : ''}`}
            data-category="python"
          >
            Python
          </button>

          {/* Database */}
          <button
            onClick={() => setSelectedCategory('firebase')}
            className={`filter-btn ${selectedCategory === 'firebase' ? 'active' : ''}`}
            data-category="firebase"
          >
            Firebase
          </button>
          <button
            onClick={() => setSelectedCategory('mongodb')}
            className={`filter-btn ${selectedCategory === 'mongodb' ? 'active' : ''}`}
            data-category="mongodb"
          >
            MongoDB
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