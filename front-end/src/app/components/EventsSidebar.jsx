"use client";

import { useRouter, useSearchParams } from "next/navigation";
import DealsIcon from "../assets/icons/deals.svg";
import LightiningIcon from "../assets/icons/lightining.svg";
import OfferIcon from "../assets/icons/offer.svg";
import SpecificOfferIcon from "../assets/icons/specificOffer.svg";
import ArrowIcon from "../assets/icons/arrowDown.svg";
import { Suspense } from "react";

const events = [
  { name: "Today Deals", icon: <DealsIcon /> },
  { name: "Flash Sale", icon: <LightiningIcon /> },
  { name: "Buy One Get One", icon: <OfferIcon /> },
  { name: "Specific Offer", icon: <SpecificOfferIcon /> },
];

export const EventsSidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeEvent = searchParams.get("event");

  const handleClick = (eventName) => {
    const newParams = new URLSearchParams(searchParams);
    if (eventName === "All") {
      newParams.delete("event");
    } else {
      newParams.set("event", eventName);
    }
    router.push(`/products?${newParams.toString()}`);
  };

  return (
    <Suspense fallback={<div>Events loading...</div>}>
      <div>
        <h2 className="font-bold">Events</h2>
        <ul>
          <li
            className={`flex justify-between border-b-2 items-center hover:bg-gray ${
              !activeEvent ? "font-bold" : ""
            }`}
          >
            <button
              onClick={() => handleClick("All")}
              className="text-left w-full py-3"
            >
              All
            </button>
          </li>
          {events.map((event) => {
            const isActive = activeEvent === event.name;
            return (
              <li
                key={event.name}
                className={`flex justify-between border-b-2 items-center transition-all hover:bg-gray ${
                  isActive ? "font-bold" : ""
                }`}
              >
                <button
                  onClick={() => handleClick(event.name)}
                  className="w-full flex justify-between items-center py-3"
                >
                  <div className="flex items-center">
                    <span className="w-10">{event.icon}</span>
                    {event.name}
                  </div>
                  <ArrowIcon className="-rotate-90" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Suspense>
  );
};
