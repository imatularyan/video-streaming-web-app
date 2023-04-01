import React from "react";
import useCategories from "../utils/useCategories";

const ButtonList = () => {
  const categories = useCategories();
  return (
    <span className="inline-block overflow-auto">
      <ul className=" inline-flex flex-row my-3 cursor-pointer overflow-x-scroll whitespace-nowrap will-change-transform transition duration-75 translate-x-0 text-sm relative overflow-hidden box-border items-center leading-8">
        <li className=" my-3 mr-3 px-3 h-8 min-w-[12px] rounded-lg hover:bg-gray-300 bg-[#0f0f0f] text-white">
          All
        </li>
        {categories.map((categories, index) => (
          <li
            key={index}
            className=" my-3 mr-3 px-3 h-8 min-w-[12px] bg-stone-100 rounded-lg hover:bg-gray-300 "
          >
            {categories.snippet.title}
          </li>
        ))}
      </ul>
    </span>
  );
};

export default ButtonList;
