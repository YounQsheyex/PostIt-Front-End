import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#292929] mt-10">
      <div className="w-[1240px] mx-auto py-10">
        <div className="flex justify-between items-center">
          <div className="w-[427px]">
            <h1 className="font-[700] font-[harmattan] text-[24px] text-[#ffffff]">
              About Post
              <span className="font-[700] text-[24px] text-[#0086b0]">it</span>.
            </h1>
            <p className="font-[400] font-[Open_Sans] text-[16px] text-[#ffffff] leading-[28px] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
              rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
              que maeae tortoere necsem commodo ac.
            </p>
          </div>
          <div className="w-[290px]">
            <h1 className="font-[700] font-[harmattan] text-[24px] text-[#fdfeff]">
              Quick Menu
            </h1>
            <div className="flex justify-between items-center font-[400] font-[Open_Sans] text-[16px] text-[#fdfeff] leading-[27px]">
              <div className="flex flex-col justify-between">
                <a href="">Home</a>
                <a href="">Stories</a>
                <a href="">Trending Stories</a>
                <a href="">Popular Stories</a>
              </div>
              <div className="flex flex-col justify-between">
                <a href="">Sign Up</a>
                <a href="">Log In</a>
                <a href="">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="w-[337px] ">
            <h1 className="font-[700] font-[Open_Sans] text-[18px] text-[#fdfeff] mb-5">
              Subscribe to our newsletter
            </h1>
            <div className="relative">
              <input
                type="text"
                className="relative w-[337px] h-[39px] rounded-[2px] bg-[#fdfeff]"
              />
              <button className="flex items-center gap-1.5 p-2 w-[103px] h-[27px] bg-[#0086b0] text-[12px] text-[#fdfeff] font-[600] font-[Open_Sans] rounded-[2px] absolute right-2 top-1.5">
                SubScribe
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-10 border-[1px] border-[#fdfeff] " />

        <div className="mt-5 w-[254px] flex justify-between items-center text-[#fdfeff] ml-auto">
          <h1 className="font-[open_Sans] font-[600] text-[14px]">
            Terms and Policy
          </h1>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
