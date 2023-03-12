import React from "react";
import Logo from "../assets/Logo.webp";
import Hamburger from "../assets/hamburger.svg";
import searchIcon from "../assets/searchIcon.svg";
import userIcon from "../assets/userIcon.svg";

const Header = () => {
  return (
    <div className="flex gap-7 p-5">
      <div className=" w-5 cursor-pointer">
        <img src={Hamburger} alt="Hamburger" />
      </div>
      <div className=" w-24 cursor-pointer">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex border-zinc-800 border m-auto rounded-full w-1/3">
        <input
          type="text"
          className=" w-full outline-none rounded-l-full px-3"
        />
        <img
          className="py-2 px-4 bg-gray-300 rounded-r-full w-14"
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
