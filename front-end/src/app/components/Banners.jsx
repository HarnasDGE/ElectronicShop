import Image from "next/image";
import { Button } from "./Button";
import AmazonIcon from "../assets/icons/amazon.svg";
import FlipkartIcon from "../assets/icons/flipkart.svg";
import SpecialOfferStarIcon from "../assets/icons/specialOfferStar.svg";
import SonyIcon from "../assets/images/sony.svg";

export const Banners = () => {
  return (
    <ul className="flex gap-10 h-[600px] items-stretch">
      <li className="relative w-[25%] p-8 rounded-xl flex flex-col justify-between h-full overflow-hidden bg-bannerPrimary">
        <div
          className="absolute inset-0 z-0 mix-blend-multiply bg-contain bg-bottom  bg-no-repeat"
          style={{
            backgroundImage: "url(/images/banners/laptopAndMobile.jpg)",
          }}
        ></div>
        <div className="flex-grow  p-4 rounded relative ">
          <p>Applications</p>
          <h3 className="text-4xl">UPTO 50% OFF</h3>
          <p>Festival Season with Bestselling Appliances</p>
        </div>
        <Button className="mt-auto relative z-10">Shop Now</Button>
      </li>
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
      <li className="relative w-[25%] p-8 rounded-xl flex flex-col justify-between h-full overflow-hidden bg-bannerThird text-mainText">
        <div
          className="absolute inset-0 z-0 mix-blend-multiply"
          style={{
            backgroundImage: "url(/images/banners/airdopes.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex-grow  p-4 rounded relative z-10">
          <div className="flex gap-5 items-center justify-center">
            <div className="relative w-full h-[50px]">
              <Image
                src="/images/companies/fireboltt.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <h3 className="text-4xl mt-4">Airdopes 311 Pro Truly Wireless</h3>
          <div
            className="absolute top-[30%] right-[10%] z-0 bg-center bg-contain bg-no-repeat p-10 "
            style={{ backgroundImage: "url(/images/icons/star.png)" }}
          >
            <div className="text-mainText text-center uppercase text-sm font-bold">
              <p className="text-sm">Starting</p>
              <p className="text-2xl border-b-2">$ 199.00</p>
              <p className="text-xl">25% Off</p>
              <p className="text-xs">Special Discount</p>
            </div>
          </div>
        </div>
        <Button className="mt-auto relative z-10">Buy Now</Button>
      </li>
      <li className="relative w-[25%] p-8 rounded-xl flex flex-col justify-between h-full overflow-hidden bg-bannerThird text-mainText">
        <div
          className="absolute inset-0 z-0 mix-blend-multiply"
          style={{
            backgroundImage: "url(/images/banners/ps5.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "right bottom",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex-grow  p-4 rounded relative z-10">
          <SonyIcon />
          <div className="flex gap-2 mt-10">
            <div className="w-2/3 text-secondText">
              <p className="text-sm">Retro Vantage</p>
              <h3 className="text-4xl">PlayStation®5 Console</h3>
              <p className="text-5xl leading-4 mt-5 font-bold">UPTO</p>
              <p className="text-4xl font-bold">40% OFF</p>
              <p className="text-xl">Players get powerful gaming technology</p>
              <p className="font-bold text-xl mt-4">Launch Price</p>
              <div className="flex gap-3 text-2xl font-bold whitespace-nowrap">
                <p>$ 250.00</p>
                <p className="line-through text-gray">$ 320.00</p>
              </div>
              <div className="flex gap-3 mt-3">
                <AmazonIcon />
                <FlipkartIcon />
              </div>
            </div>
          </div>
        </div>
        <Button className="mt-auto relative z-10">Buy Now</Button>
      </li>
    </ul>
  );
};
