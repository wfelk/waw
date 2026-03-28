const SERVICES = [
  {
    title: "Gebrauchtwagen",
    color: "#4b5563",
    description:
      "Unser Sortiment ist so vielseitig wie unsere Kunden. Suchen Sie einen sparsamen Kleinwagen für die City, einen zuverlässigen Kombi für die Familie oder ein robustes Fahrzeug für den gewerblichen Einsatz? Durch unseren ständigen Ankauf – auch von Unfallfahrzeugen – finden wir oft auch Spezialfahrzeuge für Bastler oder den Export.",
  },
  {
    title: "Unfallwagen",
    color: "#374151",
    description:
      "Unsere Unfall- und Defektfahrzeuge bieten eine hervorragende Basis für die Ersatzteilgewinnung. Ob intakte Karosserieteile, Steuergeräte oder mechanische Komponenten – wir selektieren Fahrzeuge mit hoher Restsubstanz. Wir machen kein Geheimnis aus dem Zustand. Sie erhalten von uns eine ehrliche Einschätzung, welche Aggregate noch laufen und welche Bauteile für den Ausschlachter prädestiniert sind.",
  },
  {
    title: "Reifen-Umzieh-\nService",
    color: "#1f2937",
    description:
      "Unsere Unfall- und Defektfahrzeuge bieten eine hervorragende Basis für die Ersatzteilgewinnung. Ob intakte Karosserieteile, Steuergeräte oder mechanische Komponenten – wir selektieren Fahrzeuge mit hoher Restsubstanz. Wir machen kein Geheimnis aus dem Zustand. Sie erhalten von uns eine ehrliche Einschätzung, welche Aggregate noch laufen und welche Bauteile für den Ausschlachter prädestiniert sind.",
  },
];

export default function Offers() {
  return (
    <section
      id="angebote"
      className="flex flex-col items-center bg-[#565656] px-6 py-12"
    >
      {/* Badge */}
      <div className="mb-10 rounded-[20px] bg-waw-green px-10 py-3 shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)]">
        <h2 className="text-[28px] font-bold uppercase tracking-wide text-white">
          Angebote
        </h2>
      </div>

      {/* Service cards */}
      <div className="flex w-full max-w-[340px] flex-col gap-10">
        {SERVICES.map((service, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Rounded image placeholder */}
            <div
              className="flex h-[180px] w-[260px] items-center justify-center rounded-[20px] text-[14px] text-white/40 shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)] select-none"
              style={{ backgroundColor: service.color }}
            >
              Bild
            </div>

            {/* Title with green underline */}
            <h3 className="mt-5 whitespace-pre-line text-center text-[20px] font-semibold leading-tight text-white underline decoration-waw-green decoration-3 underline-offset-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-[300px] text-center text-[12px] font-light leading-relaxed text-white/90">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
