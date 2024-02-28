import React, { useState } from "react";
import { motion } from "framer-motion-3d";
import { degToRad } from "three/src/math/MathUtils";
import { Text } from "@react-three/drei";

const RestartButton = ({ onClick, restartButtonColor }) => {
  return (
    <group position={[0.35, 0, -2]} rotation-x={degToRad(90)}>
      <motion.mesh
        position={[1, 0, 0]}
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <boxGeometry args={[2, 0.2, 1]} />
        <meshStandardMaterial color={restartButtonColor} />
        <Text
          color={"white"}
          position={[0, 0.12, 0.1]}
          rotation-x={degToRad(-90)}
          scale={[0.5, 1, 2]}
        >
          Restart
        </Text>
      </motion.mesh>
    </group>
  );
};

export default RestartButton;
