import CarouselComponent from "@/app/anime/(explore)/Carousel";
import RecentEps from "@/app/anime/(explore)/RecentEps";
import TopAiring from "@/app/anime/(explore)/TopAiring";
import { Metadata } from "next";
import { Suspense } from "react";
import Favourites from "./Favourites";
import LoadingCarousel from "./LoadingCarousel";

export const metadata: Metadata = {
  title: "Explore Anidey",
  description:
    "Browse through a carefully curated collection of featured, top airing and recent anime episodes",
};

const page = () => {
  return (
    <div className="mx-auto px-2 md:px-0">
      <div className="mx-auto w-full min-w-[280px] md:max-w-max">
        <CarouselComponent />
      </div>
      <div>
        <Suspense fallback={<LoadingCarousel />}>
          <Favourites />
        </Suspense>
      </div>
      <div>
        <div className="pt-10 text-lg md:text-3xl">
          <h1 className="pb-5 md:pb-8">Top Airing Anime of the Season:</h1>
          <Suspense fallback={<LoadingCarousel />}>
            <TopAiring />
          </Suspense>
        </div>
      </div>

      <div>
        <div className="pt-10 text-lg md:text-3xl">
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
