import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          duration: 20,
        }}
      >
        <CarouselContent className="-ml-2">
          <CarouselItem className="basis-2/3 pl-4">
            <Link href={"/anime/info/chainsaw-man"}>
              <div className="relative justify-center rounded-md overflow-hidden border-2 border-gray-300">
                <Image
                  className="object-cover mx-auto w-auto h-auto"
                  src={"/chainsawman.jpg"}
                  alt="chainsaw man"
                  width={836}
                  height={470}
                  sizes="cover"
                  priority
                />

                <div
                  className="absolute bottom-0 left-0 right-0 md:pb-10 bg-black 
                  md:pt-5 md:pl-10 md:text-4xl font-semibold bg-opacity-50 text-white
                  text-center md:text-left py-2 pl-0 text-xl px-2 md:px-0"
                >
                  Chainsaw Man
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-2/3 pl-4">
            <Link
              href={
                "/anime/info/mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2"
              }
            >
              <div className="relative justify-center rounded-md overflow-hidden border-2 border-gray-300">
                <Image
                  className="object-cover mx-auto w-auto h-auto"
                  src={"/mushoku2.jpg"}
                  alt="jobless reincarnation"
                  width={836}
                  height={470}
                  sizes="cover"
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 md:pb-10 bg-black 
                  md:pt-5 md:pl-10 md:text-4xl font-semibold bg-opacity-50 text-white
                  text-center md:text-left py-2 pl-0 text-xl px-2 md:px-0"
                >
                  Mushoku Tensei Season 2
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-2/3 pl-4">
            <Link href={"/anime/info/jujutsu-kaisen-tv-2nd-season"}>
              <div className="relative justify-center rounded-md overflow-hidden border-2 border-gray-300">
                <Image
                  className="object-cover mx-auto w-auto h-auto"
                  src={"/jjk.jpg"}
                  alt="jujutsu kaisen"
                  width={836}
                  height={470}
                  sizes="cover"
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 md:pb-10 bg-black 
                  md:pt-5 md:pl-10 md:text-4xl font-semibold bg-opacity-50 text-white
                  text-center md:text-left py-2 pl-0 text-xl px-2 md:px-0"
                >
                  Jujutsu Kaisen Season 2
                </div>
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
