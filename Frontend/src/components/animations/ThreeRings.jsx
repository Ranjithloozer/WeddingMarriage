import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Rings() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2;
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={1.8}>
      {/* Primary Gold Ring */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.04, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Secondary Accent Ring */}
      <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.05, 0.04, 16, 100]} />
        <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function ThreeRings() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <Rings />
      </Canvas>
    </div>
  );
}