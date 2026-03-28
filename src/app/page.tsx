import Start from "@/components/Start";
import AboutUs from "@/components/AboutUs";
import Offers from "@/components/Offers";
import Listings from "@/components/Listings";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[402px] flex-col font-sans">
      <Start />
      <AboutUs />
      <Offers />
      <Listings />
    </div>
  );
}
