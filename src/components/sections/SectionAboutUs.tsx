import { useTranslations } from "next-intl"
import { ImageSlider } from "@/components/ImageSlider"
import { SectionBadge } from "@/components/SectionBadge"

export const SectionAboutUs = () => {
  const t = useTranslations("sectionAboutUs")

  return (
    <section
      id="about-us"
      className="flex flex-col items-center bg-white px-6 py-12 tablet:px-12 tablet:py-16 desktop:px-20 desktop:py-20"
    >
      <SectionBadge title={t("title")} />

      <div className="section-content flex flex-col items-center">
        <ImageSlider />

        <div className="mt-8 w-full max-w-[450px] text-justify text-[14px] font-light leading-relaxed text-black tablet:max-w-[700px] tablet:text-[22px] desktop:max-w-[900px] desktop:text-[24px]">
          <p>
            {t("welcome")}{" "}
            <span className="font-semibold">{t("companyName")}</span>{" "}
            {t("tagline")}
          </p>
          <p className="mt-3">{t("description")}</p>
        </div>
      </div>
    </section>
  )
}
