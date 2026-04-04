import { useTranslations } from "next-intl"
import { AdminLanguageSwitcher } from "../AdminLanguageSwitcher"
import { LoginForm } from "./LoginForm"

export default function LoginPage() {
  const t = useTranslations("admin")

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 font-sans">
      <div className="w-full max-w-sm rounded-[var(--border-radius)] bg-white/10 p-8 backdrop-blur-sm">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">{t("title")}</h1>
          <AdminLanguageSwitcher />
        </div>

        <LoginForm
          labels={{
            username: t("username"),
            password: t("password"),
            submit: t("submit"),
            submitting: t("submitting"),
          }}
        />
      </div>
    </div>
  )
}
