import FeatureSection from "@/app/(home)/features";
import Hero from "@/app/(home)/hero";
import SearchSection from "@/app/(home)/searchSection";
import LoggedInFeats from "./(home)/loggedInFeats";

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
