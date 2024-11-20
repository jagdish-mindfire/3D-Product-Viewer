import React from "react";
import * as THREE from "three";

const Path = ({ radius, color }) => {
  const points = [];
  const segments = 100;
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(radius * Math.cos(angle), 0, radius * Math.sin(angle))
    );
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <lineLoop>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial attach="material" color={color} />
    </lineLoop>
  );
};

export default Path;
