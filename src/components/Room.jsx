/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/room.glb 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Room(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/room.glb");
  const { actions } = useAnimations(animations, group);
  const texture = useTexture("textures/Table.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  const textureMaterial = new THREE.MeshStandardMaterial({ map: texture });

  return (
    <group {...props} dispose={null}>
      <group
        name="Table"
        position={[1.183, 0.094, -3.147]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={163.897}
      >
        <mesh
          name="Desk"
          geometry={nodes.Desk.geometry}
          material={materials.DarkWood}
        />
        <mesh
          name="Desk_1"
          geometry={nodes.Desk_1.geometry}
          material={materials.Wood}
        />
      </group>
      <group
        name="Sofa"
        position={[-1.843, 0, 3.081]}
        rotation={[-Math.PI / 2, 0, -3.14]}
        scale={100}
      >
        <mesh
          name="Sofa3"
          geometry={nodes.Sofa3.geometry}
          material={materials.Sofa}
        />
        <mesh
          name="Sofa3_1"
          geometry={nodes.Sofa3_1.geometry}
          material={materials.Legs}
        />
      </group>
      <mesh
        name="TableCircular"
        geometry={nodes.TableCircular.geometry}
        material={materials.Material}
        position={[-1.196, 0.016, 0.963]}
        scale={145.301}
      />
      <group
        name="Plant"
        position={[3.409, 0.313, -3.244]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={278.663}
      >
        <mesh
          name="Plant2"
          geometry={nodes.Plant2.geometry}
          material={materials["Plant.001"]}
        />
        <mesh
          name="Plant2_1"
          geometry={nodes.Plant2_1.geometry}
          material={materials["Plant.002"]}
        />
        <mesh
          name="Plant2_2"
          geometry={nodes.Plant2_2.geometry}
          material={materials["Plant.003"]}
        />
      </group>
      <group name="Bonsai" position={[-1.226, 1.062, 0.917]} scale={0.363}>
        <mesh
          name="mesh430673059"
          geometry={nodes.mesh430673059.geometry}
          material={materials.mat17}
        />
        <mesh
          name="mesh430673059_1"
          geometry={nodes.mesh430673059_1.geometry}
          material={materials.mat11}
        />
        <mesh
          name="mesh430673059_2"
          geometry={nodes.mesh430673059_2.geometry}
          material={materials.mat20}
        />
        <mesh
          name="mesh430673059_3"
          geometry={nodes.mesh430673059_3.geometry}
          material={materials.mat10}
        />
        <mesh
          name="mesh430673059_4"
          geometry={nodes.mesh430673059_4.geometry}
          material={materials.mat8}
        />
        <mesh
          name="mesh430673059_5"
          geometry={nodes.mesh430673059_5.geometry}
          material={materials.mat25}
        />
        <mesh
          name="mesh430673059_6"
          geometry={nodes.mesh430673059_6.geometry}
          material={materials.mat15}
        />
        <mesh
          name="mesh430673059_7"
          geometry={nodes.mesh430673059_7.geometry}
          material={materials.mat16}
        />
      </group>
      <group
        name="Monitor1"
        position={[0.368, 1.803, -3.575]}
        rotation={[0, -1.115, 0]}
        scale={1.57}
      >
        <mesh
          name="mesh941242678"
          geometry={nodes.mesh941242678.geometry}
          material={materials.mat23}
        />
        <mesh
          name="mesh941242678_1"
          geometry={nodes.mesh941242678_1.geometry}
          material={materials["mat17.001"]}
        />
      </group>
      <group
        name="Monitor2"
        position={[1.49, 1.803, -3.678]}
        rotation={[Math.PI, -1.325, Math.PI]}
        scale={1.57}
      >
        <mesh
          name="mesh941242678001"
          geometry={nodes.mesh941242678001.geometry}
          material={materials["mat23.001"]}
        />
        <mesh
          name="mesh941242678001_1"
          geometry={nodes.mesh941242678001_1.geometry}
          material={materials["mat17.002"]}
        />
      </group>
      <mesh
        name="Keyboard"
        geometry={nodes.Keyboard.geometry}
        material={materials.lambert3SG}
        position={[1.116, 1.593, -2.902]}
        scale={[0.002, 0.004, 0.002]}
      />
      <mesh
        name="ComputerMouse"
        geometry={nodes.ComputerMouse.geometry}
        material={materials.ComputerMouse_mat1}
        position={[1.871, 1.599, -2.905]}
        rotation={[-Math.PI, 0.02, -Math.PI]}
        scale={[0.024, 0.017, 0.024]}
      />
      <group name="FlatTv" position={[-1.508, 2.427, -3.88]} scale={0.576}>
        <mesh
          name="mesh1257628551"
          geometry={nodes.mesh1257628551.geometry}
          material={materials["mat23.002"]}
        />
        <mesh
          name="mesh1257628551_1"
          geometry={nodes.mesh1257628551_1.geometry}
          material={materials["mat17.003"]}
        />
        <mesh
          name="mesh1257628551_2"
          geometry={nodes.mesh1257628551_2.geometry}
          material={materials["mat16.001"]}
        />
        <mesh
          name="mesh1257628551_3"
          geometry={nodes.mesh1257628551_3.geometry}
          material={materials.mat22}
        />
        <mesh
          name="mesh1257628551_4"
          geometry={nodes.mesh1257628551_4.geometry}
          material={materials["mat15.001"]}
        />
      </group>
      <group name="FlowerPot1" position={[-3.607, 2.821, -2.499]}>
        <mesh
          name="FlowerPot2_1"
          geometry={nodes.FlowerPot2_1.geometry}
          material={materials.ChainFlowerPot2}
        />
        <mesh
          name="FlowerPot2_2"
          geometry={nodes.FlowerPot2_2.geometry}
          material={materials.VaseFlowerPot2}
        />
        <mesh
          name="FlowerPot2_3"
          geometry={nodes.FlowerPot2_3.geometry}
          material={materials.GroundFlowerPot2}
        />
        <mesh
          name="FlowerPot2_4"
          geometry={nodes.FlowerPot2_4.geometry}
          material={materials.LeafsFlowerPot2}
        />
      </group>
      <group name="FlowerPot2" position={[-3.607, 2.821, 2.348]}>
        <mesh
          name="FlowerPot2001"
          geometry={nodes.FlowerPot2001.geometry}
          material={materials["ChainFlowerPot2.001"]}
        />
        <mesh
          name="FlowerPot2001_1"
          geometry={nodes.FlowerPot2001_1.geometry}
          material={materials["VaseFlowerPot2.001"]}
        />
        <mesh
          name="FlowerPot2001_2"
          geometry={nodes.FlowerPot2001_2.geometry}
          material={materials["GroundFlowerPot2.001"]}
        />
        <mesh
          name="FlowerPot2001_3"
          geometry={nodes.FlowerPot2001_3.geometry}
          material={materials["LeafsFlowerPot2.001"]}
        />
      </group>
      <group name="MacBook" position={[2.34, 1.634, -3.148]} scale={0.208}>
        <mesh
          name="mesh256948792"
          geometry={nodes.mesh256948792.geometry}
          material={materials["mat16.002"]}
        />
        <mesh
          name="mesh256948792_1"
          geometry={nodes.mesh256948792_1.geometry}
          material={materials["mat23.003"]}
        />
        <mesh
          name="mesh256948792_2"
          geometry={nodes.mesh256948792_2.geometry}
          material={materials["mat17.004"]}
        />
        <mesh
          name="mesh256948792_3"
          geometry={nodes.mesh256948792_3.geometry}
          material={materials["mat25.001"]}
        />
        <mesh
          name="mesh256948792_4"
          geometry={nodes.mesh256948792_4.geometry}
          material={materials["mat15.002"]}
        />
      </group>
      <group name="Plane" scale={4}>
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials.Floor}
        />
        <mesh
          name="Plane001_1"
          geometry={nodes.Plane001_1.geometry}
          material={materials.Default}
        />
        <mesh
          name="Plane001_2"
          geometry={nodes.Plane001_2.geometry}
          material={materials.Wall}
        />
      </group>
      <group
        name="Chair"
        position={[1.148, 0.499, -2.031]}
        rotation={[-Math.PI, 0.052, -Math.PI]}
        scale={0.055}
      >
        <mesh
          name="Node-Mesh"
          geometry={nodes["Node-Mesh"].geometry}
          material={materials.Executive}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={nodes["Node-Mesh_1"].geometry}
          material={materials.Executive__1}
        />
        <mesh
          name="Node-Mesh_2"
          geometry={nodes["Node-Mesh_2"].geometry}
          material={materials.Executive__2}
        />
        <mesh
          name="Node-Mesh_3"
          geometry={nodes["Node-Mesh_3"].geometry}
          material={materials.Executive__3}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/room.glb");
