import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { sunMaterial } from "./material/planets";
import { planets } from "./data/planets";
import { createPlanet, createMoon } from "./utils/planets";
import { sphereGeometry } from "./geometry/sphare";

const SolarSystem = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Lights
    const ambientLight = new THREE.AmbientLight("white", 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight("white", 50);
    scene.add(pointLight);

    // Sun
    const sun = new THREE.Mesh(sphereGeometry, sunMaterial);
    sun.scale.setScalar(5);
    scene.add(sun);

    // Planets and Moons
    const planetMeshes = planets.map((planet) => {
      const planetMesh = createPlanet(planet);
      scene.add(planetMesh);
      planet.moons.forEach((moon) => {
        const moonMesh = createMoon(moon);
        planetMesh.add(moonMesh);
      });
      return planetMesh;
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      400
    );
    camera.position.set(0, 5, 55);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Animation
    const animate = () => {
      planetMeshes.forEach((planet, planetIndex) => {
        planet.rotation.y += planets[planetIndex].speed;
        planet.position.x =
          Math.sin(planet.rotation.y) * planets[planetIndex].distance;
        planet.position.z =
          Math.cos(planet.rotation.y) * planets[planetIndex].distance;
        planet.children.forEach((moon, moonIndex) => {
          moon.rotation.y += planets[planetIndex].moons[moonIndex].speed;
          moon.position.x =
            Math.sin(moon.rotation.y) *
            planets[planetIndex].moons[moonIndex].distance;
          moon.position.z =
            Math.cos(moon.rotation.y) *
            planets[planetIndex].moons[moonIndex].distance;
        });
      });
      sun.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default SolarSystem;
