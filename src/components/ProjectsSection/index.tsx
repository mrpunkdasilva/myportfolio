'use client'

import { useState } from 'react'
import { ProjectsContainer } from '../ProjectsContainer'
import { projectCategories, groupedCategories } from '@/data/projectCategories'
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
          {groupedCategories.main.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              data-category={category.id}
            >
              {category.name}
            </button>
          ))}

          {/* Frontend Frameworks */}
          {groupedCategories.frontend.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              data-category={category.id}
            >
              {category.name}
            </button>
          ))}

          {/* Core Technologies */}
          {groupedCategories.core.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              data-category={category.id}
            >
              {category.name}
            </button>
          ))}

          {/* Styling */}
          {groupedCategories.styling.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              data-category={category.id}
            >
              {category.name}
            </button>
          ))}

          {/* Backend */}
          {groupedCategories.backend.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              data-category={category.id}
            >
              {category.name}
            </button>
          ))}

          {/* Database */}
          {groupedCategories.database.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              data-category={category.id}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <ProjectsContainer 
        filter={selectedCategory} 
        searchTerm={searchTerm}
      />
    </section>
  )
}