"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { useTranslations } from "next-intl"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SLIDE_COUNT = 8

const PLACEHOLDER_COLORS = [
  "#6b7280",
  "#4b5563",
  "#374151",
  "#1f2937",
  "#7c6f64",
  "#5c5470",
  "#4a5568",
  "#2d3748",
]

export const ImageSlider = () => {
  const t = useTranslations("imageSlider")
  const [current, setCurrent] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null)
  const startX = useRef(0)
  const hasDragged = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [slideWidth, setSlideWidth] = useState(300)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : c))
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c < SLIDE_COUNT - 1 ? c + 1 : c))
  }, [])

  const getClientX = (e: React.TouchEvent | React.MouseEvent) => {
    if ("touches" in e) return e.touches[0].clientX
    return e.clientX
  }

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true)
    hasDragged.current = false
    startX.current = getClientX(e)
    setDragOffset(0)
  }

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX
    const offset = currentX - startX.current
    if (Math.abs(offset) > 5) hasDragged.current = true
    setDragOffset(offset)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    const threshold = 50
    if (dragOffset < -threshold) {
      next()
    } else if (dragOffset > threshold) {
      prev()
    }
    setDragOffset(0)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (hasDragged.current || !hoverSide) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const clickX = e.clientX - rect.left
    if (clickX < rect.width / 2) {
      if (hasPrev) prev()
    } else {
      if (hasNext) next()
    }
  }

  const translateX = -(current * slideWidth) + dragOffset

  const hasPrev = current > 0
  const hasNext = current < SLIDE_COUNT - 1

  const canNavigate =
    hoverSide === "left" ? hasPrev : hoverSide === "right" ? hasNext : false

  return (
    <div className="flex w-full flex-col items-center gap-4 desktop:max-w-[900px]">
      {/* Slider */}
      <div
        className="relative w-full aspect-[340/250] tablet:w-[700px] tablet:aspect-[700/476] desktop:w-[900px] desktop:aspect-[900/600]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          setHoverSide(x < rect.width / 2 ? "left" : "right")
        }}
        onMouseLeave={() => setHoverSide(null)}
      >
        {/* Slides */}
        <div
          ref={containerRef}
          className={`w-full h-full overflow-hidden rounded-component touch-pan-y ${canNavigate ? "desktop:cursor-pointer" : ""}`}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => {
            if (isDragging) handleDragEnd()
          }}
          onClick={handleClick}
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

        {/* Prev chevron — desktop only */}
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-full items-center pl-4 transition-all duration-300 desktop:flex"
          style={{
            opacity:
              !hoverSide || !hasPrev ? 0 : hoverSide === "left" ? 1 : 0.3,
          }}
        >
          <ChevronLeft
            size={64}
            strokeWidth={1.5}
            className={`transition-colors duration-300 ${hoverSide === "left" ? "text-primary" : "text-white"}`}
          />
        </div>

        {/* Next chevron — desktop only */}
        <div
          className="pointer-events-none absolute right-0 top-0 hidden h-full items-center pr-4 transition-all duration-300 desktop:flex"
          style={{
            opacity:
              !hoverSide || !hasNext ? 0 : hoverSide === "right" ? 1 : 0.3,
          }}
        >
          <ChevronRight
            size={64}
            strokeWidth={1.5}
            className={`transition-colors duration-300 ${hoverSide === "right" ? "text-primary" : "text-white"}`}
          />
        </div>
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
  )
}
