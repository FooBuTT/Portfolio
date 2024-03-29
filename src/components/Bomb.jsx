/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Bomb.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

export function Bomb(props) {
  const { nodes, materials } = useGLTF("models/Bomb.glb");

  return (
    <group {...props} dispose={null}>
      <group
        rotation={[degToRad(180), 0, 0]}
        scale={45}
        position-y={0.1}
        position-z={0.1}
      >
        <mesh geometry={nodes.Bomb_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Bomb_2.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Bomb_3.geometry} material={materials.White} />
      </group>
    </group>
  );
}

useGLTF.preload("models/Bomb.glb");
