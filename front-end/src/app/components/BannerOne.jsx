import Image from "next/image";
import { Button } from "./Button";
import { PatternBackground } from "./PatternBackground";

export const BannerOne = () => {
  return (
    <li className="relative p-8 rounded-xl  w-full max-w-[1000px] flex flex-col justify-between max-h-[800px] min-h-[800px] overflow-hidden bg-bannerPrimary">
      <PatternBackground src="/images/patterns/dark-mosaic.png" />
      <div className="  p-4 rounded relative text-2xl ">
        <p>Applications</p>
        <h3 className="text-5xl">UPTO 50% OFF</h3>
        <p>Festival Season with Bestselling Appliances</p>
      </div>
      <Image
        src="/images/banners/laptopAndMobile.png"
        height={300}
        width={300}
        className="flex-grow z-10 w-fit mx-auto drop-shadow-2xl"
        alt="Laptop image"
      />
      <Button className="mt-auto relative z-10 ">Shop Now</Button>
    </li>
  );
};
