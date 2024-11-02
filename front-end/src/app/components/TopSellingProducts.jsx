import { getProductById } from "../api/getProductById";
import { ProductSmallCard } from "./ProductSmallCard";

export const TopSellingProducts = () => {
  const products = [
    getProductById(12),
    getProductById(14),
    getProductById(25),
    getProductById(10),
  ];
  return (
    <div>
      <h2 className="text-center text-secondary">Top Selling Products</h2>
      <ul className="flex flex-col gap-5">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductSmallCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
