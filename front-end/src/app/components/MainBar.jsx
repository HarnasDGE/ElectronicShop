import { CartButton } from "./CartButton";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { WidthWrapper } from "./WidthWrapper";
import { WishListButton } from "./WishListButton";
import LogoIcon from "/public/images/logo/Logo.svg";

export const MainBar = () => {
  return (
    <WidthWrapper className="flex justify-center items-center py-6 xl:justify-between xl:py-3">
      <LogoIcon className="min-w-[200px]" />
      <Menu className="hidden xl:flex" />
      <div className="hidden xl:flex items-center ">
        <Search />
        <WishListButton />
        <CartButton />
      </div>
    </WidthWrapper>
  );
};
