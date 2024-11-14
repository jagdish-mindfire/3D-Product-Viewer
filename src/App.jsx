import './App.css';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Phone';
import { HexColorPicker } from 'react-colorful';
import { useSnapshot } from 'valtio';
import { state } from './components/Phone';

const ColorPalette = () => {
  const snap = useSnapshot(state);
  let displayText = snap.current;

  if (snap.current === 'Antenna') {
    displayText = 'Back Cover';
  } else if (snap.current === 'Back_Cover') {
    displayText = 'Logo';
  } else if (snap.current === 'Rim_Buttons') {
    displayText = 'Rim';
  } else if (snap.current === 'Glass_Camera_Logo' || snap.current === 'Screen_Glass') {
    displayText = 'Camera Lens';
  } else if (snap.current === 'Camera_Pixel__002'){
    displayText = 'Rim Corner';
  } else if (snap.current === 'Flash_Glass_002') {
    displayText = 'USB'
  } else if (snap.current === 'Screen_BG') {
    displayText = 'Screen Wallpaper'
  }
  return (
    <div className={`picker-container ${snap.current ? 'visible' : 'hidden'}`}>
      {snap.current && (
        <>
          <HexColorPicker
            className='color-picker'
            color={snap.items[snap.current]}
            onChange={(color) => {
              state.items[snap.current] = color;
            }}
          />

          <h1 className='picker-title'>
            {displayText}
          </h1>
        </>
      )}
    </div>
  );
};

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
