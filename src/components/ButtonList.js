import React from "react";
import { list } from "../utils/helper";

const ButtonList = () => {
  return (
    <div>
      <ul className="flex flex-wrap min-w-min my-3 gap-2 cursor-pointer overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        {list.map((name, index) => (
          <li
            key={index}
            className=" px-3 py-2 bg-gray-200 rounded-md font-medium text-sm hover:bg-gray-300 h-min"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonList;
