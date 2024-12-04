import { Button } from "./Button";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";

import DellIcon from "../assets/images/dell.svg";
import { PatternBackground } from "./PatternBackground";

export const SpecialProduct = ({ product }) => {
  const brandsComponents = {
    Dell: DellIcon,
  };
  const BrandIconComponent = brandsComponents[product.brand];

  return (
    <div className="relative flex flex-col gap-4 py-5 px-6 min-w-[25%] bg-specialProduct rounded-xl text-center h-auto">
      <PatternBackground src="/images/patterns/pattern-squares.png" />
      {BrandIconComponent && (
        <BrandIconComponent
          width={50}
          height={50}
          className="mix-blend-multiply mx-auto"
        />
      )}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div
          className="w-full h-64 bg-center bg-contain bg-no-repeat mix-blend-multiply mx-auto"
          style={{ backgroundImage: `url(${product.images[1]})` }}
          alt={`Image of ${product.name}`}
        ></div>
        <div className="flex whitespace-nowrap font-bold justify-center text-2xl">
          From $ {product.discount_price}
          <p className="ml-2 font-normal line-through text-gray">
            $ {product.price}
          </p>
        </div>
      </div>
      <Button className="mx-auto mt-4">
        Shop Now <ArrowRightIcon />
      </Button>
    </div>
  );
};
