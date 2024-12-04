import Image from "next/image";
import { Button } from "./Button";
import { PatternBackground } from "./PatternBackground";

export const BannerThree = () => {
  return (
    <li className="relative  w-full max-w-[1000px] p-8 rounded-xl flex flex-col justify-between max-h-[800px] min-h-[800px] overflow-hidden bg-bannerThird text-mainText">
      <PatternBackground src="/images/patterns/diagonal-striped-brick.png" />
      <div className="flex-grow  p-4 rounded relative z-10">
        <div className="flex gap-5 items-center justify-center">
          <div className="relative w-full h-[50px]">
            <Image
              src="/images/companies/fireboltt.png"
              height={40}
              width={400}
              className="w-fit"
              alt="firebolt logo"
            />
          </div>
        </div>
        <h3 className="text-4xl my-4">Airdopes 311 Pro Truly Wireless</h3>

        <div className="relative flex-grow flex  h-3/4 ">
          <div
            className="absolute top-0 right-0 z-10 bg-center bg-cover bg-no-repeat p-5 w-[300px] opacity-60"
            style={{ backgroundImage: "url(/images/icons/star.png)" }}
          >
            <div className="text-mainText text-center uppercase text-sm font-bold p-14">
              <p className="text-base p-0">Starting</p>
              <p className="text-2xl border-b-2 p-1">$ 199.00</p>
              <p className="text-2xl p-0">25% Off</p>
              <p className="text-base p-0">Special Discount</p>
            </div>
          </div>
          <Image
            src="/images/banners/airdopes.png"
            height={200}
            width={200}
            alt="airdropes image"
            className="w-fit mx-auto drop-shadow-xl"
          />
        </div>
      </div>
      <Button className="mt-auto relative z-10">Buy Now</Button>
    </li>
  );
};
