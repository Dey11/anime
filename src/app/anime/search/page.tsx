"use client";

import SearchBar from "@/components/custom-ui/searchBar";
import fetchSearchResults from "@/actions/fetchSearchResults";
import { Suspense, useState, useEffect } from "react";
import { AnimeCardProps } from "@/components/custom-ui/animeCard";
import AnimeCard from "@/components/custom-ui/animeCard";
import SearchBtn from "@/components/custom-ui/searchBtn";
import { useSearchParams } from "next/navigation";

const Anime = () => {
  const [searchResults, setSearchResults] = useState<AnimeCardProps[] | null>(
    null
  );
  const [errorState, setErrorState] = useState("");

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const fetchQueryResults = async () => {
    if (params.get("query") as string) {
      setSearchResults(null);
      try {
        const res = await fetchSearchResults(params.get("query") as string, 1);
        if (res.results.length == 0) {
          setErrorState(
            "No Anime found with that name. Please consider using a different name"
          );
          return;
        }
        setSearchResults(res.results);
        setErrorState("");
      } catch (err) {
        console.log(err);
        setErrorState(
          "No Anime found with that name. Please consider using a different name"
        );
      }
    }
  };

  useEffect(() => {
    fetchQueryResults();
  }, []);

  return (
    <div>
      <div className="text-center pb-10 md:text-4xl text-xl md:font-semibold">
        Search for your favourite anime now!
      </div>
      <div className="flex justify-center ">
        <form
          className=" flex justify-between gap-5"
          action={fetchQueryResults}
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
      <div className="grid grid-cols-2 justify-items-center overflow-hidden md:grid-cols-3 lg:grid-cols-5 md:gap-5 pt-10 gap-y-3 gap-x-1">
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
      {errorState ? (
        <div className="text-center text-slate-300">{errorState}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Anime;

export const dynamic = "force-dynamic";
