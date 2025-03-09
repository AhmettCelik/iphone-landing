import React, { useEffect, useRef, useState } from "react";

type NavbarDropdownLayoutProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const NavbarDropdownLayout: React.FC<NavbarDropdownLayoutProps> = ({
  isOpen,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`flex text-tertiary ${isOpen ? "block order-first" : ""}`}>
      {children}
    </div>
  );
};

export default NavbarDropdownLayout;
