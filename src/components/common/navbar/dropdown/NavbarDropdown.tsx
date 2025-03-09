import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import NavbarStoreSkeleton from "../NavbarStoreSkeleton";
import NavbarMacContent from "../NavbarMacSkeleton";
import NavbarIpadSkeleton from "../NavbarIpadSkeleton";
import NavbarIphoneSkeleton from "../NavbarIphoneSkeleton";
import NavbarWatchSkeleton from "../NavbarWatchSkeleton";
import NavbarVisionSkeleton from "../NavbarVisionSkeleton";
import NavbarAirPodsSkeleton from "../NavbarAirPodsSkeleton";
import NavbarTVHomeSkeleton from "../NavbarTvHomeSkeleton";
import NavbarEntertainmentSkeleton from "../NavbarEntertainmentSkeleton";
import NavbarAccessoriesSkeleton from "../NavbarAccessoriesSkeleton";
import NavbarSupportSkeleton from "../NavbarSupportSkeleton";

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
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      if (!contentRef.current) return;
      setHeight(contentRef.current.offsetHeight);
    }, 250);

    return () => clearTimeout(timeout);
  }, [hoverStates]);

  useEffect(() => {
    setIsHovered(hoverStates.some((state) => state));
    if (hoverStates.every((state) => state === false)) {
      setHeight(0);
    }
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
      style={{ height: `${height}px` }}
      onMouseLeave={() => handleMouseLeave()}
      className={`bg-primary w-full top-0 absolute z-20 overflow-hidden transition-all duration-200 ${
        isHovered
          ? "open-navbar-item navbar-dropdown-open"
          : "close-navbar-item navbar-dropdown-close"
      } ${isHovered ? "block" : ""}`}
    >
      <div
        ref={contentRef}
        className="pt-22 pb-20 text-tertiary font-roboto w-[64rem] mx-auto px-5 flex"
      >
        <NavbarStoreSkeleton isOpen={hoverStates[0]} />
        <NavbarMacContent isOpen={hoverStates[1]} />
        <NavbarIpadSkeleton isOpen={hoverStates[2]} />
        <NavbarIphoneSkeleton isOpen={hoverStates[3]} />
        <NavbarWatchSkeleton isOpen={hoverStates[4]} />
        <NavbarVisionSkeleton isOpen={hoverStates[5]} />
        <NavbarAirPodsSkeleton isOpen={hoverStates[6]} />
        <NavbarTVHomeSkeleton isOpen={hoverStates[7]} />
        <NavbarEntertainmentSkeleton isOpen={hoverStates[8]} />
        <NavbarAccessoriesSkeleton isOpen={hoverStates[9]} />
        <NavbarSupportSkeleton isOpen={hoverStates[10]} />
      </div>
    </div>
  );
};

export default NavbarDropdown;
