import { Gem, Clock, Smartphone, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Gem className="text-yellow-400 w-8 h-8" />,
      text: "Premium Quality Equipment",
    },
    {
      icon: <Clock className="text-yellow-400 w-8 h-8" />,
      text: "Quick & Easy Installation",
    },
    {
      icon: <Smartphone className="text-yellow-400 w-8 h-8" />,
      text: "Remote Monitoring Access",
    },
    {
      icon: <Users className="text-yellow-400 w-8 h-8" />,
      text: "Customer-Centric Support",
    },
  ];

  return (
    <div className="relative w-screen items-center flex flex-col justify-center gap-y-8">
      {/* Top Title */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-purple-500" />
        <h1 className="text-white text-3xl font-semibold">
          <p style={{ wordSpacing: "5px" }} className="">
            The Best in <span className="text-yellow-500">GURGAON</span>
          </p>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Side: Image */}
        <div className="relative">
          <div className="w-[500px] h-[500px] bg-transparent rounded-full flex justify-center z-20 items-center relative">
            <Image
              src="/home/why-choose-us.png" // <-- your camera+mobile combined image (save it)
              alt="Camera and Mobile"
              layout="fill"
              objectFit="cover"
              className="rounded-full "
            />
          </div>
          {/* Circle Text */}
          <div className="absolute top-1/2 left-0 z-40 transform -translate-y-1/2 -translate-x-1/3 bg-white text-[#180648] w-32 h-32 flex justify-center items-center rounded-full text-center font-semibold">
            WHY
            <br />
            CHOOSE
            <br />
            US
          </div>
        </div>
        {/* Right Side: Features */}
        <div className="flex flex-col space-y-6 ">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 z-40 relative right-[150px]">
            <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center">
              <Gem className="text-yellow-400 w-8 h-8" />
            </div>
            <hr className="w-24"/>
            <span className="text-white text-lg font-medium">
              Premium Quality Equipment
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 z-40 relative right-[100px]">
            <div className="bg-white rounded-full  w-20 h-20 flex justify-center items-center">
              <Clock className="text-yellow-400 w-8 h-8" />
            </div>
            <hr className="w-24"/>
            <span className="text-white text-lg font-medium">
              Quick & Easy Installation
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 z-40 relative right-[100px]">
            <div className="bg-white rounded-full  w-20 h-20 flex justify-center items-center">
              <Smartphone className="text-yellow-400 w-8 h-8" />
            </div>
            <hr className="w-24"/>
            <span className="text-white text-lg font-medium">
              Remote Monitoring Access
            </span>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4 z-40 relative right-[150px]">
            <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center">
              <Users className="text-yellow-400 w-8 h-8" />
            </div>
            <hr className="w-24"/>
            <span className="text-white text-lg font-medium">
              Customer-Centric Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
