import Link from "next/link";
import { navItems } from "@/contents/navbarContent";
import { useCallback } from "react";
import NavbarStoreContent from "./navbar/NavbarStoreContent";

type NavbarProps = {
  hoverStates: boolean[];
  setHoverStates: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const Navbar: React.FC<NavbarProps> = ({ setHoverStates, hoverStates }) => {
  const handleMouseEnter = useCallback(
    (index: number) => {
      if (hoverStates.some((state) => !state)) {
        const newStates = [...hoverStates];
        newStates[index] = true;
        setHoverStates(newStates);
      }
    },
    [setHoverStates]
  );

  const handleIconMouseEnter = useCallback(() => {
    setHoverStates(new Array(navItems.length).fill(false));
  }, [setHoverStates]);

  return (
    <nav
      className={`w-full bg-black ${
        hoverStates.some((state) => state) ? "navbar-open" : "navbar-close"
      } text-white/80 font-roboto tracking-wider font-light`}
    >
      <div className="w-[64rem] mx-auto px-5 h-11">
        <ul className="flex justify-between items-center h-full">
          <li
            onMouseEnter={() => handleIconMouseEnter()}
            className="h-full grid place-content-center text-xs"
          >
            <Link
              href={"/"}
              className="text-white/80 hover:text-white transition-colors duration-200 mb-[2px] relative z-30"
              aria-label="Go to home page."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="17"
                height="17"
                viewBox="0,0,256,256"
                aria-hidden
              >
                <g fill="#ffffff">
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M25.565,9.785c-0.123,0.077 -3.051,1.702 -3.051,5.305c0.138,4.109 3.695,5.55 3.756,5.55c-0.061,0.077 -0.537,1.963 -1.947,3.94c-1.119,1.703 -2.361,3.42 -4.247,3.42c-1.794,0 -2.438,-1.135 -4.508,-1.135c-2.223,0 -2.852,1.135 -4.554,1.135c-1.886,0 -3.22,-1.809 -4.4,-3.496c-1.533,-2.208 -2.836,-5.673 -2.882,-9c-0.031,-1.763 0.307,-3.496 1.165,-4.968c1.211,-2.055 3.373,-3.45 5.734,-3.496c1.809,-0.061 3.419,1.242 4.523,1.242c1.058,0 3.036,-1.242 5.274,-1.242c0.966,0.001 3.542,0.292 5.137,2.745zM15.001,6.688c-0.322,-1.61 0.567,-3.22 1.395,-4.247c1.058,-1.242 2.729,-2.085 4.17,-2.085c0.092,1.61 -0.491,3.189 -1.533,4.339c-0.935,1.242 -2.545,2.177 -4.032,1.993z"></path>
                  </g>
                </g>
              </svg>
            </Link>
          </li>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="h-full grid place-content-center text-xs"
            >
              <Link
                href={item.href}
                className="text-white/80 hover:text-white transition-colors relative z-30 duration-200"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {item.content}
              </Link>
            </li>
          ))}

          <li
            onMouseEnter={() => handleIconMouseEnter()}
            className="h-full grid place-content-center text-xs"
          >
            <Link
              href={"/"}
              className="text-white/80 hover:text-white transition-colors duration-200 relative z-30"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="17"
                height="17"
                viewBox="0,0,256,256"
                aria-hidden
              >
                <g fill="#ffffff">
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path>
                  </g>
                </g>
              </svg>
            </Link>
          </li>
          <li
            onMouseEnter={() => handleIconMouseEnter()}
            className="h-full grid place-content-center text-xs"
          >
            <Link
              href={"/"}
              className="text-white/80 hover:text-white transition-colors duration-200 mb-[1px]  relative z-30"
              aria-label="Open shopping cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="currentColor"
                aria-hidden
              >
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="12" y="16" width="24" height="22" rx="4" />
                  <path d="M18 16a6 6 0 0 1 12 0" />
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
