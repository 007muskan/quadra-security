"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ServiceSectionProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  index: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  icon,
  title,
  description,
  features,
  imageUrl,
  index,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            // Find the line element and animate it
            const lineElement = entry.target.querySelector(".icon-line");
            if (lineElement) {
              lineElement.classList.add("h-full");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`flex ${index % 2 !== 0 ? "flex-row-reverse" : ""} mb-12 py-5 opacity-0 translate-y-5 transition-all duration-600 ease-in-out relative`}
      ref={sectionRef}
      data-section-id={index}
    >
      <div className="w-8 flex flex-col items-center mr-5 relative z-10">
        <div className="w-8 h-8 flex items-center justify-center text-2xl bg-[#00246C] text-white rounded-full z-20 relative">
          {icon}
        </div>
        {/* Line starts right from the icon */}
        <div className="icon-line w-0.5 bg-[#00246C] absolute top-8 left-1/2 -translate-x-1/2 h-0 transition-all duration-1500 ease-out"></div>
      </div>

      <div className={`flex-1 ${index % 2 !== 0 ? "pr-0 pl-5" : "pr-5"}`}>
        <h2 className="text-xl font-bold text-[#00246C] mb-2 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-800">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <ul className="list-none p-0 m-0">
          {features.map((feature, i) => (
            <li key={i} className="mb-2 flex items-center">
              <span className="text-[#00246C] font-bold mr-2">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/5 rounded-lg overflow-hidden shadow-md">
        <div className="relative w-full h-full min-h-[240px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
