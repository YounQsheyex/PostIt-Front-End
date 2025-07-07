import React from "react";
import scrabble from "../assets/scrabble.png";

const AllPostHero = () => {
  return (
    <div className="w-full h-[514px] mx-auto p-5 bg-[#f5f6f8] mt-2">
      <div className="w-full lg:w-[1240px] mx-auto py-15 flex justify-between">
        <div className="w-full lg:w-[540px] h-[281px]">
          <h1 className="w-full lg:w-[538px] font-[harmattan] font-[700] text-[50px] lg:text-[75px] text-[#292929]">
            You’ve got a story, Post<span className="text-[#0086b0]">it</span>.
          </h1>
          <p className="w-full lg:w-[538px] lg:h-[105px] font-[400] font-[Open_Sans] text-[20px] text-[#292929]">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
        </div>
        <div className="hidden lg:block w-[647px] h-[333px]">
          <img
            src={scrabble}
            alt=""
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default AllPostHero;
