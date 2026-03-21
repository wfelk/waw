"use client";

import { useState, useCallback } from "react";

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

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? SLIDE_COUNT - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === SLIDE_COUNT - 1 ? 0 : c + 1));
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Slider */}
      <div className="relative w-[300px] h-[220px]">
        {/* Slides */}
        <div className="w-full h-full overflow-hidden rounded-[20px]">
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {PLACEHOLDER_COLORS.map((color, i) => (
              <div
                key={i}
                className="w-full h-full flex-shrink-0 flex items-center justify-center text-white/40 text-sm"
                style={{ backgroundColor: color }}
              >
                Bild {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Vorheriges Bild"
          className="absolute left-[-16px] top-1/2 -translate-y-1/2 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/80 text-gray-700 shadow transition-colors hover:bg-white"
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8.5 1L1.5 8L8.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Nächstes Bild"
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
            aria-label={`Bild ${i + 1}`}
            className={`h-[8px] w-[8px] rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
