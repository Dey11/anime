import { reduceName } from "@/lib/utils";
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

const fetchTopAiring = async (page: number) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/top-airing?page=${page}`,
      {
        next: { revalidate: 86400 },
        // cache: "no-store",
      },
    );
    const result = await res.json();
    return result.results;
  } catch (err) {
    console.log(err);
  }
};

const TopAiring = async () => {
  const firstPage = fetchTopAiring(1);
  const secondPage = fetchTopAiring(2);

  const [episodesOfFirstPage, episodesOfSecondPage] = await Promise.all([
    firstPage,
    secondPage,
  ]);

  return (
    <div className="pt-10 text-xl md:text-3xl">
      <h1 className="pb-8">Top Airing Anime of the Season:</h1>
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
            {episodesOfFirstPage.map((episode: ExplorePageCardProps) => (
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
                  priority={true}
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
            {episodesOfSecondPage.map((episode: ExplorePageCardProps) => (
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

export default TopAiring;
