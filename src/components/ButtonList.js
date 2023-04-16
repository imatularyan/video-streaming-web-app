import React, { useState, useEffect } from "react";
import useCategories from "../utils/useCategories";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const ButtonList = () => {
  const [scroll, setScroll] = useState(false);
  const [category, setFilterCategory] = useState(" ");
  const [filterData, setFilterData] = useState([]);
  const categories = useCategories();

  useEffect(() => {
    if (filterData) {
      filterCategory();
      console.clear();
    }
  }, [category]);

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

  console.log("filtered data", filterData);

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
          <Link to="/">
            <li className=" ml-3 my-3 mr-3 px-3 h-8 min-w-[12px] rounded-lg hover:bg-gray-300 bg-[#0f0f0f] text-white">
              All
            </li>
          </Link>
          {categories?.map((categories) => (
            <li
              key={categories?.id}
              className=" my-3 mr-3 px-3 h-8 min-w-[12px] bg-stone-100 rounded-lg hover:bg-gray-300 "
              onClick={() => setFilterCategory(categories?.id)}
            >
              {categories?.snippet?.title}
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
