"use client";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const LanguageSelector = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  // Dodanie obsługi zdarzenia onChange, aby zmieniać język
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange} // Obsługa zmiany języka
      className="bg-transparent"
    >
      <option value="EN">English</option>
      <option value="PL">Polish</option>
    </select>
  );
};
