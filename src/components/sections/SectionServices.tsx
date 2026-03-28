import { useTranslations } from "next-intl";

const SERVICES = [
  { key: "usedCars", color: "#4b5563" },
  { key: "accidentCars", color: "#374151" },
  { key: "tireService", color: "#1f2937" },
] as const;

export const SectionServices = () => {
  const t = useTranslations("sectionServices");

  return (
    <section
      id="service"
      className="flex flex-col items-center bg-[#565656] px-6 py-12"
    >
      {/* Badge */}
      <div className="mb-10 rounded-[20px] bg-primary px-10 py-3 shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)]">
        <h2 className="text-[28px] font-bold uppercase tracking-wide text-white">
          {t("title")}
        </h2>
      </div>

      {/* Service cards */}
      <div className="flex w-full max-w-[340px] flex-col gap-10">
        {SERVICES.map((service) => (
          <div
            key={service.key}
            className="overflow-hidden rounded-[20px] shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)]"
          >
            {/* Image with overlaid title */}
            <div
              className="relative flex h-[180px] items-center justify-center text-[14px] text-white/40 select-none"
              style={{ backgroundColor: service.color }}
            >
              {t("image")}
              <h3 className="absolute bottom-3 left-4 font-secondary text-[22px] leading-tight text-white">
                {t(`${service.key}.title`)}
              </h3>
            </div>

            {/* Description */}
            <div className="bg-[#2a2a2a] px-5 py-5">
              <p className="text-[11px] font-light leading-relaxed text-white/90">
                {t(`${service.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
