import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, useTexture } from '@react-three/drei';
import { proxy, useSnapshot } from 'valtio';
import walpaper from './walpaper.webp';

export const state = proxy({
  current: null,
  items: {
    Antenna: '#ffffff',
    Cover: '#000000',
    PixelGlass: '#dddddd',
    CameraPixel: '#cccccc',
    Flash_002: '#ffff00',
    Flash_Glass_002: '#ffffff',
    Glass_Camera_Logo: '#ffffff',
    Grill_USB: '#aaaaaa',
    Plastic: '#888888',
    Rim_Buttons: '#555555',
    Screen_BG: '#222222',
    Screen_Glass: '#333333',
    Screen_Rim: '#444444',
    Screw: '#666666',
  },
});

export default function Phone() {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('../../models/iphone_16_plus.glb');
  const [hovered, set] = useState(null);
  const screenTexture = useTexture(walpaper);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 4) / 8,
      -0.2 - (1 + Math.sin(t / 1.5)) / 20
    );
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <>
      <OrbitControls />
      <group
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
        onClick={(e) => (
          e.stopPropagation(), (state.current = e.object.material.name)
        )}
      >
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_1.geometry}
          material={materials.Back_Cover}
          material-color={snap.items.Cover}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_2.geometry}
          material={materials.Camera_Pixel_Glass_002}
          material-color={snap.items.Camera_Pixel_Glass_002}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_3.geometry}
          material={materials.Camera_Pixel__002}
          material-color={snap.items.Camera_Pixel__002}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_4.geometry}
          material={materials.Flash_002}
          material-color={snap.items.Flash_002}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_5.geometry}
          material={materials.Flash_Glass_002}
          material-color={snap.items.Flash_Glass_002}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_6.geometry}
          material={materials.Glass_Camera_Logo}
          material-color={snap.items.Glass_Camera_Logo}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_7.geometry}
          material={materials.Grill_USB}
          material-color={snap.items.Grill_USB}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_8.geometry}
          material={materials.Plastic}
          material-color={snap.items.Plastic}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_9.geometry}
          material={materials.Rim_Buttons}
          material-color={snap.items.Rim_Buttons}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_10.geometry}
          material={materials.Screen_BG}
        >
          <meshStandardMaterial map={screenTexture} />
        </mesh>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_11.geometry}
          material={materials.Screen_Glass}
          material-color={snap.items.Screen_Glass}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_12.geometry}
          material={materials.Screen_Rim}
          material-color={snap.items.Screen_Rim}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial_13.geometry}
          material={materials.Screw}
          material-color={snap.items.Screw}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Antenna}
          material-color={snap.items.Antenna}
        />
      </group>
    </>
  );
}
