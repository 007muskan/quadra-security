"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import FancyButton2 from "../home/FancyButton2";
import SolutionsDropdown2 from "./SolutionsDropdown2";
import { AnimatePresence, motion } from "framer-motion";

const HomeNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const solutionItems = [
    { name: "Home Security", path: "/solutions/home-security" },
    { name: "Industrial Security", path: "/solutions/industrial-security" },
    { name: "Real Estate Security", path: "/solutions/real-estate-security" },
    { name: "Retail Security", path: "/solutions/retail-security" },
    { name: "Hospitality / Health Care Security", path: "/solutions/hospitality-security" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setShowMobileSolutions(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <div className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-white shadow-sm`}>
      <div className="md:h-18 h-14 w-full flex items-center justify-between px-4 md:px-6 lg:px-10">
        <div className="flex gap-1 items-center h-full">
          <Image
            src="/logo_color.svg"
            width={24}
            height={24}
            alt="Quadra Security Logo"
            className="md:w-[200px] w-[150px]"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <nav>
            <ul className="flex text-black text-md justify-evenly gap-4 md:gap-3 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`px-3 py-2 rounded-2xl transition-colors duration-300 ${
                      pathname === item.path
                        ? "bg-[#291a92] text-white"
                        : "hover:bg-gray-500 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <SolutionsDropdown2 />
            </ul>
          </nav>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <FancyButton2 className="py-2 px-3 text-sm rounded-sm">
            Get your Quotation Today
          </FancyButton2>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white overflow-hidden"
          >
            <nav className="px-4 py-1">
              <ul className="flex flex-col text-black space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`block px-3 py-2 rounded-xl transition-colors duration-300 ${
                        pathname === item.path
                          ? "bg-[#2b1ca1] text-white"
                          : "hover:bg-gray-300 hover:text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                {/* Mobile Solutions Toggle */}
                <li>
                  <button
                    onClick={() => setShowMobileSolutions(!showMobileSolutions)}
                    className="flex justify-between items-center w-full px-3 py-2 rounded-xl text-left bg-gray-100 hover:bg-gray-200"
                  >
                    <span className="font-medium">Solutions</span>
                    {showMobileSolutions ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  <AnimatePresence>
                    {!showMobileSolutions && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 ml-4"
                      >
                        {solutionItems.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.path}
                              className={`block px-3 py-2 rounded-lg transition-colors duration-300 text-sm ${
                                pathname === item.path
                                  ? "bg-yellow-500 text-black font-semibold"
                                  : "hover:bg-white hover:text-black"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* CTA Button */}
                <li className="pt-2">
                  <FancyButton2 className="w-full py-2 px-3 text-sm rounded-sm">
                    Get your Quotation Today
                  </FancyButton2>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {
        isMenuOpen && (
          <div className="w-screen h-screen backdrop-blur-lg">
            </div>
        )
      }
    </div>
  );
};

export default HomeNavbar;
