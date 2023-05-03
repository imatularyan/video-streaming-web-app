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
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showNotification, setShowNotificaton] = useState(false);
  const [showLive, setShowLive] = useState(false);

  const dispatch = useDispatch();
  const query = useSuggestions(searchText, setSuggestions);
  useResults(query);

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
    <header>
      <div className="h-14 flex mx-auto items-center font-light px-7">
        <div className="flex justify-between w-32 shrink-0">
          <img
            className=" cursor-pointer"
            width="19"
            src={toogleicon}
            alt="toggleicon"
            onClick={() => toggleMenuHandler()}
          />
          <Link to="/">
            <img width="90" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex mx-auto rounded-full w-[600px] h-10 ">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="relative w-full outline-none rounded-l-full px-4 border border-gray-300 focus:border-blue-800 z-10 shadow-inner "
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <Link to="/result">
            <div className="rounded-r-full bg-gray-100 h-full w-[70px] border-l-0 border border-gray-300 p-[5px] cursor-pointer">
              <img
                width="28"
                className=" mx-auto"
                src={searchIcon}
                alt="searchIcon"
              />
            </div>
          </Link>
          {showSuggestions && (
            <ul
              className="bg-pink-700 h-96 transition delay-150 duration-300 ease-in-out absolute w-[530px] top-[52px] rounded-xl z-50 shadow-md"
              onBlur={() => {
                setShowSuggestions(false);
              }}
            >
              {suggestions?.map((searchList) => (
                <Link to="/result" key={searchList}>
                  <li className="py-1 px-3 my-1 hover:bg-gray-200 flex transition-transform duration-1000 font-roboto">
                    <img
                      className="w-6 mr-3"
                      src={searchIcon}
                      alt="searchIcon"
                    />
                    {searchList}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-4 items-center justify-center shrink-0">
          <div className="p-2 cursor-pointer rounded-full hover:bg-gray-200">
            <img
              ref={imgLive}
              className="w-5"
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
              className="p-3 leading-loose text-sm absolute h-fit w-36 z-50 bg-gray-200 backdrop-blur-lg right-5 top-12 rounded-xl filter backdrop:blur-3xl"
            >
              <ul>
                <Link to="">
                  <li onClick={() => setShowLive(false)}>Upload video</li>
                </Link>
                <Link to="">
                  <li>Go live</li>
                </Link>
                <Link to="">
                  <li>Create post</li>
                </Link>
              </ul>
            </span>
          )}
          <div className=" relative p-2 cursor-pointer rounded-full hover:bg-gray-200">
            <img
              ref={imgNotification}
              className="w-5"
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
              className=" absolute h-[400px] w-80 z-50 bg-gray-200 backdrop-blur-lg right-16 top-12 rounded-xl filter backdrop:blur-3xl"
            ></span>
          )}
          <div className=" relative cursor-pointer">
            <img
              ref={imgUserMenu}
              className="w-7 rounded-full hover:border-[1.5px] hover:border-blue-400 transition delay-75 duration-150 ease-in-out "
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
              className=" absolute h-[600px] w-80 z-50 bg-gray-200 backdrop-blur-lg right-5 top-12 rounded-xl filter backdrop:blur-3xl"
            ></span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
