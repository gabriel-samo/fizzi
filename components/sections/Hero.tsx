import Image from "next/image";

import Button from "@/components/Button";
import { Container } from "@/components/Container";
import { TextSplitter } from "@/components/TextSplitter";

import heroImage from "@/public/images/all-cans-bunched.png";

export default function Hero() {
  return (
    <Container className="hero">
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text="Live Gutsy"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <p className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              Soda Perfected
            </p>
            <p className="hero-body text-2xl font-normal text-sky-950">
              3-5g sugar. 9g fiber. 5 delicious flavors
            </p>
            <Button
              href="https://www.gabrielsamo.com"
              target="_blank"
              className="hero-button mt-12"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src={heroImage}
            alt="All of the Fizzi flavors"
            className="w-full md:hidden"
          />
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter text="Try all five flavors" />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
              <p className="">
                Our soda is made with real fruit juice and a touch of cane
                sugar. We never use artificial sweeteners or high fructose corn
                syrup. Try all five flavors and find your favorite!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
