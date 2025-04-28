"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const services = [
  {
    imageSrc: "/camera1.jpg",
    title: "HD CCTV Systems",
    description:
      "Ultra-high definition cameras with night vision capability for crystal clear surveillance footage 24/7.",
    features: [
      "4K Resolution Cameras",
      "Weather-resistant Design",
      "Remote Viewing Access",
    ],
  },
  {
    imageSrc: "/camera2.jpg",
    title: "HD CCTV Systems",
    description:
      "Ultra-high definition cameras with night vision capability for crystal clear surveillance footage 24/7.",
    features: [
      "4K Resolution Cameras",
      "Weather-resistant Design",
      "Remote Viewing Access",
    ],
  },
  {
    imageSrc: "/camera3.jpg",
    title: "HD CCTV Systems",
    description:
      "Ultra-high definition cameras with night vision capability for crystal clear surveillance footage 24/7.",
    features: [
      "4K Resolution Cameras",
      "Weather-resistant Design",
      "Remote Viewing Access",
    ],
  },
  {
    imageSrc: "/camera4.jpg",
    title: "HD CCTV Systems",
    description:
      "Ultra-high definition cameras with night vision capability for crystal clear surveillance footage 24/7.",
    features: [
      "4K Resolution Cameras",
      "Weather-resistant Design",
      "Remote Viewing Access",
    ],
  },
];

const ServiceCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered) {
      return;
    }

    // Set up autoplay
    const interval = setInterval(() => {
      api.scrollNext();
    }, 1000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div 
      className="relative px-6 py-10  rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
              <div className="p-1">
                <ServiceCard {...service} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#211a7d] hover:bg-[#2d26a0] text-white border-none" />
        <CarouselNext className="bg-[#211a7d] hover:bg-[#2d26a0] text-white border-none" />
      </Carousel>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {services.map((_, idx) => (
          <div 
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              idx === current ? "bg-yellow-400" : "bg-white/80"
            }`}
            onClick={() => api?.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
