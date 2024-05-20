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
};

const AnimeCard = ({
  title,
  id,
  image,
  releaseDate,
  subOrDub,
  episodeId,
  episodeNumber,
}: AnimeCardProps) => {
  return (
    <Link href={`/anime/info/${id}`}>
      <div
        className="duration-50 relative h-52 w-32 transform-gpu overflow-hidden rounded-md border
         border-gray-300 transition-transform hover:scale-105 md:h-72 md:w-52"
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
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-65 
        p-2 text-center
        text-white"
        >
          <div className="font-semibold">{title}</div>
          <div className="  text-xs">{releaseDate}</div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
