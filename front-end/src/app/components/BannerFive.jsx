import { Button } from "./Button";
import ViessmannIcon from "../assets/images/viessmann.svg";
import Image from "next/image";
import { PatternBackground } from "./PatternBackground";

export const BannerFive = () => {
  return (
    <li className="relative w-full h-full max-h-[800px]  rounded-xl flex flex-col justify-between overflow-hidden bg-bannerFifth">
      <PatternBackground src="/images/patterns/diagonal-striped-brick.png" />
      <div className="flex-grow p-8 rounded relative flex flex-col items-center">
        <ViessmannIcon className="h-full" />
        <p className="text-4xl">SPRINT RUNNING</p>
        <h3 className="text-xl">Smart Watches</h3>
        {/* Zamieniono komponent Image na div z tłem */}
        <Image
          src="/images/banners/smartwatches.png"
          width={300}
          height={300}
          className="h-full w-auto "
          alt="smartwatches"
        />
        <p>Live Sale on 25th Sep</p>
        <div className="xl:whitespace-nowrap">
          Stainless Steel Design |
          <span className="font-bold">Bluetooth Calling</span> | 466*466 Px
          Resolution
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-xl font-bold">From $850.00</p>
          <p className="line-through">$950.00</p>
        </div>
        <Button className="mt-auto relative z-10">Shop Now</Button>
      </div>
    </li>
  );
};
