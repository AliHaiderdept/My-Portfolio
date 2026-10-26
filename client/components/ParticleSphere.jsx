
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleSphere() {
  const pointsRef = useRef();
  const groupRef = useRef();

  const { positions, colors } = useMemo(() => {
    const count = 3500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const purple = new THREE.Color("#a855f7");
    const gold = new THREE.Color("#f5c76e");

    for (let i = 0; i < count; i++) {
      // Uniformly distribute particles over a sphere
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;

      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;

      const color = Math.random() > 0.8 ? gold : purple;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth mouse interaction
    groupRef.current.rotation.y +=
      (state.pointer.x * 0.35 - groupRef.current.rotation.y) *
      Math.min(delta * 2, 1);

    groupRef.current.rotation.x +=
      (-state.pointer.y * 0.2 - groupRef.current.rotation.x) *
      Math.min(delta * 2, 1);

    groupRef.current.rotation.y += delta * 0.08;

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.025;
    }
  });

  return (
    <group ref={groupRef}>
      <Points ref={pointsRef} positions={positions}>
        <PointMaterial
          transparent
          vertexColors={false}
          color="#b794f6"
          size={0.012}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>

      <Points positions={positions}>
        <PointMaterial
          color="#d8b4fe"
          size={0.012}
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ParticleSphereCanvas() {
  return (
    <div className="particle-sphere h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ParticleSphere />
      </Canvas>
    </div>
  );
}
