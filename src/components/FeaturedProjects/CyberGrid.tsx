import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const CyberGrid = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true 
        })

        renderer.setSize(window.innerWidth, window.innerHeight)
        containerRef.current.appendChild(renderer.domElement)

        // Grid setup
        const gridSize = 100
        const gridDivisions = 50
        const gridMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color1: { value: new THREE.Color('#DD2476') },
                color2: { value: new THREE.Color('#FA5252') }
            },
            vertexShader: `
                varying vec3 vPosition;
                void main() {
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform vec3 color1;
                uniform vec3 color2;
                varying vec3 vPosition;
                
                void main() {
                    float dist = length(vPosition.xz) * 0.1;
                    float pulse = sin(dist - time) * 0.5 + 0.5;
                    vec3 color = mix(color1, color2, pulse);
                    gl_FragColor = vec4(color, 0.6);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide
        })

        const geometry = new THREE.PlaneGeometry(gridSize, gridSize, gridDivisions, gridDivisions)
        const grid = new THREE.Mesh(geometry, gridMaterial)
        grid.rotation.x = -Math.PI / 2.5
        grid.position.y = -20
        scene.add(grid)

        // Add floating particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 200
        const posArray = new Float32Array(particlesCount * 3)
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 50
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            color: '#DD2476',
            transparent: true,
            opacity: 0.8
        })
        
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        scene.add(ambientLight)

        const spotLight1 = new THREE.SpotLight(0xDD2476, 1)
        spotLight1.position.set(50, 50, 50)
        scene.add(spotLight1)

        const spotLight2 = new THREE.SpotLight(0xFA5252, 1)
        spotLight2.position.set(-50, 50, -50)
        scene.add(spotLight2)

        camera.position.set(0, 30, 50)
        camera.lookAt(0, 0, 0)

        // Animation
        let time = 0
        const animate = () => {
            requestAnimationFrame(animate)
            time += 0.01
            gridMaterial.uniforms.time.value = time
            particlesMesh.rotation.y += 0.001
            renderer.render(scene, camera)
        }

        animate()

        // Cleanup
        return () => {
            containerRef.current?.removeChild(renderer.domElement)
            geometry.dispose()
            gridMaterial.dispose()
            particlesGeometry.dispose()
            particlesMaterial.dispose()
        }
    }, [])

    return <div ref={containerRef} className="cyber-grid-container" />
}