import GpsIcon from "../assets/icons/gps.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/email.svg";

export const Address = () => (
  <div>
    <h5>Our Address</h5>
    <ul className="flex flex-col gap-3 pt-6">
      <li className="flex gap-2 items-center ">
        <GpsIcon />
        <p className="py-0">9826 Painter Ave, Whittier, CA, United States.</p>
      </li>
      <li className="flex gap-2 items-center">
        <PhoneIcon />
        <p className="py-0">+1800 396 756</p>
      </li>
      <li className="flex gap-2 items-center">
        <EmailIcon />
        <p className="py-0">support@aahca.com</p>
      </li>
    </ul>
  </div>
);
