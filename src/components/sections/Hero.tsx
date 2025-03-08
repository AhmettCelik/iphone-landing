"use client";
import React, { useState } from "react";
import Navbar from "../common/Navbar";
import NavbarStoreContent from "../common/navbar/NavbarStoreContent";
import { navItems } from "@/contents/navbarContent";

const Hero = () => {
  const [hoverStates, setHoverStates] = useState<boolean[]>(
    Array(navItems.length).fill(false)
  );

  return (
    <section className="h-screen w-full bg-[#1a1a1a]">
      <div className="w-full bg-black h-[50%]">
        <div className="w-[calc(62rem+4px)] mx-auto px-5 relative h-full">
          <Navbar setHoverStates={setHoverStates} hoverStates={hoverStates} />
          <NavbarStoreContent isHovered={hoverStates[0]} />
        </div>
      </div>
      <div
        className={`transition-all duration-500 ${
          hoverStates.some((state) => state) ? "blur-xs" : ""
        }`}
      >
        <div className="blur-target text-white">asdgasdgasdg</div>
        <div className="blur-target text-white">asdgasdgasdg</div>
        <div className="blur-target text-white">asdgasdgasdg</div>
        <div className="blur-target text-white">asdgasdgasdg</div>
        <div className="blur-target text-white">asdgasdgasdg</div>
        <div className="blur-target text-white">asdgasdgasdg</div>
      </div>
    </section>
  );
};

export default Hero;
