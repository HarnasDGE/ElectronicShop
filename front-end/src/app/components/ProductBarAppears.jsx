"use client";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { WidthWrapper } from "./WidthWrapper";
import Image from "next/image";
import { Button } from "./Button";
import { CartContext } from "../context/CartContext";

export const ProductBarAppears = ({ product }) => {
  const [showBar, setShowBar] = useState(false);
  const [quantity, setQuantity] = useState(1); // komentarz - trzymamy stan ilości
  const [, setCart] = useContext(CartContext);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 700) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funkcja dodająca produkty do koszyka
  const handleAddToCart = () => {
    setCart((prevCart) => {
      let newCart = [...prevCart];
      for (let i = 0; i < quantity; i++) {
        newCart = [...newCart, product];
      }
      return newCart;
    });
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  let modal = null;
  if (typeof window !== "undefined" && showBar && product) {
    modal = createPortal(
      <div
        className="
          fixed bottom-2 left-0  w-full z-10
         
          transform transition-transform duration-300 translate-y-0
          
        "
      >
        <WidthWrapper className="bg-background flex justify-between items-center w-full mx-3 px-10 py-3 rounded-full shadow-inner">
          {/* Lewa strona - obrazek i nazwa produktu */}
          <div className="flex items-center gap-4">
            <Image
              height={100}
              width={100}
              src={product.images[0]}
              alt={product.name}
              className="w-16 h-16 object-cover"
            />
            <span className="font-semibold">{product.name}</span>
          </div>
          {/* Prawa strona - ilość + i - , oraz przycisk do koszyka */}
          <div className="flex items-center gap-4">
            <Button
              onClick={decreaseQuantity}
              className="  rounded-full "
              color="none"
            >
              -
            </Button>
            <span className="font-semibold">{quantity}</span>
            <Button
              onClick={increaseQuantity}
              className="  rounded-full"
              color="none"
            >
              +
            </Button>
            <Button
              color="second"
              onClick={handleAddToCart}
              className="rounded-full"
            >
              Add To Cart
            </Button>
          </div>
        </WidthWrapper>
      </div>,
      document.body
    );
  }

  return <>{modal}</>;
};
