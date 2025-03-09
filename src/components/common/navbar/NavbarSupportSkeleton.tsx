import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navSupportCategoriesItems,
  navSupportGetHelpItems,
  navSupportServicesItems,
} from "@/contents/navbarContent";

type NavbarSupportSkeletonProps = {
  isOpen: boolean;
};

const NavbarSupportSkeleton: React.FC<NavbarSupportSkeletonProps> = ({
  isOpen,
}) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navSupportCategoriesItems}
        secondPart={navSupportGetHelpItems}
        thirdPart={navSupportServicesItems}
        isThirdPartExists
        firstTitle="Explore Support"
        secondTitle="Get Help"
        thirdTitle="Helpful Topics"
        ifFirstSubPartExists
        ifSecondSubPartExists={false}
        firstSubPartContent="Explore Support"
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarSupportSkeleton;
