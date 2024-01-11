import { Canvas } from "@react-three/fiber";

import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <MainComponent />
      </Canvas>
    </>
  );
}

export default App;
