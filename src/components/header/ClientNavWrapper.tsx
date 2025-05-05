"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import HomeNavbar from "./HomeNavbar";
import Footer from "../footer/Footer";

export default function ClientNavWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome =
    pathname === "/" ||
    pathname.startsWith("/studio/") ||
    pathname === "/studio";

  return (
    <>
      {isHome ? <HomeNavbar /> : <Navbar />}
      {children}
      <Footer/>
    </>
  );
}
