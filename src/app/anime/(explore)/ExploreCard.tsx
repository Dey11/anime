import Link from "next/link";
import Image from "next/image";

export type ExplorePageCardProps = {
  id: string;
  title: string;
  image: string;
  episodeId: string;
  episodeNumber: number;
  priority: boolean;
};

const ExplorePageCard = ({
  id,
  title,
  image,
  episodeId,
  episodeNumber,
  priority,
}: ExplorePageCardProps) => {
  return (
    <Link href={`/anime/stream/${id}/${episodeId}`}>
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
          priority={priority}
        />
        <div
          className="absolute bottom-0 left-0 right-0 text-center p-2 
        bg-black bg-opacity-65
        text-white"
        >
          <div className="text-sm md:text-lg pb-2">{title}</div>
          <div className="text-sm">Episode:{` ${episodeNumber}`}</div>
        </div>
      </div>
    </Link>
  );
};

export default ExplorePageCard;
