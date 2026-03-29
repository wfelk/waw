import { useTranslations } from "next-intl"
import { Phone, MessageCircle, Mail } from "lucide-react"

const contactLinks = [
  { key: "call", href: "tel:+49XXXXXXXXX", icon: Phone, external: false },
  { key: "sendMessage", href: "sms:+49XXXXXXXXX", icon: MessageCircle, external: false },
  { key: "sendEmail", href: "mailto:info@waw-automobile.de", icon: Mail, external: false },
] as const

export const ContactBar = () => {
  const t = useTranslations("sectionStart")

  return (
    <nav className="flex h-[79px] w-[338px] items-center justify-evenly rounded-[30px] bg-primary shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)] tablet:w-[300px]">
      {contactLinks.map(({ key, href, icon: Icon, external }) => (
        <a
          key={key}
          href={href}
          aria-label={t(key)}
          className="group rounded-component p-2 transition-colors hover:bg-white"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <Icon size={32} strokeWidth={2} className="stroke-white transition-colors group-hover:stroke-primary" />
        </a>
      ))}
    </nav>
  )
}
