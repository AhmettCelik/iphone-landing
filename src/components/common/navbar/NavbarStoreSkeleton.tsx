import {
  navStoreQuickLinkItems,
  navStoreShopItems,
  navStoreSpecialItems,
} from "@/contents/navbarContent";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type NavbarStoreSkeletonProps = {
  isOpen: boolean;
};

const NavbarStoreSkeleton: React.FC<NavbarStoreSkeletonProps> = ({
  isOpen,
}) => {
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
  );
};

export default NavbarStoreSkeleton;
