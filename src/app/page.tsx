import HeroSection from "@/components/HeroSection";
import InteractiveGuide from "@/components/InteractiveGuide";
import { getPlaces } from "@/data/places";

export default function Home() {
  const places = getPlaces();

  return (
    <main>
      <HeroSection />
      <InteractiveGuide places={places} />
    </main>
  );
}
