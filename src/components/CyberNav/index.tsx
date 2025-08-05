'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './style.sass'

export const CyberNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/#contact' }
  ]

  return (
    <nav className={`cyber-nav ${scrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="nav-content">
        <div className="logo">
          <span className="bracket">&lt;</span>
          <span className="text">GH</span>
          <span className="bracket">/&gt;</span>
        </div>

        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className="nav-links">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="nav-link"
              >
                <span className="link-text">{item.label}</span>
                <span className="link-decorator"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-border"></div>
    </nav>
  )
}