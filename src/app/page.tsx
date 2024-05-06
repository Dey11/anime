import FeatureSection from "@/components/home/features";
import Hero from "@/components/home/hero";
import SearchSection from "@/components/home/search";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeatureSection />
      <SearchSection />
    </main>
  );
}
