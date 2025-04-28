"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import Image from "next/image";

export function ImagesSliderDemo() {
  const images = [
    "https://www.shutterstock.com/image-photo/surveillance-camera-face-recognition-system-600nw-2306132609.jpg",
    "https://zolostays.com/blog/wp-content/uploads/2024/07/image-1.jpeg",
    "https://lh3.googleusercontent.com/hMocN5AmKXj8bZF96zINiX8hfZRW-fcsEe0cMHP1ir6cogNe4sbzYspw0WweNm7w7ZWwtdwicDoxZmxoswA-GLMnYOfJQneYSQ=w3840-h2160-c-rw-v3",
  ];

  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center space-y-4"
      >
        <div className="flex flex-col w-full justify-center">
          <div className="flex gap-2 ">
            <Image
              src="/logo_white.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
            <div className="flex flex-col justify-center">
              <p className="text-white font-semibold text-2xl">QUADRA</p>
              <p className="text-amber-400 font-bold text-2xl">SECURITY</p>
            </div>
          </div>
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Providing the best CCTV <br /> and Security{" "}
            <span className="text-amber-400">Solutions</span> <br /> in Gurgaon
            .
          </motion.p>
        </div>
        <div>
          
        </div>

        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}
