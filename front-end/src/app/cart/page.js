"use client";
import { SubPageBar } from "../components/SubPageBar";
import CartIcon from "../assets/icons/cart.svg";
import { BackButton } from "../components/BackButton";
import { CtaThird } from "../components/CtaThird";
import { ProductsTable } from "../components/ProductsTable";
import { Button } from "../components/Button";
import { GridWrapper } from "../components/GridWrapper";
import { CartSummary } from "../components/CartSummary";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const [cart, setCart] = useContext(CartContext);
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
          <div className="flex flex-col justify-center items-center text-center gap-7 flex-grow">
            <CartIcon className="scale-[600%] my-20 " />
            <h2>Your cart is currently empty</h2>
            <BackButton />
          </div>
        )}
        {cart.length > 0 && (
          <>
            <div className="flex-grow">
              <ProductsTable productsList={cart} setList={setCart} />
              <div className="py-3 flex justify-between">
                <BackButton />
                <Button>Payment</Button>
              </div>
            </div>
            <CartSummary
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
