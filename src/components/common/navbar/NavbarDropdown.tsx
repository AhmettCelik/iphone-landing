import React, { useCallback, useEffect, useState } from "react";
import NavbarStoreSkeleton from "./NavbarStoreSkeleton";
import NavbarMacContent from "./NavbarMacSkeleton";

type NavbarDropdown = {
  hoverStates: boolean[];
  setHoverStates: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const NavbarDropdown: React.FC<NavbarDropdown> = ({
  hoverStates,
  setHoverStates,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(
    hoverStates.some((state) => state)
  );

  useEffect(() => {
    setIsHovered(hoverStates.some((state) => state));
  }, [hoverStates]);

  useEffect(() => {
    if (isHovered) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [isHovered]);

  const handleMouseLeave = useCallback(() => {
    setHoverStates((prevStates) => new Array(prevStates.length).fill(false));
  }, [setHoverStates]);

  if (!isVisible) return null;
  return (
    <div
      onMouseLeave={() => handleMouseLeave()}
      className={`bg-primary w-full top-0 absolute z-20 overflow-hidden ${
        isHovered
          ? "open-navbar-item navbar-dropdown-open"
          : "close-navbar-item navbar-dropdown-close"
      } ${isHovered ? "block" : ""}`}
    >
      <div className="pt-22 pb-20 text-tertiary font-roboto w-[64rem] mx-auto px-5 flex">
        <NavbarStoreSkeleton isOpen={hoverStates[0]} />
        <NavbarMacContent isOpen={hoverStates[1]} />
      </div>
    </div>
  );
};

export default NavbarDropdown;
