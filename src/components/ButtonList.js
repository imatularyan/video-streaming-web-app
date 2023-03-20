import React from "react";
import { list } from "../utils/constants";

const ButtonList = () => {
  return (
    <span className="inline-block overflow-x-scroll">
      <ul className=" inline-flex flex-row my-3 cursor-pointer overflow-x-scroll whitespace-nowrap will-change-transform transition duration-75 translate-x-0 text-sm relative overflow-hidden box-border items-center leading-8">
        <li className=" my-3 mr-3 ml-6 px-3 h-8 min-w-[12px] rounded-lg hover:bg-gray-300 bg-zinc-900 text-white">
          All
        </li>
        {list.map((name, index) => (
          <li
            key={index}
            className=" my-3 mr-3 px-3 h-8 min-w-[12px] bg-gray-200 rounded-lg hover:bg-gray-300 "
          >
            {name}
          </li>
        ))}
      </ul>
    </span>
  );
};

export default ButtonList;
