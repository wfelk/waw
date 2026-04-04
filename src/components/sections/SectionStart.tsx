import { useTranslations } from "next-intl"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { SideMenu } from "@/components/SideMenu"
import { Button } from "@/components/Button"
import { IconWhatsApp } from "@/components/icons/IconWhatsApp"
import { IconTelegram } from "@/components/icons/IconTelegram"

export const SectionStart = () => {
  const t = useTranslations("sectionStart")

  return (
    <>
      <header className="relative z-10 flex h-[75px] items-center justify-between bg-white pr-4 tablet:h-[110px] tablet:px-8 desktop:h-[120px] desktop:px-16">
        <div className="relative h-[30px] w-[130px] shrink-0 tablet:h-[34px] tablet:w-[148px] desktop:h-[38px] desktop:w-[166px]">
          <Image
            src="/logos/logo-waw-picture.svg"
            alt="WAW Automobile Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <SideMenu />
      </header>

      <section
        id="start"
        className="relative flex min-h-[810px] flex-col items-center overflow-hidden bg-gradient-to-b from-transparent to-[#222] tablet:min-h-[700px] desktop:min-h-[800px]"
      >
        <div className="pointer-events-none absolute -left-[242px] top-[120px] h-[693px] w-[693px] tablet:top-0 tablet:-left-[200px] tablet:h-[800px] tablet:w-[800px] desktop:-left-[100px] desktop:h-[900px] desktop:w-[900px]">
          <Image
            src="/images/car.png"
            alt={t("vehicleAlt")}
            fill
            className="-scale-x-100 object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mt-[-49px] flex flex-col items-center tablet:mt-0">
          <div className="relative h-[287px] w-[287px] tablet:h-[320px] tablet:w-[320px] desktop:h-[360px] desktop:w-[360px]">
            <Image
              src="/logos/logo-waw-word.png"
              alt="WAW"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-(family-name:--font-alumni) -mt-28 text-[29.6px] font-semibold uppercase tracking-[17.75px] text-primary tablet:-mt-32 tablet:text-[36px] tablet:tracking-[20px] desktop:text-[42px] desktop:tracking-[24px]">
            Automobile
          </p>
        </div>

        <div className="font-(family-name:--font-alumni) relative z-10 mt-4 tablet:mb-10 desktop:mb-16 rounded-xl bg-black/40 px-8 py-6 text-center text-[27px] font-light text-white backdrop-blur-xl tablet:mt-6 tablet:text-[32px] desktop:text-[38px]">
          <p>{t("tagline1")}</p>
          <p>{t("tagline2")}</p>
          <p>{t("tagline3")}</p>
          <p>{t("tagline4")}</p>
        </div>

        <div className="relative z-10 mt-auto mb-8 flex w-full flex-col items-center px-8 tablet:mb-12 tablet:flex-row tablet:justify-center tablet:gap-8">
          <div className="flex w-full max-w-fit flex-col gap-4 tablet:contents">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="mailto:info@waw-automobile.de"
                icon={<Mail size={24} strokeWidth={2} />}
                className="px-5"
              >
                <span className="sr-only">{t("sendEmail")}</span>
              </Button>
              <Button
                href="tel:+49XXXXXXXXX"
                icon={<Phone size={24} strokeWidth={2} />}
                className="px-5"
              >
                <span className="sr-only">{t("call")}</span>
              </Button>
              <Button
                href="https://wa.me/49XXXXXXXXX"
                icon={<IconWhatsApp size={24} />}
                className="px-5"
              >
                <span className="sr-only">{t("whatsapp")}</span>
              </Button>
              <Button
                href="https://t.me/XXXXXXXXX"
                icon={<IconTelegram size={24} />}
                className="px-5"
              >
                <span className="sr-only">{t("telegram")}</span>
              </Button>
            </div>

            <Button
              href="#listings"
              iconPosition="end"
              className="w-full tablet:w-auto"
            >
              {t("viewListings")}
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto h-[7px] w-full rounded-component bg-black" />
    </>
  )
}
