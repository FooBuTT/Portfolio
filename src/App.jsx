import { useSelector } from "react-redux";
import { Canvas, useFrame } from "@react-three/fiber";
import MainComponent from "./components/MainComponent";
import { Suspense, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Loading from "./components/Ui/Loading";
import CameraPositionControls from "./components/Ui/CameraPositionControls";

function App() {
  const [navigate, setNavigate] = useState(0);
  const [load, setLoad] = useState(false);
  const [backGroundColor, setBackGroundColor] = useState("#171720");

  const currentPage = useSelector((state) => state.camera.value);

  useEffect(() => {
    if (currentPage === "about" || currentPage === "contact") {
      setTimeout(() => {
        setBackGroundColor("#007FFF");
      }, 2000);
    }
    setBackGroundColor("#171720");
  }, [currentPage]);
  return (
    <>
      <Loading load={load} setLoad={setLoad} />
      <MotionConfig>
        <Canvas>
          <CameraPositionControls
            navigate={navigate}
            setNavigate={setNavigate}
          />

          <color attach="background" args={[backGroundColor]} />
          <fog attach="fog" args={["#171720", 10, 30]} />
          <ambientLight intensity={1} />

          {/* <ScrollControls damping={0.1}> */}
          {/* <NavigateController navigate={navigate} setNavigate={setNavigate} /> */}
          <Suspense>
            <MainComponent navigate={navigate} setNavigate={setNavigate} />
          </Suspense>

          {/* </ScrollControls> */}
        </Canvas>
      </MotionConfig>
    </>
  );
}

export default App;
