"use server";

export type animeInfo = {
  id: string;
  title: string;
  genres: string[];
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: "sub" | "dub";
  type: string;
  status: "Completed" | "Ongoing";
  otherName: string;
  episodes: episodes[];
};

export interface AnimeDetails {
  id: string;
  title: string;
  genres: string[];
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: "sub" | "dub";
  type: string;
  status: "Completed" | "Ongoing";
  otherName: string;
  episodes: episodes[];
}

type episodes = {
  id: string;
  number: number;
};

const fetchData = async (id: string): Promise<AnimeDetails> => {
  try {
    // console.log(process.env.BACKEND_URL);
    const res = await fetch(`${process.env.BACKEND_URL}/info/${id}`, {
      next: { revalidate: 86400 },
    });

    const result = await res.json();
    return result;
  } catch (err) {
    console.log("meh");
    console.log(err);

    return {
      id: "",
      title: "",
      genres: [],
      totalEpisodes: 0,
      image: "",
      releaseDate: "",
      description: "",
      subOrDub: "sub",
      type: "",
      status: "Ongoing",
      otherName: "",
      episodes: [{ id: "", number: 0 }],
    };
  }
};

export default fetchData;
