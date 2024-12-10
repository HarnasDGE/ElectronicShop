"use client";
import Image from "next/image";
import { FaqItem } from "./FaqItem";
import { GridWrapper } from "./GridWrapper";

export const Faq = () => {
  return (
    <GridWrapper sidebar="right">
      {/* Lewa strona - Pytania i odpowiedzi */}
      <div className=" flex flex-col gap-5">
        <h2>Frequently asked questions</h2>
        <FaqItem
          question="Bring out your business to the whole world?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
        />
        <FaqItem
          question="Come online and experience digital marketing the Success Specialists?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
        />
        <FaqItem
          question="Temporibus autem quibusdam et aut officiis debitis aut rerum?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
        />
        <FaqItem
          question="Come online and experience digital marketing the Success Specialists?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
        />
        <FaqItem
          question="Temporibus autem quibusdam et aut officiis debitis aut rerum?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
        />
      </div>

      {/* Prawa strona - Obrazek jako tło */}
      <Image
        src="/images/faq-image.jpg"
        height={220}
        width={220}
        className="w-full rounded-xl shadow-md hidden xl:block"
        alt="Faq image"
      />
    </GridWrapper>
  );
};
