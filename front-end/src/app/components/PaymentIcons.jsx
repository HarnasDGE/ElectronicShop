import VisaIcon from "../assets/images/visa.svg";
import MastercardIcon from "../assets/images/mastercard.svg";
import SkrillIcon from "../assets/images/skrill.svg";
import PayPalIcon from "../assets/images/paypal.svg";
import PayoneerIcon from "../assets/images/payoneer.svg";
import AmazonPayIcon from "../assets/images/amazonpay.svg";
import GPayIcon from "../assets/images/gpay.svg";

export const PaymentIcons = ({ background = "default" }) => (
  <ul className="flex items-center gap-3 h-fit">
    <li
      className={`${
        background === "gray" ? "bg-gray" : "bg-background"
      } rounded p-1`}
    >
      <VisaIcon />
    </li>
    <li
      className={`${
        background === "gray" ? "bg-gray" : "bg-background"
      } rounded p-1`}
    >
      <MastercardIcon />
    </li>
    <li
      className={`${
        background === "gray" ? "bg-gray" : "bg-background"
      } rounded p-1`}
    >
      <PayPalIcon />
    </li>
    <li
      className={`${
        background === "gray" ? "bg-gray" : "bg-background"
      } rounded p-1`}
    >
      <SkrillIcon />
    </li>
    <li
      className={`${
        background === "gray" ? "bg-gray" : "bg-background"
      } rounded p-1`}
    >
      <PayoneerIcon />
    </li>
    <li
      className={`${
        background === "gray" ? "bg-gray" : "bg-background"
      } rounded p-1`}
    >
      <AmazonPayIcon />
    </li>
    <li
      className={`${
        background === "gray" ? "bg-gray" : "bg-background"
      } rounded p-1`}
    >
      <GPayIcon />
    </li>
  </ul>
);
