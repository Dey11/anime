import axios from "axios";

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

type episodes = {
  id: string;
  number: number;
};

const fetchData = async (id: string) => {
  try {
    // const result = await axios.get(`${process.env.BACKEND_URL}/info/${id}`);
    const res = await fetch(`${process.env.BACKEND_URL}/info/${id}`, {
      next: { revalidate: 86400 },
    });

    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default fetchData;
