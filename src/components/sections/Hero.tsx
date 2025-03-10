"use client";
import React, { useState } from "react";
import Navbar from "../common/Navbar";
import NavbarDropdown from "../common/navbar/dropdown/NavbarDropdown";
import { navItems } from "@/contents/navbarContent";
import NavbarSubSection from "../Hero/NavbarSubSection";
import TitaniumText from "../Hero/TitaniumText";
import PhoneAnimation from "../Hero/PhoneAnimation";

const Hero = () => {
  const [hoverStates, setHoverStates] = useState<boolean[]>(
    Array(navItems.length).fill(false)
  );

  return (
    <section className="h-screen w-full bg-black flex flex-col">
      <div>
        <Navbar setHoverStates={setHoverStates} hoverStates={hoverStates} />
        <NavbarSubSection />
        <NavbarDropdown
          setHoverStates={setHoverStates}
          hoverStates={hoverStates}
        />
      </div>
      <div
        className={`transition-discrete duration-500 flex-grow flex items-center justify-center relative ${
          hoverStates.some((state) => state) ? "blur-sm" : ""
        }`}
      >
        <TitaniumText />
        <PhoneAnimation />
      </div>
    </section>
  );
};

export default Hero;
