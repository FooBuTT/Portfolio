import { Avatar } from "./Avatar";
import React, { useEffect, useRef, useState } from "react";
import { Room } from "./Room";
import { motion } from "framer-motion-3d";
import {
  Environment,
  MeshReflectorMaterial,
  Text,
  Text3D,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Color } from "three";

export default function MainComponent(props) {
  const { onMonitor, navigate, setNavigate } = props;
  const controls = useRef();

  const bloomColor = new Color("#007aa5");
  bloomColor.multiplyScalar(1.1);

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1;
    controls.current.dolly(22, true);
  };

  useEffect(() => {
    intro();
  }, []);
  return (
    <>
      <motion.group
        // position={[-2.8, 1.5, 5.7]}
        rotation-x={6.3}
        rotation-y={-Math.PI / 7}
        animate={{
          x: onMonitor === false ? 0 : -2.4,
          y: onMonitor === false ? 0 : 1.5,
          z: onMonitor === false ? 0 : 5.7,
        }}
      >
        <CameraControls
          ref={controls}
          smoothTime={1.6}
          enableZoom={false}
          maxAzimuthAngle={0.1}
          minAzimuthAngle={-0.1}
          maxPolarAngle={1.5}
        />
        <group position-x={-1.5} position-y={1} position-z={2}>
          <Text
            font={"fonts/Poppins-Medium.ttf"}
            fontSize={0.35}
            lineHeight={1.2}
            textAlign="center"
            rotation-y={degToRad(75)}
          >
            Hi everyone!!!{"\n"}
            My name is Oleg, and I am {"\n"}a FullStack developer.{"\n"}
            This is my Portfolio page.{"\n"}
            <meshBasicMaterial color={bloomColor} toneMapped={false} />
          </Text>
        </group>
        <motion.group
          position-x={-2}
          position-y={0}
          position-z={3.5}
          scale={0.25}
          whileHover={{
            scale: 0.35,
          }}
          onClick={() => {
            console.log("click");
          }}
        >
          <Text
            font={"fonts/Poppins-Medium.ttf"}
            fontSize={1.5}
            rotation-y={degToRad(75)}
          >
            AboutMe
            <meshBasicMaterial color={bloomColor} toneMapped={false} />
          </Text>
        </motion.group>
        <motion.group
          position-x={-1.3}
          position-y={0}
          position-z={1}
          scale={0.25}
          whileHover={{
            scale: 0.35,
          }}
          onClick={() => {
            console.log("click");
          }}
        >
          <Text
            font={"fonts/Poppins-Medium.ttf"}
            fontSize={1.5}
            rotation-y={degToRad(75)}
          >
            ContactMe
            <meshBasicMaterial color={bloomColor} />
          </Text>
        </motion.group>
        <group
          scale={0.5}
          rotation-y={degToRad(-60)}
          position-x={2}
          position-z={0}
        >
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
          mixStrength={20}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={1}
        />
      </mesh>
      <Environment preset="forest" />
    </>
  );
}
