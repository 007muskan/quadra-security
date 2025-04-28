import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    "Expertise You Can Trust",
    "Top-Notch Technology",
    "Fast & Hassle-Free Installation",
    "Certified & Vetted Technicians",
    "Flexible Plans, No Hidden Fees",
  ];

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-2/3 flex flex-col justify-center items-center p-10 space-y-6">
        <div className="flex items-center space-x-4 mb-6 relative right-[170px]">
          <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-purple-500" />
          <h2 className="text-white text-3xl font-semibold">WHY CHOOSE US</h2>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col space-y-6">
            <div className="h-[300px] w-[300px] bg-[#180648]/39 rounded-xl p-2 flex justify-center items-center">
              <h1 className="text-2xl">
                Professionals <br />
                protecting
                <br /> what matters.
              </h1>
            </div>
            <div>
              <button className="lg:w-full lg:py-2 bg-[#fff815] text-black font-semibold rounded-md">
                Book Now
              </button>
            </div>
          </div>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                {/* Yellow Checkmark */}
                <Check className="text-yellow-400 w-10 h-10" />

                {/* Text */}
                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="h-full w-1/3 "
        style={{ backgroundImage: "url('/dummy_img.png')" }}
      ></div>
    </div>
  );
};

export default WhyChooseUs;
