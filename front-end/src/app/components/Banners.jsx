import Image from "next/image";
import { Button } from "./Button";
import AmazonIcon from "../assets/icons/amazon.svg";
import FlipkartIcon from "../assets/icons/flipkart.svg";
import SpecialOfferStarIcon from "../assets/icons/specialOfferStar.svg";

export const Banners = () => {
  return (
    <ul className=" flex gap-10 ">
      <li className="w-[25%] bg-bannerPrimary p-8 rounded-xl">
        <p>Applications</p>
        <h3 className="text-4xl">UPTO 50% OFF</h3>
        <p>Festival Season with Bestselling Appliances</p>
        <Image
          src="/images/banners/laptopAndMobile.jpg"
          width={100}
          height={100}
          layout="responsive"
          className="mix-blend-multiply"
        />
        <Button>Shop Now</Button>
      </li>
      <li className="relative w-[25%] bg-bannerSecondary text-mainText p-8 rounded-xl">
        <div className="flex gap-5 items-center justify-center">
          <AmazonIcon />
          <FlipkartIcon />
        </div>
        <h3 className="text-4xl text-center">Redmi Watch 5x</h3>
        <div className="text-center">20 Days Battery | Bluetooth Calling</div>
        <p className="text-center text-2xl font-bold mt-3">
          Launch Price $ 250.00{" "}
        </p>
        <Image
          src="/images/banners/redmiWatch.png"
          width={100}
          height={100}
          layout="responsive"
        />
        <div className="absolute top-[30%] left-[10%] z-0 flex justify-center items-center py-5 px-3">
          <p className="text-specialOffer text-center uppercase text-sm font-bold">
            Special<br></br> Offer
          </p>{" "}
          <SpecialOfferStarIcon className="absolute top-0 left-0 -z-10 " />
        </div>
        <Button>Shop Now</Button>
      </li>
    </ul>
  );
};
