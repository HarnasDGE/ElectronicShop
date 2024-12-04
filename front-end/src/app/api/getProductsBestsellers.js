import { getProductById } from "./getProductById";

export const getProductsBestsellers = () => {
  return [
    getProductById(11),
    getProductById(12),
    getProductById(13),
    getProductById(14),
    getProductById(15),
    getProductById(16),
    getProductById(17),
  ];
};
