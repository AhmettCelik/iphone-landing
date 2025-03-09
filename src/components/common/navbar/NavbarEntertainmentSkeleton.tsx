import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navEntertainmentExploreItems,
  navEntertainmentSupportItems,
} from "@/contents/navbarContent";

type NavbarEntertainmentSkeletonProps = {
  isOpen: boolean;
};

const NavbarEntertainmentSkeleton: React.FC<
  NavbarEntertainmentSkeletonProps
> = ({ isOpen }) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navEntertainmentExploreItems}
        secondPart={navEntertainmentSupportItems}
        isThirdPartExists={false}
        firstTitle="Explore Entertainment"
        secondTitle="Support"
        thirdTitle=""
        ifFirstSubPartExists={false}
        ifSecondSubPartExists={false}
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarEntertainmentSkeleton;
