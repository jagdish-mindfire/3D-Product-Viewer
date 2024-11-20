import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import { state } from "./components/Shoes";

function Picker() {
  const snap = useSnapshot(state);
  return (
    <div
      style={{
        display: snap.current ? "block" : "none",
        position: "absolute",
        top: "100px",
        left: "70px",
        zIndex: "20",
      }}
    >
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1 style={{color: "white"}}>{snap.current}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Picker />
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213547", 10, 20]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
