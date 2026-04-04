import { redirect } from "next/navigation"
import { isAuthenticated, logout } from "./actions"

export default async function AdminDashboard() {
  const isAuthed = await isAuthenticated()

  if (!isAuthed) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-8 font-sans">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">WAW Admin</h1>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10"
            >
              Log out
            </button>
          </form>
        </div>

        <p className="text-white/60">
          Dashboard — listing management coming soon.
        </p>
      </div>
    </div>
  )
}
