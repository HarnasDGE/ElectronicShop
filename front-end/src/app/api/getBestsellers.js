const fs = require("fs");

export const getBestsellers = () => {
  try {
    // Wczytaj zawartość pliku JSON
    const data = fs.readFileSync("./src/app/data/products.json", "utf-8");

    // Parsuj dane do obiektu JavaScript
    const products = JSON.parse(data).slice(0, 12);

    // Zwróć produkt lub wiadomość, że nie znaleziono
    if (products) {
      return products;
    } else {
      return `Brak bestsellerów :(`;
    }
  } catch (error) {
    console.error("Wystąpił błąd podczas odczytu pliku JSON:", error);
  }
};
