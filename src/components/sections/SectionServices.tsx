import { useTranslations } from "next-intl"
import { SectionBadge } from "@/components/SectionBadge"
import { ServiceCard } from "@/components/ServiceCard"

const SERVICES = [
  { key: "usedCars", color: "#4b5563" },
  { key: "accidentCars", color: "#374151" },
  { key: "tireService", color: "#1f2937" },
] as const

export const SectionServices = () => {
  const t = useTranslations("sectionServices")

  return (
    <section
      id="service"
      className="flex flex-col items-center bg-[#565656] px-6 py-12"
    >
      <SectionBadge title={t("title")} className="mb-10" />

      <div className="flex w-full max-w-[340px] flex-col gap-10">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.key}
            serviceKey={service.key}
            color={service.color}
          />
        ))}
      </div>
    </section>
  )
}
