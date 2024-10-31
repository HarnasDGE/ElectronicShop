import { WidthWrapper } from "./WidthWrapper";
import AmazonIcon from "../assets/icons/amazon.svg";
import FlipkartIcon from "../assets/icons/flipkart.svg";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";
import { Button } from "./Button";

export const CtaPrimary = () => {
  return (
    <WidthWrapper className="flex items-center justify-center gap-8 bg-ctaPrimary text-mainText rounded py-5">
      <div className="flex items-end">
        <div className="flex flex-col ">
          <p>UPTO</p>
          <p className="text-[100px] font-extrabold leading-[60px]">40</p>
        </div>
        <div>
          <p className="text-[20px]">%</p>
          <p className="text-[20px]">OFF</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2>Where innovation meets convenience in your home</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>
        <div className="flex gap-5 items-center">
          <AmazonIcon />
          <FlipkartIcon />
        </div>
      </div>
      <Button>
        Shop Now <ArrowRightIcon />
      </Button>
    </WidthWrapper>
  );
};
