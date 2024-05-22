import LoadingCard from "@/components/loadingCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LoadingCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
        duration: 20,
        slidesToScroll: 2,
      }}
    >
      <CarouselContent className="-ml-2">
        <CarouselItem className="basis-2/2 md:basis-5/5 pb-2 pl-3 text-sm md:text-lg">
          <LoadingCard />
        </CarouselItem>
        <CarouselItem className="basis-2/2 md:basis-5/5 pb-2 pl-3 text-sm md:text-lg">
          <LoadingCard />
        </CarouselItem>
        <CarouselItem className="basis-2/2 md:basis-5/5 pb-2 pl-3 text-sm md:text-lg">
          <LoadingCard />
        </CarouselItem>
        <CarouselItem className="basis-2/2 md:basis-5/5 pb-2 pl-3 text-sm md:text-lg">
          <LoadingCard />
        </CarouselItem>
        <CarouselItem className="basis-2/2 md:basis-5/5 pb-2 pl-3 text-sm md:text-lg">
          <LoadingCard />
        </CarouselItem>
        <CarouselItem className="basis-2/2 md:basis-5/5 pb-2 pl-3 text-sm md:text-lg">
          <LoadingCard />
        </CarouselItem>
        <CarouselItem className="basis-2/2 md:basis-5/5 pb-2 pl-3 text-sm md:text-lg">
          <LoadingCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default LoadingCarousel;
