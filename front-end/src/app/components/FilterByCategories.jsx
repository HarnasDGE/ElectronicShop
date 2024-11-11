import Link from "next/link";
import ArrowIcon from "../assets/icons/arrowDown.svg";
import { getProductsCategories } from "../api/getProductsCategories";

export const FilterByCategories = () => {
  const categories = getProductsCategories();

  return (
    <div>
      <h2 className="font-bold">Product Type</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className="flex justify-between border-b-2 py-3 items-center"
          >
            <Link href={`/products?collection=${category}`}>{category}</Link>
            <ArrowIcon className="-rotate-90" />
          </li>
        ))}
      </ul>
    </div>
  );
};
