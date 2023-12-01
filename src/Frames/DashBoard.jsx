import React from "react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <div className="bg-slate-700 w-full h-full">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
