"use client";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import ServiceSection from "@/components/ServiceSection";
import ContactForm from "@/components/ContactFormm";
import { initLineAnimation } from "@/animations/lineAnimation";
import Footer from "@/components/footer/Footer";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const Services: NextPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      icon: "📹",
      title: "CCTV Installation",
      description:
        "At Quadra Security, we provide CCTV & surveillance systems that offer peace of mind. Our experienced team will assess your needs and design a custom solution to protect what matters most to you.",
      features: [
        "HD/4K Installation (Premium Packages)",
        "DVR & Accessories & Connections",
        "IP & Analogue Solutions",
        "High-Quality Lenses & Sensors",
        "Remote Viewing Capability",
      ],
      imageUrl: "/images/cctv-installer.png",
    },
    {
      icon: "🖥️",
      title: "Video Wall Solutions",
      description:
        "Experience incredible clarity and control with our professional video wall solutions. Perfect for command centers, operation rooms, and retail environments requiring multi-screen displays.",
      features: [
        "HD/4K Display Capability",
        "Dynamic Multi-Screen Control",
        "Intuitive Wall Control System",
        "Edge Blending Technology",
        "Scalable Video Wall Implementation",
      ],
      imageUrl: "/images/video-wall.png",
    },
    {
      icon: "📊",
      title: "Video Analytics",
      description:
        "Leverage the advanced video analytics with our intelligent monitoring systems that detect and analyze patterns, behaviors and events in real time, providing actionable insights to help you make the right call.",
      features: [
        "Motion Detection & Tracking",
        "Facial Recognition",
        "Object Detection",
        "Behavioral Analysis",
        "Event & Anomaly Detection",
      ],
      imageUrl: "/images/video-analytics.png",
    },
    {
      icon: "🚨",
      title: "Security Alarms",
      description:
        "Our security alarm systems are designed to alert you instantly of unauthorized entry or suspicious activity. We integrate leading technologies to ensure your property remains secure around the clock.",
      features: [
        "Motion Detection Systems",
        "24/7 Silent Monitoring",
        "Immediate & Mobile Alerts",
        "Window & Door Sensors",
        "Emergency and Panic Alarms",
      ],
      imageUrl: "/images/security-alarms.jpg",
    },
    {
      icon: "🧳",
      title: "Baggage Scanners",
      description:
        "Ensure thorough scanning of all baggage and parcels with our state-of-the-art scanning systems. Our scanners are designed to efficiently screen items without causing delays in your operations.",
      features: [
        "High-Resolution X-Ray Imaging",
        "Dual-View/Multi-View Capability",
        "Automatic Threat Detection",
        "User-Friendly Interface",
        "Maintenance & Technical Support",
      ],
      imageUrl: "/images/baggage-scanner.jpg",
    },
  ];

  useEffect(() => {
    if (pageRef.current) {
      initLineAnimation();
    }
  }, []);

  return (
    <main className="w-full font-[family-name:var(--font-urbanist)]">
      <div className="bg-gray-700 bg-opacity-80 bg-blend-overlay bg-[url('/hero-bg.png')] bg-cover bg-center py-24 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-5 font-sans text-gray-800">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            imageUrl={service.imageUrl}
            index={index}
          />
        ))}
      </div>

      <div className="bg-gradient-to-b to-[#2716be] from-[#0e0542] p-8 mt-16 border border-b-blue-600">
        <h2 className="text-2xl font-bold mb-8 text-white text-center tracking-widest">
          Schedule a Free Site Visit
        </h2>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
};

export default Services;
