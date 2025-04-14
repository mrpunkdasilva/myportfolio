'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const FloatingCubes = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return undefined

        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true 
        })

        renderer.setSize(window.innerWidth, window.innerHeight)
        containerRef.current.appendChild(renderer.domElement)

        // Create multiple cubes
        const cubes: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial>[] = []
        const cubeCount = 15

        for (let i = 0; i < cubeCount; i++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1)
            const material = new THREE.MeshPhongMaterial({
                color: i % 2 === 0 ? 0xDD2476 : 0xFA5252,
                transparent: true,
                opacity: 0.7,
                wireframe: true
            })
            
            const cube = new THREE.Mesh(geometry, material)
            
            // Random position
            cube.position.x = (Math.random() - 0.5) * 20
            cube.position.y = (Math.random() - 0.5) * 20
            cube.position.z = (Math.random() - 0.5) * 20
            
            // Random rotation
            cube.rotation.x = Math.random() * Math.PI
            cube.rotation.y = Math.random() * Math.PI
            
            // Store random rotation speeds
            const rotationSpeed = {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01
            }
            
            cube.userData.rotationSpeed = rotationSpeed
            
            cubes.push(cube)
            scene.add(cube)
        }

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
        scene.add(ambientLight)

        const pointLight1 = new THREE.PointLight(0xDD2476, 1)
        pointLight1.position.set(5, 5, 5)
        scene.add(pointLight1)

        const pointLight2 = new THREE.PointLight(0xFA5252, 1)
        pointLight2.position.set(-5, -5, -5)
        scene.add(pointLight2)

        camera.position.z = 30

        // Animation
        let animationFrameId: number

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)
            
            cubes.forEach(cube => {
                const speed = cube.userData.rotationSpeed
                cube.rotation.x += speed.x
                cube.rotation.y += speed.y
            })

            renderer.render(scene, camera)
        }

        animate()

        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
            
            cubes.forEach(cube => {
                cube.geometry.dispose()
                if (cube.material instanceof THREE.Material) {
                    cube.material.dispose()
                }
            })
            
            renderer.dispose()
            if (containerRef.current?.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement)
            }
        }
    }, [])

    return <div ref={containerRef} className="floating-cubes-container" />
}