"use client"

import { useState, useRef, useEffect } from "react"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"

const FlagDE = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%">
    <rect width="32" height="11" fill="#000" />
    <rect y="11" width="32" height="10" fill="#DD0000" />
    <rect y="21" width="32" height="11" fill="#FFCC00" />
  </svg>
)

const FlagRU = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%">
    <rect width="32" height="11" fill="#fff" />
    <rect y="11" width="32" height="10" fill="#0039A6" />
    <rect y="21" width="32" height="11" fill="#D52B1E" />
  </svg>
)

const FlagGB = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%">
    <rect width="32" height="32" fill="#012169" />
    <path d="M0,0 L32,32 M32,0 L0,32" stroke="#fff" strokeWidth="5" />
    <path d="M0,0 L32,32 M32,0 L0,32" stroke="#C8102E" strokeWidth="2.5" />
    <path d="M16,0 V32 M0,16 H32" stroke="#fff" strokeWidth="7" />
    <path d="M16,0 V32 M0,16 H32" stroke="#C8102E" strokeWidth="4" />
  </svg>
)

const FlagPL = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%">
    <rect width="32" height="16" fill="#fff" />
    <rect y="16" width="32" height="16" fill="#DC143C" />
  </svg>
)

const FlagRO = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%">
    <rect width="11" height="32" fill="#002B7F" />
    <rect x="11" width="10" height="32" fill="#FCD116" />
    <rect x="21" width="11" height="32" fill="#CE1126" />
  </svg>
)

const FlagHR = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%">
    <rect width="32" height="11" fill="#FF0000" />
    <rect y="11" width="32" height="10" fill="#fff" />
    <rect y="21" width="32" height="11" fill="#171796" />
  </svg>
)

const languages = [
  { code: "de", label: "Deutsch", flag: <FlagDE /> },
  { code: "ru", label: "Русский", flag: <FlagRU /> },
  { code: "en", label: "English", flag: <FlagGB /> },
  { code: "pl", label: "Polski", flag: <FlagPL /> },
  { code: "ro", label: "Română", flag: <FlagRO /> },
  { code: "hr", label: "Hrvatski", flag: <FlagHR /> },
]

interface Props {
  variant: "mobile" | "desktop"
  onSelect?: () => void
}

export const LanguageSwitcher = ({ variant, onSelect }: Props) => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const handleSelect = (code: string) => {
    router.replace(pathname, { locale: code })
    setIsOpen(false)
    onSelect?.()
  }

  const currentLanguage =
    languages.find((l) => l.code === locale) ?? languages[0]

  if (variant === "mobile") {
    return (
      <div className="p-6">
        <div className="flex flex-col gap-2">
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => handleSelect(code)}
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2.5 text-[16px] font-semibold transition-colors ${
                code === locale
                  ? "bg-primary/15 text-primary"
                  : "text-gray-800 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-gray-400">
                {flag}
              </span>
              {label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-gray-400/70 transition-colors hover:border-primary"
        aria-label={currentLanguage.label}
      >
        {currentLanguage.flag}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-3 overflow-hidden rounded-xl bg-gray-200 shadow-lg">
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => handleSelect(code)}
              className={`flex w-full cursor-pointer items-center gap-4 whitespace-nowrap px-5 py-3 text-left text-base font-semibold transition-colors ${
                code === locale
                  ? "bg-primary/15 text-primary"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 ${
                  code === locale ? "border-primary" : "border-gray-400"
                }`}
              >
                {flag}
              </span>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
