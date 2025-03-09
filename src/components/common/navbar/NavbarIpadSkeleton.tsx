import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navIpadExploreItems,
  navIpadMoreItems,
  navIpadShopItems,
} from "@/contents/navbarContent";
import Link from "next/link";

type NavbarIpadSkeletonProps = {
  isOpen: boolean;
};

const NavbarIpadSkeleton: React.FC<NavbarIpadSkeletonProps> = ({ isOpen }) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navIpadExploreItems}
        secondPart={navIpadShopItems}
        thirdPart={navIpadMoreItems}
        isThirdPartExists
        firstTitle="Explore iPad"
        secondTitle="Shop iPad"
        thirdTitle="More from iPad"
        ifFirstSubPartExists
        ifSecondSubPartExists
        firstSubPartContent="Compare iPad"
        secondSubPartContent="Why iPad"
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarIpadSkeleton;
