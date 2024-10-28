import CartIcon from "../assets/icons/cart.svg";

export const CartButton = ({ className }) => {
  const cartLength = 12;
  return (
    <button
      className={` flex gap-3 border-l-2 px-5 border-secondText group ${className}`}
    >
      <div className="relative">
        <CartIcon />
        <div className="text-mainText text-xs absolute top-[-15px] right-[-10px] bg-secondary p-[5px] rounded-full">
          {cartLength}
        </div>
      </div>
      <p className="group-hover:text-secondary">Cart</p>
    </button>
  );
};
