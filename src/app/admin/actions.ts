"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const login = async (
  _prevState: { error: string } | null,
  formData: FormData,
) => {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  const validUsername = process.env.ADMIN_USERNAME
  const validPassword = process.env.ADMIN_PASSWORD

  if (!validUsername || !validPassword) {
    return { error: "Admin credentials are not configured." }
  }

  if (username !== validUsername || password !== validPassword) {
    return { error: "Invalid username or password." }
  }

  const cookieStore = await cookies()
  cookieStore.set("admin-session", generateSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/admin",
  })

  redirect("/admin")
}

export const logout = async () => {
  const cookieStore = await cookies()
  cookieStore.delete("admin-session")
  redirect("/admin/login")
}

export const isAuthenticated = async (): Promise<boolean> => {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin-session")
  return !!session?.value
}

const generateSessionToken = (): string => {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("")
}
