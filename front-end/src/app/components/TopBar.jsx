"use client";
import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/email.svg";
import UserIcon from "../assets/icons/user.svg";
import { WidthWrapper } from "./WidthWrapper";
import { LanguageSelector } from "./LanguageSelector";
import { CurrencySelector } from "./CurrencySelector";
import { createPortal } from "react-dom";
import { LoginModal } from "./LoginModal";
import { useState } from "react";

export const TopBar = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  let modal = null;
  if (typeof window !== "undefined" && isModalShown) {
    modal = createPortal(
      <LoginModal onClose={() => setIsModalShown(false)} />,
      document.body
    );
  }

  return (
    <div className="bg-primary whitespace-nowrap">
      <WidthWrapper className="flex justify-center xl:justify-between items-center py-5">
        <ul className="flex text-secondText">
          <li className="flex gap-1 items-center border-secondText border-r-2 border-solid pr-3">
            <PhoneIcon />
            <p className="py-0"> Contact Us 24 / 7 : +1800 4568 98745</p>
          </li>
          <li className="flex gap-1 items-center pl-3">
            <EmailIcon />
            <p className="py-0"> electric@email.com</p>
          </li>
        </ul>
        <ul className="hidden xl:flex gap-5 ">
          <li className="flex gap-2 items-center">
            <UserIcon />
            <button onClick={() => setIsModalShown(true)}>
              Sign In or Register
            </button>
            {modal}
          </li>
          <li>
            <LanguageSelector />
          </li>
          <li>
            <CurrencySelector />
          </li>
        </ul>
      </WidthWrapper>
    </div>
  );
};
