import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { DoubleSide } from "three";

const Planet = ({ size, texture, position, ring, speeds, name }) => {
  const planetRef = useRef();
  const orbitRef = useRef();

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += speeds.selfRotationSpeed;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += speeds.orbitSpeed;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={planetRef} position={position}>
        <sphereGeometry args={[size, 100, 100]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Text
        position={[position[0], position[1] + size + 5, position[2]]}
        fontSize={2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      {ring && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[ring.innerRadius, ring.outerRadius, 32]} />
          <meshBasicMaterial map={ring.texture} side={DoubleSide} transparent />
        </mesh>
      )}
    </group>
  );
};

export default Planet;
