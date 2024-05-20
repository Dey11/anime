"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { type MediaStorage } from "@vidstack/react";

export const Player = ({
  episodeNumber,
  episodeUrl,
  isAuthenticated,
}: {
  episodeNumber: string;
  episodeUrl: string;
  isAuthenticated: boolean;
}) => {
  return (
    <div>
      <MediaPlayer
        title={`Episode: ${episodeNumber}`}
        src={episodeUrl || ""}
        storage={isAuthenticated ? "storage-key" : ""}
      >
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
      {!isAuthenticated && (
        <div>
          <p className="pt-5">
            Sign in to store your watched timestamps to resume the episode
            later.
          </p>
          <p>You can also download the episode then.</p>
        </div>
      )}
    </div>
  );
};
