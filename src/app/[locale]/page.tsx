import { SectionStart } from "@/components/sections/SectionStart";
import { SectionAboutUs } from "@/components/sections/SectionAboutUs";
import { SectionServices } from "@/components/sections/SectionServices";
import { SectionListings } from "@/components/sections/SectionListings";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-col font-sans">
      <SectionStart />
      <SectionAboutUs />
      <SectionServices />
      <SectionListings />
    </div>
  );
}
