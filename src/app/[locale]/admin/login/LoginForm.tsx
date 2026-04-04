"use client"

import { useActionState } from "react"
import { login } from "../actions"

interface Props {
  labels: {
    username: string
    password: string
    submit: string
    submitting: string
  }
}

export const LoginForm = ({ labels }: Props) => {
  const [state, formAction, isPending] = useActionState(login, null)

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="username" className="text-sm text-white/70">
          {labels.username}
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
          {labels.password}
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

      {state?.error && <p className="text-sm text-red-400">{state.error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="mt-2 rounded-lg bg-[var(--primary)] px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isPending ? labels.submitting : labels.submit}
      </button>
    </form>
  )
}
