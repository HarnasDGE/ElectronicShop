"use client";
import React, { useRef, useState, useEffect } from "react";
import TriangleIcon from "../assets/icons/triangle.svg";
import CircleIcon from "../assets/icons/circle.svg";

export const Carousel = ({
  children,
  pagination = "default",
  itemsCount = 4,
  prefixId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const [itemsToShow, setItemsToShow] = useState(1); // Domyślnie 1 element

  const slideCount = React.Children.count(children);
  const gap = 16; // Odstęp między slajdami w pikselach

  const carouselContainerRef = useRef(null);

  // Funkcja pomocnicza do uzyskania szerokości kontenera karuzeli
  const getContainerWidth = () =>
    carouselContainerRef.current
      ? carouselContainerRef.current.offsetWidth
      : window.innerWidth;

  // Aktualizacja itemsToShow w zależności od szerokości ekranu
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        // Punkt przerwania '2xl' w Tailwind CSS
        setItemsToShow(itemsCount);
      } else if (width >= 1280) {
        // Punkt przerwania 'xl' w Tailwind CSS
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - startX.current;
    setTranslateX(deltaX);
  };

  const handleEnd = () => {
    isDragging.current = false;
    const threshold = getContainerWidth() / 4;
    if (
      translateX < -threshold &&
      currentIndex < Math.ceil(slideCount / itemsToShow) - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    } else if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setTranslateX(0);
  };

  // Obliczenia dla szerokości slajdów i przesunięcia
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    // Ustawiamy szerokość slajdu jako szerokość kontenera karuzeli podzieloną przez liczbę elementów do wyświetlenia
    const updateSlideWidth = () => {
      const containerWidth = getContainerWidth();
      setSlideWidth((containerWidth - gap * (itemsToShow - 1)) / itemsToShow);
    };
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, [itemsToShow, gap]);

  const carouselStyle = {
    transform: `translateX(${
      -currentIndex * (slideWidth + gap) + translateX
    }px)`,
    transition: isDragging.current ? "none" : "transform 0.3s ease-out",
  };

  return (
    <div
      ref={carouselContainerRef}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      className="overflow-hidden w-full max-w-full mx-auto "
    >
      <div
        className="flex items-center"
        style={{
          ...carouselStyle,
          gap: `${gap}px`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className="flex-shrink-0"
            style={{ width: `${slideWidth}px` }}
            key={prefixId + index}
          >
            {child}
          </div>
        ))}
      </div>
      {/* Paginacja */}
      {pagination === "default" && (
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(slideCount / itemsToShow) },
            (_, index) => (
              <div
                key={index}
                className={`h-2 bg-secondary rounded-full mx-1 transition-all duration-300 ${
                  index === currentIndex ? "w-5" : "w-2"
                }`}
              ></div>
            )
          )}
        </div>
      )}

      {pagination === "numbers" && (
        <div className="flex justify-start gap-4 mt-10 ">
          {Array.from(
            { length: Math.ceil(slideCount / itemsToShow) },
            (_, index) => (
              <div
                key={index}
                className={` p-4 text-xl transition-all cursor-pointer  hover:bg-gray ${
                  index === currentIndex
                    ? "bg-activePagination text-mainText"
                    : "bg-backgroundPagination"
                }`}
              >
                {index}
              </div>
            )
          )}
        </div>
      )}

      {pagination === "geometry" && (
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(slideCount / itemsToShow) },
            (_, index) => (
              <div key={index} className="mx-1 transition-all duration-300">
                {index === currentIndex ? <TriangleIcon /> : <CircleIcon />}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};
