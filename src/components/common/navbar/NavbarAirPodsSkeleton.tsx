import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import NavbarDropDownSkeletonLayout from "@/components/layouts/NavbarDropdownSkeletonLayout";
import {
  navAirPodsExploreItems,
  navAirPodsMoreItems,
  navAirPodsShopItems,
} from "@/contents/navbarContent";

type NavbarAirPodsSkeletonProps = {
  isOpen: boolean;
};

const NavbarAirPodsSkeleton: React.FC<NavbarAirPodsSkeletonProps> = ({
  isOpen,
}) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <NavbarDropDownSkeletonLayout
        isOpen={isOpen}
        firstPart={navAirPodsExploreItems}
        secondPart={navAirPodsShopItems}
        thirdPart={navAirPodsMoreItems}
        isThirdPartExists
        firstTitle="Explore AirPods"
        secondTitle="Shop AirPods"
        thirdTitle="More from AirPods"
        ifFirstSubPartExists
        ifSecondSubPartExists={false}
        firstSubPartContent="Compara AirPods"
      />
    </NavbarDropdownLayout>
  );
};

export default NavbarAirPodsSkeleton;
