import { useTranslations } from "next-intl"

interface Props {
  serviceKey: string
  color: string
}

export const ServiceCard = ({ serviceKey, color }: Props) => {
  const t = useTranslations("sectionServices")

  return (
    <div className="overflow-hidden rounded-component shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)]">
      {/* Image with overlaid title */}
      <div
        className="relative flex h-[180px] items-center justify-center text-[14px] text-white/40 select-none tablet:h-[200px] desktop:h-[220px]"
        style={{ backgroundColor: color }}
      >
        {t("image")}
        <h3 className="absolute bottom-3 left-4 font-secondary text-[28px] leading-tight text-white tablet:text-[32px]">
          {t(`${serviceKey}.title`)}
        </h3>
      </div>

      {/* Description */}
      <div className="bg-white px-5 py-5">
        <p className="text-[11px] font-light leading-relaxed text-black tablet:text-[13px] desktop:text-[14px]">
          {t(`${serviceKey}.description`)}
        </p>
      </div>
    </div>
  )
}
