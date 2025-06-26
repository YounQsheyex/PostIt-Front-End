import React from "react";
import scrabble from "../assets/scrabble.png";

const HeroLoggedIn = () => {
  return (
    <div className="w-[350px] lg:w-[1440px] h-[514px] lg:p-20 mx-auto">
      <div className="w-[330px] lg:w-[1240px] mx-auto lg:flex lg:justify-between items-center p-5">
        <div className="mt-10 lg:mt-0 w-[300px] lg:w-[538px] h-[302px]">
          <h1 className="text-[50px] lg:text-[75px] text-[#292929] font-[700] font-[harmattan]">
            Welcome Maria,
          </h1>
          <p className="my-5 text-[20px] font-[400] font-[Open_Sans] text-[#000000] lg:w-[538px] ">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <div className="mt-5 w-[480px] flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-0 ">
            <button className="w-[230px] h-[53px] rounded-[5px] bg-[#0086b0] font-[700] text-[30px] font-[harmattan] text-[#f0f8ff] cursor-pointer">
              My Stories
            </button>
            <button className="w-[230px] h-[53px] rounded-[5px] border-[1px] border-[#0086b0] font-[700] text-[30px] font-[harmattan] text-[#0086b0] cursor-pointer">
              Go to Feed
            </button>
          </div>
        </div>
        <div className="hidden lg:block w-[538px] h-[302px] lg:rotate-3">
          <img src={scrabble} alt="" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroLoggedIn;
