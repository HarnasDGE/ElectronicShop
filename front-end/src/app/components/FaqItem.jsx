"use client";

import { useState } from "react";

export const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full px-7 py-4 rounded cursor-pointer transition-all ${
        isOpen
          ? "bg-activeFaq text-mainText"
          : "bg-backgroundFaq text-secondText "
      }`}
      onClick={toggleQuestion}
    >
      <div className="flex items-center justify-between transition-all">
        <h3 className="">{question}</h3>
        <p className={`text-2xl `}>+</p>
      </div>

      {isOpen && <p className="transition-all">{answer}</p>}
    </div>
  );
};
