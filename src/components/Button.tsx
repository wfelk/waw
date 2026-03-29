import Link from "next/link"

interface Props {
  href: string
  children: React.ReactNode
  className?: string
}

export const Button = ({ href, children, className = "" }: Props) => {
  return (
    <Link
      href={href}
      className={`flex h-[60px] items-center justify-center gap-2 rounded-full border-[3px] border-primary bg-[#2e7a42] px-10 text-[18px] font-bold uppercase tracking-wider text-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.3)] transition-all hover:bg-primary tablet:h-[64px] tablet:px-12 tablet:text-[20px] desktop:text-[22px] ${className}`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  )
}
