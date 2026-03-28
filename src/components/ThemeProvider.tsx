"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react"

type Theme = "light" | "dark"

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: "light",
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

const STORAGE_KEY = "theme"

const getSnapshot = (): Theme => {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === "dark" ? "dark" : "light"
}

const getServerSnapshot = (): Theme => "light"

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const toggleTheme = useCallback(() => {
    const next = getSnapshot() === "light" ? "dark" : "light"
    localStorage.setItem(STORAGE_KEY, next)
    window.dispatchEvent(new StorageEvent("storage"))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
