import { useTranslations } from "next-intl"

interface Props {
  title: string
  year: number
  km: string
  price: string
  color: string
}

export const ListingCard = ({ title, year, km, price, color }: Props) => {
  const t = useTranslations("sectionListings")

  return (
    <div className="overflow-hidden rounded-component bg-[#f5f5f5] shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.12)]">
      {/* Mock image */}
      <div
        className="flex h-[180px] w-full items-center justify-center text-[14px] text-white/40 select-none"
        style={{ backgroundColor: color }}
      >
        {t("image")}
      </div>

      {/* Card info */}
      <div className="px-5 py-4">
        <h3 className="text-[16px] font-semibold text-black">
          {title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-[13px] font-light text-gray-500">
          <span>{year}</span>
          <span>|</span>
          <span>{km}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[20px] font-bold text-primary">
            {price} &euro;
          </span>
          <button className="rounded-[12px] bg-primary px-5 py-2 text-[13px] font-semibold text-white shadow transition-opacity hover:opacity-80">
            {t("details")}
          </button>
        </div>
      </div>
    </div>
  )
}
