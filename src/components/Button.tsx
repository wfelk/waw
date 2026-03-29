import Link from "next/link"

interface Props {
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: "start" | "end"
  size?: "default" | "small"
  className?: string
}

export const Button = ({
  href,
  children,
  icon,
  iconPosition = "start",
  size = "default",
  className = "",
}: Props) => {
  const isHash = href.startsWith("#")
  const isIconOnly = icon !== undefined
  const hasDefaultIcon = !isIconOnly && iconPosition === "end"
  const iconPaddingClassName = hasDefaultIcon
    ? size === "small"
      ? "pl-5 pr-3 tablet:pl-6 tablet:pr-4"
      : "pl-10 pr-6 tablet:pl-12 tablet:pr-8"
    : size === "small"
      ? "px-5"
      : "px-10 tablet:px-12"
  const sizeClassName =
    size === "small"
      ? `flex items-center justify-center gap-1 rounded-full border-[3px] border-primary bg-[#2e7a42] ${iconPaddingClassName} py-2 text-[13px] font-semibold text-white shadow transition-all hover:bg-primary tablet:text-[14px]`
      : `flex h-[60px] items-center justify-center gap-2 rounded-full border-[3px] border-primary bg-[#2e7a42] ${iconPaddingClassName} text-[18px] font-bold uppercase tracking-wider text-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.3)] transition-all hover:bg-primary tablet:h-[64px] tablet:text-[20px] desktop:text-[22px]`
  const sharedClassName = `${sizeClassName} ${className}`

  const iconClassName =
    size === "small"
      ? "h-4 w-4 shrink-0 opacity-60"
      : "h-5 w-5 shrink-0 opacity-60 tablet:h-7 tablet:w-7 desktop:h-8 desktop:w-8"

  const defaultIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={iconClassName}
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  )

  const resolvedIcon = icon ?? defaultIcon

  const content = (
    <>
      {iconPosition === "start" && resolvedIcon}
      {children}
      {iconPosition === "end" && resolvedIcon}
    </>
  )

  if (isHash) {
    return (
      <a href={href} className={sharedClassName}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={sharedClassName}>
      {content}
    </Link>
  )
}
