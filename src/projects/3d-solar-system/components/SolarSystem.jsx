import React from "react";
import { useTexture } from "@react-three/drei";
import Sun from "./Sun";
import Planet from "./Planet";
import Path from "./Path";

const SolarSystem = () => {
  const textures = useTexture({
    sun: "../../3d-solar-system/images/sun.jpg",
    mercury: "../../3d-solar-system/images/mercury.jpg",
    venus: "../../3d-solar-system/images/venus.jpg",
    earth: "../../3d-solar-system/images/earth.jpg",
    mars: "../../3d-solar-system/images/mars.jpg",
    jupiter: "../../3d-solar-system/images/jupiter.jpg",
    saturn: "../../3d-solar-system/images/saturn.jpg",
    uranus: "../../3d-solar-system/images/uranus.jpg",
    neptune: "../../3d-solar-system/images/neptune.jpg",
    pluto: "../../3d-solar-system/images/pluto.jpg",
    saturnRing: "../../3d-solar-system/images/saturn_ring.png",
    uranusRing: "../../3d-solar-system/images/uranus_ring.png",
  });

  const planets = [
    { size: 3.2, texture: textures.mercury, position: [28, 0, 0], speeds: { orbitSpeed: 0.004, selfRotationSpeed: 0.004 }, name: "Mercury" },
    { size: 5.8, texture: textures.venus, position: [44, 0, 0], speeds: { orbitSpeed: 0.015, selfRotationSpeed: 0.002 }, name: "Venus" },
    { size: 6, texture: textures.earth, position: [62, 0, 0], speeds: { orbitSpeed: 0.01, selfRotationSpeed: 0.02 }, name: "Earth" },
    { size: 4, texture: textures.mars, position: [78, 0, 0], speeds: { orbitSpeed: 0.008, selfRotationSpeed: 0.018 }, name: "Mars" },
    { size: 12, texture: textures.jupiter, position: [100, 0, 0], speeds: { orbitSpeed: 0.002, selfRotationSpeed: 0.04 }, name: "Jupiter" },
    { size: 10, texture: textures.saturn, position: [138, 0, 0], speeds: { orbitSpeed: 0.0009, selfRotationSpeed: 0.038 }, ring: { innerRadius: 10, outerRadius: 20, texture: textures.saturnRing }, name: "Saturn" },
    { size: 7, texture: textures.uranus, position: [176, 0, 0], speeds: { orbitSpeed: 0.0004, selfRotationSpeed: 0.03 }, ring: { innerRadius: 7, outerRadius: 12, texture: textures.uranusRing }, name: "Uranus" },
    { size: 7, texture: textures.neptune, position: [200, 0, 0], speeds: { orbitSpeed: 0.0001, selfRotationSpeed: 0.032 }, name: "Neptune" },
    { size: 2.8, texture: textures.pluto, position: [216, 0, 0], speeds: { orbitSpeed: 0.0007, selfRotationSpeed: 0.008 }, name: "Pluto" },
  ];

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={4} />
      <Sun texture={textures.sun} />
      {planets.map((planet, index) => (
        <React.Fragment key={index}>
          <Planet {...planet} />
          <Path radius={planet.position[0]} color="white" />
        </React.Fragment>
      ))}
    </>
  );
};

export default SolarSystem;
