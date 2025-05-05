"use client";
import { motion } from "motion/react";
import Navbar from "@/components/header/HomeNavbar";
import { ImagesSliderDemo } from "@/components/home/ImageSlider";
import Image from "next/image";
import SiteVisitForm from "@/components/home/Form";
import FancyButton from "@/components/home/FancyButton";
import ServiceCarousel from "@/components/home/ServiceCarousel";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import { GiTick } from "react-icons/gi";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-urbanist)]">
      <section className="h-screen bg-gradient-to-b from-[#0D053F] to-[#2917C9] md:flex justify-evenly items-center">
        <div className="flex flex-col space-y-10">
          <div className="space-y-10">
            <h1 className="text-white lg:text-5xl font-semibold">
              Providing The Best <br /> Surveillance & <br />
              Security Solutions In <br />
              <span>
                <h1 className="font-bold text-yellow-500">Gurgaon</h1>
              </span>
            </h1>
            <h2 className="text-white text-3xl">
              Get Free Site Visit in Gurgaon and <br /> Delhi NCR
            </h2>
          </div>

          <div>
            <FancyButton
              className="md:py-4 md:px-10"
              onClick={() => alert("Consultation booked!")}
            >
              Book your free consultation
            </FancyButton>
          </div>
        </div>
        <div className="">
          <SiteVisitForm />
        </div>
      </section>
      <section className="h-screen bg-gradient-to-b from-[#300571] to-[#151b7e] flex flex-col justify-center items-center">
        <div className="space-y-4 md:w-1/2 w-full">
          <h2 className="text-white md:text-4xl text-2xl">What we Offer</h2>
          <h1 className="text-yellow-500 md:text-5xl text-3xl font-semibold">
            Advanced Security Solutions
          </h1>
        </div>
        <div className="flex justify-center">
          <ServiceCarousel />
        </div>
      </section>
      <section className="h-screen bg-gradient-to-b from-[#0D053F] to-[#2917C9] flex flex-col justify-evenly items-center">
        <BrandsCarousel />
      </section>
      <section className="bg-gradient-to-r from-[#240D63] to-[#0B0146] w-screen text-white flex justify-center items-center h-screen">
        <WhyChooseUs />
      </section>
      <section
        className=" text-white py-10 px-4 flex justify-start items-center h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/bg_img.png')" }} // replace with your actual image path
      >
        <Testimonials />
      </section>
    </div>
  );
}
