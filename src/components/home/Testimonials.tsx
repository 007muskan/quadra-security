import { FaQuoteLeft } from "react-icons/fa";
import {  TestimonialsCarousel } from "./TestimonialsCarousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "XXXXX SINGH",
    message:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
    image: "/client.jpg", // Replace with actual image path
  },
  {
    name: "XXXXX SINGH",
    message:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
    image: "/client.jpg",
  },
  {
    name: "XXXXX SINGH",
    message:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
    image: "/client.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="lg:w-3/4 lg:h-3/4 bg-gradient-to-b from-[#100756] to-[#210eaf] lg:ml-20 flex justify-start">
      <div className="flex items-center justify-center bg-[#fff815] lg:h-24 lg:w-24 rounded-full z-20 relative lg:-top-12 lg:left-16">
        <FaQuoteLeft className="text-black lg:text-3xl" />
      </div>
      <div className="h-full w-1/2 flex flex-col  justify-center ">
        <div className="lg:space-y-3">
          <h1 className="lg:text-3xl ">
            What our clients <br />
            are saying{" "}
          </h1>
          <p className="lg:text-xl">
            From gated societies to local businesses,
            <br /> our clients across Gurgaon trust us for fast, reliable,{" "}
            <br />
            and secure CCTV installations.
          </p>
        </div>
      </div>
      <div className="z-20 flex relative lg:justify-center lg:items-center lg:w-1/8 -right-[200px]">
         <TestimonialsCarousel />
      </div>
    </div>
  );
}
