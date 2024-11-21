"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export const ProductsTable = ({ productsList }) => {
  // Combine same items by summing quantities
  const [combinedProducts, setCombinedProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Combine products by name and sum their quantities
    const combined = productsList.reduce((acc, item) => {
      const existingItem = acc.find((product) => product.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    setCombinedProducts(combined);
    setQuantities(
      combined.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {})
    );
  }, [productsList]);

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 0,
    }));
  };

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full bg-background border ">
        <thead>
          <tr>
            <th className="py-3 px-6  border-b bg-gray">Image</th>
            <th className="py-3 px-6  border-b bg-gray">Product</th>
            <th className="py-3 px-6  border-b bg-gray">Price</th>
            <th className="py-3 px-6  border-b bg-gray">Discount Price</th>
            <th className="py-3 px-6  border-b bg-gray">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {combinedProducts.map((item) => (
            <tr
              key={item.id}
              className={`text-center ${
                quantities[item.id] === 0 ? "opacity-50" : ""
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
                    className="bg-gray px-3 py-1  rounded font-bold"
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={quantities[item.id] === 0}
                  >
                    -
                  </button>
                  <span className="mx-2">{quantities[item.id]}</span>
                  <button
                    className="bg-gray px-3 py-1  rounded font-bold"
                    onClick={() => increaseQuantity(item.id)}
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
