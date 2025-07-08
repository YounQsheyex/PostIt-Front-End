import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Postit.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { registerSchema } from "../../utils/formValidator";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="lg:relative">
      <div className="hidden lg:block">
        <div className="hidden lg:w-[1440px] lg:opacity-10 lg:flex lg:justify-between lg:items-center lg:mx-auto lg:p-5">
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
        <div className="hidden lg:block lg:bg lg:w-[1440px] lg:h-[616px] lg:opacity-10">
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
      <div className="w-[320px] mx-auto lg:w-[1240px] lg:mx-auto">
        <div className="w-[300px] lg:w-[653px] lg:h-[772px]  border-0 border-[#727272] lg:shadow-xl bg-[#fdfeff] lg:mx-auto   lg:p-25 lg:absolute lg:top-2 lg:right-0 lg:left-0 lg:z-40">
          <Link to={"/"}>
            <div className="absolute top-10 right-50 lg:right-10 cursor-pointer">
              <RiCloseLargeLine />
            </div>
          </Link>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[310px] lg:w-[415px] lg:h-[473px]  mt-20 lg:mt-0"
          >
            <h1 className="mt-5 text-[35px] text-[#292929] text-center font-[700] font-[harmattan]">
              Join Post<span className="text-[#0086b0]">it</span>.
            </h1>
            <p className="mt-5 font-[400] font-[harmattan] text-[20px] text-center">
              Enter your email address to create an account on Post
              <span className="text-[#0086b0]">it</span>
            </p>
            <div className="w-[280px] lg:w-[415px] h-[64px] mx-auto flex flex-col items-center mt-10 ">
              <label
                htmlFor="userName"
                className="font-[harmattan] font-[400] text-[18px] text-[#292929] mb-2"
              >
                Username
              </label>
              <input
                id="userName"
                type="text"
                className="w-full border-b-[1px] border-[#727272] text-center focus:outline-none"
                {...register("userName")}
              />
              {errors.userName && (
                <p className="text-red-500 font-[Open_Sans] font-[400] text-[14px] mt-1">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div className="w-[280px] lg:w-[415px] h-[64px] mx-auto flex flex-col items-center mt-10 ">
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
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 font-[Open_Sans] font-[400] text-[14px] mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="w-[280px] lg:w-[415px] h-[64px] mx-auto flex flex-col items-center mt-10 ">
              <label
                htmlFor="password"
                className="font-[harmattan] font-[400] text-[18px] text-[#292929] mb-2"
              >
                Paswword
              </label>
              <input
                id="password"
                type="password"
                className="w-full border-b-[1px] border-[#727272] text-center focus:outline-none"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 font-[Open_Sans] font-[400] text-[14px] mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mt-5 lg:mt-10 ml-5 lg:ml-0">
              <button className="bg-[#0086b0] font-[700] font-[harmattan] w-[280px] lg:w-[415px] h-[47px] rounded-[8px] text-[#ffffff] text-center text-[25px] cursor-pointer">
                Continue
              </button>
            </div>
            <Link to={"/sign-in"}>
              <h1 className="mt-2 lg:mt-10 text-[22px] text-[#292929] font-[700] font-[harmattan] text-center ">
                Already have an account?
                <span className="text-[#0086b0]"> Sign In</span>
              </h1>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
