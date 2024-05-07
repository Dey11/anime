import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import Link from "next/link";

export type AnimeCardProps = {
  title: string;
  id: string;
  image: string;
  releaseDate: string;
  subOrDub: string;
};

const AnimeCard = ({
  title,
  id,
  image,
  releaseDate,
  subOrDub,
}: AnimeCardProps) => {
  return (
    <Link href={`/anime/info/${id}`} className="">
      <Card
        className="w-[200px] h-[325px] bg-gray-800 text-slate-50 border-0 
        overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl"
      >
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-md">{title}</CardTitle>
          <CardDescription className="text-xs text-slate-300">
            {releaseDate}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center pb-2">
          <Image
            className="rounded-md"
            src={image || "https://gogocdn.net"}
            width={120}
            height={120}
            alt={id}
          />
        </CardContent>
        <CardFooter className="flex justify-end text-xs ">
          <Badge variant="secondary">{subOrDub}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default AnimeCard;
