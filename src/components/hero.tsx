import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-2 pt-8">
      <div className="items-center flex justify-center">
        <div className=" ">
          <div className="text-5xl font-semibold pb-5">
            Stream Anime Without Logging In
          </div>
          <div className="text-lg text-gray-400">
            Enjoy ad-free anime streaming with the ability to download your
            favourite shows in different quality options.
          </div>
          <div className="text-center">
            <Button variant={"outline"} className="mt-5 text-md">
              Explore Animes
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          className="rounded-md hidden md:block"
          src={"/gojo.jpg"}
          width={800}
          height={800}
          alt="Gojo Satoru - JJK"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
