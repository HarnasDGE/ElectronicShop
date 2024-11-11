"use client";
import { useEffect, useState } from "react";
import { WidthWrapper } from "./WidthWrapper";
import { calculateTimeLeft } from "../utilities/calculateTimeLeft";
import { Button } from "./Button";
import { SocialLinks } from "./SocialLinks";

export const ComingSoon = () => {
  const endDate = new Date("2024-11-15T23:59:59").getTime(); // Ustal datę końcową
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="bg-backgroundComingSoon flex-grow">
      <WidthWrapper className="flex flex-col items-center justify-center py-20">
        <h2 className="text-6xl pb-10">Coming Soon</h2>
        <p className="w-1/2 text-center">
          Aenean eu malesuada leo. Aliquam gravida venenatis aliquam. Aliquam ut
          ipsum ac felis scelerisque malesuada quis vitae ante. Fusce
          consectetur turpis in diam auctor.
        </p>
        <div className="flex gap-5 text-center py-10 items-center">
          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded px-6">
            <div className="text-5xl font-bold leading-10 pb-3 border-b-4">
              {timeLeft.days}
            </div>
            <span>Days</span>
          </div>
          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded px-6">
            <div className="text-5xl font-bold leading-10 pb-3 border-b-4">
              {timeLeft.hours}
            </div>
            <span>Hours</span>
          </div>

          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded px-6">
            <div className="text-5xl font-bold leading-10 pb-3 border-b-4">
              {timeLeft.minutes}
            </div>
            <span>Minutes</span>
          </div>

          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded px-6">
            <div className="text-5xl font-bold leading-10 pb-3 border-b-4">
              {timeLeft.seconds}
            </div>
            <span>Seconds</span>
          </div>
        </div>
        <p className="font-bold">Get Notifed When Products Goes Live</p>
        <form className=" flex items-center gap-5 py-4">
          <input
            type="text"
            placeholder="Enter Your Mail..."
            className="bg-backgroundInputComingSoon rounded-full py-4 px-8 text-mainText"
          />
          <Button color="second" className="rounded-full ">
            Send Message
          </Button>
        </form>
        <SocialLinks />
        <p>©Designthemes all rights Reserved</p>
      </WidthWrapper>
    </div>
  );
};
