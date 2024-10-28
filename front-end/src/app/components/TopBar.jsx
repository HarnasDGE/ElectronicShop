import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/email.svg";
import UserIcon from "../assets/icons/user.svg";

export const TopBar = () => {
  return (
    <div>
      <ul className="bg-primary flex justify-between items-center py-5">
        <li className="flex gap-1 items-center border-solid border">
          <PhoneIcon />
          <p className=""> Contact Us 24 / 7 : +1800 4568 98745</p>
        </li>
        <li>
          <EmailIcon />
          <p> electric@email.com</p>
        </li>
      </ul>
      <ul>
        <li>
          <UserIcon />
          <p>Sign In or Register</p>
        </li>
        <li>
          <select value="English">
            <option>English</option>
            <option>Polish</option>
          </select>
        </li>
        <li>
          <select value="USD">
            <option>USD</option>
            <option>PLN</option>
          </select>
        </li>
      </ul>
    </div>
  );
};
