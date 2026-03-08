"use client";

import { Float, PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { useMemo, useRef } from "react";
import type { Points as ThreePoints } from "three";

function Stars() {
  const ref = useRef<ThreePoints>(null);
  const sphere = useMemo(() => inSphere(new Float32Array(4500), { radius: 1.6 }) as Float32Array, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 24;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.5}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled>
          <PointMaterial transparent color="#F1D88A" size={0.0028} sizeAttenuation depthWrite={false} />
        </Points>
      </Float>
    </group>
  );
}

export function HeroThreeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.9} />
        <Stars />
      </Canvas>
    </div>
  );
}
