interface Props {
  title: string
  className?: string
}

export const SectionBadge = ({ title, className = "mb-8" }: Props) => {
  return (
    <div className={`rounded-component bg-primary px-10 py-3 shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)] tablet:px-14 tablet:py-4 ${className}`}>
      <h2 className="text-[28px] font-bold uppercase tracking-wide text-white tablet:text-[34px] desktop:text-[38px]">
        {title}
      </h2>
    </div>
  )
}
