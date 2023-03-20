import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex font-roboto text-[#0f0f0f]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
