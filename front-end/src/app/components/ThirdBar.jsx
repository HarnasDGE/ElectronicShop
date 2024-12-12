"use client";
import { useEffect, useState } from "react";
import { WidthWrapper } from "./WidthWrapper";
import DealsIcon from "../assets/icons/deals.svg";
import LightiningIcon from "../assets/icons/lightining.svg";
import OfferIcon from "../assets/icons/offer.svg";
import SpecificOfferIcon from "../assets/icons/specificOffer.svg";
import MenuSecondIcon from "../assets/icons/menuSecond.svg";
import Link from "next/link";
import { getProductsCategories } from "../api/getProductsCategories";

const events = [
  { name: "Today Deals", icon: <DealsIcon /> },
  { name: "Flash Sale", icon: <LightiningIcon /> },
  { name: "Buy One Get One", icon: <OfferIcon /> },
  { name: "Specific Offer", icon: <SpecificOfferIcon /> },
];

export const ThirdBar = ({ className }) => {
  const categories = getProductsCategories();
  const [visibleCategories, setVisibleCategories] = useState(categories);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCategories(categories);
      } else {
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

        categories.forEach((category) => {
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
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-secondary text-mainText  whitespace-nowrap  third-bar-container ${className}`}
    >
      <WidthWrapper className="flex justify-between">
        <button className="flex gap-3 px-3 bg-white/40 items-center browse-button">
          Browse Categories
        </button>
        {/* Dodanie klas tailwind do RWD i overflow-x-auto na mniejszych ekranach */}
        <ul className="flex md:overflow-hidden overflow-x-auto hide-scrollbar py-3">
          {visibleCategories.map((category, index) => (
            <Link href={`/products?type=${category}`} key={category + index}>
              <li
                className={`whitespace-nowrap px-4 border-r-2 category-item ${
                  index === visibleCategories.length - 1
                    ? "border-none"
                    : "border-r-2"
                }`}
              >
                {category}
              </li>
            </Link>
          ))}
          <button className="block 2xl:hidden menu-second-button hidden md:block pr-3">
            <MenuSecondIcon />
          </button>
        </ul>
        <ul className="flex gap-3 items-center hidden 2xl:flex">
          {events.map((event) => {
            return (
              <Link
                href={`/products?event=${event.name.toString()}`}
                key={event.name}
              >
                <li className="flex items-center gap-2">
                  {event.icon} <p className="underline py-0">{event.name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </WidthWrapper>
    </div>
  );
};
