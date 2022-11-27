import React from "react";

const Channel = ({ profile, name, game, view }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center w-full cursor-pointer">
        <div className="w-[2.8rem] h-[2.8rem] flex">
          <img
            src={profile}
            alt="profile"
            className="rounded-full object-fill h-full w-full"
          />
        </div>
        <div className="hidden lg:flex flex-col pl-2 w-full">
          <p className="font-semibold text-[14px]">{name}</p>
          <p className="text-[14px] truncate w-[90%]">{game}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center cursor-pointer">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
        <p className="text-[14px]">{view}K</p>
      </div>
    </div>
  );
};

export default Channel;
