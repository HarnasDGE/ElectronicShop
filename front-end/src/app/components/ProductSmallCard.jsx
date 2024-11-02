import { Button } from "./Button";

export const ProductSmallCard = ({ product }) => {
  const discountPercentage =
    product.discount_price && product.price
      ? Math.round(
          ((product.price - product.discount_price) / product.price) * 100
        )
      : null;
  return (
    <div className="bg-backgroundProductPrimary py-7 px-5 flex gap-5 justify-between transition-all duration-300 group hover:bg-hoveredProdcutSecondary">
      <div
        className="w-1/3 bg-center bg-contain bg-no-repeat  "
        style={{ backgroundImage: `url(${product.images[0]})` }}
      ></div>
      <div>
        <h3>{product.name}</h3>
        <div className="flex justify-between">
          <div className="flex gap-5 items-center">
            <p className="text-specialPriceSecondary text-xl font-bold ">
              {" "}
              ${product.discount_price}
            </p>
            <p className="line-through">${product.price}</p>
          </div>
          <Button
            color="black"
            className="transition-all hidden group-hover:flex"
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div className="bg-procentOff w-10 flex justify-center items-center h-fit rounded-full text-mainText aspect-square transition-all duration-300 group-hover:hidden">
        {discountPercentage}%
      </div>
    </div>
  );
};