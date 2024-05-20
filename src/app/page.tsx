import FeatureSection from "@/app/(home)/features";
import Hero from "@/app/(home)/hero";
import SearchSection from "@/app/(home)/searchSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeatureSection />
      <SearchSection />
    </main>
  );
}
