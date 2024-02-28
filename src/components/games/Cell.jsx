import React from "react";
import { motion } from "framer-motion-3d";
import { Text } from "@react-three/drei";

export default function Cell({
  position,
  isOpen,
  onClick,
  onRightClick,
  minesAround,
  mines,
}) {
  return (
    <group position={position}>
      <motion.mesh
        onClick={onClick}
        onContextMenu={onRightClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen && minesAround > 0 && !mines && (
          <group rotation-x={-1.5} position-y={0.1}>
            <Text color={"blue"}>{minesAround}</Text>
          </group>
        )}
        {!isOpen && <boxGeometry args={[0.9, 0.2, 0.9]} />}

        <meshStandardMaterial
          color={isOpen ? (mines ? "red" : "gray") : "gray"}
        />
      </motion.mesh>
    </group>
  );
}
