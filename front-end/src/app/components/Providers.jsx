"use client";

import { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { LanguageContext } from "../context/LanguageContext";
import { CurrencyContext } from "../context/CurrencyContext";

export const Providers = ({ children }) => {
  // Context dla koszyka
  const [cart, setCart] = useState(() => {
    // Pobierz początkową wartość koszyka z localStorage
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Użyj efektu, aby aktualizować localStorage za każdym razem, gdy cart się zmienia
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Context dla walut
  const [currency, setCurrency] = useState(() => {
    // Pobierz początkową wartość walut z localStorage
    if (typeof window !== "undefined") {
      const savedCurrency = localStorage.getItem("currency");
      return savedCurrency ? JSON.parse(savedCurrency) : "USD";
    }
    return [];
  });

  // Użyj efektu, aby aktualizować localStorage za każdym razem, gdy currency się zmienia
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currency", JSON.stringify(currency));
    }
  }, [currency]);

  // Context dla języka
  const [language, setLanguage] = useState(() => {
    // Pobierz początkową wartość języka z localStorage
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language");
      return savedLanguage ? savedLanguage : "EN";
    }
    return "en";
  });

  // Użyj efektu, aby aktualizować localStorage za każdym razem, gdy language się zmienia
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        <LanguageContext.Provider value={[language, setLanguage]}>
          {children}
        </LanguageContext.Provider>
      </CurrencyContext.Provider>
    </CartContext.Provider>
  );
};
