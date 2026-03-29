import { useTranslations } from "next-intl"
import { ImageSlider } from "@/components/ImageSlider"
import { SectionBadge } from "@/components/SectionBadge"

export const SectionAboutUs = () => {
  const t = useTranslations("sectionAboutUs")

  return (
    <section id="about-us" className="flex flex-col items-center bg-white px-6 py-12 tablet:px-12 tablet:py-16 desktop:px-20 desktop:py-20">
      <SectionBadge title={t("title")} />

      <div className="section-content flex flex-col items-center desktop:flex-row desktop:items-start desktop:gap-12">
        <ImageSlider />

        <div className="mt-8 max-w-[340px] text-center text-[14px] font-light leading-relaxed text-black tablet:max-w-[500px] tablet:text-[16px] desktop:mt-0 desktop:max-w-[400px] desktop:text-left desktop:text-[16px]">
          <p>
            {t("welcome")} <span className="font-semibold">{t("companyName")}</span>{" "}
            {t("tagline")}
          </p>
          <p className="mt-3">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  )
}
