import React from "react";
import Image from "next/image"; // optional, use <img> if not using Next.js

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  features,
}) => {
  return (
    <div className="bg-[#06044E] rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg min-w-[280px] max-w-[320px]">
      <div className="w-full h-[180px] relative">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        <div className="h-[4px] bg-yellow-400" />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-yellow-400 font-bold text-lg">{title}</h3>
        <p className="text-white text-sm">{description}</p>

        <ul className="text-white text-sm space-y-1">
          {features.map((feature, idx) => (
            <li key={idx}>✔ {feature}</li>
          ))}
        </ul>

        <button className="text-yellow-400 font-bold mt-2 hover:underline">
          Explore Service
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
