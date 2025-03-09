import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navTvHomeExploreItems,
  navTvHomeMoreItems,
  navTvHomeShopItems,
} from "@/contents/navbarContent";

type NavbarTVHomeSkeletonProps = {
  isOpen: boolean;
};

const NavbarTVHomeSkeleton: React.FC<NavbarTVHomeSkeletonProps> = ({
  isOpen,
}) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navTvHomeExploreItems}
        secondPart={navTvHomeShopItems}
        thirdPart={navTvHomeMoreItems}
        isThirdPartExists
        firstTitle="Explore TV & Home"
        secondTitle="Shop TV & Home"
        thirdTitle="More from TV & Home"
        ifFirstSubPartExists={false}
        ifSecondSubPartExists={false}
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarTVHomeSkeleton;
