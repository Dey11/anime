"use client";

import SearchBar from "@/components/custom-ui/searchBar";
import fetchSearchResults from "@/actions/fetchSearchResults";
import { Suspense, useState } from "react";
import AnimeCard, { AnimeCardProps } from "@/components/custom-ui/animeCard";
import SearchBtn from "@/components/custom-ui/searchBtn";

const Anime = () => {
  const [searchResults, setSearchResults] = useState<AnimeCardProps[] | null>(
    null
  );

  return (
    <div>
      <div className="text-center pb-10 text-4xl font-semibold">
        Search for your favourite anime now!
      </div>
      <form
        className="flex mx-20 gap-10 items-center"
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
          <SearchBar />
        </Suspense>
        <SearchBtn />
      </form>
      <div className="grid grid-cols-2 justify-items-center overflow-hidden md:grid-cols-5 gap-5 pt-10">
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