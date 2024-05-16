import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { SquareLibrary, Tv } from "lucide-react";

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-2 pt-14 md:pb-20 md:text-left text-center">
      <div className="items-center flex justify-center">
        <div className=" ">
          <div className="md:text-5xl text-4xl font-semibold md:pb-10 pb-5">
            Stream Anime Without Logging In
          </div>
          <div className="md:text-lg text-md text-gray-400">
            Enjoy ad-free anime streaming with the ability to download your
            favourite shows in different quality options.
          </div>
          <div className="text-center">
            <Button
              asChild
              variant={"default"}
              className="mt-10 text-md items-center"
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
          className="rounded-md md:pt-0 pt-10"
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
