import React, { useEffect, useState } from "react";

type NavbarDropdownLayoutProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

// Use named export here: see why here https://dev.to/_ndeyefatoudiop/101-react-tips-tricks-for-beginners-to-experts-4m11#27-prefer-named-exports-over-default-exports
const NavbarDropdownLayout: React.FC<NavbarDropdownLayoutProps> = ({
  isOpen,
  children,
}) => {
  // I would remove this state and add some delay through CSS since isVisible = isHovered
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
