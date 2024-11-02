"use client";
import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";
import { getProductById } from "../api/getProductById";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";

export const Sale = () => {
  const products = [
    getProductById(2),
    getProductById(2),
    getProductById(3),
    getProductById(4),
  ];

  const endDate = new Date("2024-11-05T23:59:59").getTime(); // Ustal datę końcową
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <WidthWrapper className="flex gap-5">
      <div className="w-fit flex flex-col justify-center items-center bg-bannerPrimarySale rounded-xl text-center px-10">
        <h2>BIGGEST FRIDAY SALE</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available
          advanced electronic solutions
        </p>
        <div className="flex gap-3 text-center py-10 items-center">
          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded">
            <div className="text-5xl font-bold leading-10">{timeLeft.days}</div>
            <span>Days</span>
          </div>
          <div className="text-3xl">:</div>
          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded">
            <div className="text-5xl font-bold leading-10">
              {timeLeft.hours}
            </div>
            <span>Hours</span>
          </div>
          <div className="text-3xl">:</div>

          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded">
            <div className="text-5xl font-bold leading-10">
              {timeLeft.minutes}
            </div>
            <span>Minutes</span>
          </div>
          <div className="text-3xl">:</div>

          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded">
            <div className="text-5xl font-bold leading-10">
              {timeLeft.seconds}
            </div>
            <span>Seconds</span>
          </div>
        </div>
        <Button>
          Shop Now <ArrowRightIcon />
        </Button>
      </div>
      <div className="w-3/4 flex gap-5">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </WidthWrapper>
  );
};
