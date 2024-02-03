import Avatar from "./Avatar";
import React, { useEffect, useRef, useState } from "react";
import { Room } from "./Room";
import { motion } from "framer-motion-3d";
import {
  Environment,
  Html,
  MeshReflectorMaterial,
  PresentationControls,
  Text,
  useFont,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { CameraControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Color } from "three";
import { Bloom, Depth, EffectComposer } from "@react-three/postprocessing";

import Interface from "./Ui/Interface";

export default function MainComponent(props) {
  const { navigate, setNavigate } = props;
  const [onCamera, setOnCamera] = useState(true);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  const controls = useRef();
  const { viewport } = useThree();

  const onMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const bloomColor = new Color("#007FFF");
  bloomColor.multiplyScalar(1.1);

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(
        navigate === 0 ? "Typing" : navigate === 1 ? "Running" : "Standing"
      );
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
        scale={onMobile ? 0.3 : 1}
        animate={{
          x:
            navigate === 0
              ? 0
              : navigate === 1
              ? onMobile
                ? -0.7
                : -2.3
              : navigate === 2
              ? onMobile
                ? -0.2
                : -0.4
              : 0,
          y:
            navigate === 0
              ? 0
              : navigate === 1
              ? onMobile
                ? 2.62
                : 1.8
              : navigate === 2
              ? onMobile
                ? 2.61
                : 1.83
              : 0,
          z:
            navigate === 0
              ? 0
              : navigate === 1
              ? onMobile
                ? 8.75
                : 10.6
              : navigate === 2
              ? onMobile
                ? 9.06
                : 11.65
              : 0,
          rotateY:
            navigate === 0
              ? -Math.PI / 7
              : navigate === 1
              ? 0.4
              : navigate === 2
              ? onMobile
                ? 1.05
                : 1.1
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
          animate={{
            scale: [0.3, 0.25, 0.3],
          }}
          transition={{
            duration: 2,
            smoothTime: 1,
            ease: "easeIn",
            repeat: Infinity,
          }}
          onClick={() => {
            aboutPage();
          }}
        >
          <Text
            font={"fonts/Poppins-Medium.ttf"}
            fontSize={1.5}
            rotation-y={degToRad(75)}
            color={bloomColor}
          >
            AboutMe
          </Text>
        </motion.group>
        <motion.group
          name="ContactMe"
          position-x={-1.3}
          position-y={0}
          position-z={1}
          scale={0.25}
          animate={{
            scale: [0.3, 0.25, 0.3],
          }}
          transition={{
            duration: 2,
            smoothTime: 1,
            ease: "easeIn",
            repeat: Infinity,
          }}
          onClick={() => {
            contactPage();
          }}
        >
          <Text
            font={"fonts/Poppins-Medium.ttf"}
            fontSize={1.5}
            rotation-y={degToRad(75)}
            color={bloomColor}
          >
            ContactMe
            <meshBasicMaterial />
          </Text>
        </motion.group>

        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 2, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <group
            scale={0.5}
            rotation-y={degToRad(-60)}
            position-x={2}
            position-y={0}
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
                    ? onMobile
                      ? 0.48
                      : 0.52
                    : navigate === 2
                    ? onMobile
                      ? 1.62
                      : 1.25
                    : 1,
                y:
                  navigate === 0
                    ? 0.1
                    : navigate === 1
                    ? 1.98
                    : navigate === 2
                    ? onMobile
                      ? 1.9
                      : 1.8
                    : 0.1,
                z:
                  navigate === 0
                    ? -1.8
                    : navigate === 1
                    ? onMobile
                      ? -3.55
                      : -3.5
                    : navigate === 2
                    ? onMobile
                      ? -3.6
                      : -3.5
                    : -1.8,
                scale:
                  navigate === 0
                    ? 2.018
                    : navigate === 1
                    ? 0.15
                    : navigate === 2
                    ? onMobile
                      ? 0.2
                      : 0.2
                    : 2.018,
                rotateZ:
                  navigate === 0
                    ? -Math.PI
                    : navigate === 1
                    ? 0.1
                    : navigate === 2
                    ? onMobile
                      ? 0
                      : 0.1
                    : -1.1,
              }}
            >
              <Avatar animation={characterAnimation} />
            </motion.group>
          </group>
        </PresentationControls>
      </motion.group>
      <mesh name="Floor" position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[50, 50]}
          resolution={512}
          mixBlur={1}
          mixStrength={10}
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
        smoothTime={1}
        enableZoom={false}
        maxAzimuthAngle={0}
        minAzimuthAngle={0}
        maxPolarAngle={1.5}
        enabled={false}
      />

      <Html position-x={onMobile ? -1.5 : -2} position-y={3}>
        <Interface
          navigate={navigate}
          setNavigate={setNavigate}
          onMobile={onMobile}
        />
      </Html>
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={1}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.5}
        />
      </EffectComposer>
      <Environment preset="forest" />
    </>
  );
}

useFont.preload("fonts/Poppins-Medium.ttf");
