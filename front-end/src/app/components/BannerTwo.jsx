import { Button } from "./Button";
import AmazonIcon from "../assets/icons/amazon.svg";
import FlipkartIcon from "../assets/icons/flipkart.svg";
import SpecialOfferStarIcon from "../assets/icons/specialOfferStar.svg";

export const BannerTwo = () => {
  return (
    <li className="relative w-[25%] p-8 rounded-xl flex flex-col justify-between h-full overflow-hidden bg-bannerSecondary text-mainText">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/banners/redmiWatch.png)",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex-grow  p-4 rounded relative z-10">
        <div className="flex gap-5 items-center justify-center">
          <AmazonIcon />
          <FlipkartIcon />
        </div>
        <h3 className="text-4xl text-center">Redmi Watch 5x</h3>
        <div className="text-center">20 Days Battery | Bluetooth Calling</div>
        <p className="text-center text-2xl font-bold mt-3">
          Launch Price $ 250.00
        </p>
        <div className="absolute top-[30%] left-[10%] z-0 flex justify-center items-center py-5 px-3">
          <p className="text-specialOffer text-center uppercase text-sm font-bold">
            Special<br></br> Offer
          </p>
          <SpecialOfferStarIcon className="absolute top-0 left-0 -z-10" />
        </div>
      </div>
      <Button className="mt-auto relative z-10">Shop Now</Button>
    </li>
  );
};
