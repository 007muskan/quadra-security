// components/TestimonialsCarousel.tsx
"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "XXXXX SINGH",
    description:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
    imageSrc: "/testimonial_img.png",
  },
  {
    name: "XXXXX SINGH",
    description:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
      imageSrc: "/testimonial_img.png",
  },
  {
    name: "XXXXX SINGH",
    description:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
      imageSrc: "/testimonial_img.png",
  },
  {
    name: "XXXXX SINGH",
    description:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
      imageSrc: "/testimonial_img.png",
  },
  {
    name: "XXXXX SINGH",
    description:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
      imageSrc: "/testimonial_img.png",
  },
  {
    name: "XXXXX SINGH",
    description:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
      imageSrc: "/testimonial_img.png",
  },
];

export function TestimonialsCarousel() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <TestimonialCard {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-purple-600 hover:bg-purple-700 text-white" />
        <CarouselNext className="bg-purple-600 hover:bg-purple-700 text-white" />
      </Carousel>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? "bg-purple-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
