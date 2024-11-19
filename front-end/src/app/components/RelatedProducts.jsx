import { Carousel } from "./Carousel";
import { ProductCard } from "./ProductCard";

export const RelatedProducts = ({ products }) => {
  return (
    <div className="py-20">
      <h2 className="mb-10">Related Products</h2>
      <Carousel>
        {products.map((product) => (
          <li key={product}>
            <ProductCard product={product} />
          </li>
        ))}
      </Carousel>
    </div>
  );
};
