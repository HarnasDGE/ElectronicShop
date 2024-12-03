"use client";
import { Button } from "@/app/components/Button";
import ResizeIcon from "@/app/assets/icons/resize.svg";
import HeartIcon from "@/app/assets/icons/heart.svg";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

export const ProductActions = ({ product }) => {
  const [, setWishlist] = useContext(WishlistContext);
  const [productsCount, setProductsCount] = useState(1);
  const [, setCart] = useContext(CartContext);

  // Funkcja dodająca produkty do koszyka
  const handleAddToCart = () => {
    setCart((prevCart) => {
      let newCart = [...prevCart];
      for (let i = 0; i < productsCount; i++) {
        newCart = [...newCart, product];
      }
      return newCart;
    });
  };

  return (
    <div className="py-5 flex gap-2">
      <div className="rounded-full border-gray px-3 bg-lightGray">
        <Button
          color="transparent"
          onClick={() =>
            setProductsCount((prevState) => {
              if (prevState <= 1) return 1;
              else return prevState - 1;
            })
          }
        >
          -
        </Button>
        {productsCount}
        <Button
          color="transparent"
          onClick={() => setProductsCount((prevState) => prevState + 1)}
        >
          +
        </Button>
      </div>
      <Button
        color="second"
        className="rounded-full flex-grow"
        onClick={handleAddToCart} // Dodany event onClick
      >
        Add To Cart
      </Button>
      <Button color="none" type="rounded">
        <ResizeIcon />
      </Button>
      <Button
        color="none"
        type="rounded"
        onClick={() => setWishlist((prevState) => [...prevState, product])}
      >
        <HeartIcon />
      </Button>
    </div>
  );
};
