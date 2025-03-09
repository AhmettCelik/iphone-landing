import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navStoreQuickLinkItems,
  navStoreShopItems,
  navStoreSpecialItems,
} from "@/contents/navbarContent";

type NavbarStoreSkeletonProps = {
  isOpen: boolean;
};

const NavbarStoreSkeleton: React.FC<NavbarStoreSkeletonProps> = ({
  isOpen,
}) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navStoreShopItems}
        secondPart={navStoreQuickLinkItems}
        thirdPart={navStoreSpecialItems}
        isThirdPartExists
        firstTitle="Shop"
        secondTitle="Quick Links"
        thirdTitle="Shop Special Stores"
        ifFirstSubPartExists={false}
        ifSecondSubPartExists={false}
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarStoreSkeleton;
