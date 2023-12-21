import React from "react";
import {
  DASHBOARS_SIDEBAR_LNKS,
  DASHBOARS_SIDEBAR_BOTTOM_LNKS,
} from "./SideBarNavigation";
import { useNavigate, useLocation } from "react-router-dom";
import "C:/Users/Rani/Desktop/Network-DashBoard/src/Css/LogOutButton.css";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white rounded-se-3xl rounded-ee-3xl rounded-ss-3xl rounded-es-3xl h-full justify-around w-1/6">
      <div className="h-[80%] flex flex-col gap-5 justify-center">
        {DASHBOARS_SIDEBAR_LNKS.map((items) => (
          <div
            className="flex justify-center text-gray-500 font-semibold border-2 border-transparent
              hover:border-2 hover:border-r-transparent hover:border-l-transparent
             hover:text-white p-3 cursor-pointer"
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
            className="flex justify-center font-bold border-2 border-transparent cursor-pointer"
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
