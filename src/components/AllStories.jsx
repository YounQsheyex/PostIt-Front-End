import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { data } from "../../data";

const AllStories = () => {
  const [filter, setFilter] = useState("All");

  const filterStory = data.filter((story) => {
    if (filter === "All") {
      return true;
    }
    return story.store === filter;
  });
  return (
    <div className="w-sm lg:w-[1240px] mx-auto mt-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-5 lg:px-0 mb-10">
        <div className="w-[318px]">
          <h1 className="font-[harmattan] font-[700] text-[62px] text-[#292929]">
            MyStories
          </h1>
        </div>
        <div className="flex justify-center items-center w-[197px] h-[54px] bg-[#292929] rounded-[8px] cursor-pointer text-[#f0f8ff] text-[31px] font-[700] font-[harmattan]">
          <Link to={"/create-story"}>Write Story</Link>
        </div>
      </div>
      <div className="px-5 lg:px-0 flex gap-15 items-center mb-1">
        {["All", "Drafts", "Published"].map((stored, i) => {
          return (
            <button
              key={i}
              onClick={() => setFilter(stored)}
              className={`font-[harmattan] font-[400] text-[37px] ${
                filter === stored
                  ? "bg-[#0086b0] text-white rounded-[10px] p-1.5"
                  : "bg-none text-[#757575]"
              } cursor-pointer`}
            >
              {stored}
            </button>
          );
        })}
      </div>
      <hr className="hidden lg:block w-[1230px] border-[1.5px] border-[#dddddd] mb-10" />
      <div className="mt-15">
        {filterStory.map((story, index) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:justify-between my-10 px-5 lg:px-0"
            >
              <div className="w-full lg:w-[816px]">
                <div className="w-full lg:w-[587px]">
                  <h1 className="font-[600] font-[Open_Sans] text-[28px] text-[#292929]">
                    {story.title}
                  </h1>
                </div>
                <div className="w-full lg:w-[816px] my-4">
                  <p className="font-[400] font-[Open_Sans] text-[18px] lg:text-[21px] text-[#7b7b7b] leading-[42px] tracking-[2%]">
                    {story.description}
                  </p>
                </div>
                <div className="w-[98px] my-2 lg:my-0">
                  <p className="font-[Open_Sans] font-[400] italic text-[21px] text-[#757575]">
                    {story.store}
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <Link
                  to={"/update-story"}
                  className="bg-[#0086b0] w-[164px] h-[51px] rounded-[8px] text-[#f0f8ff] text-[28px] text-center font-[700] font-[harmattan] cursor-pointer flex justify-center items-center"
                >
                  Edit Post
                </Link>
                <button className="border-[1.5px] border-[#0086b0] w-[164px] h-[51px] rounded-[8px] text-[#0086b0] text-[28px] font-[700] font-[harmattan] cursor-pointer">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllStories;
