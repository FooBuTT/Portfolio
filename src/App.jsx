import { Canvas } from "@react-three/fiber";

import MainComponent from "./components/MainComponent";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <OrbitControls />
        <ambientLight intensity={1} />
        <MainComponent />
      </Canvas>
    </>
  );
}

export default App;
