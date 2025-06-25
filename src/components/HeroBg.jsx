import React from "react";
import { Link } from "react-router-dom";

const HeroBg = () => {
  return (
    <div className="bg w-sm lg:w-[1440px] h-[616px]">
      <div className="w-sm lg:w-[1240px] mx-auto font-[harmattan]">
        <div className="w-[350px] py-10 lg:w-[595px] lg:py-20 ">
          <h1 className="text-[70px] px-5 lg:px-0 lg:text-[110px] text-[#000000] font-[700] ">
            Stay Curious.
          </h1>
          <p className="px-5 lg:px-0 w-[320px] lg:w-[540px] font-[Open_Sans] font-[400] text-[18px] lg:text-[20px] leading-[35px] tracking-[2%] align-middle">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <Link to={"/sign-up"}>
            <button className="flex justify-center text-center rounded-[8px] w-[180px] lg:w-[132px] h-[33px] bg-[#0086b0] text-[#fffbfb] font-[harmattan] font-[400] text-[24px] mt-10 cursor-pointer ml-5 lg:ml-0">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBg;
