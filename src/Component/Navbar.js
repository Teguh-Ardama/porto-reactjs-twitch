import React from "react";
import logo from "../Assets/logo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { CgCrown } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-white px-4 py-[0.6rem] lg:px-8 justify-between flex shadow-sm shadow-gray-200">
      {/* Left */}
      <button className="flex items-center gap-5 font-semibold">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <div className="flex relative">
          <p className="text-[#9146FF] text-[18px]">Browse</p>
            <div className="absolute -bottom-4 w-16 h-0.5 bg-[#9146FF] flex items-center justify-center"></div>
        </div>
        <div className="p-2 hover:bg-[#f7f7f8] rounded-md">
          <BsThreeDotsVertical className="text-[20px] " />
        </div>
      </button>
      {/* Middle */}
      <div className="flex items-center">
        <div className="hidden sm:flex relative w-full mx-4">
          <input
            type="search"
            placeholder="Search "
            className="sm:w-[10rem] md:w-[15rem] lg:w-[25rem] xl:w-[30rem] py-2 rounded-l-lg pl-4 bg-[#e9e9e9] outline-[#772CE8]"
          />
          <button className="absolute bg-[#f1f0f0] h-full w-12 -right-[3.1rem] flex items-center justify-center rounded-r-lg text-white">
            <FiSearch className="text-[25px] mr-1 text-black cursor-not-allowed"/>
          </button>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center gap-5 font-semibold">
        <button className="relative pr-2">
          <CgCrown className="text-[25px] hover:bg-[#f1f0f0]" />
          <div className="absolute left-1 -top-1 w-7 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce hover:animate-pulse">
            <p className="text-white text-[14px]">60</p>
          </div>
        </button>
        <div className="">
          <button className="w-full py-1 px-2 bg-[#f7f7f8] hover:bg-[#f1f0f0] rounded-md">
            Log In
          </button>
        </div>
        <div className="">
          <button className="w-full py-1 px-2 hover:bg-[#5C16C5] bg-[#9146FF] text-white rounded-md">
            Sign Up
          </button>
        </div>
        <div className="p-2 hover:bg-[#f7f7f8] rounded-md cursor-pointer">
        <AiOutlineUser className="text-[25px]"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
