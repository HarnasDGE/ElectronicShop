"use client";
import { useContext, useEffect, useState } from "react";
import CartIcon from "../assets/icons/cart.svg";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

export const CartButton = ({ className }) => {
  const [cart] = useContext(CartContext);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  return (
    <Link
      href="/cart"
      className={` flex gap-3 border-l-2 px-5 border-secondText group ${className}`}
    >
      <div className="relative">
        <CartIcon />
        {cartLength > 0 && (
          <div className="text-mainText text-xs absolute top-[-15px] right-[-10px] bg-secondary p-[5px] rounded-full">
            {cartLength}
          </div>
        )}
      </div>
      <p className="group-hover:text-secondary hidden xl:block py-0">Cart</p>
    </Link>
  );
};
