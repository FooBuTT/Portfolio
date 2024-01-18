import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import React from "react";
import { Room } from "./Room";

export default function MainComponent() {
  return (
    <>
      <Room />
      <group
        position={[1.101, 0.076, -1.817]}
        rotation={[-Math.PI, 0.06, -Math.PI]}
        scale={2.018}
      >
        <Avatar />
      </group>
    </>
  );
}
