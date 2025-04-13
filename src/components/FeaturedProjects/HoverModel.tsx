'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface HoverModelProps {
    isVisible: boolean
}

export const HoverModel = ({ isVisible }: HoverModelProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if (!containerRef.current || !isVisible) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true 
        })

        renderer.setSize(60, 60) // Tamanho reduzido
        containerRef.current.appendChild(renderer.domElement)

        // Geometria menor e mais simples
        const geometry = new THREE.TorusKnotGeometry(8, 3, 50, 8)
        const material = new THREE.MeshPhongMaterial({
            color: 0xDD2476,
            wireframe: true,
            emissive: 0x330033,
            shininess: 100,
            transparent: true,
            opacity: 0.7
        })
        
        const model = new THREE.Mesh(geometry, material)
        scene.add(model)

        // Iluminação mais suave
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xFF0066, 0.8)
        pointLight.position.set(10, 10, 10)
        scene.add(pointLight)

        camera.position.z = 40

        // Animação mais lenta
        const animate = () => {
            if (!isVisible) return

            requestAnimationFrame(animate)
            
            model.rotation.x += 0.005
            model.rotation.y += 0.01
            
            renderer.render(scene, camera)
        }

        animate()

        return () => {
            if (containerRef.current?.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement)
            }
            geometry.dispose()
            material.dispose()
            renderer.dispose()
        }
    }, [isVisible])

    return (
        <div 
            ref={containerRef} 
            className="hover-model-container"
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease'
            }}
        />
    )
}