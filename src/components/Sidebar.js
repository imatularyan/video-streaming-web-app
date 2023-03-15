import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className=" flex-none min-w-max flex-col h-screen text-center p-5 text-base font-light font-sans overflow-auto">
      <div className=" w-52">
        <h1 className="active:font-medium hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-medium bg-gray-200">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="active:font-medium hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          Shorts
        </h1>
        <h1 className="active:font-medium hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          Subscriptions
        </h1>
        <hr className=" m-2"></hr>
        <ul>
          <li className="active:font-medium hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            Library
          </li>
          <li className="active:font-medium hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            History
          </li>
          <li className="active:font-medium hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            Your videos
          </li>
          <li className="active:font-medium hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            Your movies
          </li>
          <li className="active:font-medium hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            Watch Later
          </li>
        </ul>
        <hr className=" m-2"></hr>
      </div>
    </div>
  );
};

export default Sidebar;
