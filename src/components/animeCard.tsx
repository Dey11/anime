import Link from "next/link";
import Image from "next/image";

export type AnimeCardProps = {
  title: string;
  id: string;
  image: string;
  releaseDate: string;
  subOrDub: string;
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
        className="md:w-52 md:h-72 w-32 h-52 relative rounded-md border border-gray-300
         overflow-hidden transition-transform duration-50 transform-gpu hover:scale-105"
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
          className="absolute bottom-0 left-0 right-0 text-center p-2 
        bg-black bg-opacity-65
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
