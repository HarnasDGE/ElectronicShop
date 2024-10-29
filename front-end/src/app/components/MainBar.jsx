import { AccountButton } from "./AccountButton";
import { CartButton } from "./CartButton";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { WidthWrapper } from "./WidthWrapper";
import { WishListButton } from "./WishListButton";
import LogoIcon from "/public/images/logo/Logo.svg";

export const MainBar = () => {
  return (
    <>
      <WidthWrapper className="flex justify-center pt-8 pb-3 xl:hidden ">
        <LogoIcon className="scale-[200%]" />
      </WidthWrapper>
      <WidthWrapper className="flex justify-center items-center py-6 xl:justify-between xl:py-3">
        <LogoIcon className="min-w-[200px] hidden xl:block" />
        <Menu className="hidden xl:flex" />
        <div className="flex items-center ">
          <Menu className="xl:hidden" />
          <Search />
          <AccountButton />
          <WishListButton />
          <CartButton />
        </div>
      </WidthWrapper>
    </>
  );
};
