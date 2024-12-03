"use client";
import { SubPageBar } from "../components/SubPageBar";
import { WidthWrapper } from "../components/WidthWrapper";
import HeartIcon from "../assets/icons/heart.svg";
import { ProductsTable } from "../components/ProductsTable";
import { BackButton } from "../components/BackButton";
import { Button } from "../components/Button";
import { useContext, useState } from "react";
import { CtaThird } from "../components/CtaThird";
import { WishlistContext } from "../context/WishlistContext";

export default function Home() {
  const [wishlist, setWishList] = useContext(WishlistContext);
  return (
    <main className="flex flex-col flex-grow">
      <SubPageBar title="Wishlist" />
      <WidthWrapper className="py-20">
        {wishlist.length === 0 && (
          <div className="flex flex-col justify-center items-center text-center gap-7 flex-grow">
            <HeartIcon className="scale-[600%] my-20 " />
            <h2>Your wishlist is currently empty</h2>
            <BackButton />
          </div>
        )}
        {wishlist.length > 0 && (
          <div className="flex-grow">
            <ProductsTable productsList={wishlist} setList={setWishList} />
            <div className="py-3 flex justify-between">
              <BackButton />
              <Button>Share your list</Button>
            </div>
          </div>
        )}
      </WidthWrapper>
      <CtaThird />
    </main>
  );
}
