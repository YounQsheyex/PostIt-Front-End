import React from "react";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import logo from "../assets/Postit.png";
import profilepic from "../assets/profilepic.jpg";

const NavLoggedIn = () => {
  return (
    <div className="w-sm lg:w-full flex justify-between items-center mx-auto p-5 shadow-lg">
      <nav className="w-sm flex flex-row-reverse justify-between lg:w-[1240px] lg:flex lg:flex-row lg:justify-between gap-10 lg:gap-0 mx-auto items-center  font-[harmattan]">
        <Link to={"/welcome"}>
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
              <Link to={""} className="text-[24px] font-[400] text-[#292929]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:w-[418px] lg:flex lg:items-center justify-between">
          <Link
            to={"/welcome"}
            className="text-[24px] font-[400] text-[#292929]"
          >
            Stories
          </Link>
          <Link
            to={"/welcome"}
            className="text-[24px] font-[400] text-[#292929]"
          >
            Contact
          </Link>
          <img
            src={profilepic}
            alt=""
            className="w-[54px] h-[54px] rounded-full"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavLoggedIn;
