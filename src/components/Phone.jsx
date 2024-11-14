import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { proxy, useSnapshot } from 'valtio';
import { OrbitControls, PresentationControls, Stage } from '@react-three/drei';

// Define the state using valtio
export const state = proxy({
  current: null,
  items: {
    Camera_Pixel_Glass_002: '#ffffff',
    Camera_Pixel__002: '#ffffff',
    Back_Cover: '#ffffff',
    Antenna: '#ffffff',
    Flash_Glass_002: '#ffffff',
    Flash_002: '#ffffff',
    Grill_USB: '#ffffff',
    Plastic: '#ffffff',
    Glass_Camera_Logo: '#ffffff',
    Rim_Buttons: '#ffffff',
    Screen_Glass: '#ffffff',
    Screen_Rim: '#ffffff',
    Screen_BG: '#ffffff',
    Screw: '#ffffff',
  },
});

export default function Phone() {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('../../models/iphone_16_plus.glb');

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
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment='city' intensity={0.6} castShadow={false}>
          <group
            ref={ref}
            onClick={(e) => {
              e.stopPropagation();
              state.current = e.object.material.name;
            }}
          >
            {Object.keys(snap.items).map((item, index) => (
              <mesh
                key={index}
                receiveShadow
                castShadow
                geometry={nodes[`defaultMaterial_${index}`]?.geometry}
                material={materials[item]}
                material-color={snap.items[item]}
              />
            ))}
          </group>
        </Stage>
      </PresentationControls>
      <OrbitControls />
    </>
  );
}