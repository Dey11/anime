import React from "react";
import {
  DownloadIcon,
  KeyIcon,
  LibraryIcon,
  LogInIcon,
  SettingsIcon,
  UnplugIcon,
} from "./icons";
import {
  BookHeart,
  History,
  Play,
  ShieldQuestion,
  Skull,
  UserSearch,
} from "lucide-react";

const LoggedInFeats = () => {
  return (
    <div className="pb-10 pt-20 md:py-20">
      <div className="pb-10 text-center text-3xl font-semibold md:pb-14 md:text-5xl">
        Make an Account with us!
      </div>
      <div className="grid grid-cols-2 justify-items-start gap-4 md:grid-cols-3 md:gap-10">
        <div className="flex gap-3 ">
          <div>
            <BookHeart />
          </div>
          <div>
            <div className="pb-2">Add favourite animes</div>
            <div className="text-gray-400">
              Favourite animes have a separate new section now, no more
              navigating repeatedly every session.
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div>
            <Play />
          </div>
          <div>
            <div className="pb-2">Resume watching from where you left off</div>
            <div className="text-gray-400">
              Resume from the time you left your unwatched episode. No seeking
              the slider anymore, enjoy streaming what you love.
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div>
            <History />
          </div>
          <div>
            <div className="pb-2">
              Store history of all your watched animes and episodes (coming
              soon!)
            </div>
            <div className="text-gray-400">
              Save history of the animes you watch. And rewatch them if you
              want. You decide.
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div>
            <ShieldQuestion />
          </div>
          <div>
            <div className="pb-2">
              An exclusive level up system for doing what you love (coming
              soon!)
            </div>
            <div className="text-gray-400">
              Now level up completing quests daily. Feature in the leaderboard
              and brag about it.
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div>
            <Skull />
          </div>
          <div>
            <div className="pb-2">Leaderboards! (coming soon!)</div>
            <div className="text-gray-400">
              Weebs can now compete with each other on the basis of points
              earned by watching anime and completing quests.
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div>
            <UserSearch />
          </div>
          <div>
            <div className="pb-2">Customizable profiles (coming soon!)</div>
            <div className="text-gray-400">
              Customize your profile however you like and show if off to the
              world. Shareable & customizable profiles are in the works!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInFeats;
