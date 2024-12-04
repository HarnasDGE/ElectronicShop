import { products } from "../data/products";

export const getProductsOnSale = () => {
  return products.filter((product) => product.discount_price != null);
};
