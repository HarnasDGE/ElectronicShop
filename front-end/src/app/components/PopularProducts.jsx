"use client";
import Image from "next/image";
import { getProductById } from "../api/getProductById";
import { BestsellerCard } from "./BestsellerCard";
import { Carousel } from "./Carousel";
import { SpecialProduct } from "./SpecialProduct";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { getProductsFeatured } from "../api/getProductsFeatured";
import { GridWrapper } from "./GridWrapper";
import { getProductsBestsellers } from "../api/getProductsBestsellers";
import { getProductsOnSale } from "../api/getProductsOnSale";

export const PopularProducts = () => {
  const [activeTabId, setActiveTabId] = useState("all-popular-products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = () => {
      switch (activeTabId) {
        case "all-popular-products":
          setProducts([getProductById(1), getProductById(2)]);
          return;
        case "featured":
          const featuredProduts = getProductsFeatured();
          setProducts(featuredProduts);
          return;
        case "bestsellers":
          const bestsellers = getProductsBestsellers();
          setProducts(bestsellers);
          return;
        case "on-sale":
          const productsOnSale = getProductsOnSale();
          setProducts(productsOnSale);
          return;
      }
    };
    loadProducts();
  }, [activeTabId]);
  const specialProduct = getProductById(4);

  const categories = [
    {
      id: "all-popular-products",
      name: "All Products",
    },
    {
      id: "featured",
      name: "Featured",
      image: "/images/icons/featured.png",
    },
    {
      id: "bestsellers",
      name: "Bestsellers",
      image: "/images/icons/bestsellers.png",
    },
    {
      id: "on-sale",
      name: "On Sale",
      image: "/images/icons/onSale.png",
    },
  ];

  return (
    <GridWrapper>
      <SpecialProduct product={specialProduct} />
      <div className=" ">
        <div className="py-4 xl:border-b-[1px] mb-5 flex flex-col xl:flex-row gap-4 items-center justify-between ">
          <h2>Popular Products</h2>
          <ul className="flex gap-5 w-full overflow-x-auto whitespace-nowrap hide-scrollbar">
            {categories.map((cat) => {
              const isActive = activeTabId === cat.id;
              return (
                <Button
                  color="none"
                  key={cat.name}
                  className={`flex uppercase whitespace-nowrap items-center gap-2 py-1 px-4 rounded-full border-2 border-solid border-gray cursor-pointer font-normal ${
                    isActive ? "bg-gray" : "bg-background"
                  } `}
                  onClick={() => setActiveTabId(cat.id)}
                >
                  {cat.image && (
                    <Image
                      src={cat.image}
                      width={20}
                      height={20}
                      alt="Category image"
                    />
                  )}
                  {cat.name}
                </Button>
              );
            })}
          </ul>
        </div>
        <Carousel prefixId="popularProduct">
          {products.map((product) => (
            <BestsellerCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </GridWrapper>
  );
};
