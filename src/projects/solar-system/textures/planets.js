import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

export const sunTexture = textureLoader.load("/solar-system/textures/sun.jpg");
sunTexture.colorSpace = THREE.SRGBColorSpace

export const mercuryTexture = textureLoader.load("/solar-system/textures/mercury.jpg");
mercuryTexture.colorSpace = THREE.SRGBColorSpace

export const venusTexture = textureLoader.load("/solar-system/textures/venus.jpg");
venusTexture.colorSpace = THREE.SRGBColorSpace

export const earthTexture = textureLoader.load("/solar-system/textures/earth.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace

export const marsTexture = textureLoader.load("/solar-system/textures/mars.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace

export const moonTexture = textureLoader.load("/solar-system/textures/moon.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace


