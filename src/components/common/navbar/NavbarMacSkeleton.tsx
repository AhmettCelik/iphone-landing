import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navMacExploreItems,
  navMacMoreItems,
  navMacShopItems,
} from "@/contents/navbarContent";

type NavbarMacContentProps = {
  isOpen: boolean;
};

const NavbarMacContent: React.FC<NavbarMacContentProps> = ({ isOpen }) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navMacExploreItems}
        secondPart={navMacShopItems}
        thirdPart={navMacMoreItems}
        isThirdPartExists
        firstTitle="Explore Mac"
        secondTitle="Shop Mac"
        thirdTitle="More from Mac"
        ifFirstSubPartExists
        ifSecondSubPartExists
        firstSubPartContent="Compare Mac"
        secondSubPartContent="Switch from PC to Mac"
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarMacContent;
