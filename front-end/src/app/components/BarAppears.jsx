"use client";
import { useEffect, useState } from "react";
import { MainBar } from "./MainBar";
import { createPortal } from "react-dom";

export const BarAppears = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 300) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let modal = null;
  if (typeof window !== "undefined" && showBar) {
    modal = createPortal(
      <MainBar
        className="
          fixed top-0 left-0 w-full shadow-lg z-10
          transform transition-transform duration-300 translate-y-0
        "
      />,
      document.body
    );
  }

  return <>{modal}</>;
};
