"use client";
import { useEffect, useState } from "react";
import { WidthWrapper } from "./WidthWrapper";
import MenuIcon from "../assets/icons/menu.svg";
import DealsIcon from "../assets/icons/deals.svg";
import LightiningIcon from "../assets/icons/lightining.svg";
import OfferIcon from "../assets/icons/offer.svg";
import SpecificOfferIcon from "../assets/icons/specificOffer.svg";
import MenuSecondIcon from "../assets/icons/menuSecond.svg";

import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    src: "/",
  },
  {
    name: "Fashion",
    src: "/",
  },
  {
    name: "Jawellery",
    src: "/",
  },
  {
    name: "Beauty & Health",
    src: "/",
  },
  {
    name: "Toys & Games",
    src: "/",
  },
  {
    name: "Auto Mobiles",
    src: "/",
  },
];

export const ThirdBar = ({ className }) => {
  const [visibleCategories, setVisibleCategories] = useState(categories);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = document.querySelector(
        ".third-bar-container"
      ).offsetWidth;
      const browseButtonWidth =
        document.querySelector(".browse-button").offsetWidth;
      const menuButtonWidth = document.querySelector(
        ".menu-second-button"
      ).offsetWidth;
      const availableWidth =
        containerWidth - browseButtonWidth - menuButtonWidth;

      let totalWidth = 0;
      const newVisibleCategories = [];

      categories.forEach((category, index) => {
        const tempElement = document.createElement("li");
        tempElement.className =
          "category-item px-4 border-r-2 whitespace-nowrap";
        tempElement.style.visibility = "hidden";
        tempElement.style.position = "absolute";
        tempElement.innerText = category.name;
        document.body.appendChild(tempElement);

        const itemWidth = tempElement.offsetWidth;
        document.body.removeChild(tempElement);

        if (totalWidth + itemWidth <= availableWidth) {
          totalWidth += itemWidth;
          newVisibleCategories.push(category);
        }
      });

      setVisibleCategories(newVisibleCategories);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-secondary text-mainText py-3 ${className} third-bar-container`}
    >
      <WidthWrapper className="flex justify-between ">
        <button className="flex gap-3 items-center browse-button">
          <MenuIcon />
          Browse Categories
        </button>
        <ul className="flex overflow-hidden">
          {visibleCategories.map((category, index) => (
            <Link href={category.src} key={category.name}>
              <li
                className={`whitespace-nowrap px-4 border-r-2 category-item ${
                  index === visibleCategories.length - 1
                    ? "border-none"
                    : "border-r-2"
                }`}
              >
                {category.name}
              </li>
            </Link>
          ))}
          <button className="block 2xl:hidden menu-second-button">
            <MenuSecondIcon />
          </button>
        </ul>
        <ul className="flex gap-3 hidden 2xl:flex">
          <Link href="#">
            <li className="flex gap-2">
              <DealsIcon /> <p className="underline py-0">Today Deals</p>
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2">
              <LightiningIcon /> <p className="underline py-0">Flash Sale</p>
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2">
              <OfferIcon /> <p className="underline py-0">Buy One Get One</p>
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2">
              <SpecificOfferIcon />{" "}
              <p className="underline py-0">Specific Offer</p>
            </li>
          </Link>
        </ul>
      </WidthWrapper>
    </div>
  );
};
