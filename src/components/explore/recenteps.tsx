import ExplorePageCard, {
  ExplorePageCardProps,
} from "../custom-ui/exploreCard";
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
      }
    );
    const result = await res.json();
    return result.results;
  } catch (err) {
    console.log(err);
  }
};

const RecentEps = async () => {
  const recentEpsPageOne = await fetchRecentEps(1);
  const recentEpsPageTwo = await fetchRecentEps(2);

  return (
    <div className="pt-10 md:text-3xl text-xl">
      <h1 className="pb-8">Recent Episodes:</h1>
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
                className="pl-3 basis-2/2 md:basis-5/5"
                key={episode.id}
              >
                <ExplorePageCard
                  id={episode.id}
                  key={episode.id}
                  title={episode.title}
                  image={episode.image}
                  episodeId={episode.episodeId}
                  episodeNumber={episode.episodeNumber}
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
                className="pl-3 basis-2/2 md:basis-5/5"
                key={episode.id}
              >
                <ExplorePageCard
                  id={episode.id}
                  key={episode.id}
                  title={episode.title}
                  image={episode.image}
                  episodeId={episode.episodeId}
                  episodeNumber={episode.episodeNumber}
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
