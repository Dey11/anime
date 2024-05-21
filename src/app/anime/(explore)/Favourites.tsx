import { reduceName } from "@/lib/utils";
import ExplorePageCard, { ExplorePageCardProps } from "./exploreCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import AnimeCard from "@/components/animeCard";

const fetchFavourites = async (userId: string) => {
  try {
    const favs = await prisma.favouriteAnime.findMany({
      where: {
        userId,
      },
    });
    return favs;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

const Favourites = async () => {
  const session = await auth();
  if (!session?.user) {
    return <div></div>;
  }

  const favs = await fetchFavourites(session.user.id || "");

  if (favs == -1) {
    return (
      <div className="pt-10 text-xl md:text-3xl">
        <h1 className="pb-8">Favourite Animes:</h1>
        <div className="pb-10">
          <div className="flex items-center justify-center">
            An error occured. Please refresh the page or try again later
          </div>
        </div>
      </div>
    );
  }
  if (favs.length == 0) {
    return (
      <div className="pt-10 text-xl md:text-3xl">
        <h1 className="pb-8">Favourite Animes:</h1>
        <div className="pb-10">
          <div className="flex items-center justify-center">
            Nothing to show here. Add an anime to favourites first.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-10 text-xl md:text-3xl">
      <h1 className="pb-5">Favourite Animes:</h1>
      <div className="">
        <Carousel
          opts={{
            align: "start",
            loop: false,
            duration: 20,
            slidesToScroll: 2,
          }}
        >
          <CarouselContent className="-ml-2">
            {favs.map((fav) => (
              <CarouselItem
                className="basis-2/2 md:basis-5/5 pb-2 pl-3 text-sm md:text-lg"
                key={fav.animeId}
              >
                <AnimeCard
                  title={fav.title}
                  id={fav.animeId}
                  image={fav.image}
                  releaseDate={fav.releaseDate}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Favourites;
