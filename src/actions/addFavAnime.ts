"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { FavCardProps } from "@/app/anime/info/[id]/AddToFav";
import { revalidatePath } from "next/cache";

export default async function addFavAnimeToDb({
  id,
  liked,
  title,
  image,
  releaseDate,
  subOrDub,
  status,
  type,
  totalEpisodes,
}: FavCardProps) {
  try {
    const animeId = id;
    const session = await auth();
    if (!session?.user) {
      throw Error("Error occured");
    }
    if (liked) {
      const addFavAnimeToDb = await prisma.favouriteAnime.create({
        data: {
          animeId,
          userId: session.user.id!,
          title,
          image,
          releaseDate,
          subOrDub,
          status,
          type,
          totalEpisodes,
        },
      });
    } else {
      const removeFavAnimeFromDb = await prisma.favouriteAnime.delete({
        where: {
          animeId: animeId,
          userId: session.user.id!,
        },
      });
    }
    revalidatePath(`/anime/info/${animeId}`);
  } catch (err) {
    console.log(err);
  }
}
