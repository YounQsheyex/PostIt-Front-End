import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Postit.png";
import { RiCloseLargeLine } from "react-icons/ri";

const Login = () => {
  return (
    <div className="relative ">
      <div className="bg-[#f0f0f0]">
        <div className="w-[1440px] opacity-10 flex justify-between items-center mx-auto p-5">
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
        <div className="bg w-[1440px] h-[616px] opacity-10">
          <div className="w-[1240px] mx-auto font-[harmattan]">
            <div className=" w-[595px] py-20 ">
              <h1 className="text-[110px] text-[#000000] font-[700] ">
                Stay Curious.
              </h1>
              <p className="w-[540px] font-[Open_Sans] font-[400] text-[20px] leading-[35px] tracking-[2%] align-middle">
                Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
                massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
                aliquam id ut.
              </p>
              <button className="flex justify-center text-center rounded-[8px] w-[132px] h-[33px] bg-[#0086b0] text-[#fffbfb] font-[harmattan] font-[400] text-[24px] mt-10">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1240px] mx auto">
        <div className="w-[653px] h-[772px]  border-0 border-[#727272] shadow-xl bg-[#fdfeff] mx-auto p-25 absolute top-2 right-0 left-0 z-40">
          <Link to={"/"}>
            <div className="absolute top-10 right-10 cursor-pointer ">
              <RiCloseLargeLine />
            </div>
          </Link>
          <form className="w-[415px] h-[473px]">
            <h1 className="mt-5 text-[35px] text-[#292929] text-center font-[700] font-[harmattan]">
              Welcome Back
            </h1>

            <div className="w-[415px] h-[64px] mx-auto flex flex-col items-center mt-10 ">
              <label
                htmlFor="email"
                className="font-[harmattan] font-[400] text-[18px] text-[#292929] mb-2"
              >
                Your Email Address
              </label>
              <input
                id="email"
                type="text"
                className="w-full border-b-[1px] border-[#727272] text-center focus:outline-none"
              />
            </div>
            <div className="w-[415px] h-[64px] mx-auto flex flex-col items-center mt-10 ">
              <label
                htmlFor="password"
                className="font-[harmattan] font-[400] text-[18px] text-[#292929] mb-2"
              >
                Paswword
              </label>
              <input
                id="password"
                type="text"
                className="w-full border-b-[1px] border-[#727272] text-center focus:outline-none"
              />
            </div>
            <div className=" mt-10">
              <button className="bg-[#0086b0] font-[700] font-[harmattan]  w-[415px]  h-[47px] rounded-[8px] text-[#ffffff] text-center text-[25px] cursor-pointer">
                Continue
              </button>
            </div>
            <Link to={"/sign-up"}>
              <h1 className=" mt-10 text-[22px] text-[#292929] font-[700] font-[harmattan] text-center ">
                No account?
                <span className="text-[#0086b0]"> Sign Up</span>
              </h1>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
