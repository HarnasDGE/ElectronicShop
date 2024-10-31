import Image from "next/image";
import { getProductById } from "../api/getProductById";
import { BestsellerCard } from "./BestsellerCard";
import { Carousel } from "./Carousel";
import { WidthWrapper } from "./WidthWrapper";
import { SpecialProduct } from "./SpecialProduct";

export const PopularProducts = () => {
  const product = getProductById(1);
  const specialProduct = getProductById(4);

  const isActive = 0;
  const categories = [
    {
      id: 0,
      name: "All Products",
    },
    {
      id: 1,
      name: "Featured",
      image: "/images/icons/featured.png",
    },
    {
      id: 2,
      name: "Bestsellers",
      image: "/images/icons/bestsellers.png",
    },
    {
      id: 3,
      name: "On Sale",
      image: "/images/icons/onSale.png",
    },
  ];
  return (
    <WidthWrapper className="flex gap-4 py-5 w-full ">
      <SpecialProduct product={specialProduct} />
      <div className="w-[75%] ">
        <div className="py-4 border-b-[1px] mb-5 flex items-center justify-between">
          <h2>Popular Products</h2>
          <ul className="flex gap-5">
            {categories.map((cat) => {
              return (
                <li
                  key={cat.name}
                  className={`flex uppercase whitespace-nowrap items-center gap-2 py-1 px-4 rounded-full border-2 border-solid border-gray cursor-pointer ${
                    isActive === cat.id ? "bg-gray" : "bg-background"
                  } `}
                >
                  {cat.image && (
                    <Image
                      src={cat.image}
                      width={20}
                      height={20}
                      alt="Category image"
                    />
                  )}{" "}
                  {cat.name}
                </li>
              );
            })}
          </ul>
        </div>
        <Carousel>
          <BestsellerCard product={product} />
          <BestsellerCard product={product} />
          <BestsellerCard product={product} />
          <BestsellerCard product={product} />
          <BestsellerCard product={product} />
          <BestsellerCard product={product} />
          <BestsellerCard product={product} />
          <BestsellerCard product={product} />
          <BestsellerCard product={product} />
        </Carousel>
      </div>
    </WidthWrapper>
  );
};
