import { Avatar } from "./Avatar";
import React, { useEffect, useRef, useState } from "react";
import { Room } from "./Room";
import { motion } from "framer-motion-3d";
import {
  Environment,
  MeshReflectorMaterial,
  PresentationControls,
  Text,
  Text3D,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Color } from "three";
import { Bloom, Depth, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";

export default function MainComponent(props) {
  const { navigate, setNavigate } = props;
  const [onCamera, setOnCamera] = useState(true);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  const controls = useRef();
  const bloomColor = new Color("#fff");
  bloomColor.multiplyScalar(1.1);

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(navigate === 0 ? "Typing" : "Standing");
    }, 600);
  }, [navigate]);

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 0.5;
    controls.current.dolly(22, true);
  };
  const aboutPage = async () => {
    controls.current.dolly(-8);
    controls.current.smoothTime = 0.1;
    controls.current.dolly(8, true);
    setNavigate(1);
  };
  const contactPage = async () => {
    controls.current.dolly(-8);
    controls.current.smoothTime = 0.1;
    controls.current.dolly(8, true);
    setNavigate(2);
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
          x:
            navigate === 0
              ? 0
              : navigate === 1
              ? -2.5
              : navigate === 2
              ? -0.4
              : 0,
          y:
            navigate === 0
              ? 0
              : navigate === 1
              ? 1.7
              : navigate === 2
              ? 1.7
              : 0,
          z:
            navigate === 0
              ? 0
              : navigate === 1
              ? 9.9
              : navigate === 2
              ? 11.3
              : 0,
          rotateY:
            navigate === 0
              ? -Math.PI / 7
              : navigate === 1
              ? 0.6
              : navigate === 2
              ? 1.4
              : 0,
        }}
      >
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
            <meshBasicMaterial color={"#007aa5"} />
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
            aboutPage();
          }}
        >
          <Text
            font={"fonts/Poppins-Medium.ttf"}
            fontSize={1.5}
            rotation-y={degToRad(75)}
          >
            AboutMe
            <meshBasicMaterial color={bloomColor} />
          </Text>
        </motion.group>
        <motion.group
          name="AboutContact"
          position-x={-1.3}
          position-y={0}
          position-z={1}
          scale={0.25}
          whileHover={{
            scale: 0.35,
          }}
          onClick={() => {
            contactPage();
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
          <Room setNavigate={setNavigate} />

          <motion.group
            name="Avatar"
            rotation={[-Math.PI, 0.06, -Math.PI]}
            rotation-x={-Math.PI / 2}
            animate={{
              x:
                navigate === 0
                  ? 1
                  : navigate === 1
                  ? 0.7
                  : navigate === 2
                  ? 1.2
                  : -1,
              y:
                navigate === 0
                  ? 0.1
                  : navigate === 1
                  ? 1.9
                  : navigate === 2
                  ? 1.9
                  : -1,
              z:
                navigate === 0
                  ? -1.8
                  : navigate === 1
                  ? -3.5
                  : navigate === 2
                  ? -3.7
                  : -1,
              scale:
                navigate === 0
                  ? 2.018
                  : navigate === 1
                  ? 0.2
                  : navigate === 2
                  ? 0.2
                  : -1,
              rotateZ:
                navigate === 0
                  ? -Math.PI
                  : navigate === 1
                  ? 0.1
                  : navigate === 2
                  ? 0.1
                  : -1,
            }}
          >
            <Avatar animation={characterAnimation} />
          </motion.group>
        </group>
      </motion.group>
      <mesh name="Floor" position-y={-0.48} rotation-x={-Math.PI / 2}>
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
      <CameraControls
        ref={controls}
        smoothTime={1.6}
        enableZoom={false}
        maxAzimuthAngle={0}
        minAzimuthAngle={0}
        maxPolarAngle={1.5}
        enabled={onCamera}
        onStart={() => {
          setOnCamera(false);
        }}
      />

      <Environment preset="forest" />
    </>
  );
}
