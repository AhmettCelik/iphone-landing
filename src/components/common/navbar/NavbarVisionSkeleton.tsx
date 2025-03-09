import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navAppleVisionExploreItems,
  navAppleVisionProMoreItems,
  navAppleVisionProShopItems,
} from "@/contents/navbarContent";

type NavbarVisionSkeletonProps = {
  isOpen: boolean;
};

const NavbarVisionSkeleton: React.FC<NavbarVisionSkeletonProps> = ({
  isOpen,
}) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navAppleVisionExploreItems}
        secondPart={navAppleVisionProShopItems}
        thirdPart={navAppleVisionProMoreItems}
        isThirdPartExists
        firstTitle="Explore Vision"
        secondTitle="Shop Vision"
        thirdTitle="More from Vision"
        ifFirstSubPartExists
        ifSecondSubPartExists
        firstSubPartContent="Guided Tour"
        secondSubPartContent="Tech Specs"
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarVisionSkeleton;
