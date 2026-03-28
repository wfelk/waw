import { useTranslations } from "next-intl"
import Image from "next/image"
import { SideMenu } from "@/components/SideMenu"
import { ContactBar } from "@/components/ContactBar"

export const SectionStart = () => {
  const t = useTranslations("sectionStart")

  return (
    <>
      <header className="relative z-10 flex h-[98px] items-center justify-between bg-white pr-4 tablet:h-[110px] tablet:px-8 desktop:h-[120px] desktop:px-16">
        <div className="relative h-[80px] w-[160px] shrink-0 tablet:h-[90px] tablet:w-[180px]">
          <Image
            src="/images/waw-logo.svg"
            alt="WAW Automobile Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <SideMenu />
      </header>

      <section id="start" className="relative flex min-h-[810px] flex-col items-center overflow-hidden bg-gradient-to-b from-transparent to-[#222] tablet:min-h-[700px] desktop:min-h-[800px]">
        <div className="pointer-events-none absolute -left-[242px] top-0 h-[693px] w-[693px] tablet:-left-[100px] tablet:h-[800px] tablet:w-[800px] desktop:left-0 desktop:h-[900px] desktop:w-[900px]">
          <Image
            src="/images/gradient-car.png"
            alt={t("vehicleAlt")}
            fill
            className="-scale-x-100 object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mt-[-49px] flex flex-col items-center tablet:mt-0">
          <div className="relative h-[287px] w-[287px] tablet:h-[320px] tablet:w-[320px] desktop:h-[360px] desktop:w-[360px]">
            <Image src="/images/waw-logo.png" alt="WAW" fill className="object-contain" />
          </div>
          <p className="font-(family-name:--font-alumni) -mt-28 text-[29.6px] font-semibold uppercase tracking-[17.75px] text-primary tablet:-mt-32 tablet:text-[36px] tablet:tracking-[20px] desktop:text-[42px] desktop:tracking-[24px]">
            Automobile
          </p>
        </div>

        <div className="relative z-10 mt-4 text-center text-[15px] font-light text-white tablet:mt-6 tablet:text-[18px] desktop:text-[20px]">
          <p>{t("tagline1")}</p>
          <p>{t("tagline2")}</p>
        </div>

        <div className="relative z-10 mt-auto mb-8 flex w-full flex-col items-center gap-4 px-8 tablet:mb-12 tablet:flex-row tablet:justify-center tablet:gap-6">
          <a
            href="#listings"
            className="flex h-[79px] w-[338px] items-center justify-center rounded-[30px] bg-primary text-[20px] font-semibold text-white shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)] transition-opacity hover:opacity-90 tablet:w-[300px] tablet:text-[22px] desktop:w-[340px]"
          >
            {t("viewListings")}
          </a>

          <ContactBar />
        </div>
      </section>

      <div className="mx-auto h-[7px] w-full max-w-[416px] rounded-component bg-black tablet:max-w-none" />
    </>
  )
}
