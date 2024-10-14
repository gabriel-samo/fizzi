"use client";

import { Container } from "@/components/Container";
import Scene from "@/components/sections/SkyDive/Scene";
import { View } from "@react-three/drei";

export default function SkyDive() {
  const sentence = "Dive into better health";

  return (
    <Container className="skydive h-screen">
      <h2 className="sr-only">{sentence}</h2>
      <View className="h-screen w-screen">
        <Scene sentence={sentence} flavor="blackCherry" />
      </View>
    </Container>
  );
}
