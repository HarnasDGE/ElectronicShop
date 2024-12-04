"use client";
import { useState } from "react";
import { getProductsCategories } from "../api/getProductsCategories";
import { Carousel } from "./Carousel";
import { ProductCard } from "./ProductCard";
import { WidthWrapper } from "./WidthWrapper";
import { Button } from "./Button";
import { products } from "../data/products";

export const TrendingCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Laptops");

  const categories = getProductsCategories();

  const productList = products.filter(
    (product) => product.category === activeCategory
  );
  return (
    <WidthWrapper className="flex flex-col gap-10">
      <h2>Trending Categories</h2>
      <ul className="flex gap-4 flex-wrap  ">
        {categories.map((cat) => (
          <Button
            color={cat === activeCategory ? "second" : "none"}
            key={cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </ul>
      <Carousel pagination="numbers" prefixId="trendingCategories">
        {productList.map((product) => (
          <ProductCard key={product} product={product} />
        ))}
      </Carousel>
    </WidthWrapper>
  );
};
