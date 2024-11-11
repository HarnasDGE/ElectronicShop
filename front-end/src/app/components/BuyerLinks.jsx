import AppStoreIcon from "../assets/icons/appStore.svg";
import GooglePlayIcon from "../assets/icons/googlePlay.svg";

export const BuyerLinks = () => (
  <div>
    <h5>For Buyers</h5>
    <ul className="flex flex-col gap-3 pt-6">
      <li>FAQ</li>
      <li>My account</li>
      <li>Contact</li>
    </ul>
    <h6 className="text-xl mt-5">Download App</h6>
    <ul className="flex flex-col gap-3 pt-3">
      <li>
        <AppStoreIcon />
      </li>
      <li>
        <GooglePlayIcon />
      </li>
    </ul>
  </div>
);
