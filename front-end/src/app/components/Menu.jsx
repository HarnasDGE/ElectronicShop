"use client";
import React, { useState } from "react";
import Link from "next/link";
import ArrowDownIcon from "../assets/icons/arrowDown.svg";

export const Menu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      src: "/catalog",
    },
    {
      name: "Track Order",
      src: "/track-order",
    },
    {
      name: "Contact",
      src: "/contact",
    },
  ];

  return (
    <div className={`w-full ${className} relative`}>
      {/* Toggle Button for Small Screens */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-3 xl:hidden bg-searchBackground h-full text-secondText px-4 py-[18px] border-r-2 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        All <ArrowDownIcon className="scale-175" />
      </button>

      {/* Dropdown Menu for Small Screens - Positioned Under Button */}
      {isOpen && (
        <ul className="xl:hidden flex flex-col items-start bg-white shadow-md mt-2 py-4 rounded absolute top-full left-0 w-fit h-auto z-50">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="py-2 px-4 w-full text-left hover:bg-gray-100 transition-all"
            >
              <Link href={item.src}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}

      {/* Regular Menu for Large Screens */}
      <ul className={`hidden xl:flex items-center gap-16 w-full ${className}`}>
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
    </div>
  );
};
