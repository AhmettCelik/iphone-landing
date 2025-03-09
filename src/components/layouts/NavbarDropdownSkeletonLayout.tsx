import NavbarDropdownLayout from "@/components/layouts/NavbarDropdownLayout";
import {
  navMacExploreItems,
  navMacMoreItems,
  navMacShopItems,
} from "@/contents/navbarContent";
import Link from "next/link";

type NavbarDropDownSkeletonLayoutProps = {
  isOpen: boolean;
  firstPart: NavItem[];
  secondPart: NavItem[];
  thirdPart?: NavItem[];
  isThirdPartExists: boolean;
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  ifFirstSubPartExists: boolean;
  ifSecondSubPartExists: boolean;
  firstSubPartContent?: string;
  secondSubPartContent?: string;
};

const NavbarDropDownSkeletonLayout: React.FC<
  NavbarDropDownSkeletonLayoutProps
> = ({
  isOpen,
  firstPart,
  secondPart,
  thirdPart,
  isThirdPartExists,
  firstTitle,
  secondTitle,
  thirdTitle,
  ifFirstSubPartExists,
  ifSecondSubPartExists,
  firstSubPartContent,
  secondSubPartContent,
}) => {
  return (
    <NavbarDropdownLayout isOpen={isOpen}>
      <div className="pr-22">
        <h2 className="text-secondary text-xs">{firstTitle}</h2>
        <ul className="mt-4 flex flex-col gap-2 text-2xl font-semibold navbar-ul">
          {firstPart.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.content}</Link>
            </li>
          ))}
          <li
            className={`text-xs mt-4 ${ifFirstSubPartExists ? "" : "hidden"}`}
          >
            <Link href={"/"}>{firstSubPartContent}</Link>
          </li>
          <li className={`text-xs ${ifSecondSubPartExists ? "" : "hidden"}`}>
            <Link href={"/"}>{secondSubPartContent}</Link>
          </li>
        </ul>
      </div>
      <div className="pr-11">
        <h2 className="text-secondary text-xs">{secondTitle}</h2>
        <ul className="mt-4 flex flex-col gap-2 text-xs font-semibold navbar-ul">
          {secondPart.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.content}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`pr-11 ${isThirdPartExists ? "" : "hidden"}`}>
        <h2 className="text-secondary text-xs">{thirdTitle}</h2>
        <ul className="mt-4 flex flex-col gap-2 text-xs font-semibold navbar-ul">
          {thirdPart &&
            thirdPart.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.content}</Link>
              </li>
            ))}
        </ul>
      </div>
    </NavbarDropdownLayout>
  );
};

export default NavbarDropDownSkeletonLayout;
