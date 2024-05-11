import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import fetchData from "@/lib/fetchAnimeData";
import { Button } from "@/components/ui/button";
import { animeInfo } from "@/lib/fetchAnimeData";
import Link from "next/link";

const AnimeInfo = async ({ params }: { params: { id: string } }) => {
  const response: animeInfo = await fetchData(params.id);
  const episodes = response.episodes;
  const description = splitDesc(response.description);
  return (
    <div className="md:pt-10 text-center md:text-left">
      <div className="md:grid md:grid-cols-6 md:gap-10 items-start md:pb-16 pb-6">
        <div className=" md:col-span-2 pb-5 flex pr-10 pl-10 pt-5 md:pr-0 md:pl-0 md:pt-0">
          <Image
            className="rounded-md"
            src={response.image}
            width={500}
            height={500}
            alt=""
          />
        </div>

        <div className="col-span-4">
          <h1 className="md:text-5xl text-2xl pb-5">
            {response.title} - {response.subOrDub}
          </h1>
          <h3 className="md:text-2xl text-lg text-gray-400 pb-5">
            [{response.otherName}]
          </h3>
          <div className="pb-5">
            {response.genres.map((genre: string) => (
              <Badge className="bg-gray-700 mr-2" key={genre}>
                {genre}
              </Badge>
            ))}
          </div>
          <div className="text-gray-300 md:pb-8 pb-5">
            <h3 className="md:text-xl text-lg">
              Released: {response.releaseDate}
            </h3>
            <h3 className="md:text-xl text-lg">Status: {response.status}</h3>
            <h3 className="md:text-xl text-lg">Status: {response.type}</h3>
          </div>
          {description.map((miniDesc) => (
            <p className="text-md leading-loose pb-2" key={miniDesc}>
              {miniDesc}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="md:text-3xl text-2xl pb-5">Episodes:</h1>
        <div className="gap-5 grid grid-cols-6 md:grid-cols-12">
          {episodes.map((episode: { id: string; number: number }) => (
            <Button asChild variant={"outline"} key={episode.id}>
              <Link href={`/anime/stream/${params.id}/${episode.id}`}>
                {episode.number}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;

const splitDesc = (description: string) => {
  const splittedDesc = description.split("\n\n");
  return splittedDesc;
};
