import { useTranslations } from "next-intl"
import Image from "next/image"
import { SideMenu } from "@/components/SideMenu"
import { ContactBar } from "@/components/ContactBar"

export const SectionStart = () => {
  const t = useTranslations("sectionStart")

  return (
    <>
      <header className="relative z-10 flex h-[98px] items-center justify-between bg-white pr-4">
        <div className="relative h-[80px] w-[160px] shrink-0">
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

      <section id="start" className="relative flex min-h-[810px] flex-col items-center overflow-hidden bg-gradient-to-b from-transparent to-[#222]">
        <div className="pointer-events-none absolute -left-[242px] top-0 h-[693px] w-[693px]">
          <Image
            src="/images/gradient-car.png"
            alt={t("vehicleAlt")}
            fill
            className="-scale-x-100 object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mt-[-49px] flex flex-col items-center">
          <div className="relative h-[287px] w-[287px]">
            <Image src="/images/waw-logo.png" alt="WAW" fill className="object-contain" />
          </div>
          <p className="font-(family-name:--font-alumni) -mt-28 text-[29.6px] font-semibold uppercase tracking-[17.75px] text-primary">
            Automobile
          </p>
        </div>

        <div className="relative z-10 mt-4 text-center text-[15px] font-light text-white">
          <p>{t("tagline1")}</p>
          <p>{t("tagline2")}</p>
        </div>

        <div className="relative z-10 mt-auto mb-8 flex w-full flex-col items-center gap-4 px-8">
          <a
            href="#listings"
            className="flex h-[79px] w-[338px] items-center justify-center rounded-[30px] bg-primary text-[20px] font-semibold text-white shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)] transition-opacity hover:opacity-90"
          >
            {t("viewListings")}
          </a>

          <ContactBar />
        </div>
      </section>

      <div className="mx-auto h-[7px] w-full max-w-[416px] rounded-component bg-black" />
    </>
  )
}
