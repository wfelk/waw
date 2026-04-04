import { useTranslations } from "next-intl"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { SideMenu } from "@/components/SideMenu"
import { Button } from "@/components/Button"

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
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                }
                className="px-5"
              >
                <span className="sr-only">{t("whatsapp")}</span>
              </Button>
              <Button
                href="https://t.me/XXXXXXXXX"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.93 3.821l.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693L18.953 5.78c.595-.394 1.136-.176.691.218z" />
                  </svg>
                }
                className="px-5"
              >
                <span className="sr-only">{t("telegram")}</span>
              </Button>
            </div>

            <Button href="#listings" iconPosition="end" className="w-full tablet:w-auto">
              {t("viewListings")}
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto h-[7px] w-full rounded-component bg-black" />
    </>
  )
}
