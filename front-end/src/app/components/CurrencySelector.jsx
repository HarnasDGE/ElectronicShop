"use client";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export const CurrencySelector = () => {
  const [currency, setCurrency] = useContext(CurrencyContext);

  // Obsługa zmiany waluty
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <select
      value={currency}
      onChange={handleCurrencyChange} // Obsługa zmiany waluty
      className="bg-transparent"
    >
      <option value="USD">USD</option>
      <option value="PLN">PLN</option>
    </select>
  );
};
