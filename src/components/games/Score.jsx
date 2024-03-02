import { Text } from "@react-three/drei";
import React from "react";

export default function Score(props) {
  const { score } = props;
  return (
    <group position={[3.1, 1, -2]} scale={0.2} fontSize={1}>
      <Text color="#007aa5">Your{"\n"}score:</Text>
      <Text position={[1.8, -0.6, 0]} color={"red"}>
        {score}
      </Text>
    </group>
  );
}
