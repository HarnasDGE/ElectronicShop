import { BannerOne } from "./BannerOne";
import { BannerTwo } from "./BannerTwo";
import { BannerThree } from "./BannerThree";
import { BannerFour } from "./BannerFour";

export const Banners = () => {
  return (
    <ul className="flex gap-10  items-stretch">
      <BannerOne />
      <BannerTwo />
      <BannerThree />
      <BannerFour />
    </ul>
  );
};
