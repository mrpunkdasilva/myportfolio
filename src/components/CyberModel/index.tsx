'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const CyberModel = () => {
  const modelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!modelRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })

    renderer.setSize(400, 400)
    modelRef.current.appendChild(renderer.domElement)

    // Cyberpunk geometric model
    const geometry = new THREE.IcosahedronGeometry(1.5, 1)
    const edges = new THREE.EdgesGeometry(geometry)
    const wireframe = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xDD2476 })
    )
    scene.add(wireframe)

    // Inner geometric shape
    const innerGeometry = new THREE.OctahedronGeometry(1, 0)
    const innerMaterial = new THREE.MeshPhongMaterial({
      color: 0xFA5252,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })
    const innerShape = new THREE.Mesh(innerGeometry, innerMaterial)
    scene.add(innerShape)

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 100
    const posArray = new Float32Array(particlesCount * 3)
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xDD2476
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0xDD2476, 1)
    pointLight1.position.set(2, 2, 2)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xFA5252, 1)
    pointLight2.position.set(-2, -2, -2)
    scene.add(pointLight2)

    // Camera position
    camera.position.z = 4

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      
      wireframe.rotation.x += 0.002
      wireframe.rotation.y += 0.002
      innerShape.rotation.x -= 0.003
      innerShape.rotation.y -= 0.003
      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.001

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      renderer.dispose()
      if (modelRef.current?.contains(renderer.domElement)) {
        modelRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div className="cyber-model" ref={modelRef}></div>
}