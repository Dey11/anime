import CarouselComponent from "@/components/explore/carousel";
import RecentEps from "@/components/explore/recenteps";
import TopAiring from "@/components/explore/topairing";
import { Metadata } from "next";
import { Suspense } from "react";

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
        <Suspense fallback={"Loading"}>
          <TopAiring />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={"Loading"}>
          <RecentEps />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
