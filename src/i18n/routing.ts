import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["de", "en", "ru", "pl", "ro", "hr"],
  defaultLocale: "de",
})
