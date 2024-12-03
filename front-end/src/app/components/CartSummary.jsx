import { CartContext } from "../context/CartContext";
import { Button } from "./Button";
import React, { useContext } from "react";

export function CartSummary({
  discount,
  promoCode,
  setPromoCode,
  handleApplyPromoCode,
}) {
  const [cart] = useContext(CartContext);
  const deliveryCost = 15;
  const freeDeliveryThreshold = 300;

  const totalItemsPrice = cart.reduce((total, item) => total + item.price, 0);
  const discountedPrice = totalItemsPrice - discount;
  const finalDeliveryCost =
    discountedPrice >= freeDeliveryThreshold ? 0 : deliveryCost;
  const totalPrice = discountedPrice + finalDeliveryCost;

  return (
    <div className=" pt-4">
      <h3 className="text-lg font-bold mb-4">Cart Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Items Total:</span>
        <span>{totalItemsPrice.toFixed(2)} $</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery Cost:</span>
        <span>
          {finalDeliveryCost > 0 ? `${finalDeliveryCost.toFixed(2)} $` : "Free"}
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount:</span>
        <span>-{discount.toFixed(2)} $</span>
      </div>
      <div className="flex justify-between font-bold text-xl mt-4">
        <span>Total:</span>
        <span>{totalPrice.toFixed(2)} $</span>
      </div>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <Button onClick={handleApplyPromoCode}>Apply Promo Code</Button>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Free delivery for orders over {freeDeliveryThreshold.toFixed(2)} $
      </div>
    </div>
  );
}
