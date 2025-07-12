import React from "react";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import logo from "../assets/Postit.png";

const NotLogNav = () => {
  return (
    <div className="w-sm lg:w-[1440px] flex justify-between items-center mx-auto p-5">
      <nav className="w-sm flex flex-row-reverse justify-between lg:w-[1240px] lg:flex lg:flex-row lg:justify-between gap-10 lg:gap-0 mx-auto items-center  font-[harmattan]">
        <Link to={"/"}>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" m-1 lg:hidden">
            <GrMenu size={40} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-box z-5 w-52 p-2 shadow-sm"
          >
            <li>
              <Link
                to={"/welcome"}
                className="text-[24px] font-[400] text-[#292929]"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-[24px] font-[400] text-[#292929]">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to={"/sign-in"}
                className="text-[24px] font-[400] text-[#292929]"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link to={"/sign-up"}>
                <button className="flex justify-center text-center rounded-[8px] w-[132px] h-[33px] bg-[#0086b0] text-[#fffbfb] font-[harmattan] font-[400] text-[24px] cursor-pointer">
                  Get Started
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:w-[418px] lg:flex lg:items-center justify-between">
          <Link
            to={"/sign-up"}
            className="text-[24px] font-[400] text-[#292929]"
          >
            Stories
          </Link>
          <Link to={"/"} className="text-[24px] font-[400] text-[#292929]">
            Contact
          </Link>

          <Link
            to={"/sign-in"}
            className="text-[24px] font-[400] text-[#292929]"
          >
            Sign In
          </Link>

          <Link to={"/sign-up"}>
            <button className="flex justify-center text-center rounded-[8px] w-[132px] h-[33px] bg-[#0086b0] text-[#fffbfb] font-[harmattan] font-[400] text-[24px] cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NotLogNav;
