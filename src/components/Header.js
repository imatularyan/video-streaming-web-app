import React from "react";
import Logo from "../assets/Logo.webp";
import toogleicon from "../assets/hamburger.svg";
import searchIcon from "../assets/searchIcon.svg";
import userIcon from "../assets/userIcon.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex gap-7 p-2 items-center px-6">
      <div className=" w-5 cursor-pointer">
        <img
          src={toogleicon}
          alt="toggleicon"
          onClick={() => toggleMenuHandler()}
        />
      </div>
      <div className=" w-24 cursor-pointer">
        <img src={Logo} alt="logo" />
      </div>{" "}
      <div className="flex border-zinc-300 shadow-inner border m-auto rounded-full  w-2/6">
        <input
          type="text"
          placeholder="Search"
          className=" w-full outline-none rounded-l-full px-3 shadow-inner py-2 border-r-gray-300 border"
        />
        <img
          className="py-1 px-4 bg-gray-100 rounded-r-full w-12 shadow-inner "
          src={searchIcon}
          alt="searchIcon"
        />
      </div>
      <div className=" w-10 cursor-pointer">
        <img src={userIcon} alt="userIcon" />
      </div>
    </div>
  );
};

export default Header;
