"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const brands = Array(7).fill("/brands/cpplus.png"); 

export default function BrandsCarousel() {
  const plugin = useRef(
    Autoplay({
      delay: 2500,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );

  return (
    <div className="py-10 px-4 w-1/2">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-purple-500" />
          <h2 className="text-white text-3xl font-semibold">
            Brands We DEAL IN
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {brands.map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 flex justify-center"
              >
                <div className="bg-[#E8E8E8] rounded-2xl p-6 w-[150px] h-[150px] flex flex-col items-center justify-center">
                  <Image
                    src={src}
                    alt="Brand Logo"
                    width={60}
                    height={60}
                    className="mb-2"
                  />
                  <p className="text-red-600 font-bold text-lg">CP PLUS</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Prev & Next buttons */}
          <CarouselPrevious className="bg-purple-600 hover:bg-purple-700 text-white" />
          <CarouselNext className="bg-purple-600 hover:bg-purple-700 text-white" />
        </Carousel>
      </div>
    </div>
  );
}
