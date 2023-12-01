import React from "react";
import {
  DASHBOARS_SIDEBAR_LNKS,
  DASHBOARS_SIDEBAR_BOTTOM_LNKS,
} from "./SideBarNavigation";
import { useNavigate, useLocation } from "react-router-dom";
import "C:/Users/Rani/Desktop/frontend/src/Css/LogOutButton.css";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-slate-800 h-screen w-56">
      <div className="font-bold flex justify-center p-5 animate-pulse ">
        DashBoard
      </div>
      <div className="h-[80%] flex flex-col gap-5 justify-center">
        {DASHBOARS_SIDEBAR_LNKS.map((items) => (
          <div
            className="flex justify-center border-2 border-slate-800
             hover:border-gray-600 hover:border-2 hover:border-r-transparent hover:border-l-transparent
             hover:text-warmGray-100 p-3 cursor-pointer"
            onClick={() => navigate(items.Path)}
            key={items.key}
          >
            <button onClick={() => navigate(items.Path)}>{items.label}</button>
          </div>
        ))}
      </div>
      <div>
        {DASHBOARS_SIDEBAR_BOTTOM_LNKS.map((items) => (
          <div
            className="flex justify-center font-bold border-2 border-slate-800 cursor-pointer"
            key={items.key}
            onClick={() => navigate(items.Path)}
          >
            <button2 className="font-bold" onClick={() => navigate(items.Path)}>
              {items.label}
            </button2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
