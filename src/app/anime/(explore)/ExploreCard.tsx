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
        className="duration-50 relative h-48 w-28 transform-gpu overflow-hidden rounded-md border
         border-gray-300 transition-transform hover:scale-105 md:m-2 md:h-72 md:w-52"
      >
        <Image
          className="object-cover hover:bg-black hover:bg-opacity-65"
          src={image}
          fill
          alt={title}
          sizes="fill"
          priority={priority}
        />
        <div
          className="absolute bottom-0 left-0 right-0 bg-black 
        bg-opacity-65 p-2 text-center
        text-white"
        >
          <div className="pb-2 text-sm md:text-lg">{title}</div>
          <div className="text-sm">Episode:{` ${episodeNumber}`}</div>
        </div>
        <div
          className="absolute left-0 top-0 z-10 h-48 w-28 
        items-center justify-center bg-transparent hover:bg-black hover:bg-opacity-30 hover:shadow-xl md:h-72 md:w-52"
        ></div>
      </div>
    </Link>
  );
};

export default ExplorePageCard;
