"use client";
import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";
import { getProductById } from "../api/getProductById";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../utilities/calculateTimeLeft";
import { PatternBackground } from "./PatternBackground";
import { GridWrapper } from "./GridWrapper";
import { Carousel } from "./Carousel";

export const Sale = () => {
  const products = [
    getProductById(2),
    getProductById(2),
    getProductById(3),
    getProductById(4),
  ];

  const endDate = new Date("2024-12-13T23:59:59").getTime(); // Ustal datę końcową
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <GridWrapper>
      <div className="relative z-0 w-fit flex flex-col justify-center items-center bg-bannerPrimarySale rounded-xl text-center w-full py-5">
        <PatternBackground
          src="/images/patterns/hexellence.png"
          className="-z-20"
        />
        <h2>BIGGEST FRIDAY SALE</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available
          advanced electronic solutions
        </p>
        <div className="flex gap-3 text-center py-10 items-center">
          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded">
            <h2 className="font-bold leading-10">{timeLeft.days}</h2>
            <p className="p-0">Days</p>
          </div>
          <div className="text-3xl">:</div>
          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded">
            <h2 className=" font-bold leading-10">{timeLeft.hours}</h2>
            <p className="p-0">Hours</p>
          </div>
          <div className="text-3xl">:</div>

          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded">
            <h2 className=" font-bold leading-10">{timeLeft.minutes}</h2>
            <p className="p-0">Minutes</p>
          </div>
          <div className="text-3xl">:</div>

          <div className="p-3 bg-backgroundPrimary flex flex-col justify-center rounded">
            <h2 className=" font-bold leading-10">{timeLeft.seconds}</h2>
            <p className="p-0">Seconds</p>
          </div>
        </div>
        <Button>
          Shop Now <ArrowRightIcon />
        </Button>
      </div>
      <Carousel>
        {products.map((product, index) => {
          return (
            <ProductCard key={`${product.id} - ${index}`} product={product} />
          );
        })}
      </Carousel>
    </GridWrapper>
  );
};
