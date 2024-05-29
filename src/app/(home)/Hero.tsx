import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { SquareLibrary, Tv } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-14 text-center md:grid md:grid-cols-2 md:pb-20 md:text-left">
      <div className="flex items-center justify-center">
        <div className=" ">
          <div className="pb-5 text-4xl font-semibold md:pb-10 md:text-5xl">
            Stream Anime Without Logging In
          </div>
          <div className="text-md text-gray-400 md:text-lg">
            Enjoy ad-free anime streaming with the ability to download your
            favourite shows in different quality options.
          </div>
          <div className="text-center">
            <Button
              asChild
              variant={"default"}
              className="text-md mt-10 items-center"
            >
              <Link href={"/anime"}>
                <span className="pr-1">Explore our collection</span>
                <Tv size={24} strokeWidth={1.75} className="pb-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          className="rounded-md pt-10 md:pt-0"
          src={"/gojo.jpg"}
          width={800}
          height={800}
          alt="Gojo Satoru - JJK"
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
