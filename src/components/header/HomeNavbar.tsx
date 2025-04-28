"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import FancyButton from "../home/FancyButton";

const HomeNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Handle scroll effect for HomeNavbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div 
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-[#0B0146]/95 backdrop-blur-lg" : "bg-transparent backdrop-blur-2xl"
      }`}
    >
      <div className="h-18 w-full flex items-center justify-between px-4 md:px-6 lg:px-10">
        {/* Logo */}
        <div className="flex  gap-1 items-center">
          <Image
            src="/logo_white.svg"
            width={24}
            height={24}
            alt="Quadra Security Logo"
          />
          <div className="flex flex-col justify-start">
            <p className="text-white font-semibold text-md">
              Quadra <span className="text-yellow-500">Security</span>
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <nav className="">
            <ul className="flex text-white text-md justify-evenly gap-4 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className={`px-3 py-2 rounded-2xl transition-colors duration-300  ${
                      pathname === item.path
                        ? "bg-yellow-500 text-black"
                        : "hover:bg-white hover:text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <FancyButton className="py-2 px-3 text-sm rounded-sm">
            Get your Quotation Today
          </FancyButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0B0146]/95 backdrop-blur-lg">
          <nav className="px-4 py-5">
            <ul className="flex flex-col text-white space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className={`block px-3 py-2 rounded-xl transition-colors duration-300 ${
                      pathname === item.path
                        ? "bg-yellow-500 text-black font-semibold"
                        : "hover:bg-white hover:text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <FancyButton className="w-full py-2 px-3 text-sm rounded-sm">
                  Get your Quotation Today
                </FancyButton>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HomeNavbar;
