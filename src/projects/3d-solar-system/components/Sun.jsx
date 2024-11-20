import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sun = ({ texture }) => {
  const sunRef = useRef();

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[15, 50, 50]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default Sun;
