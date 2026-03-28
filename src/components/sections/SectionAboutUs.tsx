import { useTranslations } from "next-intl";
import { ImageSlider } from "@/components/ImageSlider";

export const SectionAboutUs = () => {
  const t = useTranslations("sectionAboutUs");

  return (
    <section id="about-us" className="flex flex-col items-center bg-white px-6 py-12">
      {/* Badge */}
      <div className="mb-8 rounded-[20px] bg-waw-green px-10 py-3 shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)]">
        <h2 className="text-[28px] font-bold uppercase tracking-wide text-white">
          {t("title")}
        </h2>
      </div>

      {/* Image Slider */}
      <ImageSlider />

      {/* Description */}
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
  );
}
