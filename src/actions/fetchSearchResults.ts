"use server";

import { AnimeCardProps } from "@/components/AnimeCard";

async function fetchSearchResults(query: string, page: number) {
  const url = process.env.BACKEND_URL;
  // const res = await axios.get(`${url}/${query}?page=1`);
  const res = await fetch(`${url}/${query}?page=1`, {
    next: { revalidate: 604800 },
  });
  const result = await res.json();
  return result;
}

export default fetchSearchResults;
