"use client"

import { useActionState } from "react"
import { login } from "../actions"

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null)

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 font-sans">
      <div className="w-full max-w-sm rounded-[var(--border-radius)] bg-white/10 p-8 backdrop-blur-sm">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          WAW Admin
        </h1>

        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm text-white/70">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-[var(--primary)]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-white/70">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-[var(--primary)]"
            />
          </div>

          {state?.error && (
            <p className="text-sm text-red-400">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 rounded-lg bg-[var(--primary)] px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {isPending ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  )
}
