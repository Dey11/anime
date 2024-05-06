import React from "react";
import {
  DownloadIcon,
  KeyIcon,
  LibraryIcon,
  LogInIcon,
  SettingsIcon,
  UnplugIcon,
} from "../icons";

const FeatureSection = () => {
  return (
    <div className="py-20">
      <div className="text-center text-5xl pb-14 font-semibold">
        Why Choose Us?
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 justify-items-start gap-10">
        <div className="flex gap-3 ">
          <div>
            <UnplugIcon />
          </div>
          <div>
            <div className="pb-2">Ad-Free Streaming</div>
            <div className="text-gray-400">
              Enjoy your favorite anime without any interruptions or
              distractions.
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div>
            <LibraryIcon />
          </div>
          <div>
            <div className="pb-2">Vast Library of Anime</div>
            <div className="text-gray-400">
              Explore a constantly growing collection of the best anime series
              and movies.
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div>
            <SettingsIcon />
          </div>
          <div>
            <div className="pb-2">Cross Platform Availability</div>
            <div className="text-gray-400">
              Watch your favorite anime on any device, anytime, anywhere.
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div>
            <DownloadIcon />
          </div>
          <div>
            <div className="pb-2">High Quality Player</div>
            <div className="text-gray-400">
              High quality video player so that you can enjoy the best streaming
              experience
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div>
            <KeyIcon />
          </div>
          <div>
            <div className="pb-2">Streaming Quality Options</div>
            <div className="text-gray-400">
              Choose from various streaming quality options to suit your
              internet connection and device.
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div>
            <LogInIcon />
          </div>
          <div>
            <div className="pb-2">No Login Required</div>
            <div className="text-gray-400">
              Start streaming your favorite anime without the need to create an
              account or log in.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
