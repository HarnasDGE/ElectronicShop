import { Button } from "./Button";
import AmazonIcon from "../assets/icons/amazon.svg";
import FlipkartIcon from "../assets/icons/flipkart.svg";
import SpecialOfferStarIcon from "../assets/icons/specialOfferStar.svg";
import Image from "next/image";
import { PatternBackground } from "./PatternBackground";

export const BannerTwo = () => {
  return (
    <li className="relative  w-full max-w-[1000px] p-8 rounded-xl flex flex-col justify-between max-h-[800px] min-h-[800px] overflow-hidden bg-bannerSecondary text-mainText">
      <PatternBackground src="/images/patterns/pattern3.png" />
      <div className="flex-grow  p-4 rounded relative z-10 flex flex-col">
        <div className="flex gap-5 items-center justify-center">
          <AmazonIcon />
          <FlipkartIcon />
        </div>
        <h3 className="text-4xl text-center my-3">Redmi Watch 5x</h3>
        <div className="text-center">20 Days Battery | Bluetooth Calling</div>
        <p className="text-center text-4xl font-bold mt-3">
          Launch Price $ 250.00
        </p>
        <div className="relative h-full w-fit mx-auto pb-5 flex-grow">
          <div className="absolute top-0 left-0 z-0 flex justify-center items-center w-[150px] h-[150px] z-10">
            <p className="text-specialOffer text-center uppercase text-xl font-bold">
              Special <br></br> Offer
            </p>
            <SpecialOfferStarIcon className="absolute top-2 left-0 -z-10" />
          </div>
          <Image
            src="/images/banners/redmiWatch.png"
            height={300}
            width={300}
            className="h-full w-auto mx-auto drop-shadow-2xl z-0"
            alt="redmi watch image"
          />
        </div>
      </div>
      <Button className="mt-auto relative z-10">Shop Now</Button>
    </li>
  );
};
