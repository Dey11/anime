"use server";

import { AnimeCardProps } from "@/components/custom-ui/animeCard";
import axios from "axios";

async function fetchSearchResults(
  query: string
): Promise<AnimeCardProps[] | null> {
  const url = process.env.BACKEND_URL;
  const res = await axios.get(`${url}/${query}?page=1`);
  return res.data.results;
}

export default fetchSearchResults;
