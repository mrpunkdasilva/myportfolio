'use client'

import './style.sass'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { CyberModel } from '../CyberModel'

export const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!backgroundRef.current) return

    // Cyberpunk Grid Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    backgroundRef.current.appendChild(renderer.domElement)

    // Create enhanced cyberpunk grid
    const gridSize = 100
    const segments = 80
    const geometry = new THREE.PlaneGeometry(gridSize, gridSize, segments, segments)
    
    // Custom shader material for the grid
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color('#DD2476') },
        color2: { value: new THREE.Color('#FA5252') }
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          float elevation = sin(pos.x * 0.2 + time) * sin(pos.z * 0.2 + time) * 2.0;
          pos.y = elevation;
          
          vElevation = elevation;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          float alpha = 0.3 + abs(vElevation) * 0.2;
          vec3 color = mix(color1, color2, vUv.x);
          
          // Add grid lines
          float gridX = mod(vUv.x * 50.0, 1.0);
          float gridY = mod(vUv.y * 50.0, 1.0);
          
          if (gridX < 0.02 || gridY < 0.02) {
            alpha = 0.5;
          }
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      wireframe: false,
      transparent: true,
      side: THREE.DoubleSide
    })

    const grid = new THREE.Mesh(geometry, material)
    grid.rotation.x = -Math.PI / 2.5
    grid.position.y = -10
    scene.add(grid)

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    const spotLight1 = new THREE.SpotLight(0xDD2476, 1)
    spotLight1.position.set(50, 50, 50)
    scene.add(spotLight1)

    const spotLight2 = new THREE.SpotLight(0xFA5252, 1)
    spotLight2.position.set(-50, 50, -50)
    scene.add(spotLight2)

    camera.position.set(0, 20, 50)
    camera.lookAt(0, 0, 0)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      material.uniforms.time.value += 0.01

      // Parallax effect on scroll
      const scrollPosition = window.scrollY
      grid.position.y = -10 - (scrollPosition * 0.02)
      grid.rotation.x = -Math.PI / 2.5 + (scrollPosition * 0.001)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (backgroundRef.current?.contains(renderer.domElement)) {
        backgroundRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section className="hero">
      <div className="background-container" ref={backgroundRef}></div>
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
        <div className="cta-buttons">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  )
}