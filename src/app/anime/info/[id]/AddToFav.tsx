"use client";

import addFavAnimeToDb from "@/actions/addFavAnime";
import clsx from "clsx";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { AnimeCardProps } from "@/components/AnimeCard";

export interface FavCardProps extends AnimeCardProps {
  liked: boolean;
}

const AddToFav = ({
  id,
  title,
  image,
  releaseDate,
  subOrDub,
  status,
  type,
  totalEpisodes,
  liked,
}: FavCardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked);
  const { toast } = useToast();

  return (
    <div className="ml-2 md:ml-5">
      <form
        action={async () => {
          try {
            const addFavAction = await addFavAnimeToDb({
              id,
              liked: isLiked,
              title,
              image,
              releaseDate,
              subOrDub,
              status,
              type,
              totalEpisodes,
            });
            if (isLiked) {
              toast({
                title: "Added to favourites!",
                description: `${id} has been added to your list`,
              });
            } else {
              toast({
                title: "Removed from favourites",
                description: `${id} has been removed from your list`,
              });
            }
          } catch (err) {
            console.log(err);
            toast({
              variant: "destructive",
              description: "Oops! An error occured.",
            });
          }
        }}
      >
        <button>
          <Heart
            size={80}
            strokeWidth={2}
            className={clsx(
              isLiked && "fill-red-500 text-red-600/75",
              !isLiked && "",
            )}
            onClick={(e) => {
              setIsLiked(() => !isLiked);
            }}
          />
        </button>
      </form>
    </div>
  );
};

export default AddToFav;
