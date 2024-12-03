"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export const ProductsTable = ({ productsList, setList }) => {
  // Początkowa kombinacja produktów
  const combineInitialProducts = (products) => {
    return products.reduce((acc, item) => {
      const existingItem = acc.find((product) => product.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
  };

  // Inicjalizacja stanu na podstawie przekazanych produktów
  const [combinedProducts, setCombinedProducts] = useState(() =>
    combineInitialProducts(productsList)
  );

  useEffect(() => {
    // Aktualizacja kombinacji, gdy productsList się zmieni
    setCombinedProducts(combineInitialProducts(productsList));
  }, [productsList]);

  const increaseQuantity = (item) => {
    // Dodawanie produktu do listy
    setList((prevList) => [...prevList, item]);
  };

  const decreaseQuantity = (item) => {
    // Usuwanie produktu z listy
    setList((prevList) => {
      const itemIndex = prevList.findIndex((product) => product.id === item.id);
      if (itemIndex !== -1) {
        const newList = [...prevList];
        newList.splice(itemIndex, 1);
        return newList;
      }
      return prevList;
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-background border">
        <thead>
          <tr>
            <th className="py-3 px-6 border-b bg-gray">Image</th>
            <th className="py-3 px-6 border-b bg-gray">Product</th>
            <th className="py-3 px-6 border-b bg-gray">Price</th>
            <th className="py-3 px-6 border-b bg-gray">Discount Price</th>
            <th className="py-3 px-6 border-b bg-gray">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {combinedProducts.map((item) => (
            <tr
              key={item.id}
              className={`text-center ${
                item.quantity === 0 ? "opacity-50" : ""
              }`}
            >
              <td className="py-4 px-6 border-b border-r flex justify-center">
                <Image
                  src={item.images[0]}
                  width={50}
                  height={50}
                  alt="Product Image"
                  className="aspect-square"
                />
              </td>
              <td className="py-4 px-6 border-b">{item.name}</td>
              <td className="py-4 px-6 border-b">{item.price} zł</td>
              <td className="py-4 px-6 border-b">
                {item.discount_price || "-"} zł
              </td>
              <td className="py-4 px-6 border-b">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="bg-gray px-3 py-1 rounded font-bold"
                    onClick={() => decreaseQuantity(item)}
                    disabled={item.quantity === 0}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-gray px-3 py-1 rounded font-bold"
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
