'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Hero3DModel = () => {
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
      '/models/punk_character.glb',
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

  return <div className="model-container" ref={modelContainerRef}></div>
}