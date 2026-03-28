import { useTranslations } from "next-intl"
import { ImageSlider } from "@/components/ImageSlider"
import { SectionBadge } from "@/components/SectionBadge"

export const SectionAboutUs = () => {
  const t = useTranslations("sectionAboutUs")

  return (
    <section id="about-us" className="flex flex-col items-center bg-white px-6 py-12">
      <SectionBadge title={t("title")} />

      <ImageSlider />

      <div className="mt-8 max-w-[340px] text-center text-[14px] font-light leading-relaxed text-black">
        <p>
          {t("welcome")} <span className="font-semibold">{t("companyName")}</span>{" "}
          {t("tagline")}
        </p>
        <p className="mt-3">
          {t("description")}
        </p>
      </div>
    </section>
  )
}
