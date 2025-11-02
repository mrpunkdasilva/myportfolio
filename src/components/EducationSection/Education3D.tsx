"use client";

import React, {useRef, useMemo} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import * as THREE from 'three';

const KnowledgeNetwork: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const {positions, colors} = useMemo(() => {
    const numPoints = 50;
    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    const color1 = new THREE.Color('#00FFFF'); // Cyan
    const color2 = new THREE.Color('#FF00FF'); // Magenta

    for (let i = 0; i < numPoints; i++) {
      const x = (Math.random() - 0.5) * 5;
      const y = (Math.random() - 0.5) * 5;
      const z = (Math.random() - 0.5) * 5;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const color = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return {positions, colors};
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.001;

      // Animate lines/connections
      groupRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Line) {
          child.material.opacity = Math.sin(state.clock.elapsedTime * 0.5 + index * 0.1) * 0.5 + 0.5;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={colors.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} vertexColors={true} transparent opacity={0.8}/>
      </points>
      {/* Add some lines to connect points */}
      {positions.map((_, i) => {
        if (i % 3 === 0 && i + 3 < positions.length) {
          const p1 = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
          const p2 = new THREE.Vector3(positions[i + 3], positions[i + 4], positions[i + 5]);
          const geometry = new THREE.BufferGeometry().setFromPoints([p1, p2]);
          return (
            <line key={i} geometry={geometry}>
              <lineBasicMaterial
                color={colors[i] ? new THREE.Color(colors[i], colors[i + 1], colors[i + 2]) : '#00FFFF'} transparent
                opacity={0.5}/>
            </line>
          );
        }
        return null;
      })}
    </group>
  );
};

const Education3D: React.FC = () => {
  return (
    <div className={"education3D"} style={{height: '300px', width: '100%', marginTop: '2rem', position: 'relative'}}>
      <Canvas camera={{position: [0, 0, 5]}}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[10, 10, 10]}/>
        <KnowledgeNetwork/>
        <OrbitControls enableZoom={false} enablePan={false}/>
      </Canvas>
    </div>
  );
};

export default Education3D;
