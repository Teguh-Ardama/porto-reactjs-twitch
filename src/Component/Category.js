import React from "react";

const Category = ({ title, icon }) => {
  return (
    <div className="relative items-center shadow-lg shadow-gray-400 rounded-full cursor-pointer">
      <div className="bg-[#9146FF] hover:bg-[#5C16C5] sm:w-[16rem] h-[3rem] rounded-md px-4">
        <p className="text-white font-bold text-[30px]">{title}</p>
      </div>
      <div className="absolute w-28 h-28 -top-8 right-0 ">
        <img src={icon} alt="categories"/>
      </div>
    </div>
  );
};

export default Category;
