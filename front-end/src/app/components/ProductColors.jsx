import Link from "next/link";
import { checkAvailableColors } from "../utilities/checkAvailableColors";

export const ProductColors = ({ group, selectedColor }) => {
  const availableColors = checkAvailableColors(group);
  return (
    <div className="flex gap-2 items-center pb-5">
      <p>
        Colors: <span className="font-bold">{selectedColor}</span>
      </p>
      <ul className="flex gap-2 items-center">
        {availableColors.map((color) => {
          const colorClasses = {
            black: "bg-black",
            blue: "bg-blue",
            pink: "bg-pink",
            red: "bg-red",
            silver: "bg-silver",
            "rose gold": "bg-roseGold",
          };

          const productId = group.find((product) => product.color === color).id;
          return (
            <li key={`${productId}-${color}`}>
              <Link href={`/product/${productId}`}>
                <div
                  className={`h-4 w-4 rounded-full ${
                    colorClasses[color.toLowerCase()] || "bg-gray-200"
                  } ${
                    color === selectedColor &&
                    "outline outline-2 outline-offset-2"
                  }`}
                ></div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
