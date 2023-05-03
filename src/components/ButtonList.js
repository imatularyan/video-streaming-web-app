import React, { useState, useEffect } from "react";
import useCategories from "../utils/useCategories";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const ButtonList = () => {
  const [scroll, setScroll] = useState(false);
  const [category, setFilterCategory] = useState("");
  const [filterData, setFilterData] = useState([]);
  const categories = useCategories();

  useEffect(() => {
    if (filterData) {
      filterCategory();
    }
  }, [categories]);

  const filterCategory = async () => {
    const res = await fetch(
      `${YOUTUBE_VIDEOS_API}&videoCategoryId=${category}`
    );
    if (res.status >= 200 || res.status <= 299) {
      const json = await res.json();
      setFilterData(json?.items);
    } else {
      console.clear();
    }
  };

  // console.log("filtered data", filterData);

  return (
    <>
      {scroll && (
        <span className="w-20 border-green-800 top-20 z-10 absolute h-8 bg-gradient-to-r from-white via-slate-50 to-transparent py-1">
          <img
            className=" mr-auto"
            width="20"
            alt="arrowLeft"
            src={arrowLeft}
          />
        </span>
      )}
      <span
        className="max-w-full inline-block overflow-x-auto"
        onScroll={() => {
          setScroll(true);
        }}
      >
        <ul
          id="list-scroll"
          className="  inline-flex flex-row my-3 whitespace-nowrap text-sm overflow-hidden box-border items-center leading-8"
        >
          <Link to="/">
            <li className=" ml-3 my-3 mr-3 px-3 h-8 min-w-[12px] rounded-lg hover:bg-gray-300 bg-[#0f0f0f] text-white cursor-pointer">
              All
            </li>
          </Link>
          {categories?.map((categories) => (
            <li
              key={categories?.id}
              className=" my-3 mr-3 px-3 h-8 min-w-[12px] bg-stone-100 rounded-lg hover:bg-gray-300 cursor-pointer"
              onClick={() => setFilterCategory(categories?.id)}
            >
              {categories?.snippet?.title}
            </li>
          ))}
        </ul>
        <span className="w-20 pr-5 absolute top-20 h-8 right-0 bg-gradient-to-r from-transparent via-slate-50 to-white py-1">
          <img
            className="ml-auto"
            width="20"
            alt="arrowRight"
            src={arrowRight}
          />
        </span>
      </span>{" "}
    </>
  );
};

export default ButtonList;
