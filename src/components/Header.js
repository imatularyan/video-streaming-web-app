import React, { useState, useEffect, useRef } from "react";
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
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showUser, setShowUser] = useState(false);
  const [showNotification, setShowNotificaton] = useState(false);
  const [showLive, setShowLive] = useState(false);

  const dispatch = useDispatch();
  useResults(searchQuery);
  useSuggestions(searchQuery, setSuggestions);

  const userMenu = useRef();
  const imgUserMenu = useRef();
  const notification = useRef();
  const imgNotification = useRef();
  const live = useRef();
  const imgLive = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (e.target !== userMenu.current && e.target !== imgUserMenu.current) {
        setShowUser(false);
      }
      if (
        e.target !== notification.current &&
        e.target !== imgNotification.current
      ) {
        setShowNotificaton(false);
      }
      if (e.target !== live.current && e.target !== imgLive.current) {
        setShowLive(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex gap-7 items-center font-light h-14 px-7">
      <div className="flex gap-6">
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
          className="relative w-full outline-none rounded-l-full px-4 border border-gray-300 focus:border-blue-800 z-10 shadow-inner"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />

        {showSuggestions && (
          <ul
            className="absolute w-[535px] top-12 h-fit rounded-xl z-50 shadow-lg border-gray-300 border-l border-r bg-white"
            onBlur={() => {
              setShowSuggestions(false);
            }}
          >
            {suggestions.map((searchList) => (
              <Link to="/result" key={searchList}>
                <li className="py-2 px-3 hover:bg-gray-100 flex transition-transform duration-1000 my-2">
                  <img className="w-6 mr-3" src={searchIcon} alt="searchIcon" />
                  {searchList}
                </li>
              </Link>
            ))}
          </ul>
        )}
        <Link to="/result">
          <div className="rounded-r-full bg-gray-100 h-full w-[70px] border-l-0 border border-gray-300 p-[5px] cursor-pointer">
            <div className=" w-7 m-auto">
              <img className="w-full" src={searchIcon} alt="searchIcon" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div className=" w-8 p-1 cursor-pointer rounded-full hover:bg-gray-100">
          <img
            ref={imgLive}
            className="w-6"
            onClick={() =>
              !showLive
                ? (setShowLive(true),
                  setShowNotificaton(false),
                  setShowUser(false))
                : setShowLive(false)
            }
            src={videoCam}
            alt="userIcon"
          />
        </div>
        {showLive && (
          <span
            ref={live}
            className="p-3 leading-loose text-sm absolute h-fit w-36 z-50 bg-gray-300 backdrop-blur-lg right-5 top-11 rounded-xl filter backdrop:blur-3xl"
          >
            <ul>
              <Link to="#">
                <li onClick={() => setShowLive(false)}>Upload video</li>
              </Link>
              <Link to="#">
                <li>Go live</li>
              </Link>
              <Link to="#">
                <li>Create post</li>
              </Link>
            </ul>
          </span>
        )}
        <div className=" relative w-8 p-1 cursor-pointer rounded-full hover:bg-gray-100">
          <img
            ref={imgNotification}
            className="w-6"
            onClick={() =>
              !showNotification
                ? (setShowNotificaton(true),
                  setShowLive(false),
                  setShowUser(false))
                : setShowNotificaton(false)
            }
            src={bell}
            alt="userIcon"
          />
        </div>
        {showNotification && (
          <span
            ref={notification}
            className=" absolute h-[400px] w-80 z-50 bg-gray-300 backdrop-blur-lg right-16 top-11 rounded-xl filter backdrop:blur-3xl"
          ></span>
        )}
        <div className=" relative w-7 cursor-pointer">
          <img
            ref={imgUserMenu}
            className="w-full rounded-full"
            onClick={() =>
              !showUser
                ? (setShowUser(true),
                  setShowLive(false),
                  setShowNotificaton(false))
                : setShowUser(false)
            }
            src={userIcon}
            alt="userIcon"
          />
        </div>
        {showUser && (
          <span
            ref={userMenu}
            className=" absolute h-[600px] w-80 z-50 bg-gray-300 backdrop-blur-lg right-5 top-11 rounded-xl filter backdrop:blur-3xl"
          ></span>
        )}
      </div>
    </div>
  );
};

export default Header;
