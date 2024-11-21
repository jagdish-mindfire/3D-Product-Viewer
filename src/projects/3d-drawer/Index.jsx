import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Drawer from "./libs/drawer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const IntractiveDrawer = () => {
    const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      400
    );
    camera.position.set(0, 5, 20);

    const drawer1Object = new Drawer({camera,drawerSpeed:2});
    const drawer2Object = new Drawer({camera,drawerSpeed:7});
    const drawer3Object = new Drawer({camera,drawerSpeed:15});

    const drawer1 = drawer1Object.createDrawer({name:'drawer1',numberOfDrawers:4});
    const drawer2 = drawer2Object.createDrawer({name:'drawer2',numberOfDrawers:3});
    const drawer3 = drawer3Object.createDrawer({name:'drawer3',numberOfDrawers:5});

    drawer2.position.x=5;
    drawer3.position.x=-5;
    scene.add(drawer1);
    scene.add(drawer2);
    scene.add(drawer3);
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Animation
    const animate = () => {
    
      controls.update();
      drawer1Object.openCloseAnimation();
      drawer2Object.openCloseAnimation();
      drawer3Object.openCloseAnimation();
      
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
      renderer.dispose();
      drawer1Object.destroy();
      drawer2Object.destroy();
      drawer3Object.destroy();
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default IntractiveDrawer;
