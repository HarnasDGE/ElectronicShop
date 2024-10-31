const fs = require("fs");

export const getProductById = (productId) => {
  try {
    // Wczytaj zawartość pliku JSON
    const data = fs.readFileSync("./src/app/data/products.json", "utf-8");

    // Parsuj dane do obiektu JavaScript
    const products = JSON.parse(data);

    // Znajdź produkt o podanym id
    const product = products.find((product) => product.id === productId);

    // Zwróć produkt lub wiadomość, że nie znaleziono
    if (product) {
      return product;
    } else {
      return `Produkt o id ${productId} nie znaleziony.`;
    }
  } catch (error) {
    console.error("Wystąpił błąd podczas odczytu pliku JSON:", error);
  }
};
