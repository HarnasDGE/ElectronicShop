"use client";
import { useState, useEffect } from "react";
import { SubscribeModal } from "./SubscribeModal";
import { createPortal } from "react-dom";

export const SubscribeModalTrigger = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Sprawdź, czy modal był wyświetlony w ciągu ostatnich 24 godzin
    const lastShownTime = localStorage.getItem("subscribeModalLastShown");
    const currentTime = new Date().getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (!lastShownTime || currentTime - lastShownTime > oneDayInMilliseconds) {
      // Dodaj listener przewijania, jeśli modal nie był wyświetlony w ciągu ostatniego dnia
      const handleScroll = () => {
        if (window.scrollY >= 1000 && !isModalVisible) {
          setIsModalVisible(true);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup listenera przy odmontowaniu komponentu
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isModalVisible]);

  const handleCloseModal = () => {
    // Ustaw aktualny czas w localStorage, aby pamiętać, że modal był wyświetlony
    localStorage.setItem("subscribeModalLastShown", new Date().getTime());
    setIsModalVisible(false);
  };

  const modal =
    isModalVisible &&
    createPortal(<SubscribeModal onClose={handleCloseModal} />, document.body);

  return <>{modal}</>;
};
