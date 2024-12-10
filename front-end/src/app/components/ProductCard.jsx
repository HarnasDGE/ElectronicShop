"use client";
import React, { useContext, useState } from "react";
import { Button } from "./Button"; // Zakładam, że masz własny komponent Button
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../context/CartContext";

export const ProductCard = ({ product, buttonShown = true }) => {
  const rating = 3.4;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [, setCart] = useContext(CartContext);
  const [touchStartX, setTouchStartX] = useState(null);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (diffX > 50) {
      handleNextClick();
      setTouchStartX(null);
    } else if (diffX < -50) {
      handlePrevClick();
      setTouchStartX(null);
    }
  };

  const discountPercentage =
    product.discount_price && product.price
      ? Math.round(
          ((product.price - product.discount_price) / product.price) * 100
        )
      : null;

  return (
    <div
      className="relative border border-gray rounded-lg p-5 "
      key={product.id}
    >
      {/* Sekcja zdjęć produktu jako karuzela */}
      <div
        className="relative mb-4 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {product.images.map((image, index) => (
          <Image
            key={`productImage-${product.id}-${index}`}
            src={image}
            alt={product.name}
            width={300}
            height={300}
            className={`w-full object-cover  rounded-lg transition-transform duration-700 ease-in-out transform ${
              index === currentImageIndex
                ? "translate-x-0"
                : "translate-x-full hidden"
            }`}
            style={{
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          />
        ))}

        <div className="flex justify-center space-x-1 mt-2">
          {product.images.map((_, index) => (
            <div
              key={`dotImage-${product.id}-${index}`}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentImageIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <Link href={`/product/${product.id}`}>
        {/* Promocja i nazwa promocji */}
        <div className="flex items-center justify-between mb-2">
          <span className="bg-secondary text-white px-2 py-1 rounded-md text-sm">
            {discountPercentage}% OFF
          </span>
          <span className="text-gray-700 text-sm">{product.promotionName}</span>
        </div>

        {/* Nazwa produktu */}
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>

        {/* Cena produktu */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xl font-bold text-specialPricePrimary mr-2">
              ${product.discount_price || product.price}
            </span>
            {product.discount_price && (
              <span className="text-oldPricePrimary line-through mr-2">
                ${product.price}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg mr-1">
              {"\u2605".repeat(Math.floor(rating))}
            </span>
            <span className="text-gray-600">({rating})</span>
          </div>
          <span className="text-sm text-avaible">
            Available only: {product.in_stock}
          </span>
        </div>

        <ul className="mt-5">
          {product.key_features.slice(0, 3).map((key, index) => {
            return (
              <li
                key={`${product.id}-key-${index}`}
                className="flex gap-2 items-center mb-2"
              >
                <Image
                  src="/images/icons/apply.png"
                  width={20}
                  height={20}
                  alt="Apply Icon"
                />
                {key}
              </li>
            );
          })}
        </ul>
      </Link>
      {buttonShown && (
        <div className="flex justify-center mt-5">
          <Button
            color="second"
            onClick={() => setCart((prevState) => [...prevState, product])}
          >
            {" "}
            Add To Cart
          </Button>
        </div>
      )}

      {/* Informacje w prawym rogu */}
      <div className="absolute top-2 right-2">
        <div className="bg-discount text-mainText flex items-center justify-center px-3 py-1 mb-4 ">
          {discountPercentage}%
        </div>
        <div className="flex flex-col space-y-2 ">
          <button className="border border-gray bg-background rounded-full p-1 aspect-square transition-transform duration-300 hover:scale-110">
            &#9825;
          </button>{" "}
          {/* Dodaj do ulubionych */}
          <button className="border border-gray bg-background rounded-full p-1 aspect-square transition-transform duration-300 hover:scale-110">
            &#128269;
          </button>{" "}
          {/* Więcej informacji */}
          <button className="border border-gray bg-background rounded-full p-1 aspect-square transition-transform duration-300 hover:scale-110">
            +
          </button>{" "}
          {/* Kolejny przycisk */}
        </div>
      </div>
    </div>
  );
};
