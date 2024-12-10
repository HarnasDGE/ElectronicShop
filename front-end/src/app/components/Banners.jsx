import { BannerOne } from "./BannerOne";
import { BannerTwo } from "./BannerTwo";
import { BannerThree } from "./BannerThree";
import { BannerFour } from "./BannerFour";

export const Banners = () => {
  return (
    <ul className="flex  flex-col xl:flex-row gap-10 justify-between  w-full">
      <BannerOne />
      <BannerTwo />
      <BannerThree />
      <BannerFour />
    </ul>
  );
};
