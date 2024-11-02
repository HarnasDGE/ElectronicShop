import { WidthWrapper } from "./WidthWrapper";
import BurberryIcon from "../assets/images/burberry.svg";
import EbayIcon from "../assets/images/ebay.svg";
import SonyIcon from "../assets/images/sony.svg";
import OpticIcon from "../assets/images/optic.svg";
import TargetIcon from "../assets/images/target.svg";
import SamsungIcon from "../assets/images/samsung.svg";
import LenovoIcon from "../assets/images/lenovo.svg";

export const OurTrendingBrands = () => {
  return (
    <WidthWrapper>
      <h2 className="text-center">Our trending Brands</h2>
      <div className="flex gap-5 justify-center items-center mt-10">
        {/* Każda ikona brandu posiada border, padding, zaokrąglone rogi oraz wysokość rodzica */}
        <div className="px-5  border border-gray rounded-lg flex items-center justify-center h-20">
          <BurberryIcon />
        </div>
        <div className="px-5  border border-gray rounded-lg flex items-center justify-center h-20">
          <EbayIcon />
        </div>
        <div className="px-5 border border-gray rounded-lg flex items-center justify-center h-20">
          <SonyIcon />
        </div>
        <div className="px-5 border border-gray rounded-lg flex items-center justify-center h-20">
          <OpticIcon />
        </div>
        <div className="px-5 border border-gray rounded-lg flex items-center justify-center h-20">
          <TargetIcon />
        </div>
        <div className="px-5 border border-gray rounded-lg flex items-center justify-center h-20">
          <SamsungIcon />
        </div>
        <div className="px-5 border border-gray rounded-lg flex items-center justify-center h-20">
          <LenovoIcon />
        </div>
      </div>
    </WidthWrapper>
  );
};
