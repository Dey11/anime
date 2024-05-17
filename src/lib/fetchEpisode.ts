const loadEpisode = async (episodeId: string): Promise<FetchEpisode> => {
  const url = `${process.env.BACKEND_URL}/watch/${episodeId}`;
  try {
    // const res = await axios.get(url);
    const res = await fetch(url, { cache: "force-cache" });
    const result = await res.json();
    // console.log(result);
    const videoUrls = result.sources;
    const link = videoUrls.filter(
      (singleSource: { url: string; isM3U8: boolean; quality: string }) => {
        if (singleSource.quality === "default") {
          return true;
        }
        return false;
      },
    );
    const downloadLink = result.download;
    return { episodeUrl: link, downloadUrl: downloadLink, error: false };
  } catch (err) {
    console.log(err);
    return {
      episodeUrl: [{ url: "", isM3U8: "", quality: "" }],
      downloadUrl: "",
      error: true,
    };
  }
};

export default loadEpisode;

interface FetchEpisode {
  episodeUrl: [{ url: string; isM3U8: string; quality: string }];
  downloadUrl: string;
  error: boolean;
}
