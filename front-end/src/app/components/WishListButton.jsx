"use client";
import { useContext } from "react";
import HeartIcon from "../assets/icons/heart.svg";
import { WishlistContext } from "../context/WishlistContext";
import Link from "next/link";

export const WishListButton = ({ className }) => {
  const [wishlist] = useContext(WishlistContext);

  return (
    <Link
      className={` flex gap-3 px-5  border-secondText group ${className}`}
      href="/wishlist"
    >
      <div className="relative">
        <HeartIcon />{" "}
        <div className="text-mainText text-xs absolute top-[-15px] right-[-10px] bg-secondary p-[5px] rounded-full transition-all ">
          {wishlist.length}
        </div>
      </div>
      <p className="group-hover:text-secondary hidden xl:block py-0">
        WishList
      </p>
    </Link>
  );
};
