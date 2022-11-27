import React from "react";
import games from "../Assets/stick.png";
import irl from "../Assets/mic.png";
import music from "../Assets/headphone.png";
import esport from "../Assets/trophy.png";
import creative from "../Assets/art.png";
import Category from "./Category";

const Browse = () => {
    const categories = [
        { title: "Games", icon: games },
        { title: "IRL", icon: irl },
        { title: "Music", icon: music },
        { title: "Esport", icon: esport },
        { title: "Creative", icon: creative },
    ];
  return (
    <div className="max-sm:hidden ">
      {/* Title */}
      <div className="text-[55px] font-bold">Browse</div>
      {/* Categories */}
      <div className="flex flex-wrap gap-y-6 gap-x-9 sm:gap-x-10 lg:gap-x-12">
        {categories.map((category) => (
          <Category title={category.title} icon={category.icon} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
