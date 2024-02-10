import Avatar from "./Avatar";
import React, { Suspense, useEffect, useRef, useState } from "react";
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
import { degToRad, lerp } from "three/src/math/MathUtils";
import { CameraControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Color } from "three";
import { Bloom, Depth, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";
import Interface from "./Ui/Interface";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../features/redux/slices/cameraSlice";

export default function MainComponent(props) {
  const { navigate, setNavigate } = props;
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  const groupRef = useRef();
  const avatarRef = useRef();

  const currentPage = useSelector((state) => state.camera.value);
  const onMobile = window.innerWidth < 768;

  const dispatch = useDispatch();
  const bloomColor = new Color("#fff");
  bloomColor.multiplyScalar(1.1);
  const aboutPage = async () => {
    dispatch(setCurrentPage("about"));
    setTimeout(() => {
      setNavigate(1);
    }, 1000);
  };
  const contactPage = async () => {
    dispatch(setCurrentPage("contact"));
    setTimeout(() => {
      setNavigate(2);
    }, 1000);
  };
  useEffect(() => {
    groupRef.current.rotation.set(0.1, -0.5, 0);
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(
        navigate === 0 ? "Typing" : navigate === 1 ? "Running" : "Standing"
      );
    }, 600);
  }, [navigate]);

  useEffect(() => {
    if (currentPage === "about" || currentPage === "contact") {
      setTimeout(() => {
        groupRef.current.visible = false;
      }, 2000);
    }
    if (currentPage === "home") {
      groupRef.current.visible = true;
    }
  }, [currentPage]);
  useFrame(() => {
    if (currentPage === "about") {
      avatarRef.current.rotation.z += 0.01;
    }
  });
  return (
    <>
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 2, tension: 1500 }}
      >
        <motion.group>
          <motion.group
            name="Avatar"
            ref={avatarRef}
            rotation-x={-Math.PI / 2}
            position={[2.7, -0.1, 1.6]}
            animate={{
              x:
                currentPage === "about" || currentPage === "contact"
                  ? onMobile
                    ? 3.4
                    : 4
                  : 2.7,
              y: -0.1,
              z:
                currentPage === "about" || currentPage === "contact" ? -2 : 1.6,
              scale:
                currentPage === "about" || currentPage === "contact"
                  ? onMobile
                    ? 1
                    : 1.4
                  : 1,
              rotateX: -1.5,

              rotateZ:
                currentPage === "about" || currentPage === "contact"
                  ? -0.5
                  : [Math.PI / 1.75],
            }}
          >
            <Avatar animation={characterAnimation} />
          </motion.group>
          <group ref={groupRef}>
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
              </Text>
            </motion.group>

            <group
              scale={0.5}
              rotation-y={degToRad(-60)}
              position-x={2}
              position-y={0}
              position-z={0}
            >
              <Room setNavigate={setNavigate} />
            </group>

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
          </group>
        </motion.group>
      </PresentationControls>
      <motion.group position={onMobile ? [1.6, 7, -6] : [-3, 7.5, -7]}>
        <Html>
          <Interface
            navigate={navigate}
            setNavigate={setNavigate}
            onMobile={onMobile}
            dispatch={dispatch}
          />
        </Html>
      </motion.group>

      <Environment preset="forest" />
    </>
  );
}

useFont.preload("fonts/Poppins-Medium.ttf");
