"use client";
import clsx from "clsx";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useRouter } from "next/navigation";

const SearchForm = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <form
      className={clsx(
        className == "search" && "col-span-3 grid grid-cols-2 justify-between",
        className == "header" && "flex gap-2",
      )}
      action={(formData: FormData) => {
        const query = formData.get("query") as string;
        if (!query) return;
        router.push(`/anime/search?query=${query}`);
      }}
    >
      <div className="col-span-1">
        <Input placeholder="Jujutsu Kaisen" name="query" />
      </div>
      <div className="text-center md:mt-0">
        <Button variant={"secondary"} className="px-10 md:px-5">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
