import { Button } from "@/app/components/Button";
import ResizeIcon from "@/app/assets/icons/resize.svg";
import HeartIcon from "@/app/assets/icons/heart.svg";
export const ProductActions = ({ productsCount, setProductsCount }) => (
  <div className="py-5 flex gap-2">
    <div className="rounded-full border-gray px-3 bg-lightGray">
      <Button
        color="transparent"
        onClick={() =>
          setProductsCount((prevState) => {
            if (prevState <= 1) return 1;
            else return prevState - 1;
          })
        }
      >
        -
      </Button>
      {productsCount}
      <Button
        color="transparent"
        onClick={() => setProductsCount((prevState) => prevState + 1)}
      >
        +
      </Button>
    </div>
    <Button color="second" className="rounded-full flex-grow">
      Add To Cart
    </Button>
    <Button color="none" type="rounded">
      <ResizeIcon />
    </Button>
    <Button color="none" type="rounded">
      <HeartIcon />
    </Button>
  </div>
);
