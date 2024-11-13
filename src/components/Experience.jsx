import { OrbitControls, PresentationControls, Stage } from '@react-three/drei';
import Customphone from './Phone';

const Experience = () => {
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment='city' intensity={0.6} castShadow={false}>
          <Customphone />
        </Stage>
      </PresentationControls>

      <OrbitControls />
    </>
  );
};

export default Experience;