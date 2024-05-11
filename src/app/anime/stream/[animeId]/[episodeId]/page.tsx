import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import loadEpisode from "@/lib/fetchEpisode";
import fetchData from "@/lib/fetchAnimeData";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { episodeId: string; animeId: string };
}): Promise<Metadata> {
  const response = await fetchData(params.animeId);
  const title = response.title;
  const description = `Stream ${title} episode ${params.episodeId
    .split("-")
    .slice(-1)} for free, without ads.`;
  const img = response.image;
  return {
    title,
    description,
    openGraph: {
      images: [img],
    },
  };
}

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
      <div className="md:text-3xl text-lg md:pb-5 pb-5">
        {animeInfo.title}
        <div className="md:pt-5 pt-2 text-md">Episode{` ${episodeNumber}`}</div>
      </div>
      <div className="mx-2">
        <MediaPlayer title={`Episode: ${episodeNumber}`} src={response}>
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>
      <div>
        <h1 className="md:text-3xl text-lg py-5">Other episodes:</h1>
        <div className="md:gap-5 gap-2 grid grid-cols-6 md:grid-cols-12">
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
