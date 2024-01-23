import { Canvas } from "@react-three/fiber";

import MainComponent from "./components/MainComponent";
import {
  OrbitControls,
  Scroll,
  ScrollControls,
  Shadow,
} from "@react-three/drei";
import Interface from "./components/Ui/Interface";
import { useEffect, useRef, useState } from "react";
import NavigateController from "./components/Ui/NavigateController";
import { MotionConfig } from "framer-motion";
function App() {
  const [navigate, setNavigate] = useState(0);
  const [onMonitor, setOnMonitor] = useState(false);
  const cameraRed = useRef();
  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 100,
          restDelta: 0.0001,
        }}
      >
        <Canvas
          camera={{
            position: [0, 3, 8],
            fov: 40,
          }}
          shadows
        >
          <color attach="background" args={["#171720"]} />
          <fog attach="fog" args={["#171720", 10, 30]} />
          <ambientLight intensity={1} />
          <OrbitControls />
          {/* <ScrollControls pages={4} damping={0.1}> */}
          {/* <NavigateController navigate={navigate} setNavigate={setNavigate} /> */}

          <MainComponent onMonitor={onMonitor} setOnMonitor={setOnMonitor} />

          {/* <Scroll html>
              <Interface onMonitor={onMonitor} setOnMonitor={setOnMonitor} />
            </Scroll>
          </ScrollControls> */}
        </Canvas>
      </MotionConfig>
    </>
  );
}

export default App;
