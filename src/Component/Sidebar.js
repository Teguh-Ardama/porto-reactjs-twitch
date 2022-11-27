import React from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import profile1 from "../Assets/profile1.png";
import profile2 from "../Assets/profile2.jpg";
import profile3 from "../Assets/profile3.png";
import profile4 from "../Assets/profile4.png";
import Channel from "./Channel";

const Sidebar = () => {
  const channels = [
    { profile: profile1, name: "sinatraa", game: "Valorant", view: "5.9"},
    { profile: profile2, name: "BeyondTheSummit", game: "Dota 2", view: "3.6" },
    { profile: profile3, name: "iiTzTimmy", game: "Valorant", view: "5.3" },
    { profile: profile4, name: "antonychenn", game: "Counter Strike: Global Offensive", view: "59" },
    { profile: profile1, name: "sinatraa", game: "Valorant", view: "5.9"},
    { profile: profile2, name: "BeyondTheSummit", game: "Dota 2", view: "3.6" },
    { profile: profile3, name: "iiTzTimmy", game: "Valorant", view: "5.3" },
    { profile: profile4, name: "antonychenn", game: "Counter Strike: Global Offensive", view: "59" },
    { profile: profile1, name: "sinatraa", game: "Valorant", view: "5.9"},
    { profile: profile2, name: "BeyondTheSummit", game: "Dota 2", view: "3.6" },
    { profile: profile3, name: "iiTzTimmy", game: "Valorant", view: "5.3" },
    { profile: profile4, name: "antonychenn", game: "Counter Strike: Global Offensive", view: "59" },
  ];
  return (
    <div className="h-screen sticky top-14 bg-[#f1f0f0] p-2 border-r">
      {/* Title */}
      <div className="hidden lg:flex whitespace-nowrap gap-2 items-center font-bold justify-between">
        <p className="text-[13px]">RECOMMENDED CHANNELS</p>
        <BsArrowBarLeft className="text-[20px] cursor-pointer"/>
      </div>
      {/* Recommended */}
      <div className="flex flex-col gap-2 pt-4">
        {channels.map((channel) => (
          <Channel profile={channel.profile} name={channel.name} game={channel.game} view={channel.view} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
