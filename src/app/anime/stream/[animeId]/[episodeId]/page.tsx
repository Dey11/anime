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
import DownloadButton from "@/components/custom-ui/buttons/downloadBtn";

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
  const episodeUrl = response.episodeUrl;
  const downloadUrl = response.downloadUrl;

  const episodeNumber = params.episodeId.split("-").slice(-1);
  return (
    <div>
      {(animeInfo.id === "" || episodeUrl[0].url === "") && (
        <div className="text-2xl">Error. Invalid URL/Anime.</div>
      )}
      {animeInfo.id && episodeUrl[0].url && (
        <div>
          <div className="pb-5 text-lg md:pb-5 md:text-3xl">
            {animeInfo.title}
            <div className="text-md pt-2 md:pt-5">
              Episode{` ${episodeNumber}`}
            </div>
          </div>
          <div className="mx-2">
            <MediaPlayer
              title={`Episode: ${episodeNumber}`}
              src={episodeUrl[0].url}
            >
              <MediaProvider />
              <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
          </div>

          <div className="pt-8 text-lg">
            <DownloadButton url={downloadUrl} />
          </div>

          <div>
            <h1 className="py-5 text-lg md:text-3xl">Other episodes:</h1>
            <div className="grid grid-cols-6 gap-2 md:grid-cols-12 md:gap-5">
              {episodes.map((episode: { id: string; number: number }) => (
                <Button
                  asChild
                  key={episode.id}
                  variant={
                    params.episodeId == episode.id ? "default" : "secondary"
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
      )}
    </div>
  );
};

export default StreamAnime;
