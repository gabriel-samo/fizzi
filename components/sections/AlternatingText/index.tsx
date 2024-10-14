"use client";

import { View } from "@react-three/drei";

import { Container } from "@/components/Container";
import Scene from "@/components/sections/AlternatingText/Scene";
import { textGroup } from "@/components/sections/AlternatingText/textGroup";
import clsx from "clsx";

export default function AlternatingText() {
  return (
    <Container className="alternating-text-container relative bg-yellow-300 text-sky-950">
      <div>
        <div className="relative grid max-md:z-[100]">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>
          {textGroup.map((item, index) => (
            <div
              key={item.heading}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "max-md:rounded-lg max-md:bg-white/20 max-md:p-4 max-md:backdrop-blur-lg",
                )}
              >
                <h3 className="text-balance text-6xl font-bold">
                  {item.heading}
                </h3>
                <p className="mt-4 text-xl">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
