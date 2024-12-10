import { WidthWrapper } from "./WidthWrapper";

import ArrowIcon from "../assets/icons/arrowDown.svg";
import { Button } from "./Button";
import { PatternBackground } from "./PatternBackground";

export const CtaSecondary = () => {
  return (
    <div className="relative bg-ctaSecondary py-10">
      <PatternBackground src="/images/patterns/pattern3.png" />

      <WidthWrapper className="flex flex-col xl:flex-row items-center justify-center gap-8 bg-ctaSecondary text-mainText rounded py-5">
        <h2 className="font-normal text-center xl:text-left ">
          Exquisite Electrical Solutions for Discerning Perfection, Engineered
          Impress.
        </h2>
        <form className=" w-full xl:w-1/2 mx-3 xl:mx-0 border-b-2 flex justify-between">
          <input
            type="text"
            placeholder="Enter Your email to subscribe to our newsletter"
            className="bg-transparent p-4 w-3/4 focus:outline-none"
          />
          <Button color="none">
            <ArrowIcon className="-rotate-90 scale-150 text-mainText" />
          </Button>
        </form>
      </WidthWrapper>
    </div>
  );
};
