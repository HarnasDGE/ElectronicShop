"use client";
import { useState } from "react";
import { Button } from "./Button";
import "../styles/FilterByPrice.css"; // Dodaj stylowanie dla slidera

export const FilterByPrice = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    if (name === "min") {
      if (parseInt(value) <= maxPrice) {
        setMinPrice(parseInt(value));
      }
    } else {
      if (parseInt(value) >= minPrice) {
        setMaxPrice(parseInt(value));
      }
    }
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
          <Button color="black">Filter</Button>
        </div>
      </form>
    </div>
  );
};
