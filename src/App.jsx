import { Canvas } from "@react-three/fiber";

import MainComponent from "./components/MainComponent";

import { useRef, useState } from "react";

import { MotionConfig } from "framer-motion";

import SkillsSection from "./components/Ui/Interface";
import { Scroll, ScrollControls } from "@react-three/drei";
import Loading from "./components/Ui/Loading";
import {
  Bloom,
  EffectComposer,
  SelectiveBloom,
} from "@react-three/postprocessing";

function App() {
  const [navigate, setNavigate] = useState(0);
  const [onMonitor, setOnMonitor] = useState(false);
  const [load, setLoad] = useState(false);

  return (
    <>
      <Loading load={load} setLoad={setLoad} />
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

          {/* <ScrollControls damping={0.1}> */}
          {/* <NavigateController navigate={navigate} setNavigate={setNavigate} /> */}

          <MainComponent
            onMonitor={onMonitor}
            setOnMonitor={setOnMonitor}
            navigate={navigate}
            setNavigate={setNavigate}
          />

          {/* </ScrollControls> */}
        </Canvas>
      </MotionConfig>
    </>
  );
}

export default App;
