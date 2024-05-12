"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchSection = () => {
  const router = useRouter();

  return (
    <div className="md:grid md:grid-cols-6 md:pt-20 pb-10 gap-4 items-center">
      <div className=" col-span-3 text-center md:pb-0 pb-5">
        <h1 className="md:text-5xl text-3xl md:pb-5 pb-2">Binge watch now</h1>
        <p className="text-gray-400">
          Search for your favourite anime and start streaming right away!
        </p>
      </div>
      <form
        className="col-span-3 grid grid-cols-2 justify-between"
        action={(formData: FormData) => {
          const query = formData.get("query") as string;
          if (!query) return;
          router.push(`/anime/search?query=${query}`);
        }}
      >
        <div className="col-span-1">
          <Input placeholder="Jujutsu Kaisen" name="query" />
        </div>
        <div className="md:mt-0 text-center">
          <Button variant={"secondary"} className="px-10 md:px-5">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SearchSection;
