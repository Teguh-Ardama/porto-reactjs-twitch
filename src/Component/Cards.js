import React from "react";
import { FiSearch } from "react-icons/fi";
import valorant from "../Assets/valorant.jpg";
import chatting from "../Assets/chatting.jpg";
import genshin from "../Assets/genshin.jpg";
import dota2 from "../Assets/dota2.jpg";
import overwatch2 from "../Assets/overwatch2.jpg";
import Card from "./Card";

const Cards = () => {
  const cards = [
    {
      title: "Valorant",
      image: valorant,
      view: "102",
      tag1: "Shooter",
      tag2: "FPS",
    },
    { title: "Just Chatting", image: chatting, view: "407", tag1: "IRL" },
    {
      title: "Genshin Impact",
      image: genshin,
      view: "25.6",
      tag1: "Action",
      tag2: "RPG",
    },
    {
      title: "Dota 2",
      image: dota2,
      tag1: "FPS",
      view: "48.2",
      tag2: "Shooter",
    },
    {
      title: "Over Watch 2",
      image: overwatch2,
      view: "46.3",
      tag1: "MOBA",
      tag2: "Action",
    },
    {
      title: "Valorant",
      image: valorant,
      view: "102",
      tag1: "Shooter",
      tag2: "FPS",
    },
    { title: "Just Chatting", image: chatting, view: "407", tag1: "IRL" },
    {
      title: "Genshin Impact",
      image: genshin,
      view: "25.6",
      tag1: "Action",
      tag2: "RPG",
    },
    {
      title: "Dota 2",
      image: dota2,
      tag1: "FPS",
      view: "48.2",
      tag2: "Shooter",
    },
    {
      title: "Over Watch 2",
      image: overwatch2,
      view: "46.3",
      tag1: "MOBA",
      tag2: "Action",
    },
    {
      title: "Valorant",
      image: valorant,
      view: "102",
      tag1: "Shooter",
      tag2: "FPS",
    },
    { title: "Just Chatting", image: chatting, view: "407", tag1: "IRL" },
    {
      title: "Genshin Impact",
      image: genshin,
      view: "25.6",
      tag1: "Action",
      tag2: "RPG",
    },
    {
      title: "Dota 2",
      image: dota2,
      tag1: "FPS",
      view: "48.2",
      tag2: "Shooter",
    },
    {
      title: "Over Watch 2",
      image: overwatch2,
      view: "46.3",
      tag1: "MOBA",
      tag2: "Action",
    },
    {
      title: "Valorant",
      image: valorant,
      view: "102",
      tag1: "Shooter",
      tag2: "FPS",
    },
    { title: "Just Chatting", image: chatting, view: "407", tag1: "IRL" },
    {
      title: "Genshin Impact",
      image: genshin,
      view: "25.6",
      tag1: "Action",
      tag2: "RPG",
    },
    {
      title: "Dota 2",
      image: dota2,
      tag1: "FPS",
      view: "48.2",
      tag2: "Shooter",
    },
    {
      title: "Over Watch 2",
      image: overwatch2,
      view: "46.3",
      tag1: "MOBA",
      tag2: "Action",
    },
    {
      title: "Valorant",
      image: valorant,
      view: "102",
      tag1: "Shooter",
      tag2: "FPS",
    },
    { title: "Just Chatting", image: chatting, view: "407", tag1: "IRL" },
    {
      title: "Genshin Impact",
      image: genshin,
      view: "25.6",
      tag1: "Action",
      tag2: "RPG",
    },
    {
      title: "Dota 2",
      image: dota2,
      tag1: "FPS",
      view: "48.2",
      tag2: "Shooter",
    },
    {
      title: "Over Watch 2",
      image: overwatch2,
      view: "46.3",
      tag1: "MOBA",
      tag2: "Action",
    },
    {
      title: "Valorant",
      image: valorant,
      view: "102",
      tag1: "Shooter",
      tag2: "FPS",
    },
    { title: "Just Chatting", image: chatting, view: "407", tag1: "IRL" },
    {
      title: "Genshin Impact",
      image: genshin,
      view: "25.6",
      tag1: "Action",
      tag2: "RPG",
    },
    {
      title: "Dota 2",
      image: dota2,
      tag1: "FPS",
      view: "48.2",
      tag2: "Shooter",
    },
    {
      title: "Over Watch 2",
      image: overwatch2,
      view: "46.3",
      tag1: "MOBA",
      tag2: "Action",
    },
  ];
  return (
    <div>
      {/* Title */}
      <div className="w-full flex items-center gap-x-4 mb-8 font-bold text-[20px] pt-12">
        <div className="flex relative cursor-pointer">
          <p className="text-[#9146FF] text-[18px]">Categories</p>
          <div className="absolute -bottom-4 w-full h-0.5 bg-[#9146FF] flex items-center justify-center"></div>
        </div>
        <p className="cursor-pointer">Live Channels</p>
      </div>
      {/* Filter */}
      <div className="hidden lg:flex items-center">
        <div className="w-full flex items-center relative ">
          <p className="font-bold mr-2">Filter by Tag</p>
          <input
            type="search"
            placeholder="Filter by Tag"
            className="w-[15rem] lg:w-[20rem] xl:w-[25rem] py-2 px-8 rounded-lg bg-[#e9e9e9] outline-[#772CE8]"
          />
          <FiSearch className="absolute left-28" />
        </div>
        <div className="w-full flex items-center relative justify-end right-3 gap-x-2">
          <label
            for="sort"
            class="font-bold text-gray-900"
          >
            Sort by
          </label>
          <select
            id="sort"
            class="bg-gray-200 border border-gray-300 text-sm rounded-md focus:ring-[#772CE8] focus:border-gray-500 px-2 py-1"
          >
            <option value="recommended" selected>Recommended For You</option>
            <option value="viewer">Viewer &#40;High to Low&#41;</option>
            <option value="viewer">Viewer &#40;Low to High&#41;</option>
          </select>
        </div>
      </div>
      {/* Cards */}
      <div className="pt-5 gap-4 pb-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 xxxl:grid-cols-6 4xl:grid-cols-7">
        {cards.map((card) => (
          <Card
            title={card.title}
            image={card.image}
            view={card.view}
            tag1={card.tag1}
            tag2={card.tag2}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
