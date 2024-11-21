"use client";
import { SubPageBar } from "../components/SubPageBar";
import CartIcon from "../assets/icons/cart.svg";
import { BackButton } from "../components/BackButton";
import { CtaThird } from "../components/CtaThird";
import { ProductsTable } from "../components/ProductsTable";
import { getProductById } from "../api/getProductById";
import { Button } from "../components/Button";
import { GridWrapper } from "../components/GridWrapper";
import { CartSummary } from "../components/CartSummary";
import { useState } from "react";

export default function Home() {
  const cart = [
    getProductById(4),
    getProductById(2),
    getProductById(2),
    getProductById(14),
  ];
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <main className="flex flex-col flex-grow">
      <SubPageBar title="Your Cart" />
      <GridWrapper sidebar="right" className="py-20 flex-grow">
        {cart.length === 0 && (
          <div className="flex flex-col justify-center items-center text-center gap-7">
            <CartIcon className="scale-[600%] my-20 " />
            <h2>Your cart is currently empty</h2>
            <BackButton />
          </div>
        )}
        {cart.length > 1 && (
          <>
            <div className="flex-grow">
              <ProductsTable productsList={cart} />
              <div className="py-3 flex justify-between">
                <BackButton />
                <Button>Payment</Button>
              </div>
            </div>
            <CartSummary
              cart={cart}
              discount={discount}
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              handleApplyPromoCode={handleApplyPromoCode}
            />
          </>
        )}
      </GridWrapper>
      <CtaThird />
    </main>
  );
}
