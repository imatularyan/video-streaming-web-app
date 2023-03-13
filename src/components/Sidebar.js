import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className=" w-1/6 h-screen text-center px-3 overflow-scroll mt-2 text-sm font-medium">
      <h1 className="active:font-medium hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
        Home
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
  );
};

export default Sidebar;
