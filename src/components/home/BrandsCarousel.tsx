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
    <div className="py-10 px-4 md:w-1/2 w-[250px]">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Title */}
        <div className="flex items-center space-x-4 mb-6 relative -top-16">
          <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-purple-500" />
          <h2 className="text-white md:text-3xl text-xl  font-semibold">
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
                className="md:basis-1/4 flex justify-center"
              >
                <div className="bg-[#E8E8E8] rounded-2xl p-3 w-[150px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-center">
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
          <CarouselPrevious className="bg-purple-600 w-6 h-6  hover:bg-purple-700 text-white" />
          <CarouselNext className="bg-purple-600 w-6 h-6 hover:bg-purple-700 text-white" />
        </Carousel>
        
      </div>
    </div>
  );
}
