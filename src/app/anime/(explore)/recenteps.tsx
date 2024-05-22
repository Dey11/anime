import { reduceName } from "@/lib/utils";
import ExplorePageCard, { ExplorePageCardProps } from "./exploreCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fetchRecentEps = async (page: number) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/recent-episodes?page=${page}`,
      {
        next: { revalidate: 3600 },
      },
    );
    const result = await res.json();
    if (result.results.length == 0) return -1;
    return result.results;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

const RecentEps = async () => {
  const pageOne = await fetchRecentEps(1);
  const pageTwo = await fetchRecentEps(2);

  const [recentEpsPageOne, recentEpsPageTwo] = await Promise.all([
    pageOne,
    pageTwo,
  ]);

  if (pageOne == -1 || pageTwo == -1) {
    return (
      <div className="pb-5 text-xl text-slate-400">Error loading results</div>
    );
  }

  return (
    <div>
      <div className="pb-10">
        <Carousel
          opts={{
            align: "start",
            loop: false,
            duration: 20,
            slidesToScroll: 2,
          }}
        >
          <CarouselContent className="-ml-2">
            {recentEpsPageOne.map((episode: ExplorePageCardProps) => (
              <CarouselItem
                className="basis-2/2 md:basis-5/5 pl-3"
                key={episode.id}
              >
                <ExplorePageCard
                  id={episode.id}
                  key={episode.id}
                  title={reduceName(episode.title)}
                  image={episode.image}
                  episodeId={episode.episodeId}
                  episodeNumber={episode.episodeNumber}
                  priority={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: false,
            duration: 20,
            slidesToScroll: 2,
          }}
        >
          <CarouselContent className="-ml-2">
            {recentEpsPageTwo.map((episode: ExplorePageCardProps) => (
              <CarouselItem
                className="basis-2/2 md:basis-5/5 pl-3"
                key={episode.id}
              >
                <ExplorePageCard
                  id={episode.id}
                  key={episode.id}
                  title={reduceName(episode.title)}
                  image={episode.image}
                  episodeId={episode.episodeId}
                  episodeNumber={episode.episodeNumber}
                  priority={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default RecentEps;
