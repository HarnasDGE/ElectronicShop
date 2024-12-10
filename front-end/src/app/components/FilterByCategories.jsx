"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getProductsCategories } from "../api/getProductsCategories";

export const FilterByCategories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categories = getProductsCategories();
  const activeCategory = searchParams.get("type");

  const handleClick = (category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === "All") {
      newParams.delete("type");
    } else {
      newParams.set("type", category);
    }
    router.push(`/products?${newParams.toString()}`);
  };

  return (
    <div>
      <h2 className="font-bold">Product Type</h2>
      <ul>
        {/* Dodajemy opcję "All" */}
        <li
          className={`flex justify-between border-b-2 items-center hover:bg-gray ${
            !activeCategory ? "font-bold" : ""
          }`}
        >
          <button
            onClick={() => handleClick("All")}
            className="text-left w-full py-3"
          >
            All
          </button>
        </li>
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <li
              key={category}
              className={`flex justify-between border-b-2 items-center transition-all hover:bg-gray ${
                isActive ? "font-bold" : ""
              }`}
            >
              <button
                onClick={() => handleClick(category)}
                className="text-left w-full py-3"
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
