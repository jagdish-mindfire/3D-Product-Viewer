import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GalaxyBackground from "./components/GalaxyBackground";
import SolarSystem from "./components/SolarSystem";
import './App.css'

const App = () => {
  return (
    <Canvas camera={{ position: [-50, 90, 150], fov: 75 }}>
      <OrbitControls />
      <GalaxyBackground />
      <SolarSystem />
    </Canvas>
  );
};

export default App;
