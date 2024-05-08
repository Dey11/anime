import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import loadEpisode from "@/lib/fetchEpisode";
import fetchData from "@/lib/fetchData";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const StreamAnime = async ({
  params,
}: {
  params: { episodeId: string; animeId: string };
}) => {
  const animeInfo = await fetchData(params.animeId);
  const episodes = animeInfo.episodes;
  const response = await loadEpisode(params.episodeId);
  const episodeNumber = params.episodeId.split("-").slice(-1);
  return (
    <div>
      Stream {params.animeId}, {` ${episodeNumber}`}
      <MediaPlayer title={`Episode: ${episodeNumber}`} src={response}>
        <MediaProvider />
        <DefaultVideoLayout thumbnails={""} icons={defaultLayoutIcons} />
      </MediaPlayer>
      <div>
        <h1 className="text-3xl pb-5">Other episodes:</h1>
        <div className="gap-5 grid grid-cols-6 md:grid-cols-12">
          {episodes.map((episode: { id: string; number: number }) => (
            <Button
              asChild
              variant={"outline"}
              key={episode.id}
              className={
                params.episodeId == episode.id ? "bg-blue-500 border-0" : ""
              }
            >
              <Link href={`/anime/stream/${params.animeId}/${episode.id}`}>
                {episode.number}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamAnime;
