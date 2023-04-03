import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categories } from "../utils/constants";
import { mainCategories } from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  let categoriesList = Object.entries(categories);
  let mainCategoriesList = Object.entries(mainCategories);

  if (!isMenuOpen) return null;

  return (
    <div className=" flex-none flex-col p-4 text-sm font-light overflow-y-scroll font-Roboto h-screen">
      <div className="">
        <ul>
          {mainCategoriesList.map(([key, val] = mainCategoriesList) => (
            <Link to="/" key={key}>
              <li className=" hover:bg-gray-100 py-2 px-3 rounded-lg active:bg-gray-200 flex items-center gap-6">
                <img
                  className=" w-5"
                  alt="subscriptions"
                  src={require("../assets/" + val)}
                />
                <div>{key}</div>
              </li>
            </Link>
          ))}
          <hr className=" m-2"></hr>
          {categoriesList.map(([key, val] = categoriesList) => (
            <Link to="/">
              <li
                key={key}
                className=" py-2 px-3 rounded-lg cursor-pointer flex items-center gap-6 active:bg-gray-200 hover:bg-gray-100"
              >
                <img
                  className=" w-5"
                  alt="subscriptions"
                  src={require("../assets/" + val)}
                />
                <div>{key}</div>
              </li>
            </Link>
          ))}
        </ul>
        <hr className=" m-2"></hr>
      </div>
    </div>
  );
};

export default Sidebar;
