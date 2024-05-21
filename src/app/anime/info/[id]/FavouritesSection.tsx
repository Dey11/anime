import AddToFav from "./AddToFav";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

const FavouritesSection = async ({ animeId }: { animeId: string }) => {
  const session = await auth();
  if (!session?.user) {
    return <></>;
  }
  const userId = session.user.id;
  let alreadyLiked = false;
  try {
    const isAnimeAlreadyFav = await prisma.favouriteAnime.findFirst({
      where: {
        userId,
        animeId,
      },
    });
    if (isAnimeAlreadyFav) {
      alreadyLiked = true;
    }
  } catch (err) {
    console.log(err);
    return <div></div>;
  }

  return <AddToFav animeId={animeId} liked={alreadyLiked} />;
};

export default FavouritesSection;
