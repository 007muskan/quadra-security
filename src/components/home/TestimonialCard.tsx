import React from "react";
import Image from "next/image"; // Optional
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  description: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  name,
  description,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-md w-full max-w-[250px]">
      {/* Top image */}
      <div className="relative w-full h-36">
        {/* reduced height */}
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Quote + description */}
      <div className="p-3 flex flex-col">
        {/* Quote icon */}
        <div className="text-white flex justify-center items-center bg-blue-500 w-10 h-10 rounded-full relative z-30 -top-9 ">
          <FaQuoteLeft/>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-xs leading-relaxed">
          {description}
        </p>

        {/* Name */}
        <h3 className="text-black font-semibold text-xs mt-2 uppercase">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
