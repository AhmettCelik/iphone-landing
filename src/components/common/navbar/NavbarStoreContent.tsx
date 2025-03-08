import React, { useEffect, useState } from "react";
import {
  navStoreShopItems,
  navStoreQuickLinkItems,
  navStoreSpecialItems,
} from "@/contents/navbarContent";
import Link from "next/link";

type NavbarStoreContentProps = {
  isHovered: boolean;
};

const NavbarStoreContent: React.FC<NavbarStoreContentProps> = ({
  isHovered,
}) => {
  const [isVisible, setIsVisible] = useState(false);

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

  if (!isVisible) return null;
  return (
    <div
      className={`bg-primary w-full absolute top-11 z-100 overflow-hidden max-h-[50vh] ${
        isHovered
          ? "open-navbar-item navbar-dropdown-open"
          : "close-navbar-item navbar-dropdown-close"
      } ${isHovered ? "block" : ""}`}
    >
      <div className="pt-10 pb-20 flex text-tertiary font-roboto w-[64rem] mx-auto px-5">
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
  );
};

export default NavbarStoreContent;
