"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export default async function addFavAnimeToDb(animeId: string, like: boolean) {
  try {
    const session = await auth();
    if (!session?.user) {
      throw Error("Error occured");
    }
    if (like) {
      const addFavAnimeToDb = await prisma.favouriteAnime.create({
        data: {
          animeId: animeId,
          userId: session.user.id || "",
        },
      });
    } else {
      const removeFavAnimeFromDb = await prisma.favouriteAnime.delete({
        where: {
          animeId: animeId,
        },
      });
    }
    console.log(addFavAnimeToDb);
  } catch (err) {
    console.log(err);
  }
}
