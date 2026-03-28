"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const SideMenu = () => {
  const t = useTranslations("sideMenu");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#start", label: t("start") },
    { href: "#about-us", label: t("aboutUs") },
    { href: "#listings", label: t("listings") },
    { href: "#contact", label: t("contact") },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)} aria-label={t("openMenu")} className="p-2">
        <Image src="/images/menu-icon.svg" alt="" width={33} height={22} />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <nav
        className={`fixed right-0 top-0 z-50 flex h-full w-[260px] flex-col bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label={t("closeMenu")} className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
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
      </nav>
    </>
  );
}
