"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./Button";
import "../styles/FilterByPrice.css";

export const FilterByPrice = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialMin = parseInt(searchParams.get("min") || "0", 10);
  const initialMax = parseInt(searchParams.get("max") || "10000", 10);

  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);

  useEffect(() => {
    setMinPrice(initialMin);
    setMaxPrice(initialMax);
  }, [initialMin, initialMax]);

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    const val = parseInt(value, 10);
    if (name === "min") {
      if (val <= maxPrice) {
        setMinPrice(val);
      }
    } else {
      if (val >= minPrice) {
        setMaxPrice(val);
      }
    }
  };

  const handleFilter = () => {
    const newParams = new URLSearchParams(searchParams);

    if (minPrice > 0) {
      newParams.set("min", minPrice);
    } else {
      newParams.delete("min");
    }

    if (maxPrice < 10000) {
      newParams.set("max", maxPrice);
    } else {
      newParams.delete("max");
    }

    router.push(`/products?${newParams.toString()}`);
  };

  return (
    <div>
      <h2 className="font-bold">Filter By Price</h2>
      <form className="grid gap-4 py-5">
        <div className="relative w-full">
          <input
            type="range"
            name="min"
            min="0"
            max="10000"
            value={minPrice}
            onChange={handleSliderChange}
            className="range-input"
          />
          <input
            type="range"
            name="max"
            min="0"
            max="10000"
            value={maxPrice}
            onChange={handleSliderChange}
            className="range-input"
          />
          <div className="slider-track" />
          <div
            className="slider-range"
            style={{
              left: `${(minPrice / 10000) * 100}%`,
              width: `${((maxPrice - minPrice) / 10000) * 100}%`,
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <p>
            Price: ${minPrice} - ${maxPrice}
          </p>
          <Button color="black" onClick={handleFilter}>
            Filter
          </Button>
        </div>
      </form>
    </div>
  );
};
