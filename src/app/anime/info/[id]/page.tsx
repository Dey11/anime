import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import fetchData from "@/lib/fetchData";
import { Button } from "@/components/ui/button";
import { animeInfo } from "@/lib/fetchData";
import Link from "next/link";

const AnimeInfo = async ({ params }: { params: { id: string } }) => {
  const response: animeInfo = await fetchData(params.id);
  const episodes = response.episodes;
  const description = splitDesc(response.description);
  return (
    <div className="pt-10">
      <div className="grid md:grid-cols-6 gap-10 items-start pb-16">
        <div className=" col-span-2">
          <Image
            className="rounded-md"
            src={response.image}
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="col-span-4">
          <h1 className="text-5xl pb-5">{response.title}</h1>
          <h3 className="text-2xl text-gray-400 pb-5">
            [{response.otherName}]
          </h3>
          <div className="pb-5 flex gap-2">
            {response.genres.map((genre: string) => (
              <Badge key={genre}>{genre}</Badge>
            ))}
            <Badge>{response.type}</Badge>
            <Badge>{response.subOrDub}</Badge>
          </div>
          <div className="flex gap-10 text-gray-300 pb-8">
            <h3 className="text-xl">Released: {response.releaseDate}</h3>
            <h3 className="text-xl">Status: {response.status}</h3>
          </div>
          {description.map((miniDesc) => (
            <p className="text-md leading-loose pb-2" key={miniDesc}>
              {miniDesc}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl pb-5">Episodes:</h1>
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
