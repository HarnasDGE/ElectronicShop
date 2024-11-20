import BurberryIcon from "../assets/images/burberry.svg";
import EBayIcon from "../assets/images/ebay.svg";
import SonyIcon from "../assets/images/sony.svg";
import OpticIcon from "../assets/images/optic.svg";
import TargetIcon from "../assets/images/target.svg";
import CarreraIcon from "../assets/images/carrera.svg";
import SamsungIcon from "../assets/images/samsung.svg";
import LenovoIcon from "../assets/images/lenovo.svg";
import WalmartIcon from "../assets/images/walmart.svg";
import VerizonIcon from "../assets/images/verizon.svg";

export const Companies = () => {
  return (
    <ul className="grid grid-cols-5 gap-8">
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <BurberryIcon />
      </li>
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <EBayIcon />
      </li>
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <SonyIcon />
      </li>
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <OpticIcon />
      </li>
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <TargetIcon />
      </li>
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <CarreraIcon />
      </li>
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <SamsungIcon />
      </li>
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <LenovoIcon />
      </li>
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <WalmartIcon />
      </li>
      <li className="flex items-center justify-center border-2 border-gray rounded-xl py-4">
        <VerizonIcon />
      </li>
    </ul>
  );
};
