import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navAccessoriesBrandsItems,
  navAccessoriesShopItems,
} from "@/contents/navbarContent";

type NavbarAccessoriesSkeletonProps = {
  isOpen: boolean;
};

const NavbarAccessoriesSkeleton: React.FC<NavbarAccessoriesSkeletonProps> = ({
  isOpen,
}) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navAccessoriesShopItems}
        secondPart={navAccessoriesBrandsItems}
        isThirdPartExists={false}
        firstTitle="Shop Accessories"
        secondTitle="Explore Accessories"
        thirdTitle=""
        ifFirstSubPartExists={false}
        ifSecondSubPartExists={false}
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarAccessoriesSkeleton;
