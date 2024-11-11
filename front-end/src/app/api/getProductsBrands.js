import { products } from "../data/products";

export const getProductsBrands = () => {
  return [...new Set(products.map((product) => product.brand))];
};
