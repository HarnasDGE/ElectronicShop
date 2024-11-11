import Link from "next/link";
import ArrowIcon from "../assets/icons/arrowDown.svg";
import { getProductsColors } from "../api/getProductsColors";

export const FilterByColors = () => {
  const colorsList = getProductsColors();

  return (
    <div>
      <h2 className="font-bold">Filter By Colors</h2>
      <ul>
        {colorsList.map((color) => {
          const colorClasses = {
            black: "bg-black",
            blue: "bg-blue",
            pink: "bg-pink",
            red: "bg-red",
            silver: "bg-silver",
            "rose gold": "bg-roseGold",
            // Dodaj inne kolory według potrzeb
          };

          return (
            <li
              key={color}
              className="flex justify-between border-b-2 py-3 items-center"
            >
              <Link
                href={`/products?color=${color}`}
                className="flex gap-2 items-center capitalize"
              >
                <div
                  className={`h-4 w-4 rounded-full  ${
                    colorClasses[color] || "bg-gray-200"
                  }`}
                ></div>
                {color}
              </Link>
              <ArrowIcon className="-rotate-90" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
