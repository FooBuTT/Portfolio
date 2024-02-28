/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/untitled.glb 
*/

import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

export default function Avatar(props) {
  const { animation } = props;
  const group = useRef();

  const { nodes, materials } = useGLTF("models/avatar.glb");
  const { animations: typingAnimation } = useFBX("animation/Typing.fbx");
  const { animations: runningAnimation } = useFBX("animation/Running.fbx");
  const { animations: standingAnimation } = useFBX("animation/Standing.fbx");
  const { animations: fallingAnimation } = useFBX("animation/Falling.fbx");

  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  runningAnimation[0].name = "Running";
  fallingAnimation[0].name = "Falling";

  const { actions } = useAnimations(
    [
      typingAnimation[0],
      standingAnimation[0],
      runningAnimation[0],
      fallingAnimation[0],
    ],
    group
  );

  useEffect(() => {
    actions[animation].reset().play();
    return () => {
      actions[animation].reset();
    };
  }, [actions]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials["Wolf3D_Body.003"]}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials["Wolf3D_Hair.003"]}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials["Wolf3D_Outfit_Bottom.003"]}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials["Wolf3D_Outfit_Footwear.003"]}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials["Wolf3D_Outfit_Top.003"]}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.EyeLeft.geometry}
        material={materials["Wolf3D_Eye.003"]}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.EyeRight.geometry}
        material={materials["Wolf3D_Eye.003"]}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Beard.geometry}
        material={materials["Wolf3D_Beard.001"]}
        skeleton={nodes.Wolf3D_Beard.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials["Wolf3D_Skin.003"]}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials["Wolf3D_Teeth.003"]}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("models/avatar.glb");
useFBX.preload("animation/Typing.fbx");
useFBX.preload("animation/Standing.fbx");
useFBX.preload("animation/Falling.fbx");
useFBX.preload("animation/Running.fbx");