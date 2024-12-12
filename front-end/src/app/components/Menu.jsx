"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "../assets/icons/menu.svg";
import { Button } from "./Button";
import { createPortal } from "react-dom";

export const Menu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowPopup(!showPopup);
  };

  const menuItems = [
    {
      name: "Home",
      src: "/",
    },
    {
      name: "About Us",
      src: "/about-us",
    },
    {
      name: "Catalog",
      src: "/products",
    },
    {
      name: "Track Order",
      src: "/order-track",
    },
    {
      name: "Contact",
      src: "/contact-us",
    },
  ];

  // komentarz - popup
  let popup = null;
  if (typeof window !== "undefined" && showPopup) {
    popup = createPortal(
      <div
        className="fixed inset-0 bg-background/90 flex flex-col items-center justify-center z-[9999] backdrop-blur-sm	"
        onClick={toggleMenu} // komentarz - kliknięcie poza popupem zamknie
      >
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="mt-2 py-2 px-4 w-full  text-2xl text-left hover:bg-black/10 transition-all "
            >
              <Link href={item.src} className="flex gap-3 items-center">
                <div className="w-2 h-2 bg-black shadow rotate-45"></div>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          color="none"
          onClick={toggleMenu}
          className="absolute top-10 right-10"
        >
          X
        </Button>
      </div>,
      document.body
    );
  }

  return (
    <div className={`w-full relative ${className}`}>
      {/* Toggle Button for Small Screens */}
      <Button
        onClick={toggleMenu}
        color="none"
        border={false}
        className="xl:hidden text-secondText bg-lightGray h-full"
      >
        <MenuIcon />
      </Button>

      {/* Regular Menu for Large Screens */}
      <ul className="hidden xl:flex items-center gap-16 w-full">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="whitespace-nowrap transition-all group-hover:text-secondary"
          >
            <Link href={item.src} className="group">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {popup}
    </div>
  );
};
