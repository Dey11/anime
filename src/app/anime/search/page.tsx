"use client";

import SearchBar from "@/components/custom-ui/searchBar";
import fetchSearchResults from "@/actions/fetchSearchResults";
import { Suspense, useState } from "react";
import { AnimeCardProps } from "@/components/custom-ui/animeCard";
import AnimeCard from "@/components/custom-ui/animeCard";
import SearchBtn from "@/components/custom-ui/searchBtn";

const Anime = () => {
  const [searchResults, setSearchResults] = useState<AnimeCardProps[] | null>(
    null
  );

  return (
    <div>
      <div className="text-center pb-10 md:text-4xl text-xl md:font-semibold">
        Search for your favourite anime now!
      </div>
      <div className="flex justify-center ">
        <form
          className=" flex justify-between gap-5"
          action={async (formData) => {
            const query = formData.get("query") as string;
            if (!query) {
              return;
            }
            try {
              const res = await fetchSearchResults(query, 1);
              setSearchResults(res.results);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <Suspense>
            <div className="">
              <SearchBar />
            </div>
          </Suspense>
          <div className="">
            <SearchBtn />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 justify-items-center overflow-hidden md:grid-cols-3 lg:grid-cols-5 md:gap-5 pt-10">
        {searchResults ? (
          searchResults.map((result) => {
            return (
              <AnimeCard
                title={result.title}
                id={result.id}
                image={result.image}
                releaseDate={result.releaseDate}
                subOrDub={result.subOrDub}
                key={result.id}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Anime;

export const dynamic = "force-dynamic";
