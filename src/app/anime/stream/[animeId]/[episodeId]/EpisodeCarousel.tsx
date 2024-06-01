"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { episodes } from "@/lib/fetchAnimeData";
import Link from "next/link";

const PaginatedEpisodes = ({
  episodes,
  currEpId,
  animeId,
  episodeNumber,
}: {
  episodes: episodes[];
  currEpId: string;
  animeId: string;
  episodeNumber: number;
}) => {
  const numOfEps = episodes.length;
  if (numOfEps)
    return (
      <div>
        <div className="mx-auto hidden max-w-[700px] md:block">
          <Carousel
            className="w-full"
            opts={{
              slidesToScroll: 6,
              startIndex: episodeNumber + 1,
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1">
              {episodes.map((episode: { id: string; number: number }) => (
                <CarouselItem key={episode.id} className="basis-1/12 pl-1">
                  <Button
                    asChild
                    key={episode.id}
                    variant={currEpId == episode.id ? "default" : "secondary"}
                    size={"icon"}
                  >
                    <Link href={`/anime/stream/${animeId}/${episode.id}`}>
                      {episode.number}
                    </Link>
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mx-auto max-w-[250px] md:hidden">
          <Carousel
            className="w-full"
            opts={{
              slidesToScroll: 6,
              startIndex: episodeNumber + 1,
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1">
              {episodes.map((episode: { id: string; number: number }) => (
                <CarouselItem key={episode.id} className="basis-1/6 pl-1">
                  <Button
                    asChild
                    key={episode.id}
                    variant={currEpId == episode.id ? "default" : "secondary"}
                    size={"icon"}
                  >
                    <Link href={`/anime/stream/${animeId}/${episode.id}`}>
                      {episode.number}
                    </Link>
                  </Button>
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

export default PaginatedEpisodes;
