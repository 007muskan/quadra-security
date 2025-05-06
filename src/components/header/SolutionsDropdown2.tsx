'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const SolutionsDropdown = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  const solutions = [
    { name: "Home Security", path: "/solutions/home-security" },
    { name: "Industrial Security", path: "/solutions/industrial-security" },
    { name: "Real Estate Security", path: "/solutions/real-estate-security" },
    { name: "Retail Security", path: "/solutions/retail-security" },
    { name: "Hospitality / Health Care Security", path: "/solutions/hospitality-security" },
  ];

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative font-[family-name:var(--font-urbanist)]"
    >
      <span
        className={`px-3 py-2 rounded-2xl cursor-pointer transition-colors duration-300 ${
          pathname?.startsWith("/solutions")
            ? "bg-[#281a90] text-white"
            : "hover:bg-white hover:text-black"
        }`}
      >
        Solutions
      </span>

      <AnimatePresence>
        {showDropdown && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 6 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-0 w-60 bg-gray-100 backdrop-blur-md text-black shadow-xl z-10 py-2 rounded-md"
          >
            {solutions.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block px-4 py-2 hover:bg-gray-300 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default SolutionsDropdown;
