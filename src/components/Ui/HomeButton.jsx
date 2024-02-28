import { Text, Text3D, useFont } from "@react-three/drei";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { degToRad } from "three/src/math/MathUtils";
import { setCurrentPage } from "../../features/redux/slices/cameraSlice";

export default function HomeButton() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.camera.value);
  const setHome = () => {
    dispatch(setCurrentPage("home"));
    console.log(page);
  };
  return (
    <group>
      <Text
        rotation-x={degToRad(-180)}
        position={[0, 0, -0.6]}
        color="#007aa5"
        fontSize={1}
      >
        Home
      </Text>
      <mesh
        onClick={() => {
          setHome();
        }}
      >
        <boxGeometry args={[3, 2, 1]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}
