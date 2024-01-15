import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import React from "react";
import { Room } from "./Room";

export default function MainComponent() {
  return (
    <>
      <Room />
      <group
        position={[0, 0.169, -0.568]}
        rotation={[-Math.PI, 0.004, -Math.PI]}
      >
        {/* <Avatar /> */}
      </group>
    </>
  );
}
