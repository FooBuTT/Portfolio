import { Text3D } from "@react-three/drei";
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
      <Text3D
        rotation-x={degToRad(-180)}
        position={[-1.2, 0.3, -0.5]}
        scale={0.6}
        font={"/fonts/Poppins Medium_Regular.json"}
      >
        Home
        <meshStandardMaterial color={"white"} />
      </Text3D>
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
useFont.preload("fonts/Poppins Medium_Regular.json");
