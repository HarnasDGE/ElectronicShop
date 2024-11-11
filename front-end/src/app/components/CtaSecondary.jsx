import { WidthWrapper } from "./WidthWrapper";

import ArrowIcon from "../assets/icons/arrowDown.svg";
import { Button } from "./Button";

export const CtaSecondary = () => {
  return (
    <div className=" bg-ctaSecondary py-10">
      <WidthWrapper className="flex items-center justify-center gap-8 bg-ctaSecondary text-mainText rounded py-5">
        <h2 className="font-normal text-4xl">
          Exquisite Electrical Solutions for Discerning Perfection, Engineered
          Impress.
        </h2>
        <form className="w-1/2 border-b-2 flex justify-between">
          <input
            type="text"
            placeholder="Enter Your email to subscribe to our newsletter"
            className="bg-transparent p-4 w-3/4 focus:outline-none"
          />
          <Button color="none">
            Subscribe <ArrowIcon className="-rotate-90 scale-150" />
          </Button>
        </form>
      </WidthWrapper>
    </div>
  );
};
