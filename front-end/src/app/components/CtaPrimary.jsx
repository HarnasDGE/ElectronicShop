import { WidthWrapper } from "./WidthWrapper";
import AmazonIcon from "../assets/icons/amazon.svg";
import FlipkartIcon from "../assets/icons/flipkart.svg";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";
import { Button } from "./Button";

export const CtaPrimary = () => {
  return (
    <WidthWrapper className="relative z-0 flex flex-col xl:flex-row items-center justify-center gap-8 bg-ctaPrimary text-mainText rounded p-5">
      <div
        className="absolute top-0 left-0 h-full w-full -z-10 mix-blend-multiply"
        style={{ backgroundImage: "url(/images/patterns/pattern1.jpg)" }}
      />
      <div className="flex items-end ml-auto xl:ml-0">
        <div className="flex flex-col ">
          <p className="p-0">UPTO</p>
          <p className="text-[100px] font-extrabold leading-[60px] pt-1">40</p>
        </div>
        <div>
          <p className="text-3xl">%</p>
          <p className="text-[20px] p-0">OFF</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2>Where innovation meets convenience in your home</h2>
        <p className="p-0">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>
        <div className="flex gap-5 items-center justify-center xl:justify-start">
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
