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
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isHovered]);

  if (!isVisible) return null;
  return (
    <div
      className={`bg-primary w-full absolute top-[44px] z-100 overflow-hidden max-h-[440px] ${
        isHovered ? "openNavbarItem" : "closeNavbarItem"
      } ${isHovered ? "block" : ""}`}
    >
      <div className="pt-10 pb-20 flex text-tertiary font-roboto">
        <div className="pr-22">
          <h2 className="text-secondary text-xs">Shop</h2>
          <ul className="mt-4 flex flex-col gap-2 text-2xl font-semibold">
            {navStoreShopItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pr-11">
          <h2 className="text-secondary text-xs">Quick Links</h2>
          <ul className="mt-4 flex flex-col gap-2 text-xs font-semibold">
            {navStoreQuickLinkItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pr-11">
          <h2 className="text-secondary text-xs">Shop Special Stories</h2>
          <ul className="mt-4 flex flex-col gap-2 text-xs font-semibold">
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
