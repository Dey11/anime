import CarouselComponent from "@/app/anime/(explore)/carousel";
import RecentEps from "@/app/anime/(explore)/recenteps";
import TopAiring from "@/app/anime/(explore)/topairing";
import { Metadata } from "next";
import { Suspense } from "react";
import Favourites from "./Favourites";
import LoadingCard from "@/components/LoadingCard";
import LoadingCarousel from "./LoadingCarousel";

export const metadata: Metadata = {
  title: "Explore Anidey",
  description:
    "Browse through a carefully curated collection of featured, top airing and recent anime episodes",
};

const page = () => {
  return (
    <div className="px-2">
      <div className="">
        <CarouselComponent />
      </div>
      <div>
        <Suspense fallback={<LoadingCarousel />}>
          <Favourites />
        </Suspense>
      </div>
      <div>
        <div className="pt-10 text-xl md:text-3xl">
          <h1 className="pb-8">Top Airing Anime of the Season:</h1>
          <Suspense fallback={<LoadingCarousel />}>
            <TopAiring />
          </Suspense>
        </div>
      </div>

      <div>
        <div className="pt-10 text-xl md:text-3xl">
          <h1 className="pb-8">Recent Episodes:</h1>
          <Suspense fallback={<LoadingCarousel />}>
            <RecentEps />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
