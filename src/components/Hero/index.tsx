'use client'

import './style.sass'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const Hero = () => {
  const modelContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!modelContainerRef.current) return

    // Three.js setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    
    renderer.setSize(400, 400)
    modelContainerRef.current.appendChild(renderer.domElement)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Camera position
    camera.position.z = 2
    camera.position.y = 1

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 2

    // Load 3D Model
    const loader = new GLTFLoader()
    loader.load(
      '/models/punk_character.glb', // Make sure to add your 3D model to the public/models directory
      (gltf) => {
        const model = gltf.scene
        model.scale.set(0.5, 0.5, 0.5)
        scene.add(model)
      },
      undefined,
      (error) => {
        console.error('Error loading 3D model:', error)
      }
    )

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      renderer.dispose()
      modelContainerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <section className="hero">
      <div className="model-container" ref={modelContainerRef}></div>
      <div className="hero-content">
        <h1>GUSTAVO HENRIQUE</h1>
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