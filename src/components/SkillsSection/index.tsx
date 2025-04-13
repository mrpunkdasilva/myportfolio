'use client'

import { useState, useEffect } from 'react'
import { technologies } from '@/data/technologies'
import { FiFilter, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './style.sass'

type CategoryType = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools'

export const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all')
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const ITEMS_PER_PAGE = 12

    const filteredTech = technologies.filter(tech => {
        const matchCategory = selectedCategory === 'all' || tech.category === selectedCategory
        const matchSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase())
        return matchCategory && matchSearch
    })

    const totalPages = Math.max(1, Math.ceil(filteredTech.length / ITEMS_PER_PAGE))
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const visibleTech = filteredTech.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedCategory, searchTerm])

    const handlePrevPage = () => {
        console.log('Navegação: Página anterior', {
            de: currentPage,
            para: Math.max(1, currentPage - 1),
            itensVisiveis: visibleTech.length
        })
        setCurrentPage(prev => Math.max(1, prev - 1))
    }

    const handleNextPage = () => {
        console.log('Navegação: Próxima página', {
            de: currentPage,
            para: Math.min(totalPages, currentPage + 1),
            itensVisiveis: visibleTech.length
        })
        setCurrentPage(prev => Math.min(totalPages, prev + 1))
    }

    return (
        <section id="skills" className="skills-section">
            <div className="section-header">
                <h2>Skills & Technologies</h2>
                <p>Technologies I've been working with recently</p>
            </div>

            <div className="skills-filters">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search skills..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FiFilter className="filter-icon" />
                </div>

                <div className="category-filters">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    >
                        All Skills
                    </button>
                    <button
                        onClick={() => setSelectedCategory('frontend')}
                        className={`category-btn ${selectedCategory === 'frontend' ? 'active' : ''}`}
                    >
                        Frontend
                    </button>
                    <button
                        onClick={() => setSelectedCategory('backend')}
                        className={`category-btn ${selectedCategory === 'backend' ? 'active' : ''}`}
                    >
                        Backend
                    </button>
                    <button
                        onClick={() => setSelectedCategory('database')}
                        className={`category-btn ${selectedCategory === 'database' ? 'active' : ''}`}
                    >
                        Database
                    </button>
                    <button
                        onClick={() => setSelectedCategory('devops')}
                        className={`category-btn ${selectedCategory === 'devops' ? 'active' : ''}`}
                    >
                        DevOps
                    </button>
                    <button
                        onClick={() => setSelectedCategory('tools')}
                        className={`category-btn ${selectedCategory === 'tools' ? 'active' : ''}`}
                    >
                        Tools
                    </button>
                </div>
            </div>

            <div className="skills-grid">
                {visibleTech.map((tech) => (
                    <div 
                        key={tech.id} 
                        className="skill-card"
                        style={{
                            '--skill-color': tech.color || '#666'
                        } as React.CSSProperties}
                    >
                        <div className="skill-icon">
                            {tech.icon}
                        </div>
                        <div className="skill-info">
                            <h4>{tech.name}</h4>
                            <span className="skill-level">{tech.desc}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button 
                    onClick={handlePrevPage}
                    disabled={currentPage <= 1}
                    className="pagination-btn"
                >
                    <FiChevronLeft />
                </button>

                <span>
                    {currentPage} / {totalPages}
                </span>

                <button 
                    onClick={handleNextPage}
                    disabled={currentPage >= totalPages}
                    className="pagination-btn"
                >
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}