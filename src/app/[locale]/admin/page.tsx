import { redirect } from "next/navigation"
import { useTranslations } from "next-intl"
import { getLocale } from "next-intl/server"
import { AdminLanguageSwitcher } from "./AdminLanguageSwitcher"
import { isAuthenticated, logout } from "./actions"

export default async function AdminDashboard() {
  const isAuthed = await isAuthenticated()

  if (!isAuthed) {
    const locale = await getLocale()
    redirect(`/${locale}/admin/login`)
  }

  return <AdminContent />
}

const AdminContent = () => {
  const t = useTranslations("admin")

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-8 font-sans">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">{t("title")}</h1>
          <div className="flex items-center gap-3">
            <AdminLanguageSwitcher />
            <form action={logout}>
              <button
                type="submit"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10"
              >
                {t("logout")}
              </button>
            </form>
          </div>
        </div>

        <p className="text-white/60">{t("placeholder")}</p>
      </div>
    </div>
  )
}
