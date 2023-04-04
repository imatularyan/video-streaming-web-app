import React, { useState } from "react";
import Logo from "../assets/Logo.webp";
import toogleicon from "../assets/hamburger.svg";
import searchIcon from "../assets/searchIcon.svg";
import userIcon from "../assets/userIcon.svg";
import videoCam from "../assets/videoCam.svg";
import bell from "../assets/bell.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import useResults from "../utils/useResults";
import useSuggestions from "../utils/useSuggestions";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  useResults(searchQuery);
  useSuggestions(searchQuery, setSuggestions);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex gap-7 items-center font-light h-14 px-4">
      <div className="flex px-3 gap-6">
        <div className=" w-[19px] cursor-pointer">
          <img
            src={toogleicon}
            alt="toggleicon"
            onClick={() => toggleMenuHandler()}
          />
        </div>
        <div className=" w-[90px] cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="flex  m-auto rounded-full w-[600px] h-10">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className=" w-full outline-none rounded-l-full px-4 border border-gray-300 focus:border-blue-800 z-10 shadow-inner"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            setShowSuggestions(false);
          }}
        />

        <Link to="/results">
          {showSuggestions && (
            <div
              className={
                "absolute w-[535px] top-12 h-fit rounded-xl z-50 shadow-lg border-gray-300 border-l border-r bg-white "
              }
            >
              <ul>
                {suggestions.map((searchList) => (
                  <li
                    key={searchList}
                    className="py-2 px-3 hover:bg-gray-100 flex transition-transform duration-1000 my-2"
                  >
                    <img
                      className="w-6 mr-3"
                      src={searchIcon}
                      alt="searchIcon"
                    />
                    {searchList}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Link>
        <Link to="/results">
          <div className="rounded-r-full bg-gray-100 h-full w-[70px] border-l-0 border border-gray-300 p-[5px] cursor-pointer">
            <div className=" w-7 m-auto">
              <img className="w-full" src={searchIcon} alt="searchIcon" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <div className=" w-8 p-1 cursor-pointer rounded-full hover:bg-gray-100">
          <img className="w-6" src={videoCam} alt="userIcon" />
        </div>
        <div className=" w-8 p-1 cursor-pointer rounded-full hover:bg-gray-100">
          <img className="w-6" src={bell} alt="userIcon" />
        </div>
        <div className=" w-8 cursor-pointer">
          <img className="w-full rounded-full" src={userIcon} alt="userIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
