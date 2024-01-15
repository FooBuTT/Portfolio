import { Canvas } from "@react-three/fiber";

import MainComponent from "./components/MainComponent";
import { Environment, OrbitControls, Sky } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas camera={{ position: [1, 1, 1] }}>
        <OrbitControls />
        <Sky />
        <Environment preset="night" />
        <MainComponent />
      </Canvas>
    </>
  );
}

export default App;
