import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navIphoneExploreItems,
  navIphoneMoreItems,
  navIphoneShopItems,
} from "@/contents/navbarContent";

type NavbarIphoneSkeletonProps = {
  isOpen: boolean;
};

const NavbarIphoneSkeleton: React.FC<NavbarIphoneSkeletonProps> = ({
  isOpen,
}) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navIphoneExploreItems}
        secondPart={navIphoneShopItems}
        thirdPart={navIphoneMoreItems}
        isThirdPartExists
        firstTitle="Explore iPhone"
        secondTitle="Shop iPhone"
        thirdTitle="More from iPhone"
        ifFirstSubPartExists
        ifSecondSubPartExists
        firstSubPartContent="Compare iPhone"
        secondSubPartContent="Switch from Android"
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarIphoneSkeleton;
