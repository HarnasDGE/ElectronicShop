"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Obsługa przełączania zdjęć za pomocą strzałek (dla desktopów)
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - 1
      );
    } else if (event.key === "ArrowRight") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  // Ustawienie obsługi klawiatury na całej stronie tylko na desktopach
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-3">
      <div className="relative aspect-square col-span-5 row-span-4">
        <Image
          src={images[selectedImageIndex]}
          height={300}
          width={400}
          layout="responsive"
          className="aspect-square transition-all"
          alt="Product image"
        />
        {window.innerWidth >= 1024 && (
          <>
            <div
              className="absolute top-1/2 left-0 transform -translate-y-1/2  text-secondText p-2 cursor-pointer"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex > 0 ? prevIndex - 1 : images.length - 1
                )
              }
            >
              &#9664;
            </div>
            <div
              className="absolute top-1/2 right-0 transform -translate-y-1/2  text-secondText p-2 cursor-pointer"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex < images.length - 1 ? prevIndex + 1 : 0
                )
              }
            >
              &#9654;
            </div>
          </>
        )}
      </div>
      {images.map((image, index) => (
        <div
          key={image}
          onClick={() => setSelectedImageIndex(index)}
          className="cursor-pointer"
        >
          <Image
            src={image}
            width={200}
            height={200}
            layout="responsive"
            alt="Product Image"
            className={`row-span-1 col-span-1 shadow-normal border-secondText rounded-xl transition-all ${
              selectedImageIndex === index ? "border-4 p-1" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};
