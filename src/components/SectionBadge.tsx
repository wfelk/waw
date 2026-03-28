type SectionBadgeProps = {
  title: string
  className?: string
}

export const SectionBadge = ({ title, className = "mb-8" }: SectionBadgeProps) => {
  return (
    <div className={`rounded-component bg-primary px-10 py-3 shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)] ${className}`}>
      <h2 className="text-[28px] font-bold uppercase tracking-wide text-white">
        {title}
      </h2>
    </div>
  )
}
