import React, { useCallback, useEffect, useState } from "react";
import {
  navStoreShopItems,
  navStoreQuickLinkItems,
  navStoreSpecialItems,
  navItems,
} from "@/contents/navbarContent";
import Link from "next/link";

type NavbarStoreContentProps = {
  hoverStates: boolean[];
  setHoverStates: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const NavbarStoreContent: React.FC<NavbarStoreContentProps> = ({
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
      }, 250);

      return () => clearTimeout(timeout);
    }
  }, [isHovered]);

  const handleMouseLeave = useCallback(() => {
    setHoverStates(new Array(navItems.length).fill(false));
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
      <div className="pt-22 pb-20 text-tertiary font-roboto w-[64rem] mx-auto px-5">
        <div className="flex">
          <div className="pr-22">
            <h2 className="text-secondary text-xs">Shop</h2>
            <ul className="mt-4 flex flex-col gap-2 text-2xl font-semibold navbar-ul">
              {navStoreShopItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.content}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pr-11">
            <h2 className="text-secondary text-xs">Quick Links</h2>
            <ul className="mt-4 flex flex-col gap-2 text-xs font-semibold navbar-ul">
              {navStoreQuickLinkItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.content}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pr-11">
            <h2 className="text-secondary text-xs">Shop Special Stories</h2>
            <ul className="mt-4 flex flex-col gap-2 text-xs font-semibold navbar-ul">
              {navStoreSpecialItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.content}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarStoreContent;
