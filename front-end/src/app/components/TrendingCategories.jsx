import { getProductById } from "../api/getProductById";
import { Carousel } from "./Carousel";
import { ProductCard } from "./ProductCard";
import { WidthWrapper } from "./WidthWrapper";

export const TrendingCategories = () => {
  const activeCategory = "Laptops";

  const categories = [
    "Laptops",
    "Monitors",
    "Mobiles",
    "Head Set",
    "Coolers",
    "Tablets",
    "Television",
    "Speakers",
    "PlayStation",
    "Xbox",
    "Smart Watches",
  ];

  const products = [
    getProductById(1),
    getProductById(4),
    getProductById(8),
    getProductById(12),
    getProductById(15),
    getProductById(13),
    getProductById(1),
    getProductById(4),
    getProductById(8),
    getProductById(12),
    getProductById(15),
    getProductById(13),
  ];
  return (
    <WidthWrapper className="flex flex-col gap-10">
      <h2>Trending Categories</h2>
      <ul className="flex gap-4 flex-wrap  ">
        {categories.map((cat) => (
          <li
            key={cat}
            className={`py-2 px-10 text-xl rounded ${
              cat === activeCategory
                ? "bg-secondary text-mainText"
                : "bg-trendingCategories"
            } cursor-pointer transition-all hover:bg-gray`}
          >
            {cat}
          </li>
        ))}
      </ul>
      <Carousel pagination="numbers">
        {products.map((product) => (
          <ProductCard key={product} product={product} />
        ))}
      </Carousel>
    </WidthWrapper>
  );
};
