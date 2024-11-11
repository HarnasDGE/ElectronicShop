import { getProductsBrands } from "../api/getProductsBrands";

export const FilterByBrands = () => {
  const brands = getProductsBrands();
  return (
    <div>
      <h2 className="font-bold">Product Type</h2>
      <ul>
        {brands.map((brand) => (
          <li
            key={brand}
            className="flex justify-between border-b-2 py-3 items-center"
          >
            <label htmlFor={brand}>{brand}</label>

            <input type="checkbox" id={brand} />
          </li>
        ))}
      </ul>
    </div>
  );
};
