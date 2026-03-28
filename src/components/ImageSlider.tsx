"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

const SLIDE_COUNT = 8;

const PLACEHOLDER_COLORS = [
  "#6b7280",
  "#4b5563",
  "#374151",
  "#1f2937",
  "#7c6f64",
  "#5c5470",
  "#4a5568",
  "#2d3748",
];

export const ImageSlider = () => {
  const t = useTranslations("imageSlider");
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(300);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : c));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c < SLIDE_COUNT - 1 ? c + 1 : c));
  }, []);

  const getClientX = (e: React.TouchEvent | React.MouseEvent) => {
    if ("touches" in e) return e.touches[0].clientX;
    return e.clientX;
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    startX.current = getClientX(e);
    setDragOffset(0);
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(currentX - startX.current);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;
    if (dragOffset < -threshold) {
      next();
    } else if (dragOffset > threshold) {
      prev();
    }
    setDragOffset(0);
  };

  const translateX = -(current * slideWidth) + dragOffset;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Slider */}
      <div className="relative w-[300px] h-[220px] tablet:w-[500px] tablet:h-[340px] desktop:w-[600px] desktop:h-[400px]">
        {/* Slides */}
        <div
          ref={containerRef}
          className="w-full h-full overflow-hidden rounded-component touch-pan-y"
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => {
            if (isDragging) handleDragEnd();
          }}
        >
          <div
            className={`flex h-full ${isDragging ? "" : "transition-transform duration-300 ease-in-out"}`}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {PLACEHOLDER_COLORS.map((color, i) => (
              <div
                key={i}
                className="w-full h-full flex-shrink-0 flex items-center justify-center text-white/40 text-sm select-none"
                style={{ backgroundColor: color }}
              >
                {t("image", { number: i + 1 })}
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label={t("previousImage")}
          className="absolute left-[-16px] top-1/2 -translate-y-1/2 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/80 text-gray-700 shadow transition-colors hover:bg-white"
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8.5 1L1.5 8L8.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label={t("nextImage")}
          className="absolute right-[-16px] top-1/2 -translate-y-1/2 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/80 text-gray-700 shadow transition-colors hover:bg-white"
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M1.5 1L8.5 8L1.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={t("image", { number: i + 1 })}
            className={`h-[8px] w-[8px] rounded-full transition-colors ${
              i === current ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
