"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ArrowIcon from "../assets/icons/arrowDown.svg";
import { getProductsColors } from "../api/getProductsColors";

export const FilterByColors = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const colorsList = getProductsColors();
  const activeColor = searchParams.get("color");

  const handleClick = (color) => {
    const newParams = new URLSearchParams(searchParams);
    if (color === "All") {
      newParams.delete("color"); // usunięcie parametru color
    } else {
      newParams.set("color", color);
    }
    router.push(`/products?${newParams.toString()}`, { scroll: false });
  };

  const colorClasses = {
    black: "bg-black",
    blue: "bg-blue",
    pink: "bg-pink",
    red: "bg-red",
    silver: "bg-silver",
    "rose gold": "bg-roseGold",
  };

  return (
    <div>
      <h2 className="font-bold">Filter By Colors</h2>
      <ul>
        <li
          className={`flex justify-between border-b-2 items-center hover:bg-gray ${
            !activeColor ? "font-bold" : ""
          }`}
        >
          <button
            onClick={() => handleClick("All")}
            className="flex gap-2 items-center py-3 capitalize w-full text-left"
          >
            {/* komentarz: brak koloru = "All" */}
            All
          </button>
          <ArrowIcon className="-rotate-90" />
        </li>
        {colorsList.map((color) => {
          const isActive = activeColor === color;
          return (
            <li
              key={color}
              className={`flex justify-between border-b-2 items-center hover:bg-gray ${
                isActive ? "font-bold" : ""
              }`}
            >
              <button
                onClick={() => handleClick(color)}
                className="flex gap-2 items-center py-3 capitalize w-full text-left"
              >
                <div
                  className={`h-4 w-4 rounded-full ${
                    colorClasses[color.toLowerCase()] || "bg-gray-200"
                  }`}
                ></div>
                {color}
              </button>
              <ArrowIcon className="-rotate-90" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
