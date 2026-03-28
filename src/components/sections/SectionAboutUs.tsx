import { ImageSlider } from "@/components/ImageSlider";

export const SectionAboutUs = () => {
  return (
    <section id="ueber-uns" className="flex flex-col items-center bg-white px-6 py-12">
      {/* Badge */}
      <div className="mb-8 rounded-[20px] bg-waw-green px-10 py-3 shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)]">
        <h2 className="text-[28px] font-bold uppercase tracking-wide text-white">
          Über Uns
        </h2>
      </div>

      {/* Image Slider */}
      <ImageSlider />

      {/* Description */}
      <div className="mt-8 max-w-[340px] text-center text-[14px] font-light leading-relaxed text-black">
        <p>
          Willkommen bei <span className="font-semibold">WAW Automobile</span>{" "}
          – Ihrem Experten für Mobilität in zweiter Instanz.
        </p>
        <p className="mt-3">
          Was als kleine Leidenschaft für Motoren begann, hat sich über die
          Jahre zu einem vielseitigen Familienbetrieb entwickelt. Wir glauben
          daran, dass jedes Fahrzeug einen Wert hat – egal, ob es glänzend im
          Verkaufsraum steht oder nach einem Unfall eine zweite Chance
          braucht.
        </p>
      </div>
    </section>
  );
}
