import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import { views } from "../../view.js";
import { Link } from "react-router-dom";

const tagbg = (tags) => {
  if (tags === "Technology") {
    return "bg-[#6397ef]";
  }
  if (tags === "Nature") {
    return "bg-[#41d750]";
  }
  if (tags === "Lifestyle") {
    return "bg-[#e5bf5e]";
  }
  if (tags === "Sports") {
    return "bg-[#f42a2a]";
  }
};

const AllPost = () => {
  return (
    <div className="w-full px-5 lg:px-0 lg:w-[1240px] mt-15  mx-auto lg:flex lg:flex-wrap lg:justify-between lg:items-center">
      {views.map((view, index) => {
        return (
          <div key={index}>
            <div className="w-full lg:w-[381px] mb-10">
              <div className="relative">
                <img
                  src={view.img}
                  alt=""
                  className="w-full h-[230px] lg:w-[379px] lg:h-[296px] rounded-[5px] object-cover"
                />
                <div
                  className={`w-[84px] h-[24px] ${tagbg(
                    view.tags
                  )} text-[11px] font-[600] font-[Open_Sans] text-[#fdfeff] absolute left-5 bottom-3 rounded-[5px] text-center flex justify-center items-center`}
                >
                  {view.tags}
                </div>
              </div>
              <div className="my-3 w-full lg:w-[377px]  ">
                <h1 className="font-[600] font-[Open_Sans] text-[22px] text-[#292929]">
                  {view.title}
                </h1>
              </div>
              <div className=" w-[227px] h-[24px] mt-6 flex gap-3 items-center">
                <img
                  src={view.profilePic}
                  alt=""
                  className="w-[24px] h-[24px] rounded-full"
                />
                <p className="font-[400] font-[Open_Sans] text-[12px] text-[#9a9a9a]">
                  By <span className="text-[#292929]">{view.username}</span> -
                  May 21, 2022
                </p>
              </div>
              <div className="w-full lg:w-[381px] h-[108px] mt-5">
                <p className="font-[400] font-[Open_Sans] text-[#7b7b7b] text-[15px]">
                  {view.description}
                </p>
              </div>
              <div>
                <Link
                  to={"/view-post"}
                  className="w-[113px] h-[27px] flex gap-1.5 items-center text-[#0086b0] font-[600] "
                >
                  <HiArrowSmallRight />
                  <button className="text-[#0086b0] text-[14px] font-[600] font-[Open_Sans] cursor-pointer">
                    Read More...
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllPost;
