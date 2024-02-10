import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import { useSelector } from "react-redux";

export default function CameraPositionControls(props) {
  const currentPage = useSelector((state) => state.camera.value);
  const monitorUuid = useSelector((state) => state.monitor.uuid);
  const monitorObj = useThree().scene.getObjectByProperty("uuid", monitorUuid);

  const controls = useRef();
  console.log(monitorUuid, "UUID");
  const meshFitCamera = useRef();
  const meshFitAbout = useRef();
  const aboutRef = useRef();

  // function CameraHelper() {
  //   new THREE.PerspectiveCamera(60, 4, 5, 12);
  //   return <cameraHelper args={[camera]} />;
  // }

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.2;

    fitCamera();
  };

  const fitCamera = async () => {
    if (currentPage === "about" || currentPage === "contact") {
      controls.current.fitToBox(monitorObj, true);
      controls.current.smoothTime = 0.6;
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
        position-z={0}
      >
        <boxGeometry args={[9, 3, 5]} />
        <meshBasicMaterial color={"#fff"} transparent opacity={0.5} />
      </mesh>
      <group ref={aboutRef}>
        <mesh name="CameraAboutSpot" ref={meshFitAbout} visible={false}>
          <boxGeometry args={[0.4, 0.4, 0]} />
          <meshBasicMaterial color={"red"} transparent opacity={0.5} />
        </mesh>
      </group>
      <CameraControls ref={controls} rotate={false} />
    </>
  );
}
