import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";

export default function CameraControls(props) {
  const controls = useRef();
  const { camera } = useThree();
  // Получаем текущее положение камеры
  useFrame(() => {
    const { x, y, z } = camera.position;
    console.log(`Координаты камеры: x=${x}, y=${y}, z=${z}`, camera);
  });

  return <OrbitControls ref={controls} args={[camera]} enableZoom={true} />;
}
