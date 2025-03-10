import Link from "next/link";
import Image from "next/image";
import React from "react";

const NavbarSubSection = () => {
  return (
    <div className="bg-quaternary text-white-200 text-sm py-4 font-normal">
      <div className="max-w-[64rem] mx-auto px-5 text-center">
        <p>
          Get $170–$630 in credit toward iPhone 16 or iPhone 16 Pro when you
          trade in iPhone 12 or{" "}
          <span>
            higher.
            <span className="underline underline-offset-[-4.4px]">
              <Link href={"/"}>*</Link>
            </span>
          </span>{" "}
          <span className="text-blue-100 inline-block">
            <Link href={"/"} className="flex items-center gap-[1px]">
              Buy
              <Image
                src={"/svg/arrow-icon.svg"}
                alt="right arrow icon svg"
                width={9}
                height={9}
                className="-rotate-90"
              />
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default NavbarSubSection;
