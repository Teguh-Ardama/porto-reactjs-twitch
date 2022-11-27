import React from "react";
import imgfooter from "../Assets/footer.png";

const Footer = () => {
  return (
    <div className="sticky bottom-0 bg-[#5C16C5] flex items-center justify-between p-[0.4rem]">
      <div className="flex w-10 h-10  items-center text-[18px] text-white whitespace-nowrap gap-2">
        <img src={imgfooter} alt="" />
        <p className="font-bold">Join the Twitch community! </p>
        <p className="max-md:hidden bold">Discover the best live streams anywhere.</p>
      </div>
      <button className="bg-white hover:bg-[#f1f0f0] items-center px-2 py-1 mr-8 rounded-md text-[14px]">
        <p className="text-black font-semibold">Sign up</p>
      </button>
    </div>
  );
};

export default Footer;
