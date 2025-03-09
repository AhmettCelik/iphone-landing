import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navAppleWatchExploreItems,
  navAppleWatchMoreItems,
  navAppleWatchShopItems,
} from "@/contents/navbarContent";

type NavbarWatchSkeletonProps = {
  isOpen: boolean;
};

const NavbarWatchSkeleton: React.FC<NavbarWatchSkeletonProps> = ({
  isOpen,
}) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navAppleWatchExploreItems}
        secondPart={navAppleWatchShopItems}
        thirdPart={navAppleWatchMoreItems}
        isThirdPartExists
        firstTitle="Explore Watch"
        secondTitle="Shop Watch"
        thirdTitle="More from Watch"
        ifFirstSubPartExists
        ifSecondSubPartExists
        firstSubPartContent="Compare Watch"
        secondSubPartContent="Why Apple Watch"
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarWatchSkeleton;
