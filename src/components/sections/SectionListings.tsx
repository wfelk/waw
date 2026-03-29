"use client"

import { useTranslations } from "next-intl"
import { SectionBadge } from "@/components/SectionBadge"
import { ListingCard } from "@/components/ListingCard"

const MOCK_LISTINGS = [
  { id: 1, title: "VW Golf VII 1.6 TDI", year: 2017, km: "98.000 km", price: "12.900", color: "#4b5563" },
  { id: 2, title: "BMW 320d Touring", year: 2016, km: "142.000 km", price: "14.500", color: "#374151" },
  { id: 3, title: "Opel Corsa 1.2", year: 2019, km: "56.000 km", price: "9.800", color: "#5c5470" },
  { id: 4, title: "Mercedes C200 CDI", year: 2015, km: "167.000 km", price: "11.200", color: "#1f2937" },
  { id: 5, title: "Audi A4 2.0 TDI", year: 2018, km: "89.000 km", price: "16.900", color: "#4a5568" },
  { id: 6, title: "Ford Focus 1.5 EcoBoost", year: 2020, km: "43.000 km", price: "13.400", color: "#7c6f64" },
]

export const SectionListings = () => {
  const t = useTranslations("sectionListings")

  return (
    <section
      id="listings"
      className="flex flex-col items-center bg-gray-100 px-6 py-12 tablet:px-12 tablet:py-16 desktop:px-20 desktop:py-20"
    >
      <SectionBadge title={t("title")} />

      <div className="section-content grid grid-cols-1 gap-5 tablet:grid-cols-2 tablet:gap-6 desktop:grid-cols-3 desktop:gap-8">
        {MOCK_LISTINGS.map((car) => (
          <ListingCard
            key={car.id}
            title={car.title}
            year={car.year}
            km={car.km}
            price={car.price}
            color={car.color}
          />
        ))}
      </div>
    </section>
  )
}
