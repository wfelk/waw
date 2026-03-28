import SectionStart from "@/components/sections/SectionStart";
import SectionAboutUs from "@/components/sections/SectionAboutUs";
import SectionOffers from "@/components/sections/SectionOffers";
import SectionListings from "@/components/sections/SectionListings";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[402px] flex-col font-sans">
      <SectionStart />
      <SectionAboutUs />
      <SectionOffers />
      <SectionListings />
    </div>
  );
}
