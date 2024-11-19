"use client";
import { Divider } from "@/app/components/Divider";
import { ProductPricing } from "./ProductPricing";
import { ProductDescription } from "./ProductDescription";
import { ProductKeyFeatures } from "./ProductKeyFeatures";
import { ProductColors } from "./ProductColors";
import { ProductCapacities } from "./ProductCapacities";
import { ProductActions } from "./ProductActions";
import { ProductMeta } from "./ProductMeta";
import StarIcon from "../assets/icons/starSecond.svg";

export const ProductDetails = ({
  product,
  group,
  reviews,
  productsCount,
  setProductsCount,
}) => {
  return (
    <div className="w-1/2">
      <h2 className="pt-4 leading-4">{product.name}</h2>
      <div className="flex justify-between w-1/2 items-center py-5">
        <div className="flex gap-1 items-center">
          {Array.from({ length: reviews.stars }).map((_, index) => (
            <StarIcon key={index} />
          ))}{" "}
          ({reviews.count} Reviews)
        </div>
        <p className="text-gray">
          Sku: <span className="font-bold text-secondText">{product.SKU}</span>
        </p>
        <div className="text-inStock border-2 rounded-full py-[2px] px-3">
          {" "}
          In stock{" "}
        </div>
      </div>
      <Divider />
      <ProductPricing product={product} />
      <ProductDescription product={product} />
      <ProductKeyFeatures features={product.key_features} />
      <ProductColors group={group} selectedColor={product.color} />
      <ProductCapacities group={group} selectedCapacity={product.capacity} />
      <ProductActions
        productsCount={productsCount}
        setProductsCount={setProductsCount}
      />
      <ProductMeta product={product} />
    </div>
  );
};
