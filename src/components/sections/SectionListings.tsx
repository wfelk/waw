"use client";

const MOCK_LISTINGS = [
  {
    id: 1,
    title: "VW Golf VII 1.6 TDI",
    year: 2017,
    km: "98.000 km",
    price: "12.900",
    color: "#4b5563",
  },
  {
    id: 2,
    title: "BMW 320d Touring",
    year: 2016,
    km: "142.000 km",
    price: "14.500",
    color: "#374151",
  },
  {
    id: 3,
    title: "Opel Corsa 1.2",
    year: 2019,
    km: "56.000 km",
    price: "9.800",
    color: "#5c5470",
  },
  {
    id: 4,
    title: "Mercedes C200 CDI",
    year: 2015,
    km: "167.000 km",
    price: "11.200",
    color: "#1f2937",
  },
  {
    id: 5,
    title: "Audi A4 2.0 TDI",
    year: 2018,
    km: "89.000 km",
    price: "16.900",
    color: "#4a5568",
  },
  {
    id: 6,
    title: "Ford Focus 1.5 EcoBoost",
    year: 2020,
    km: "43.000 km",
    price: "13.400",
    color: "#7c6f64",
  },
];

export const SectionListings = () => {
  return (
    <section
      id="listings"
      className="flex flex-col items-center bg-white px-6 py-12"
    >
      {/* Badge */}
      <div className="mb-8 rounded-[20px] bg-waw-green px-10 py-3 shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.26)]">
        <h2 className="text-[28px] font-bold uppercase tracking-wide text-white">
          Inserate
        </h2>
      </div>

      {/* Listing cards */}
      <div className="flex w-full max-w-[340px] flex-col gap-5">
        {MOCK_LISTINGS.map((car) => (
          <div
            key={car.id}
            className="overflow-hidden rounded-[20px] bg-[#f5f5f5] shadow-[0px_3px_9.7px_2px_rgba(0,0,0,0.12)]"
          >
            {/* Mock image */}
            <div
              className="flex h-[180px] w-full items-center justify-center text-[14px] text-white/40 select-none"
              style={{ backgroundColor: car.color }}
            >
              Bild
            </div>

            {/* Card info */}
            <div className="px-5 py-4">
              <h3 className="text-[16px] font-semibold text-black">
                {car.title}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-[13px] font-light text-gray-500">
                <span>{car.year}</span>
                <span>|</span>
                <span>{car.km}</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[20px] font-bold text-waw-green">
                  {car.price} &euro;
                </span>
                <button className="rounded-[12px] bg-waw-green px-5 py-2 text-[13px] font-semibold text-white shadow transition-opacity hover:opacity-80">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
