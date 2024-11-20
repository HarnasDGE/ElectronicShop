import { Button } from "./Button";

export const BannerOne = () => {
  return (
    <li className="relative p-8 rounded-xl flex flex-col justify-between max-h-[800px] min-h-[800px] overflow-hidden bg-bannerPrimary">
      <div
        className="absolute inset-0 z-0 mix-blend-multiply bg-contain bg-bottom  bg-no-repeat"
        style={{
          backgroundImage: "url(/images/banners/laptopAndMobile.jpg)",
        }}
      ></div>
      <div className="absolute top-0 left-0 h-full w-full bg-secondary z-10 opacity-30"></div>
      <div className="flex-grow  p-4 rounded relative ">
        <p>Applications</p>
        <h3 className="text-4xl">UPTO 50% OFF</h3>
        <p>Festival Season with Bestselling Appliances</p>
      </div>
      <Button className="mt-auto relative z-10">Shop Now</Button>
    </li>
  );
};
