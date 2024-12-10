import { WidthWrapper } from "./WidthWrapper";
import DeliveryIcon from "../assets/icons/delivery.svg";
import SavingIcon from "../assets/icons/saving.svg";
import SupportIcon from "../assets/icons/support.svg";
import MoneyBackIcon from "../assets/icons/moneyBack.svg";
export const Adventages = () => {
  return (
    <WidthWrapper className="flex flex-col xl:flex-row gap-5 justify-center items-center py-20 ">
      <div className="px-10 border-none xl:border-r-2 flex gap-5 items-center ">
        <DeliveryIcon className="w-fit" />
        <div>
          <h3>Free Delivery</h3>
          <p className="opacity-60">Free Shipping On All Order</p>
        </div>
      </div>
      <div className="px-10 border-none xl:border-r-2 flex gap-5 items-center">
        <SavingIcon className="w-fit" />
        <div>
          <h3>Big Saving Shop</h3>
          <p className="opacity-60">Save vig every order Guarantee</p>
        </div>
      </div>
      <div className="px-10 border-none xl:border-r-2 flex gap-5 items-center">
        <SupportIcon className="w-fit" />
        <div>
          <h3>Online Support 24/7</h3>
          <p className="opacity-60">Support online 24hrs a day</p>
        </div>
      </div>
      <div className="px-10 flex gap-5 items-center ">
        <MoneyBackIcon className="w-fit" />
        <div>
          <h3>Money Back Return</h3>
          <p className="opacity-60">Back guarantee Under 7 days</p>
        </div>
      </div>
    </WidthWrapper>
  );
};
