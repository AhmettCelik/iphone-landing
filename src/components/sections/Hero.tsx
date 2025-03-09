"use client";
import React, { useState } from "react";
import Navbar from "../common/Navbar";
import NavbarDropdown from "../common/navbar/dropdown/NavbarDropdown";
import { navItems } from "@/contents/navbarContent";

const Hero = () => {
  const [hoverStates, setHoverStates] = useState<boolean[]>(
    Array(navItems.length).fill(false)
  );

  return (
    <section className="h-screen w-full bg-[#1a1a1a]">
      <div>
        <Navbar setHoverStates={setHoverStates} hoverStates={hoverStates} />
        <NavbarDropdown
          setHoverStates={setHoverStates}
          hoverStates={hoverStates}
        />
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
