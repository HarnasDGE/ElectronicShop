import Image from "next/image";
import { WidthWrapper } from "./WidthWrapper";
import { Button } from "./Button";

export const CtaThird = () => {
  return (
    <div className="bg-ctaSecondary text-mainText py-8 ">
      <WidthWrapper className="flex justify-between items-center">
        <div className="flex gap-7">
          <Image
            src="/images/cta/plane.png"
            width={100}
            height={100}
            className="aspect-video"
          />
          <h2 className="w-1/2">
            Our latest updates delivered straight to your inbox.
          </h2>
        </div>
        <form>
          <div className="border-2 bg-background rounded-full ">
            <input
              type="text"
              placeholder="Enter yout Mail id"
              className="rounded-full px-4 focus:outline-none text-secondText"
            />
            <Button color="second" className="rounded-full">
              Send Message
            </Button>
          </div>
          <div>
            <input type="radio" id="agree" className="mx-2 text-secondText" />
            <label htmlFor="agree">I agree with the terms & conditions</label>
          </div>
        </form>
      </WidthWrapper>
    </div>
  );
};