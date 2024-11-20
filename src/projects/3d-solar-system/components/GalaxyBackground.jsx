import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const GalaxyBackground = () => {
  const galaxyTexture = useLoader(THREE.TextureLoader, "../../3d-solar-system/images/mikly.jpg");

  galaxyTexture.wrapS = THREE.RepeatWrapping;
  galaxyTexture.wrapT = THREE.RepeatWrapping;
  galaxyTexture.repeat.set(1, 1);
  galaxyTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={galaxyTexture} side={THREE.BackSide} />
    </mesh>
  );
};

export default GalaxyBackground;
