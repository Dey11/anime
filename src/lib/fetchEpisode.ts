import axios from "axios";

const loadEpisode = async (episodeId: string) => {
  const url = `${process.env.BACKEND_URL}/watch/${episodeId}`;
  try {
    const res = await axios.get(url);
    const videoUrls = res.data.sources;
    const link = videoUrls.filter(
      (singleSource: { url: string; isM3U8: boolean; quality: string }) => {
        if (singleSource.quality === "default") {
          return true;
        }
        return false;
      }
    );
    return link[0].url;
  } catch (err) {
    console.log(err);
    return "";
  }
};

export default loadEpisode;
