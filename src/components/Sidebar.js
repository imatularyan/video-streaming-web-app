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
    <div className=" flex-none flex-col py-5 px-5 text-sm overflow-auto shadow-md">
      <div className=" w-52 h-screen min-w-max">
        <ul>
          {mainCategoriesList.map(([key, val] = mainCategoriesList) => (
            <Link to="/" key={key}>
              <li className=" hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-Roboto active:bg-gray-200 flex items-center gap-6">
                <img
                  className=" w-6"
                  alt="subscriptions"
                  src={require("../assets/" + val)}
                />
                <div>{key}</div>
              </li>
            </Link>
          ))}
          <hr className=" m-2"></hr>
          {categoriesList.map(([key, val] = categoriesList) => (
            <li
              key={key}
              className=" hover:bg-gray-100 p-2 rounded-lg cursor-pointer flex items-center gap-6"
            >
              <img
                className=" w-6"
                alt="subscriptions"
                src={require("../assets/" + val)}
              />
              <div>{key}</div>
            </li>
          ))}
        </ul>
        <hr className=" m-2"></hr>
      </div>
    </div>
  );
};

export default Sidebar;
