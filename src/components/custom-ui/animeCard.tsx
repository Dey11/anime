import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type AnimeCardProps = {
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
    <Card className="w-[200px] h-[325px] bg-gray-800 text-slate-50 border-0">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-md">{title}</CardTitle>
        <CardDescription className="text-xs text-slate-300">
          {releaseDate}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center pb-2">
        <Image
          className="rounded-md"
          src={image}
          width={150}
          height={150}
          alt={id}
        />
      </CardContent>
      <CardFooter className="flex justify-end text-xs text-slate-300">
        {subOrDub}
      </CardFooter>
    </Card>
  );
};

export default AnimeCard;
