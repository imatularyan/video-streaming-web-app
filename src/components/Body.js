import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex font-roboto text-[#0f0f0f]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
