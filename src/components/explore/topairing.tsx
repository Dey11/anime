import TopAiringCard, { TopAiringCardProps } from "../custom-ui/exploreCard";
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
      }
    );
    const result = await res.json();
    return result.results;
  } catch (err) {
    console.log(err);
  }
};

const TopAiring = async () => {
  const episodesOfFirstPage = await fetchTopAiring(1);
  const episodesOfSecondPage = await fetchTopAiring(2);

  return (
    <div className="pt-10 md:text-3xl text-xl">
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
            {episodesOfFirstPage.map((episode: TopAiringCardProps) => (
              <CarouselItem
                className="pl-3 basis-2/2 md:basis-5/5"
                key={episode.id}
              >
                <TopAiringCard
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
            {episodesOfSecondPage.map((episode: TopAiringCardProps) => (
              <CarouselItem
                className="pl-3 basis-2/2 md:basis-5/5"
                key={episode.id}
              >
                <TopAiringCard
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

export default TopAiring;
