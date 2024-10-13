"use client";
// import { Perf } from "r3f-perf";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false },
);

// type Props = {};

// export default function ViewCanvas({}: Props) {
export default function ViewCanvas() {
  return (
    <>
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
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
          {/* <Perf /> */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
