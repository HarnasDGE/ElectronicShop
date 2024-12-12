import Link from "next/link";
import { AccountButton } from "./AccountButton";
import { CartButton } from "./CartButton";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { WidthWrapper } from "./WidthWrapper";
import { WishListButton } from "./WishListButton";

export const MainBar = ({ className }) => {
  return (
    <div
      className={`bg-background min-h-22 max-h-22 overflow-hidden py-3 z-[9999] ${className} `}
    >
      <WidthWrapper className="flex justify-center items-center h-full px-3 xl:px-0 xl:justify-between  overflow-hidden">
        <Link href="/" className="w-full">
          <Logo className="min-w-[150px] " />
        </Link>
        <Menu className="hidden xl:flex" />
        <div className="flex  items-center ">
          <div className="flex gap-1 mx-auto">
            <Search />
          </div>
          <div className="flex pt-2 xl:pt-2 items-center">
            <WishListButton />
            <CartButton />
            <Menu className="xl:hidden" />
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
};
