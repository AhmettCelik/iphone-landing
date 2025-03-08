import {
  navMacExploreItems,
  navMacMoreItems,
  navMacShopItems,
} from "@/contents/navbarContent";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type NavbarMacContentProps = {
  isOpen: boolean;
};

const NavbarMacContent: React.FC<NavbarMacContentProps> = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`flex ${isOpen ? "block order-first" : "fade-out"}`}>
      <div className="pr-22">
        <h2 className="text-secondary text-xs">Explore Mac</h2>
        <ul className="mt-4 flex flex-col gap-2 text-2xl font-semibold navbar-ul">
          {navMacExploreItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.content}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pr-11">
        <h2 className="text-secondary text-xs">Shop Mac</h2>
        <ul className="mt-4 flex flex-col gap-2 text-xs font-semibold navbar-ul">
          {navMacShopItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.content}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pr-11">
        <h2 className="text-secondary text-xs">More from Mac</h2>
        <ul className="mt-4 flex flex-col gap-2 text-xs font-semibold navbar-ul">
          {navMacMoreItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.content}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMacContent;
