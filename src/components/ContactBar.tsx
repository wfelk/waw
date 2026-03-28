import { useTranslations } from "next-intl"
import Image from "next/image"

const contactLinks = [
  { key: "call", href: "tel:+49XXXXXXXXX", icon: "/images/phone-icon.svg", alt: "Telefon", size: 42, external: false },
  { key: "sendEmail", href: "mailto:info@waw-automobile.de", icon: "/images/mail-icon.svg", alt: "E-Mail", size: 30, external: false },
  { key: "whatsApp", href: "https://wa.me/49XXXXXXXXX", icon: "/images/whatsapp-icon.svg", alt: "WhatsApp", size: 38, external: true },
] as const

export const ContactBar = () => {
  const t = useTranslations("sectionStart")

  return (
    <nav className="flex h-[79px] w-[338px] items-center justify-evenly rounded-[30px] bg-primary shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)]">
      {contactLinks.map(({ key, href, icon, alt, size, external }) => (
        <a
          key={key}
          href={href}
          aria-label={t(key)}
          className="transition-opacity hover:opacity-80"
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          <Image src={icon} alt={alt} width={size} height={size} />
        </a>
      ))}
    </nav>
  )
}
