import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import loadEpisode from "@/lib/fetchEpisode";

const StreamAnime = async ({ params }: { params: { episodeId: string } }) => {
  const response = await loadEpisode(params.episodeId);
  return (
    <div>
      StreamAnime
      {params.episodeId}
      <MediaPlayer title="Sprite Fight" src={response}>
        <MediaProvider />
        <DefaultVideoLayout thumbnails={""} icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};

export default StreamAnime;
