import Avatar from "./Avatar";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import Interface from "./Ui/Interface";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../features/redux/slices/cameraSlice";

export default function MainComponent() {
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  const groupRef = useRef();
  const avatarRef = useRef();

  const currentPage = useSelector((state) => state.camera.value);
  const onMobile = window.innerWidth < 768;
  const onTab = window.innerHeight < 768;

  console.log(window.innerHeight, window.innerWidth);

  const dispatch = useDispatch();
  const bloomColor = new Color("#fff");
  bloomColor.multiplyScalar(1.1);
  const aboutPage = async () => {
    dispatch(setCurrentPage("about"));
  };
  const contactPage = async () => {
    dispatch(setCurrentPage("contact"));
  };
  const playPage = useCallback(async () => {
    dispatch(setCurrentPage("play"));
  }, []);
  useEffect(() => {
    groupRef.current.rotation.set(0.1, -0.5, 0);
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(
        currentPage !== "home"
          ? currentPage === "about"
            ? "Running"
            : "Standing"
          : "Typing"
      );
    }, 600);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== "home") {
      setTimeout(() => {
        groupRef.current.visible = false;
      }, 1200);
    }

    groupRef.current.visible = true;
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
        <motion.group position-y={0.5} scale={1.1}>
          <motion.group
            name="Avatar"
            ref={avatarRef}
            rotation-x={-Math.PI / 2}
            position={[2.7, -0.1, 1.6]}
            initial={{ opacity: 0 }} // Устанавливаем начальное значение прозрачности в 0
            animate={{
              x:
                currentPage === "about" || currentPage === "contact"
                  ? onMobile
                    ? 3.0
                    : 4
                  : currentPage === "play"
                  ? -0.5
                  : 2.7,
              y: currentPage === "play" ? -0.6 : -0.1,
              z:
                currentPage === "about" || currentPage === "contact"
                  ? -2
                  : currentPage === "play"
                  ? 5
                  : 1.6,
              scale:
                currentPage === "about" || currentPage === "contact"
                  ? onMobile
                    ? 1.5
                    : 1.4
                  : currentPage === "play"
                  ? 2
                  : 1,
              rotateX: -1.5,
              rotateZ:
                currentPage === "about" || currentPage === "contact"
                  ? -0.5
                  : currentPage === "play"
                  ? degToRad(45)
                  : [Math.PI / 1.75],
              opacity: 1, // Устанавливаем прозрачность в 1 при переходе на другие страницы
            }}
            transition={{}}
          >
            <Avatar animation={characterAnimation} />
          </motion.group>

          <group ref={groupRef}>
            <group name="TextGroup">
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
              <motion.group
                name="Play"
                position-x={1.5}
                position-y={0.8}
                position-z={0.4}
                scale={0.3}
                rotation={[0, -1, 0]}
                animate={{
                  scale: [0.3, 0.25, 0.3],
                }}
                transition={{
                  duration: 2,
                  smoothTime: 1,
                  ease: "easeIn",
                  repeat: Infinity,
                }}
              >
                <Text
                  font={"fonts/Poppins-Medium.ttf"}
                  fontSize={1.5}
                  rotation-y={degToRad(75)}
                  color={"white"}
                  onClick={() => {
                    playPage();
                  }}
                >
                  PLAY!
                </Text>
              </motion.group>
            </group>

            <group
              scale={0.5}
              rotation-y={degToRad(-60)}
              position-x={2}
              position-y={0}
              position-z={0}
            >
              <Room />
            </group>
            <mesh name="Floor" position-y={-1} rotation-x={-Math.PI / 2}>
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
      <motion.group
        position={onMobile ? [1.5, 7, -6] : onTab ? [-8, 7, -6] : [-3, 7.5, -7]}
      >
        <Html currentPage={currentPage}>
          <Interface
            onTab={onTab}
            onMobile={onMobile}
            dispatch={dispatch}
            currentPage={currentPage}
          />
        </Html>
      </motion.group>

      <Environment preset="forest" />
    </>
  );
}

useFont.preload("fonts/Poppins-Medium.ttf");
