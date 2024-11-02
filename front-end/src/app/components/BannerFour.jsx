import { Button } from "./Button";
import AmazonIcon from "../assets/icons/amazon.svg";
import FlipkartIcon from "../assets/icons/flipkart.svg";
import SonyIcon from "../assets/images/sony.svg";

export const BannerFour = () => {
  return (
    <li className="relative w-[25%] p-8 rounded-xl flex flex-col justify-between h-full overflow-hidden bg-bannerThird text-mainText">
      <div
        className="absolute inset-0 z-0 mix-blend-multiply"
        style={{
          backgroundImage: "url(/images/banners/ps5.jpg)",
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex-grow  p-4 rounded relative z-10">
        <SonyIcon />
        <div className="flex gap-2 mt-10">
          <div className="w-2/3 text-secondText">
            <p className="text-sm">Retro Vantage</p>
            <h3 className="text-4xl">PlayStation®5 Console</h3>
            <p className="text-5xl leading-4 mt-5 font-bold">UPTO</p>
            <p className="text-4xl font-bold">40% OFF</p>
            <p className="text-xl">Players get powerful gaming technology</p>
            <p className="font-bold text-xl mt-4">Launch Price</p>
            <div className="flex gap-3 text-2xl font-bold whitespace-nowrap">
              <p>$ 250.00</p>
              <p className="line-through text-gray">$ 320.00</p>
            </div>
            <div className="flex gap-3 mt-3">
              <AmazonIcon />
              <FlipkartIcon />
            </div>
          </div>
        </div>
      </div>
      <Button className="mt-auto relative z-10">Buy Now</Button>
    </li>
  );
};
