import { products } from "../data/products";

export const getProductGroup = (product) => {
  return products.filter((p) => p.variant_group === product.variant_group);
};
