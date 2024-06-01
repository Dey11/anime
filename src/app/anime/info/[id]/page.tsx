import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import fetchData from "@/lib/fetchAnimeData";
import { AnimeDetails } from "@/lib/fetchAnimeData";
import { Metadata } from "next";
import FavouritesSection from "./FavouritesSection";
import { Suspense } from "react";
import EpisodesSection from "./EpisodesSection";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await fetchData(params.id);
  const description = response.description;
  const title = response.title;
  const img = response.image;
  return {
    title,
    description,
    openGraph: {
      images: [img],
    },
  };
}

const AnimeInfo = async ({ params }: { params: { id: string } }) => {
  const response: AnimeDetails = await fetchData(params.id);
  const episodes = response.episodes;
  const description = splitDesc(response.description);
  return (
    <div className="text-center md:pt-10 md:text-left">
      <div className="items-start pb-6 md:grid md:grid-cols-6 md:gap-10 md:pb-16">
        <div className=" flex pb-5 pl-10 pr-10 pt-5 md:col-span-2 md:pl-0 md:pr-0 md:pt-0">
          <Image
            className="rounded-md"
            src={response.image}
            width={500}
            height={500}
            alt=""
            priority={true}
          />
        </div>

        <div className="col-span-4">
          <h1 className="pb-5 text-2xl md:text-5xl">
            <span className="flex items-center">
              {response.title} - {response.subOrDub}
              <Suspense>
                <FavouritesSection
                  id={params.id}
                  title={response.title}
                  image={response.image}
                  releaseDate={response.releaseDate}
                  subOrDub={response.subOrDub}
                  status={response.status}
                  type={response.type}
                  totalEpisodes={response.totalEpisodes}
                />
              </Suspense>
            </span>
          </h1>
          <h3 className="pb-5 text-lg text-gray-400 md:text-2xl">
            [{response.otherName}]
          </h3>
          <div className="pb-5">
            {response.genres.map((genre: string) => (
              <Badge className="mr-2 bg-gray-700" key={genre}>
                {genre}
              </Badge>
            ))}
          </div>
          <div className="pb-5 text-gray-300 md:pb-8">
            <h3 className="text-lg md:text-xl">
              Released: {response.releaseDate}
            </h3>
            <h3 className="text-lg md:text-xl">Status: {response.status}</h3>
            <h3 className="text-lg md:text-xl">Status: {response.type}</h3>
          </div>
          {description.map((miniDesc) => (
            <p className="text-md pb-2 leading-loose" key={miniDesc}>
              {miniDesc}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="pb-5 text-2xl md:text-3xl">Episodes:</h1>
        <EpisodesSection episodes={episodes} animeId={params.id} />
      </div>
    </div>
  );
};

export default AnimeInfo;

const splitDesc = (description: string) => {
  const splittedDesc = description.split("\n\n");
  return splittedDesc;
};
