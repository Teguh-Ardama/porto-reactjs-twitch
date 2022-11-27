import React from "react";

const Card = ({ title, image, view, tag1, tag2 }) => {
  return (
    <div className="">
      <button className="h-[14rem] sm:h-[17rem] sm:w-60 md:h-[17rem] md:w-52 flex">
        <img
          src={image}
          alt="content"
          className="flex object-fill w-full h-full"
        />
      </button>
      <div className="truncate w-auto text-[14px]">
        <p className="font-semibold text-[18px] hover:text-[#9146FF] cursor-pointer">{title}</p>
        <p className="text-gray-600 -mt-1 mb-1 hover:text-[#9146FF] cursor-pointer">{view}K viewers</p>
        <div className="flex items-center gap-2">
          <p className="bg-[#f1f0f0] rounded-full w-auto px-4 hover:bg-[#e9e9e9] cursor-pointer">{tag1}</p>
          <p className="bg-[#f1f0f0] rounded-full w-auto px-4 hover:bg-[#e9e9e9] cursor-pointer">{tag2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
