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
    <div className="">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          duration: 20,
        }}
      >
        <CarouselContent className="-ml-4">
          <CarouselItem className="basis-2/3 pl-4">
            <Link href={"/anime/info/chainsaw-man"}>
              <div className="relative justify-center overflow-hidden rounded-md border-2 border-gray-300">
                <Image
                  className="mx-auto h-auto w-auto object-cover"
                  src={"/chainsawman.jpg"}
                  alt="chainsaw man"
                  width={836}
                  height={470}
                  sizes="cover"
                  priority
                />

                <div
                  className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 
                  px-2 py-2 pl-0 text-center text-xs font-semibold
                  text-white md:px-0 md:pb-10 md:pl-10 md:pt-5 md:text-left md:text-4xl"
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
              <div className="relative justify-center overflow-hidden rounded-md border-2 border-gray-300">
                <Image
                  className="mx-auto h-auto w-auto object-cover"
                  src={"/mushoku2.jpg"}
                  alt="jobless reincarnation"
                  width={836}
                  height={470}
                  sizes="cover"
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 
                  px-2 py-2 pl-0 text-center text-xs font-semibold
                  text-white md:px-0 md:pb-10 md:pl-10 md:pt-5 md:text-left md:text-4xl"
                >
                  Mushoku Tensei Season 2
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-2/3 pl-4">
            <Link href={"/anime/info/jujutsu-kaisen-tv-2nd-season"}>
              <div className="relative justify-center overflow-hidden rounded-md border-2 border-gray-300">
                <Image
                  className="mx-auto h-auto w-auto object-cover"
                  src={"/jjk.jpg"}
                  alt="jujutsu kaisen"
                  width={836}
                  height={470}
                  sizes="cover"
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 
                  px-2 py-2 pl-0 text-center text-xs font-semibold
                  text-white md:px-0 md:pb-10 md:pl-10 md:pt-5 md:text-left md:text-4xl"
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
