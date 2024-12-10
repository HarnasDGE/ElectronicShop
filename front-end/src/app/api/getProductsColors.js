import { products } from "../data/products";

export const getProductsColors = () => {
  return [...new Set(products.map((product) => product.color))];
};
