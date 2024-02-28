import { CameraControls } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import { useSelector } from "react-redux";

export default function CameraPositionControls(props) {
  const currentPage = useSelector((state) => state.camera.value);
  const controls = useRef();
  const meshFitCamera = useRef();
  const meshFitAbout = useRef();
  const meshFitPlay = useRef();
  const aboutRef = useRef();
  const playRef = useRef();

  // function CameraHelper() {
  //   new THREE.PerspectiveCamera(60, 4, 5, 12);
  //   return <cameraHelper args={[camera]} />;
  // }

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.6;

    fitCamera();
  };

  const fitCamera = async () => {
    if (currentPage !== "home" && currentPage !== "play") {
      controls.current.fitToBox(meshFitAbout.current, true);
      controls.current.smoothTime = 0.6;
      return;
    }
    if (currentPage === "play") {
      controls.current.fitToBox(meshFitPlay.current, true);
      controls.current.smoothTime = 2;
    } else {
      controls.current.fitToBox(meshFitCamera.current, true);
      controls.current.smoothTime = 0.6;
    }
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  // useFrame(() => {
  //   const { x, y, z } = camera.position;
  //   console.log(`Координаты камеры: x=${x}, y=${y}, z=${z}`, camera);
  // });

  return (
    <>
      {/* <CameraHelper /> */}
      <mesh
        name="CameraDefaultSpot"
        ref={meshFitCamera}
        visible={false}
        position-y={1}
        position-z={1}
      >
        <boxGeometry args={[9, 3, 5]} />
        <meshBasicMaterial color={"#fff"} transparent opacity={0.5} />
      </mesh>
      <group ref={aboutRef} position={[3.2, 1.5, 0.5]}>
        <mesh name="CameraAboutSpot" ref={meshFitAbout} visible={false}>
          <boxGeometry args={[0.2, 0.2, -1]} />
          <meshBasicMaterial color={"red"} transparent opacity={0.5} />
        </mesh>
      </group>
      <group ref={playRef} position={[3.2, 1.5, 8]}>
        <mesh name="CameraPlaySpot" ref={meshFitPlay} visible={false}>
          <boxGeometry args={[6.5, 4, 1]} />
          <meshBasicMaterial color={"green"} transparent opacity={0.5} />
        </mesh>
      </group>
      <CameraControls ref={controls} />
    </>
  );
}
