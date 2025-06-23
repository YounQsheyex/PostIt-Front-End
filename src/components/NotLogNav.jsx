import React from "react";
import logo from "../assets/Postit.png";

const NotLogNav = () => {
  return (
    <div className="w-[1440px] flex justify-between items-center mx-auto p-5">
      <nav className="flex justify-between gap-10 mx-auto items-center w-[1240px] font-[harmattan]">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="w-[418px] flex items-center justify-between">
          <a href="#" className="text-[24px] font-[400] text-[#292929]">
            Stories
          </a>
          <a href="$" className="text-[24px] font-[400] text-[#292929]">
            Contact
          </a>
          <a href="" className="text-[24px] font-[400] text-[#292929]">
            Sign In
          </a>

          <button className="flex justify-center text-center rounded-[8px] w-[132px] h-[33px] bg-[#0086b0] text-[#fffbfb] font-[harmattan] font-[400] text-[24px]">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NotLogNav;
