import './App.css';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import { HexColorPicker } from 'react-colorful';
import { useSnapshot } from 'valtio';
import { state } from './components/Phone';

const ColorPalette = () => {
  const snap = useSnapshot(state);
  return (
    <div className={`picker-container ${snap.current ? 'visible' : 'hidden'}`}>
      <HexColorPicker
        className='color-picker'
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1 className='picker-title'>{snap.current}</h1>
    </div>
  );
}

const App = () => {
  return (
    <div className='app-container'>
      <ColorPalette />
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
