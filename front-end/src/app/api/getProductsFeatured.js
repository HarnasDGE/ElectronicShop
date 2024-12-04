import { getProductById } from "./getProductById";

export const getProductsFeatured = () => {
  return [
    getProductById(1),
    getProductById(2),
    getProductById(3),
    getProductById(4),
    getProductById(5),
    getProductById(6),
    getProductById(7),
  ];
};
