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
          <div key={service.key} className="flex flex-col items-center">
            {/* Rounded image placeholder */}
            <div
              className="flex h-[180px] w-[260px] items-center justify-center rounded-[20px] text-[14px] text-white/40 shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)] select-none"
              style={{ backgroundColor: service.color }}
            >
              {t("image")}
            </div>

            {/* Title with green underline */}
            <h3 className="mt-5 whitespace-pre-line text-center text-[20px] font-semibold leading-tight text-white underline decoration-primary decoration-3 underline-offset-4">
              {t(`${service.key}.title`)}
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-[300px] text-center text-[12px] font-light leading-relaxed text-white/90">
              {t(`${service.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
