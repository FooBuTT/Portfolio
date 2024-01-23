import { Avatar } from "./Avatar";
import React, { useRef, useState } from "react";
import { Room } from "./Room";
import { motion } from "framer-motion-3d";
import { Environment, MeshReflectorMaterial, Text } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

export default function MainComponent(props) {
  const { onMonitor } = props;
  const cameraRef = useRef();

  return (
    <>
      <motion.group
        position={[0, 0, 0]}
        // position={[-2.8, 1.5, 5.7]}
        rotation-x={6.3}
        rotation-y={-Math.PI / 7}
        animate={{
          x: onMonitor === false ? 0 : -2.4,
          y: onMonitor === false ? 0 : 1.5,
          z: onMonitor === false ? 0 : 5.7,
        }}
      >
        <Text
          font={"fonts/Poppins-Medium.ttf"}
          fontSize={0.2}
          position-x={-1}
          position-y={0.9}
          position-z={2}
          lineHeight={1}
          textAlign="center"
          rotation-y={degToRad(60)}
        >
          Hi everyone!!!{"\n"}
          My name is Oleg, and I am {"\n"}a FullStack developer.{"\n"}
          This is my Portfolio page.{"\n"}
          In this project, I use the{"\n"}
          JavaScript, React, R3f, and
          {"\n"}
          React three Drei stack with Vite.{"\n"}
          Please contact me for your offer!
          <meshBasicMaterial color={"white"} />
        </Text>
        <group scale={0.4} rotation-y={degToRad(-55)} position-x={2.2}>
          <Room />
          <group
            position={[1.101, 0.076, -1.817]}
            rotation={[-Math.PI, 0.06, -Math.PI]}
            scale={2.018}
          >
            <Avatar />
          </group>
        </group>
      </motion.group>
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="night" />
    </>
  );
}
