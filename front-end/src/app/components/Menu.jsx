"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "../assets/icons/menu.svg";
import { Button } from "./Button";

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

  return (
    <div className={`w-full ${className} relative`}>
      {/* Toggle Button for Small Screens */}
      <Button
        onClick={toggleMenu}
        color="none"
        border={false}
        className="xl:hidden text-secondText bg-lightGray h-full"
      >
        <MenuIcon />
      </Button>

      {/* Dropdown Menu for Small Screens - Positioned Under Button */}
      {isOpen && (
        <ul className="flex flex-col items-start bg-white shadow-md mt-2 py-4 rounded absolute top-full left-0 w-fit h-auto z-50">
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
      <ul className={`hidden xl:flex items-center gap-16 w-full `}>
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
