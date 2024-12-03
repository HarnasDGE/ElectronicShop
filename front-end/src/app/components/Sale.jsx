"use client";
import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";
import { getProductById } from "../api/getProductById";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../utilities/calculateTimeLeft";

export const Sale = () => {
  const products = [
    getProductById(2),
    getProductById(2),
    getProductById(3),
    getProductById(4),
  ];

  const endDate = new Date("2024-11-13T23:59:59").getTime(); // Ustal datę końcową
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
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
        {products.map((product, index) => {
          return (
            <ProductCard key={`${product.id} - ${index}`} product={product} />
          );
        })}
      </div>
    </WidthWrapper>
  );
};
