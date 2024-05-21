import AddToFav from "./AddToFav";
import { auth } from "@/auth";
import { AnimeCardProps } from "@/components/animeCard";
import prisma from "@/lib/prisma";

const FavouritesSection = async ({
  id,
  title,
  image,
  releaseDate,
  subOrDub,
  status,
  type,
  totalEpisodes,
}: AnimeCardProps) => {
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
        animeId: id,
      },
    });
    if (isAnimeAlreadyFav) {
      alreadyLiked = true;
    }
  } catch (err) {
    console.log(err);
    return <div></div>;
  }

  return (
    <AddToFav
      id={id}
      liked={alreadyLiked}
      title={title}
      image={image}
      releaseDate={releaseDate}
      subOrDub={subOrDub}
      status={status}
      type={type}
      totalEpisodes={totalEpisodes}
    />
  );
};

export default FavouritesSection;
