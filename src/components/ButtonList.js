import React, { useState } from "react";
import useCategories from "../utils/useCategories";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

const ButtonList = () => {
  const [scroll, setScroll] = useState(false);
  const categories = useCategories();

  return (
    <>
      <span
        className="relative inline-block overflow-auto"
        onScroll={() => {
          setScroll(true);
        }}
      >
        <ul
          id="list-scroll"
          className=" inline-flex flex-row my-3 cursor-pointer whitespace-nowrap text-sm overflow-hidden box-border items-center leading-8"
        >
          <li className=" ml-3 my-3 mr-3 px-3 h-8 min-w-[12px] rounded-lg hover:bg-gray-300 bg-[#0f0f0f] text-white">
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
      {scroll && (
        <span className="absolute top-20 w-20 h-8 bg-gradient-to-r from-white via-slate-50 to-transparent py-1">
          <img
            className=" mr-auto"
            width="20"
            alt="arrowLeft"
            src={arrowLeft}
          />
        </span>
      )}{" "}
      <span className="absolute top-20 right-0 w-20 h-8  bg-gradient-to-r from-transparent via-slate-50 to-white py-1">
        <img
          className="ml-auto mr-5"
          width="20"
          alt="arrowRight"
          src={arrowRight}
        />
      </span>
    </>
  );
};

export default ButtonList;
