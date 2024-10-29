import AmazonIcon from "../assets/icons/amazon.svg";
import FlipkartIcon from "../assets/icons/flipkart.svg";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";

import { WidthWrapper } from "./WidthWrapper";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <div
      className="relative bg-heroBackground bg-center bg-cover bg-no-repeat z-10"
      style={{ backgroundImage: `url("/images/hero/hero.jpg")` }}
    >
      <WidthWrapper className=" py-32 text-mainText flex flex-col items-center xl:items-start text-center xl:text-left">
        <div className="flex ">
          <AmazonIcon className="mr-3" />
          <FlipkartIcon className="ml-3" />
        </div>
        <h1 className="w-1/2 mt-5">
          Transform your home into a modern masterpiece.
        </h1>
        <p className="text-sm w-1/2 mt-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
        <p className="text-xl my-5">
          Front Fingerprint Sensor | <span className="font-bold">32GB</span>{" "}
          With <span className="font-bold">13+8 MP Camera</span>
        </p>
        <Button color="default">
          Shop Now <ArrowRightIcon />
        </Button>
      </WidthWrapper>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60 xl:opacity-100 xl:bg-transparent xl:bg-heroGradient z-[-1] "></div>
    </div>
  );
};
