import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import React from "react";

export default function MainComponent() {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar />
      </group>
      <ambientLight intensity={1} />
    </>
  );
}
