"use client"

import { useState, useEffect, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"
import { useTranslations } from "next-intl"
import { Menu, X } from "lucide-react"
import { SwitcherLanguage } from "@/components/SwitcherLanguage"

export const MenuSide = () => {
  const t = useTranslations("sideMenu")
  const [isOpen, setIsOpen] = useState(false)
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  const menuItems = [
    { href: "#about-us", label: t("aboutUs") },
    { href: "#service", label: t("services") },
    { href: "#listings", label: t("listings") },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "scroll"
      document.body.style.position = "fixed"
      document.body.style.inset = "0"
    } else {
      document.body.style.overflowY = ""
      document.body.style.position = ""
      document.body.style.inset = ""
    }
    return () => {
      document.body.style.overflowY = ""
      document.body.style.position = ""
      document.body.style.inset = ""
    }
  }, [isOpen])

  return (
    <>
      <div className="flex items-center gap-10">
        {/* Desktop inline navigation */}
        <nav className="hidden tablet:flex tablet:items-center tablet:gap-8">
          {menuItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[16px] font-semibold text-gray-800 transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Language switcher — tablet and wider */}
        <div className="hidden tablet:block">
          <SwitcherLanguage variant="desktop" />
        </div>

        {/* Mobile-only hamburger button */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label={t("openMenu")}
          className="p-2 text-gray-800 tablet:hidden"
        >
          <Menu size={28} strokeWidth={2} />
        </button>
      </div>

      {isMounted &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 desktop:hidden ${
                isOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <nav
              className={`fixed right-0 top-0 z-50 flex h-full w-[260px] flex-col bg-white shadow-xl transition-transform duration-300 desktop:hidden ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex items-center justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label={t("closeMenu")}
                  className="p-2"
                >
                  <X size={24} strokeWidth={2} color="#333" />
                </button>
              </div>

              <ul className="flex flex-col gap-2 px-6">
                {menuItems.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-[18px] font-semibold text-gray-800 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Language switcher — mobile only */}
              <div className="mt-auto bg-gray-200 tablet:hidden">
                <SwitcherLanguage
                  variant="mobile"
                  onSelect={() => setIsOpen(false)}
                />
              </div>
            </nav>
          </>,
          document.body,
        )}
    </>
  )
}
