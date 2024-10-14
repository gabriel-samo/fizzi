import { SodaCanProps } from "@/components/3d/SodaCan";

export type TFlavor = {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
};

export const FLAVORS: TFlavor[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];
