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
  const startY = useRef(0);
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

  // Funkcje obsługi strzałek
  const totalPages = Math.ceil(slideCount / itemsToShow);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Funkcja obliczająca widoczne strony
  const getVisiblePages = () => {
    let startPage = Math.max(0, currentIndex - 2);
    let endPage = Math.min(totalPages - 1, currentIndex + 2);

    // Dostosowanie zakresu, aby zawsze mieć 5 stron, jeśli to możliwe
    if (currentIndex <= 1) {
      startPage = 0;
      endPage = Math.min(4, totalPages - 1);
    } else if (currentIndex >= totalPages - 2) {
      startPage = Math.max(totalPages - 5, 0);
      endPage = totalPages - 1;
    } else {
      startPage = currentIndex - 2;
      endPage = currentIndex + 2;
    }

    const visiblePages = [];
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  };

  // Obsługa przeciągania na urządzeniach dotykowych
  useEffect(() => {
    const container = carouselContainerRef.current;

    const handleStart = (e) => {
      isDragging.current = true;
      startX.current = e.touches ? e.touches[0].clientX : e.clientX;
      startY.current = e.touches ? e.touches[0].clientY : e.clientY;
    };

    const handleMove = (e) => {
      if (!isDragging.current) return;
      const currentX = e.touches ? e.touches[0].clientX : e.clientX;
      const currentY = e.touches ? e.touches[0].clientY : e.clientY;
      const deltaX = currentX - startX.current;
      const deltaY = currentY - startY.current;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Przesuwanie poziome
        e.preventDefault();
        setTranslateX(deltaX);
      } else {
        // Przesuwanie pionowe
        isDragging.current = false;
      }
    };

    const handleEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const threshold = getContainerWidth() / 4;
      if (translateX < -threshold && currentIndex < totalPages - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (translateX > threshold && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
      setTranslateX(0);
    };

    if (container) {
      container.addEventListener("touchstart", handleStart, { passive: false });
      container.addEventListener("touchmove", handleMove, { passive: false });
      container.addEventListener("touchend", handleEnd);

      return () => {
        container.removeEventListener("touchstart", handleStart);
        container.removeEventListener("touchmove", handleMove);
        container.removeEventListener("touchend", handleEnd);
      };
    }
  }, [
    currentIndex,
    itemsToShow,
    slideCount,
    translateX,
    getContainerWidth,
    gap,
    slideWidth,
    totalPages,
  ]);

  return (
    <div className="relative">
      {/* Kontener karuzeli */}
      <div
        ref={carouselContainerRef}
        className="overflow-hidden w-full max-w-full mx-auto"
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
      </div>

      {/* Lewa strzałka */}
      {currentIndex > 0 && totalPages > 1 && (
        <button
          onClick={handlePrev}
          className="hidden md:flex items-center justify-center absolute left-[-10px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-xl "
        >
          {/* Ikona lewej strzałki */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Prawa strzałka */}
      {currentIndex < totalPages - 1 && totalPages > 1 && (
        <button
          onClick={handleNext}
          className="hidden md:flex items-center justify-center absolute right-[-10px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-xl"
        >
          {/* Ikona prawej strzałki */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Paginacja */}
      {totalPages > 1 && pagination === "default" && (
        <div className="flex justify-center mt-4 items-center">
          {getVisiblePages().map((index) => {
            const distance = Math.abs(currentIndex - index);
            let sizeClass = "";

            if (distance === 0) {
              sizeClass = "w-5 h-5";
            } else if (distance === 1) {
              sizeClass = "w-4 h-4";
            } else {
              sizeClass = "w-3 h-3";
            }

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`bg-secondary rounded-full mx-1 transition-all duration-300 cursor-pointer ${sizeClass}`}
              ></div>
            );
          })}
        </div>
      )}

      {totalPages > 1 && pagination === "numbers" && (
        <div className="flex justify-start gap-2 mt-4 items-center">
          {/* Numer strony 1 i "..." na początku */}
          {currentIndex > 2 && totalPages > 5 && (
            <>
              <div
                onClick={() => setCurrentIndex(0)}
                className={`p-2 text-base transition-all cursor-pointer hover:bg-gray ${
                  currentIndex === 0
                    ? "bg-activePagination text-mainText"
                    : "bg-backgroundPagination"
                }`}
              >
                1
              </div>
              <span className="mx-1">...</span>
            </>
          )}

          {/* Widoczne numery stron */}
          {getVisiblePages().map((index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`p-2 text-base transition-all cursor-pointer hover:bg-gray ${
                index === currentIndex
                  ? "bg-activePagination text-mainText"
                  : "bg-backgroundPagination"
              }`}
            >
              {index + 1}
            </div>
          ))}

          {/* "..." i ostatnia strona na końcu */}
          {currentIndex < totalPages - 3 && totalPages > 5 && (
            <>
              <span className="mx-1">...</span>
              <div
                onClick={() => setCurrentIndex(totalPages - 1)}
                className={`p-2 text-base transition-all cursor-pointer hover:bg-gray ${
                  currentIndex === totalPages - 1
                    ? "bg-activePagination text-mainText"
                    : "bg-backgroundPagination"
                }`}
              >
                {totalPages}
              </div>
            </>
          )}
        </div>
      )}

      {totalPages > 1 && pagination === "geometry" && (
        <div className="flex justify-center mt-4 items-center">
          {getVisiblePages().map((index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 transition-all duration-300 cursor-pointer w-5 h-5`}
              >
                {index === currentIndex ? <TriangleIcon /> : <CircleIcon />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
