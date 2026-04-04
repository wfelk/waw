import { useTranslations } from "next-intl"
import { BadgeSection } from "@/components/BadgeSection"
import { CardService } from "@/components/CardService"

const SERVICES = [
  { key: "usedCars", color: "#4b5563" },
  { key: "accidentCars", color: "#374151" },
  { key: "vehicleParts", color: "#2d3748" },
  { key: "tireService", color: "#1f2937" },
] as const

export const SectionServices = () => {
  const t = useTranslations("sectionServices")

  return (
    <section
      id="service"
      className="flex flex-col items-center bg-[#565656] px-6 py-12 tablet:px-12 tablet:py-16 desktop:px-20 desktop:py-20"
    >
      <BadgeSection title={t("title")} className="mb-10" />

      <div className="section-content grid grid-cols-1 gap-10 tablet:grid-cols-2">
        {SERVICES.map((service) => (
          <CardService
            key={service.key}
            serviceKey={service.key}
            color={service.color}
          />
        ))}
      </div>
    </section>
  )
}
