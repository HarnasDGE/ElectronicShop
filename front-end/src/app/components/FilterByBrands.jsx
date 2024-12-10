"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getProductsBrands } from "../api/getProductsBrands";

export const FilterByBrands = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const brands = getProductsBrands();

  const handleChange = (brand, isChecked) => {
    const newParams = new URLSearchParams(searchParams);
    const currentBrands = newParams.get("brand")
      ? newParams.get("brand").split(",")
      : [];

    if (isChecked) {
      // dodanie marki
      if (!currentBrands.includes(brand)) {
        currentBrands.push(brand);
      }
    } else {
      // usunięcie marki
      const index = currentBrands.indexOf(brand);
      if (index > -1) {
        currentBrands.splice(index, 1);
      }
    }

    if (currentBrands.length > 0) {
      newParams.set("brand", currentBrands.join(","));
    } else {
      newParams.delete("brand");
    }

    router.push(`/products?${newParams.toString()}`, { scroll: false });
  };

  return (
    <div>
      <h2 className="font-bold">Product Brand</h2>
      <ul>
        {brands.map((brand) => {
          const selectedBrands = searchParams.get("brand")
            ? searchParams.get("brand").split(",")
            : [];
          const isChecked = selectedBrands.includes(brand);

          return (
            <li
              key={brand}
              className="flex justify-between border-b-2 py-3 items-center"
            >
              <label htmlFor={brand}>{brand}</label>
              <input
                type="checkbox"
                id={brand}
                checked={isChecked}
                onChange={(e) => handleChange(brand, e.target.checked)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
