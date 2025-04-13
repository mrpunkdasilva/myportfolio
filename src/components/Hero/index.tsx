'use client'

import { TypeAnimation } from 'react-type-animation'
import listSocialNetworks from '@/data/socialNetworks'
import './style.sass'
import {CyberModel} from "@/components/CyberModel";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="background-container"></div>
      <div className="model-wrapper">
        <CyberModel />
      </div>
      <div className="hero-content">
        <div className="glitch-container">
          <h1 data-text="GUSTAVO HENRIQUE">GUSTAVO HENRIQUE</h1>
        </div>
        <div className="title-accent">
          <TypeAnimation
            sequence={[
              'FULL STACK DEVELOPER',
              2000,
              'UI/UX ENTHUSIAST',
              2000,
              'PROBLEM SOLVER',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p>Crafting digital experiences with code and creativity</p>
        <div className="social-links">
          {listSocialNetworks.map((network) => (
            <a
              key={network.name}
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={`Visit ${network.name}`}
            >
              {network.icon}
            </a>
          ))}
        </div>
        <div className="cta-buttons">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  )
}