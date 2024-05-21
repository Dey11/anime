"use client";

import addFavAnimeToDb from "@/actions/addFavAnime";
import clsx from "clsx";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const AddToFav = ({ animeId, liked }: { animeId: string; liked: boolean }) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked);
  const { toast } = useToast();

  return (
    <div>
      <form
        action={async () => {
          try {
            const addFavAction = await addFavAnimeToDb(animeId, isLiked);
            if (isLiked) {
              toast({
                title: "Added to favourites!",
                description: `${animeId} has been added to your list`,
              });
            } else {
              toast({
                title: "Removed from favourites",
                description: `${animeId} has been removed from your list`,
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
