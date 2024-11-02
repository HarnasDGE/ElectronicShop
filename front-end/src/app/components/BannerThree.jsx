import Image from "next/image";
import { Button } from "./Button";

export const BannerThree = () => {
  return (
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
  );
};
