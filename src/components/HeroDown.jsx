import React from "react";
import lifestyle from "../assets/lifestylepic.png";
import nature from "../assets/naturepics.png";
import techpic from "../assets/techPics.png";

const data = [
  {
    title: "Lifestyle",
    description: "The 20 Biggest Fashion Companies In Nigeria 2022",
    img: lifestyle,
  },
  {
    title: "Nature",
    description: "The 20 Biggest Fashion Companies In Nigeria 2022",
    img: nature,
  },
  {
    title: "Technology",
    description: "The 20 Biggest Fashion Companies In Nigeria 2022",
    img: techpic,
  },
];

const getBgColor = (title) => {
  if (title === "Lifestyle") {
    return "bg-[#e5bf5e]";
  } else if (title === "Nature") {
    return "bg-[#41d750]";
  } else if (title === "Technology") {
    return "bg-[#6397e5]";
  }
  return "bg-[#f0f0f0]";
};

const HeroDown = () => {
  return (
    <div>
      <div className="w-[1240px] mx-auto mt-10 p-5 flex items-center justify-between border-[0.5px] border-[#bbbbbb] rounded-[3px]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[381px] flex items-center justify-between"
            >
              <div className="w-[146px] h-[96px] rounded-[3px]">
                <img src={item.img} alt="img" />
              </div>
              <div className="py-1.5 flex flex-col justify-between">
                <div
                  className={`${getBgColor(
                    item.title
                  )} w-[89px] h-[24px] rounded-[5px] flex items-center`}
                >
                  <p className="mx-auto text-[14px] font-[600] font-[Open_Sans]  text-[#fdfeff] ">
                    {" "}
                    {item.title}
                  </p>
                </div>
                <div className="w-[217px]">
                  <p className="font-[400] font-[Open_Sans] text-[16px] text-[#000000] leading-[28px] tracking-[2%] mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="tybg w-[1240px] mx-auto mt-10 flex flex-col items-center justify-center text-center">
        <div className="w-[646px] flex flex-col items-center mx-auto py-10">
          <h1 className="mt-5 font-[Open_Sans] font-[700] text-[20px] text-[#292929] ">
            Try Post
            <span className="font-[700] font-[Open_Sans] text-[#0086b0]">
              it
            </span>
            .
          </h1>
          <p className="my-10 w-[646px] font-[Open_Sans] font-[400] text-[20px]">
            Do you want to write or discover stories from writers on any topic?
          </p>
          <div className="flex items-center gap-0">
            <input
              className="w-[340px] h-[39px] bg-[#fffbfb] p-2  text-[#000000] placeholder:text-[#6d6d6d] rounded-bl-[8px] rounded-tl-[8px]"
              type="text"
              placeholder="Email Address"
            />
            <button className="w-[156px] h-[39px] rounded-br-[8px] rounded-tr-[8px] bg-[#0086b0] text-[#fffbfb] font-[harmattan] text-[24px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDown;
