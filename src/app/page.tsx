import FeatureSection from "@/app/(home)/Features";
import Hero from "@/app/(home)/Hero";
import SearchSection from "@/app/(home)/SearchSection";
import LoggedInFeats from "./(home)/LoggedInFeats";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeatureSection />
      <LoggedInFeats />
      <SearchSection />
    </main>
  );
}
