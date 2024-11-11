import { products } from "../data/products";

export const getProductsCategories = () => {
  return [...new Set(products.map((product) => product.category))];
};
