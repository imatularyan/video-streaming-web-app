import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.webp";
import toogleicon from "../assets/hamburger.svg";
import searchIcon from "../assets/searchIcon.svg";
import userIcon from "../assets/userIcon.svg";
import videoCam from "../assets/videoCam.svg";
import bell from "../assets/bell.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = ({ setError }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [resultsVisible, setResultsVisible] = useState("invisible");

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
        getSearchData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const getSearchData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=+${searchQuery}&maxResults=50&key=${GOOGLE_API_KEY}`,
      {
        Authorization: GOOGLE_API_KEY,
        Accept: "application/json",
      }
    );
    const jsonData = await response.json();
    console.log(jsonData);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex gap-7 p-2 items-center px-6 font-light subpixel-antialiased">
      <div className=" w-5 cursor-pointer">
        <img
          src={toogleicon}
          alt="toggleicon"
          onClick={() => toggleMenuHandler()}
        />
      </div>
      <div className=" w-24 cursor-pointer">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
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
            setResultsVisible("visible");
          }}
        />
        <div
          className={
            "absolute w-[535px] bg-white top-12 h-fit shadow-lg border-l border-r border-gray-300 rounded-xl border z-50 py-3 " +
            resultsVisible
          }
        >
          {searchQuery.length >= null
            ? showSuggestions && (
                <ul>
                  {suggestions.map((searchList) => (
                    <li
                      key={searchList}
                      className="py-2 px-3 hover:bg-gray-100 flex"
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
              )
            : null}
        </div>
        <div className="rounded-r-full bg-gray-100 h-full w-[70px] border-l-0 border border-gray-300 p-[5px] cursor-pointer">
          <div className=" w-7 m-auto">
            <img className="w-full" src={searchIcon} alt="searchIcon" />
          </div>
        </div>
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
