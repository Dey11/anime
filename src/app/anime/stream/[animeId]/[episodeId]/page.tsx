import loadEpisode from "@/lib/fetchEpisode";
import fetchData from "@/lib/fetchAnimeData";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import DownloadButton from "@/components/custom-ui/buttons/downloadBtn";
import { Player } from "./Player";
import { auth } from "@/auth";
import PaginatedEpisodes from "./EpisodeCarousel";

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
  const session = await auth();
  const user = session?.user?.email;

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
          <div>
            <div className="pb-5 text-lg md:pb-5 md:text-3xl">
              <Link
                href={`/anime/info/${params.animeId}`}
                className="text-blue-100 hover:text-blue-500 hover:underline"
              >
                {animeInfo.title}
              </Link>
              <div className="text-md pt-2 md:pt-5">
                Episode{` ${episodeNumber}`}
              </div>
            </div>
          </div>

          <div className="max-h-3xl max-w-3xl">
            <div className="mx-2">
              <Player
                episodeNumber={episodeNumber[0].split("-")[0]}
                episodeUrl={episodeUrl[0].url}
                isAuthenticated={user ? true : false}
              />
            </div>

            <div className="pt-8 text-lg">
              <DownloadButton
                url={downloadUrl}
                isAuthenticated={user ? true : false}
              />
            </div>

            <div>
              <h1 className="py-5 text-lg md:text-3xl">Other episodes:</h1>
              <PaginatedEpisodes
                episodes={episodes}
                currEpId={params.episodeId}
                animeId={params.animeId}
                episodeNumber={parseInt(episodeNumber[0])}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StreamAnime;
