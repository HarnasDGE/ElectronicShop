// Importuj dane z pliku JSON
import { products } from "../data/products.js";

export const getProductById = (productId) => {
  // Znajdź produkt o podanym id
  const product = products.find((product) => product.id === productId);

  // Zwróć produkt lub wiadomość, że nie znaleziono
  if (product) {
    return product;
  } else {
    return `Produkt o id ${productId} nie znaleziony.`; // poprawiona wiadomość
  }
};
