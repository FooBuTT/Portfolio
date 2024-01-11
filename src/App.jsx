import { Canvas } from "@react-three/fiber";

import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <Canvas
        style={{ width: "100vh", height: "100vh" }}
        shadows
        camera={{ position: [0, 2, 5], fov: 30 }}
      >
        <MainComponent />
      </Canvas>
    </>
  );
}

export default App;
