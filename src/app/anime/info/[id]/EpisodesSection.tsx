"use client";

import { Button } from "@/components/ui/button";
import { episodes } from "@/lib/fetchAnimeData";
import Link from "next/link";
import { useState } from "react";

const EpisodesSection = ({
  episodes,
  animeId,
}: {
  episodes: episodes[];
  animeId: string;
}) => {
  const paginationNumber = 100;
  const numberOfEps = episodes.length;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(paginationNumber);
  const [counter, setCounter] = useState(1);

  const handleNext = () => {
    if (counter * paginationNumber > episodes.length) return;
    setCounter(() => {
      setStart(() => counter * paginationNumber);
      setEnd((counter + 1) * paginationNumber);
      return counter + 1;
    });
  };

  const handlePrevious = () => {
    if (counter == 1) return;
    setCounter(() => {
      setStart((counter - 2) * paginationNumber);
      setEnd((counter - 1) * paginationNumber);
      return counter - 1;
    });
  };

  return (
    <div>
      <div className="">
        <MoreEps
          episodes={episodes}
          startIndex={start}
          endIndex={end}
          animeId={animeId}
        />
      </div>

      {numberOfEps > paginationNumber && (
        <div className="mx-auto mt-10 flex max-w-[600px] justify-between">
          <Button
            onClick={handlePrevious}
            variant={"default"}
            size={"lg"}
            className="w-24"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            variant={"default"}
            size={"lg"}
            className="w-24"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default EpisodesSection;

const MoreEps = ({
  episodes,
  startIndex,
  endIndex,
  animeId,
}: {
  episodes: episodes[];
  startIndex: number;
  endIndex: number;
  animeId: string;
}) => {
  return (
    <div className="grid grid-cols-5 gap-1 md:grid-cols-10">
      {episodes
        .slice(startIndex, endIndex)
        .map((episode: { id: string; number: number }) => (
          <Button asChild variant={"secondary"} key={episode.id}>
            <Link href={`/anime/stream/${animeId}/${episode.id}`}>
              {episode.number}
            </Link>
          </Button>
        ))}
    </div>
  );
};
