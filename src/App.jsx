import { useSelector } from "react-redux";
import { Canvas, useFrame } from "@react-three/fiber";
import MainComponent from "./components/MainComponent";
import { Suspense, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Loading from "./components/Ui/Loading";
import CameraPositionControls from "./components/Ui/CameraPositionControls";
import { motion } from "framer-motion-3d";
import MinesweeperBoard from "./components/games/MinesweeperBoard";

function App() {
  const [navigate, setNavigate] = useState(0);
  const [load, setLoad] = useState(false);
  const [inGame, setInGame] = useState(false);
  const [backGroundColor, setBackGroundColor] = useState("#171720");

  const currentPage = useSelector((state) => state.camera.value);

  useEffect(() => {
    if (currentPage === "about" || currentPage === "contact") {
      setTimeout(() => {
        setBackGroundColor("#007FFF");
      }, 1200);
    }
    setBackGroundColor("#171720");
  }, [currentPage]);
  return (
    <>
      <Loading load={load} setLoad={setLoad} />
      <MotionConfig>
        <Canvas shadows>
          <CameraPositionControls
            navigate={navigate}
            setNavigate={setNavigate}
          />

          <color attach="background" args={[backGroundColor]} />
          <fog attach="fog" args={["#171720", 10, 30]} />

          <Suspense>
            {currentPage === "play" && (
              <motion.group
                initial={{ scale: 0 }}
                animate={{
                  scale: 2,
                }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
                position={[0.8, 0.7, 8]}
              >
                <MinesweeperBoard />
              </motion.group>
            )}

            <MainComponent />
          </Suspense>
          {/* <EffectComposer>
            <Bloom
              mipmapBlur={0}
              luminanceThreshold={0.5}
              luminanceSmoothing={2}
            />
          </EffectComposer> */}
          {/* <MinesweeperBoard /> */}
        </Canvas>
      </MotionConfig>
    </>
  );
}

export default App;
