import HeartIcon from "../assets/icons/heart.svg";

export const WishListButton = ({ className }) => {
  const wishListLength = 12;
  return (
    <button
      className={` flex gap-3 border-l-2 px-5 border-secondText group ${className}`}
    >
      <div className="relative">
        <HeartIcon />{" "}
        <div className="text-mainText text-xs absolute top-[-15px] right-[-10px] bg-secondary p-[5px] rounded-full transition-all ">
          {wishListLength}
        </div>
      </div>
      <p className="group-hover:text-secondary">WishList</p>
    </button>
  );
};
