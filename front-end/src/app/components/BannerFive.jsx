import { Button } from "./Button";
import ViessmannIcon from "../assets/images/viessmann.svg";

export const BannerFive = () => {
  return (
    <li className="relative w-1/3 min-h-full p-8 rounded-xl flex flex-col justify-between overflow-hidden bg-bannerFifth">
      <div className="flex-grow p-4 rounded relative flex flex-col items-center">
        <ViessmannIcon />
        <p className="text-4xl">SPRINT RUNNING</p>
        <h3 className="text-xl">Smart Watches</h3>
        {/* Zamieniono komponent Image na div z tłem */}
        <div
          className="flex-grow w-full aspect-square bg-cover bg-center mt-4 "
          style={{ backgroundImage: "url('/images/banners/smartwatches.png')" }}
        ></div>
        <p>Live Sale on 25th Sep</p>
        <div className="whitespace-nowrap">
          Stainless Steel Design |{" "}
          <span className="font-bold">Bluetooth Calling</span> | 466*466 Px
          Resolution
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-xl font-bold">From $850.00</p>
          <p className="line-through">$950.00</p>
        </div>
      </div>
      <Button className="mt-auto relative z-10">Shop Now</Button>
    </li>
  );
};
