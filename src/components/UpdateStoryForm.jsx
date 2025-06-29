import React from "react";
import { useState } from "react";

const UpdateStoryForm = () => {
  const [options, setOptions] = useState("");

  const handleValue = (e) => {
    setOptions(e.target.value);
  };
  return (
    <div className="w-sm lg:w-[1240px] mx-auto p-5 lg:p-0">
      <h1 className="w-[292px] font-[harmattan] font-[700] text-[40px] lg:text-[60px] text-[#292929]">
        Create Story
      </h1>
      <form>
        <div className="relative">
          <input
            type="text"
            id="title"
            className="w-full lg:w-[1239px] rounded-[5px] border-[1px] border-[#dddddd] lg:placeholder:text-[24px] placeholder:font-[700] placeholder:font-[harmattan] placeholder:text-[#757575] px-15 lg:px-20 py-2 focus:outline-none"
          />
          <label
            htmlFor="title"
            className="absolute left-4 top-2 lg:top-0 text-[#a1a0a0] text-[20px] lg:text-[30px] font-[700] font-[harmattan]"
          >
            Title:
          </label>
        </div>
        <div className="my-5">
          <label
            htmlFor="tags"
            className="w-[20px] h-[18px] text-[#757575]"
          ></label>
          <select
            id="tags"
            value={options}
            onChange={handleValue}
            className={`w-full lg:w-[1239px] rounded-[5px] border-[1px] border-[#dddddd] placeholder:text-[24px] placeholder:font-[700] placeholder:font-[harmattan] placeholder:text-[#757575] px-4 py-2 focus:outline-none ${
              options == ""
                ? "text-[#757575] font-[700] font-[harmattan] text-[24px]"
                : "text-[#292929]"
            }`}
          >
            <option value={""} disabled>
              Tags
            </option>
            <option value={"technology"}>Technology</option>
            <option value={"nature"}>Nature</option>
            <option value={"lifestyle"}>Lifestyle</option>
            <option value={"sports"}>Sports</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="story"
            className="w-[20px] h-[18px] text-[#757575]"
          ></label>
          <textarea
            id="story"
            placeholder="Write your story......."
            className="w-full lg:w-[1239px] h-[568px] rounded-[5px] border-[1px] border-[#dddddd] placeholder:text-[24px] placeholder:font-[700] placeholder:font-[harmattan] placeholder:text-[#757575] px-4 py-2 focus:outline-none"
          ></textarea>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <button className="w-full lg:w-[439px] h-[67px] rounded-[5px] bg-[#0086b0] text-[#f0f8ff] font-[700] font-[harmattan] text-[30px] cursor-pointer">
            Update Story
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateStoryForm;
