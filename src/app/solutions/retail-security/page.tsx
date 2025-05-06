"use client";

import Sidebar from "@/components/solutions/Sidebar";
import React from "react";
import { motion } from "framer-motion";

const SolutionsPage = () => {
  const sidebarItems = [
    { label: "Home Security", path: "/solutions/home-security" },
    { label: "Industrial Security", path: "/solutions/industrial-security" },
    { label: "Real Estate Security", path: "/solutions/real-estate-security" },
    { label: "Retail Security", path: "/solutions/retail-security" },
    {
      label: "Hospitality / Health Care Security",
      path: "/solutions/hospitality-security",
    },
  ];

  return (
    <div className="bg-white font-[family-name:var(--font-urbanist)] text-gray-800 min-h-screen">
      {/* Header with background image */}
      <motion.div
        className="w-full h-48 lg:h-72 flex items-center justify-center"
        style={{ backgroundImage: "url('/solutions/bg_img.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-blue-500/35 w-full h-full flex justify-center items-center">
          <motion.h2
            className="text-center text-white text-3xl font-semibold md:mt-5 mt-3"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Retail Security
          </motion.h2>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <motion.div
          className="w-full flex md:w-3/4 lg:w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Sidebar items={sidebarItems} />

          {/* Main content */}
          <motion.div
            className="bg-white rounded p-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.img
              src="/solutions/home-security/img1.png"
              alt="Home Security"
              className="w-full md:w-[400px] mx-auto mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            <div>
              <h3 className="font-bold text-lg mb-3">
                Smart Surveillance. Real Protection.
              </h3>
              <p className="mb-4">
                In today’s unpredictable world, security isn’t a luxury—it’s a
                necessity. At Quadro Security, we specialize in providing
                professional-grade CCTV solutions to help you stay one step
                ahead when it comes to safety.
              </p>
              <p className="mb-4">
                With cutting-edge technology and round-the-clock reliability,
                our surveillance systems are designed to give you peace of
                mind—whether you’re at home, at work, or on the go.
              </p>

              <h4 className="font-semibold mb-2">
                Why Choose Quadro Security?
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>IP Cameras</strong> – High-definition clarity and
                  remote access
                </li>
                <li>
                  <strong>Wireless Cameras</strong> – Hassle-free setup with
                  flexible installation
                </li>
                <li>
                  <strong>Dome & Bullet Cameras</strong> – Ideal for both indoor
                  and outdoor use
                </li>
                <li>
                  <strong>Night Vision & Motion Detection</strong> – Stay
                  protected even in the dark
                </li>
                <li>
                  <strong>Mobile Monitoring</strong> – Watch your property live
                  from anywhere
                </li>
              </ul>

              <p className="mt-4">
                Every product we install is backed by expert support, seamless
                setup, and a commitment to your safety.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full m-6 justify-center flex">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-700 hover:bg-blue-800  text-white font-medium py-2 px-6 rounded-full"
        >
          GET FREE CONSULTATION
        </motion.button>
      </div>
    </div>
  );
};

export default SolutionsPage;
