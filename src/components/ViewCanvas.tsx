"use client";

import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Perf } from "r3f-perf";

type Props = {};

export default function ViewCanvas({}: Props) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      camera={{
        fov: 30,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <View.Port />
      {/* <Perf /> */}
    </Canvas>
  );
}
