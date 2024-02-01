/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/room.glb 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";

import { motion } from "framer-motion-3d";
import { ToneMapping } from "@react-three/postprocessing";
import { Color } from "three";

export function Room(props) {
  const { cameraRef, setNavigate } = props;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/room.glb");
  const { actions } = useAnimations(animations, group);

  const monitorColor = new THREE.MeshBasicMaterial({ color: "#007FFF" });

  const texture = useTexture("textures/Baked.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  const textureMaterial = new THREE.MeshStandardMaterial({ map: texture });

  return (
    <group {...props} dispose={null}>
      <motion.group
        name="Bonsai"
        position={[-1.226, 1.043, 0.917]}
        whileHover={{
          scale: 1.1,
        }}
      >
        <mesh
          name="mesh430673059"
          geometry={nodes.mesh430673059.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh430673059_1"
          geometry={nodes.mesh430673059_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh430673059_2"
          geometry={nodes.mesh430673059_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh430673059_3"
          geometry={nodes.mesh430673059_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh430673059_4"
          geometry={nodes.mesh430673059_4.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh430673059_5"
          geometry={nodes.mesh430673059_5.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh430673059_6"
          geometry={nodes.mesh430673059_6.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh430673059_7"
          geometry={nodes.mesh430673059_7.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <group
        name="Chair"
        position={[1.148, 0.522, -2.031]}
        rotation={[-Math.PI, 0.052, -Math.PI]}
      >
        <mesh
          name="Node-Mesh"
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_2"
          geometry={nodes["Node-Mesh_2"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_3"
          geometry={nodes["Node-Mesh_3"].geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="ComputerMouse_mesh"
        geometry={nodes.ComputerMouse_mesh.geometry}
        material={textureMaterial}
        position={[1.743, 1.52, -3.101]}
        rotation={[-3.14, -0.029, -3.132]}
        scale={0.057}
      />
      <group name="FlatTv" position={[-1.508, 2.427, -3.88]}>
        <mesh
          name="mesh1257628551"
          geometry={nodes.mesh1257628551.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh1257628551_1"
          geometry={nodes.mesh1257628551_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh1257628551_2"
          geometry={nodes.mesh1257628551_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh1257628551_3"
          geometry={nodes.mesh1257628551_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh1257628551_4"
          geometry={nodes.mesh1257628551_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group name="FlowerPot1" position={[-3.388, 2.821, -2.499]}>
        <mesh
          name="FlowerPot2_1"
          geometry={nodes.FlowerPot2_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="FlowerPot2_2"
          geometry={nodes.FlowerPot2_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="FlowerPot2_3"
          geometry={nodes.FlowerPot2_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="FlowerPot2_4"
          geometry={nodes.FlowerPot2_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group name="FlowerPot2" position={[-3.461, 2.821, 2.348]}>
        <mesh
          name="FlowerPot2001"
          geometry={nodes.FlowerPot2001.geometry}
          material={textureMaterial}
        />
        <mesh
          name="FlowerPot2001_1"
          geometry={nodes.FlowerPot2001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="FlowerPot2001_2"
          geometry={nodes.FlowerPot2001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="FlowerPot2001_3"
          geometry={nodes.FlowerPot2001_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Keyboard"
        position={[1.036, 1.589, -3.081]}
        rotation={[0, 0.374, 0]}
      >
        <mesh
          name="mesh2146178072"
          geometry={nodes.mesh2146178072.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh2146178072_1"
          geometry={nodes.mesh2146178072_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh2146178072_2"
          geometry={nodes.mesh2146178072_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh2146178072_3"
          geometry={nodes.mesh2146178072_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group name="MacBook" position={[2.34, 1.591, -3.148]}>
        <mesh
          name="mesh256948792"
          geometry={nodes.mesh256948792.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh256948792_1"
          geometry={nodes.mesh256948792_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh256948792_2"
          geometry={nodes.mesh256948792_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh256948792_3"
          geometry={nodes.mesh256948792_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh256948792_4"
          geometry={nodes.mesh256948792_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Monitor1"
        position={[0.368, 1.76, -3.586]}
        rotation={[0, -1.115, 0]}
      >
        <mesh
          name="mesh941242678"
          geometry={nodes.mesh941242678.geometry}
          material={monitorColor}
        />
        <mesh
          name="mesh941242678_1"
          geometry={nodes.mesh941242678_1.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Monitor2"
        position={[1.609, 1.76, -3.712]}
        rotation={[Math.PI, -1.325, Math.PI]}
      >
        <mesh
          name="mesh941242678001"
          geometry={nodes.mesh941242678001.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh941242678001_1"
          geometry={nodes.mesh941242678001_1.geometry}
          material={monitorColor}
        />
      </group>
      <group
        name="Plant"
        position={[3.409, 0.313, -3.244]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Plant2"
          geometry={nodes.Plant2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plant2_1"
          geometry={nodes.Plant2_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plant2_2"
          geometry={nodes.Plant2_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Sofa"
        position={[-1.843, 0.022, 3.081]}
        rotation={[-Math.PI / 2, 0, -3.14]}
      >
        <mesh
          name="Sofa3"
          geometry={nodes.Sofa3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Sofa3_1"
          geometry={nodes.Sofa3_1.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Table"
        position={[1.183, 0.051, -3.147]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Desk"
          geometry={nodes.Desk.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Desk_1"
          geometry={nodes.Desk_1.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Table_large_circular"
        geometry={nodes.Table_large_circular.geometry}
        material={textureMaterial}
        position={[-1.235, 0, 0.917]}
        scale={148.865}
      />
      <mesh
        name="Plane_1"
        geometry={nodes.Plane_1.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane_2"
        geometry={nodes.Plane_2.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane_3"
        geometry={nodes.Plane_3.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane_4"
        geometry={nodes.Plane_4.geometry}
        material={textureMaterial}
      />
    </group>
  );
}

useGLTF.preload("models/room.glb");
