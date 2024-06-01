import Link from "next/link";
import Image from "next/image";

export type AnimeCardProps = {
  title: string;
  id: string;
  image: string;
  releaseDate: string;
  subOrDub?: string;
  episodeId?: string;
  episodeNumber?: number;
  status?: string;
  type?: string;
  episodes?: [
    {
      id: string;
      number: number;
      url: string;
    },
  ];
  totalEpisodes?: number;
  genres?: string[];
};

const AnimeCard = ({
  title,
  id,
  image,
  releaseDate,
  subOrDub,
  episodeId,
  episodeNumber,
  status,
}: AnimeCardProps) => {
  return (
    <Link href={`/anime/info/${id}`}>
      <div
        className="duration-50 relative h-48 w-28 transform-gpu overflow-hidden rounded-md
        border border-gray-300 transition-transform hover:scale-105 md:m-2 md:h-72 md:w-52"
      >
        <Image
          className="object-cover"
          src={image}
          fill
          alt={title}
          sizes="fill"
          priority={true}
        />

        <div
          className="hover:shadow-3xl absolute left-0 top-0 z-10 h-48 
        w-28 items-center justify-center bg-transparent hover:bg-black
        hover:bg-opacity-30 md:h-72 md:w-52"
        >
          <div
            className="absolute bottom-0 left-0 right-0
        bg-black bg-opacity-65 p-2
        text-center text-white"
          >
            <div className="pb-2 text-sm md:text-lg">{title}</div>
            <div className="text-sm">{releaseDate}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
